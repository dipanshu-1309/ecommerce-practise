import { Route, Routes } from 'react-router'
import HomePage from "./pages/HomePage"
import './index.css'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import TrackingPage from './pages/TrackingPage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </div>
  )
}

export default App
