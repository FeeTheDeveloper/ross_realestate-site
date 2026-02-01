import { listings } from "../../lib/listings";
import { ListingCard } from "../../components/listings/ListingCard";
import { SignatureMotion } from "../../components/SignatureMotion";

export default function ListingsPage() {
  return (
    <main className="bg-brand-white text-brand-navy">
      <section className="container-site flex flex-col items-center gap-6 py-24 text-center">
        <SignatureMotion as="h1" className="font-serif text-4xl text-brand-navy sm:text-5xl">
          Signature Listings
        </SignatureMotion>
        <p className="max-w-2xl text-sm leading-relaxed text-brand-navy/80">
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
