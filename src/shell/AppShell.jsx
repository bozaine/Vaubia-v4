import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/global.css';

export default function AppShell() {
  return (
    <>
      <header className="topbar">
        <nav className="container">
          <Link className="brand" to="/">Vaubia</Link>
          <div className="spacer" />
          <Link to="/pricing">Tarifs</Link>
          <Link to="/login">Connexion</Link>
        </nav>
      </header>
      import TopNav from '../components/TopNav.jsx';
...
export default function AppShell() {
  return (
    <>
      <TopNav />
      <Outlet />
      ...
    </>
  );
}
      <Outlet />
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Vaubia</div>
      </footer>
    </>
  );
}
