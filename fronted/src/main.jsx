import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
// Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/error-page'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
