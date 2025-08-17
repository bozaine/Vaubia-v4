import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import TopNav from '../components/TopNav.jsx';

export default function AppShell() {
  return (
    <>
      <TopNav />
      <main className="app-container">
        <Outlet />
      </main>
      <footer className="site-footer">
        <nav className="footer-nav">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/pricing">Tarifs</NavLink>
          <NavLink to="/login">Connexion</NavLink>
        </nav>
      </footer>
    </>
  );
}
