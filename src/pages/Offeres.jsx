import React from 'react'
import { dishes } from '../../public/assets/frontend_assets/dishes';
import { useState } from 'react';
import FoodOffers from '../components/foodOffers';
import { Helmet } from 'react-helmet-async';
const Offeres = () => {

  //offeres dishes
  const [dishesFiltered, setDishesFiltered] = useState([...dishes])
  return (
    <>
    <Helmet>Offeres</Helmet>

      <h1 className='font-bold mt-10 text-xl sm:text-2xl xl:text-3xl mx-4 sm:mx-10 lg:mx-20 xl:mx-40'>Popular Offers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3   mt-5 md:mt-10 px-4 sm:px-10 lg:px-20 xl:px-40">


        {
          dishesFiltered.map((ele, index) => {
            
               if(index%10==0)
                return(<FoodOffers food={ele} key={index} />)
            
          })
        }

      </div>
    </>
  )
}

export default Offeres