import { Expand } from 'lucide-react';
import type { GalleryItem } from '../data/menuData';
import { FoodImage } from './FoodImage';

interface GalleryGridProps {
  items: GalleryItem[];
  onSelectImage: (index: number) => void;
}

export function GalleryGrid({ items, onSelectImage }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {items.map((item, index) => {
        const isWide = Boolean(item.featured);
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectImage(index)}
            aria-label={`View larger photograph of ${item.title}`}
            className={`group relative overflow-hidden rounded-xl border border-[#173F35]/10 bg-[#F7EFE3] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2 ${
              isWide
                ? 'sm:col-span-2 aspect-[16/9]'
                : 'aspect-[4/3]'
            }`}
          >
            <FoodImage
              src={item.image}
              alt={item.alt}
              title={item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 transition-opacity duration-200 group-hover:opacity-95"
            />

            <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF8EF]/90 text-[#173F35] opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <Expand className="h-4 w-4" aria-hidden="true" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 text-[#FFF8EF]">
              <p className="text-xs font-medium tracking-wide text-[#C6A15B]">
                {item.category}
              </p>
              <h3 className="mt-1 font-serif text-lg font-semibold text-[#FFF8EF] sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#FFF8EF]/85 sm:text-sm">
                {item.caption}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
