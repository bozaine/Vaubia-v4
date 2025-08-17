import React from 'react'
export default function Login(){
  return (
    <section className="container">
      <h2>Connexion</h2>
      <form className="form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <button className="btn" type="submit">Se connecter</button>
      </form>
    </section>
  )
}
