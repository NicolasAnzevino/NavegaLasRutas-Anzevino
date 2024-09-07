import React from "react";
import styles from './Item.module.css'
import { Link } from "react-router-dom";

export default function Item({product}) {
  return (
    <div className={styles.item}> 
        <h3>{product?.nombre}</h3>
        <img
            src={product?.imagen}
            alt={product?.nombre}
        />
        <p>{product?.descripcion}</p>
        <p className={styles.precio}>${product?.precio}</p>
        <Link to={`/detalle/${product.id}`} className={styles.botonDetalle}>Ver más</Link>
    </div>
  );
};