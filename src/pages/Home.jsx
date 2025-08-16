import React from 'react'
import '../styles/home.css'

export default function Home(){
  return (
    <section className="home">
      <div className="container hero">
        <div className="hero-copy">
          <span className="kicker">Vaubia • Protégez l’essentiel</span>
          <h1>Simulez, détectez et décidez <br/> en quelques <span className="accent">secondes</span>.</h1>
          <p className="sub">Surveillez vos comptes, détectez les fuites, recevez des alertes et suivez votre conformité en un seul endroit.</p>
          <div className="cta">
            <a className="btn primary" href="/pricing">Commencer</a>
            <a className="btn ghost" href="/#demo">Voir une démo</a>
          </div>
        </div>

        <div className="search-reveal" aria-label="Recherche">
          <button className="search-button" aria-label="Ouvrir la recherche">
            <svg viewBox="0 0 24 24" className="icon"><path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          <input className="search-input" type="search" placeholder="Rechercher…" />
        </div>
      </div>

      <div className="topics container" aria-label="Ce que nous apportons">
        <article className="tcard"><span className="pill">Valeur</span><h3>Visibilité claire</h3><p>Score unifié et rapports compréhensibles pour toute l’équipe.</p></article>
        <article className="tcard"><span className="pill">Sécurité</span><h3>Attaques bloquées</h3><p>Détection des tentatives & phishing avec neutralisation automatique.</p></article>
        <article className="tcard"><span className="pill">Conformité</span><h3>RGPD sans effort</h3><p>Journal d’audit, registres & modèles prêts à l’emploi.</p></article>
      </div>
    </section>
  )
}
