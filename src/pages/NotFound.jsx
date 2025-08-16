import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

export default function NotFound() {
  return (
    <main className="container" style={{padding:'60px 16px', textAlign:'center'}}>
      <h1 style={{fontSize:'3rem', marginBottom:8}}>404</h1>
      <p style={{marginBottom:24}}>Page introuvable.</p>
      <Link className="btn btn-primary" to="/">Retour à l’accueil</Link>
    </main>
  );
}
