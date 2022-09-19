import React from 'react'
import { LogoIcon } from '../icons/icons'

const Navbar = () => {
  return (
    <div className='h-[100px] flex items-center justify-center '>
        
            <div className='flex items-center gap-1 cursor-pointer'>
                <img className='h-[50px]' src="https://cdn-icons-png.flaticon.com/128/4964/4964796.png"/>
                <p>
                    <span className='text-4xl'>
                        Cryptoworld
                    </span>
                </p>
                <img className='h-[50px]' src="https://cdn-icons-png.flaticon.com/128/4964/4964796.png"/>
            </div>
      
    </div>
  )
}

export default Navbar