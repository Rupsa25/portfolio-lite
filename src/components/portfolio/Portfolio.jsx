import React, { useState } from 'react';
import './Portfolio.css';
import lilac from '../../assets/lilac.jpg';
import musicmuse from '../../assets/f1.jpg';
import posImage from '../../assets/pos.jpg';
import attireAvenue from '../../assets/db.jpg';
import MDM from '../../assets/mdm.jpg';

const categories = {
    ETL: 'ETL',
    REC: 'RECOMMENDER',
    DATA: 'DATA ANALYSIS',
    WEB: 'WEB',
    DB: 'DATABASES'
};

const menuItem = [
    {
        id: 1,
        image: posImage,
        title: 'Retail Sales Project',
        category: categories.ETL,
        link: 'https://github.com/Rupsa25/RetailSalesProject',
    },
    {
        id: 2,
        image: lilac,
        title: 'Disney Plus Project',
        category: categories.REC,
        link: 'https://github.com/Rupsa25/DisneyPlus/tree/main',
    },
    {
        id: 3,
        image: musicmuse,
        title: 'Formula 1 Data Analysis',
        category: categories.DATA,
        link: 'https://github.com/Mu-me/Music-Muse',
    },
    ,
    {
        id: 4,
        image: attireAvenue,
        title: 'SQL Query Parser',
        category: categories.DB,
        link: 'https://github.com/faisyed/multi-db-query-parser',
    },
    {
        id: 5,
        image: MDM,
        title: 'Massive Data Mining',
        category: categories.REC,
        link: 'https://github.com/Rupsa25/MassiveDataMining',
    },

];

const Portfolio = () => {
    const [items, setItems] = useState(menuItem);

    const filterItems = (categoryItem) => {
        const UpdatedItems = menuItem.filter((curElm) => {
            return curElm.category === categoryItem;
        });

        setItems(UpdatedItems);
    };

    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Recent works</h2>
            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(menuItem)}>
                    Everything
                </span>
                <span
                    className="work__item"
                    onClick={() => filterItems(categories.ETL)}
                >
                    ETL
                </span>
                <span
                    className="work__item"
                    onClick={() => filterItems(categories.REC)}
                >
                    Recommender Systems
                </span>
                <span
                    className="work__item"
                    onClick={() => filterItems(categories.DATA)}
                >
                    Data Analysis
                </span>
                <span
                    className="work__item"
                    onClick={() => filterItems(categories.DB)}
                >
                    Databases
                </span>
            </div>

            <div className="work__container grid">
                {items.map((item) => {
                    const { id, image, title, category } = item;

                    return (
                        <div className="work__card fadeInUp" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt={title} className="work__img" />
                                <div className="work__mask"></div>
                            </div>
                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href={item.link} className="work__button" target="_blank">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;