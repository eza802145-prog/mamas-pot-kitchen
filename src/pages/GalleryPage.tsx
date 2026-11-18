import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { GalleryGrid } from '../components/GalleryGrid';
import { Lightbox } from '../components/Lightbox';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PAGE_META } from '../data/business';
import { GALLERY_ITEMS, type GalleryItem } from '../data/menuData';

type GalleryFilter = 'All' | GalleryItem['category'];
const GALLERY_FILTERS: GalleryFilter[] = [
  'All',
  'Rice & Mains',
  'Proteins',
  'Small Chops',
  'Catering & Kitchen',
];

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visibleItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleFilterChange = (filter: GalleryFilter) => {
    setActiveFilter(filter);
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + visibleItems.length) % visibleItems.length;
    });
  };

  const handleNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % visibleItems.length;
    });
  };

  return (
    <>
      <PageMeta
        title={PAGE_META.gallery.title}
        description={PAGE_META.gallery.description}
      />

      {/* Gallery Hero */}
      <section className="bg-[#173F35] py-14 text-[#FFF8EF] lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
              Food Photography
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              A Feast for the Eyes.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#FFF8EF]/85 sm:text-lg">
              Explore the delicious creations and catering inspiration from Mama&apos;s Pot
              Kitchen. Click any photograph to enlarge and view details.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-col gap-4 border-b border-[#173F35]/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div role="tablist" aria-label="Gallery categories" className="flex flex-wrap gap-2">
            {GALLERY_FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleFilterChange(filter)}
                  className={`min-h-[40px] rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] ${
                    isActive
                      ? 'bg-[#173F35] text-[#FFF8EF]'
                      : 'border border-[#173F35]/15 bg-white text-[#252525]/80 hover:bg-[#F7EFE3]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <p className="text-sm text-[#252525]/70 tabular-nums">
            Showing <span className="font-semibold text-[#173F35]">{visibleItems.length}</span>{' '}
            photographs
          </p>
        </div>

        <GalleryGrid items={visibleItems} onSelectImage={setSelectedIndex} />
      </section>

      {/* Gallery Closing CTA */}
      <section className="border-t border-[#173F35]/10 bg-[#F7EFE3] py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#173F35] sm:text-3xl">
              See Something You&apos;d Love at Your Table?
            </h2>
            <p className="mt-1.5 text-sm text-[#252525]/80 sm:text-base">
              Browse our full menu or send us a message to place your order.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#173F35] px-5 py-2.5 text-sm font-semibold text-[#FFF8EF] hover:bg-[#102D26]"
            >
              <span>Browse Full Menu</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <WhatsAppButton
              label="Order on WhatsApp"
              variant="primary"
              size="md"
            />
          </div>
        </div>
      </section>

      <Lightbox
        items={visibleItems}
        activeIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
