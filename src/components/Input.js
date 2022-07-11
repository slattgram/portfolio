import {React, useState} from "react";

const Input = ({inputValue, inputHandler, isEmail=false, isTextarea=false}) => {
    const [clicked, setClicked] = useState(false)


    const onFirstClick = () => {
        setClicked(true)
    }

    return(
        isTextarea ?
            <textarea className={'w-full mt-4 border border-dark-grey rounded-[10px] ' +
                'px-4 pt-5 pb-1.5 text-base text-black outline-0 resize-none'}
                      value={inputValue} onChange={(e)=>{inputHandler(e.target.value)}}
                rows={8}>
            </textarea>
        :
            <div className={'w-full h-16'}>
                <input type={isEmail ? "email" : "text"} className={' w-full mt-4 border border-dark-grey rounded-[10px] px-4 pt-5 pb-[0.3125rem] text-base text-black outline-0'}
                       value={inputValue} onChange={(e)=>{inputHandler(e.target.value)}}/>
                <div className={!clicked ? '-translate-y-9 translate-x-4' : '-translate-y-11 translate-x-4 text-xs text-dark-grey'}
                     onClick={()=>onFirstClick()}>{isEmail ? 'Your email' : 'Your name'}</div>
            </div>




    )
}

export default Input