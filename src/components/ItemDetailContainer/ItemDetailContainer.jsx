import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import styles from './ItemDetailContainer.module.css';
import { obtenerProducto } from '../../firebase/db.js';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    obtenerProducto(id)
      .then((producto) => {
        setProduct(producto);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener el producto", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <span className={styles.loader}></span>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.containerproducto}>
      {product ? <ItemDetail product={product} /> : <p>Producto no encontrado.</p>}
    </div>
  );
}
