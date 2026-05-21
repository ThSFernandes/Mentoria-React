import "./sytles/reset.css";
import "./sytles/global.scss";
import { Home } from "./pages/Home/Home";
import { CartProvider } from "./context/CartContext";

function App(): React.ReactElement {
  return (
    <CartProvider >
      <Home />
    </CartProvider>
  );
}

export default App;
