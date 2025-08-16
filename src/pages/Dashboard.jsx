// src/pages/Dashboard.jsx
import React from 'react';

export default function Dashboard() {
  const logout = () => {
    localStorage.removeItem('vaubia_session');
    window.location.href = '/login';
  };

  return (
    <main style={{padding:'24px'}}>
      <h1>Dashboard</h1>
      <p>Bienvenue 👋 — interface mock.</p>

      <section style={{marginTop:'16px',display:'grid',gap:'12px'}}>
        <div style={{padding:'16px',border:'1px solid #1f2b36',borderRadius:12,background:'#0b1620'}}>
          <strong>Score sécurité</strong>
          <div style={{marginTop:8}}>78/100</div>
        </div>
        <div style={{padding:'16px',border:'1px solid #1f2b36',borderRadius:12,background:'#0b1620'}}>
          <strong>Dernières alertes</strong>
          <ul style={{marginTop:8, paddingLeft:18}}>
            <li>Connexion suspecte (FR) — atténuée</li>
            <li>Phishing détecté — bloqué</li>
          </ul>
        </div>
      </section>

      <button onClick={logout} style={{marginTop:'20px'}}>
        Se déconnecter
      </button>
    </main>
  );
}
