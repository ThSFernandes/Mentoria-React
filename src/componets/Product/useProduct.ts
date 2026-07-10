import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import type { Product } from "../../types/Produto";

interface UseProductProps {
  adicionarProdutoCarrinho: (Product: Product) => void;
  listaProdutos: Product[];
  indexProduto: number;
}

export const useProduct = (produto: Product): UseProductProps => {
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

  return {
    adicionarProdutoCarrinho,
    listaProdutos,
    indexProduto,
  };
};
