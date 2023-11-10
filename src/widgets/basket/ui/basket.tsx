import { productUi, productModel } from "@entities/product";

const { ProductInBasketCard } = productUi;

type Props = {
  products: productModel.productModels.Product[];
};

export const Basket = ({ products }: Props) => {
  return (
    <>
      <form className="flex">
        <div className="flex flex-col bg-slate-300 rounded-t-2xl">
          <div className="rounded-t-2xl">Basket</div>
          <div className="">
            {products.map((product) => (
              <ProductInBasketCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </form>
    </>
  );
};
