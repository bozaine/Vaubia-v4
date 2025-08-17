import React from 'react'
import '../styles/global.css'

export default function Login(){
  return (
    <div className="container">
      <h1>Connexion</h1>
      <form className="card" style={{padding:24, maxWidth:420}} onSubmit={e=>e.preventDefault()}>
        <label>Email<br/><input required type="email" placeholder="you@company.com" style={{width:'100%',padding:'10px',borderRadius:8,border:'1px solid rgba(255,255,255,.18)',background:'rgba(0,0,0,.3)',color:'var(--text)'}}/></label><br/><br/>
        <label>Mot de passe<br/><input required type="password" placeholder="••••••••" style={{width:'100%',padding:'10px',borderRadius:8,border:'1px solid rgba(255,255,255,.18)',background:'rgba(0,0,0,.3)',color:'var(--text)'}}/></label><br/><br/>
        <button className="btn primary">Se connecter</button>
      </form>
    </div>
  )
}
