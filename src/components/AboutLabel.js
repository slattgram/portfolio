import React from "react";

const AboutLabel = ({label, text}) => {
    return(
        <div className={' border px-x-offset py-regular rounded-[10px] grow w-full mt-5'}>
            <div className={'font-semibold text-base '}>{label}</div>
            <div className={'mt-2.5 text-base'}>{text}</div>
        </div>
    )
}

export default AboutLabel