import { Link } from 'react-router-dom';
import { Check, MessageCircle } from 'lucide-react';
import { getPackageWhatsAppMessage, getWhatsAppUrl } from '../data/business';
import type { CateringPackage } from '../data/menuData';
import { FoodImage } from './FoodImage';

interface CateringPackageCardProps {
  pkg: CateringPackage;
}

export function CateringPackageCard({ pkg }: CateringPackageCardProps) {
  const whatsappHref = getWhatsAppUrl(getPackageWhatsAppMessage(pkg.name));

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#173F35]/12 bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7EFE3]">
        <FoodImage
          src={pkg.image}
          alt={pkg.alt}
          title={pkg.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-xs font-medium tracking-wide text-[#C66B45]">
            Catering Package <span aria-hidden="true">·</span> Customisable
          </p>
          <h3 className="mt-1.5 font-serif text-2xl font-semibold text-[#173F35]">
            {pkg.name}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-[#252525]/80">
            {pkg.description}
          </p>

          <div className="mt-4 border-t border-[#173F35]/10 pt-4">
            <p className="text-xs font-semibold tracking-wide text-[#173F35]">
              Suggested Inclusions
            </p>
            <ul className="mt-2.5 space-y-2">
              {pkg.inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[#252525]/85"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#C66B45]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 space-y-3 border-t border-[#173F35]/10 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#252525]/65">Sample Guide</span>
            <span className="text-sm font-bold text-[#173F35] tabular-nums">{pkg.priceLabel}</span>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#C66B45] px-4 py-2.5 text-sm font-semibold text-[#FFF8EF] whitespace-nowrap transition-colors duration-200 hover:bg-[#AE5733] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C66B45]"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Order Package</span>
            </a>
            <Link
              to={`/contact?item=${encodeURIComponent(pkg.name)}`}
              className="inline-flex items-center justify-center rounded-lg border border-[#173F35]/20 px-4 py-2.5 text-sm font-medium text-[#173F35] whitespace-nowrap transition-colors hover:bg-[#F7EFE3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35]"
            >
              Enquiry Form
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
