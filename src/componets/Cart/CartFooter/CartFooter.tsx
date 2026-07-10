import { useContext, useMemo } from "react";
import { CartContext } from "../../../context/CartContext";
import { CheckoutButton } from "./CheckoutButton";
import { TotalDisplay } from "./TotalDisplay";
import "./cart-footer.scss";

export function CartFooter(): React.ReactElement {
  const { listaProdutos } = useContext(CartContext);

  const total = useMemo(
    () =>
      listaProdutos.reduce(
        (acc, product) => acc + product.price * product.count,
        0,
      ),
    [listaProdutos],
  );

  return (
    <footer className="rodape-carrinho">
      <CheckoutButton />
      <TotalDisplay total={total} />
    </footer>
  );
}
