import React from 'react'

export default function Login(){
  return (
    <section className="section container">
      <h1>Connexion</h1>
      <p className="subtitle">Mock form — à brancher plus tard.</p>
      <div className="card" style={{padding:20, maxWidth:420}}>
        <label>Email<br/><input placeholder="vous@exemple.com" style={{width:'100%',padding:'10px',borderRadius:8,border:'1px solid rgba(255,255,255,.15)',background:'transparent',color:'white'}}/></label>
        <br/><br/>
        <label>Mot de passe<br/><input type="password" placeholder="••••••••" style={{width:'100%',padding:'10px',borderRadius:8,border:'1px solid rgba(255,255,255,.15)',background:'transparent',color:'white'}}/></label>
        <br/><br/>
        <button className="btn" style={{width:'100%'}}>Se connecter</button>
      </div>
    </section>
  )
}