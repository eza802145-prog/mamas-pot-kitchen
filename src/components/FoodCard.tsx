import { MessageCircle } from 'lucide-react';
import { getDishWhatsAppMessage, getWhatsAppUrl } from '../data/business';
import type { DishItem } from '../data/menuData';
import { FoodImage } from './FoodImage';

interface FoodCardProps {
  dish: DishItem;
}

export function FoodCard({ dish }: FoodCardProps) {
  const whatsappHref = getWhatsAppUrl(getDishWhatsAppMessage(dish.name));

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#173F35]/12 bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7EFE3]">
        <FoodImage
          src={dish.image}
          alt={dish.alt}
          title={dish.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <p className="text-xs font-medium tracking-wide text-[#C66B45]">
            {dish.category} <span aria-hidden="true">·</span> Freshly Prepared
          </p>
          <h3 className="mt-1.5 font-serif text-xl font-semibold text-[#173F35]">
            {dish.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#252525]/80">
            {dish.description}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#173F35]/10 pt-4">
          <span className="text-sm font-semibold text-[#173F35] tabular-nums">
            {dish.priceLabel}
          </span>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#173F35] px-4 py-2 text-xs font-semibold text-[#FFF8EF] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#C66B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Order Now</span>
          </a>
        </div>
      </div>
    </article>
  );
}
