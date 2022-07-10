import {React, useState} from 'react'
import Input from "./Input";

const ContactTab = () => {
    const [name, setName] = useState('')


    return(
        <div className={'px-24 py-20 bg-white mx-auto mt-16 max-w-desktop rounded-2xl'}>
            <h2 className={'text-h2 font-semibold'}>Contact me</h2>
            <Input />
        </div>
    )
}

export default ContactTab