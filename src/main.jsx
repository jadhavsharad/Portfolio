import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Landing from './components/Landing'
import { ParallaxProvider } from 'react-scroll-parallax'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <Landing />
    </ParallaxProvider>
  </React.StrictMode>
)
