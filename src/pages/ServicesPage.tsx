import { ArrowRight } from 'lucide-react';
import { PageId, SERVICES } from '../data/content';

interface ServicesPageProps {
  onNavigate: (page: PageId, serviceInterest?: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div>
      {/* Page Banner */}
      <section className="border-b border-stone-200/80 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Consultancy Services
            </p>
            <h1 className="font-serif text-4xl text-[#162231] sm:text-5xl">
              Book Marketing &amp; Visibility Services
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#585f69] sm:text-lg">
              Each service focuses on strengthening how a book is presented, understood, and
              discovered by appropriate readers. Services may be engaged individually or combined
              into a tailored plan following an initial review of your book.
            </p>
          </div>
        </div>
      </section>

      {/* Ethical Transparency Bar */}
      <section className="border-b border-stone-200/80 bg-[#f1ebe1] py-6">
        <div className="mx-auto max-w-6xl px-6 text-sm leading-relaxed text-[#272d35]">
          <span className="font-semibold text-[#162231]">Commitment to Realistic Practice: </span>
          Book marketing works through clear presentation, thoughtful research, and honest reader
          outreach. No service promises guaranteed sales figures, bestseller rankings, list
          placements, or reviews.
        </div>
      </section>

      {/* All 9 Services */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="grid gap-6 rounded-md border border-stone-200/90 bg-white p-7 sm:p-9 lg:grid-cols-12"
            >
              <div className="border-b border-stone-200 pb-4 lg:col-span-1 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
                <span className="font-serif text-3xl tabular-nums text-[#7c5c22]">
                  {service.number}
                </span>
              </div>

              <div className="lg:col-span-11">
                <h2 className="font-serif text-2xl text-[#162231] sm:text-3xl">{service.title}</h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#272d35]">
                  {service.description}
                </p>

                <div className="my-6 grid gap-6 border-y border-stone-200/80 py-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#162231]">
                      What This Service Involves
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#585f69]">
                      {service.involves.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#162231]">
                      Potential Value to Authors
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#585f69]">
                      {service.valueToAuthors}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('contact', service.title)}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-[#162231] px-5 py-2.5 text-sm font-semibold text-[#faf7f2] transition-colors hover:bg-[#23344a]"
                >
                  {service.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-stone-200/80 bg-[#f1ebe1] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
            Tailored Scope
          </p>
          <h2 className="font-serif text-3xl text-[#162231] sm:text-4xl">
            Unsure Which Service Suits Your Book Right Now?
          </h2>
          <p className="mt-4 text-base text-[#585f69]">
            Tell me a little about your title, genre, and publishing stage, and we can discuss which
            research or visibility steps would be most helpful.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="mt-7 cursor-pointer rounded-sm bg-[#162231] px-6 py-3.5 text-sm font-semibold text-[#faf7f2] transition-colors hover:bg-[#23344a]"
          >
            Discuss Your Book
          </button>
        </div>
      </section>
    </div>
  );
}
