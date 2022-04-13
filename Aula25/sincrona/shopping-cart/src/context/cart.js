import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [productsCart, setProductsCart] = useState([
    { id: 1, qtd: 5 },
    { id: 2, qtd: 2 },
  ]);

  const handleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const addProductToCart = (id) => {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.filter((product) => product.id === id);

    if (item.length > 0) {
      item[0].qtd++;
    } else {
      copyProductsCart.push({ id: id, qtd: 1 });
    }

    setProductsCart(copyProductsCart);
  };

  // const removeProductFromCart = (id) => {
  //   const copyProductsCart = [...productsCart];
  // }

  return (
    <CartContext.Provider
      value={{
        theme: theme,
        username: "Alexandre",
        handleTheme,
        productsCart,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
