import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { WhatsAppButton } from './WhatsAppButton';

export function Footer() {
  return (
    <footer className="bg-[#173F35] text-[#FFF8EF]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block font-serif text-2xl font-bold tracking-tight text-[#FFF8EF]"
            >
              {BUSINESS_INFO.name}
            </Link>
            <p className="text-sm leading-relaxed text-[#FFF8EF]/80">
              Authentic Nigerian catering, home-cooked meals, and freshly made small chops prepared
              with care in Surulere, Lagos.
            </p>
            <p className="text-xs font-medium tracking-wide text-[#C6A15B]">
              {BUSINESS_INFO.tagline}
            </p>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold tracking-wide text-[#C6A15B]">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#FFF8EF]/85 transition-colors hover:text-[#FFF8EF]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#FFF8EF]/85 transition-colors hover:text-[#FFF8EF]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-[#FFF8EF]/85 transition-colors hover:text-[#FFF8EF]"
                >
                  Menu &amp; Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-[#FFF8EF]/85 transition-colors hover:text-[#FFF8EF]"
                >
                  Food Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#FFF8EF]/85 transition-colors hover:text-[#FFF8EF]"
                >
                  Contact &amp; Orders
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold tracking-wide text-[#C6A15B]">
              Visit &amp; Hours
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#FFF8EF]/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                <span>{BUSINESS_INFO.hours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="tabular-nums transition-colors hover:text-[#FFF8EF]"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-sans text-sm font-semibold tracking-wide text-[#C6A15B]">
              Orders &amp; Enquiries
            </h2>
            <p className="text-sm leading-relaxed text-[#FFF8EF]/80">
              Ready to order a meal or plan catering for your celebration? Reach us directly on
              WhatsApp for quick quotes and availability.
            </p>
            <div className="flex flex-col gap-2.5 sm:items-start">
              <WhatsAppButton
                label="Order on WhatsApp"
                message="Hello Mama's Pot Kitchen. I would like to place an order or request catering details."
                variant="primary"
                size="md"
              />
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C6A15B] underline-offset-4 hover:underline"
              >
                Get Google Maps Directions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#FFF8EF]/15 pt-6 text-xs text-[#FFF8EF]/70 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p>Surulere, Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
