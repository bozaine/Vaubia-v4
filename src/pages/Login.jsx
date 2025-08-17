import React, { useState } from 'react'

export default function Login(){
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [msg, setMsg] = useState('')

  function onSubmit(e){
    e.preventDefault()
    if(!email || !pwd){ setMsg('Remplis e‑mail et mot de passe.'); return }
    localStorage.setItem('vaubia_token','demo-token')
    setMsg('Connecté ! Tu peux accéder au dashboard.')
    window.location.href = '/dashboard'
  }

  return (
    <div className='container section'>
      <h2>Connexion</h2>
      <form onSubmit={onSubmit} className='card' style={{padding:16, maxWidth:420}}>
        <label>E‑mail<br/>
          <input type='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='toi@exemple.com'
                 style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid rgba(255,255,255,.15)', margin:'6px 0 12px', background:'rgba(255,255,255,.06)', color:'#fff'}}/>
        </label>
        <label>Mot de passe<br/>
          <input type='password' value={pwd} onChange={e=>setPwd(e.target.value)} placeholder='••••••••'
                 style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid rgba(255,255,255,.15)', margin:'6px 0 16px', background:'rgba(255,255,255,.06)', color:'#fff'}}/>
        </label>
        <button className='btn' type='submit'>Se connecter</button>
        {msg && <p style={{color:'#9ec6ff'}}>{msg}</p>}
      </form>
    </div>
  )
}
