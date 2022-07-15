import React from 'react'

const TopBar = ({homeRef, aboutRef, linksRef, contactRef}) =>{
    return(
        <div className='fixed left-0 right-0  hidden lg:flex justify-end py-4 px-8 rounded-2xl
                         max-w-desktop bg-black bg-opacity-75 backdrop-blur-md  mx-auto text-white text-base '>
            <div className={'cursor-pointer'}
                 onClick={()=>homeRef.current.scrollIntoView({block:'center'})}>Home</div>
            <div className={'cursor-pointer ml-8'}
                 onClick={()=>aboutRef.current.scrollIntoView({block:'center'})}>About</div>
            <div className={'cursor-pointer ml-8'}
                 onClick={()=>contactRef.current.scrollIntoView({block:'center'})}>Contact me</div>
            <div className={'cursor-pointer ml-8'}
                 onClick={()=>linksRef.current.scrollIntoView({block:'center'})}>Links</div>
        </div>
    )
}

export default TopBar