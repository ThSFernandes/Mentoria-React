import { Header } from "../../componets/Header/Header";
import { ProductList } from "../../componets/ProductList/ProductList";

export function Home(): React.ReactElement {

    // useContext(contexto)  context Api
    return (
    <>
      <section className="main-container">
        <Header />
      </section>
      <section className="main-container area-cards">
        <ProductList />
      </section>
    </>
  );
}
