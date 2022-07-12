import React from 'react'

const TopBar = () =>{
    return(
        <div className='hidden lg:flex justify-end py-4 px-8 rounded-2xl
                         mx-auto max-w-desktop bg-white text-black text-base'>
            <div className={''}>Home</div>
            <div className={'ml-8'}>About</div>
            <div className={'ml-8'}>Projects</div>
            <div className={'ml-8'}>Contact me</div>
        </div>
    )
}

export default TopBar