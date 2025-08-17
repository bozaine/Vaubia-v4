import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import TopNav from '../components/TopNav.jsx'
import '../styles/shell.css'

export default function AppShell() {
  return (
    <div className="app">
      <TopNav />
      <main className="page">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">© Vaubia — {new Date().getFullYear()}</div>
      </footer>
    </div>
  )
}
