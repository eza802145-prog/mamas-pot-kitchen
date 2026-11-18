export const BUSINESS_INFO = {
  name: "Mama's Pot Kitchen",
  tagline: 'Authentic Nigerian Taste · Freshly Prepared · Made with Love',
  announcement: 'Fresh Nigerian Flavours. Beautifully Prepared. Made with Love.',
  phoneDisplay: '08060677222',
  phoneHref: 'tel:+2348060677222',
  whatsappNumber: '2348060677222',
  whatsappBaseUrl: 'https://wa.me/2348060677222',
  address: '125 Itire Road, Lawson, Surulere, Lagos, Nigeria',
  hours: 'Monday – Saturday, 9:00 AM – 9:00 PM',
  hoursShort: 'Mon – Sat · 9:00 AM – 9:00 PM',
  mapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=125+Itire+Road+Lawson+Surulere+Lagos+Nigeria',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=125%20Itire%20Road%2C%20Lawson%2C%20Surulere%2C%20Lagos%2C%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed',
} as const;

export function getWhatsAppUrl(message?: string): string {
  if (!message) {
    return BUSINESS_INFO.whatsappBaseUrl;
  }
  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function getDishWhatsAppMessage(dishName: string): string {
  return `Hello Mama's Pot Kitchen. I am interested in ordering ${dishName}. Please share the available sizes and prices.`;
}

export function getPackageWhatsAppMessage(packageName: string): string {
  return `Hello Mama's Pot Kitchen. I would like to request a quote for the ${packageName}. Please share available options and pricing.`;
}

export interface RouteMeta {
  title: string;
  description: string;
}

export const PAGE_META: Record<'home' | 'about' | 'menu' | 'gallery' | 'contact', RouteMeta> = {
  home: {
    title: "Mama's Pot Kitchen | Nigerian Meals & Catering in Surulere, Lagos",
    description:
      "Discover delicious Nigerian meals, small chops and catering services from Mama's Pot Kitchen in Surulere, Lagos.",
  },
  about: {
    title: "About Mama's Pot Kitchen | Our Food & Catering Story",
    description:
      "Learn about Mama's Pot Kitchen, our Nigerian food offerings, catering services and commitment to delicious meals.",
  },
  menu: {
    title: "Nigerian Food Menu & Catering Packages | Mama's Pot Kitchen",
    description:
      'Explore Nigerian rice dishes, soups, small chops, party catering and office meal options.',
  },
  gallery: {
    title: "Food Gallery | Mama's Pot Kitchen",
    description:
      'Explore food photography featuring Nigerian meals, small chops and catering inspiration.',
  },
  contact: {
    title: "Contact & Order | Mama's Pot Kitchen Surulere",
    description:
      "Contact Mama's Pot Kitchen for Nigerian meals, catering enquiries and orders in Surulere, Lagos.",
  },
};
