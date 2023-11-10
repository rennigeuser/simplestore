import { widgetProductListUi } from "@widgets/product-list";
import { productFilterBarUi } from "@entities/product-filter-bar";
import { productFilterUi } from "@features/product-filter";
import { productModel } from "@entities/product";
import { useSelector } from "react-redux";

// const { ProductFilterBar } = productFilterBarUi;
const { ProductFilter } = productFilterUi;
const { ProductList } = widgetProductListUi;

const { selectFilteredProducts, selectProducts } =
  productModel.productSlice.selectors;

export default function Main() {
  const products = useSelector(selectProducts);
  const filteredProducts = useSelector(selectFilteredProducts);

  return (
    <>
      <ProductFilter products={products} />
      <ProductList products={filteredProducts} />
    </>
  );
}
