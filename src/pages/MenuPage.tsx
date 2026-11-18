import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { CategoryFilter } from '../components/CategoryFilter';
import { FoodCard } from '../components/FoodCard';
import { CateringPackageCard } from '../components/CateringPackageCard';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PAGE_META } from '../data/business';
import {
  CATERING_PACKAGES,
  DISH_ITEMS,
  MENU_CATEGORIES,
  type MenuCategory,
} from '../data/menuData';

const DISH_CATEGORY_SECTIONS: Array<Exclude<MenuCategory, 'All' | 'Catering Packages'>> = [
  'Rice Dishes',
  'Main Meals',
  'Proteins',
  'Small Chops',
];

export function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialParam = searchParams.get('category') as MenuCategory | null;
  const validInitial =
    initialParam && MENU_CATEGORIES.includes(initialParam) ? initialParam : 'All';

  const [activeCategory, setActiveCategory] = useState<MenuCategory>(validInitial);

  useEffect(() => {
    const param = searchParams.get('category') as MenuCategory | null;
    if (param && MENU_CATEGORIES.includes(param)) {
      setActiveCategory(param);
    }
  }, [searchParams]);

  const handleSelectCategory = (category: MenuCategory) => {
    setActiveCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const showDishes = activeCategory !== 'Catering Packages';
  const showPackages = activeCategory === 'All' || activeCategory === 'Catering Packages';

  const filteredDishes =
    activeCategory === 'All'
      ? DISH_ITEMS
      : DISH_ITEMS.filter((dish) => dish.category === activeCategory);

  const totalDisplayed =
    (showDishes ? filteredDishes.length : 0) +
    (showPackages ? CATERING_PACKAGES.length : 0);

  return (
    <>
      <PageMeta
        title={PAGE_META.menu.title}
        description={PAGE_META.menu.description}
      />

      {/* Menu Hero */}
      <section className="bg-[#173F35] py-14 text-[#FFF8EF] lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
              Interactive Menu &amp; Packages
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Discover Your Next Favourite Meal.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#FFF8EF]/85 sm:text-lg">
              From delicious Nigerian classics to irresistible small chops and catering packages,
              explore something special for every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Menu Items */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 flex items-start gap-3 rounded-xl border border-[#C6A15B]/35 bg-[#F7EFE3] p-4 text-sm text-[#252525]/85">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C66B45]" aria-hidden="true" />
          <p>
            <span className="font-semibold text-[#173F35]">Sample Pricing Notice:</span> Prices
            in Nigerian Naira (₦) below are sample reference guides. Tap{' '}
            <span className="font-medium text-[#173F35]">Order Now</span> or{' '}
            <span className="font-medium text-[#173F35]">Order Package</span> to confirm exact bowl
            sizes, tray counts, and final pricing on WhatsApp.
          </p>
        </div>

        <CategoryFilter
          categories={MENU_CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          totalDisplayed={totalDisplayed}
        />

        {activeCategory === 'All' ? (
          <div className="mt-10 space-y-16">
            {DISH_CATEGORY_SECTIONS.map((sectionCategory) => {
              const sectionDishes = DISH_ITEMS.filter(
                (dish) => dish.category === sectionCategory
              );
              return (
                <div key={sectionCategory}>
                  <div className="mb-6 flex items-baseline justify-between border-b border-[#173F35]/10 pb-3">
                    <h2 className="font-serif text-2xl font-bold text-[#173F35] sm:text-3xl">
                      {sectionCategory}
                    </h2>
                    <span className="text-xs font-medium text-[#252525]/65 tabular-nums">
                      {sectionDishes.length} items
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {sectionDishes.map((dish) => (
                      <FoodCard key={dish.id} dish={dish} />
                    ))}
                  </div>
                </div>
              );
            })}

            <div>
              <div className="mb-6 flex items-baseline justify-between border-b border-[#173F35]/10 pb-3">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#173F35] sm:text-3xl">
                    Catering Packages
                  </h2>
                  <p className="mt-1 text-sm text-[#252525]/75">
                    Tailored to your guest count and celebration schedule.
                  </p>
                </div>
                <span className="text-xs font-medium text-[#252525]/65 tabular-nums">
                  {CATERING_PACKAGES.length} packages
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {CATERING_PACKAGES.map((pkg) => (
                  <CateringPackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10">
            {showDishes && (
              <div>
                <h2 className="mb-6 font-serif text-2xl font-bold text-[#173F35] sm:text-3xl">
                  {activeCategory}
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {filteredDishes.map((dish) => (
                    <FoodCard key={dish.id} dish={dish} />
                  ))}
                </div>
              </div>
            )}

            {activeCategory === 'Catering Packages' && (
              <div>
                <h2 className="mb-6 font-serif text-2xl font-bold text-[#173F35] sm:text-3xl">
                  Catering Packages
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {CATERING_PACKAGES.map((pkg) => (
                    <CateringPackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Customised Catering CTA */}
      <section className="border-t border-[#173F35]/10 bg-[#173F35] py-16 text-[#FFF8EF]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-[#C6A15B]/30 bg-[#102D26] p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
                Customised Catering Quotes
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-[#FFF8EF] sm:text-3xl">
                Planning a Custom Event Menu?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#FFF8EF]/80 sm:text-base">
                Tell us your guest count, preferred dishes, and celebration date. We will prepare a
                tailored quotation for trays, bowls, or full event catering.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact?item=Custom+Catering+Package"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#C66B45] px-6 py-2.5 text-sm font-semibold text-[#FFF8EF] whitespace-nowrap transition-colors hover:bg-[#AE5733]"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
              <WhatsAppButton
                label="Discuss on WhatsApp"
                message="Hello Mama's Pot Kitchen. I would like to plan a custom catering package for an upcoming event."
                variant="outline"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
