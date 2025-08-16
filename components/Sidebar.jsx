// src/components/Sidebar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="dash-sidebar" aria-label="Navigation latérale">
      <div className="brand">
        <Link to="/">Vaubia</Link>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/dashboard">Tableau de bord</NavLink></li>
          <li><NavLink to="/pricing">Tarifs</NavLink></li>
          <li><NavLink to="/login">Connexion</NavLink></li>
        </ul>
      </nav>
      <div className="sidebar-foot">
        <a href="/legal" className="muted">Mentions légales</a>
      </div>
    </aside>
  );
}
