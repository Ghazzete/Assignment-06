import React from 'react'
import Home from './components/Home'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Card from './components/Card'
import About from './components/About'
import Testmintal from './components/Testmintal'
import Footer from './components/Footer'

function page() {
  return (
    <div>
       <Home />
       <Hero />
       <Courses />
       <Card />
       <About />
       <Testmintal />
       <Footer />
    </div>
  )
}

export default page