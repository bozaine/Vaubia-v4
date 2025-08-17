import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/global.css';
import '../styles/theme.css';

export default function TopNav(){
  const [open, setOpen] = useState(false);
  return (
    <header style={{position:'sticky', top:0, backdropFilter:'blur(6px)', background:'rgba(16,24,39,.7)', borderBottom:'1px solid var(--border)', zIndex:20}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', height:64}}>
        <Link to="/" style={{fontWeight:800, letterSpacing:.3}}>Vaubia</Link>
        <nav className="desktop" style={{display:'none', gap:18}}>
          <NavLink to="/pricing">Tarifs</NavLink>
          <NavLink to="/login">Connexion</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
        <button aria-label="Menu" onClick={()=>setOpen(!open)} className="btn-ghost" style={{borderRadius:10, padding:'6px 10px'}}>≡</button>
      </div>
      {open && (
        <div className="container" style={{paddingBottom:12}}>
          <div style={{display:'grid', gap:8}}>
            <NavLink to="/pricing" onClick={()=>setOpen(false)}>Tarifs</NavLink>
            <NavLink to="/login" onClick={()=>setOpen(false)}>Connexion</NavLink>
            <NavLink to="/dashboard" onClick={()=>setOpen(false)}>Dashboard</NavLink>
          </div>
        </div>
      )}
      <style>{`@media(min-width:820px){ header .desktop{display:flex} header button{display:none} }`}</style>
    </header>
  );
}
