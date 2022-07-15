import React from 'react'
import AboutRow from "./AboutRow";
import AboutLabel from './AboutLabel'

const AboutTab = ({aboutRef}) => {
    return(
        <div className={'px-[15px] md:px-card-x-padding py-card-y-padding bg-white mx-auto mt-8 max-w-desktop sm:rounded-2xl '}
             ref={aboutRef}>
            <div className={'flex justify-between mb-10'}>
                <h2 className={'text-h2 font-semibold'}>About me</h2>
                <div className={'text-h3 text-system-blue my-auto'}><a href="">Download CV</a></div>
            </div>

            <div>
                <AboutRow>
                    <AboutLabel label={'Name'} text={'Dmytro Pokhnatiuk'}/>
                    <AboutLabel label={'Age'} text={'20'}/>
                    <AboutLabel label={'Location'} text={'Lviv, Ukraine'}/>
                </AboutRow>
                <AboutRow>
                    <AboutLabel label={'Education'} text={'Lviv NU (CS)'}/>
                    <AboutLabel label={'Email'} text={'outta.hoodz@gmail.com'}/>
                    <AboutLabel label={'Phone'} text={'+380732007811'}/>
                </AboutRow>
                <AboutRow>
                    <AboutLabel label={'Description'} text={'I’m Junior React.js developer. Currently I am a 3rd year student at Lviv National University, but I am open to work. I am passionate about delivering beautiful designs to life. I enjoy team work and focused on needs more than wants. That’s why I’d be delighted to join your team.'}/>
                </AboutRow>
                <AboutRow>
                    <AboutLabel label={'Languages'} text={'English (B2-C1)   Ukrainian (Native)'}/>
                </AboutRow>
                <AboutRow>
                    <AboutLabel label={'Skills'} text={'HTML · CSS · JS · React · Redux · Tailwind · Figma · Git'}/>
                </AboutRow>
            </div>


        </div>
    )
}

export default AboutTab