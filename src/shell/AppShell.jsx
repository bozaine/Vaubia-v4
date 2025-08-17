import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/TopNav.jsx';
import Footer from '../components/Footer.jsx';

export default function AppShell(){
  return (
    <>
      <TopNav />
      <div className="container page">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
