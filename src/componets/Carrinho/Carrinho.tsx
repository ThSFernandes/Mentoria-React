import { useContext } from "react";
import { Icone } from "../Icone/Icone";
import "./carrinho.scss";
import { CartContext } from "../../context/CartContext";

export function Carrinho(): React.ReactElement {

  const {listaProdutos} = useContext(CartContext);

  return (
    <div className="carrinho-area">
      <div className="text-area">
        <p className="text-meu-carrinho">Meu carrinho</p>
        <p className="text-quant-carrinho">{listaProdutos.length} itens</p>
      </div>
      <div className="shopping-card">
        <Icone name={"shoppingCart"} />
      </div>
    </div>
  );
}
