import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../asyncMock.js';
import ItemDetail from '../ItemDetail/ItemDetail';
import styles from './ItemDetailContainer.module.css'

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchProducts().then((data) => {
      const foundProduct = data.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    }).catch((error) => {
      console.error("Error al obtener el producto", error);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={styles.containerproducto} >
      {product ? <ItemDetail product={product}/> : <p>Producto no encontrado.</p>}
    </div>
  );
}
