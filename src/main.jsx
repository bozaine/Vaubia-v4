import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout & pages (⚠️ orthographe/majuscules exacts)
import AppShell   from './shell/AppShell.jsx';
import Home       from './pages/Home.jsx';
import Pricing    from './pages/Pricing.jsx';
import Login      from './pages/Login.jsx';
import Dashboard  from './pages/Dashboard.jsx';
import NotFound   from './pages/NotFound.jsx';

import './styles/global.css';
import AppErrorBoundary from './components/AppErrorBoundary.jsx';

// Petit marqueur visuel pour confirmer le montage React
const BootMarker = () => (
  <div style={{
    position:'fixed', bottom:10, left:10, fontSize:12, opacity:.5,
    padding:'2px 6px', borderRadius:4, background:'#000', color:'#fff', zIndex:9999
  }}>
    app:mounted
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppErrorBoundary>
        <AppShell>
          <BootMarker />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Redirection explicite et 404 */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppShell>
      </AppErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
