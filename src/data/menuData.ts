export type MenuCategory =
  | 'All'
  | 'Rice Dishes'
  | 'Main Meals'
  | 'Proteins'
  | 'Small Chops'
  | 'Catering Packages';

export interface DishItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All' | 'Catering Packages'>;
  description: string;
  priceLabel: string;
  image: string;
  alt: string;
  featuredOnHome?: boolean;
}

export interface CateringPackage {
  id: string;
  name: string;
  description: string;
  inclusions: string[];
  priceLabel: string;
  image: string;
  alt: string;
  featuredOnHome?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'Rice & Mains' | 'Proteins' | 'Small Chops' | 'Catering & Kitchen';
  image: string;
  alt: string;
  featured?: boolean;
}

export const IMAGES = {
  // User-supplied food, catering & kitchen photography
  userCopperJollof: '/assets/aistudio/image_1fd37ac3.png',
  userSmallChopsPlate: '/assets/aistudio/image_b15d80b9.png',
  userBanquetBuffet: '/assets/aistudio/image_10a83e81.png',
  userChefKitchen: '/assets/aistudio/image_1a4809b5.png',
  userPartyTrays: '/assets/aistudio/image_3a58d62f.png',
  userFeastSpread: '/assets/aistudio/image_b82e4ec0.png',
  userLagosRooftop: '/assets/aistudio/image_8a64712d.png',

  // Studio-generated Nigerian food photography
  heroJollof: '/src/assets/images/hero_jollof_feast_1795012442799.jpg',
  aboutKitchen: '/src/assets/images/about_kitchen_prep_1795012443438.jpg',
  friedRice: '/src/assets/images/nigerian_fried_rice_1795012444947.jpg',
  coconutRice: '/src/assets/images/nigerian_coconut_rice_1795012445395.jpg',
  ofadaRice: '/src/assets/images/ofada_rice_sauce_1795012444461.jpg',
  beansPlantain: '/src/assets/images/beans_and_plantain_1795012446745.jpg',
  yamPorridge: '/src/assets/images/nigerian_yam_porridge_1795012444655.jpg',
  efoRiro: '/src/assets/images/efo_riro_soup_1795012445517.jpg',
  egusiSoup: '/src/assets/images/egusi_melon_soup_1795012445792.jpg',
  grilledChicken: '/src/assets/images/grilled_peppered_chicken_1795012446833.jpg',
  friedChicken: '/src/assets/images/crispy_fried_chicken_1795012446261.jpg',
  pepperedBeef: '/src/assets/images/spicy_peppered_beef_1795012446215.jpg',
  grilledFish: '/src/assets/images/grilled_spiced_fish_1795012447059.jpg',
  smallChopsPlatter: '/src/assets/images/small_chops_platter_1795012446850.jpg',
  puffPuff: '/src/assets/images/nigerian_puff_puff_1795012447228.jpg',
  meatPieSamosa: '/src/assets/images/meat_pie_samosa_1795012448945.jpg',
  cateringSpread: '/src/assets/images/catering_event_spread_1795012448921.jpg',
} as const;

export const MENU_CATEGORIES: MenuCategory[] = [
  'All',
  'Rice Dishes',
  'Main Meals',
  'Proteins',
  'Small Chops',
  'Catering Packages',
];

export const DISH_ITEMS: DishItem[] = [
  // Rice Dishes
  {
    id: 'jollof-rice',
    name: 'Nigerian Jollof Rice',
    category: 'Rice Dishes',
    description:
      'Richly seasoned smoky party Jollof rice slow-simmered in blended tomatoes, peppers, and aromatic spices.',
    priceLabel: 'Sample: ₦4,500',
    image: IMAGES.heroJollof,
    alt: 'Smoky Nigerian Jollof rice served with grilled chicken, fried plantain, and fresh coleslaw',
    featuredOnHome: true,
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    category: 'Rice Dishes',
    description:
      'Fragrant golden rice stir-fried with sweetcorn, carrots, green peas, bell peppers, and savoury seasoning.',
    priceLabel: 'Sample: ₦4,800',
    image: IMAGES.friedRice,
    alt: 'Nigerian fried rice with diced vegetables and seasoned prawns in a cream ceramic bowl',
    featuredOnHome: true,
  },
  {
    id: 'coconut-rice',
    name: 'Coconut Rice',
    category: 'Rice Dishes',
    description:
      'Silky rice simmered in fresh coconut milk with bell peppers, scallions, and delicate West African spices.',
    priceLabel: 'Sample: ₦5,200',
    image: IMAGES.coconutRice,
    alt: 'Creamy Nigerian coconut rice topped with toasted coconut flakes and roasted chicken',
    featuredOnHome: true,
  },
  {
    id: 'ofada-rice',
    name: 'Ofada Rice',
    category: 'Rice Dishes',
    description:
      'Traditional unpolished local Ofada rice paired with rich Ayamase green pepper sauce and assorted meat.',
    priceLabel: 'Sample: ₦5,500',
    image: IMAGES.ofadaRice,
    alt: 'Authentic Ofada rice served on banana leaf with Ayamase sauce and boiled egg',
    featuredOnHome: true,
  },

  // Main Meals
  {
    id: 'beans-plantain',
    name: 'Nigerian Beans and Plantain',
    category: 'Main Meals',
    description:
      'Tender slow-cooked honey beans finished in a rich palm oil pepper sauce alongside sweet caramelized dodo.',
    priceLabel: 'Sample: ₦4,200',
    image: IMAGES.beansPlantain,
    alt: 'Nigerian honey beans stew served beside golden fried sweet plantain slices',
  },
  {
    id: 'yam-porridge',
    name: 'Yam Porridge',
    category: 'Main Meals',
    description:
      'Creamy Asaro yam porridge cooked with palm oil, fresh pepper blend, leafy greens, and savoury smoked fish.',
    priceLabel: 'Sample: ₦4,500',
    image: IMAGES.yamPorridge,
    alt: 'Creamy Nigerian yam porridge garnished with fresh greens and smoked fish',
  },
  {
    id: 'efo-riro',
    name: 'Efo Riro',
    category: 'Main Meals',
    description:
      'Vibrant Yoruba spinach stew simmered with locust beans, roasted peppers, and generous cuts of tender meat.',
    priceLabel: 'Sample: ₦6,000',
    image: IMAGES.efoRiro,
    alt: 'Rich Efo Riro vegetable soup in a clay bowl served with smooth pounded yam',
  },
  {
    id: 'egusi-soup',
    name: 'Egusi Soup',
    category: 'Main Meals',
    description:
      'Hearty ground melon seed soup enriched with fresh leafy vegetables, stockfish, and braised beef.',
    priceLabel: 'Sample: ₦5,800',
    image: IMAGES.egusiSoup,
    alt: 'Thick Nigerian Egusi melon soup with braised beef alongside garri eba',
  },

  // Proteins
  {
    id: 'grilled-chicken',
    name: 'Grilled Chicken',
    category: 'Proteins',
    description:
      'Succulent chicken marinated in ginger, garlic, and pepper spices, flame-grilled and glazed to perfection.',
    priceLabel: 'Sample: ₦4,000',
    image: IMAGES.grilledChicken,
    alt: 'Char-grilled spiced Nigerian peppered chicken with red onions and lime wedges',
    featuredOnHome: true,
  },
  {
    id: 'fried-chicken',
    name: 'Fried Chicken',
    category: 'Proteins',
    description:
      'Golden crisp fried chicken seasoned thoroughly and tossed with sweet sautéed onions and bell peppers.',
    priceLabel: 'Sample: ₦3,800',
    image: IMAGES.friedChicken,
    alt: 'Golden crispy Nigerian fried chicken with sautéed bell peppers and onions',
  },
  {
    id: 'beef',
    name: 'Peppered Beef',
    category: 'Proteins',
    description:
      'Tender braised beef cuts sautéed in rich ata din-din pepper sauce with fresh red onions.',
    priceLabel: 'Sample: ₦4,200',
    image: IMAGES.pepperedBeef,
    alt: 'Tender Nigerian peppered beef cubes tossed in spiced red pepper sauce',
  },
  {
    id: 'fish',
    name: 'Grilled Spiced Fish',
    category: 'Proteins',
    description:
      'Whole fresh tilapia or croaker scored, herb-marinated, and grilled with smoky pepper relish and lime.',
    priceLabel: 'Sample: ₦7,500',
    image: IMAGES.grilledFish,
    alt: 'Whole spiced Nigerian grilled fish served with fried plantain and lime',
  },

  // Small Chops
  {
    id: 'small-chops-platter',
    name: 'Small Chops Platters',
    category: 'Small Chops',
    description:
      'Party-ready selection of warm puff-puff, crispy samosas, golden spring rolls, and spicy peppered bites.',
    priceLabel: 'Sample: ₦8,500',
    image: IMAGES.userSmallChopsPlate,
    alt: 'White platter of Nigerian small chops with samosas, spring rolls, puff puff, and dipping sauce',
    featuredOnHome: true,
  },
  {
    id: 'puff-puff',
    name: 'Puff Puff',
    category: 'Small Chops',
    description:
      'Warm, pillowy golden Nigerian puff-puff freshly fried in small batches for irresistible softness.',
    priceLabel: 'Sample: ₦2,500',
    image: IMAGES.puffPuff,
    alt: 'Freshly fried golden-brown Nigerian puff puff stacked in a parchment-lined bowl',
  },
  {
    id: 'samosa',
    name: 'Samosa',
    category: 'Small Chops',
    description:
      'Crisp golden pastry triangles filled with spiced minced beef, aromatic herbs, and diced vegetables.',
    priceLabel: 'Sample: ₦3,500',
    image: IMAGES.meatPieSamosa,
    alt: 'Crisp golden triangular samosas arranged beside spring rolls and meat pies',
  },
  {
    id: 'spring-rolls',
    name: 'Spring Rolls',
    category: 'Small Chops',
    description:
      'Light, crunchy hand-rolled pastry wraps stuffed with delicately seasoned shredded vegetables and chicken.',
    priceLabel: 'Sample: ₦3,500',
    image: IMAGES.smallChopsPlatter,
    alt: 'Golden crispy spring rolls served on a Nigerian small chops platter',
  },
  {
    id: 'meat-pie',
    name: 'Meat Pie',
    category: 'Small Chops',
    description:
      'Buttery, flaky shortcrust pastry filled generously with savoury seasoned minced beef and tender potatoes.',
    priceLabel: 'Sample: ₦2,800',
    image: IMAGES.meatPieSamosa,
    alt: 'Flaky golden baked Nigerian meat pies arranged on cream stoneware',
  },
];

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'small-chops-package',
    name: 'Small Chops Package',
    description:
      'Crowd-pleasing finger foods freshly fried and packed warm for house parties, showers, and receptions.',
    inclusions: [
      'Warm golden puff-puff',
      'Spiced beef samosas and vegetable spring rolls',
      'Peppered chicken or gizzard skewers',
      'Custom tray counts tailored to your guest list',
    ],
    priceLabel: 'Sample: From ₦35,000',
    image: IMAGES.userSmallChopsPlate,
    alt: 'Assorted party small chops platter prepared for guest receptions',
    featuredOnHome: true,
  },
  {
    id: 'birthday-catering-package',
    name: 'Birthday Catering Package',
    description:
      'Celebrate milestones effortlessly with vibrant party rice, tender proteins, plantain sides, and small chops.',
    inclusions: [
      'Choice of Jollof Rice, Fried Rice, or Coconut Rice',
      'Grilled or fried seasoned chicken and beef',
      'Sweet fried plantain (dodo) and fresh coleslaw',
      'Optional starter trays of party small chops',
    ],
    priceLabel: 'Sample: From ₦85,000',
    image: IMAGES.userPartyTrays,
    alt: 'Party foil catering trays of Jollof rice, peppered meat, puff-puff, and fried plantain',
    featuredOnHome: true,
  },
  {
    id: 'corporate-lunch-package',
    name: 'Corporate Lunch Package',
    description:
      'Dependable, neatly portioned Nigerian meals prepared fresh for office meetings, trainings, and team lunches.',
    inclusions: [
      'Individually packed or buffet-style rice and main meals',
      'Choice of grilled chicken, peppered beef, or fish',
      'Clean hygienic packaging for convenient office service',
      'Scheduled delivery or pickup across Surulere and Lagos',
    ],
    priceLabel: 'Sample: From ₦55,000',
    image: IMAGES.userFeastSpread,
    alt: 'Spread of Nigerian fried rice, suya skewers, chicken wings, spring rolls, and plantain',
    featuredOnHome: true,
  },
  {
    id: 'family-food-package',
    name: 'Family Food Package',
    description:
      'Generous home-style bowls and food trays crafted for weekend gatherings, Sunday dinners, and visiting guests.',
    inclusions: [
      'Choice of Nigerian rice dish or traditional soup bowl',
      'Efo Riro, Egusi Soup, or Beans and Plantain options',
      'Assorted meats, stockfish, or grilled chicken portions',
      'Family-sized containers ready to heat and serve',
    ],
    priceLabel: 'Sample: From ₦45,000',
    image: IMAGES.userCopperJollof,
    alt: 'Copper pot smoky Jollof rice with grilled chicken, plantain, and fresh salad',
  },
  {
    id: 'wedding-event-catering',
    name: 'Wedding and Event Catering',
    description:
      'Full-scale Nigerian event catering crafted to leave a lasting impression at weddings, receptions, and ceremonies.',
    inclusions: [
      'Multi-dish menu planning across rice, soups, and swallows',
      'Ofada rice with Ayamase and traditional delicacies',
      'Abundant small chops service and assorted proteins',
      'Coordinated preparation tailored to your guest count',
    ],
    priceLabel: 'Sample: From ₦250,000',
    image: IMAGES.userLagosRooftop,
    alt: 'Lagos rooftop Nigerian catering buffet spread with Jollof rice, small chops, and chef service',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-u1',
    title: 'Copper Pot Jollof Feast',
    caption: 'Smoky Nigerian Jollof rice in a copper pot with char-grilled chicken, dodo plantain, salad, and sauces.',
    category: 'Rice & Mains',
    image: IMAGES.userCopperJollof,
    alt: 'Overhead photograph of Jollof rice in a copper pot with grilled chicken, plantain, and salad',
    featured: true,
  },
  {
    id: 'gal-u2',
    title: 'Lagos Event Catering Spread',
    caption: 'Full celebration buffet overlooking Lagos with sculpted Jollof platters, soups, and small chops.',
    category: 'Catering & Kitchen',
    image: IMAGES.userLagosRooftop,
    alt: 'Lagos rooftop Nigerian catering buffet table with chef serving guests at sunset',
    featured: true,
  },
  {
    id: 'gal-u3',
    title: 'Party Catering Trays',
    caption: 'Generous foil trays of party Jollof rice, fried meat with onions, puff-puff, dodo, and salad.',
    category: 'Catering & Kitchen',
    image: IMAGES.userPartyTrays,
    alt: 'Catering trays filled with Nigerian Jollof rice, seasoned meat, puff-puff, and fried plantain',
  },
  {
    id: 'gal-u4',
    title: 'Classic Small Chops Platter',
    caption: 'Crisp samosas, golden spring rolls, pillowy puff-puff, and savoury bites with creamy dip.',
    category: 'Small Chops',
    image: IMAGES.userSmallChopsPlate,
    alt: 'Platter of crisp samosas, spring rolls, puff puff, and fried bites with dipping sauce',
  },
  {
    id: 'gal-u5',
    title: 'Fried Rice, Suya & Wings Table',
    caption: 'Seasoned fried rice surrounded by suya beef skewers, glazed wings, spring rolls, and plantain.',
    category: 'Rice & Mains',
    image: IMAGES.userFeastSpread,
    alt: 'Overhead spread of Nigerian fried rice, suya skewers, chicken wings, plantain, and spring rolls',
  },
  {
    id: 'gal-u6',
    title: 'Grand Banquet Buffet',
    caption: 'Warm chafing dishes arranged for wedding receptions, milestone dinners, and corporate banquets.',
    category: 'Catering & Kitchen',
    image: IMAGES.userBanquetBuffet,
    alt: 'Indoor banquet buffet table with chafing dishes of rice, fried plantain, and meats',
  },
  {
    id: 'gal-u7',
    title: 'Inside Our Kitchen',
    caption: 'Warm hospitality and dedicated culinary preparation inside a spotless commercial kitchen.',
    category: 'Catering & Kitchen',
    image: IMAGES.userChefKitchen,
    alt: 'Smiling Nigerian chef in black uniform inside an immaculate commercial kitchen',
  },
  {
    id: 'gal-4',
    title: 'Ofada Rice & Ayamase',
    caption: 'Authentic Ofada rice served on banana leaf with rich Ayamase sauce and boiled egg.',
    category: 'Rice & Mains',
    image: IMAGES.ofadaRice,
    alt: 'Traditional Ofada rice on banana leaf with Ayamase green pepper stew',
  },
  {
    id: 'gal-5',
    title: 'Char-Grilled Peppered Chicken',
    caption: 'Flame-grilled spiced chicken glazed in rich pepper marinade with red onions and lime.',
    category: 'Proteins',
    image: IMAGES.grilledChicken,
    alt: 'Char-grilled spiced Nigerian peppered chicken on a slate platter',
  },
  {
    id: 'gal-6',
    title: 'Nigerian Fried Rice Bowl',
    caption: 'Colourful seasoned fried rice tossed with fresh vegetables and savoury garnish.',
    category: 'Rice & Mains',
    image: IMAGES.friedRice,
    alt: 'Nigerian fried rice with vegetables and spiced prawns',
  },
  {
    id: 'gal-7',
    title: 'Efo Riro & Pounded Yam',
    caption: 'Hearty Yoruba spinach stew in a clay bowl alongside smooth pounded yam.',
    category: 'Rice & Mains',
    image: IMAGES.efoRiro,
    alt: 'Nigerian Efo Riro soup in clay bowl beside pounded yam',
  },
  {
    id: 'gal-3',
    title: 'Celebration Small Chops & Skewers',
    caption: 'Golden puff-puff, crispy samosas, spring rolls, and peppered skewers ready for guests.',
    category: 'Small Chops',
    image: IMAGES.smallChopsPlatter,
    alt: 'Party small chops platter with puff puff, samosas, spring rolls, and skewers',
  },
  {
    id: 'gal-8',
    title: 'Meat Pies, Samosas & Spring Rolls',
    caption: 'Freshly baked flaky meat pies alongside crisp samosas and golden spring rolls.',
    category: 'Small Chops',
    image: IMAGES.meatPieSamosa,
    alt: 'Flaky Nigerian meat pies alongside samosas and spring rolls',
  },
  {
    id: 'gal-9',
    title: 'Whole Grilled Spiced Fish',
    caption: 'Herb-marinated whole tilapia scored and grilled with golden plantain slices.',
    category: 'Proteins',
    image: IMAGES.grilledFish,
    alt: 'Whole grilled spiced fish served with sweet fried plantain and lime',
  },
  {
    id: 'gal-10',
    title: 'Honey Beans & Fried Plantain',
    caption: 'Slow-cooked Ewa Riro honey beans drizzled with pepper sauce and sweet dodo.',
    category: 'Rice & Mains',
    image: IMAGES.beansPlantain,
    alt: 'Nigerian honey beans stew and caramelized fried plantain',
  },
  {
    id: 'gal-11',
    title: 'Creamy Coconut Rice',
    caption: 'Aromatic coconut-simmered rice garnished with toasted coconut and roasted chicken.',
    category: 'Rice & Mains',
    image: IMAGES.coconutRice,
    alt: 'Nigerian coconut rice garnished with toasted coconut flakes and roasted chicken',
  },
  {
    id: 'gal-12',
    title: 'Freshly Fried Puff Puff',
    caption: 'Soft, airy golden puff-puff batches prepared warm for everyday cravings and parties.',
    category: 'Small Chops',
    image: IMAGES.puffPuff,
    alt: 'Warm golden Nigerian puff puff balls in a ceramic bowl',
  },
  {
    id: 'gal-13',
    title: 'Rich Egusi Melon Soup',
    caption: 'Slow-simmered Egusi soup with leafy greens and tender beef paired with eba.',
    category: 'Rice & Mains',
    image: IMAGES.egusiSoup,
    alt: 'Traditional Nigerian Egusi soup with braised beef and eba',
  },
  {
    id: 'gal-14',
    title: 'Spicy Peppered Beef Bites',
    caption: 'Tender braised beef glazed in aromatic ata din-din sauce with crisp red onions.',
    category: 'Proteins',
    image: IMAGES.pepperedBeef,
    alt: 'Nigerian peppered beef bites in spicy red pepper sauce',
  },
  {
    id: 'gal-15',
    title: 'Crispy Seasoned Fried Chicken',
    caption: 'Golden fried chicken tossed with sweet bell peppers and caramelized onions.',
    category: 'Proteins',
    image: IMAGES.friedChicken,
    alt: 'Crispy golden Nigerian fried chicken garnished with sautéed peppers',
  },
];
