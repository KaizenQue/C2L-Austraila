import React from 'react'
import SubOne from "./SubOne"
import SubTwo from './SubTwo'
import SubThree from './SubThree'
import SubFour from './SubFour'
import Footer from '../Footer'
import SubFive from './SubFive'
import SubSix from './SubSix'
import NavBar from "../NavBar"
import HomeSeven from '../HomeNewSouthWales/HomeSeven'
import Faq from '../FAQ'

function SubService() {
  return (
    <div className='overflow-hidden'>
        <NavBar />
        <SubOne />
        <SubTwo />
        <SubThree />
        <SubFour />
        <SubFive />
        <SubSix />
        <Faq />
        <HomeSeven />
        <Footer />
    </div>
  )
}

export default SubService