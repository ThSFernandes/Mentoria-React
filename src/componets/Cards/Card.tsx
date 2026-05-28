import "./card.scss";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "../Button/Button";
import type { Product } from "../../types/Produto";
import { formatPrice } from "../utils/formatPrice/formatPrice";

interface CardProps {
  produto: Product;
}

export function Card({ produto }: CardProps): React.ReactElement {
  const { listaProdutos, setListaProdutos } = useContext(CartContext);

  const indexProduto = listaProdutos.findIndex((p) => p.id === produto.id);

  const adicionarProdutoCarrinho = (novoProduto: Product): void => {
    if (indexProduto >= 0) {
      const quantidadeProduto = listaProdutos[indexProduto].count + 1;

      setListaProdutos(
        listaProdutos.map((p) => {
          if (p.id === novoProduto.id)
            return { ...p, count: quantidadeProduto };
          return p;
        }),
      );
      return;
    }

    setListaProdutos([...listaProdutos, { ...novoProduto, count: 1 }]);
  };

  return (
    <div className="container-card">
      <img className="imagem-card" src={produto.image} alt="tênis preto" />
      <div className="informacoes-tenis">
        <p className="descricao-tenis" title={produto.title}>
          {produto.title}
        </p>
        <p className="preco-tenis">{formatPrice(produto.price)}</p>
      </div>
      <Button
        quantidade={listaProdutos[indexProduto]?.count}
        onClick={() => adicionarProdutoCarrinho(produto)}
      />
    </div>
  );
}
