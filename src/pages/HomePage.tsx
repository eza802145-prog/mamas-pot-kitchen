import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CalendarHeart,
  ChefHat,
  Clock,
  Flame,
  HeartHandshake,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { FoodCard } from '../components/FoodCard';
import { CateringPackageCard } from '../components/CateringPackageCard';
import { FoodImage } from '../components/FoodImage';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BUSINESS_INFO, PAGE_META } from '../data/business';
import {
  CATERING_PACKAGES,
  DISH_ITEMS,
  GALLERY_ITEMS,
  IMAGES,
} from '../data/menuData';

const WHY_CHOOSE_ITEMS = [
  {
    title: 'Delicious Nigerian Flavours',
    description:
      'Every pot is seasoned with aromatic herbs, fresh tomatoes, and authentic West African spices for unforgettable taste.',
    icon: Flame,
  },
  {
    title: 'Freshly Prepared Meals',
    description:
      'Prepared fresh to order using carefully selected market produce, tender cuts, and clean kitchen standards.',
    icon: ChefHat,
  },
  {
    title: 'Catering for Special Moments',
    description:
      'Thoughtfully portioned food trays, small chops platters, and full catering spreads for gatherings large and small.',
    icon: CalendarHeart,
  },
  {
    title: 'Friendly Customer Service',
    description:
      'Clear communication, reliable timing, and attentive support from your first WhatsApp message to final delivery.',
    icon: HeartHandshake,
  },
];

const CATERING_OCCASIONS = [
  'Birthdays & Milestone Dinners',
  'Weddings & Traditional Ceremonies',
  'Office Meetings & Team Lunches',
  'Family Celebrations & Housewarmings',
  'Corporate Events & Conferences',
];

export function HomePage() {
  const featuredDishes = DISH_ITEMS.filter((dish) => dish.featuredOnHome);
  const popularPackages = CATERING_PACKAGES.filter((pkg) => pkg.featuredOnHome);
  const previewGallery = [
    GALLERY_ITEMS[2],
    GALLERY_ITEMS[4],
    GALLERY_ITEMS[5],
    GALLERY_ITEMS[7],
  ];

  return (
    <>
      <PageMeta
        title={PAGE_META.home.title}
        description={PAGE_META.home.description}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-[#173F35] lg:min-h-[650px]">
        <div className="absolute inset-0">
          <FoodImage
            src={IMAGES.userCopperJollof}
            alt="Smoky Nigerian Jollof rice in a copper pot with char-grilled chicken, fried plantain, and fresh salad"
            loading="eager"
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-[#FFF8EF]"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C6A15B] sm:text-sm">
              Surulere, Lagos <span aria-hidden="true">·</span> Nigerian Meals &amp; Catering
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-[#FFF8EF] sm:text-5xl lg:text-6xl">
              Every Plate Tells a Delicious Story.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#FFF8EF]/90 sm:text-lg">
              Discover the irresistible taste of authentic Nigerian meals, freshly prepared with
              passion for everyday moments and unforgettable celebrations.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <WhatsAppButton
                label="Place an Order"
                message="Hello Mama's Pot Kitchen. I would like to place an order from your menu."
                variant="primary"
                size="lg"
              />

              <Link
                to="/menu"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-[#C6A15B] bg-black/30 px-6 py-3 text-sm font-semibold text-[#FFF8EF] backdrop-blur-sm whitespace-nowrap transition-colors duration-200 hover:bg-[#C6A15B]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] sm:text-base"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C66B45]">
              Our Kitchen
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#173F35] sm:text-4xl">
              Welcome to Mama&apos;s Pot Kitchen
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#252525]/85">
              Situated in the heart of Surulere, Lagos, Mama&apos;s Pot Kitchen brings the warmth
              of home-cooked Nigerian cuisine to your dining table, office lunches, and life&apos;s
              most joyful gatherings.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#252525]/80">
              Whether you are craving smoky party Jollof rice, hearty traditional soups, crisp
              small chops platters, or full event catering, every dish is cooked fresh with care
              and genuine Nigerian hospitality.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 border-t border-[#173F35]/10 pt-6 text-sm text-[#173F35] sm:grid-cols-2">
              <li className="font-medium">01. Delicious Nigerian dishes</li>
              <li className="font-medium">02. Freshly prepared meals</li>
              <li className="font-medium">03. Party and event catering</li>
              <li className="font-medium">04. Small chops and food packages</li>
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-6 text-xs text-[#252525]/75">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#C66B45]" aria-hidden="true" />
                {BUSINESS_INFO.address}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#C66B45]" aria-hidden="true" />
                {BUSINESS_INFO.hoursShort}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-[#173F35]/10 bg-[#F7EFE3]">
              <FoodImage
                src={IMAGES.userFeastSpread}
                alt="Spread of Nigerian fried rice, suya skewers, glazed chicken wings, fried plantain, and spring rolls"
                className="h-full w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Food Section */}
      <section className="border-y border-[#173F35]/10 bg-[#F7EFE3]/65 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#C66B45]">
                Customer Favourites
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#173F35] sm:text-4xl">
                Signature Dishes &amp; Platters
              </h2>
              <p className="mt-3 max-w-2xl text-base text-[#252525]/80">
                Sample Naira guides are shown below. Tap Order Now on any dish to confirm exact
                bowl sizes and pricing on WhatsApp.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#173F35] whitespace-nowrap hover:text-[#C66B45]"
            >
              <span>View Full Menu</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredDishes.map((dish) => (
              <FoodCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="mt-16 border-t border-[#173F35]/10 pt-14">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#C66B45]">
                  Popular Packages
                </p>
                <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-[#173F35] sm:text-3xl">
                  Ready-to-Serve Trays &amp; Catering Packages
                </h2>
              </div>
              <Link
                to="/menu?category=Catering+Packages"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#173F35] whitespace-nowrap hover:text-[#C66B45]"
              >
                <span>See All 5 Packages</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {popularPackages.map((pkg) => (
                <CateringPackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C66B45]">
            Our Promise
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#173F35] sm:text-4xl">
            Why Guests Choose Mama&apos;s Pot Kitchen
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-[#173F35]/12 bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#173F35] text-[#C6A15B]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#173F35]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#252525]/80">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Catering Promotion */}
      <section className="bg-[#173F35] text-[#FFF8EF]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-[#FFF8EF]/15">
                <FoodImage
                  src={IMAGES.userLagosRooftop}
                  alt="Lagos rooftop Nigerian catering buffet spread with Jollof rice platters, small chops, and chef service"
                  className="h-full w-full object-cover lg:h-full"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
                Event &amp; Corporate Catering
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#FFF8EF] sm:text-4xl">
                Memorable Nigerian Catering for Every Gathering
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#FFF8EF]/85">
                Let us handle the cooking so you can enjoy your guests. We prepare customised food
                trays, small chops platters, and full catering spreads for:
              </p>

              <ul className="mt-5 space-y-2.5 text-sm text-[#FFF8EF]/90">
                {CATERING_OCCASIONS.map((occasion) => (
                  <li key={occasion} className="flex items-center gap-2.5">
                    <Sparkles className="h-4 w-4 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                    <span>{occasion}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <Link
                  to="/contact?item=Event+Catering+Order"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#C66B45] px-6 py-2.5 text-sm font-semibold text-[#FFF8EF] whitespace-nowrap transition-colors hover:bg-[#AE5733]"
                >
                  <span>Plan Your Catering Order</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
                <Link
                  to="/menu?category=Catering+Packages"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#C6A15B] px-5 py-2.5 text-sm font-medium text-[#FFF8EF] whitespace-nowrap transition-colors hover:bg-[#C6A15B]/15"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C66B45]">
              Visual Showcase
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#173F35] sm:text-4xl">
              Fresh From Our Kitchen
            </h2>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#173F35] whitespace-nowrap hover:text-[#C66B45]"
          >
            <span>Explore Full Food Gallery</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewGallery.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#173F35]/10 bg-[#F7EFE3]"
            >
              <FoodImage
                src={item.image}
                alt={item.alt}
                title={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 text-[#FFF8EF]">
                <p className="text-xs text-[#C6A15B]">{item.category}</p>
                <p className="mt-0.5 font-serif text-base font-semibold">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-[#173F35]/10 bg-[#F7EFE3] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#173F35] sm:text-4xl">
            Good Food Makes Every Moment Special.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#252525]/80">
            Ready to order today&apos;s meal or discuss catering for your next occasion in Lagos?
            Get in touch with us directly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#173F35] px-6 py-3 text-sm font-semibold text-[#FFF8EF] whitespace-nowrap transition-colors hover:bg-[#102D26]"
            >
              <span>Let&apos;s Talk About Your Order</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <WhatsAppButton
              label="Chat on WhatsApp"
              message="Hello Mama's Pot Kitchen. I would like to discuss an order."
              variant="secondary"
              size="lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
