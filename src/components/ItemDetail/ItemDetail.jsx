import React from "react";
import styles from './ItemDetail.module.css'
import QuantitySelector from "../QuantitySelector/QuantitySelector";

export default function ItemDetail({product}) {
  return (
    <div className={styles.itemcontainer}>
      <div className={styles.itemprincipal}>
        <h2>{product?.nombre}</h2>
        <img
          src={product?.imagen}
          alt={product?.nombre}
        />
        <p>{product?.descripcion}</p>
      </div>
      <div className={styles.itemsecondary}>
        <p className={styles.price}>${product?.precio}</p>
        <p>Cantidad Disponible: {product?.stock}</p>     
        <QuantitySelector/>
        <button className={styles.botonComprar}>Agregar al carrito</button>
      </div>        
    </div>
  );
};