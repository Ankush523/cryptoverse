import React from 'react'
import { LogoIcon } from '../icons/icons'

const Navbar = () => {
  return (
    <div className='h-[100px] flex items-center justify-center '>
        
            <div className='flex items-center gap-1 cursor-pointer'>
                <LogoIcon/>
                <p>
                    <span className='text-4xl'>
                        Cryptoworld
                    </span>
                </p>
            </div>
      
    </div>
  )
}

export default Navbar