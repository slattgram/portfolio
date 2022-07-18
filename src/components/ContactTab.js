import {React, useState} from 'react'
import Input from "./Input";
import Textarea from "./Textarea";
import {sendNewEmail} from "../firebase/config";
import {res, validate} from "react-email-validator";


const ContactTab = ({contactRef}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('Describe your request/problem')

    const onSubmitForm = () => {
        validate(email)
        if (res){
            sendNewEmail(name,description,email)
        }else{
            console.log('incorrect')
        }
    }

    return(
        <div className={'px-[15px] md:px-card-x-padding py-card-y-padding bg-white mx-auto mt-8 max-w-desktop md:rounded-2xl'}
             ref={contactRef}>
            <h2 className={'text-h2 font-semibold mb-6'} >Contact me</h2>
            <Input inputValue={name} inputHandler={(e) => setName(e)}/>
            <Input inputValue={email} inputHandler={(e) => setEmail(e)} isEmail={true}/>
            <Textarea inputValue={description} inputHandler={e => setDescription(e)}/>
            <button className={'text-base mt-6 py-3 px-[22px] bg-system-blue text-white rounded-lg'}
                    onClick={()=>{onSubmitForm()}}>
                Contact me
            </button>
        </div>
    )
}

export default ContactTab