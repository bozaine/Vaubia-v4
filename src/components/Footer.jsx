import React from 'react'

export default function Footer(){
  return (
    <footer className="site">
      <div className="container">
        © {new Date().getFullYear()} Vaubia — Tous droits réservés
      </div>
    </footer>
  )
}