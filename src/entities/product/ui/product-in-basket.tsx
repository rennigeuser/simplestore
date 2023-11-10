import type { Product } from "../model/models";

type Props = {
  product: Product;
};

export const ProductInBasketCard = ({ product }: Props) => {
  return (
    <>
      <div className="flex rounded-full border border-red-200">
        <img
          className="h-[128px] w-[96px]"
          src={product.img.src}
          alt={product.img.alt}
        />
        <div>{product.title}</div>
        <div>Quantity</div>
      </div>
    </>
  );
};
