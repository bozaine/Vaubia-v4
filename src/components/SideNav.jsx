import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/shell.css'

export default function SideNav(){
  return (
    <aside className="sidenav card">
      <nav>
        <NavLink to="/" end className={({isActive})=>isActive?'current':'link'}>Accueil</NavLink>
        <NavLink to="/pricing" className={({isActive})=>isActive?'current':'link'}>Tarifs</NavLink>
        <NavLink to="/login" className={({isActive})=>isActive?'current':'link'}>Connexion</NavLink>
        <NavLink to="/dashboard" className={({isActive})=>isActive?'current':'link'}>Dashboard</NavLink>
      </nav>
    </aside>
  )
}