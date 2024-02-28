import { useEffect, useState } from 'react'
import Navbar from './components/NavBar'
import Content from './components/content'
import Footer from './components/Footer'

const endpoint = 'https://raw.githubusercontent.com/ThiagoAppe/FrontPi/main/src/assets/configHBL.json'

const App = () => {
  return (
    <>
      <div className='bg-fondo min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex-1'>
          <Content />
        </div>
        <div className='mt-auto'>
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App