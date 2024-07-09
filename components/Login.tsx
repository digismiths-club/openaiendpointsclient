import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

function Login() {
    const {push}= useRouter();
  return (
    <>
      <div className='flex flex-col h-4/5 w-2/5 space-y-10 justify-center'>
        <div className='text-3xl'>Welcome</div>
        <div className=' text-2xl'>Sign In </div>

        <div className='space-y-2 flex flex-col w-full'>
            <button className='bg-[#f12727] text-white py-2 text-sm rounded-[2rem] flex justify-center' onClick={()=>{
                push('/dashboard');
            }}>
                <div className='flex items-center w-3/6 space-x-6'>
                    <FaGoogle size={15}/>
                    <span>Google</span>
                </div>
            </button>
            <button className='bg-[#0075ff] text-white py-2 text-sm rounded-[2rem] flex justify-center' onClick={()=>{
                push('/dashboard');
            }}>
                <div className='flex items-center w-3/6 space-x-6'>
                    <FaFacebook size={15}/>
                    <span>Facebook</span>
                </div>
            </button>
        </div>
      </div>
    </>
  )
}

export default Login
