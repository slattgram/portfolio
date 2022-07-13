import {React, useState} from "react";

const Textarea = ({inputValue, inputHandler}) => {
    const [clicked, setClicked] = useState(false)

    const onFirstClick = () =>{
        if (!clicked) {
            inputHandler('')
            setClicked(true)
        }
    }
    const onBlankInput = () =>{
        if (inputValue == '' || inputValue == null) {
            inputHandler('Describe your request/problem')
        }
    }

    return(
        <textarea className={'w-full mt-4 border border-dark-grey rounded-[10px] ' +
            'px-4 pt-5 pb-1.5 text-base text-black outline-0 resize-none'}
                  value={inputValue} onChange={(e)=>{inputHandler(e.target.value)}}
                  rows={8} onClick={()=>onFirstClick()} onBlur={()=>{onBlankInput()}}>
            </textarea>
    )
}

export default Textarea
