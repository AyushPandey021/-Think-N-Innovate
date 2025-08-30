import React from 'react'
import {  Element } from "react-scroll";
import GlowCard from './components/blog/Glowcrd/GrowCard'
import HeroSection from './components/HeroSection'
// import HeroSection from './components/'
import Acard from "./components/Acard"
import Home from "./components/Home"
import More from './components/Product/More'
// import Cards from './components/Glow3/Cards'
import Testo from "./components/Testo/Testo"
import Feed from './components/Feed'

const App = () => {
  return (
    <div className=' '>
     

    <Element>  <Home/></Element>
    <Element>  <More/></Element>
    <Element>  <Acard/></Element>
    <Element>  <Testo/></Element>
    <Element>  <More/></Element>
    <Element>  <HeroSection/></Element>
    <Element>  <Feed/></Element>
    <Element>  <GlowCard/></Element>
      
      {/* <More/>
        <HeroSection />
        <Cards/>
      <Testo/>
      <Feed/> */}
      {/* <GlowCard /> */}
      {/* <About /> */}
    </div>
  )
}

export default App