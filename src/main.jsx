import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppShell from './shell/AppShell.jsx'
import Home from './pages/Home.jsx'
import Pricing from './pages/Pricing.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    element: <AppShell/>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/pricing', element: <Pricing/> },
      { path: '/login', element: <Login/> },
      { path: '/dashboard', element: <Dashboard/> },
      { path: '*', element: <NotFound/> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
