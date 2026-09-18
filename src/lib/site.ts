export const SITE = {
  name: "Man-O-War Marina Village",
  shortName: "Man-O-War Marina",
  location: "Man-O-War Cay, Abaco, Bahamas",
  island: "Man-O-War Cay",
  region: "Abaco",
  country: "Bahamas",
  description:
    "Man-O-War Marina Village offers marina dockage, fuel, waterfront dining, shopping and guest amenities on Man-O-War Cay in the Abaco Islands, Bahamas.",
  marinaPhoneDisplay: "(242) 554-9500",
  marinaPhoneHref: "tel:+12425549500",
  restaurantPhoneDisplay: "(242) 554-9134",
  restaurantPhoneHref: "tel:+12425549134",
  email: "mowmv@hotmail.com",
  emailHref: "mailto:mowmv@hotmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.manowarmarinavillage.com",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Man-O-War+Cay,+Abaco,+Bahamas",
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=-77.1350%2C26.5480%2C-77.0100%2C26.6280&layer=mapnik&marker=26.5880%2C-77.0675",
} as const;

export const MARINA = {
  slips: 23,
  maxLengthFt: 120,
  maxBeamFt: 20,
  maxDraftFt: 7,
  vhfChannel: 16,
  power: ["30 amp", "50 amp"] as const,
};

export const HOURS = {
  marinaOffice: {
    title: "Marina Office",
    days: "Monday – Saturday",
    lines: ["8:00 AM – 12:00 PM", "1:00 PM – 4:00 PM"],
  },
  fuelRoadside: {
    title: "Fuel — Roadside",
    days: "Monday – Saturday",
    lines: ["9:00 AM – 12:00 PM", "2:00 PM – 4:00 PM"],
  },
  fuelDockside: {
    title: "Fuel — Dockside",
    days: "Monday – Saturday",
    lines: ["8:00 AM – 12:00 PM", "1:00 PM – 4:00 PM"],
  },
  restaurant: {
    title: "Dock N' Dine",
    days: "Monday – Saturday",
    lines: ["11:00 AM – 3:00 PM"],
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/mow-life", label: "MOW Life" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    href: "/services/dockage",
    label: "Marina",
    title: "Dockage",
    description: "23 secure marina slips for vessels up to 120 ft.",
    image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1400&q=85",
    alt: "Yachts moored along the docks of a quiet Caribbean marina",
  },
  {
    href: "/services/restaurant",
    label: "Waterfront Dining",
    title: "Dock N' Dine",
    description: "Waterfront dining featuring local and international cuisine.",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85",
    alt: "A table set with seafood beside the water with yachts beyond",
  },
  {
    href: "/services/fuel",
    label: "Fuel Services",
    title: "Fuel",
    description: "Gasoline and diesel available dockside and roadside.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
    alt: "A boat alongside the fuel dock at the marina",
  },
  {
    href: "/services/gift-shop",
    label: "Office & Gifts",
    title: "Office & Gift Shop",
    description: "Souvenirs, custom apparel, local art and marine-grade dive gear.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=85",
    alt: "Inside the marina gift shop with apparel, art and souvenirs",
  },
  {
    href: "/services#amenities",
    label: "For Guests",
    title: "Guest Amenities",
    description: "Restrooms, showers, laundry facilities and grill area.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
    alt: "Palms and boats silhouetted at sunset in the marina",
  },
  {
    href: "/services#amenities",
    label: "Relax & Unwind",
    title: "Swimming Pool",
    description: "A place for marina guests to relax after a day on the water.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85",
    alt: "A quiet resort pool surrounded by palms and lounge chairs",
  },
] as const;
