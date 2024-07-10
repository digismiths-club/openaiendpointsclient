import Image from 'next/image'
import Login from './Login'

function LoginWrapper() {
  return (
    <>
      <div className='bg-gray-200 h-screen flex justify-center items-center hero'>
        <div className='h-3/5 py-5 px-12 bg-white rounded-md flex items-center shadow-md justify-around w-3/6 space-x-4'>
          <Image src='/lock.jpg' alt="lock" height={400} width={320}/>
          <Login/>
        </div>
      </div>
    </>
  )
}

export default LoginWrapper
