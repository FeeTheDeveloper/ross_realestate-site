import fs from "fs";
import path from "path";

export type Listing = {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  imageAlt: string;
};

const listingImages = ["house-1.jpg", "house-2.jpg", "house-3.jpg"] as const;

const fallbackImage = "/listings/placeholder.svg";

const resolveImage = (filename: string) => {
  const filePath = path.join(process.cwd(), "public", "listings", filename);
  return fs.existsSync(filePath) ? `/listings/${filename}` : fallbackImage;
};

export const listings: Listing[] = [
  {
    id: "soho-penthouse",
    title: "SoHo Penthouse Atelier",
    location: "SoHo, Manhattan",
    price: "$8.9M",
    beds: 3,
    baths: 3.5,
    sqft: "3,240",
    image: resolveImage(listingImages[0]),
    imageAlt: "Penthouse living room with skyline views"
  },
  {
    id: "beverly-modern",
    title: "Beverly Hills Modern Estate",
    location: "Beverly Hills, CA",
    price: "$14.2M",
    beds: 5,
    baths: 6,
    sqft: "6,480",
    image: resolveImage(listingImages[1]),
    imageAlt: "Modern estate with pool deck"
  },
  {
    id: "miami-waterfront",
    title: "Miami Waterfront Retreat",
    location: "Sunset Islands, Miami",
    price: "$6.4M",
    beds: 4,
    baths: 4,
    sqft: "3,860",
    image: resolveImage(listingImages[2]),
    imageAlt: "Waterfront residence at sunset"
  }
];
