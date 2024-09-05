import React, { useState } from 'react';
import styles from './QuantitySelector.module.css'

export default function QuantitySelector()
{
    return (
        <div className={styles.quantityselector}>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      );
}
