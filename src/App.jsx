import { useEffect, useState } from 'react'
import Navbar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content'

import JsonReaderWrapper from './components/JsonReader'

const endpoint = 'https://raw.githubusercontent.com/ThiagoAppe/FrontPi/main/src/assets/configHBL.json'

const App = () => {
  return (
    <> <div className='bg-fondo'>
      <Navbar />
      <Content />
    </div>


    </>
  )
}

export default App