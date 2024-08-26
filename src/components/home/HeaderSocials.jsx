import React from 'react';

const socialLinks = [
    {
        id: 1,
        icon: 'fa-brands fa-linkedin',
        link: 'https://www.linkedin.com/in/rupsa-chakraborty25/',
    },
    {
        id: 2,
        icon: 'fa-brands fa-github',
        link: 'https://github.com/Rupsa25',
    },
    {
        id: 3,
        icon: 'fa-solid fa-chart-simple',
        link: 'https://public.tableau.com/app/profile/rupsa.chakraborty6413/vizzes',
    },

];

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            {socialLinks.map((link) => (
                <a
                    key={link.id}
                    href={link.link}
                    className="home__social-link"
                    target="_blank"
                >
                    <i className={link.icon}></i>
                </a>
            ))}
        </div>
    );
};

export default HeaderSocials;