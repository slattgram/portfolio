import {React, useRef, useState} from "react";

const Input = ({inputValue, inputHandler, isEmail=false}) => {
    const [clicked, setClicked] = useState(false)
    const localInputRef = useRef(null)

    const onFirstClick = () => {
        setClicked(true)
        localInputRef.current.focus()
    }

    const onBlankInput = () => {
        if (inputValue == '' || inputValue == null){
            setClicked(false)
        }

    }

    return(

        <div className={'w-full h-16'} onBlur={() => onBlankInput()}>
            <input type={isEmail ? "email" : "text"} className={' w-full mt-4 border border-dark-grey rounded-[10px] px-4 pt-5 pb-[0.3125rem] text-base text-black outline-0'}
                   value={inputValue} onChange={(e)=>{inputHandler(e.target.value)}} onClick={()=>onFirstClick()} ref={localInputRef} />
            <div className={!clicked ? '-translate-y-9 translate-x-4 cursor-text text-dark-grey' : '-translate-y-11 translate-x-4 text-xs text-dark-grey'}
                 onClick={()=>onFirstClick()}>{isEmail ? 'Your email' : 'Your name'}</div>
        </div>




    )
}

export default Input