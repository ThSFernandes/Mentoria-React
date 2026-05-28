import { createContext, useEffect, useState } from "react";
import type { Product } from "../types/Produto";

interface CartProviderProps {
  children: React.ReactElement<unknown>;
}

interface CartContextData {
  listaProdutos: Product[];
  setListaProdutos: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): React.ReactNode {
  const [listaProdutos, setListaProdutos] = useState<Product[]>([]);

  useEffect(() => {
    console.log("contexto", listaProdutos);
  }, [listaProdutos]);

  return (
    <CartContext.Provider value={{ listaProdutos, setListaProdutos }}>
      {children}
    </CartContext.Provider>
  );
}
