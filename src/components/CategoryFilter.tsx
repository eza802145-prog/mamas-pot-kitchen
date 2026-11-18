import { RotateCcw } from 'lucide-react';
import type { MenuCategory } from '../data/menuData';

interface CategoryFilterProps {
  categories: MenuCategory[];
  activeCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
  totalDisplayed: number;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
  totalDisplayed,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-[#173F35]/10 pb-6 md:flex-row md:items-center md:justify-between">
      <div
        role="tablist"
        aria-label="Menu categories"
        className="flex flex-wrap items-center gap-2"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(category)}
              className={`min-h-[40px] rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] ${
                isActive
                  ? 'bg-[#173F35] text-[#FFF8EF]'
                  : 'border border-[#173F35]/15 bg-white text-[#252525]/80 hover:bg-[#F7EFE3] hover:text-[#173F35]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-4 md:justify-end">
        <p className="text-sm text-[#252525]/70 tabular-nums">
          Showing <span className="font-semibold text-[#173F35]">{totalDisplayed}</span>{' '}
          {totalDisplayed === 1 ? 'selection' : 'selections'}
        </p>

        {activeCategory !== 'All' && (
          <button
            type="button"
            onClick={() => onSelectCategory('All')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C66B45] whitespace-nowrap hover:text-[#AE5733] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C66B45] rounded px-1"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Reset Filter</span>
          </button>
        )}
      </div>
    </div>
  );
}
