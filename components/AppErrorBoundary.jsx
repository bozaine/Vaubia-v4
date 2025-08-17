import React from 'react';

export default class AppErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError: false, err: null }; }
  static getDerivedStateFromError(err){ return { hasError: true, err }; }
  componentDidCatch(err, info){ console.error('Runtime error:', err, info); }
  render(){
    if (this.state.hasError) {
      return (
        <div style={{padding:'24px', fontFamily:'system-ui, sans-serif'}}>
          <h1>Oups… une erreur est survenue</h1>
          <p>Vérifie les derniers changements. Le détail est dans la console.</p>
          <pre style={{whiteSpace:'pre-wrap', background:'#111', color:'#0f0', padding:'12px', borderRadius:'8px'}}>
{String(this.state.err)}
          </pre>
          <a href="/" style={{display:'inline-block', marginTop:12}}>↩︎ Retour à l’accueil</a>
        </div>
      );
    }
    return this.props.children;
  }
}
