export type ProductTier = "classic" | "premium" | "signature";
export type ProductCategory =
  | "powder"
  | "cubes"
  | "flavored"
  | "chocolate"
  | "ghee";

export interface NutritionFacts {
  servingSize: string;
  items: { label: string; value: string }[];
}

export interface Product {
  slug: string;
  name: string;
  hindiName?: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  tier: ProductTier;
  tagline: string;
  image: string;
  labelImage?: string;
  accentColor: string;
  badge?: string;
  ingredients: string[];
  uses: string[];
  highlights: string[];
  nutrition: NutritionFacts;
  storage: string;
  featured?: boolean;
}

const cubeNutrition: NutritionFacts = {
  servingSize: "Per 100g (Approx.)",
  items: [
    { label: "Protein", value: "0.62 g" },
    { label: "Fat", value: "<0.10 g" },
    { label: "Carbohydrate (Available)", value: "91.13 g" },
    { label: "Energy", value: "367.36 Kcal" },
    { label: "Sucrose (Natural)", value: "70.76 g" },
    { label: "Sodium", value: "37.40 mg" },
  ],
};

const sharedHighlights = [
  "Herbally purified using okra (bhendi)",
  "No added sugar or artificial sweetener",
  "No chemicals & synthetic additives",
  "No added preservatives",
  "Best quality sugarcane used",
  "Pure & hygienic",
];

const sharedUses = [
  "Perfect post-meal healthy guilt-free sweet",
  "Sweetener for tea, coffee, milk & health foods",
  "Ideal for traditional sweets, baking & cooking",
  "Enjoy with chapati, bhakri, paratha, thepla & rice",
];

export const products: Product[] = [
  {
    slug: "organic-jaggery-powder",
    name: "Organic Jaggery Powder",
    hindiName: "गुड़ पाउडर",
    shortDescription:
      "Fine jaggery powder from chemical-free Maharashtra farms — perfect for daily sweetening.",
    description:
      "Guric Jaggery Powder is sourced from the finest chemical-free farms in Maharashtra, crushed and powdered traditionally to keep nutrients in and nasties out. No bleach. No sulphur. Just pure cane goodness.",
    category: "powder",
    tier: "premium",
    tagline: "Switch to the Healthy Sweetener",
    image: "/images/hero-jaggery-powder.png",
    labelImage: "/images/label-jaggery-powder.png",
    accentColor: "#3B5323",
    badge: "Bestseller",
    ingredients: ["Concentrated Sugarcane Juice"],
    uses: [
      "Stir into hot tea & coffee",
      "Perfect for cakes & cookies",
      "Sprinkle on porridge or dahi",
    ],
    highlights: [
      ...sharedHighlights,
      "Superior quality product",
      "Unique authentic taste",
    ],
    nutrition: {
      servingSize: "Per serving",
      items: [
        { label: "Iron", value: "15 mg" },
        { label: "Calcium", value: "200 mg" },
      ],
    },
    storage:
      "Store in a cool, dry place. Press ziplock tight after use. Once opened, store in an airtight container.",
    featured: true,
  },
  {
    slug: "handmade-jaggery-cubes",
    name: "Handmade Jaggery Cubes",
    hindiName: "देसी गुड़",
    shortDescription:
      "Traditional handmade cubes with rich, authentic jaggery flavour.",
    description:
      "Our Handmade Jaggery Cubes are crafted using time-honoured methods for a rich, caramel-like sweetness. Healthy, nutri-rich & pure — your everyday natural sweetener.",
    category: "cubes",
    tier: "classic",
    tagline: "Healthy, Nutri-Rich & Pure",
    image: "/images/label-handmade-cubes.png",
    labelImage: "/images/label-handmade-cubes.png",
    accentColor: "#E67E22",
    badge: "Classic",
    ingredients: ["Concentrated Sugarcane Juice", "Ghee"],
    uses: sharedUses,
    highlights: sharedHighlights,
    nutrition: cubeNutrition,
    storage:
      "Store in a cool, dry, hygienic place. Once opened, store in an airtight container.",
  },
  {
    slug: "desi-ghee-jaggery-cubes",
    name: "Desi Ghee Jaggery Cubes",
    hindiName: "देसी घी गुड़",
    shortDescription:
      "Premium cubes enriched with real buffalo ghee for a rich, indulgent taste.",
    description:
      "Experience the luxury of real buffalo ghee blended with pure jaggery. These premium cubes deliver a melt-in-mouth sweetness ideal for post-meal treats and festive gifting.",
    category: "ghee",
    tier: "premium",
    tagline: "Real Buffalo Ghee Used",
    image: "/images/product-desi-ghee-jar.png",
    labelImage: "/images/label-desi-ghee-cubes.png",
    accentColor: "#8B2635",
    badge: "Premium",
    ingredients: ["Concentrated Sugarcane Juice", "Ghee"],
    uses: sharedUses,
    highlights: [
      ...sharedHighlights,
      "Real buffalo ghee infused",
      "Unique original traditional taste",
    ],
    nutrition: cubeNutrition,
    storage:
      "Store in a cool, dry, hygienic place. Once opened, store in an airtight container.",
    featured: true,
  },
  {
    slug: "chocolate-jaggery-cubes",
    name: "Chocolate Ghee Jaggery Cubes",
    hindiName: "चॉकलेट घी गुड़",
    shortDescription:
      "Rich chocolate meets pure jaggery and real buffalo ghee — guilt-free indulgence in every cube.",
    description:
      "A Guric signature innovation: real cocoa and desi ghee blended with traditional jaggery cubes. Guilt-free chocolate sweetness without refined sugar — perfect for kids and chocolate lovers.",
    category: "chocolate",
    tier: "signature",
    tagline: "Real Buffalo Ghee Used",
    image: "/images/product-chocolate-ghee-jar.png",
    labelImage: "/images/label-chocolate-cubes.png",
    accentColor: "#5C2D82",
    badge: "Signature",
    ingredients: ["Concentrated Sugarcane Juice", "Ghee", "Cocoa Powder"],
    uses: [
      "Anytime guilt-free chocolate treat",
      "Post-meal dessert for all ages",
      "Sweetener for milk, health drinks & baking",
      "Traditional sweets with a chocolate twist",
    ],
    highlights: [
      ...sharedHighlights,
      "Real cocoa powder infused",
      "No added colour",
      "Consistent pure quality",
    ],
    nutrition: cubeNutrition,
    storage:
      "Store in a cool, dry place away from direct sunlight. Use airtight container after opening.",
    featured: true,
  },
  {
    slug: "adhark-jaggery-cubes",
    name: "Adrak Ghee Jaggery Cubes",
    hindiName: "अदरक घी गुड़",
    shortDescription:
      "Warming adrak and real buffalo ghee in every cube — Ayurvedic comfort with pure sweetness.",
    description:
      "Blending fresh adrak (ginger) and real buffalo ghee with pure jaggery. These cubes aid digestion and add a spicy-sweet note to your tea, milk, or winter wellness routine.",
    category: "flavored",
    tier: "premium",
    tagline: "Real Buffalo Ghee Used",
    image: "/images/product-adrak-ghee-jar.png",
    accentColor: "#C9A227",
    badge: "Flavoured",
    ingredients: [
      "Concentrated Sugarcane Juice",
      "Ghee",
      "Natural Ginger",
    ],
    uses: [
      "Ideal with ginger tea & kahwa",
      "Winter wellness sweetener",
      "Digestive aid after meals",
      "Traditional home remedies",
    ],
    highlights: [
      ...sharedHighlights,
      "Natural ginger infusion",
      "Warming & digestive benefits",
    ],
    nutrition: cubeNutrition,
    storage:
      "Store in a cool, dry, hygienic place. Once opened, store in an airtight container.",
    featured: true,
  },
  {
    slug: "ilaychi-jaggery-cubes",
    name: "Ilaichi Ghee Jaggery Cubes",
    hindiName: "इलायची घी गुड़",
    shortDescription:
      "Fragrant ilaichi and real buffalo ghee with pure jaggery — festive aroma in every bite.",
    description:
      "Fragrant ilaichi (cardamom) and real buffalo ghee meet traditional jaggery for an aromatic treat. Perfect for festive sweets, masala chai, and premium gifting.",
    category: "flavored",
    tier: "premium",
    tagline: "Real Buffalo Ghee Used",
    image: "/images/product-ilaichi-ghee-jar.png",
    accentColor: "#2D6A4F",
    badge: "Flavoured",
    ingredients: [
      "Concentrated Sugarcane Juice",
      "Ghee",
      "Natural Cardamom (Ilaichi)",
    ],
    uses: [
      "Perfect with masala chai & desserts",
      "Festive & wedding gifting",
      "Traditional mithai preparation",
      "Premium post-meal sweet",
    ],
    highlights: [
      ...sharedHighlights,
      "Natural cardamom infusion",
      "Festive aromatic flavour",
    ],
    nutrition: cubeNutrition,
    storage:
      "Store in a cool, dry, hygienic place. Once opened, store in an airtight container.",
    featured: true,
  },
];

/** Order shown in combined lineup banner (left → right) */
export const productLineupSlugs = [
  "organic-jaggery-powder",
  "chocolate-jaggery-cubes",
  "adhark-jaggery-cubes",
  "ilaychi-jaggery-cubes",
  "desi-ghee-jaggery-cubes",
] as const;

export const categoryLabels: Record<ProductCategory, string> = {
  powder: "Jaggery Powder",
  cubes: "Jaggery Cubes",
  flavored: "Flavoured Cubes",
  chocolate: "Chocolate Range",
  ghee: "Desi Ghee Range",
};

export const tierLabels: Record<ProductTier, string> = {
  classic: "Classic",
  premium: "Premium",
  signature: "Signature",
};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return productLineupSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
}
