import React from "react";

const AboutLabel = ({label, text}) => {
    return(
        <div className={'max-w-fit'}>
            <div className={'font-semibold text-h3 '}>{label}</div>
            <div className={'mt-2.5 text-base'}>{text}</div>
        </div>
    )
}

export default AboutLabel