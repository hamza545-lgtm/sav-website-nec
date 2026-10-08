import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import './index.css'

// While the page is moving, pause the decorative loops (glows, shimmer, pulses) so scrolling
// gets the whole frame budget. They resume a moment after scrolling stops.
function pauseDecorationWhileScrolling() {
  const root = document.documentElement
  let timer = 0
  window.addEventListener(
    'scroll',
    () => {
      if (!root.classList.contains('is-scrolling')) root.classList.add('is-scrolling')
      clearTimeout(timer)
      timer = setTimeout(() => root.classList.remove('is-scrolling'), 180)
    },
    { passive: true }
  )
}
pauseDecorationWhileScrolling()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </BrowserRouter>
  </React.StrictMode>
)
