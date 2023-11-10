import { Routes, Route, type RouteProps } from "react-router-dom";
import { appRoutes } from "@shared/config/routes";
import { lazy } from "react";

const Main = lazy(() => import("@pages/main"));
const ProductDetail = lazy(() => import("@pages/product-detail"));

const routes = [
  {
    path: appRoutes.ROOT,
    element: <Main />,
  },
  {
    path: appRoutes.PRODUCT_DETAIL,
    element: <ProductDetail />,
  },
] as RouteProps[];

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </>
  );
};
