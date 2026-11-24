import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { PortfolioProject } from '../data/content';

interface BookCoverFrameProps {
  project: PortfolioProject;
}

export function BookCoverFrame({ project }: BookCoverFrameProps) {
  const [imageError, setImageError] = useState(false);

  const toneClasses: Record<PortfolioProject['coverTone'], string> = {
    navy: 'bg-gradient-to-br from-[#1b2c40] to-[#101925] text-[#f7f3eb]',
    sage: 'bg-gradient-to-br from-[#273b33] to-[#17251f] text-[#f4f1e8]',
    plum: 'bg-gradient-to-br from-[#4b2530] to-[#2c141c] text-[#f8f2ea]',
    ivory: 'bg-gradient-to-br from-[#f3ecdf] to-[#e2d5bf] text-[#162231]',
  };

  if (project.coverImage && !imageError) {
    return (
      <div className="overflow-hidden rounded-sm border border-stone-200 bg-[#f1ebe1]">
        <img
          src={project.coverImage}
          alt={project.coverImageAlt || project.title}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="aspect-[3/4] w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-sm border border-stone-300/80 p-6 shadow-md ${
        toneClasses[project.coverTone]
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-3 border ${
          project.coverTone === 'ivory' ? 'border-[#162231]/20' : 'border-white/20'
        }`}
      />
      <div className="relative flex items-center justify-between text-[11px] uppercase tracking-[0.16em] opacity-80">
        <span>{project.genre}</span>
        <BookOpen className="h-3.5 w-3.5" />
      </div>
      <div className="relative my-auto py-4">
        <div className="font-serif text-2xl leading-tight font-medium">{project.title}</div>
      </div>
      <div className="relative text-[11px] uppercase tracking-[0.12em] opacity-80">
        {project.author}
      </div>
    </div>
  );
}
