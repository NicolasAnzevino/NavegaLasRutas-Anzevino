import React from 'react';
import styles from './ItemCount.module.css';

export default function ItemCount({ count, add, substract }) {

  return (
    <div className={styles.quantityselector}>
      <button onClick={substract}>-</button>
      <p>{count}</p>
      <button onClick={add}>+</button>
    </div>
  );
}