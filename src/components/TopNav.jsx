import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/home.css';

export default function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <nav className="container nav-row">
          <Link className="brand" to="/">Vaubia</Link>

          <form className="search" role="search" onSubmit={(e)=>e.preventDefault()}>
            <button aria-label="Rechercher" type="submit">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="16.65" y1="16.65" x2="22" y2="22" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <input type="search" placeholder="Rechercher…" aria-label="Rechercher"/>
          </form>

          <div className="desktop-links">
            <Link to="/pricing">Tarifs</Link>
            <Link to="/login" className="btn btn-primary">Connexion</Link>
          </div>

          <button className="burger" aria-label="Menu" onClick={()=>setOpen(true)}>☰</button>
        </nav>
      </header>

      {/* Overlay + drawer */}
      <div className={`overlay ${open ? 'show' : ''}`} onClick={()=>setOpen(false)} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button className="close" aria-label="Fermer" onClick={()=>setOpen(false)}>×</button>
        <nav className="drawer-nav">
          <Link to="/" onClick={()=>setOpen(false)}>Accueil</Link>
          <Link to="/pricing" onClick={()=>setOpen(false)}>Tarifs</Link>
          <Link to="/login" onClick={()=>setOpen(false)}>Connexion</Link>
          <a href="/legal.html">Mentions légales</a>
          <a href="/politique-confidentialite.html">Confidentialité</a>
          <a href="/contact.html">Contact</a>
        </nav>
      </aside>
    </>
  );
}
