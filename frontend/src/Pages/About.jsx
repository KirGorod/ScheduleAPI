import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import AboutHeaderComponent from '../components/AboutHeaderComponent'
import AboutUsComponent from '../components/AboutUsComponent'
import FeaturesComponent from '../components/FeaturesComponent'
import TeamComponent from '../components/TeamComponent'

const About = () => {
  return (
    <div>
        <AboutHeaderComponent />
        <AboutUsComponent />
        <FeaturesComponent />
        <TeamComponent />
    </div>
  )
}

export default About
