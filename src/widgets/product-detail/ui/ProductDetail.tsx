import { productUi, productModel } from "@entities/product";

const { ProductDetailCard } = productUi;

type Product = productModel.productModels.Product;

type Props = {
  product: Product;
};

export const ProductDetailWidget = ({ product }: Props) => {
  return (
    <>
      <ProductDetailCard {...product} />
    </>
  );
};
