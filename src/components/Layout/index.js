import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.containerMain}>
        <section className='w-full md:w-4/5'>
          {children}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Layout
