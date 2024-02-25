import React from 'react'
import YoutubePlayer from '../componnents/youtubeplayer/YoutubePlayer'
import Team from '../componnents/team/Team'
import Accordion from '../componnents/accordion/Accordion'
import Navbar2 from '../componnents/navbar/Navbar2'
import Jambotron from '../componnents/jambotron/Jambotron'
import Footer from '../componnents/footer/Footer'
import Event from '../componnents/Events/Event'



const MainPage = () => {
  return (
    <div>
      
        <Navbar2/>
        <Jambotron/>
        <Accordion/>
        {/* <Event/> */}
        <YoutubePlayer/>
    <br/>
        <Team/>
        <br/>
        <Footer/>
        </div>
  )
}

export default MainPage