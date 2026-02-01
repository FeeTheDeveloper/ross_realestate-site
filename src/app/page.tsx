import { SignatureMotion } from "../components/SignatureMotion";
import { InstagramFeed } from "../components/InstagramFeed";

export default function HomePage() {
  return (
    <main className="bg-primary text-secondary">
      {/* Remove after verification */}
      <div className="bg-accent py-4 text-center text-xs font-semibold uppercase tracking-[0.5em] text-primary sm:text-sm">
        TAILWIND ACTIVE
      </div>

      <section className="container-site flex min-h-[85vh] flex-col justify-center gap-8 py-32">
        <SignatureMotion as="p" className="text-xs uppercase tracking-[0.4em] text-accent">
          Ted Ross Real Estate
        </SignatureMotion>
        <SignatureMotion
          as="h1"
          className="max-w-4xl font-serif text-5xl leading-tight text-secondary sm:text-6xl lg:text-7xl"
        >
          A cinematic, editorial approach to iconic addresses and quiet power.
        </SignatureMotion>
        <SignatureMotion
          as="p"
          className="max-w-2xl text-base leading-relaxed text-secondary/80 sm:text-lg"
        >
          We curate luxury residential experiences with refined discretion, clear positioning,
          and a modern understanding of what prestige feels like.
        </SignatureMotion>
        <div className="flex flex-col gap-4 sm:flex-row">
          <SignatureMotion
            as="button"
            animateOnLoad={false}
            isButton
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition-transform duration-300 hover:-translate-y-0.5"
          >
            Request a Private Brief
          </SignatureMotion>
          <SignatureMotion
            as="button"
            animateOnLoad={false}
            isButton
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-secondary/40 px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-secondary transition-transform duration-300 hover:-translate-y-0.5"
          >
            View Signature Listings
          </SignatureMotion>
        </div>
      </section>

      <section className="border-t border-secondary/10 bg-secondary py-24 text-primary sm:py-32">
        <div className="container-site space-y-10">
          <SignatureMotion as="h2" className="font-serif text-3xl text-primary sm:text-4xl">
            Editorially curated homes with global perspective.
          </SignatureMotion>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Private acquisitions",
                description:
                  "Discreet advisory for clients pursuing legacy properties and off-market opportunities."
              },
              {
                title: "Architectural storytelling",
                description:
                  "Each residence is positioned with refined language, imagery, and buyer intent."
              },
              {
                title: "Precision negotiations",
                description:
                  "Measured strategy and calm execution, designed to protect your time and capital."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-primary/10 bg-white/70 p-6"
              >
                <SignatureMotion as="h3" className="font-serif text-xl text-primary">
                  {item.title}
                </SignatureMotion>
                <p className="mt-3 text-sm leading-relaxed text-primary/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-site space-y-10">
          <div className="space-y-4">
            <SignatureMotion as="h2" className="font-serif text-3xl text-secondary sm:text-4xl">
              A lifestyle lens from our private portfolio.
            </SignatureMotion>
            <p className="max-w-2xl text-sm leading-relaxed text-secondary/80">
              Follow the atmosphere behind our listings, partnerships, and client experiences.
            </p>
          </div>
          <InstagramFeed />
        </div>
      </section>

      <section className="border-t border-secondary/10 py-24 sm:py-32">
        <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <SignatureMotion as="h2" className="font-serif text-3xl text-secondary sm:text-4xl">
              Calm representation, global access.
            </SignatureMotion>
            <p className="text-sm leading-relaxed text-secondary/80">
              Whether you are securing a penthouse retreat or listing a landmark estate, Ted Ross
              Real Estate delivers high-authority guidance with a steady hand.
            </p>
          </div>
          <div className="rounded-2xl border border-secondary/15 bg-primary/70 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Availability</p>
            <p className="mt-4 text-lg text-secondary">
              Accepting a limited number of private clients.
            </p>
            <SignatureMotion
              as="button"
              animateOnLoad={false}
              isButton
              type="button"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-accent bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition-transform duration-300 hover:-translate-y-0.5"
            >
              Schedule a Consultation
            </SignatureMotion>
          </div>
        </div>
      </section>
    </main>
  );
}
