import React from 'react'

export default function Dashboard(){
  return (
    <main className="container">
      <h1>Tableau de bord</h1>
      <div className="grid" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
        <div className="panel card">Volume messages (jour)</div>
        <div className="panel card">SLA moyen</div>
        <div className="panel card">Satisfaction</div>
      </div>
    </main>
  )
}