import React from 'react';
import Navbar from '../navigation/navbar/Navbar';

function Layout({ children }: { children: any }) {
  return (
    <div className="h-screen bg-blue-100">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
