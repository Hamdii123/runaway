import React from 'react'
import YoutubePlayer from '../componnents/youtubeplayer/YoutubePlayer'
import Team from '../componnents/team/Team'
import Accordion from '../componnents/accordion/Accordion'
import Navbar from '../componnents/navbar/Navbar'
import Jambotron from '../componnents/jambotron/Jambotron'
import Footer from '../componnents/footer/Footer'



const MainPage = () => {
  return (
    <div>
      
        {/* <Navbar/> */}
        <Jambotron/>
        <Accordion/>
        <YoutubePlayer/>
    <br/>
        <Team/>
        <br/>
        <Footer/>
        </div>
  )
}

export default MainPage