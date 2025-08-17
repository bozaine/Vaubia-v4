import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from '../components/TopNav.jsx'
import SideNav from '../components/SideNav.jsx'
import '../styles/shell.css'

export default function AppShell(){
  return (
    <>
      <TopNav/>
      <main>
        <div className="container layout">
          <SideNav/>
          <section className="content"><Outlet/></section>
        </div>
      </main>
      <footer>
        © Vaubia — {new Date().getFullYear()}
      </footer>
    </>
  )
}