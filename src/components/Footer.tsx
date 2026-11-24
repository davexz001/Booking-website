import { PageId } from '../data/content';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const linkClick = (e: React.MouseEvent, page: PageId) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="bg-[#101925] text-[#c8cfd8]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="font-serif text-2xl font-medium text-[#f7f3eb]">Becky Ronald</div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#dec187]">
              Independent Book Marketing &amp; Author Visibility Specialist
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#c8cfd8]">
              Helping authors connect their books with the readers who will appreciate them through
              thoughtful research, strategic book positioning, and meaningful reader connections.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#dec187]">
              Consultancy
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#home" onClick={(e) => linkClick(e, 'home')} className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => linkClick(e, 'about')} className="hover:text-white">
                  About Becky
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => linkClick(e, 'services')} className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#approach" onClick={(e) => linkClick(e, 'approach')} className="hover:text-white">
                  My Approach
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#dec187]">
              Work &amp; Enquiries
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#portfolio" onClick={(e) => linkClick(e, 'portfolio')} className="hover:text-white">
                  Portfolio &amp; Sample Projects
                </a>
              </li>
              <li>
                <a href="#resources" onClick={(e) => linkClick(e, 'resources')} className="hover:text-white">
                  Author Resources
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => linkClick(e, 'contact')} className="hover:text-white">
                  Contact &amp; Book Enquiry
                </a>
              </li>
              <li>
                <a href="#privacy" onClick={(e) => linkClick(e, 'privacy')} className="hover:text-white">
                  Privacy Policy (Draft Placeholder)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 text-xs text-[#9ba5b3] sm:flex-row">
          <span>Becky Ronald — Independent Literary Marketing Consultancy</span>
          <span>Independent consultancy; not affiliated with or endorsed by Amazon or Goodreads.</span>
        </div>
      </div>
    </footer>
  );
}
