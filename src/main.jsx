import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './Router/Router'
import AuthProvider from './Provider/AuthProvider'
import { ThemeProvider } from './contexts/ThemeContext'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
  </ThemeProvider>,
)
