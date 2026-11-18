import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Heart,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { FoodImage } from '../components/FoodImage';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BUSINESS_INFO, PAGE_META } from '../data/business';
import { IMAGES } from '../data/menuData';

const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'Quality Ingredients',
    description:
      'We source fresh tomatoes, peppers, leafy greens, and wholesome proteins to build authentic depth in every pot.',
  },
  {
    number: '02',
    title: 'Delicious Flavours',
    description:
      'Balanced seasoning and traditional Nigerian cooking methods ensure every mouthful tastes rich, warm, and satisfying.',
  },
  {
    number: '03',
    title: 'Careful Food Preparation',
    description:
      'Every order is cooked hygienically and packed thoughtfully so meals arrive fresh, neat, and ready to enjoy.',
  },
  {
    number: '04',
    title: 'Customer Satisfaction',
    description:
      'From everyday meal bowls to party food trays, we listen closely to portion preferences and spice levels.',
  },
  {
    number: '05',
    title: 'Memorable Dining Experiences',
    description:
      'Good food brings people together—we strive to make every family meal and hosted celebration effortless.',
  },
];

const SERVICES = [
  {
    title: 'Home-Cooked Nigerian Meals',
    description:
      'Comforting everyday classics including Jollof rice, fried rice, beans and plantain, yam porridge, Efo Riro, and Egusi soup.',
    image: IMAGES.efoRiro,
    alt: 'Home-cooked Nigerian Efo Riro vegetable soup served with pounded yam',
  },
  {
    title: 'Small Chops Platters',
    description:
      'Freshly fried golden puff-puff, crispy samosas, spring rolls, meat pies, and spiced proteins made to delight guests.',
    image: IMAGES.userSmallChopsPlate,
    alt: 'Assorted party small chops platter with puff puff, samosas, and spring rolls',
  },
  {
    title: 'Party Catering',
    description:
      'Generous party trays and celebratory spreads crafted for birthdays, housewarmings, and family milestones.',
    image: IMAGES.userPartyTrays,
    alt: 'Party foil catering trays filled with Jollof rice, meat, puff puff, and fried plantain',
  },
  {
    title: 'Office Meals',
    description:
      'Neatly portioned corporate lunches and meeting platters delivered reliably for busy Lagos teams.',
    image: IMAGES.userFeastSpread,
    alt: 'Nigerian fried rice lunch spread with chicken wings, suya skewers, and spring rolls',
  },
  {
    title: 'Special Occasion Catering',
    description:
      'Coordinated multi-dish catering packages designed for weddings, receptions, and memorable community events.',
    image: IMAGES.userBanquetBuffet,
    alt: 'Elegant Nigerian event catering banquet spread with chafing dishes',
  },
];

const BRAND_VALUES = [
  {
    title: 'Quality',
    description: 'Thoughtfully chosen ingredients and rich culinary attention in every batch.',
    icon: Award,
  },
  {
    title: 'Freshness',
    description: 'Prepared fresh for your order with vibrant flavours and comforting warmth.',
    icon: Sparkles,
  },
  {
    title: 'Hospitality',
    description: 'Warm, respectful service rooted in genuine Nigerian welcoming spirit.',
    icon: Heart,
  },
  {
    title: 'Reliability',
    description: 'Clear arrangements and dependable preparation from Monday to Saturday.',
    icon: Clock,
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your happiness at the table is the measure of every dish we serve.',
    icon: ShieldCheck,
  },
];

export function AboutPage() {
  return (
    <>
      <PageMeta
        title={PAGE_META.about.title}
        description={PAGE_META.about.description}
      />

      {/* Hero */}
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-[#173F35]">
        <div className="absolute inset-0">
          <FoodImage
            src={IMAGES.aboutKitchen}
            alt="Fresh ingredients and simmering pot inside Mama's Pot Kitchen"
            loading="eager"
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35"
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl text-[#FFF8EF]">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
              About Mama&apos;s Pot Kitchen
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Food, Passion and the Joy of Sharing.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#FFF8EF]/85 sm:text-lg">
              Dedicated to authentic Nigerian meals, warm hospitality, and dependable catering in
              Surulere, Lagos.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Kitchen Team */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C66B45]">
              Our Story &amp; Kitchen Team
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#173F35] sm:text-4xl">
              Authentic Nigerian Cooking, Crafted With Care
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#252525]/85">
              Mama&apos;s Pot Kitchen is a Nigerian food and catering kitchen located at{' '}
              {BUSINESS_INFO.address}. Our mission is simple: deliver richly flavoured meals,
              generous hospitality, and clean, dependable food preparation for everyday dining and
              special events.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#252525]/80">
              Inside our kitchen, our culinary team prepares each batch fresh—balancing authentic
              spices, tender proteins, and careful packaging so every tray and bowl arrives warm,
              appetising, and ready to share.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#173F35] px-5 py-2.5 text-sm font-semibold text-[#FFF8EF] hover:bg-[#102D26]"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <WhatsAppButton
                label="Message Us on WhatsApp"
                variant="secondary"
                size="md"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full min-h-[340px] overflow-hidden rounded-2xl border border-[#173F35]/10 bg-[#F7EFE3]">
              <FoodImage
                src={IMAGES.userChefKitchen}
                alt="Smiling chef standing in a spotless stainless steel kitchen at Mama's Pot Kitchen"
                className="h-full w-full object-cover object-top lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="border-y border-[#173F35]/10 bg-[#F7EFE3]/70 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C66B45]">
              Our Philosophy &amp; Mission
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#173F35] sm:text-4xl">
              What Goes Into Every Meal
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-xl border border-[#173F35]/12 bg-white p-6"
              >
                <span className="font-serif text-2xl font-bold text-[#C66B45] tabular-nums">
                  {pillar.number}.
                </span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-[#173F35]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#252525]/80">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C66B45]">
              What We Offer
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#173F35] sm:text-4xl">
              Our Food &amp; Catering Services
            </h2>
          </div>
          <Link
            to="/menu?category=Catering+Packages"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#173F35] hover:text-[#C66B45]"
          >
            <span>View Catering Packages</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="flex flex-col overflow-hidden rounded-xl border border-[#173F35]/12 bg-white"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#F7EFE3]">
                <FoodImage
                  src={service.image}
                  alt={service.alt}
                  title={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#173F35]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#252525]/80">
                    {service.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#173F35]/10">
                  <Link
                    to={`/contact?item=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C66B45] hover:text-[#AE5733]"
                  >
                    <span>Enquire About Service</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <section className="bg-[#173F35] py-16 text-[#FFF8EF] lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
              Brand Values
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              The Standards We Cook By
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {BRAND_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-xl border border-[#FFF8EF]/15 bg-[#102D26]/70 p-5"
                >
                  <Icon className="h-5 w-5 text-[#C6A15B]" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-lg font-semibold text-[#FFF8EF]">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#FFF8EF]/80">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <CheckCircle2 className="mx-auto h-8 w-8 text-[#C66B45]" aria-hidden="true" />
        <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#173F35] sm:text-4xl">
          Let Mama&apos;s Pot Kitchen Bring Something Delicious to Your Table.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-[#252525]/80">
          Visit us at {BUSINESS_INFO.address} or reach out for orders and event quotes.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#C66B45] px-6 py-3 text-sm font-semibold text-[#FFF8EF] transition-colors hover:bg-[#AE5733]"
          >
            <span>Contact Us</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <WhatsAppButton
            label="Order on WhatsApp"
            variant="secondary"
            size="lg"
          />
        </div>
      </section>
    </>
  );
}
