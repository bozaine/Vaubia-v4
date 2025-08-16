import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppShell from './shell/AppShell.jsx'
import Home from './pages/Home.jsx'
import Pricing from './pages/Pricing.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFound from './pages/NotFound.jsx'

import './styles/global.css'

function SuspenseBoundary({ children }){
  return <React.Suspense fallback={<div style={{color:'#9BE8FF', padding:20}}>Chargement…</div>}>{children}</React.Suspense>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SuspenseBoundary>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SuspenseBoundary>
    </BrowserRouter>
  </StrictMode>
)
