import React from "react";
import {FaGithub, FaInstagram, FaLinkedin, FaSpotify} from "react-icons/fa";

const Footer = ({linksRef}) => {
    return(

        <div className={'flex justify-end sm:justify-between py-4 px-8 md:rounded-2xl align-middle mt-8 ' +
            '            max-w-desktop bg-black bg-opacity-75 backdrop-blur-md  mx-auto text-white text-base '}>
            <div className={"hidden sm:block"}>Dmytro Pokhnatiuk's portfolio</div>
            <div className={'flex gap-4'}>
                <a href="https://www.linkedin.com/in/dmytro-pokhnatiuk/"  rel="noreferrer"><FaLinkedin size={24}/></a>
                <a href="https://github.com/slattgram" target={'_blank'} rel="noreferrer"><FaGithub size={24}/></a>
                <a href="https://www.instagram.com/dmytropokhnatiuk" target={'_blank'} rel="noreferrer"><FaInstagram size={24}/></a>
                <a href="https://open.spotify.com/playlist/0Yh7sgK2IObPe4q1nVtKs7" target={'_blank'} rel="noreferrer"><FaSpotify size={24}/></a>
            </div>
        </div>
    )
}

export default Footer