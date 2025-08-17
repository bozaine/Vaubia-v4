import React from 'react'

export default function Login(){
  return (
    <main className="container">
      <h1>Connexion</h1>
      <div className="panel" style={{padding:24,maxWidth:420}}>
        <form className="grid" style={{gridTemplateColumns:'1fr'}}>
          <label>Email
            <input type="email" required style={{width:'100%',padding:12,borderRadius:10,marginTop:6,border:'1px solid rgba(255,255,255,.15)',background:'transparent',color:'var(--text)'}}/>
          </label>
          <label>Mot de passe
            <input type="password" required style={{width:'100%',padding:12,borderRadius:10,marginTop:6,border:'1px solid rgba(255,255,255,.15)',background:'transparent',color:'var(--text)'}}/>
          </label>
          <button className="btn" type="submit">Se connecter</button>
        </form>
      </div>
    </main>
  )
}