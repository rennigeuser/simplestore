import { Link } from "react-router-dom";
import { productModels } from "../model";
import { getProductDetailUrl } from "../lib";

type Props = Pick<
  productModels.Product,
  "title" | "description" | "img" | "price" | "slug"
>;

export const ProductCard = ({
  title,
  description,
  price,
  img,
  slug,
}: Props) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={"#"}>
          <img
            className="h-auto ounded-t-lg rounded-lg"
            src={img.src}
            alt={img.alt}
          />
        </Link>

        <div className="p-5">
          <Link to={"#"}>
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </p>
            <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
              {price}$
            </p>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <Link
            to={getProductDetailUrl({ productSlug: slug })}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};
