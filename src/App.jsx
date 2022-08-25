import React from 'react'
import { HideOn } from 'react-hide-on-scroll'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
    return (
        <>
            <HideOn className='hide' atHeight height={3500}>
                <Nav />
            </HideOn>
            <Header />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </>

    )
}

export default App