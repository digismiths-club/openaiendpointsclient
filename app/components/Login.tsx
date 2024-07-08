import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

function Login() {
  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
      <div className='h-2/5 py-5 px-10 bg-white rounded-md flex flex-col items-center shadow-md justify-around w-1/5'>
        <div>Logo</div>
        <div className=' text-2xl'>Sign In </div>

        <div className='space-y-2 flex flex-col w-full'>
          <button className='bg-[#f12727] text-white py-2 text-sm rounded-[2rem] flex justify-center'>
            <div className='flex items-center w-3/6 space-x-6'>
              <FaGoogle size={15}/>
              <span>Google</span>
            </div>
          </button>
          <button className='bg-[#0075ff] text-white py-2 text-sm rounded-[2rem] flex justify-center'>
            <div className='flex items-center w-3/6 space-x-6'>
              <FaFacebook size={15}/>
              <span>Facebook</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
