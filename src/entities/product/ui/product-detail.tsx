import { productModels } from "../model";
import ShopCart from "@shared/icons/ShopCart";
import { Link } from "react-router-dom";

type Props = productModels.Product;

export const ProductDetailCard = ({
  title,
  description,
  img,
  price,
  rating,
}: Props) => {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <div className="border-b">
          <div className="text-3xl font-bold dark:text-white">{title}</div>
          <div className="">
            <Ratings rating={rating} maxStars={5} />
            <Reviews />
          </div>
        </div>

        <div className="flex flex-col md:flex-row content-center gap-5">
          <div className="flex flex-col gap-y-1 items-center">
            <ProductHero img={img} />
            <BuyBtn />
          </div>

          <div className="flex flex-col p-4">
            <div className="dark:text-white font-medium text-xl">
              {description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BuyBtn = () => {
  return (
    <>
      <button
        type="button"
        className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <ShopCart />
        Buy now
      </button>
    </>
  );
};

type ProductMainImageProps = Pick<productModels.Product, "img">;

const ProductHero = ({ img }: ProductMainImageProps) => {
  return (
    <>
      <img
        className="max-h-[600px] max-w-[600px] object-contain rounded-3xl"
        src={img.src}
        alt={img.alt}
      />
    </>
  );
};

type RatingProps = Pick<productModels.Product, "rating"> & { maxStars: number };

const Ratings = ({ rating, maxStars }: RatingProps) => {
  const fullStars = Math.floor(rating);

  return (
    <>
      <div className="flex items-center cursor-pointer">
        {[...Array(maxStars).keys()].map((_, i) =>
          i < fullStars ? <RatingStar key={i} /> : <RatingStar empty key={i} />
        )}

        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          {rating} out of {maxStars}
        </p>
      </div>
    </>
  );
};

type RatingStarProps = {
  empty?: boolean;
};

const RatingStar = ({ empty }: RatingStarProps) => {
  return (
    <>
      <svg
        className={`w-4 h-4  ${
          empty
            ? "text-gray-300 mr-1 dark:text-gray-500"
            : "text-yellow-300 mr-1"
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </>
  );
};

const Reviews = () => {
  return (
    <>
      <div></div>
    </>
  );
};
