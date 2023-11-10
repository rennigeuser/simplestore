import { useMemo } from "react";
import { productModel } from "@entities/product";

type Product = productModel.productModels.Product;

// type SortBy = keyof Pick<Product, "title" | "description" | "price">;
type SortBy = keyof Pick<Product, "title">;

export const useSortedProducts = (products: Product[], sortBy: SortBy) => {
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      return a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase());
    });
  }, [sortBy, products]);

  return sortedProducts;
};

export const useProducts = (
  products: Product[],
  query: string,
  sortBy: SortBy
) => {
  const sortedProducts = useSortedProducts(products, sortBy);

  const sortedAndFilteredProducts = useMemo(() => {
    return sortedProducts.filter((task) => {
      return task.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, sortedProducts]);

  return sortedAndFilteredProducts;
};
