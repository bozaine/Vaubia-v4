import React from 'react'
import '../styles/pricing.css'

function Tier({name, price, perks, best}){
  return (
    <div className="panel tier">
      <header>
        <h3 style={{margin:0}}>{name}</h3>
        {best && <span className="ribbon">-17% annuel</span>}
      </header>
      <div className="price">{price}</div>
      <button className="btn" style={{width:'100%'}}>Souscrire</button>
      <ul className="perks">
        {perks.map((p,i)=>(<li key={i}>{p}</li>))}
      </ul>
    </div>
  )
}

export default function Pricing(){
  const perks = [
    "Intégration WhatsApp & SMS",
    "Boîte de réception unifiée",
    "Assistant IA entraîné",
    "Statistiques & export",
  ]
  return (
    <main className="container pricing">
      <h1>Tarifs simples pour grandir</h1>
      <p className="lead">Mensuel ou annuel (-17%). Modifiez quand vous voulez.</p>
      <div className="tiers">
        <Tier name="Essentiel" price="49 € / mois" perks={perks}/>
        <Tier name="Pro" price="99 € / mois" perks={perks} best/>
        <Tier name="Entreprise" price="Nous contacter" perks={[...perks,"SLA & SSO","Manager dédié"]}/>
      </div>
    </main>
  )
}