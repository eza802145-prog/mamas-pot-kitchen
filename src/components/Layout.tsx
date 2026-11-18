import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { Header } from './Header';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF8EF] text-[#252525]">
      <Header />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
