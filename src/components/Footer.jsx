import React from 'react'
import { BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'

function Footer() {
  return (
    <>
      <br />
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <hr className="border-t border-gray-300 opacity-70  mx-auto" />
      </div>

      <div>
        <footer className='py-12'>
          <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex space-x-6'>
                <a href="https://www.linkedin.com/in/sunil-bhatt-875416309/" target='_blank'> <BsLinkedin  size={30} /></a> 
                       
                <a href="https://github.com/BhattSunil" target='_blank'>  <BsGithub size={30}/></a>
              </div>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center w-1/3 mx-auto'>
              <p className='md:text-l justify-center flex flex-wrap'>&copy; 2025 Sunil Bhatt. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
