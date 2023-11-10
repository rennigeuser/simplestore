export interface Product {
  title: string;
  description: string;
  price: number;
  img: {
    src: string;
    alt: string;
  };
  productGroup?: Product[];
  reviews?: string[];
  category: unknown;
  rating: number;
  brand: unknown;
  slug: string;
  id: number;
}
