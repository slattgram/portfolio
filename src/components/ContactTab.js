import {React, useState} from 'react'
import Input from "./Input";
import CTAButton from "./CTAButton";

const ContactTab = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('Describe your request/problem ')

    return(
        <div className={'px-card-x-padding py-card-y-padding bg-white mx-auto mt-16 max-w-desktop rounded-2xl'}>
            <h2 className={'text-h2 font-semibold mb-6'}>Contact me</h2>
            <Input inputValue={name} inputHandler={(e) => setName(e)}/>
            <Input inputValue={email} inputHandler={(e) => setEmail(e)} isEmail={true}/>
            <Input inputValue={description} inputHandler={(e) => setDescription(e)} isTextarea={true}/>
            <CTAButton text={'Contact me'}/>
        </div>
    )
}

export default ContactTab