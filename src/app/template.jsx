'use client'

import { useEffect, useState } from 'react'

// Wraps every page. The first page a visitor lands on appears immediately (it is already in the
// HTML); pages opened from a link inside the site ease in.
let hydrated = false

export default function Template({ children }) {
  const [animate] = useState(() => hydrated)
  useEffect(() => {
    hydrated = true
  }, [])
  return <div className={animate ? 'page-enter' : undefined}>{children}</div>
}
