import React, { useEffect, useRef } from 'react'
import '../styles/pricing.css'

const plans = [
  { id: 'basic', title: 'Essentiel', price: 49, yearly: true, features: ['Multidiffusion de base', '10 posts / mois', 'Support email'] },
  { id: 'pro', title: 'Pro', price: 89, yearly: true, badge: '-17% annuel', features: ['Multidiffusion avancée', 'IA réponses aux avis', 'Planificateur de posts', 'Support prioritaire'] },
  { id: 'max', title: 'Entreprise', price: 149, yearly: true, features: ['Tout Pro', 'SLA et SSO', 'Onboarding dédié'] }
]

function Card({ p }){
  return (
    <article className="card">
      {p.badge && <div className="badge">{p.badge}</div>}
      <h3 className="plan">{p.title}</h3>
      <div className="price"><span className="amount">{p.price}</span>€<span className="per">/mois</span></div>
      <ul className="features">
        {p.features.map((f,i)=><li key={i}>✓ {f}</li>)}
      </ul>
      <button className="btn">Souscrire</button>
    </article>
  )
}

export default function Pricing(){
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    // Dupliquer pour illusion d'infini
    track.innerHTML += track.innerHTML
  }, [])

  return (
    <section className="container pricing">
      <h2 className="title">Des options simples et transparentes</h2>
      <div className="carousel" ref={trackRef}>
        {plans.map(p => <Card key={p.id} p={p} />)}
      </div>
      <p className="hint">Swipe gauche/droite pour faire défiler — défilement infini.</p>
    </section>
  )
}
