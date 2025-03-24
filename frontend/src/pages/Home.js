import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProducts'

const Home = () => {
 
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Top's Waches"}/>
      <VerticalCardProduct category={"mobiles"} heading={"Best Selling Mobiles"}/>
      <VerticalCardProduct category={"speakers"} heading={"Popular Speakers"}/>
      <VerticalCardProduct category={"earphones"} heading={"Best EarPhones"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
      <VerticalCardProduct category={"televisions"} heading={"Branded Televisions"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Grab Now"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
    </div>
  )
}

export default Home