import {React, useState} from 'react'
import Input from "./Input";
import Textarea from "./Textarea";
import CTAButton from "./CTAButton";

const ContactTab = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('Describe your request/problem')

    return(
        <div className={'px-[15px] md:px-card-x-padding py-card-y-padding bg-white mx-auto mt-8 max-w-desktop sm:rounded-2xl'}>
            <h2 className={'text-h2 font-semibold mb-6'}>Contact me</h2>
            <Input inputValue={name} inputHandler={(e) => setName(e)}/>
            <Input inputValue={email} inputHandler={(e) => setEmail(e)} isEmail={true}/>
            <Textarea inputValue={description} inputHandler={e=> setDescription(e)}/>
            <CTAButton text={'Contact me'}/>
        </div>
    )
}

export default ContactTab