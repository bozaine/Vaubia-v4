import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="section container">
      <div className="card" style={{padding:24}}>
        <h1>404</h1>
        <p className="subtitle">Oups, page introuvable.</p>
        <Link className="btn" to="/">Retour à l’accueil</Link>
      </div>
    </section>
  )
}