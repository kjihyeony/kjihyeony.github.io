import Header from './Header'
import Footer from './Footer'
import './Layout.scss'
import React from 'react'

const Layout = (props:{
  children: React.ReactNode
} ) => {
  return(
    <div>
      <Header />

      <div>
        {props.children}
      </div>
      
      <Footer />
    </div>
  )
}

export default Layout