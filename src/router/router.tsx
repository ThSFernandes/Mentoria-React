import { createRootRoute, createRoute } from "@tanstack/react-router";
import { rootLayout } from "./routerConfig";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";

export const RootRoute = createRootRoute({
  component: rootLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: Home,
});

const cartRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/cart",
  component: Cart,
});

const productDetailRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/productDetail/$id",

  component: ProductDetail,
});

export const routeTree = RootRoute.addChildren([
  homeRoute,
  cartRoute,
  productDetailRoute,
]);
