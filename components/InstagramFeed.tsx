"use client";

import { useEffect, useState } from "react";

type InstagramPost = {
  id: string;
  media_url: string;
  media_type: "IMAGE" | "CAROUSEL_ALBUM" | "VIDEO";
  permalink: string;
  thumbnail_url?: string;
};

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");

  useEffect(() => {
    const userId = process.env.NEXT_PUBLIC_IG_USER_ID;
    const token = process.env.NEXT_PUBLIC_IG_TOKEN;

    if (!userId || !token) {
      setStatus("error");
      return;
    }

    let isMounted = true;
    const loadPosts = async () => {
      setStatus("loading");
      try {
        const response = await fetch(
          `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=${token}`
        );

        if (!response.ok) {
          throw new Error("Failed to load Instagram feed.");
        }

        const data = (await response.json()) as { data: InstagramPost[] };

        if (isMounted) {
          setPosts(data.data ?? []);
          setStatus("success");
        }
      } catch {
        if (isMounted) {
          setStatus("error");
        }
      }
    };

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  if (status === "error") {
    return (
      <div className="rounded-2xl border border-warm-ivory/20 bg-charcoal/60 p-8 text-warm-ivory">
        <p className="text-sm uppercase tracking-[0.3em] text-bronze">Instagram</p>
        <p className="mt-3 text-lg font-medium">
          Lifestyle updates are currently offline. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {status === "loading" &&
        Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`loading-${index}`}
            className="aspect-[4/5] rounded-2xl bg-charcoal/70"
          />
        ))}
      {status === "success" &&
        posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal"
          >
            <img
              src={
                post.media_type === "VIDEO"
                  ? post.thumbnail_url ?? post.media_url
                  : post.media_url
              }
              alt="Instagram post"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-jet/20 opacity-0 transition duration-500 group-hover:opacity-100" />
          </a>
        ))}
    </div>
  );
}
