import React from 'react'
import '../styles/home.css'

export default function Home(){
  return (
    <main className="container">
      <span className="badge">Nouvelle version</span>
      <h1>La plateforme qui <span style={{background:'linear-gradient(90deg,var(--primary),var(--primary-2))',WebkitBackgroundClip:'text',color:'transparent'}}>automatise</span> vos messages clients.</h1>
      <p className="lead">Un tableau de bord simple, des intégrations WhatsApp/SMS, et une IA qui répond en 24/7. Tout ça sans effort.</p>
      <div className="hero-cta">
        <a href="/pricing" className="btn">Voir les tarifs</a>
        <a href="/login" className="btn" style={{background:'transparent',color:'var(--text)',border:'1px solid rgba(255,255,255,.2)'}}>Essayer la démo</a>
      </div>

      <section className="features grid cols-3" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
        <div className="card">
          <div style={{width:10,height:10,marginTop:6,borderRadius:20,background:'var(--accent)'}}/>
          <div>
            <h3>Messages unifiés</h3>
            <div className="muted">Centralisez WhatsApp, SMS, Messenger et plus.</div>
          </div>
        </div>
        <div className="card">
          <div style={{width:10,height:10,marginTop:6,borderRadius:20,background:'var(--primary)'}}/>
          <div>
            <h3>IA entraînée</h3>
            <div className="muted">Des réponses précises adaptées à vos données.</div>
          </div>
        </div>
        <div className="card">
          <div style={{width:10,height:10,marginTop:6,borderRadius:20,background:'var(--danger)'}}/>
          <div>
            <h3>24/7</h3>
            <div className="muted">Une assistance continue, même la nuit.</div>
          </div>
        </div>
      </section>
    </main>
  )
}