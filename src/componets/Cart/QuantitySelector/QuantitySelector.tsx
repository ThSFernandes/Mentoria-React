import "./quantity-selector.scss";

interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function QuantitySelector({
  quantity,
  onIncrement,
  onDecrement,
}: QuantitySelectorProps): React.ReactElement {
  return (
    <div className="seletor-quantidade">
      <button
        type="button"
        className="btn-quantidade"
        onClick={onDecrement}
        aria-label="Diminuir quantidade"
      >
        −
      </button>
      <input
        className="input-quantidade"
        type="text"
        readOnly
        value={quantity}
        aria-label="Quantidade"
      />
      <button
        type="button"
        className="btn-quantidade"
        onClick={onIncrement}
        aria-label="Aumentar quantidade"
      >
        +
      </button>
    </div>
  );
}
