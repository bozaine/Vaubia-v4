import React, { useEffect, useState } from 'react';
import '../styles/dashboard.css';

export default function Dashboard(){
  const [stats, setStats] = useState({ identities: 3, aliases: 24, filtered: 128, leaks: 0 });
  const [connectors, setConnectors] = useState(()=>{
    const saved = localStorage.getItem('connectors');
    return saved ? JSON.parse(saved) : { google:true, meta:true, whatsapp:true, sms:true };
  });

  useEffect(()=>{ localStorage.setItem('connectors', JSON.stringify(connectors)); }, [connectors]);

  return (
    <div className="dashboard">
      <h1>Tableau de bord</h1>
      <div className="grid">
        <div className="card"><div>Identités protégées</div><div className="kpi">{stats.identities}</div></div>
        <div className="card"><div>Pseudonymes actifs</div><div className="kpi">{stats.aliases}</div></div>
        <div className="card"><div>Messages filtrés</div><div className="kpi">{stats.filtered}</div></div>
      </div>

      <div className="card">
        <h3>Connecteurs</h3>
        {Object.entries(connectors).map(([k,v])=> (
          <label key={k} style={{display:'inline-flex', alignItems:'center', gap:8, marginRight:12}}>
            <input type="checkbox" checked={v} onChange={()=>setConnectors(c=>({...c,[k]:!c[k]}))}/>
            {k} <span className={v?'badge-on':'badge-off'}>{v?'on':'off'}</span>
          </label>
        ))}
      </div>

      <div className="card">
        <h3>Expositions récentes</h3>
        <table className="table">
          <thead><tr><th>Date</th><th>Source</th><th>Type</th><th>État</th></tr></thead>
          <tbody>
            <tr><td>2025-08-16</td><td>Forum X</td><td>email</td><td><span className="badge-on">bloquée</span></td></tr>
            <tr><td>2025-08-12</td><td>Broker Y</td><td>téléphone</td><td><span className="badge-on">bloquée</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
