import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'

import Home from './Home.jsx'
import Support from './Support.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Generate",
    element: <App/>
  },
  {
    path: "/support",
    element: <Support />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
         <RouterProvider router={router} />
  </StrictMode>
)
