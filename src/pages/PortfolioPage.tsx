import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId, PORTFOLIO_PROJECTS, PortfolioProject } from '../data/content';
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
              These sample book-marketing analyses illustrate how literary positioning,
              discoverability observations, and reader-community channels are evaluated across
              different genres.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Notice */}
      <section className="border-b border-stone-200/80 bg-[#f1ebe1] py-6">
        <div className="mx-auto max-w-6xl px-6 text-sm leading-relaxed text-[#272d35]">
          <span className="font-semibold text-[#162231]">Demonstration Designation: </span>
          Every study currently presented below is an{' '}
          <span className="font-semibold text-[#162231]">
            Independent Sample Analysis – Demonstration Project
          </span>
          . They demonstrate research methodology and strategic thinking and are not presented as
          commissioned client work or claimed commercial results.
        </div>
      </section>

      {/* Filters & Case Study Stack */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
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
    </div>
  );
}
