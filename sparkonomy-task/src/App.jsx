import React from 'react'

import { Header } from './Components/Header'
import { Payment } from './Components/Payment'
import { GraphSection} from './Components/GraphSection'
import { Invoices } from './Components/Invoices'
import { Main } from './Components/Main'
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className='selection:bg-purple-500 selection:text-black'>
      <Header/>
      <Main/>
      <Payment/>
      <GraphSection/>
      <Invoices/>
      <Footer/>
    </div>
  )
}

export default App