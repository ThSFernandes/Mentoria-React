import type { ReactNode } from "react";
import "./card.scss";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps): ReactNode {
  return <div className="card-container">{children}</div>;
}
