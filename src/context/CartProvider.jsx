import React, {useState} from 'react'
import { cartContext } from './cartContext'

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    function addToCart(product){
        setCart([...cart, product]);
    }

    function getTotal()
    {
        const precios = cart.map(prod => prod.precio*prod.quantity);
        const total = precios.reduce((acc, current) => acc + current, 0);

        return total.toFixed(3);
    }

    function clearCart()
    {
      setCart([]);
    }

  return (
    <cartContext.Provider value = {{cart, addToCart, getTotal, clearCart}}>
        {children}
    </cartContext.Provider>
  )
}
