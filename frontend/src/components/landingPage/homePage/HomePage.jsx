import React from 'react'
import HeroSection from './HeroSection'
import Organizations from './Organizations'
import StepsTrading from './StepsTrading'
import OpenAccount from '../OpenAccount'

function HomePage() {
  return (
   <>
   <HeroSection />
   <hr className='text-blue-300' />
   <Organizations />
   <hr className='text-blue-300'/>
   <StepsTrading />
   </>
  )
}

export default HomePage
