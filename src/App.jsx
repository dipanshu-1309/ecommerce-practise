import { Route, Routes } from 'react-router'
import HomePage from "./pages/HomePage"
import './App.css'
const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<div>Checkout Page</div>} />
      </Routes>
    </div>
  )
}

export default App
