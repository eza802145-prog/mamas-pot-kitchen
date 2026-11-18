/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#C66B45]">
        Page Not Found
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-[#173F35]">
        We Could Not Find That Page
      </h1>
      <p className="mt-4 text-base text-[#252525]/80">
        Explore our homepage, menu, or contact page to place an order with Mama&apos;s Pot
        Kitchen.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#173F35] px-6 py-2.5 text-sm font-semibold text-[#FFF8EF] hover:bg-[#102D26]"
        >
          Return Home
        </Link>
        <Link
          to="/menu"
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#173F35]/20 px-6 py-2.5 text-sm font-semibold text-[#173F35] hover:bg-[#F7EFE3]"
        >
          View Menu
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
