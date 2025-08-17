import React from 'react';
export default function Login(){
  return (
    <div>
      <h1>Connexion</h1>
      <form method="post" action="/api/subscribe" style={{display:'grid', gap:10, maxWidth:360}}>
        <input name="email" type="email" placeholder="Email" required style={{height:44, borderRadius:10, border:'1px solid var(--border)', background:'var(--panel)', color:'var(--text)', padding:'0 12px'}}/>
        <input name="password" type="password" placeholder="Mot de passe" required style={{height:44, borderRadius:10, border:'1px solid var(--border)', background:'var(--panel)', color:'var(--text)', padding:'0 12px'}}/>
        <button className="btn btn-primary" type="submit">Se connecter</button>
      </form>
    </div>
  );
}
