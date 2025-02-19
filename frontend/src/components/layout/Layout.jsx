import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar'
function Layout() {
  return (
    <>
      <section className='wrapper  flex flex-col min-h-screen'>
        <div className='fixed  top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
        <div className='mt-16 '>
          {/* change dynamic routes */}
          <Outlet />

        </div>

      </section>
    </>
  )
}

export default Layout