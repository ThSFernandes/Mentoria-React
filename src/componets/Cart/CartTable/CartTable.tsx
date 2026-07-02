import { CartItem } from "../CartItem/CartItem";
import { CartTableHeader } from "./CartTableHeader";
import "./cart-table.scss";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


export function CartTable(): React.ReactElement {
  const {listaProdutos} = useContext(CartContext);

  return (
    <table className="tabela-carrinho">
      <CartTableHeader />
      <tbody>
        {listaProdutos.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onIncrement={() => {}}
            onDecrement={() => {}}
          />
        ))}
      </tbody>
    </table>
  );
}
