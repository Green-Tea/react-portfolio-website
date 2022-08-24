import React from 'react'
import { BsDiscord } from 'react-icons/bs'
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href='discordapp.com/users/175950770775130112' target='__blank'><BsDiscord size={23} /></a>
            <a href='https://github.com/Green-Tea' target='__blank'><FaGithubSquare size={23} /></a>
            <a href='https://instagram.com/lorenzzo.c' target='__blank'><FaInstagramSquare size={23} /></a>
        </div>
    )
}

export default HeaderSocials