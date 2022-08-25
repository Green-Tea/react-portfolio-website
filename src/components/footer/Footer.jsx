import React from 'react'
import './footer.css'
import { BsDiscord } from 'react-icons/bs'
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <ul className='permalinks'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='discordapp.com/users/175950770775130112' target='__blank'><BsDiscord size={23} /></a>
                <a href='https://github.com/Green-Tea' target='__blank'><FaGithubSquare size={23} /></a>
                <a href='https://instagram.com/lorenzzo.c' target='__blank'><FaInstagramSquare size={23} /></a>
            </div>

            <small>
                <a href='https://www.freepik.com/vectors/connect-background'>Connect background vector created by rawpixel.com - www.freepik.com</a>
            </small>
        </footer>

    )
}

export default Footer