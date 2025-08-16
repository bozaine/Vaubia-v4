
import React, { useRef, useEffect } from 'react'
import '../styles/pricing.css'

const BASE = [
  'Multidiffusion sur plateformes clés',
  'Optimisation fiche établissement',
  'Publications programmées'
]

const CARDS = [
  { id:'annual-17', title:'Annuel -17%', price:1490, period:'an', badge:'Éco -17%', highlight:true, features:BASE },
  { id:'annual', title:'Annuel', price:1790, period:'an', features:BASE },
  { id:'monthly', title:'Mensuel', price:179, period:'mois', features:BASE }
]

function Plan({title, price, period, features, badge, highlight}){
  return (
    <article className={`plan${highlight?' plan--hl':''}`}>
      {badge && <div className="plan__badge">{badge}</div>}
      <h3>{title}</h3>
      <p className="plan__price"><span>{price}</span>€/<small>{period}</small></p>
      <button className="btn primary">Souscrire</button>
      <ul>{features.map((f,i)=><li key={i}>{f}</li>)}</ul>
    </article>
  )
}

export default function Pricing(){
  const railRef = useRef(null)
  const itemW = useRef(0)
  const count = CARDS.length
  const set = [...CARDS, ...CARDS, ...CARDS]

  useEffect(()=>{
    const rail = railRef.current
    if(!rail) return
    const first = rail.querySelector('.plan')
    if(first){
      const r = first.getBoundingClientRect()
      itemW.current = r.width + 24
    }
    rail.scrollLeft = itemW.current * count

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(()=>{
        const max = itemW.current * (count * 3)
        const x = rail.scrollLeft
        if (x <= itemW.current * 0.5) {
          rail.scrollLeft = x + itemW.current * count
        } else if (x + rail.clientWidth >= max - itemW.current * 0.5) {
          rail.scrollLeft = x - itemW.current * count
        }
        ticking = false
      })
    }
    rail.addEventListener('scroll', onScroll, { passive: true })
    return () => rail.removeEventListener('scroll', onScroll)
  }, [count])

  const by = (d)=> railRef.current?.scrollBy({ left: d*itemW.current, behavior:'smooth' })

  return (
    <section className="pricing">
      <div className="container">
        <header className="pricing__hero">
          <h1>Nos tarifs</h1>
          <p>Swipez du doigt — défilement infini dans les deux sens.</p>
        </header>

        <div className="carousel">
          <button className="arrow left" onClick={()=>by(-1)} aria-label="Précédent">‹</button>
          <div className="rail" ref={railRef} role="region" aria-label="Carrousel des offres">
            {set.map((c,i)=>(<Plan key={c.id+'-'+i} {...c} />))}
          </div>
          <button className="arrow right" onClick={()=>by(1)} aria-label="Suivant">›</button>
        </div>
      </div>
    </section>
  )
}
