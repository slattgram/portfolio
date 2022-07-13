import React from "react";

const AboutRow = ({children}) => {
    return (
        <div className={'sm:flex sm:justify-between sm:gap-4'}>
            {children}
        </div>
    )
}
export default AboutRow