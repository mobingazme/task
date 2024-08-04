import React from 'react'
import One from '../models/One'
import Two from '../models/Two'
import Three from '../models/three'



function HomePage() {
    return (
        <div className='w-full max-w-[1440px] h-screen bg-gray-100 p-10 shadow-xl flex flex-col justify-center items-center'>
            <One />
            <div className=' grid grid-cols-1 md:grid-cols-2  ' >
                <Two />
                <Three />
            </div>
        </div>
    )
}

export default HomePage
