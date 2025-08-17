import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/shell.css'

export default function TopNav(){
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <Link className="logo link" to="/">
          <span className="logo-badge"></span> Vaubia
        </Link>
        <nav className="nav">
          <NavLink to="/pricing" className={({isActive})=> isActive ? 'link active' : 'link'}>Tarifs</NavLink>
          <NavLink to="/login" className={({isActive})=> isActive ? 'link active' : 'link'}>Connexion</NavLink>
          <NavLink to="/dashboard" className={({isActive})=> isActive ? 'link active' : 'link'}>Dashboard</NavLink>
          <a className="btn" href="#demo">Voir une démo</a>
        </nav>
        <button className="btn menu-btn">Menu</button>
      </div>
    </div>
  )
}