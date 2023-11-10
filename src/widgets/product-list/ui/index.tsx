import { productModel, productUi } from "@entities/product";

const { ProductCard } = productUi;

type Props = {
  products: productModel.productModels.Product[];
};

export const ProductList = ({ products }: Props) => {
  return (
    <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 gap-2">
      {products.map(({ img, description, title, price, slug }, i) => (
        <ProductCard
          img={img}
          description={description}
          title={title}
          price={price}
          slug={slug}
          key={i}
        />
      ))}
    </div>
  );
};
