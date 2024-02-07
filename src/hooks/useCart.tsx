import { useContext } from "react";

import { CartContext } from "../contexts/CartContex";

export function useCart() {
  return useContext(CartContext)
}
