import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { Home } from "../pages/Home/Home";

export const RootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />,
    </>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: Home
});

const rootTree = RootRoute.addChildren([homeRoute])

export const router = createRouter({
  rootTree
})

declare module "@tanstack/react-router"{
  interface Register{
    router: typeof router
  }
}