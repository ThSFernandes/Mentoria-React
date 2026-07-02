import { formatPrice } from "../../utils/formatPrice/formatPrice";

interface TotalDisplayProps {
  total: number;
}

export function TotalDisplay({ total }: TotalDisplayProps): React.ReactElement {
  return (
    <div className="total-pedido">
      <span className="texto-total">TOTAL</span>
      <span className="valor-total">{formatPrice(total)}</span>
    </div>
  );
}
