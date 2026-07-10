import { createRootRoute, createRoute } from "@tanstack/react-router";
import { rootLayout } from "./routerConfig";
import { Home } from "../screens/HomeScreen/Home";
import { Cart } from "../screens/CartScreen/Cart";
import { ProductDetail } from "../componets/Pages/ProductDetail/ProductDetail";
import { DadosPessoais } from "../componets/Pages/DadosPessoais/DadosPessoais";

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

const dadosPessoaisRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/dados-pessoais",
  component: DadosPessoais,
});

export const routeTree = RootRoute.addChildren([
  homeRoute,
  cartRoute,
  productDetailRoute,
  dadosPessoaisRoute,
]);
