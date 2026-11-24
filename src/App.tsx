import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PageId } from './data/content';
import { AboutPage } from './pages/AboutPage';
import { ApproachPage } from './pages/ApproachPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ServicesPage } from './pages/ServicesPage';

const VALID_PAGES: PageId[] = [
  'home',
  'about',
  'services',
  'approach',
  'portfolio',
  'resources',
  'contact',
  'privacy',
];

const PAGE_TITLES: Record<PageId, string> = {
  home: 'Becky Ronald | Independent Book Marketing & Author Visibility Specialist',
  about: 'About Becky Ronald | Independent Book Marketing & Author Visibility',
  services: 'Book Marketing Services | Becky Ronald',
  approach: 'My Approach — Five-Stage Book Marketing Process | Becky Ronald',
  portfolio: 'Portfolio & Sample Projects | Becky Ronald',
  resources: 'Author Resources | Becky Ronald',
  contact: 'Contact Becky Ronald | Book Marketing Enquiry',
  privacy: 'Privacy Policy (Draft Placeholder) | Becky Ronald',
};

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace('#', '').trim() as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [serviceInterest, setServiceInterest] = useState<string | undefined>(undefined);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage];
  }, [currentPage]);

  const handleNavigate = (page: PageId, interest?: string) => {
    setServiceInterest(interest);
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#faf7f2] text-[#272d35]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-[#162231] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>

      <Header currentPage={currentPage} onNavigate={(page) => handleNavigate(page)} />

      <main id="main-content" className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={(page) => handleNavigate(page)} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'approach' && <ApproachPage onNavigate={(page) => handleNavigate(page)} />}
        {currentPage === 'portfolio' && <PortfolioPage onNavigate={handleNavigate} />}
        {currentPage === 'resources' && <ResourcesPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage initialServiceInterest={serviceInterest} />}
        {currentPage === 'privacy' && <PrivacyPage />}
      </main>

      <Footer onNavigate={(page) => handleNavigate(page)} />
    </div>
  );
}
