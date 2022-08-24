import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'

const data = [
    {
        id: 1,
        img: IMG1,
        title: 'Python IRC Bot',
        github: 'https://github.com/Green-Tea/f2-bot'
    },
    {
        id: 2,
        img: IMG2,
        title: 'Java Zork Game',
        github: 'https://github.com/Green-Tea/zork-assignment'
    },
    {
        id: 3,
        img: IMG4,
        title: 'Scala Stock Predictor',
        github: 'https://github.com/ThanthongFifa/FunPar-project'
    },
    {
        id: 4,
        img: IMG3,
        title: 'Space Estimator React Project',
        github: 'https://github.com/Green-Tea/Space-Estimator'
    },
    {
        id: 5,
        img: IMG5,
        title: 'React Portfolio Website',
        github: 'https://github.com/Green-Tea/react-portfolio-website'
    }

]

function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {
                    data.map(({ id, img, title, github }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={img} alt={title}></img>
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn'>Github</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio