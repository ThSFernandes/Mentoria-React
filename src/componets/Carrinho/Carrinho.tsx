import { Icone } from "../Icone/Icone";
import "./carrinho.scss";

interface CarrinhoProps {
  totalItens?: number;
}

export function Carrinho({ totalItens }: CarrinhoProps): React.ReactElement {

  return (
    <div className="carrinho-area">
      <div className="text-area">
        <p className="text-meu-carrinho">Meu carrinho</p>
        <p className="text-quant-carrinho">{totalItens} itens</p>
      </div>
      <div className="shopping-card">
        <Icone name={"shoppingCart"} />
      </div>
    </div>
  );
}
