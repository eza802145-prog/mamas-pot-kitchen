import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/business';

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 360);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-center gap-2.5 sm:bottom-6 sm:right-6">
      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#173F35]/20 bg-[#FFF8EF] text-[#173F35] shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#F7EFE3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35]"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </button>
      )}

      <a
        href={getWhatsAppUrl(
          "Hello Mama's Pot Kitchen. I would like to place an order or ask about your menu."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-11 items-center gap-2 rounded-full bg-[#173F35] px-4 text-xs font-semibold text-[#FFF8EF] shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#102D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2 sm:text-sm"
      >
        <MessageCircle className="h-4 w-4 shrink-0 text-[#C6A15B]" aria-hidden="true" />
        <span className="whitespace-nowrap">WhatsApp Order</span>
      </a>
    </div>
  );
}
