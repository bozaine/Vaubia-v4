import React, { useMemo, useState } from 'react';
import '../styles/pricing.css';

const PLANS = [
  { id:'essential', name:'Essential', priceM:7, features:['Alias email illimités','1 numéro relais','Scan mensuel']},
  { id:'pro', name:'Pro', priceM:14, features:['Alias + numéros illimités','Scan hebdo','Priorité support']},
  { id:'business', name:'Business', priceM:29, features:['Multi-utilisateurs','Conformité avancée','API']},
];

export default function Pricing(){
  const [cycle, setCycle] = useState('annual'); // annual = -17%
  const cards = useMemo(()=>[...PLANS, ...PLANS],[]); // duplication pour swipe long
  const price = (pM)=> cycle==='annual' ? Math.round(pM*12*0.83) : pM;

  return (
    <div className="pricing">
      <h1>Tarifs</h1>
      <div className="switch">
        <label><input type="radio" name="cycle" checked={cycle==='monthly'} onChange={()=>setCycle('monthly')}/> Mensuel</label>
        <label><input type="radio" name="cycle" checked={cycle==='annual'} onChange={()=>setCycle('annual')}/> Annuel <span className="pill">-17%</span></label>
      </div>

      <div className="cards">
        {cards.map((p, i)=>(
          <div key={p.id+'-'+i} className="card">
            <h3>{p.name}</h3>
            <div className="price">
              {cycle==='annual' ? price(p.priceM) : p.priceM}
              <span style={{fontSize:14, color:'var(--muted)'}}>€/{cycle==='annual'?'an':'mois'}</span>
            </div>
            <ul className="features">
              {p.features.map(f=><li key={f}>{f}</li>)}
            </ul>
            <div style={{height:12}}/>
            <a className="btn btn-primary" href="/login">Souscrire</a>
          </div>
        ))}
      </div>
      <p style={{color:'var(--muted)', marginTop:12}}>Astuce : glissez horizontalement pour parcourir les offres.</p>
    </div>
  );
}
