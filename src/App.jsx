import React from 'react'
import {  Element } from "react-scroll";
import GlowCard from './components/blog/Glowcrd/GrowCard'
import HeroSection from './components/HeroSection'
// import HeroSection from './components/'
import Acard from "./components/blog/Glowcrd/Acard"
import Home from "./components/Home"
import More from './components/Product/More'
// import Cards from './components/Glow3/Cards'
import Testo from "./components/Testo/Testo"
import Feed from './components/Feed'
import Product from './components/Product';
import Swap from './components/Swap';
import Blogcard from './components/BlogCrd';
import About from "./components/blog/about/About"
const App = () => {
  return (
    <div className='w-screen h-100vh  bg-[#D8DEEE]' >
     

    <Element>  <Home/></Element>
    <Element>    <Product/></Element>
    <Element>  <Acard/></Element>
    <Element>  <Testo/></Element>
 
    <Element>  <HeroSection/></Element>
    <Element>  <Swap/></Element>
    <Element>  <Feed/></Element>
    <Element> <Blogcard/> </Element>
    <Element>  <About /> </Element>
    {/* <Element>  <GlowCard/></Element> */}
    
      {/* <More/>
        <HeroSection />
        <Cards/>
      <Testo/>`
      <Feed/> */}
      {/* <GlowCard /> */}
     
    </div>
  )
}

export default App