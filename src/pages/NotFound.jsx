import React from 'react'
import '../styles/global.css'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="container" style={{padding:'64px 0'}}>
      <h1>404</h1>
      <p className="kicker">Oups, page introuvable.</p>
      <Link className="btn" to="/">Retour à l’accueil</Link>
    </div>
  )
}
