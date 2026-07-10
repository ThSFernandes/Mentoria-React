import { useProduct } from "./useProduct";
import { Button } from "../Button/Button";
import { formatPrice } from "../utils/formatPrice/formatPrice";
import type { Product } from "../../types/Produto";
import "./productItem.scss";
import { Link } from "@tanstack/react-router";

interface ProductProps {
  produto: Product;
}

export function ProductItem({ produto }: ProductProps): React.ReactElement {
  const { adicionarProdutoCarrinho, listaProdutos, indexProduto } =
    useProduct(produto);

  return (
    <div className="product-container">
      <img className="imagem-card" src={produto.image} alt="tênis preto" />
      <div className="informacoes-tenis">
        <Link to="/productDetail/$id" params={{ id: String(produto.id) }}>
          <p className="descricao-tenis" title={produto.title}>
            {produto.title}
          </p>
        </Link>
        <p className="preco-tenis">{formatPrice(produto.price)}</p>
      </div>
      <Button
        quantidade={listaProdutos[indexProduto]?.count}
        onClick={() => adicionarProdutoCarrinho(produto)}
      />
    </div>
  );
}
