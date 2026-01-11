import React from 'react'
import './index.css'

import GymFacilities from './GymFacility.jsx'
import MeetOurTrainer from './MeetOurTrainers.jsx'
import Customer from './Customer.jsx'

import GymHeroSection from './GymHeroSection.jsx'
import Footer from './Footer.jsx'
import Herosection from './Herosection.jsx'
import Aboutus from './Aboutus.jsx'
import Services from './Services.jsx'

const App = () => {
  return (
    <div>

<section id="home"><Herosection /></section>

<section id="about"> <Aboutus /> </section>
<section id="services"><Services /></section>

<section id="membership"><GymFacilities /></section>
<section id="trainers"><MeetOurTrainer /></section>
<section id="reviews"><Customer /></section>
<GymHeroSection />
<section id="footer"><Footer /></section>


    </div>
  )
}

export default App
