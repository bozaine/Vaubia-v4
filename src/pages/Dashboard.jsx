import React from 'react'
import '../styles/global.css'
export default function Dashboard(){
  return (<section className="section">
    <h1>Dashboard</h1>
    <div className="grid" style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))'}}>
      <div className="card"><div className="badge">Leads</div><h2 style={{marginTop:6}}>248</h2><p>7 derniers jours</p></div>
      <div className="card"><div className="badge">Satisfaction</div><h2 style={{marginTop:6}}>4.7/5</h2><p>REVIEWS</p></div>
      <div className="card"><div className="badge">Messages</div><h2 style={{marginTop:6}}>1 204</h2><p>tous canaux</p></div>
    </div>
  </section>)
}
