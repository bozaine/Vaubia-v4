import React from 'react'

export default function NotFound(){
  return (
    <div className='container section' style={{textAlign:'center'}}>
      <h1 style={{fontSize:64, margin:0}}>404</h1>
      <p>Page introuvable.</p>
      <a className='btn' href='/'>Retour à l’accueil</a>
    </div>
  )
}
