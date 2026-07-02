import "./sytles/reset.css";
import "./sytles/global.scss";
import { CartProvider } from "./context/CartContext";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { router } from "./router/__router";
import { RouterProvider } from "@tanstack/react-router";


function App(): React.ReactElement {
  return (
    <RouterProvider router={router}/>

    // <CartProvider>
    //   <Cart />
    // </CartProvider>
  );
}

export default App;

