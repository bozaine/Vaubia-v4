import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

export default function NotFound(){
  return (
    <section className="container home">
      <h1 className="title">404</h1>
      <p className="lead">Oups, page introuvable.</p>
      <Link className="btn" to="/">Retour à l’accueil</Link>
    </section>
  )
}
