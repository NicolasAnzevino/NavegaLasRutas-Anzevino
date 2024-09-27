import React from 'react';
import { useCartContext } from '../../context/cartContext';
import styles from './CartContainer.module.css'
import { Link } from 'react-router-dom'

export default function CartContainer() {
  const { cart, getTotal } = useCartContext();

  return (
<div className={styles.itemPrincipal}>
  <p className={styles.total}>Total: ${getTotal()}</p>    
  {cart.length > 0 ? (
  <Link className={styles.botonFinalizarCompra} to="/checkout">Finalizar compra</Link>
  ) : null}
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
