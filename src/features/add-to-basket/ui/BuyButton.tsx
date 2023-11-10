import ShopCart from "@shared/icons/ShopCart";
import { productModel } from "@entities/product";
import { basketModel } from "@entities/basket";
import { useDispatch } from "react-redux";

const {
  reducers: { addProduct },
} = basketModel.basketSlice;

type Product = productModel.productModels.Product;

type Props = {
  product: Product;
};

export const BuyButton = ({ product }: Props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct(product));
  };

  return (
    <>
      <button
        type="button"
        className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleClick}
      >
        <ShopCart />
        Buy now
      </button>
    </>
  );
};
