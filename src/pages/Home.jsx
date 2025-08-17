import React from 'react'
import '../styles/global.css'
import '../styles/home.css'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="container">
      <section className="hero">
        <div className="badge">Nouveau</div>
        <h1 className="headline">Suite IA pour booster votre visibilité et vos messages</h1>
        <p>Centralisez vos avis, automatisez les réponses, publiez sur les réseaux — en gardant la main grâce à un tableau de bord simple.</p>
        <div style={{display:'flex', gap:12, marginTop:18}}>
          <Link className="btn primary" to="/pricing">Voir les tarifs</Link>
          <Link className="btn" to="/dashboard">Essayer le dashboard</Link>
        </div>
      </section>

      <section>
        <h2 style={{marginBottom:10}}>Nos offres</h2>
        <div className="pricing-carousel">
          {[
            {title:'Annuel -17%', price:'49 € / mois', tag:'Le plus populaire'},
            {title:'Mensuel', price:'59 € / mois', tag:'Sans engagement'},
            {title:'Entreprise', price:'Sur devis', tag:'Support dédié'}
          ].map((p,i)=> (
            <article key={i} className="card pricing-card">
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <h3>{p.title}</h3><span className="badge">{p.tag}</span>
              </div>
              <div className="price" style={{margin:'8px 0 12px'}}>{p.price}</div>
              <hr/>
              <div className="features">
                <div><span className="tick">✓</span> Multidiffusion Google & Meta</div>
                <div><span className="tick">✓</span> Sollicitation et réponses aux avis</div>
                <div><span className="tick">✓</span> Chat & SMS unifiés</div>
                <div><span className="tick">✓</span> Publications réseaux</div>
              </div>
              <div style={{marginTop:16}}>
                <Link to="/pricing" className="btn primary" style={{width:'100%', justifyContent:'center'}}>Souscrire</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
