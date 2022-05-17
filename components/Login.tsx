/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import {signIn, signOut} from "next-auth/react";
function Login() {
  return (
    <div className=' flex flex-col items-center space-y-20 pt-28'>
            <Image
      src="https://rb.gy/ikprfu"
      width={150}
      height={150}
      objectFit="contain"
      />
      <div>
            <button 
            onClick={()=> signIn()}
            className='relative inline-block text-lg group'>
    <span className="relative z-10 block px-5 py-3 overflow-hidden 
    font-medium leading-tight text-gray-800 transition-colors 
    duration-300 ease-out border-2 border-gray-900 rounded-lg 
    group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 
        rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all
         duration-300 origin-top-right -rotate-90 -translate-x-full 
         translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">Sign in with Google</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full 
    h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear
     bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" 
     data-rounded="rounded-lg">Sign in with Google</span>
            </button>
      </div>
      </div>
  );
}

export default Login
