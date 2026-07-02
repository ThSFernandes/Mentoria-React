import type { Product } from "../../../types/Produto";
import { formatPrice } from "../../utils/formatPrice/formatPrice";
import { QuantitySelector } from "../QuantitySelector/QuantitySelector";
import "./cart-item.scss";

interface CartItemProps {
  product: Product;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function CartItem({
  product,
  onIncrement,
  onDecrement,
}: CartItemProps): React.ReactElement {
  const subtotal = product.price * product.count;

  return (
    <tr className="item-carrinho">
      <td className="celula-produto">
        <img
          className="imagem-tenis"
          src={product.image}
          alt={product.title}
        />
        <div className="informacoes-tenis">
          <p className="descricao-tenis">{product.title}</p>
          <p className="preco-tenis">{formatPrice(product.price)}</p>
        </div>
      </td>
      <td className="celula-quantidade">
        <QuantitySelector
          quantity={product.count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </td>
      <td className="subtotal-item">
        <span>{formatPrice(subtotal)}</span>
      </td>
    </tr>
  );
}
