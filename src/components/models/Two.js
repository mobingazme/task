import React from 'react'
import SignupButton from '../elements/SignupButton'
import 'animate.css';

function Two() {
  return (
    <div className='w-[300px] h-60  bg-cyan p-8 md:rounded-bl-xl animate__animated animate__backInLeft animate__delay-2s'>
        <h2 className='font-bold'>Monthly Subscription</h2>
       <div className='flex items-center my-3'>
       <span className='text-2xl font-bold'>$29</span>
       <h6 className='text-sm p-1 text-lightGray'>pre month</h6>
        </div> 
        <h4 className='text-lightGray text-sm'>Full access for less than $1 a day</h4>

        <SignupButton/>
    </div>
  )
}

export default Two