import { useContext, useState } from "react";
import { Button } from "../Button/Button";
import "./card.scss";
import { CartContext } from "../../context/CartContext";

interface CardProps {
  id: number;
  urlImage: string;
  preco: string;
  descricao?: string;
  quantidade?: number;
}

export function Card({
  urlImage,
  preco,
  descricao,
  quantidade,
}: CardProps): React.ReactElement {
  const [quant, setQuant] = useState<number>(quantidade ?? 0);

  const {contador, setContador} = useContext(CartContext);
  const incrementarContador = (): void => {
    
    setContador((state) => {
      return state + 1;
    });
  };

  return (
    <div className="container-card">
      <img className="imagem-card" src={urlImage} alt="tênis preto" />
      <div className="informacoes-tenis">
        <p className="descricao-tenis" title={descricao}>
          {descricao}
        </p>
        <p className="preco-tenis">{preco}</p>
      </div>
      <Button quantidade={contador} onClick={incrementarContador} />
    </div>
  );
}
