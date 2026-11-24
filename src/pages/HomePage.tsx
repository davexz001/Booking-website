import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId, PLATFORM_EXHIBITS, PORTFOLIO_PROJECTS, SITE_IMAGES } from '../data/content';
import { BookCoverFrame } from '../components/BookCoverFrame';

interface HomePageProps {
  onNavigate: (page: PageId, serviceInterest?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [heroImgError, setHeroImgError] = useState(false);
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 2);

  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-stone-200/80 py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-stretch gap-12 px-6 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Becky Ronald · Independent Book Marketing &amp; Author Visibility Specialist
            </p>
            <h1 className="max-w-2xl font-serif text-[clamp(2.35rem,4.3vw,3.75rem)] leading-[1.1] tracking-tight text-[#162231]">
              Every Book Has a Story. Every Story Deserves to Be Discovered.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#585f69] sm:text-lg">
              I help authors strengthen their book presentation, improve discoverability and connect
              with relevant reading communities through thoughtful research and strategic book
              marketing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-[#162231] px-6 py-3.5 text-sm font-semibold text-[#faf7f2] transition-colors hover:bg-[#23344a]"
              >
                Explore My Services
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex cursor-pointer items-center rounded-sm border border-stone-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#162231] transition-colors hover:border-[#162231]"
              >
                Discuss Your Book
              </button>
            </div>

            <div className="mt-10 border-t border-stone-200/90 pt-6">
              <p className="font-serif text-xl italic text-[#162231]">
                “Helping authors connect their books with the readers who will appreciate them.”
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#585f69]">
                Thoughtful research · Strategic book positioning · Meaningful reader connections
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="flex h-full flex-col justify-between overflow-hidden rounded-md border border-stone-200 bg-white p-3">
              {!heroImgError ? (
                <img
                  src={SITE_IMAGES.heroDesk}
                  alt="Study desk with clothbound books, manuscript pages, and fountain pen in natural window light"
                  referrerPolicy="no-referrer"
                  onError={() => setHeroImgError(true)}
                  className="aspect-[4/3] w-full rounded-sm object-cover lg:h-full"
                />
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-sm bg-[#f1ebe1] p-8 text-center lg:h-full">
                  <p className="font-serif text-2xl italic text-[#162231]">
                    Literary Positioning &amp; Discoverability Practice
                  </p>
                </div>
              )}
              <figcaption className="px-2 pt-3 pb-1 text-xs font-serif italic text-[#585f69]">
                Literary presentation, metadata accuracy, and reader-community alignment for authors worldwide.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Introduction to the Consultancy */}
      <section className="border-b border-stone-200/80 bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              The Consultancy
            </p>
            <h2 className="font-serif text-3xl leading-tight text-[#162231] sm:text-4xl">
              Thoughtful Research Over Generic Promotion
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#585f69]">
              Meaningful visibility begins with understanding the book itself—its genre, literary
              voice, intended audience, and how it is currently presented across discovery
              platforms.
            </p>
          </div>

          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-[#272d35] lg:col-span-7">
            <p>
              Authors invest months or years shaping a manuscript, yet many accomplished books
              struggle to find their readership simply because their descriptions, metadata, or
              outreach pathways do not reflect how real readers search and browse.
            </p>
            <p>
              Working independently with traditionally published writers, self-published authors,
              poets, and small presses across different countries, Becky Ronald offers specialist,
              research-led guidance tailored to each title’s true literary identity.
            </p>

            <div className="grid gap-6 border-t border-stone-200 pt-6 sm:grid-cols-3">
              <div>
                <h3 className="font-serif text-xl text-[#162231]">Presentation Clarity</h3>
                <p className="mt-1.5 text-sm text-[#585f69]">
                  Refining book descriptions, profiles, and positioning cues so readers grasp the
                  work immediately.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#162231]">Informed Discovery</h3>
                <p className="mt-1.5 text-sm text-[#585f69]">
                  Examining reader search habits across Amazon and Goodreads to guide categories and
                  keywords.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#162231]">Ethical Outreach</h3>
                <p className="mt-1.5 text-sm text-[#585f69]">
                  Identifying relevant book clubs, literary circles, and advance readers without
                  empty promises.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex cursor-pointer items-center gap-2 border-b border-[#b38e4c] pb-0.5 text-sm font-semibold text-[#162231] transition-colors hover:text-[#7c5c22]"
              >
                Read About Becky Ronald
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Marketing Services */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Specialist Services
            </p>
            <h2 className="font-serif text-3xl text-[#162231] sm:text-4xl">
              Focused Support Across Presentation, Metadata, and Reader Outreach
            </h2>
            <p className="mt-3 text-base text-[#585f69]">
              Every service centers on literary understanding, accurate platform representation, and
              realistic pathways to appropriate readers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="flex flex-col justify-between rounded-md border border-stone-200/90 bg-white p-7">
              <div>
                <p className="font-serif text-lg text-[#7c5c22]">01</p>
                <h3 className="mt-2 font-serif text-2xl text-[#162231]">
                  Amazon Book Listing &amp; SEO Research
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#585f69]">
                  Book description improvement, keyword research, category alignment, metadata
                  evaluation, and clear author and series presentation.
                </p>
              </div>
              <div className="mt-6 border-t border-stone-100 pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-[#162231] hover:text-[#7c5c22]"
                >
                  Explore Listing Services
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-md border border-stone-200/90 bg-white p-7">
              <div>
                <p className="font-serif text-lg text-[#7c5c22]">02</p>
                <h3 className="mt-2 font-serif text-2xl text-[#162231]">
                  Goodreads Profile &amp; Listopia Research
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#585f69]">
                  Organizing accurate edition details and author profiles alongside research into
                  reader-created book lists that surface natural discovery contexts.
                </p>
              </div>
              <div className="mt-6 border-t border-stone-100 pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-[#162231] hover:text-[#7c5c22]"
                >
                  Explore Goodreads Support
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-md border border-stone-200/90 bg-white p-7">
              <div>
                <p className="font-serif text-lg text-[#7c5c22]">03</p>
                <h3 className="mt-2 font-serif text-2xl text-[#162231]">
                  ARC Campaigns &amp; Book Club Outreach
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#585f69]">
                  Thoughtful advance reader copy planning, ethical review invitations, and targeted
                  outreach to book clubs and literary reading communities.
                </p>
              </div>
              <div className="mt-6 border-t border-stone-100 pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-[#162231] hover:text-[#7c5c22]"
                >
                  Explore Outreach Services
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex cursor-pointer items-center gap-2 rounded-sm border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#162231] transition-colors hover:border-[#162231]"
            >
              View All Nine Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Research-Driven Approach Preview */}
      <section className="border-y border-stone-200/80 bg-[#f1ebe1] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
                Methodology
              </p>
              <h2 className="font-serif text-3xl text-[#162231] sm:text-4xl">
                A Five-Stage Research Approach for Every Book
              </h2>
              <p className="mt-3 text-base text-[#585f69]">
                Recommendations are never formed before examining the manuscript’s identity,
                existing presentation, and true readership.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('approach')}
              className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-sm bg-[#162231] px-5 py-3 text-sm font-semibold text-[#faf7f2] transition-colors hover:bg-[#23344a]"
            >
              Read the Full Process
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ['01', 'Understanding the Book', 'Genre, storyline, themes, literary identity, and background.'],
              ['02', 'Discoverability Research', 'Auditing current presentation across Amazon and Goodreads.'],
              ['03', 'Audience Identification', 'Mapping relevant reading communities and book clubs.'],
              ['04', 'Strategy Development', 'Tailored recommendations built around actual book needs.'],
              ['05', 'Implementation & Review', 'Measured rollout and qualitative evaluation of response.'],
            ].map(([num, title, desc]) => (
              <div key={num} className="rounded-md border border-stone-300/70 bg-[#faf7f2] p-5">
                <div className="font-serif text-2xl tabular-nums text-[#7c5c22]">{num}</div>
                <h3 className="mt-2 font-serif text-xl text-[#162231]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#585f69]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sample Book Analyses */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Portfolio &amp; Analytical Work
            </p>
            <h2 className="font-serif text-3xl text-[#162231] sm:text-4xl">
              Featured Sample Book Analyses
            </h2>
            <p className="mt-3 text-base text-[#585f69]">
              Demonstration projects illustrating how discoverability observations, positioning, and
              promotional channels are evaluated across genres.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="grid gap-6 rounded-md border border-stone-200 bg-[#faf7f2] p-6 sm:grid-cols-12 sm:items-start"
              >
                <div className="sm:col-span-5">
                  <BookCoverFrame project={project} />
                </div>
                <div className="flex h-full flex-col justify-between sm:col-span-7">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7c5c22]">
                      {project.designation}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-[#162231]">{project.title}</h3>
                    <p className="mt-1 text-xs font-medium text-[#585f69]">
                      {project.genre} · {project.author}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#272d35]">{project.overview}</p>
                  </div>
                  <div className="mt-5 border-t border-stone-200 pt-4">
                    <button
                      type="button"
                      onClick={() => onNavigate('portfolio')}
                      className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-[#162231] hover:text-[#7c5c22]"
                    >
                      Examine Full Sample Analysis
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-stone-200 pt-12">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
                Platform Visibility Samples
              </p>
              <h3 className="font-serif text-2xl text-[#162231] sm:text-3xl">
                Amazon &amp; Goodreads Presentation References
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#585f69]">
                Visual examples of Goodreads Listopia placement, reader review presentation, and
                before-and-after Amazon listing visibility.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {PLATFORM_EXHIBITS.flatMap((exhibit) =>
                exhibit.images.map((img) => (
                  <article
                    key={img.src}
                    className="flex flex-col justify-between rounded-md border border-stone-200 bg-[#faf7f2] p-5"
                  >
                    <div>
                      <div className="overflow-hidden rounded-sm border border-stone-200 bg-white p-2">
                        <img
                          src={img.src}
                          alt={img.alt}
                          referrerPolicy="no-referrer"
                          className="aspect-[16/10] w-full object-contain bg-stone-50"
                        />
                      </div>
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7c5c22]">
                        {img.caption}
                      </p>
                      <h4 className="mt-1.5 font-serif text-xl text-[#162231]">{exhibit.title}</h4>
                      <p className="mt-1 text-xs text-[#585f69]">
                        by {exhibit.author} · {exhibit.genre}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-stone-200 pt-3">
                      <button
                        type="button"
                        onClick={() => onNavigate('portfolio')}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-[#162231] hover:text-[#7c5c22]"
                      >
                        Inspect Full Exhibit in Portfolio
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="inline-flex cursor-pointer items-center gap-2 rounded-sm border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#162231] transition-colors hover:border-[#162231]"
            >
              View All Sample Projects
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Author-Focused Call to Action */}
      <section className="bg-[#162231] py-16 text-[#faf7f2] lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#dec187]">
            Begin a Conversation
          </p>
          <h2 className="font-serif text-3xl text-[#faf7f2] sm:text-4xl">
            Let’s Explore What Could Help Your Book Reach Its Readers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#c8cfd8]">
            Whether you are preparing a debut release, refining an existing book’s listing, or
            seeking international reading communities, thoughtful positioning starts with an honest
            look at your work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="cursor-pointer rounded-sm bg-[#faf7f2] px-6 py-3.5 text-sm font-semibold text-[#162231] transition-colors hover:bg-[#efe7da]"
            >
              Discuss Your Book
            </button>
            <button
              type="button"
              onClick={() => onNavigate('resources')}
              className="cursor-pointer rounded-sm border border-white/30 px-6 py-3.5 text-sm font-semibold text-[#faf7f2] transition-colors hover:border-white"
            >
              Browse Author Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
