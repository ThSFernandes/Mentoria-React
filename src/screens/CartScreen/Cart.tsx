import { Header } from "../../componets/Header/Header";
import { CartContainer } from "../../componets/Cart/CartContainer/CartContainer";
import { CartTable } from "../../componets/Cart/CartTable/CartTable";
import { CartFooter } from "../../componets/Cart/CartFooter/CartFooter";
import "./cart.scss";

export function Cart(): React.ReactElement {
  return (
    <div className="pagina-carrinho">
      <section className="main-container">
        <Header />
      </section>
      <section className="main-container area-conteudo-carrinho">
        <CartContainer>
          <CartTable />
          <CartFooter />
        </CartContainer>
      </section>
    </div>
  );
}
