import React, {useMemo, useRef, useState, useEffect} from 'react'
import '../styles/pricing.css'

const PLANS = [
  { id:'basic', title:'Essentiel', priceM:29, features:['Monitoring de base','Alertes email','1 projet'], cta:'Souscrire' },
  { id:'pro', title:'Pro', priceM:59, popular:true, features:['Monitoring avancé','Alertes Slack','5 projets','Rapports PDF'], cta:'Souscrire' },
  { id:'business', title:'Business', priceM:119, features:['SLA 99.9%','SSO / SAML','Projets illimités','Support prioritaire'], cta:'Souscrire' },
]

export default function Pricing(){
  const [yearly, setYearly] = useState(true)
  const save = 0.17

  const computed = useMemo(()=> PLANS.map(p => ({
    ...p,
    priceY: Math.round(p.priceM*12*(1-save))
  })), [])

  const stripRef = useRef(null)

  // swipe infini (illusion) : duplique les cartes au montage
  const items = useMemo(()=> [...computed, ...computed, ...computed], [computed])

  // auto scroll léger
  useEffect(()=>{
    const el = stripRef.current
    if(!el) return
    let raf; let last = 0
    const step = (t)=>{
      if(t-last>30){
        el.scrollLeft += 1
        if(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2){
          el.scrollLeft = 0
        }
        last = t
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return ()=> cancelAnimationFrame(raf)
  }, [])

  // touch drag
  useEffect(()=>{
    const el = stripRef.current
    if(!el) return
    let isDown=false, startX=0, scrollLeft=0
    const down = (e)=>{ isDown=true; startX = (e.touches?e.touches[0].pageX:e.pageX) - el.offsetLeft; scrollLeft = el.scrollLeft }
    const move = (e)=>{ if(!isDown) return; e.preventDefault(); const x=(e.touches?e.touches[0].pageX:e.pageX)-el.offsetLeft; el.scrollLeft = scrollLeft - (x-startX) }
    const up = ()=>{ isDown=false }
    el.addEventListener('mousedown',down); el.addEventListener('mousemove',move); el.addEventListener('mouseup',up); el.addEventListener('mouseleave',up)
    el.addEventListener('touchstart',down,{passive:true}); el.addEventListener('touchmove',move,{passive:false}); el.addEventListener('touchend',up)
    return ()=>{
      el.removeEventListener('mousedown',down); el.removeEventListener('mousemove',move); el.removeEventListener('mouseup',up); el.removeEventListener('mouseleave',up)
      el.removeEventListener('touchstart',down); el.removeEventListener('touchmove',move); el.removeEventListener('touchend',up)
    }
  }, [])

  return (
    <section className="section container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12, flexWrap:'wrap'}}>
        <div>
          <h1>Tarifs</h1>
          <p className="subtitle">Paiement <b>annuel</b> avec <b>-17%</b> d’économie, ou au mois.</p>
        </div>
        <div className="switch card">
          <button className={yearly?'on':''} onClick={()=>setYearly(true)}>Annuel <span className="badge save">-17%</span></button>
          <button className={!yearly?'on':''} onClick={()=>setYearly(false)}>Mensuel</button>
        </div>
      </div>

      <div className="pricing-carousel">
        <div className="strip" ref={stripRef}>
          {items.map((plan,idx)=>{
            const price = yearly ? plan.priceY : plan.priceM
            const suffix = yearly ? '€/an HT' : '€/mois HT'
            return (
              <article className="card-price" key={plan.id+'-'+idx}>
                <div className="head">
                  <h3>{plan.title}</h3>
                  {plan.popular && <span className="badge">Populaire</span>}
                </div>
                <div className="price">
                  <div className="big">{price}</div>
                  <div className="sub">{suffix}</div>
                </div>
                {yearly && <div className="subtitle" style={{marginTop:6}}>Soit {(plan.priceM*12 - price)}€ d’économies</div>}
                <ul className="list">
                  {plan.features.map((f,i)=><li key={i}>• {f}</li>)}
                </ul>
                <div style={{marginTop:14}}>
                  <a className="btn" href="/login">{plan.cta}</a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}