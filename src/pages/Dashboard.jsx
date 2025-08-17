import React from 'react'
import '../styles/global.css'

export default function Dashboard(){
  return (
    <div className="container">
      <h1>Tableau de bord</h1>
      <div className="grid cols-3" style={{marginTop:16}}>
        <div className="card" style={{padding:18}}>
          <h3>Notes moyennes</h3>
          <p className="kicker">4.6 ⭐️ (30j)</p>
        </div>
        <div className="card" style={{padding:18}}>
          <h3>Messages traités</h3>
          <p className="kicker">+184</p>
        </div>
        <div className="card" style={{padding:18}}>
          <h3>Posts publiés</h3>
          <p className="kicker">12</p>
        </div>
      </div>

      <div className="card" style={{padding:18, marginTop:24}}>
        <h3>Derniers avis</h3>
        <ul>
          <li>✓ "Super réactifs" — Google</li>
          <li>✓ "On recommande" — Facebook</li>
        </ul>
      </div>
    </div>
  )
}
