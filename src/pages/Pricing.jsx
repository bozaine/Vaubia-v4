import React, { useState } from 'react'
import '../styles/global.css'
import '../styles/pricing.css'

export default function Pricing(){
  const [yearly,setYearly] = useState(true)
  const plans = yearly ? [
    {name:'Essentiel', price:'29€', sub:'/mois', save:'-17%', features:['Réputation & avis','Chat unifié','Publications sociales']},
    {name:'Pro', price:'49€', sub:'/mois', save:'-17%', features:['Tout Essentiel','Automations IA','Rapports avancés']},
    {name:'Business', price:'Sur devis', sub:'', save:'', features:['SSO/SLA','Support prioritaire','Intégrations sur‑mesure']}
  ] : [
    {name:'Essentiel', price:'35€', sub:'/mois', save:'', features:['Réputation & avis','Chat unifié','Publications sociales']},
    {name:'Pro', price:'59€', sub:'/mois', save:'', features:['Tout Essentiel','Automations IA','Rapports avancés']},
    {name:'Business', price:'Sur devis', sub:'', save:'', features:['SSO/SLA','Support prioritaire','Intégrations sur‑mesure']}
  ]

  return (
    <div className="container">
      <h1>Tarifs</h1>
      <p className="kicker">Bascule mensuel / annuel</p>
      <div className="tabs" role="tablist" aria-label="Toggle billing">
        <button className="tab" role="tab" aria-selected={!yearly} onClick={()=>setYearly(false)}>Mensuel</button>
        <button className="tab" role="tab" aria-selected={yearly} onClick={()=>setYearly(true)}>Annuel <span style={{marginLeft:6,opacity:.8}}>-17%</span></button>
      </div>

      <div className="grid cols-3" style={{marginTop:24}}>
        {plans.map((p,i)=>(
          <article key={i} className="card" style={{padding:24}}>
            <h3 style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span>{p.name}</span>
              {p.save && <span className="badge">{p.save}</span>}
            </h3>
            <div style={{display:'flex',alignItems:'baseline',gap:6, marginTop:10}}>
              <div className="price">{p.price}</div><div>{p.sub}</div>
            </div>
            <hr/>
            <ul style={{lineHeight:'1.9', color:'var(--muted)'}}>
              {p.features.map((f,idx)=>(<li key={idx}>✓ {f}</li>))}
            </ul>
            <button className="btn primary" style={{width:'100%', justifyContent:'center'}}>Choisir {p.name}</button>
          </article>
        ))}
      </div>
    </div>
  )
}
