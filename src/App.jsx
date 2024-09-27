import './App.css'
import AppRouter from './router/AppRouter'
import CartProvider from './context/cartProvider'

function App() {
  return (<CartProvider><AppRouter/></CartProvider>)
}

export default App
