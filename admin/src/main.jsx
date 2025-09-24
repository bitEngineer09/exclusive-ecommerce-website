import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthContext from './store/AuthContext.jsx'
import ProductContext from './store/ProductContext.jsx'
import CartContext from '../../frontend/src/store/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContext>
      <ProductContext>
          <App />
      </ProductContext>
    </AuthContext>
  </BrowserRouter>
)
