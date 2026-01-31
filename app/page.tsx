import Image from "next/image";
import { SignatureMotion } from "../components/SignatureMotion";
import { InstagramFeed } from "../components/InstagramFeed";
import { BrandFlow } from "../components/brand/BrandFlow";

export default function HomePage() {
  return (
    <BrandFlow>
      <main className="bg-jet text-ivory">
        <section className="container-site flex min-h-[85vh] flex-col justify-center gap-10 py-20">
          <div className="flex flex-col items-start gap-6">
            <SignatureMotion as="div" className="w-40">
              <Image
                src="/brand/signature/signature.svg"
                alt="Tross Realtor signature"
                width={160}
                height={40}
                className="h-auto w-full"
              />
            </SignatureMotion>
          </div>
          <SignatureMotion as="p" className="text-xs uppercase tracking-[0.4em] text-bronze">
            Tross 3rd Realtor
          </SignatureMotion>
          <SignatureMotion
            as="h1"
            className="max-w-3xl font-serif text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl"
          >
            A quiet authority for those who collect rare addresses.
          </SignatureMotion>
          <SignatureMotion
            as="p"
            className="max-w-2xl text-base leading-relaxed text-warm-ivory sm:text-lg"
          >
            We curate luxury residential experiences with an editorial eye, refined discretion,
            and a modern understanding of what prestige truly feels like.
          </SignatureMotion>
          <div className="flex flex-col gap-4 sm:flex-row">
            <SignatureMotion
              as="button"
              animateOnLoad={false}
              isButton
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-bronze bg-bronze px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-jet transition-transform duration-300 hover:-translate-y-0.5"
            >
              Request a Private Brief
            </SignatureMotion>
            <SignatureMotion
              as="button"
              animateOnLoad={false}
              isButton
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-warm-ivory/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-warm-ivory transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Signature Listings
            </SignatureMotion>
          </div>
        </section>

        <section className="border-t border-warm-ivory/10 bg-charcoal/40 py-20">
          <div className="container-site space-y-10">
            <SignatureMotion as="h2" className="font-serif text-3xl text-ivory sm:text-4xl">
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
                  className="rounded-2xl border border-warm-ivory/10 bg-jet/60 p-6"
                >
                  <SignatureMotion as="h3" className="font-serif text-xl text-ivory">
                    {item.title}
                  </SignatureMotion>
                  <p className="mt-3 text-sm leading-relaxed text-warm-ivory">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-site space-y-10">
            <div className="space-y-4">
              <SignatureMotion as="h2" className="font-serif text-3xl text-ivory sm:text-4xl">
                A lifestyle lens from our private portfolio.
              </SignatureMotion>
              <p className="max-w-2xl text-sm leading-relaxed text-warm-ivory">
                Follow the atmosphere behind our listings, partnerships, and client experiences.
              </p>
            </div>
            <InstagramFeed />
          </div>
        </section>

        <section className="border-t border-warm-ivory/10 py-20">
          <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <SignatureMotion as="h2" className="font-serif text-3xl text-ivory sm:text-4xl">
                Calm representation, global access.
              </SignatureMotion>
              <p className="text-sm leading-relaxed text-warm-ivory">
                Whether you are securing a penthouse retreat or listing a landmark estate, Tross
                3rd Realtor delivers high-authority guidance with a steady hand.
              </p>
            </div>
            <div className="rounded-2xl border border-warm-ivory/15 bg-charcoal/60 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-bronze">Availability</p>
              <p className="mt-4 text-lg text-ivory">
                Accepting a limited number of private clients.
              </p>
              <SignatureMotion
                as="button"
                animateOnLoad={false}
                isButton
                type="button"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-bronze bg-bronze px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-jet transition-transform duration-300 hover:-translate-y-0.5"
              >
                Schedule a Consultation
              </SignatureMotion>
            </div>
          </div>
        </section>
      </main>
    </BrandFlow>
  );
}
