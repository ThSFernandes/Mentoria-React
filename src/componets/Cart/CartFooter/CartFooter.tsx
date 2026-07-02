import { CheckoutButton } from "./CheckoutButton";
import { TotalDisplay } from "./TotalDisplay";
import { TOTAL_CARRINHO_VISUAL } from "../../../pages/Cart/cartVisualMock";
import "./cart-footer.scss";

export function CartFooter(): React.ReactElement {
  return (
    <footer className="rodape-carrinho">
      <CheckoutButton />
      <TotalDisplay total={TOTAL_CARRINHO_VISUAL} />
    </footer>
  );
}
