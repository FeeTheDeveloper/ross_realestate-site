import { listings } from "../../lib/listings";
import { ListingCard } from "../../components/listings/ListingCard";
import { SignatureMotion } from "../../components/SignatureMotion";
import { BrandLogo } from "../../components/brand/BrandLogo";

export default function ListingsPage() {
  return (
    <main className="bg-jet text-ivory">
      <section className="container-site flex flex-col items-center gap-6 py-20 text-center">
        <BrandLogo size="sm" />
        <SignatureMotion as="h1" className="font-serif text-4xl text-ivory sm:text-5xl">
          Signature Listings
        </SignatureMotion>
        <p className="max-w-2xl text-sm leading-relaxed text-warm-ivory">
          A handpicked collection of rare residences and architectural statements curated for
          discerning clients.
        </p>
      </section>

      <section className="container-site grid gap-8 pb-24 lg:grid-cols-3">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </section>
    </main>
  );
}
