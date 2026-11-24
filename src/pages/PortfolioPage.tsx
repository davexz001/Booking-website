import { useState } from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import {
  PageId,
  PLATFORM_EXHIBITS,
  PORTFOLIO_PROJECTS,
  PortfolioProject,
} from '../data/content';
import { BookCoverFrame } from '../components/BookCoverFrame';
import { EditorialModal } from '../components/EditorialModal';

interface PortfolioPageProps {
  onNavigate: (page: PageId, serviceInterest?: string) => void;
}

const GENRE_FILTERS = [
  'All Genres',
  'Literary Fiction',
  'Narrative Nonfiction',
  'Poetry',
  'Historical & International Fiction',
];

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [activeExhibitImage, setActiveExhibitImage] = useState<{
    src: string;
    alt: string;
    caption: string;
    bookTitle: string;
  } | null>(null);

  const visibleProjects =
    selectedGenre === 'All Genres'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.genre === selectedGenre);

  return (
    <div>
      {/* Page Banner */}
      <section className="border-b border-stone-200/80 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Strategic Research Showcase
            </p>
            <h1 className="font-serif text-4xl text-[#162231] sm:text-5xl">
              Portfolio &amp; Sample Projects
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#585f69] sm:text-lg">
              Platform visibility exhibits and sample book-marketing analyses illustrating how
              literary positioning, discoverability observations, and reader-community channels are
              evaluated across genres.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Notice */}
      <section className="border-b border-stone-200/80 bg-[#f1ebe1] py-6">
        <div className="mx-auto max-w-6xl px-6 text-sm leading-relaxed text-[#272d35]">
          <span className="font-semibold text-[#162231]">Sample &amp; Reference Designation: </span>
          Items below include visual platform presentation samples and{' '}
          <span className="font-semibold text-[#162231]">
            Independent Sample Analysis – Demonstration Projects
          </span>{' '}
          to illustrate Amazon and Goodreads positioning, Listopia research, and reader-community
          strategy without implying official platform affiliation.
        </div>
      </section>

      {/* Platform Presentation Samples (Visual Reference Exhibits) */}
      <section className="border-b border-stone-200/80 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Visual Platform Samples
            </p>
            <h2 className="font-serif text-3xl text-[#162231] sm:text-4xl">
              Amazon &amp; Goodreads Visibility Samples
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#585f69] sm:text-base">
              Visual exhibits demonstrating Goodreads Listopia context, review presentation, blurb
              formatting, and before-and-after rating visibility across retail and reader
              platforms. Select any image to inspect full details.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {PLATFORM_EXHIBITS.map((exhibit) => (
              <article
                key={exhibit.id}
                className="rounded-md border border-stone-200 bg-[#faf7f2] p-6 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-4 border-b border-stone-200 pb-6 lg:flex-row lg:items-end">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#7c5c22]">
                      {exhibit.designation}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-[#162231] sm:text-3xl">
                      {exhibit.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#585f69]">
                      by {exhibit.author} · {exhibit.genre} · {exhibit.focusArea}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onNavigate('contact', `${exhibit.focusArea} (${exhibit.genre})`)
                    }
                    className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 self-start rounded-sm bg-[#162231] px-4 py-2.5 text-xs font-semibold text-[#faf7f2] transition-colors hover:bg-[#23344a] lg:self-auto"
                  >
                    Enquire About Similar Presentation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#272d35] sm:text-base">
                  {exhibit.summary}
                </p>

                <div
                  className={`mt-6 grid gap-6 ${
                    exhibit.images.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'
                  }`}
                >
                  {exhibit.images.map((img) => (
                    <figure
                      key={img.src}
                      className="overflow-hidden rounded-md border border-stone-200 bg-white p-3"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setActiveExhibitImage({
                            ...img,
                            bookTitle: exhibit.title,
                          })
                        }
                        aria-label={`Enlarge ${img.caption} for ${exhibit.title}`}
                        className="group relative block w-full cursor-pointer overflow-hidden rounded-sm bg-stone-100 text-left"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          referrerPolicy="no-referrer"
                          className="w-full object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                        />
                        <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#162231]">
                          <Maximize2 className="h-3.5 w-3.5 text-[#7c5c22]" />
                          Inspect Full-Size Exhibit
                        </span>
                      </button>
                      <figcaption className="mt-2 px-1 text-xs font-serif italic text-[#585f69]">
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <div className="mt-6 border-t border-stone-200 pt-5">
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#162231]">
                    Key Presentation Takeaways
                  </h4>
                  <ul className="mt-2.5 grid gap-2 text-sm text-[#585f69] md:grid-cols-3">
                    {exhibit.observations.map((obs) => (
                      <li key={obs} className="flex items-start gap-2">
                        <span aria-hidden="true" className="text-[#7c5c22]">
                          —
                        </span>
                        <span>{obs}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Filters & Case Study Stack */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Demonstration Case Studies
            </p>
            <h2 className="font-serif text-3xl text-[#162231] sm:text-4xl">
              Independent Sample Analyses by Genre
            </h2>
          </div>
          <div
            role="group"
            aria-label="Filter sample projects by genre"
            className="mb-10 flex flex-wrap gap-2"
          >
            {GENRE_FILTERS.map((genre) => {
              const isSelected = selectedGenre === genre;
              return (
                <button
                  key={genre}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedGenre(genre)}
                  className={`cursor-pointer whitespace-nowrap rounded-sm border px-4 py-2 text-xs font-semibold transition-colors ${
                    isSelected
                      ? 'border-[#162231] bg-[#162231] text-[#faf7f2]'
                      : 'border-stone-300 bg-white text-[#585f69] hover:border-[#162231] hover:text-[#162231]'
                  }`}
                >
                  {genre}
                </button>
              );
            })}
          </div>

          <div className="space-y-8">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="grid gap-8 rounded-md border border-stone-200/90 bg-white p-7 sm:p-9 lg:grid-cols-12"
              >
                <div className="lg:col-span-3">
                  <BookCoverFrame project={project} />
                </div>

                <div className="lg:col-span-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#7c5c22]">
                    {project.designation}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-[#162231]">{project.title}</h2>
                  <p className="mt-1 text-sm text-[#585f69]">
                    {project.author} · {project.genre}
                  </p>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#272d35]">
                    {project.overview}
                  </p>

                  <div className="my-6 grid gap-6 border-y border-stone-200/80 py-6 md:grid-cols-2">
                    <div>
                      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#162231]">
                        Intended Readership
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#585f69]">
                        {project.readership}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#162231]">
                        Existing Discoverability Observations
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#585f69]">
                        {project.discoverabilityObservations}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#162231]">
                        Identified Marketing Opportunities
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#585f69]">
                        {project.marketingOpportunities}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#162231]">
                        Recommended Approach
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#585f69]">
                        {project.recommendedApproach}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#162231]">
                      Potential Promotional Channels
                    </h3>
                    <ul className="mt-2.5 grid gap-1.5 text-sm text-[#585f69] sm:grid-cols-2">
                      {project.promotionalChannels.map((channel) => (
                        <li key={channel} className="flex items-start gap-2">
                          <span aria-hidden="true" className="text-[#7c5c22]">
                            —
                          </span>
                          <span>{channel}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="cursor-pointer rounded-sm border border-stone-300 bg-[#faf7f2] px-4 py-2.5 text-xs font-semibold text-[#162231] transition-colors hover:border-[#162231]"
                    >
                      Read Full Strategic Notes
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate('contact', `Book Strategy & Analysis (${project.genre})`)
                      }
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-sm bg-[#162231] px-4 py-2.5 text-xs font-semibold text-[#faf7f2] transition-colors hover:bg-[#23344a]"
                    >
                      Enquire About a Similar Book
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Invitation */}
      <section className="border-t border-stone-200/80 bg-[#f1ebe1] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
            Your Work
          </p>
          <h2 className="font-serif text-3xl text-[#162231] sm:text-4xl">
            Would You Like an Individual Review of Your Book?
          </h2>
          <p className="mt-4 text-base text-[#585f69]">
            Share your book’s title, genre, and any existing retail or Goodreads links to begin a
            tailored conversation.
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

      {/* Detailed Strategic Notes Modal */}
      <EditorialModal
        isOpen={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title || 'Sample Analysis'}
      >
        {activeProject && (
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7c5c22]">
                {activeProject.designation}
              </p>
              <h2 className="mt-2 font-serif text-3xl text-[#162231]">{activeProject.title}</h2>
              <p className="mt-1 text-sm text-[#585f69]">
                {activeProject.author} · {activeProject.genre}
              </p>
            </div>

            <div className="border-t border-stone-200 pt-5">
              <h3 className="font-serif text-xl text-[#162231]">Book Overview</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#272d35]">
                {activeProject.overview}
              </p>
            </div>

            <div className="border-t border-stone-200 pt-5">
              <h3 className="font-serif text-xl text-[#162231]">Presentation Diagnosis</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#272d35]">
                {activeProject.strategicNotes.presentationDiagnosis}
              </p>
            </div>

            <div className="border-t border-stone-200 pt-5">
              <h3 className="font-serif text-xl text-[#162231]">Metadata &amp; Platform Alignment</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#272d35]">
                {activeProject.strategicNotes.metadataAlignment}
              </p>
            </div>

            <div className="border-t border-stone-200 pt-5">
              <h3 className="font-serif text-xl text-[#162231]">Ethical Outreach Direction</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#272d35]">
                {activeProject.strategicNotes.ethicalOutreach}
              </p>
            </div>

            <div className="border-t border-stone-200 pt-5">
              <button
                type="button"
                onClick={() => {
                  const genre = activeProject.genre;
                  setActiveProject(null);
                  onNavigate('contact', `Book Visibility Consultation (${genre})`);
                }}
                className="cursor-pointer rounded-sm bg-[#162231] px-5 py-3 text-sm font-semibold text-[#faf7f2] hover:bg-[#23344a]"
              >
                Discuss Your Own Book
              </button>
            </div>
          </div>
        )}
      </EditorialModal>
      {/* Full-Size Exhibit Inspection Modal */}
      <EditorialModal
        isOpen={Boolean(activeExhibitImage)}
        onClose={() => setActiveExhibitImage(null)}
        title={activeExhibitImage?.bookTitle || 'Platform Exhibit'}
      >
        {activeExhibitImage && (
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7c5c22]">
                Platform Presentation Sample
              </p>
              <h2 className="mt-1 font-serif text-2xl text-[#162231]">
                {activeExhibitImage.bookTitle}
              </h2>
              <p className="mt-1 text-sm text-[#585f69]">{activeExhibitImage.caption}</p>
            </div>
            <div className="overflow-hidden rounded-sm border border-stone-200 bg-stone-50 p-2">
              <img
                src={activeExhibitImage.src}
                alt={activeExhibitImage.alt}
                referrerPolicy="no-referrer"
                className="w-full object-contain"
              />
            </div>
          </div>
        )}
      </EditorialModal>
    </div>
  );
}
