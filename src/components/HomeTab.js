import React  from 'react'
import welcomeFace from '.././photos/welcomeFace.svg'

const HomeTab = () => {
    return(
        <div className={'flex flex-row justify-between px-24 max-w-desktop bg-white mx-auto mt-8 rounded-2xl' +
                        ' py-72'}>
            <div className={'max-w-[23.125rem]'}>
                <div className={'font-semibold text-h1'}>Hello, I'm Dima</div>
                <div className={'text-h2 mt-2'}>Frontend developer</div>
                <div className={'text-h3 mt-4'}>I thrive to deliver high-quality software
                    and stay up-to-date  with latest tech</div>
                <button className={'text-base mt-6 py-3 px-[22px] bg-system-blue text-white rounded-lg'}>
                    Contact me
                </button>
            </div>
            <div className={'w-[16.25rem] h-[16.25rem] bg-gradient-to-br from-accent-green to-system-blue rounded-full'}>
                <img src={welcomeFace} alt="my-face"
                      className={'w-[15.625rem] h-[15.625rem]'}/>
            </div>
        </div>
        
    )
}

export default HomeTab