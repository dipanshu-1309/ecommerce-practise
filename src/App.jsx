import { Route, Routes } from 'react-router'
import HomePage from "./pages/HomePage"
import './index.css'
import CheckoutPage from './pages/CheckoutPage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}

export default App
