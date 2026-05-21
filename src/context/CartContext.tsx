import { createContext, useState } from "react";

interface CartProviderProps {
  children: React.ReactElement<unknown>;
}

interface CartContextData {
  contador: number;
  setContador: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): any {
  const [contador, setContador] = useState(0);

  return (
    <CartContext.Provider value={{ contador, setContador }}>
      {children}
    </CartContext.Provider>
  );
}
