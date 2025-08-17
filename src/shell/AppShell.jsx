import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './shell.css';

export default function AppShell() {
  return (
    <>
      <header className="topbar">
        <nav className="container">
          <Link to="/">Vaubia</Link>
          <div className="spacer" />
          <Link to="/pricing">Tarifs</Link>
          <Link to="/login">Connexion</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main className="page">
        <Outlet />
      </main>
      <footer className="footer">© Vaubia</footer>
    </>
  );
}