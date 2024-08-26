import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Rupsa Chakraborty</h1>
                <span className="home__education">I do Data Stuff</span>
                <HeaderSocials />

                {/* <a href="#" className="btn">
                    Hire Me
                </a> */}
                <ScrollDown />
            </div>
            <Shapes />
        </section>
    );
};

export default Home;