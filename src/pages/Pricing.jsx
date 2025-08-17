import React, { useMemo, useState } from 'react'
import '../styles/pricing.css'

const rawPlans = [
  {
    id:'start',
    title:'Starter',
    monthly:49,
    features:[
      'Publication multi-réseaux (3)',
      'Réponses aux avis manuelles',
      'Support e-mail'
    ]
  },
  {
    id:'pro',
    title:'Pro',
    monthly:99,
    features:[
      'Publication illimitée',
      'Demande d’avis par SMS',
      'Messagerie centralisée',
      'Support prioritaire'
    ],
    highlight:true
  },
  {
    id:'scale',
    title:'Scale',
    monthly:199,
    features:[
      'Automatisation IA',
      'Connecteurs avancés',
      'SLA entreprise'
    ]
  }
]

function formatEUR(v){return new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR', maximumFractionDigits:0}).format(v)}

export default function Pricing(){
  const [yearly, setYearly] = useState(true)
  const plans = useMemo(()=>{
    const ratio = yearly ? 12 * 0.83 : 1 // -17% sur annuel
    return rawPlans.map(p => ({
      ...p,
      price: Math.round(p.monthly * ratio)
    }))
  },[yearly])

  return (
    <div className='container section'>
      <div className='pricing-head'>
        <h2>Tarifs</h2>
        <div className='switch' role='tablist' aria-label='Facturation'>
          <button className={!yearly ? 'active':''} onClick={()=>setYearly(false)} role='tab' aria-selected={!yearly}>Mensuel</button>
          <button className={yearly ? 'active':''} onClick={()=>setYearly(true)} role='tab' aria-selected={yearly}>Annuel <span className='badge'>-17%</span></button>
        </div>
      </div>

      <div className='carousel snap-x' aria-label='Offres'>
        {plans.concat(plans).map((p, i)=>(
          <article key={p.id + i} className='plan snap-start' aria-label={`Offre ${p.title}`}>
            <header style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <h3>{p.title}</h3>
              {p.highlight ? <span className='badge'>Recommandé</span>: <span />}
            </header>
            <div className='hr'></div>
            <div className='price'>{formatEUR(p.price)}<span style={{fontSize:14, color:'#a9b7d9'}}> / {yearly ? 'an':'mois'}</span></div>
            <ul className='features-list'>
              {p.features.map(f=>(
                <li key={f}>
                  <svg width='18' height='18' viewBox='0 0 24 24' fill='none'><path d='M20 6L9 17l-5-5' stroke='url(#g)' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stopColor='#00D0FF'/><stop offset='1' stopColor='#7C4DFF'/></linearGradient></defs></svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a className='btn' href='/login'>Souscrire</a>
          </article>
        ))}
      </div>
    </div>
  )
}
