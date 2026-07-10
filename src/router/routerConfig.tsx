import { createRouter, Outlet } from "@tanstack/react-router";
import { routeTree } from "./router";

export function rootLayout(): React.ReactElement {
  return <Outlet />;
}

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
