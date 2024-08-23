import React from 'react'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/Hero'
import Pfilter from './Componets/Post-filter/Pfilter'
import Posts from './Componets/Posts/Posts'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Pfilter/>
      <Posts/>
    </div>
  )
}

export default App
