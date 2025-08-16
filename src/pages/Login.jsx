// src/pages/Login.jsx
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if ((email === 'admin' || email === 'admin@vaubia.com') && pwd === 'admin') {
      localStorage.setItem('vaubia_session', 'ok');
      window.location.href = '/dashboard';
    } else {
      setErr('Identifiants invalides (essayez admin / admin)');
    }
  };

  return (
    <main style={{padding:'24px'}}>
      <h1>Connexion</h1>
      <form onSubmit={submit} style={{display:'grid',gap:12,maxWidth:360}}>
        <input placeholder="Identifiant" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Mot de passe" type="password" value={pwd} onChange={e=>setPwd(e.target.value)} />
        <button type="submit">Se connecter</button>
        {err && <p style={{color:'#ff6b6b'}}>{err}</p>}
      </form>
    </main>
  );
}
