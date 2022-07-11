import React from 'react'
import AboutRow from "./AboutRow";

const AboutTab = () => {
    return(
        <div className={'px-[15px] md:px-card-x-padding py-card-y-padding bg-white mx-auto mt-16 max-w-desktop rounded-2xl '}>
            <div className={'flex justify-between mb-10'}>
                <h2 className={'text-h2 font-semibold'}>About me</h2>
                <div className={'text-h3 text-system-blue my-auto'}><a href="">Download CV</a></div>
            </div>

            <div>
                <AboutRow items={[{label:'Name',text:'Dmytro Pokhnatiuk'}, {label:'Age',text:'20'}, {label:'Location',text:'Lviv, Ukraine'}]}/>
                <AboutRow items={[{label:'Education',text:'Lviv NU (CS)'}, {label:'Phone',text:'+380732007811'}, {label:'Email',text:'outta.hoodz@gmail.com'}]}/>
                <AboutRow items={[{label:'Description',text:'I’m Junior React.js developer. Currently I am a 3rd year student at Lviv National University, but I am open to work. I am passionate about delivering beautiful designs to life. I enjoy team work and focused on needs more than wants. That’s why I’d be delighted to join your team.'}]}/>
                <AboutRow items={[{label:'Languages', text:'English (B2-C1)   Ukrainian (Native)'}]}/>
            </div>


        </div>
    )
}

export default AboutTab