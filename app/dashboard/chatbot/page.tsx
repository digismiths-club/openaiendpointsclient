import React from 'react'
import { IoIosSend } from "react-icons/io";
import { SlDocs } from "react-icons/sl";
import { MdOutlineAttachFile } from "react-icons/md";

function page() {
  return (
    <div className='px-5 py-3 flex flex-col h-screen  space-y-3 items-center'>
      <div className='h-full w-full outline outline-1 outline-gray-400 p-4 overflow-y-scroll bg-gray-100 rounded-md flex justify-center items-center'>
        <div className='text-2xl text-gray-600'>Start Writing Something </div>
      </div>
      <div className='item w-full flex space-x-2 items-center py-1 px-2 outline outline-1 outline-gray-400 rounded-md'>
        <button className='bg-gray-100 p-3 rounded-lg hover:bg-gray-300'>
          <MdOutlineAttachFile size={18}/>
        </button>
        {/* <button className='bg-gray-100 p-5 rounded-lg hover:bg-gray-300'></button> */}
        <input type="text" className='w-full h-10 px-2 outline-none rounded-sm bg-gray-100 hover:bg-gray-200' placeholder='Start Typing...'/>
        <button className='bg-orange-500 hover:bg-orange-600 p-3 rounded-lg'>
          <IoIosSend size={20}/>
        </button>
      </div>
    </div>
  )
}

export default page
