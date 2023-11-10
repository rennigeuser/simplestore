import { productModel } from "@entities/product";
import { productDetailUi } from "@widgets/product-detail";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const { ProductDetailWidget } = productDetailUi;

const { selectProduct } = productModel.productSlice.selectors;

export default function ProductDetail() {
  const { productSlug } = useParams();

  const product = useSelector(selectProduct(productSlug!));

  return (
    <>
      <ProductDetailWidget product={product!} />
    </>
  );
}
