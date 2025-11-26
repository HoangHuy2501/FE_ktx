import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "antd/dist/reset.css";
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "sonner";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div>
  <Toaster position="top-right" richColors duration={1500} expand visibleToasts={1} />
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    </div>
  </StrictMode>,
)
