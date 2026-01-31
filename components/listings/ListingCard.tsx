import Image from "next/image";
import type { Listing } from "../../lib/listings";
import { SignatureMotion } from "../SignatureMotion";

const statClass = "text-xs uppercase tracking-[0.3em] text-bronze";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <SignatureMotion
      as="article"
      className="overflow-hidden rounded-3xl border border-warm-ivory/10 bg-jet/70"
    >
      <div className="relative h-56 w-full">
        <Image
          src={listing.image}
          alt={listing.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <p className={statClass}>{listing.location}</p>
          <h3 className="font-serif text-2xl text-ivory">{listing.title}</h3>
          <p className="text-sm text-warm-ivory">{listing.price}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-warm-ivory">
          <span>{listing.beds} Beds</span>
          <span>{listing.baths} Baths</span>
          <span>{listing.sqft} Sq Ft</span>
        </div>
      </div>
    </SignatureMotion>
  );
}
