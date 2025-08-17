import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/shell.css'
export default function AppShell(){
  const [open, setOpen] = useState(false)
  return (<>
    <header className="header">
      <div className="container nav">
        <div className="brand">Vaubia</div>
        <nav className="menu" aria-label="Navigation principale">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/pricing">Tarifs</NavLink>
          <NavLink to="/login">Connexion</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
        <button className="burger" aria-label="Menu" onClick={()=>setOpen(v=>!v)}>☰</button>
      </div>
      <div className={`container mobile ${open?'open':''}`}>
        <NavLink to="/" end onClick={()=>setOpen(false)}>Accueil</NavLink>
        <NavLink to="/pricing" onClick={()=>setOpen(false)}>Tarifs</NavLink>
        <NavLink to="/login" onClick={()=>setOpen(false)}>Connexion</NavLink>
        <NavLink to="/dashboard" onClick={()=>setOpen(false)}>Dashboard</NavLink>
      </div>
    </header>
    <main className="container"><Outlet /></main>
    <footer>© Vaubia</footer>
  </>)
}
