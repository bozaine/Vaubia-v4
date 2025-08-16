import React, { useState } from 'react'
import '../styles/nav.css'

export default function TopNav(){
  const [open, setOpen] = useState(false)
  return (
    <header className="hero-gradient">
      <nav className="container topnav" role="navigation" aria-label="Navigation principale">
        <a className="brand" href="/" aria-label="Vaubia — Accueil">
          <span className="brand-mark" />
          <span className="brand-name">Vaubia</span>
        </a>

        <ul className="menu desktop-only" role="menubar">
          <li role="none"><a role="menuitem" href="/#demo">Démo</a></li>
          <li role="none"><a role="menuitem" href="/#legal">Légal</a></li>
          <li role="none"><a role="menuitem" href="/#contact">Contact</a></li>
          <li role="none"><a role="menuitem" href="/pricing">Tarifs</a></li>
        </ul>

        <div className="right-side">
          <form className="search" role="search" onSubmit={(e)=>e.preventDefault()}>
            <button type="submit" aria-label="Rechercher" className="icon-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" fill="none" strokeWidth="2"/>
                <line x1="16.6" y1="16.6" x2="22" y2="22" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <input type="search" placeholder="Rechercher…" aria-label="Rechercher" />
          </form>

          <a className="btn ghost desktop-only" href="/login">Connexion</a>
          <a className="btn primary desktop-only" href="/pricing">Inscription</a>

          <button className="burger mobile-only" aria-label="Ouvrir le menu" onClick={()=>setOpen(v=>!v)}>
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      <div className={`drawer mobile-only ${open ? 'open' : ''}`}>
        <a href="/#demo" onClick={()=>setOpen(false)}>Démo</a>
        <a href="/#legal" onClick={()=>setOpen(false)}>Légal</a>
        <a href="/#contact" onClick={()=>setOpen(false)}>Contact</a>
        <hr/>
        <a href="/login" onClick={()=>setOpen(false)}>Connexion</a>
        <a href="/pricing" onClick={()=>setOpen(false)}>Inscription</a>
      </div>
    </header>
  )
}
