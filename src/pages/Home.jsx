import React from 'react'
import '../styles/home.css'

export default function Home(){
  return (
    <div className="section">
      <div className="hero">
        <div className="container">
          <span className="badge">EFFICACITÉ • SCALABILITÉ • AGILITÉ</span>
          <h1 style={{marginTop:12}}>Surveillez, <em>détectez</em> et décidez en quelques secondes.</h1>
          <p className="subtitle" style={{maxWidth:680}}>
            Un moyen plus simple et plus clair de suivre la performance et la conformité de vos systèmes.
          </p>
          <div className="actions">
            <a className="btn" href="/login">Commencer</a>
            <a className="link" href="#demo">Voir une démo</a>
          </div>

          <div className="features">
            <div className="feature">
              <div className="badge">Valeur</div>
              <h3>Visibilité claire</h3>
              <p>Un score unifié et des rapports compréhensibles pour toute l’équipe.</p>
            </div>
            <div className="feature">
              <div className="badge">Sécurité</div>
              <h3>Attaques bloquées</h3>
              <p>Détection des tentatives et neutralisation automatique.</p>
            </div>
            <div className="feature">
              <div className="badge">Conformité</div>
              <h3>RGPD sans effort</h3>
              <p>Journaux d’audit et modèles prêts à l’emploi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}