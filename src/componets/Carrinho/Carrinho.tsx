import { useContext } from "react";
import type { Product } from "../../types/Produto";
import { Icone } from "../Icone/Icone";
import "./carrinho.scss";
import { CartContext } from "../../context/CartContext";

interface CarrinhoProps {
  produto?: Product[],
}

export function Carrinho({produto = []}: CarrinhoProps ): React.ReactElement {

  const {contador} = useContext(CartContext);

  return (
    <div className="carrinho-area">
      <div className="text-area">
        <p className="text-meu-carrinho">Meu carrinho</p>
        <p className="text-quant-carrinho">{contador} itens</p>
      </div>
      <div className="shopping-card">
        <Icone name={"shoppingCart"} />
      </div>
    </div>
  );
}
