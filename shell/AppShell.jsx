import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from '../components/TopNav.jsx'

export default function AppShell(){
  return (
    <>
      <TopNav />
      <main aria-live="polite">
        <Outlet />
      </main>
    </>
  )
}
