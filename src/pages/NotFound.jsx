import React from 'react';
import '../styles/home.css';
export default function NotFound(){
  return (
    <main className="home">
      <section className="hero">
        <h1>404</h1>
        <p className="sub">Oups, cette page n’existe pas.</p>
        <div className="cta"><a className="btn btn-primary" href="/">Retour à l’accueil</a></div>
      </section>
    </main>
  );
}
