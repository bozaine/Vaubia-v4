import React from 'react'
import '../styles/global.css'
export default function NotFound(){
  return (<section className="section">
    <div className="card" style={{textAlign:'center'}}>
      <h1>404</h1>
      <p>Oups, page introuvable.</p>
      <a className="btn" href="/">Retour à l’accueil</a>
    </div>
  </section>)
}
