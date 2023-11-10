import { appRoutes } from "@shared/config/routes";

interface Payload {
  productSlug: string;
}

export const getProductDetailUrl = ({ productSlug }: Payload) => {
  return appRoutes.PRODUCT_DETAIL.replace(":productSlug", productSlug);
};
