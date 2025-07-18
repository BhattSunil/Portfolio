import React from 'react'
import java from "../../public/Images/java.png"
import mongodb from  "../../public/Images/mongodb.jpg"
import express from "../../public/Images/express.png"
import reactjs from  "../../public/Images/reactjs.png"
import nodejs from "../../public/Images/node.png"

function Portfolio() {
const cardItem=[
  {

    id:1,
    logo:mongodb,
    name:"MongoDB"
  },
  {

    id:2,
    logo:express,
    name:"Express"
  },
  {

    id:3,
    logo:reactjs,
    name:"ReactJS"
  },
  {

    id:4,
    logo:nodejs,
    name:"NodeJS"
  },

{

    id:5,
    logo:java,
    name:"Java"
  }

]

  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
      <div>
         <h1 className='text-3xl font-bold mb-5'> Portfolio</h1>
         <span className='underline font-semibold text-xl'>Featured Projects</span>
         <br />
         <br />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-5'>
          {
            cardItem.map(({id,logo,name})=>(
            <div
  className='md:w-[250px] md:h-[250px] rounded-lg border border-gray-300 shadow-md p-1 cursor-pointer hover:scale-110 duration-300 w-[200px] md:items-center ml-17  '
  key={id}
>


             <img src={logo} className='w-[100px] h-[100px] p-1 rounded-full border-[0.4px] ml-3 mt-2 ' alt="" />
             <div>
              <div className='font-bold text-xl mb-1  ml-4 mt-2'>{name}</div>
              <p className='px-2 text-gray-800'></p>
             </div>
             <div >
              <a href="https://github.com/BhattSunil">
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 mx-5 rounded md:justify-around md:ml-15  md:mt-8  '>Source Code</button>
              </a>
             </div>
              </div>
            )
            )
          }
         </div>
      </div>
    </div>
  )
}

export default Portfolio
