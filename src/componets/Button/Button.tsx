import { Icone } from "../Icone/Icone";
import "./button.scss";

interface ButtonProps {
  quantidade?: number;
  text?: string;
  onClick: () => void;
}

export function Button({
  quantidade,
  text = "Adicionar ao carrinho",
  onClick,
 
}: ButtonProps): React.ReactElement {
  return (
    <button className="button" onClick={onClick}>
      <div className="contador-produto">
        <Icone name="shoppingCart" />
        <span className="quantidade">{quantidade}</span>
      </div>
      <p className="texto-adicionar">{text}</p>
    </button>
  );
}
