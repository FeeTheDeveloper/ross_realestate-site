import Image from "next/image";
import type { Listing } from "../../lib/listings";
import { SignatureMotion } from "../SignatureMotion";

const statClass = "text-xs uppercase tracking-[0.3em] text-brand-gold";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <SignatureMotion
      as="article"
      className="overflow-hidden rounded-3xl border border-brand-navy/10 bg-brand-softWhite transition hover:border-brand-gold"
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
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <p className={statClass}>{listing.location}</p>
            <span className="rounded-full bg-brand-red px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-brand-white">
              Available
            </span>
          </div>
          <h3 className="font-serif text-2xl text-brand-navy">{listing.title}</h3>
          <p className="text-sm font-medium text-brand-navy">{listing.price}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-brand-navy/70">
          <span>{listing.beds} Beds</span>
          <span>{listing.baths} Baths</span>
          <span>{listing.sqft} Sq Ft</span>
        </div>
      </div>
    </SignatureMotion>
  );
}
