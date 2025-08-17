import React from 'react'
import '../styles/home.css'

export default function Home() {
  return (
    <section className="container home">
      <h1 className="title">La plateforme qui simplifie votre visibilité locale</h1>
      <p className="lead">Gestion d’avis, publications, messages — tout en un.</p>
      <div className="cta-row">
        <a href="/pricing" className="btn">Voir les tarifs</a>
        <a href="#demo" className="btn btn-ghost">Demander une démo</a>
      </div>
    </section>
  )
}
