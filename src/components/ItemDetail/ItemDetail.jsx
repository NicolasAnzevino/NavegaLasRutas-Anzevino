import React, { useState } from "react";
import styles from './ItemDetail.module.css';
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/cartContext";

export default function ItemDetail({ product }) {
    const { addToCart } = useCartContext();
    const [count, setCount] = useState(1);

    function handleAddToCart() {
        addToCart({ ...product, quantity: count });
        console.log("Producto agregado al carrito");
    }

    function add() {
        setCount(count + 1);
    }

    function substract() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className={styles.itemcontainer}>
            <div className={styles.itemprincipal}>
                <h2>{product?.nombre}</h2>
                <img src={product?.imagen} alt={product?.nombre} />
                <p>{product?.descripcion}</p>
            </div>
            <div className={styles.itemsecondary}>
                <p className={styles.price}>${product?.precio}</p>
                <p>Cantidad Disponible: {product?.stock}</p>
                <ItemCount count={count} add={add} substract={substract} />
                <button className={styles.botonComprar} onClick={handleAddToCart}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}
