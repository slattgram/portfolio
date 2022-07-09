import React from "react";
import AboutLabel from "./AboutLabel";

const AboutRow = ({items}) => {
    const labelMapping = items.map((element) => <AboutLabel label={element.label} text={element.text}/>)
    return (
        <div className={'flex justify-between px-x-offset py-regular border-2 rounded-[10px] mt-2.5'}>
            {labelMapping}
        </div>
    )
}
export default AboutRow