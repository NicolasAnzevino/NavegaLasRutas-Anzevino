import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import styles from './ItemListContainer.module.css';
import { obtenerProductos } from '../../firebase/db.js';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    obtenerProductos()
      .then((data) => {
        if (id) {
          setProductos(data.filter((product) => product.categoria.toLowerCase() === id.toLowerCase()));
        } else {
          setProductos(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los productos", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <span className={styles.loader}></span>;
  }

  return (
    <div>
      <ItemList products={productos} />
    </div>
  );
}
