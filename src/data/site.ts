export const SITE_URL = "https://guric.in";

export const siteConfig = {
  name: "Guric",
  tagline: "Pure Jaggery · Nature's Sweetness",
  description:
    "Guric offers premium chemical-free jaggery — powder, handmade cubes, desi ghee cubes, chocolate jaggery, and flavoured cubes (adhark & ilaychi). Sourced from Maharashtra farms.",
  url: SITE_URL,
  email: "guricbusiness@gmail.com",
  phone: "+91 9890323186",
  address: {
    street: "GAT NO 3139, Khodave Vasti Dapodi, Bori Pardhi",
    city: "Daund, Pune",
    state: "Maharashtra",
    postalCode: "412203",
    country: "IN",
  },
  manufacturer: "Shri Balaji Gul Udyog",
  fssai: "21524084003483",
  iso: "ISO 9001:2015 Certified Company",
  social: {
    facebook:
      "https://www.facebook.com/share/1BVxKddZuM/?mibextid=wwXIfr",
  },
} as const;

export const brandHighlights = [
  {
    title: "100% Natural Jaggery",
    description: "Made from finest quality sugarcane with no artificial additives.",
    icon: "leaf",
  },
  {
    title: "Chemical Free Process",
    description: "No bleach, no sulphur — traditionally crushed and purified.",
    icon: "flask",
  },
  {
    title: "No Added Sugar",
    description: "Pure cane goodness without artificial sweeteners.",
    icon: "sugar",
  },
  {
    title: "Unique Authentic Taste",
    description: "Original traditional jaggery taste and colour in every batch.",
    icon: "heart",
  },
] as const;

export const jaggeryFacts = [
  "Nutrient-rich traditional food with abundant health benefits",
  "Helps balance tri-doshas (vata, pitta & kapha)",
  "Boosts immunity and improves the digestive system",
  "Helps relieve menstrual problems",
  "Improves strength of bones and joints",
  "Purifies blood and boosts haemoglobin",
  "Helps relieve excess body heat",
  "Acts as a natural body cleanser",
] as const;

export const regionalNames = [
  { lang: "Hindi", name: "गुड़" },
  { lang: "Marathi", name: "गूळ" },
  { lang: "Tamil", name: "Vellam" },
  { lang: "Kannada", name: "Bella" },
  { lang: "Telugu", name: "Bellam" },
  { lang: "Gujarati", name: "ગોળ" },
  { lang: "Bengali", name: "গুড়" },
  { lang: "Malayalam", name: "വെല്ലം" },
  { lang: "Urdu", name: "گڑ" },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/why-jaggery", label: "Why Jaggery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
