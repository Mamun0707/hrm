import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';

function AdminLayout({children}) {
  return (
  <div id="wrapper">
    <Sidebar />

    <div id="page-wrapper" className="gray-bg dashbard-1">
      <Header />
          <main>{children}</main>
        <Footer />
    </div>
    
</div>
  )
}

export default AdminLayout