import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { DataContextProvider } from './context/DataContext.jsx'
import { RouterProvider } from "react-router-dom";
import router from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
    <RouterProvider router={router} />
    </DataContextProvider>
  </React.StrictMode>,
)
