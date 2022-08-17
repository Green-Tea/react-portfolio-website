import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { BsArrowUpCircle } from 'react-icons/bs'

function Header() {
    return (
        <header>
            <div className='container header__container' id='home'>
                <h1>Lorenzo Cassio</h1>
                <h5 className='text-light'>Full-Stack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt='me' />
                </div>

                <a href='#home' className='scroll__up'><BsArrowUpCircle size={50} /></a>

            </div>
        </header>
    )
}

export default Header