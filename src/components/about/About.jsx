import React from 'react';
import './About.css';
import logo from '../../assets/avatar-1.png';
import AboutBox from './AboutBox';

const skillsList = [
    {
        id: 1,
        name: 'Python',
        class: 'Language',
        number: '90%',
    },
    { id: 2, name: 'SQL', class: 'Language', number: '90%' },
    { id: 3, name: 'DBT', class: 'Tool', number: '90%' },
    { id: 4, name: 'ETL', class: 'Design', number: '90%' },
    { id: 5, name: 'AWS', class: 'Cloud', number: '70%' },
    { id: 6, name: 'Azure', class: 'Cloud', number: '90%' }
];

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={logo} alt="" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi! I'm Rupsa, and I’m currently working as an analytics engineer at an Ed-Tech company. I spend my
                            days turning raw data into meaningful insights that help shape decisions in areas like Marketing and Product.
                            With a solid background in data architecture, ETL processes, and big data technologies, I enjoy building and
                            maintaining data pipelines that keep everything running smoothly, ensuring that our data is both reliable and
                            accessible.
                        </p>
                        <a
                            href='https://github.com/Rupsa25/MassiveDataMining/blob/main/rupsa_chakraborty_resume_24.pdf'
                            download="resume"
                            className="btn"
                        >
                            Download CV
                        </a>
                    </div>

                    <div className="about__skills grid">
                        {skillsList.map((skill) => (
                            <div className="skills__data" key={skill.id}>
                                <div className="skills__titles">
                                    <h3 className="skills__name">{skill.name}</h3>
                                    <span className="skills__number">{skill.number}</span>
                                </div>

                                <div className="skills__bar">
                                    <span className={`skills__percentage ${skill.class}`}></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
};

export default About;