import React from 'react'

export default function Dashboard(){
  return (
    <section className="section container">
      <h1>Tableau de bord</h1>
      <p className="subtitle">Mock de données (à remplacer par les vraies API).</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        {['Disponibilité','Incidents','Temps de réponse'].map((t,i)=>(
          <div className="card" key={i} style={{padding:18}}>
            <div className="badge">{t}</div>
            <h2>{['99.98%','0','120ms'][i]}</h2>
            <div className="subtitle">Dernières 24h</div>
          </div>
        ))}
      </div>
    </section>
  )
}