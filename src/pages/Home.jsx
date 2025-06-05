import React from 'react'

function Home() {
    return (
        <div className='flex flex-col w-[500px] items-center'>
            <div className='flex items-center gap-4 mb-6'>
                <img className='w-20 rounded-lg' src='https://sunhaven.wiki.gg/images/d/d6/Achivement_Dungeoneer3.jpg?fdec0b' alt='Sun Haven Logo' />
                <p className='font-bold text-2xl'>sunha.app</p>
            </div>
            <p className='text-center font-semibold text-lg'>Welcome to sunha.app, the app companion that will help you while playing the greatest game ever Sun Haven!</p>
        </div>
    )
}

export default Home