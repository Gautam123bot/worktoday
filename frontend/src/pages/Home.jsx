import React from 'react'
import styles from "../App.module.css"
import Footer from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { Navbar } from '../components/Navbar/Navbar'
// import { Projects } from '../components/Projects/Projects'
import Faqs from '../components/FAQS/Faqs'
import Reg_service from '../components/Reg_servicemen/Reg_service'
import Allservice from '../components/Services/Allservice'
import Feedbackcr from '../components/Carousel_feedback/Feedbackcr'
import Full from '../components/Whychooseus/Full'
import Marquee from '../components/Marquee'
import Complainbox from '../components/Complainbx/Complainbox'
// import Getlatlongg from '../components/Maps/Getlatlongg'

function Home() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      {/* <Getlatlongg /> */}
      <Marquee />
      {/* <Projects /> */}
      {/* <Reg_service /> */}
      <Allservice />
      <Full />
      <Feedbackcr />
      <Complainbox />
      <Faqs />
      <Footer />
    </div>
  )
}

export default Home
