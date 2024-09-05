import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../asyncMock.js';
import ItemList from '../ItemList/ItemList.jsx';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    fetchProducts().then((data) => {
      if (id) {
        setProductos(data.filter((product) => product.categoria.toLowerCase() === id));
      } else {
        setProductos(data);
      }
      setLoading(false);
    }).catch((error) => {
      console.error("Error al obtener los productos", error);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <p>Cargando..</p>;
  }

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ItemList products={productos} />
    </div> 
  );
}
