import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P','R','O','J','E','C','T','S']}
              idx={15}
            />
          </h1>
         
        </div>

        </div>
    </>
  )
}

export default Project
