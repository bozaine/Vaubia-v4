import React from 'react';
import '../styles/home.css';

export default function Home(){
  return (
    <div className="home">
      <section className="hero">
        <p className="badge">Pare-feu de la vie</p>
        <h1>Protégez votre identité : email, téléphone & présence en ligne</h1>
        <p className="sub">
          Vaubia masque vos coordonnées, bloque les fuites de données et centralise vos demandes RGPD.
          Un seul tableau de bord pour reprendre le contrôle.
        </p>
        <div className="cta">
          <a className="btn btn-primary" href="/pricing">Voir les tarifs</a>
          <a className="btn btn-ghost" href="/dashboard">Tableau de bord démo</a>
        </div>
      </section>

      <section className="pillars">
        <article className="card">
          <h3>Masques & alias</h3>
          <ul>
            <li>Alias email jetables</li>
            <li>Numéros relais (anti-spam)</li>
            <li>Réponses filtrées</li>
          </ul>
        </article>
        <article className="card">
          <h3>Scan & alertes fuites</h3>
          <ul>
            <li>Détection de leaks (dark & clear web)</li>
            <li>Alerte en temps réel</li>
            <li>Plan d’action en 1-clic</li>
          </ul>
        </article>
        <article className="card">
          <h3>Contrôle RGPD</h3>
          <ul>
            <li>Demandes d’accès/suppression</li>
            <li>Historique centralisé</li>
            <li>Preuves & export PDF</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
