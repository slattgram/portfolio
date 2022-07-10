import React from "react";
import ProjectPreview from "./ProjectPreview";

const ProjectsTab = () => {
    return(
        <div className={'px-24 pt-20 pb-7 bg-white mx-auto mt-16 max-w-desktop rounded-2xl'}>
            <h2 className={'text-h2 font-semibold mb-10'}>Projects</h2>
            <div className={'flex flex-wrap flex-col overflow-x-hidden h-[19rem]'}>
                <div className={'w-[14.5rem] h-[19rem] bg-[#C2CFD6] rounded-2xl'}></div>
                <div className={'w-[14.5rem] h-[19rem] bg-[#C2CFD6] rounded-2xl ml-9'}></div>
                <div className={'w-[14.5rem] h-[19rem] bg-[#C2CFD6] rounded-2xl ml-9'}></div>
                <div className={'w-[14.5rem] h-[19rem] bg-[#C2CFD6] rounded-2xl ml-9'}></div>
            </div>
            <div className={'mt-7 text-center text-dark-grey'}>
                It is pretty empty here right now:D Check back later for updates
            </div>
        </div>
    )
}

export default ProjectsTab