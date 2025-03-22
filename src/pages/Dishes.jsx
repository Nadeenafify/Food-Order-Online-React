import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dishes } from '../../public/assets/frontend_assets/dishes';
import { useState } from 'react';
import FoodView from '../components/FoodView';
const Dishes = () => {



    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
    //slected type of food to filter
    const [categorySelected, setCategory] = useState("all")
    //dishes to show
    const [dishesFiltered,setDishesFiltered]=useState([...dishes])
 

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    backgroundColor: "rgba(170, 189, 189, 0.96)",
                    borderRadius: "10px",
                    right: windowWidth < 600 ? "0" : null,
                    zIndex: "10",

                }}
                onClick={onClick}
            />
        );
    }
    //function of prevarrow of react slider
    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    backgroundColor: "rgba(170, 189, 189, 0.96)",
                    borderRadius: "10px",
                    left: windowWidth < 600 ? "0" : null,
                    zIndex: "10",

                }}
                onClick={onClick}
            >hi</div>
        );
    }


    useEffect(() => {
        let filtered = dishes.filter((ele) => {
            return ele.category === categorySelected;
        });
    
        categorySelected !== "all" ? setDishesFiltered(filtered) : setDishesFiltered([...dishes]);
    }, [categorySelected, dishes]); 
    
    // -----------------------------------------------------------------------------------------------------
    //react slider responsiveess
    const settings = {
        dots: false,
        arrows: true,
        onInit: () => {
            // Use JavaScript to target slick arrow and style it
            const arrows = document.querySelectorAll('.slick-prev:before, .slick-next:before');
            arrows.forEach((arrow) => {
                arrow.style.color = 'red'; // Direct styling using JavaScript
            });
        },
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                   
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <div className=' px-4 sm:px-10 lg:px-10 xl:px-25 mt-10'>
            <h1 className='font-bold text-3xl mx-4 sm:mx-10 lg:mx-20 xl:mx-25'>Discover Top Dishes</h1>
            <div className="px-4 sm:px-10 lg:px-10 xl:px-23 mt-10 ">
                <Slider {...settings}>
                    <div className=' focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.G9F5tHSPIn908tmpLKw-ygHaE8?rs=1&pid=ImgDetMain" alt="all-foods"
                         onClick={()=>{

                            setCategory("all")
                        
                        }} 
                         
                         className={` w-full h-[15vh] cursor-pointer ${categorySelected=="all"&&"border border-8 border-red-500"}`} />
                        <h1 className='text-center text-sm mt-2'>All Dishes</h1>
                    </div>
                    <div className='px-2  focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.Yh22Gn16hfs6QfNuoTObzwHaHa?rs=1&pid=ImgDetMain" alt="Pizza" 
                        onClick={()=>{
                            setCategory("Pizza")

                           
                        
                        }}
                        
                        
                        className={`w-full h-[15vh]  cursor-pointer ${categorySelected=="Pizza"&&"border border-8 border-red-500"}`}/>
                        <h1 className=' text-sm mt-2 text-center'>Pizza</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.8zlrSv6agghwc6xtRPHiEgHaHa?rs=1&pid=ImgDetMain" alt="Burger" onClick={()=>{setCategory("Burger")}} className={`w-full h-[15vh]  cursor-pointer ${categorySelected=="Burger"&&"border border-8 border-red-500"}`}/>
                        <h1 className=' text-sm text-center mt-2'>Burger</h1>
                    </div >
                    <div className='px-2 focus:outline-none'>
                        <img src="https://s1.1zoom.me/big0/372/Meat_products_Shashlik_French_fries_White_521249_1280x866.jpg" alt="Iftar-Ramadan" onClick={()=>{setCategory("Iftar-Ramadan")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Iftar-Ramadan"&&"border border-8 border-red-500"}`}/>
                        <h1 className=' text-sm mt-2 text-center'>iftar ramadan</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.R_6IJMrgl2dNyN6CUeCYbAHaHa?rs=1&pid=ImgDetMain" alt="Helw-Ramadan" onClick={()=>{setCategory("Helw-Ramadan")}} className={`w-full h-[15vh]  cursor-pointer ${categorySelected=="Helw-Ramadan"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>helw ramadan</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.-x-J19p1EEKRSI4wzWsSeQHaHa?w=1960&h=1960&rs=1&pid=ImgDetMain" alt="Healthy-Food" onClick={()=>{setCategory("Healthy-Food")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Healthy-Food"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Healthy-Food</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.C8rEuf3Syyo5kJQOBlbX0gHaHa?rs=1&pid=ImgDetMain" alt="Koshary" onClick={()=>{setCategory("Koshary")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Koshary"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Koshary</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.I1P1PIp2qrPdtD9l6VckaQHaHa?rs=1&pid=ImgDetMain" alt="Grills" onClick={()=>{setCategory("Grills")}} className={`w-full h-[15vh]  cursor-pointer ${categorySelected=="Grills"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Grills</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.yuzr59OiaK7R1shGnx3ZsgHaE8?rs=1&pid=ImgDetMain" alt="Shawerma" onClick={()=>{setCategory("Shawerma")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Shawerma"&&"border border-8 border-red-500"}`} />
                        <h1 className='text-center text-sm mt-2'>Shawerma</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://img.freepik.com/premium-photo/isolated-strawberry-cupcake-white-background_1015665-6.jpg" alt="Desserts" onClick={()=>{setCategory("Desserts")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Desserts"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Desserts</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.bleJwarZF_DzpGsmjl8h0QHaE7?rs=1&pid=ImgDetMain" alt="Fried Chicken" onClick={()=>{setCategory("Fried Chicken")}} className={`w-full h-[15vh]  cursor-pointer ${categorySelected=="Fried Chicken"&&"border border-8 border-red-500"}`} />
                        <h1 className='text-center text-sm mt-2'>fried chicken</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.Z6biOnxHKtFB0iqMA5o1tAHaHa?rs=1&pid=ImgDetMain" alt="Pasta" onClick={()=>{setCategory("Pasta")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Pasta"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm'>Pasta</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://img.freepik.com/premium-photo/Crepes-white-background-generated-by-ai_985692-358.jpg?w=2000" alt="Crepe" onClick={()=>{setCategory("Crepe")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Crepe"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Crepe</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.ZUs0CIoDBLncpSg9T6uiEwHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain" alt="Chinese" onClick={()=>{setCategory("Chinese")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Chinese"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Chinese</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.hpqUyLrhX77XNzAKMV2ozAHaHa?rs=1&pid=ImgDetMain" alt="Tacos" onClick={()=>{setCategory("Tacos")}} className={`w-full h-[15vh]  cursor-pointer ${categorySelected=="Tacos"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Tacos</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.xZy4RCNeKODWiQdCBDIrkgHaE7?rs=1&pid=ImgDetMain" alt="Sushi" onClick={()=>{setCategory("Sushi")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Sushi"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Sushi</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.d3YhHzAOFZMLTFWLYGg1nQHaFk?rs=1&pid=ImgDetMain" alt="Sea Food" onClick={()=>{setCategory("Sea Food")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Sea Food"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>sea food</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.p68S7kZXvzgkjGXiW9x5hwHaHB?rs=1&pid=ImgDetMain" alt="Donates" onClick={()=>{setCategory("Donates")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Donates"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>dounts</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://static.vecteezy.com/system/resources/previews/027/679/809/large_2x/side-anglegraphy-of-delicious-noodles-in-white-background-photo.jpg" alt="Noodles" onClick={()=>{setCategory("Noodles")}} className={`w-full h-[15vh]  cursor-pointer ${categorySelected=="Noodles"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Noodles</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img  src="https://th.bing.com/th/id/OIP.3SbqugRWlqpvqGZf0Ku4NAHaHa?rs=1&pid=ImgDetMain" alt="coffe" onClick={()=>{setCategory("Coffee")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Coffee"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Coffee</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://img.freepik.com/premium-photo/pie-with-white-background-high-quality-ultra-hd_889056-8024.jpg" alt="Fateer" onClick={()=>{setCategory("Fateer")}} className={`w-full h-[15vh]  cursor-pointer ${categorySelected=="Fateer"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Fateer</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.cabayii5JTudFx8IVRzDSgHaEJ?rs=1&pid=ImgDetMain" alt="Salad" onClick={()=>{setCategory("Salad")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Salad"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Salad</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://static4.depositphotos.com/1001759/381/i/450/depositphotos_3817272-stock-photo-group-of-different-bread-products.jpg" alt="Bakeries" onClick={()=>{setCategory("Bakeries")}} className={`w-full h-[15vh]  cursor-pointer ${categorySelected=="Bakeries"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Bakeries</h1>
                    </div>
                    <div className='px-2 focus:outline-none'>
                        <img src="https://th.bing.com/th/id/OIP.3d0A6-XzHkBQlw8vVXObvQHaE7?rs=1&pid=ImgDetMain" alt="Pancake" onClick={()=>{setCategory("Pancake")}} className={`w-full h-[15vh] cursor-pointer ${categorySelected=="Pancake"&&"border border-8 border-red-500"}`}/>
                        <h1 className='text-center text-sm mt-2'>Pancake</h1>
                    </div>
                </Slider>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3   mt-5 md:mt-10 ml-4 sm:ml-10 lg:ml-20 xl:ml-25">
        {
            dishesFiltered.map((ele,index)=>{
                return(
                    <FoodView food={ele} key={index}/>
                )
            })
        }

      </div>


        </div>
    )
}

export default Dishes