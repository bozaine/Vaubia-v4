import React, { useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import '../styles/shell.css'

export default function AppShell(){
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header className='topbar'>
        <div className='container'>
          <Link to='/' className='brand' onClick={close}>
            <img src='/favicon.svg' alt='Vaubia' /><span>Vaubia</span>
          </Link>
          <nav className={`nav ${open ? 'open' : ''}`}>
            <NavLink to='/' onClick={close} end>Accueil</NavLink>
            <NavLink to='/pricing' onClick={close}>Tarifs</NavLink>
            <NavLink to='/dashboard' onClick={close}>Dashboard</NavLink>
            <NavLink to='/login' className='btn' onClick={close}>Se connecter</NavLink>
          </nav>
          <button className='burger' aria-label='Ouvrir le menu' onClick={()=>setOpen(v=>!v)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <main className='page'>
        <Outlet />
      </main>

      <footer className='footer'>
        <div className='container'>© {new Date().getFullYear()} Vaubia — Tous droits réservés.</div>
      </footer>
    </>
  )
}
