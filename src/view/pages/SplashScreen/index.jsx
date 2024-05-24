import React from 'react'

const SplashScreen = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center bg-black text-white'>
      <img id="logo" src="/logo.png" alt="animation" width={120} />
      <p className='text-sm'>“Building apps that redefine possibilities”</p>
    </div>
  )
}

export default SplashScreen
