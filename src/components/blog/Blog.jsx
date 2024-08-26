import React from 'react';
import './Blog.css';
import Image1 from '../../assets/blog-1.svg';
import Image2 from '../../assets/blog-2.svg';
import Image3 from '../../assets/blog-3.svg';

const blogData = [
    {
        id: 1,
        category: 'Tutorial',
        title: 'Get started with Lamini: Finetune a BASIC QA model for free!',
        metaTag: '11 July, 2023',
        author: 'Rupsa',
        image: Image1,
        link: "https://medium.com/@rupsachakraborty2622/get-started-with-lamini-finetune-a-basic-qa-model-for-free-b26b9034d887"
    }
];

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                {blogData.map(({ id, category, title, metaTag, author, image, link }) => {
                    return (
                        <div className="blog__card" key={id}>
                            <a href={link}>
                                <span className="blog__category">{category}</span>
                            </a>
                            <div className="blog__thumb">
                                <a href={link}>
                                    <img src={image} className="blog__img" />
                                </a>
                            </div>
                            <div className="blog__details">
                                <h3 className="blog__title">{title}</h3>

                                <div className="blog__meta">
                                    <span>{metaTag}</span>
                                    <span className="blog__dot">.</span>
                                    <span>{author}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Blog;