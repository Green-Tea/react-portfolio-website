import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pbams8b', 'template_q0jtrr6', form.current, '_pR3DyogP_52vtpWL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>sittingducks.lorenzo@gmail.com</h5>
                        <a href='mailto:sittingducks.lorenzo@gmail.com'>Email Me</a>
                    </article>
                    <article className='contact__option'>
                        <BsDiscord className='contact__option-icon' />
                        <h4>Discord</h4>
                        <h5>Seaweed#1828</h5>
                        <a href='https://discordapp.com/users/175950770775130112'>Add Me on Discord</a>
                    </article>
                    <article className='contact__option'>
                        <FaInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>@lorenzzo.c</h5>
                        <a href='https://instagram.com/lorenzzo.c'>Message Me on Instagram</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email Address' required />
                    <textarea name='message' rows='7' placeholder='Enter Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact