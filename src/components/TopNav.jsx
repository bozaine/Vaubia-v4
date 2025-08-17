import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/home.css'

export default function TopNav() {
  return (
    <header className="hero-gradient">
      <nav className="container topnav">
        <Link to="/" className="brand">Vaubia</Link>
        <ul className="menu">
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/pricing">Tarifs</NavLink></li>
          <li><NavLink to="/dashboard">Tableau de bord</NavLink></li>
        </ul>
        <Link to="/login" className="btn">Se connecter</Link>
      </nav>
    </header>
  )
}
