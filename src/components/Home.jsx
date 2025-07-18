import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import pic from '../../public/Images/photo.avif';
import photo from '../../public/Images/SB.jpg'

import { ReactTyped,Typed } from "react-typed";

function Home() {
  return (<> 
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
     <div className='flex flex-col md:flex-row'>
         <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2'>
         <span className='text-xl'>Welcome to My Feed</span>
         <div className='flex space-x-1 text-2xl md:text-4xl '>
             <h1>Hello, I'm a</h1>
         {/* <span className='text-red-700 font-bold'>Developer</span> */}
           <ReactTyped className='text-red-700 font-bold'          
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={50}
          loop={true}
        />
         </div>
         <br />
         <p className='text-sm md:text-md text-justify'>
I’m a passionate and detail-oriented developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy solving problems, learning new technologies, and creating projects that make an impact.

</p>
         <br />

         {/* Social Media Icons */}
                 <div className='flex flex-col md:flex-row items-center justify-between space-y-6  md:space-y-0  '>
                  
              <div className='space-y-2'>
                <h1 className='font-bold' >Available On</h1>
              <ul className='flex space-x-6'>
              <li className='text-2xl cursor-pointer ml-4'> 
                <a href="https://www.linkedin.com/in/sunil-bhatt-875416309/" target='_blank'><  FaLinkedin /></a></li> 
                {/* <li  className='text-2xl cursor-pointer'> <FaWhatsappSquare /> </li> */}
             <li className='text-2xl cursor-pointer' >  <a href="https://github.com/BhattSunil" target='_blank'>  <FaGithub /></a></li>
              </ul>
              </div>
              <div className='space-y-2'>

  <h1 className='font-bold'>Currently Learning</h1>
              <div className='flex space-x-6'>
             <SiMongodb className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[0.5px ]' />
             <SiExpress className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[0.5px ]' />
             <FaReact className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[0.5px ]' />
             <IoLogoNodejs className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[0.5px ]' />
             
              </div>

              </div>
                 </div>
         </div>


         {/* RIght Side */}
      <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 md:order-2'>
<img
  src={photo}
  alt=""
  className="
    rounded-full
    w-40 h-40
    ml-17
    mt-5
    mb-0
    md:w-[350px] md:h-[350px]
    object-cover
    object-top
    mx-auto
  "
/>


      
      </div>
     </div>
     
    </div>
    
    </>
  )
}

export default Home
