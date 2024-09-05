import React from "react";
import styles from './ItemList.module.css'
import Item from "../Item/Item";

export default function ItemList({products}) {
  return (
    <div className={styles.itemslist}>
      {products.map(product => <Item product={product} key={product.id} />)}
    </div>
  );
};