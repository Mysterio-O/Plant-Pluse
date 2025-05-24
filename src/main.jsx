import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './Router/Router'
import AuthProvider from './Provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={Router}></RouterProvider>
  </AuthProvider>,
)
