import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/dashboard.css'

function Stat({label, value, delta}){
  return (
    <div className='kpi'>
      <div style={{color:'#9fb7ff', fontSize:12}}>{label}</div>
      <div style={{fontSize:28, fontWeight:900}}>{value}</div>
      <div style={{color: delta>=0 ? 'var(--success)':'var(--danger)'}}>{delta>=0?'+':''}{delta}%</div>
    </div>
  )
}

export default function Dashboard(){
  const rows = [
    {id:1, name:'Campagne A', conv:'4.2%', cost:'€ 120'},
    {id:2, name:'Campagne B', conv:'3.1%', cost:'€ 89'},
    {id:3, name:'Campagne C', conv:'5.8%', cost:'€ 154'},
  ]

  return (
    <div className='container section dashboard'>
      <aside className='sidebar'>
        <NavLink to='/dashboard' end>Vue d’ensemble</NavLink>
        <NavLink to='/dashboard/campaigns'>Campagnes</NavLink>
        <NavLink to='/dashboard/inbox'>Messages</NavLink>
        <NavLink to='/dashboard/settings'>Paramètres</NavLink>
      </aside>
      <section className='main'>
        <div className='kpis'>
          <Stat label='CA (30j)' value='€ 12 450' delta={8.3}/>
          <Stat label='Nouveaux leads' value='239' delta={3.1}/>
          <Stat label='Taux de conv.' value='4.7%' delta={-0.4}/>
          <Stat label='Satisfaction' value='92%' delta={1.2}/>
        </div>

        <div className='card table'>
          <table>
            <thead><tr><th>Campagne</th><th>Conversion</th><th>Coût</th></tr></thead>
            <tbody>
              {rows.map(r => <tr key={r.id}><td>{r.name}</td><td>{r.conv}</td><td>{r.cost}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
