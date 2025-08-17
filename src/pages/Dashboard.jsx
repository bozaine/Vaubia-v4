import React from 'react'
export default function Dashboard(){
  return (
    <section className="container">
      <h2>Tableau de bord</h2>
      <div className="grid">
        <div className="card">Avis (semaine) : 32</div>
        <div className="card">Réponses IA : 18</div>
        <div className="card">Posts publiés : 12</div>
        <div className="card">Satisfaction : 4.7 ★</div>
      </div>
    </section>
  )
}
