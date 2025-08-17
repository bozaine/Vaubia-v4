import React from 'react'
import '../styles/global.css'
export default function Login(){
  return (<section className="section">
    <div className="card" style={{maxWidth:420, margin:'0 auto'}}>
      <h1>Connexion</h1>
      <p>Entrez votre e‑mail pour recevoir un lien magique.</p>
      <form onSubmit={e=>e.preventDefault()}>
        <label className="visually-hidden" htmlFor="email">E‑mail</label>
        <input id="email" type="email" required placeholder="you@company.com"
          style={{width:'100%',padding:'12px 14px',borderRadius:12,border:'1px solid rgba(255,255,255,.14)',background:'rgba(255,255,255,.04)',color:'var(--text)'}}/>
        <button className="btn" style={{marginTop:12,width:'100%'}}>Recevoir le lien</button>
      </form>
    </div>
  </section>)
}
