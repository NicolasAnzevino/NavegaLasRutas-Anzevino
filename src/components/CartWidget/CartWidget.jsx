import React from 'react'
import styles from './CartWidget.module.css'
import { cartContext, useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

export default function CartWidget() {
  const { cart } = useCartContext();
  return (
    <Link to="/carrito" className={styles.Carrito}> 
      <button>
        🛒 {cart.length}
      </button>
    </Link>
  )
}
