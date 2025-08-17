import React from 'react'
import '../styles/home.css'
export default function Home(){
  return (<section className="hero">
    <div className="grid">
      <div className="left">
        <span className="badge">Nouvelle version</span>
        <h1>Assistants IA & Automations pour la croissance</h1>
        <p>On connecte vos canaux (Google, réseaux sociaux, SMS) pour gagner du temps et des clients. Design basé sur votre charte (violet / vert).</p>
        <div style={{display:'flex', gap:12, marginTop:12}}>
          <a className="btn" href="/pricing">Voir les tarifs</a>
          <a className="btn ghost" href="/login">Se connecter</a>
        </div>
        <div className="kpis">
          <div className="kpi"><div>Leads générés</div><strong>+42%</strong></div>
          <div className="kpi"><div>Temps de réponse</div><strong>−63%</strong></div>
        </div>
      </div>
      <div className="right">
        <div className="card">
          <h3 style={{marginBottom:8}}>Demo express</h3>
          <p>Réservez 15 min. On plug une source et on vous montre des gains concrets.</p>
          <div style={{display:'flex', gap:10, marginTop:8}}>
            <button className="btn">Réserver</button>
            <button className="btn ghost">Doc produit</button>
          </div>
        </div>
      </div>
    </div>
  </section>)
}
