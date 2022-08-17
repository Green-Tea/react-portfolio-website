import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'
import { useState } from 'react'

function Nav() {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBriefcase /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlinePhone /></a>
        </nav>
    )
}

export default Nav