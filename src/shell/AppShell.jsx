import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/shell.css'
import logo from '../assets/logo.svg'

export default function AppShell(){
  return (
    <>
      <header className="topbar">
        <div className="container topnav">
          <Link to="/" className="brand">
            <img src={logo} alt="Vaubia logo"/>
            <span>Vaubia</span>
          </Link>
          <nav className="navlinks">
            <Link to="/pricing">Tarifs</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login" className="btn">Connexion</Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer className="footer">
        <div className="container" style={{display:'flex',justifyContent:'space-between'}}>
          <span>© {new Date().getFullYear()} Vaubia</span>
          <span><a href="/legal">Mentions légales</a></span>
        </div>
      </footer>
    </>
  )
}
