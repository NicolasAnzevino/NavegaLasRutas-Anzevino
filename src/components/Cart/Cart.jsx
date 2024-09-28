import React from 'react';
import { useCartContext } from '../../context/cartContext';
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'

export default function CartContainer() {
  const { cart, getTotal } = useCartContext();

  if (cart.length > 0)
  {
    return (
      <div className={styles.itemPrincipal}>
        <p className={styles.total}>Total: ${getTotal()}</p>    
        <Link className={styles.botonFinalizarCompra} to="/checkout">Finalizar compra</Link>
        <p className={styles.productos}>Resumen Productos</p>
        {cart.map(prod => (
          <div key={prod.id} className={styles.item}>
            <img src={prod.imagen} alt={prod.nombre} />
            <div className={styles["item-text"]}>
              <p>{prod.nombre}</p>
              <p>x{prod.quantity} ${prod.precio}</p>
            </div>
          </div>
        ))}  
      </div>
      );
  }
  else
  {
    return (
      <div className={styles.itemPrincipal}>
        <p className={styles.productos}>No hay productos en el carrito</p>
      </div>
      );
  }
}
