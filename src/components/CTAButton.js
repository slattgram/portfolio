import React from 'react'

const CTAButton = ({text}) => {
    return(
        <button className={'text-base mt-6 py-3 px-[22px] bg-system-blue text-white rounded-lg'}>
            {text}
        </button>
    )
}

export default CTAButton