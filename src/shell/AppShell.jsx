import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import '../styles/shell.css'

export default function AppShell(){
  return (
    <>
      <TopNav />
      <main className="app">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}