// Re-exports products from the central CMS file (src/content/site.ts)
import { site } from "@/content/site";
import type { Product } from "@/components/misfit/ProductCard";

export const products: Product[] = site.products;
