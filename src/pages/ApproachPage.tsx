import { ArrowRight } from 'lucide-react';
import { APPROACH_STAGES, PageId } from '../data/content';

interface ApproachPageProps {
  onNavigate: (page: PageId) => void;
}

export function ApproachPage({ onNavigate }: ApproachPageProps) {
  return (
    <div>
      {/* Page Banner */}
      <section className="border-b border-stone-200/80 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Methodology
            </p>
            <h1 className="font-serif text-4xl text-[#162231] sm:text-5xl">
              My Approach: A Five-Stage Editorial &amp; Research Process
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#585f69] sm:text-lg">
              Thoughtful book marketing is diagnostic before it is promotional. Rather than applying
              the same template to every title, each book moves through five deliberate stages of
              understanding, research, strategy, and evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Five-Stage Editorial Timeline */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative space-y-8">
            {APPROACH_STAGES.map((stage) => (
              <article
                key={stage.stageNumber}
                className="grid gap-8 rounded-md border border-stone-200/90 bg-white p-7 sm:p-10 lg:grid-cols-12"
              >
                <div className="border-b border-stone-200 pb-6 lg:col-span-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7c5c22]">
                    {stage.label}
                  </p>
                  <div className="mt-2 font-serif text-5xl tabular-nums leading-none text-[#162231]">
                    {stage.stageNumber}
                  </div>
                  <h2 className="mt-4 font-serif text-3xl text-[#162231]">{stage.title}</h2>
                </div>

                <div className="lg:col-span-8">
                  <p className="max-w-2xl text-base leading-relaxed text-[#272d35]">
                    {stage.summary}
                  </p>

                  <div className="mt-6 grid gap-5 border-t border-stone-200/80 pt-6 sm:grid-cols-2">
                    {stage.points.map((pt) => (
                      <div key={pt.heading}>
                        <h3 className="font-sans text-sm font-semibold text-[#162231]">
                          {pt.heading}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#585f69]">{pt.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="bg-[#162231] py-16 text-[#faf7f2]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#dec187]">
            Applied Research
          </p>
          <h2 className="font-serif text-3xl text-[#faf7f2] sm:text-4xl">
            See This Five-Stage Thinking Applied Across Genres
          </h2>
          <p className="mt-4 text-base text-[#c8cfd8]">
            Browse demonstration sample projects illustrating how book identity, metadata
            observations, and audience channels align for literary fiction, nonfiction, poetry, and
            historical mystery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-[#faf7f2] px-6 py-3.5 text-sm font-semibold text-[#162231] transition-colors hover:bg-[#efe7da]"
            >
              View Sample Portfolio
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="cursor-pointer rounded-sm border border-white/30 px-6 py-3.5 text-sm font-semibold text-[#faf7f2] transition-colors hover:border-white"
            >
              Discuss Your Book
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
