import { createContext, useEffect, useState } from "react";
import type { Product } from "../types/Produto";
import { CARTKEY } from "../constant/keystore";

interface CartProviderProps {
  children: React.ReactElement<unknown>;
}

interface CartContextData {
  listaProdutos: Product[];
  setListaProdutos: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): React.ReactNode {
  const [listaProdutos, setListaProdutos] = useState<Product[]>(
    initialValueProductList,
  );

  // JSON.stringify
  useEffect(() => {
    console.log("contexto", listaProdutos);
    localStorage.setItem(
      "MonitoriaReact@Carrinho",
      JSON.stringify(listaProdutos),
    );
  }, [listaProdutos]);

  return (
    <CartContext.Provider value={{ listaProdutos, setListaProdutos }}>
      {children}
    </CartContext.Provider>
  );

  //hosting funciona para function
  function initialValueProductList(): Product[] {
    const produtosSalvos = localStorage.getItem(CARTKEY);
    if (!produtosSalvos) {
      return [];
    }
    return JSON.parse(produtosSalvos) as Product[];
  }
}
