import React from 'react';

export default function Dashboard() {
  const logged = localStorage.getItem('session') === 'ok';
  if (!logged) { window.location.href = '/login'; return null; }
  return (
    <main style={{padding:'40px 16px'}}>
      <h1>Tableau de bord</h1>
      <p>Mock de données (tentatives, phishing bloqués, score sécurité…)</p>
    </main>
  );
}
