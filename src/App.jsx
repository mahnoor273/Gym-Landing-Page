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
  

 




<Herosection />
<Aboutus />
<Services />
{/* GymFacility */}
<GymFacilities />

<MeetOurTrainer />
<Customer />
<GymHeroSection />
<Footer />
    </div>
  )
}

export default App
