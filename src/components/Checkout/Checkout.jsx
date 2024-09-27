import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { crearOrden } from '../../firebase/db';
import styles from './Checkout.module.css';
import { serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const { cart, getTotal, clearCart } = useCartContext();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nombre = e.target.nombre.value;
        const apellido = e.target.apellido.value;
        const email = e.target.email.value;
        const telefono = e.target.telefono.value;
        const comentarios = e.target.comentarios.value;

        const order = {
            buyer: { nombre, apellido, email, telefono, comentarios },
            items: cart,
            date: serverTimestamp(),
            total: getTotal(),
        };

        try {
            const orderId = await crearOrden(order);
            clearCart();
            navigate(`/ThankYou/${orderId}`);
        } catch (error) {
            console.error("Error al crear la orden:", error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <p className={styles.titulo}>Finalizar Compra</p>
                <input
                    className={styles.input}
                    name="nombre"
                    type="text"
                    placeholder="Nombre/s"
                    required
                />
                <input
                    className={styles.input}
                    name="apellido"
                    type="text"
                    placeholder="Apellido"
                    required
                />
                <input
                    className={styles.input}
                    name="email"
                    type="email"
                    placeholder="Correo Electrónico"
                    required
                />
                <input
                    className={styles.input}
                    name="telefono"
                    type="text"
                    placeholder="Número de teléfono"
                    required
                />
                <input
                    className={styles.input}
                    name="comentarios"
                    type="text"
                    placeholder="Comentarios Opcionales"
                />
                <button className={styles.botonFinalizar} type="submit">
                    Finalizar Compra
                </button>
            </form>
        </div>
    );
}
