import React, { useState } from 'react'
import pic from '../../public/Images/photo.avif';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

import { Link } from 'react-scroll';

function Navbar() {
const [menu,setMenu]=useState(false)
const [bg,setbg] =useState(true)

const navItems =[

  {
id:1,
text:"Home"
  },

    {
id:2,
text:"About"
  }
,
    {
id:3,
text:"Portfolio"
  }
,
    {
id:4,
text:"Contact"
  }

]

  return (
    <div className='max-w-screen 2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-80 bg-white'>
      <div className='flex justify-between items-center h-16 '>
        <div className='flex space-x-2'>
          <img src={pic} className='h-12 w-12 rounded-full'  alt="Picture" />
          <h1 className='font-semibold text-xl cursor-pointer'>Suni<span className='text-green-500 text-2xl'>l</span>
          <p className='text-sm'>Web Developer</p></h1>
        </div>

        {/* Desktop Navbar */}

        <div className=''>
          <ul className='hidden md:flex space-x-8'>
           {
            navItems.map(({id,text})=>(
              <li className='hover:scale-110 cursor-pointer' key={id}> 
              <Link to={text}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass='active'
              >{text}</Link>
              </li>
            ))
           }
          </ul>
        <div className='md:hidden' onClick={()=>{
          setMenu(!menu)
        }}>
            {menu?<IoClose size={24}/>:<TiThMenu size={24}/>}
        </div>
        </div>
      </div>
      
        {/* //Mobile Navbar */}
      {
        menu &&( <div className='bg-white w-screen  '>
          <div className='md:hidden '>

          </div>

        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 font-bold text-xl'>
            {
              navItems.map(({id,text})=>(
                <li className='hover:scale-105 duration-200 cursor-pointer ' key={id}>
                
                 <Link to={text}
                 onClick={()=>{
          setMenu(!menu)
        
        }}
                 smooth='true'
                 duration={500}
                 offset={-70}
                 activeClass='active'
                 >  {text}</Link> 

                  
                  </li>

              ))
           

            }
        </ul>
      </div>)
      }
     
      
    </div>
  )
}

export default Navbar
