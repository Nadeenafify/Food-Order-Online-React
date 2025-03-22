import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-between bg-zinc-700  px-4 sm:px-10 lg:px-10 xl:px-40'>

        <div className=' mt-10 mb-20 sm:w-[25vw] '>
          <h1 className=" text-4xl text-orange-500 font-bold ">Tomato.</h1>
          <p className='text-white mt-3 text-sm sm:text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.</p>
          <div className='flex mt-4 gap-3'>
            <img className='cursor-pointer' src='assets\frontend_assets\twitter_icon.png'  alt='twitter-icon'/>
            <img  className='cursor-pointer' src='assets\frontend_assets\facebook_icon.png'  alt='facebook-icon'/>
            <img  className='cursor-pointer'  src='assets\frontend_assets\linkedin_icon.png'  alt='linkedin-icon'/>

          </div>
        </div>
       
        <div className='mt-5 sm:mt-10 mb-20 '>
          <h1 className="text-2xl text-white font-bold ">GET-IN-TOUCH</h1>
          <div className='flex flex-col mt-4 gap-2 text-white'>
          <h1>+20(3847836673928)</h1>
          <h1>Contact@Tomato.com</h1>
         

          </div>
         
          
        </div>
       
      </div>


    </footer>
  )
}

export default Footer