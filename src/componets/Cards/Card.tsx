import carrinho from "../../assets/icons/carrinhoIcon.svg";
import "./card.scss";

interface CardProps {
  urlImage: string;
  preco: string;
  descricao?: string;
  quantidade: number;
}

export function Card({
  urlImage,
  preco,
  descricao,
  quantidade,
}: CardProps): React.ReactElement {
  return (
    <div className="container-card">
      <img className="imagem-card" src={urlImage} alt="tênis preto" />
      <div className="informacoes-tenis">
        <p className="descricao-tenis" title={descricao}>{descricao}</p>

        <p className="preco-tenis">{preco}</p>
      </div>
      <div className="botao">
        <div className="contador-produto">
          <img className="img-carrinho" src={carrinho} alt="icone carrinho" />
          <span className="quantidade">{quantidade}</span>
        </div>
        <p className="texto-adicionar">ADICIONAR AO CARRINHO</p>
      </div>
    </div>
  );
}

// const Card2: React.FC<CardProps> = ({ title }) => {
//   return (
//     <div className="container-card">
//       <img className="imagem-card" src={tenis1} alt="tênis preto" />
//       <div className="informacoes-tenis">
//         <p className="descricao-tenis">
//           Tênis de Caminhada Leve <br />
//           Confortável
//         </p>

//         <p className="preco-tenis">R$179,90 </p>
//       </div>
//       <div className="botao">
//         <div className="contador-produto">
//           <img className="img-carrinho" src={carrinho} alt="icone carrinho" />
//           <span className="quantidade">{quantidade}</span>
//         </div>
//         <p className="texto-adicionar">ADICIONAR AO CARRINHO</p>
//       </div>
//     </div>
//   );
// }
