import React from 'react'
import Carousel from './components/Carousel'
import Banner from './components/Banner'
import Promotion from './components/Promotion'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Banner />
      <Carousel />
      <Promotion />
    </div>
  )
}

export default Home