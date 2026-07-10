import "./sytles/reset.css";
import "./sytles/global.scss";
import { router } from "./router/routerConfig";
import { RouterProvider } from "@tanstack/react-router";
import { CartProvider } from "./context/CartContext";

function App(): React.ReactElement {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
