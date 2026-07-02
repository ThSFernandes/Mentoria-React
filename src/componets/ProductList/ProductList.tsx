import { use } from "react";
import { Card } from "../Cards/Card";
import type { Product } from "../../types/Produto";

const requestProducts = fetch(`http://localhost:3000/cards`).then((response) =>
  response.json(),
);

export function ProductList(): React.ReactElement {
  const products = use<Product[]>(requestProducts);

  return (
    <div className="cards-flex">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            produto={product}
          />
        );
      })}
    </div>
  );
}
