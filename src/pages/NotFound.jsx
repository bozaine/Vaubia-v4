import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <main className="container" style={{padding:'80px 0',textAlign:'center'}}>
      <h1>404</h1>
      <p className="lead">Oups, cette page n'existe pas.</p>
      <Link className="btn" to="/">Retour à l’accueil</Link>
    </main>
  )
}