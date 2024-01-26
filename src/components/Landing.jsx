import React, { useEffect, useRef, useState } from 'react'
import NavigationBar from './NavigationBar'
import Hero from './Hero'
import Project from './Project'
import Contact from './Contact'
import AnimatedCursor from "react-animated-cursor"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { Loader } from './Loader'

function Landing() {

  const containerRef = useRef(null)
  var { scroll } = useLocomotiveScroll({
    smooth: true
  })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    )
  } else {
    return (
      <>
        <LocomotiveScrollProvider
          options={{ smooth: true }} watch={[]} containerRef={containerRef}>
          <main data-scroll-container ref={containerRef} >
            <NavigationBar data-scroll-section />
            <Hero data-scroll-section />
            <Project data-scroll-section />
            <Contact data-scroll-section />
          </main>
        </LocomotiveScrollProvider>

        <AnimatedCursor innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.25}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            mixBlendMode: 'difference',
            backgroundColor: 'var(--cursor-color)'
          }}
          outerStyle={{
            mixBlendMode: 'difference',
            border: '3px solid var(--cursor-color)'
          }} />
      </>
    )
  }
}
export default Landing