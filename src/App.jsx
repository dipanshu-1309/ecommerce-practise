import { Route, Routes } from 'react-router'
import HomePage from "./pages/HomePage"
import './index.css'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import TrackingPage from './pages/TrackingPage'
import { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

    const [cart, setCart] = useState([]);
     
    useEffect(() => {
           axios.get('/api/cart-items?expand=product').then((response)=>{
      setCart(response.data);
     });
    },[])


  return (
    <div>
      <Routes>
        <Route index element={<HomePage cart={cart}/>} />
        <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </div>
  )
}

export default App
