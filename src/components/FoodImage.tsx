import { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface FoodImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function FoodImage({
  src,
  alt,
  title,
  className = 'h-full w-full object-cover',
  loading = 'lazy',
}: FoodImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#F7EFE3] via-[#EFE3D0] to-[#E5D3B8] p-6 text-center text-[#173F35]"
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#C6A15B]/40 bg-[#FFF8EF]">
          <UtensilsCrossed className="h-5 w-5 text-[#C66B45]" aria-hidden="true" />
        </div>
        <p className="font-serif text-base font-semibold text-[#173F35]">
          {title || "Mama's Pot Kitchen"}
        </p>
        <p className="mt-1 text-xs text-[#252525]/70">Freshly Prepared Nigerian Dish</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
