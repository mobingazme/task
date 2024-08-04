'use client'
import React from 'react'

function SignupButton() {

  const signupHandler =()=>{
    console.log('signupHandler')
  }

  return (
    <div>
        <button onClick={signupHandler} className='text-white duration-700 text-sm font-bold w-full h-9 mt-10 rounded-md shadow-md hover:text-brightYellow hover:bg-white animate__animated animate__flash  animate__delay-4s bg-brightYellow'>Sign Un</button>
    </div>
  )
}

export default SignupButton