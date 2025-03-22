import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { FaList } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
const Header = () => {

 //selected element in navbar
  const [selected, setSelected] = useState("home")
  //AUth0 for Authenication
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  //if screen on mobile use left window instead of navbar
  let [leftWindow, setLeftWindow] = useState(false)
  console.log(user?.name)

  return (
    <>

      <nav>
        <div className="flex mx-4 sm:mx-10 lg:mx-20 xl:mx-40 mt-10 justify-between">
          <h1 className="text-4xl text-orange-500 font-bold ">Tomato.</h1>

          <div className={` ${leftWindow == true ? "fixed h-[100vh] bg-orange-500 w-[40vw] flex flex-col gap-3 left-0 top-0 p-5 z-50" : "md:flex gap-3 lg:gap-7 ml-4 mt-5 xl:w-1/3  hidden"}`}>
            <IoIosCloseCircleOutline className={`md:hidden absolute right-5 text-xl cursor-pointer ${leftWindow == true && "text-white"}`} onClick={() => { setLeftWindow(false) }} />
            <Link to={"/"}><h2 className={`cursor-pointer ${selected == "home" && "underline underline-offset-4"} ${leftWindow == true && "text-white"}`} onClick={() => { setSelected("home") }}>Home</h2></Link>
            <Link to={'/dishes'}><h2 className={`cursor-pointer ${selected == "menue" && "underline underline-offset-4"} ${leftWindow == true && "text-white"}`} onClick={() => { setSelected("menue") }}>Dishes</h2></Link>
            <Link to={"/offers"}><h2 className={`cursor-pointer ${selected == "mobile" && "underline underline-offset-4"} ${leftWindow == true && "text-white"}`} onClick={() => { setSelected("mobile") }}>Offers</h2></Link>
            <Link to={"/contact"}><h2 className={`cursor-pointer ${selected == "contact" && "underline underline-offset-4"} ${leftWindow == true && "text-white"}`} onClick={() => { setSelected("contact") }}>Contact</h2></Link>


            <h2 onClick={() => loginWithRedirect()} className="md:hidden text-white  cursor-pointer" >{isAuthenticated ? user?.name : "Sign in"}</h2>

            {isAuthenticated && <h2 className='md:hidden text-white cursor-pointer' onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </h2>}

            {isAuthenticated && <Link to={"/cart"}><IoCartOutline className='text-white text-xl' /></Link>}
          </div>

          <FaList className='blobk md:hidden cursor-pointer' onClick={() => { setLeftWindow(true) }} />

          <div className={` gap-3 mt-5 xl:w-1/3 justify-end hidden md:flex`}>

            {isAuthenticated && <Link to={"/cart"}><img src="assets\frontend_assets\basket_icon.png" className="cursor-pointer" alt="cart-icon" onClick={() => { setSelected("cart") }} /></Link>}
            <button onClick={() => isAuthenticated == false && loginWithRedirect()} className="border rounded-xl px-4 cursor-pointer hidden md:block" >{isAuthenticated ? user?.name : "Sign in"}</button>

            {isAuthenticated && <button className='cursor-pointer hidden md:block' onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </button>}
          </div>

        </div>

      </nav>



    </>
  )
}

export default Header