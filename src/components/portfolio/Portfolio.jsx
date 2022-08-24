import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'

function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt='Python IRC Bot'></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/Green-Tea/f2-bot" className='btn'>Python IRC Bot</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt='Python IRC Bot'></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Green-Tea/zork-assignment' className='btn'>Java Zork Game</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt='Python IRC Bot'></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/Green-Tea/Space-Estimator' className='btn'>Space Estimator React Project</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt='Python IRC Bot'></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href='https://github.com/ThanthongFifa/FunPar-project' className='btn'>Scala Stock Predictor</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio