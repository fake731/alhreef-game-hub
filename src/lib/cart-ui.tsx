import { createContext, useContext } from "react";

export const CartUIContext = createContext<{ openCart: () => void }>({ openCart: () => {} });

export function useCartUI() {
  return useContext(CartUIContext);
}
