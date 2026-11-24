import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId, RESOURCE_ARTICLES, ResourceArticle } from '../data/content';
import { EditorialModal } from '../components/EditorialModal';

interface ResourcesPageProps {
  onNavigate: (page: PageId, serviceInterest?: string) => void;
}

const RESOURCE_CATEGORIES = [
  'All Topics',
  'Improving Amazon Book Discoverability',
  'Understanding Goodreads for Authors',
  'How Readers Discover New Books',
  "Building an Author's Online Presence",
  'Understanding Book Metadata',
  'Finding Relevant Book Clubs',
  'Marketing Poetry and Literary Fiction',
  'Reaching International Reading Communities',
];

export function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);

  const visibleArticles =
    selectedCategory === 'All Topics'
      ? RESOURCE_ARTICLES
      : RESOURCE_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div>
      {/* Page Banner */}
      <section className="border-b border-stone-200/80 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
              Literary Marketing Knowledge
            </p>
            <h1 className="font-serif text-4xl text-[#162231] sm:text-5xl">Author Resources</h1>
            <p className="mt-4 text-base leading-relaxed text-[#585f69] sm:text-lg">
              Practical essays and introductory notes on book presentation, metadata, reader
              discovery, and thoughtful outreach across literary communities.
            </p>
          </div>
        </div>
      </section>

      {/* Topic Filter & Editorial Article Grid */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div
            role="group"
            aria-label="Filter author resources by category"
            className="mb-10 flex flex-wrap gap-2"
          >
            {RESOURCE_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer rounded-sm border px-3.5 py-2 text-xs font-semibold transition-colors ${
                    isSelected
                      ? 'border-[#162231] bg-[#162231] text-[#faf7f2]'
                      : 'border-stone-300 bg-white text-[#585f69] hover:border-[#162231] hover:text-[#162231]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((article) => (
              <article
                key={article.id}
                className="flex flex-col justify-between rounded-md border border-stone-200/90 bg-white p-7"
              >
                <div>
                  <p className="font-serif text-lg tabular-nums text-[#7c5c22]">{article.number}</p>
                  <p className="mt-2 text-xs font-medium text-[#585f69]">
                    {article.category} · {article.readingTime}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl leading-snug text-[#162231]">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#585f69]">{article.summary}</p>
                </div>

                <div className="mt-6 border-t border-stone-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-[#162231] hover:text-[#7c5c22]"
                  >
                    Read Editorial Guide
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-stone-200/80 bg-[#f1ebe1] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5c22]">
            Personal Guidance
          </p>
          <h2 className="font-serif text-3xl text-[#162231] sm:text-4xl">
            Have a Question Specific to Your Book?
          </h2>
          <p className="mt-4 text-base text-[#585f69]">
            Every manuscript raises its own questions around positioning, metadata, and target
            readers. You are welcome to write with details about your work.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="mt-7 cursor-pointer rounded-sm bg-[#162231] px-6 py-3.5 text-sm font-semibold text-[#faf7f2] transition-colors hover:bg-[#23344a]"
          >
            Start a Conversation
          </button>
        </div>
      </section>

      {/* Article Reader Modal */}
      <EditorialModal
        isOpen={Boolean(activeArticle)}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.title || 'Editorial Guide'}
      >
        {activeArticle && (
          <article className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7c5c22]">
                {activeArticle.category} · {activeArticle.readingTime}
              </p>
              <h2 className="mt-2 font-serif text-3xl text-[#162231]">{activeArticle.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-[#585f69]">
                {activeArticle.summary}
              </p>
            </div>

            {activeArticle.sections.map((section) => (
              <div key={section.heading} className="border-t border-stone-200 pt-5">
                <h3 className="font-serif text-2xl text-[#162231]">{section.heading}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#272d35] sm:text-base">
                  {section.body}
                </p>
              </div>
            ))}

            <div className="border-t border-stone-200 pt-5">
              <button
                type="button"
                onClick={() => {
                  const cat = activeArticle.category;
                  setActiveArticle(null);
                  onNavigate('contact', cat);
                }}
                className="cursor-pointer rounded-sm bg-[#162231] px-5 py-3 text-sm font-semibold text-[#faf7f2] hover:bg-[#23344a]"
              >
                Ask About This Area
              </button>
            </div>
          </article>
        )}
      </EditorialModal>
    </div>
  );
}
