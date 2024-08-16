import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

export default function NavBar() {
  return (
    <header className="barra">
      <a href="" className="logotipo">🎮Zona Pixel</a>
      <nav className="barra-container">
        <a href="" className="barra-container-item">Inicio</a>
        <a href="" className="barra-container-item">Productos</a>
        <a href="" className="barra-container-item">Arma tu PC</a>
        <CartWidget/>
      </nav>
    </header>
  )
}
