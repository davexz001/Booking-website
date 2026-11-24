import { useEffect } from 'react';
import { X } from 'lucide-react';

interface EditorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function EditorialModal({ isOpen, onClose, title, children }: EditorialModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#101925]/70 p-4 backdrop-blur-xs sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-md border border-stone-300 bg-white p-6 shadow-2xl sm:p-10">
        <div className="mb-6 flex items-center justify-between border-b border-stone-200 pb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7c5c22]">
            Editorial Reading View
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close reading view"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-sm border border-stone-300 bg-[#faf7f2] px-3 py-1.5 text-xs font-semibold text-[#162231] transition-colors hover:bg-[#162231] hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
            Close
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
