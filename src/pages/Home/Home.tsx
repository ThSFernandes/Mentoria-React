import { Suspense } from "react";
import { Header } from "../../componets/Header/Header";
import { ProductList } from "../../componets/ProductList/ProductList";
import { Spiner } from "../../componets/spiner/Spiner";

export function Home(): React.ReactElement {
  return (
    <>
      <section className="main-container">
        <Header />
      </section>
      <section className="main-container area-cards">
        <Suspense fallback={<Spiner color="#7e1cec" size={100} />}>
          <ProductList />
        </Suspense>
      </section>
    </>
  );
}
