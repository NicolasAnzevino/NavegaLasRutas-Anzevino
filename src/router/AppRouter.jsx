import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from '../components/CartContainer/CartContainer'
import Checkout from '../components/Checkout/Checkout'
import ThankYou from '../components/ThankYou/ThankYou'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/category/:id" element={<ItemListContainer/>}></Route>
                <Route path="/detalle/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/carrito" element={<CartContainer/>}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/ThankYou/:orderId" element={<ThankYou/>} />
            </Routes>                 
    </BrowserRouter>
  )
}
