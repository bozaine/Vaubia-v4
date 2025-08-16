import React, { useState } from 'react';
import '../styles/global.css';

export default function Login() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (id === 'admin' && pwd === 'admin') {
      localStorage.setItem('session', 'ok');
      window.location.href = '/dashboard';
    } else {
      alert('Identifiants invalides');
    }
  };

  return (
    <main className="container" style={{padding:'40px 16px'}}>
      <h1>Connexion</h1>
      <form onSubmit={onSubmit} style={{display:'grid', gap:12, maxWidth:360}}>
        <input placeholder="Identifiant" value={id} onChange={e=>setId(e.target.value)} />
        <input type="password" placeholder="Mot de passe" value={pwd} onChange={e=>setPwd(e.target.value)} />
        <button className="btn btn-primary" type="submit">Se connecter</button>
      </form>
    </main>
  );
}
