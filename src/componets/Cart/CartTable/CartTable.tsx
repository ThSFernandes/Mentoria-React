import { CartItem } from "../CartItem/CartItem";
import { CartTableHeader } from "./CartTableHeader";
import "./cart-table.scss";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export function CartTable(): React.ReactElement {
  const { listaProdutos, setListaProdutos } = useContext(CartContext);

  const incrementarQuantidade = (productId: number): void => {
    setListaProdutos(
      listaProdutos.map((product) =>
        product.id === productId
          ? { ...product, count: product.count + 1 }
          : product,
      ),
    );
  };

  const decrementarQuantidade = (productId: number): void => {
    setListaProdutos(
      listaProdutos.flatMap((product) => {
        if (product.id !== productId) {
          return [product];
        }

        if (product.count <= 1) {
          return [];
        }

        return [{ ...product, count: product.count - 1 }];
      }),
    );
  };

  return (
    <div className="lista-carrinho">
      <CartTableHeader />
      <div className="lista-carrinho-itens">
        {listaProdutos.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onIncrement={() => incrementarQuantidade(product.id)}
            onDecrement={() => decrementarQuantidade(product.id)}
          />
        ))}
      </div>
    </div>
  );
}
