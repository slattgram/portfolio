import React from "react";

const ProjectsTab = () => {
    return(
        <div className={'px-[15px] md:px-card-x-padding pt-20 pb-7 bg-white mx-auto mt-8 max-w-desktop sm:rounded-2xl'}>
            <h2 className={'text-h2 font-semibold mb-10'}>Projects</h2>
            <div className={'flex flex-wrap flex-col overflow-x-scroll h-[19rem] snap-x'}>
                <div className={'w-[14.5rem] h-[19rem] bg-[#C2CFD6] rounded-2xl snap-center'}></div>
                <div className={'w-[14.5rem] h-[19rem] bg-[#C2CFD6] rounded-2xl snap-center ml-9'}></div>
                <div className={'w-[14.5rem] h-[19rem] bg-[#C2CFD6] rounded-2xl snap-center ml-9'}></div>
                <div className={'w-[14.5rem] h-[19rem] bg-[#C2CFD6] rounded-2xl snap-center ml-9'}></div>
            </div>
            <div className={'mt-7 text-center text-dark-grey'}>
                It is pretty empty here right now:D Check back later for updates
            </div>
        </div>
    )
}

export default ProjectsTab