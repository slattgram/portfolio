import React from 'react'
import welcomeFace from '.././photos/welcomeFace.svg'
import CTAButton from "./CTAButton";


const HomeTab = () => {
    return(
        <div className={'flex flex-col-reverse lg:flex-row lg:justify-between  px-[15px]' +
                        ' sm:px-card-x-padding max-w-desktop bg-white mx-auto mt-8 sm:rounded-2xl' +
                        ' py-card-y-padding lg:py-72 tablet:flex-col-reverse'}>
            <div className={'max-w-[23.125rem] text-center lg:text-left mx-auto'}>
                <div className={'font-semibold text-h1'}>Hello, I'm Dima</div>
                <div className={'text-h2 mt-2'}>Frontend developer</div>
                <div className={'text-h3 mt-4'}>I thrive to deliver high-quality software
                    and stay up-to-date  with latest tech</div>
                <CTAButton text={'Contact me'}/>
            </div>
            <div className={'w-[16.25rem] h-[16.25rem] bg-gradient-to-br from-accent-green to-system-blue rounded-full mx-auto'}>
                <img src={welcomeFace} alt="my-face"
                      className={'w-[15.625rem] h-[15.625rem]'}/>
            </div>

        </div>
        
    )
}

export default HomeTab