import React from 'react'

import TeamComponent from '../components/TeamComponent'
import FeaturesComponent from '../components/FeaturesComponent'
import OurServicesComponent from '../components/OurServicesComponent'
import AboutUsComponent from '../components/AboutUsComponent'
import NavbarComponent from '../components/NavbarComponent'
import SpinnerComponent from '../components/SpinnerComponent'
import HomeHeaderComponent from '../components/HomeHeaderComponent'

const Home = () => {
  return (
    
      <div className="container-xxl bg-white p-0">

        {/* <SpinnerComponent /> */}
        <HomeHeaderComponent />
        <AboutUsComponent />
        <OurServicesComponent />
        <FeaturesComponent />
        <TeamComponent />


        </div>


        

  )
}

export default Home