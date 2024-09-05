import React from 'react'
import {useState, useEffect} from 'react'
import styles from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

export default function NavBar() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {     
    setCategorias(['Microprocesadores', 'Placas de Video', 'Gabinetes'])      
    }, [])
  
  return (
    <header className={styles.barra}>
      <Link to="/" className={styles.logotipo}>
        <img src={logo} alt="Logo de Zona Pixel" />
        <h1>Zona Pixel</h1>
      </Link>
      <nav className={styles.barracontainer}>
        {categorias.map((categoria) => (
          <Link key={categoria} to={`/category/${categoria.toLowerCase()}`} className={styles.barracontaineritem}>
            {categoria}
          </Link>
        ))}
        <CartWidget />
      </nav>
    </header>
  )
}
