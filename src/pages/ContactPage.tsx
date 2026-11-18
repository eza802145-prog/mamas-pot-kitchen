import { useSearchParams } from 'react-router-dom';
import { Clock, ExternalLink, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { ContactForm } from '../components/ContactForm';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BUSINESS_INFO, PAGE_META, getWhatsAppUrl } from '../data/business';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedItem = searchParams.get('item') || '';

  return (
    <>
      <PageMeta
        title={PAGE_META.contact.title}
        description={PAGE_META.contact.description}
      />

      {/* Hero */}
      <section className="bg-[#173F35] py-14 text-[#FFF8EF] lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C6A15B]">
              Contact &amp; Orders
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Make Something Delicious Happen.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#FFF8EF]/85 sm:text-lg">
              Whether you&apos;re planning a celebration, arranging office meals or ordering your
              favourite Nigerian dishes, Mama&apos;s Pot Kitchen is ready to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="group rounded-xl border border-[#173F35]/12 bg-white p-6 transition-colors hover:border-[#C66B45]/50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#173F35] text-[#C6A15B]">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-serif text-lg font-semibold text-[#173F35]">Phone</h2>
            <p className="mt-1.5 text-base font-semibold text-[#C66B45] tabular-nums group-hover:underline">
              {BUSINESS_INFO.phoneDisplay}
            </p>
            <p className="mt-1 text-xs text-[#252525]/65">Tap to call directly</p>
          </a>

          <a
            href={getWhatsAppUrl("Hello Mama's Pot Kitchen. I would like to make an order enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-[#173F35]/12 bg-white p-6 transition-colors hover:border-[#C66B45]/50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C66B45] text-[#FFF8EF]">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-serif text-lg font-semibold text-[#173F35]">WhatsApp</h2>
            <p className="mt-1.5 text-base font-semibold text-[#173F35] tabular-nums group-hover:underline">
              {BUSINESS_INFO.phoneDisplay}
            </p>
            <p className="mt-1 text-xs text-[#252525]/65">Fast ordering &amp; quotes</p>
          </a>

          <div className="rounded-xl border border-[#173F35]/12 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#173F35] text-[#C6A15B]">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-serif text-lg font-semibold text-[#173F35]">Location</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-[#252525]/85">
              {BUSINESS_INFO.address}
            </p>
          </div>

          <div className="rounded-xl border border-[#173F35]/12 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#173F35] text-[#C6A15B]">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-serif text-lg font-semibold text-[#173F35]">Opening Hours</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-[#252525]/85">
              {BUSINESS_INFO.hours}
            </p>
          </div>
        </div>

        {/* Prominent WhatsApp Ordering Banner */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#C6A15B]/35 bg-[#F7EFE3] p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-xl font-bold text-[#173F35]">
              Prefer Instant WhatsApp Ordering?
            </h2>
            <p className="mt-1 text-sm text-[#252525]/80">
              Start a direct WhatsApp chat on {BUSINESS_INFO.phoneDisplay} for quick meal pricing,
              small chops tray counts, and availability.
            </p>
          </div>
          <WhatsAppButton
            label="Order Now on WhatsApp"
            message="Hello Mama's Pot Kitchen. I would like to place an order or request pricing."
            variant="primary"
            size="lg"
          />
        </div>
      </section>

      {/* Form & Map */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ContactForm initialItem={preselectedItem} />
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-[#173F35]/12 bg-white">
              <div className="p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#C66B45]">
                  Find Us in Surulere
                </p>
                <h2 className="mt-1.5 font-serif text-2xl font-semibold text-[#173F35]">
                  Visit Mama&apos;s Pot Kitchen
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#252525]/80">
                  {BUSINESS_INFO.address}
                </p>
                <p className="mt-1 text-xs text-[#252525]/65">{BUSINESS_INFO.hours}</p>
              </div>

              <div className="aspect-[4/3] w-full border-y border-[#173F35]/10 bg-[#F7EFE3]">
                <iframe
                  title="Map showing 125 Itire Road, Lawson, Surulere, Lagos, Nigeria"
                  src={BUSINESS_INFO.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>

              <div className="p-5">
                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#173F35] px-5 py-2.5 text-sm font-semibold text-[#FFF8EF] transition-colors hover:bg-[#102D26]"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[#173F35]/10 bg-[#173F35] py-14 text-center text-[#FFF8EF]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Your Next Delicious Experience Starts Here.
          </h2>
          <p className="mt-3 text-base text-[#FFF8EF]/80">
            Call {BUSINESS_INFO.phoneDisplay} or message us on WhatsApp Monday through Saturday,
            9:00 AM – 9:00 PM.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton
              label="Chat With Mama's Pot Kitchen"
              message="Hello Mama's Pot Kitchen. I would like to place an order."
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
