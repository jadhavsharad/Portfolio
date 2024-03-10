import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import Hero from './Hero'
import Project from './Project'
import Contact from './Contact'
import AnimatedCursor from "react-animated-cursor"
import { Loader } from './Loader'
import '../utils/Locomotive.css'
import LocomotiveScroll from 'locomotive-scroll';
import Education from './Education'
new LocomotiveScroll();

function Landing() {

  const [loading, setLoading] = useState(true);
  const [delay, setDelay] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);


  return (
    <div data-scroll-container  data-scroll-speed="0.1" >{(loading) && (delay) ? <Loader /> : <div><NavigationBar />
      <Hero data-scroll data-scroll-speed="0.1" />
      <Project data-scroll data-scroll-speed="0.1" />
      <Education data-scroll data-scroll-speed="0.1"/>
      <Contact data-scroll  data-scroll-speed="0.1"  />
      <AnimatedCursor
        data-scroll
        innerSize={0}
        trailingSpeed={4}
        outerSize={45}
        innerScale={1}
        outerScale={1.25}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{ mixBlendMode: 'difference', backgroundColor: 'var(--cursor-color)' }}
        outerStyle={{ mixBlendMode: 'difference', border: '3px solid var(--cursor-color)', backgroundColor: 'var(--cursor-color)' }} /></div>}</div>
  )
}
export default Landing