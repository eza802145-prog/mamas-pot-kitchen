import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react';
import { getDishWhatsAppMessage, getWhatsAppUrl } from '../data/business';
import type { GalleryItem } from '../data/menuData';
import { FoodImage } from './FoodImage';

interface LightboxProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  items,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrev();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, onClose, onPrev, onNext]);

  if (activeIndex === null || !items[activeIndex]) {
    return null;
  }

  const current = items[activeIndex];
  const whatsappUrl = getWhatsAppUrl(getDishWhatsAppMessage(current.title));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged food photograph: ${current.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#173F35] text-[#FFF8EF] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#FFF8EF]/15 px-4 py-3 sm:px-6">
          <p className="text-xs font-medium text-[#C6A15B] tabular-nums">
            Photo {activeIndex + 1} of {items.length} <span aria-hidden="true">·</span>{' '}
            {current.category}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enlarged image"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#FFF8EF]/85 transition-colors hover:bg-[#FFF8EF]/10 hover:text-[#FFF8EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative flex flex-1 items-center justify-center bg-black/50">
          <div className="relative max-h-[64vh] w-full overflow-hidden">
            <FoodImage
              src={current.image}
              alt={current.alt}
              title={current.title}
              loading="eager"
              className="mx-auto max-h-[64vh] w-full object-contain"
            />
          </div>

          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous photograph"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-[#FFF8EF] transition-colors hover:bg-[#C66B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next photograph"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-[#FFF8EF] transition-colors hover:bg-[#C66B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#FFF8EF]/15 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#FFF8EF]">
              {current.title}
            </h3>
            <p className="mt-1 text-sm text-[#FFF8EF]/80">{current.caption}</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C66B45] px-4 py-2.5 text-sm font-semibold text-[#FFF8EF] whitespace-nowrap shrink-0 transition-colors hover:bg-[#AE5733] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Enquire About This Dish</span>
          </a>
        </div>
      </div>
    </div>
  );
}
