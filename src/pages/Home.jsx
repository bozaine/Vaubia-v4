import React from 'react';
import '../styles/home.css';

export default function Home() {
  return (
    <main className="home">
      {/* Bandeau URL mock + fond dégradé comme le mockup */}
      <section className="mock-hero">
        <div className="container">
          <div className="mock-bar">
            <span className="dots"><i/><i/><i/></span>
            <input value="cleanmeter.app/" readOnly aria-label="Barre d’adresse" />
            <button className="btn-ghost sm">⤓ Download</button>
          </div>

          <div className="hero-copy">
            <h1>Minimalistic real-time<br/>system stats monitor</h1>
            <p>Un moyen plus simple et propre de garder la main sur vos performances.</p>
            <div className="cta">
              <a className="btn btn-primary">Download for Windows</a>
              <a className="btn btn-ghost">Voir une démo</a>
            </div>
          </div>

          {/* Image/gradient vague + carte centrale “widget” */}
          <div className="hero-visual">
            <div className="wave" />
            <div className="widget">
              <div className="row"><span>FPS</span><b>120</b><span>8.3 ms</span></div>
              <div className="bar" />
              <div className="row"><span>CPU</span><b>63°c</b></div>
              <div className="row"><span>GPU</span><b>46°c</b><span>50%</span><span>12.5GB</span></div>
              <div className="row"><span>RAM</span><b>9.4GB</b></div>
            </div>
          </div>

          {/* 3 tuiles alignées */}
          <div className="tiles">
            <article>
              <span className="chip">Valeur</span>
              <h3>Visibilité claire</h3>
              <p>Score unifié & rapports compréhensibles pour toute l’équipe.</p>
            </article>
            <article>
              <span className="chip">Sécurité</span>
              <h3>Attaques bloquées</h3>
              <p>Détection des tentatives & phishing avec neutralisation automatique.</p>
            </article>
            <article>
              <span className="chip">Conformité</span>
              <h3>RGPD sans effort</h3>
              <p>Journal d’audit, registres & modèles prêts à l’emploi.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
