import { useEffect, useState } from "react";
import { Link, useParams } from "@tanstack/react-router";

// import "./productDetail.scss";
import type { Product } from "../../../types/Produto";
import { useProduct } from "../../Product/useProduct";
import { Button } from "../../Button/Button";
import { Spiner } from "../../spiner/Spiner";
import { Header } from "../../Header/Header";

async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`http://localhost:3000/cards/${id}`);

  if (!response.ok) {
    throw new Error("Produto não encontrado");
  }

  return response.json();
}

function ProductDetailView({
  product,
}: {
  product: Product;
}): React.ReactElement {
  const { adicionarProdutoCarrinho, listaProdutos, indexProduto } =
    useProduct(product);

  return (
    <div className="detalhe-produto-container">
      <div className="detalhe-produto-imagem">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="detalhe-produto-info">
        {product.special && (
          <span className="badge-especial">Oferta especial</span>
        )}

        <h1 className="detalhe-produto-titulo">{product.title}</h1>
        <p className="detalhe-produto-preco">{formatPrice(product.price)}</p>
        <p className="detalhe-produto-descricao">
          Tênis confortável para caminhada e uso diário, com acabamento em couro
          e design moderno.
        </p>

        <Button
          quantidade={listaProdutos[indexProduto]?.count}
          onClick={() => adicionarProdutoCarrinho(product)}
        />
      </div>
    </div>
  );
}

function ProductDetailContent({ id }: { id: string }): React.ReactElement {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError(null);

    fetchProduct(id)
      .then((data) => {
        if (!cancelled) {
          setProduct(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("Não foi possível carregar o produto.");
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return <Spiner color="#7e1cec" size={100} />;
  }

  if (error || !product?.id) {
    return (
      <div className="produto-nao-encontrado">
        <p>{error ?? "Produto não encontrado."}</p>
        <Link to="/" className="voltar-link">
          ← Voltar para a loja
        </Link>
      </div>
    );
  }

  return <ProductDetailView product={product} />;
}

export function ProductDetail(): React.ReactElement {
  const { id } = useParams({ strict: false });

  return (
    <div className="pagina-detalhe-produto">
      <section className="main-container">
        <Header />
      </section>

      <section className="main-container area-detalhe-produto">
        <Link to="/" className="voltar-link">
          ← Voltar para a loja
        </Link>

        {id ? (
          <ProductDetailContent id={id} />
        ) : (
          <Spiner color="#7e1cec" size={100} />
        )}
      </section>
    </div>
  );
}
