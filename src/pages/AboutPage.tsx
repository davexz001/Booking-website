import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../data/content';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [studyImgError, setStudyImgError] = useState(false);

  return (
    <div>
      {/* Page Banner */}
      <section className="border-b border-stone-200/80 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Profile &amp; Literary Ethos
            </p>
            <h1 className="font-serif text-4xl text-[#162231] sm:text-5xl">About Becky Ronald</h1>
            <p className="mt-4 text-base leading-relaxed text-[#585f69] sm:text-lg">
              Independent book marketing and author visibility specialist dedicated to helping
              writers present their books clearly, strengthen discoverability, and build genuine
              connections with receptive readers.
            </p>
          </div>
        </div>
      </section>

      {/* Biography & Editorial Portrait */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <figure className="overflow-hidden rounded-md border border-stone-200 bg-white p-3">
              {!studyImgError ? (
                <img
                  src="/images/becky-ronald.jpg"
                  alt="Quiet private literary library with oak bookshelves, armchair, and open notebooks in afternoon light"
                  referrerPolicy="no-referrer"
                  onError={() => setStudyImgError(true)}
                  className="aspect-[3/4] w-full rounded-sm object-cover"
                />
              ) : (
                <div className="flex aspect-[3/4] items-center justify-center rounded-sm bg-[#f1ebe1] p-8 text-center">
                  <p className="font-serif text-2xl italic text-[#162231]">
                    Thoughtful research. Strategic book positioning.
                  </p>
                </div>
              )}
              <figcaption className="px-2 pt-3 pb-1 text-xs font-serif italic text-[#585f69]">
                Independent literary marketing built on careful reading, research, and transparency.
              </figcaption>
            </figure>
          </div>

          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-[#272d35] lg:col-span-7">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Consultancy Philosophy
            </p>
            <h2 className="font-serif text-3xl text-[#162231] sm:text-4xl">
              An Individual, Research-Driven Approach to Book Visibility
            </h2>

            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-5xl first-letter:font-medium first-letter:leading-none first-letter:text-[#162231]">
              Becky Ronald is an independent book marketing specialist whose work centers on a clear
              conviction: good books deserve to be understood accurately by the readers most likely
              to value them. Drawn deeply to literature and the evolving landscape of modern
              publishing, she focuses on helping authors bridge the gap between completing a work
              and presenting it effectively to the reading world.
            </p>
            <p>
              Across traditional publishing, independent presses, and self-publishing, writers
              frequently encounter the same obstacle—capable manuscripts presented with unclear
              descriptions, misaligned categories, or generic promotional tactics that fail to honor
              the tone of the writing.
            </p>
            <p>
              Rather than offering standardized marketing packages or inflated promises, Becky
              approaches every author relationship with attentiveness, transparency, and respect
              for the writer’s literary identity. Each engagement prioritizes careful research into
              how readers browse, evaluate, and discuss books within a specific genre or subject
              area.
            </p>
          </div>
        </div>
      </section>

      {/* Required Section: How I Approach Every Book */}
      <section className="border-y border-stone-200/80 bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Core Principle
            </p>
            <h2 className="font-serif text-3xl text-[#162231] sm:text-4xl">
              How I Approach Every Book
            </h2>
            <p className="mt-4 font-serif text-xl italic text-[#585f69]">
              “Every book has a different audience, positioning, and promotional opportunity.”
            </p>
          </div>

          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-[#272d35] lg:col-span-7">
            <p>
              A lyric poetry collection written across cultures cannot be marketed with the same
              playbook as a contemporary historical mystery or an interdisciplinary history title.
              Before recommending any marketing activity, four foundations must be examined closely:
            </p>

            <div className="grid gap-6 border-y border-stone-200 py-6 sm:grid-cols-2">
              <div>
                <h3 className="font-serif text-xl text-[#162231]">01. The Book Itself</h3>
                <p className="mt-1.5 text-sm text-[#585f69]">
                  Understanding its genre, narrative or thematic arc, literary voice, and publishing
                  circumstances.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#162231]">02. Existing Presentation</h3>
                <p className="mt-1.5 text-sm text-[#585f69]">
                  Evaluating how cover cues, descriptions, author biographies, and retailer listings
                  communicate to a first-time browser.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#162231]">03. Target Readers</h3>
                <p className="mt-1.5 text-sm text-[#585f69]">
                  Identifying which readers genuinely seek out comparable works—and which reading
                  groups or communities they gather in.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#162231]">04. Current Discoverability</h3>
                <p className="mt-1.5 text-sm text-[#585f69]">
                  Examining search terminology, category placement, Goodreads edition alignment,
                  and cross-platform metadata consistency.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('approach')}
                className="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-[#162231] px-5 py-3 text-sm font-semibold text-[#faf7f2] transition-colors hover:bg-[#23344a]"
              >
                Explore the Five-Stage Process
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex cursor-pointer items-center rounded-sm border border-stone-300 px-5 py-3 text-sm font-semibold text-[#162231] transition-colors hover:border-[#162231]"
              >
                Discuss Your Book
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Consultancy Serves */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Authors &amp; Publishers
            </p>
            <h2 className="font-serif text-3xl text-[#162231] sm:text-4xl">
              Supporting Writers Across Genres, Borders, and Publishing Paths
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-md border border-stone-200 bg-white p-7">
              <h3 className="font-serif text-2xl text-[#162231]">
                Traditional, Self-Published &amp; Independent Presses
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#585f69]">
                Whether complementing an imprint’s release or guiding an independent publication
                from scratch, recommendations adapt realistically to your publishing arrangement.
              </p>
            </div>

            <div className="rounded-md border border-stone-200 bg-white p-7">
              <h3 className="font-serif text-2xl text-[#162231]">
                Fiction, Nonfiction &amp; Poetry
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#585f69]">
                From literary novels and genre fiction to cultural history, essays, memoir, and
                poetry collections, each title is evaluated on the terms of its own readership.
              </p>
            </div>

            <div className="rounded-md border border-stone-200 bg-white p-7">
              <h3 className="font-serif text-2xl text-[#162231]">
                International &amp; Emerging Voices
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#585f69]">
                Welcoming both emerging writers and established authors across different countries
                seeking thoughtful positioning and cross-border reader communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
