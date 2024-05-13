import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collection from './Collection'
import BestSeller from './BestSeller'
import News from './News'
const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Products/>
      <Collection/>
      <BestSeller/>
    <News/>
    </div>
  )
}

export default Home
