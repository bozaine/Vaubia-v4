import React from 'react'
import '../styles/global.css'

export default function TopNav(){
  return (
    <header className="hero">
      <div className="container">
        <nav className="top">
          <div className="logo">
            <span style={{width:10,height:10,borderRadius:20,background:'linear-gradient(90deg,var(--primary),var(--primary-2))'}}></span>
            Vaubia
          </div>
          <div className="group">
            <a href="/pricing" className="btn" style={{padding:'8px 14px'}}>Tarifs</a>
            <a href="/login" className="btn" style={{padding:'8px 14px'}}>Se connecter</a>
          </div>
        </nav>
      </div>
    </header>
  )
}