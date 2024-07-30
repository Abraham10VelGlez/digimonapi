import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  //<React.StrictMode> quitamos el modo de desarrollo que hace que useeffect se repita las peticiones 2 veces aunque este marque que esta bien
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //</React.StrictMode>, quitamos el modo de desarrollo que hace que useeffect se repita las peticiones 2 veces aunque este marque que esta bien  
)
