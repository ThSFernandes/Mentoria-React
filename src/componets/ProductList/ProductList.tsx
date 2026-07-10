import { use } from "react";
import { Card } from "../Cards/Card";
import type { Product } from "../../types/Produto";
import { ProductItem } from "../Product/ProductItem";

const requestProducts = fetch(`http://localhost:3000/cards`).then((response) =>
  response.json(),
);

export function ProductList(): React.ReactElement {
  const products = use<Product[]>(requestProducts);

  return (
    <div className="cards-flex">
      {products.map((product) => {
        return (
          <Card key={product.id}>
            <ProductItem produto={product} />
          </Card>
        );
      })}
    </div>
  );
}
