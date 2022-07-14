import React from 'react'

const TopBar = () =>{
    return(
        <div className='fixed left-0 right-0  hidden lg:flex justify-end py-4 px-8 rounded-2xl
                         max-w-desktop bg-black bg-opacity-75 backdrop-blur-md  mx-auto text-white text-base '>
            <div className={''}>Home</div>
            <div className={'ml-8'}>About</div>
            <div className={'ml-8'}>Projects</div>
            <div className={'ml-8'}>Contact me</div>
        </div>
    )
}

export default TopBar