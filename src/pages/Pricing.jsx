import React, { useState } from 'react'
import '../styles/pricing.css'
const features = [
  'Multi-diffusion Google & réseaux',
  'Optimisation fiche Google',
  'Posts planifiés IA',
  'Centralisation des messages',
  'Réponses assistées IA',
  'Support 24/7'
]
function Plan({title, price, period, popular=false, save=null}){
  return (<div className={`plan card ${popular?'pop':''}`}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:6}}>
      <span className={`badge ${popular?'':'neg'}`}>{popular?'Recommandé':'Essentiel'}</span>
      {save && <span className="save">-{save}%</span>}
    </div>
    <h3 style={{marginBottom:2}}>{title}</h3>
    <div className="price">{price} <span style={{fontSize:14, color:'var(--muted)'}}>/ {period}</span></div>
    <ul>{features.map(f => <li key={f}>{f}</li>)}</ul>
    <div style={{marginTop:14, display:'flex', gap:10}}>
      <button className="btn">Souscrire</button>
      <button className="btn ghost">Essai</button>
    </div>
  </div>)
}
export default function Pricing(){
  const [yearly, setYearly] = useState(true)
  return (<section className="section">
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
      <div>
        <div className="badge">Tarification simple</div>
        <h1 style={{marginTop:8}}>Choisissez votre rythme</h1>
      </div>
      <label className="switch">
        <span>Mensuel</span>
        <input type="checkbox" checked={yearly} onChange={e=>setYearly(e.target.checked)} aria-label="Basculer annuel" />
        <span>Annuel</span>
      </label>
    </div>
    <div className="scroller">
      <Plan title="Starter" price={yearly?'49€':'59€'} period={yearly?'mois, fact. à l’année':'mois'} />
      <Plan title="Business" price={yearly?'119€':'139€'} period={yearly?'mois, fact. à l’année':'mois'} popular save={17} />
      <Plan title="Scale" price={yearly?'249€':'279€'} period={yearly?'mois, fact. à l’année':'mois'} />
      <Plan title="Starter" price={yearly?'49€':'59€'} period={yearly?'mois, fact. à l’année':'mois'} />
      <Plan title="Business" price={yearly?'119€':'139€'} period={yearly?'mois, fact. à l’année':'mois'} popular save={17} />
    </div>
  </section>)
}
