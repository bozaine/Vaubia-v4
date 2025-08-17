import React from 'react'
import '../styles/home.css'

export default function Home(){
  return (
    <div className='hero'>
      <div className='container'>
        <h1>Une plateforme pour <span style={{background:'linear-gradient(135deg, var(--primary), var(--accent))', WebkitBackgroundClip:'text', color:'transparent'}}>booster votre visibilité</span>.</h1>
        <p>Publiez, analysez, échangez avec vos clients. Tout au même endroit.</p>
        <a className='btn' href='/pricing'>Voir les tarifs</a>

        <div className='features'>
          <div className='feature'>
            <strong>Publication multi-réseaux</strong>
            <span>Postez simultanément sur plusieurs canaux.</span>
          </div>
          <div className='feature'>
            <strong>Réputation & Avis</strong>
            <span>Centralisez, répondez, automatisez.</span>
          </div>
          <div className='feature'>
            <strong>Messagerie client</strong>
            <span>Unifiez WhatsApp, SMS et Messenger.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
