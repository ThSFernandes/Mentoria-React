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
    <div className="item-carrinho">
      <div className="celula-produto">
        <img className="imagem-tenis" src={product.image} alt={product.title} />
        <div className="informacoes-tenis">
          <p className="descricao-tenis">{product.title}</p>
          <p className="preco-tenis">{formatPrice(product.price)}</p>
        </div>
      </div>

      <div className="celula-quantidade">
        <span className="label-mobile">QTD</span>
        <QuantitySelector
          quantity={product.count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>

      <div className="subtotal-item">
        <span className="label-mobile">PREÇO</span>
        <span className="valor-subtotal">{formatPrice(subtotal)}</span>
      </div>
    </div>
  );
}
