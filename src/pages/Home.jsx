import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { food_list } from "../../public/assets/frontend_assets/assets";
import FoodView from '../components/FoodView';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Home = () => {

    //food list to show
    const[filteredFoodList,setFilteredFoodList]=useState([...food_list])
    //category selected to filter
    const [categorySelected,setCategory]=useState("all")
    
    //filter food depend on category
   function filterfood(category){
       const filrtered=food_list.filter((food)=>{
        return food.category===category
        // console.log(food.category,category)
       })
          console.log(filrtered)
       setFilteredFoodList(filrtered)
   }

  return (
    <>
    <Helmet>Home</Helmet>
    <div className="mx-4 sm:mx-10 lg:mx-20 xl:mx-40 mt-10 relative">
       <img src="assets\frontend_assets\header_img.png"  alt="search-icon"/>
       <h4 className="font-bold text-xl sm:text-3xl md:text-4xl xl:text-5xl text-white absolute sm:top-20 xl:top-40 md:top-30 sm:left-20 left-5 top-13 leading-relaxed">Order Your <br/> Favourite Food Here</h4>
      
    </div>

     <h2 className="font-bold mx-4 sm:mx-10 lg:mx-20 xl:mx-40 text-xl md:text-2xl xl:text-3xl mt-5 md:mt-10">Explore our menue</h2>

     <div className=" grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-5  md:gap-10 mt-5 md:mt-10 ml-4 sm:ml-10 lg:ml-20 xl:ml-40">
        <div>
            <img src="assets\frontend_assets\menu_1.png"  onClick={()=>{setCategory("Salad");filterfood("Salad")}} className={`cursor-pointer ${categorySelected=="Salad"&&"border border-5 border-red-500 rounded-full"} `} alt="salad-image"/>
            <h4 className="mt-5 text-center text-sm md:text-2xl xl:text-3xl">Salad</h4>
        </div>
        <div>
            <img src="assets\frontend_assets\menu_2.png" onClick={()=>{setCategory("Rolls");filterfood("Rolls")}} className={`cursor-pointer ${categorySelected=="Rolls"&&"border border-5 border-red-500 rounded-full"} `}  alt="rolls-image"/>
            <h4 className="mt-5 text-center text-sm md:text-2xl xl:text-3xl">Rolls</h4>
        </div>
        <div>
            <img src="assets\frontend_assets\menu_3.png" onClick={()=>{setCategory("Deserts");filterfood("Deserts")}} className={`cursor-pointer ${categorySelected=="Deserts"&&"border border-5 border-red-500 rounded-full"} `}  alt="deserts-image"/>
            <h4 className="mt-5 text-center text-sm md:text-2xl xl:text-3xl">Deserts</h4>
        </div>
        <div>
            <img src="assets\frontend_assets\menu_4.png" onClick={()=>{setCategory("Sandwich");filterfood("Sandwich")}} className={`cursor-pointer ${categorySelected=="Sandwich"&&"border border-5 border-red-500 rounded-full"} `}  alt="sandwatch-image"/>
            <h4 className="mt-5 text-center text-sm md:text-2xl xl:text-3xl">Sandwatch</h4>
        </div>
        <div>
            <img src="assets\frontend_assets\menu_5.png" onClick={()=>{setCategory("Cake") ;filterfood("Cake")}} className={`cursor-pointer ${categorySelected=="Cake"&&"border border-5 border-red-500 rounded-full"} `}  alt="cake-image"/>
            <h4 className="mt-5 text-center text-sm md:text-2xl xl:text-3xl">Cake</h4>
        </div>
        <div>
            <img src="assets\frontend_assets\menu_6.png"  onClick={()=>{setCategory("Pure Veg") ;filterfood("Pure Veg")}} className={`cursor-pointer ${categorySelected=="Pure Veg"&&"border border-5 border-red-500 rounded-full"} `}  alt="pure-veg-image"/>
            <h4 className="mt-5 text-center text-sm md:text-2xl xl:text-3xl">Pure Veg</h4>
        </div>
        <div>
            <img src="assets\frontend_assets\menu_7.png" onClick={()=>{setCategory("Pasta") ;filterfood("Pasta")}} className={`cursor-pointer ${categorySelected=="Pasta"&&"border border-5 border-red-500 rounded-full"} `}  alt="pasta-image"/>
            <h4 className="mt-5 text-center text-sm md:text-2xl xl:text-3xl">Pasta</h4>
        </div>
        <div>
            <img src="assets\frontend_assets\menu_8.png" onClick={()=>{setCategory("Noodles") ;filterfood("Noodles")}} className={`cursor-pointer ${categorySelected=="Noodles"&&"border border-5 border-red-500 rounded-full"} `}  alt="noodles-image"/>
            <h4 className="mt-5 text-center text-sm md:text-2xl xl:text-3xl">Noodles</h4>
        </div>

     </div>
     <h2 className="font-bold  mx-4 sm:mx-10 lg:mx-20 xl:mx-40 text-xl md:text-2xl xl:text-3xl mt-5 md:mt-10">Top dishes near you</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4  gap-3 mx-4  sm:mx-10 lg:mx-20 xl:mx-40">
        {
            filteredFoodList.map((ele,index)=>{
                return(
                    <FoodView food={ele} key={index}/>
                )
            })
        }

      </div>

     <div className='flex flex-col items-center  mx-4 sm:mx-10 lg:mx-20 xl:mx-40'>
     <h1 className=' font-bold text-lg md:text-2xl xl:text-3xl mt-5 md:mt-10 '>For Better Experience Download Tomato App </h1>
      <div className='flex  flex-wrap justify-center gap-5 mt-10'>
      <img  className='cursor-pointer' src='assets\frontend_assets\play_store.png'  alt='play-store-icone'/>
      <img  className='cursor-pointer' src='assets\frontend_assets\app_store.png'  alt='app-store-icone'/>    
      </div>

     </div>


    </>
  )
}

export default Home