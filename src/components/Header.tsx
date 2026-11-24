import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../data/content';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'approach', label: 'Approach' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'resources', label: 'Resources' },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/90 bg-[#faf7f2]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:h-20">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleSelect('home');
          }}
          className="font-serif text-2xl font-semibold tracking-tight text-[#162231] whitespace-nowrap shrink-0"
        >
          Becky Ronald
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(item.id);
                }}
                className={`whitespace-nowrap shrink-0 border-b py-1 text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'border-[#b38e4c] text-[#162231]'
                    : 'border-transparent text-[#585f69] hover:border-[#b38e4c]/60 hover:text-[#162231]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('contact')}
            className="hidden cursor-pointer whitespace-nowrap shrink-0 rounded-sm bg-[#162231] px-4 py-2 text-xs font-semibold tracking-wide text-[#faf7f2] transition-colors duration-150 hover:bg-[#23344a] lg:inline-flex"
          >
            Discuss Your Book
          </button>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-sm border border-stone-300 text-[#162231] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-stone-200 bg-[#faf7f2] px-6 py-5 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelect(item.id);
                  }}
                  className={`py-2 text-base font-medium ${
                    isActive ? 'text-[#162231] underline decoration-[#b38e4c] underline-offset-4' : 'text-[#585f69]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <button
              type="button"
              onClick={() => handleSelect('contact')}
              className="mt-2 w-full cursor-pointer rounded-sm bg-[#162231] px-4 py-3 text-center text-sm font-semibold text-[#faf7f2]"
            >
              Discuss Your Book
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
