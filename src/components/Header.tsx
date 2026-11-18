import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/business';
import { WhatsAppButton } from './WhatsAppButton';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu & Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="bg-[#173F35] px-4 py-2 text-center text-xs font-medium tracking-wide text-[#FFF8EF]/95">
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-7xl"
        >
          {BUSINESS_INFO.announcement}
        </motion.p>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#173F35]/10 bg-[#FFF8EF]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="font-serif text-xl font-bold tracking-tight text-[#173F35] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] rounded"
          >
            {BUSINESS_INFO.name}
          </Link>

          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#173F35] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C66B45]'
                      : 'text-[#252525]/75 hover:text-[#173F35]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">
              <WhatsAppButton
                label="Order on WhatsApp"
                message="Hello Mama's Pot Kitchen. I would like to place an order or make an enquiry."
                variant="forest"
                size="sm"
              />
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#173F35]/15 text-[#173F35] transition-colors hover:bg-[#F7EFE3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-[#173F35]/10 bg-[#FFF8EF] px-4 py-5 shadow-lg lg:hidden"
            >
              <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `flex min-h-[44px] items-center rounded-lg px-3.5 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#173F35] text-[#FFF8EF]'
                          : 'text-[#252525] hover:bg-[#F7EFE3]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-5 flex flex-col gap-3 border-t border-[#173F35]/10 pt-4">
                <WhatsAppButton
                  label="Order on WhatsApp"
                  message="Hello Mama's Pot Kitchen. I would like to place an order or make an enquiry."
                  variant="primary"
                  size="md"
                  className="w-full"
                />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#173F35]/20 px-4 text-sm font-medium text-[#173F35] hover:bg-[#F7EFE3]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <p className="text-center text-xs text-[#252525]/70">
                  {BUSINESS_INFO.hours}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
