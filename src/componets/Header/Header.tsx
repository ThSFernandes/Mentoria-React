import "./header.scss";
import textoLogo from "../../assets/images/ROCKETSHOES.svg";
import shape from "../../assets/images/Shape.svg";
import { Carrinho } from "../Carrinho/Carrinho";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "@tanstack/react-router";

export function Header(): React.ReactElement {
  const { listaProdutos } = useContext(CartContext);

  const totalItens = listaProdutos.reduce(
    (acc, product) => acc + product.count,
    0,
  );

  return (
    <div className="header">
      <div className="header-logo-container">
        <Link to="/">
          <div className="logo-area">
            <img src={textoLogo} alt="rocketshoes" />
            <img src={shape} alt="Tênis" />
          </div>
        </Link>

        <Link to="/cart">
          <Carrinho totalItens={totalItens} />
        </Link>
      </div>
    </div>
  );
}
