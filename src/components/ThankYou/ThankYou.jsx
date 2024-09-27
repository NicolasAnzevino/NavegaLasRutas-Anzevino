import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ThankYou.module.css'

export default function ThankYou() {
  const { orderId } = useParams();

  return (
    <div>
      <p>Código de Órden: {orderId}</p>
      <p>¡Gracias por tu compra!</p>
      <Link to="/." className={styles.boton}>
        Regresar a Inicio
      </Link>
    </div>
  );
}
