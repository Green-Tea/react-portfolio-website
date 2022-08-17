import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href='https://linkedin.com' target='__blank'><BsLinkedin size={20} /></a>
            <a href='https://github.com/Green-Tea' target='__blank'><FaGithubSquare size={23} /></a>
            <a href='https://instagram.com' target='__blank'><FaInstagramSquare size={23} /></a>
        </div>
    )
}

export default HeaderSocials