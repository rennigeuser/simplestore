import { productModel } from "@entities/product";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useProducts } from "../model/hooks";

const { setFiltered } = productModel.productSlice.reducers;

type Props = {
  products: productModel.productModels.Product[];
};

export const ProductFilter = ({ products }: Props) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const filteredAndSortedProducts = useProducts(products, query, "title");

  const debounceDispatch = useDebounce(() => {
    dispatch(setFiltered(filteredAndSortedProducts));
  }, 500);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // debounceDispatch();
    // Can't use debounceDispatch there because there is no sync between query and filter
    // maybe it's because useState is async hook, so instead i'm using debounceDispatch in useEffect hook
    setQuery(e.target.value);
  };

  useEffect(() => {
    debounceDispatch();
  }, [query]);

  return (
    <>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            onChange={handleChange}
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search products..."
          />
        </div>
      </form>
    </>
  );
};
