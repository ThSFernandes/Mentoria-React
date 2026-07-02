import type { ReactNode } from "react";
import "./cart-container.scss";

interface CartContainerProps {
  children: ReactNode;
}

export function CartContainer({ children }: CartContainerProps): React.ReactElement {
  return <section className="container-carrinho">{children}</section>;
}
