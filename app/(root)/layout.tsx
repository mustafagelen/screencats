import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <Navbar></Navbar>
        {children}
    </div>
  )
}

export default Layout