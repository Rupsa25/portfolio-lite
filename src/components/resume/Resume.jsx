import React from 'react';
import './Resume.css';
import Card from './Card';

const expData = [
    {
        id: 7,
        category: 'education',
        icon: 'icon-graduation',
        year: '2021-2023',
        title: 'Masters in Computer Science',
        desc: (
            <span>
                Rutgers University, New Brunswick
            </span>
        ),
    },
    {
        id: 8,
        category: 'education',
        icon: 'icon-graduation',
        year: '2015 - 2019',
        title: 'Bachelors of Technology in Computer Science and Engineering',
        desc: (
            <span>
                Vellore Institute of Technology, Chennai
            </span>
        ),
    },
    {
        id: 1,
        category: 'experience',
        icon: 'icon-briefcase',
        year: '2024 - Present',
        title: 'Analytics Engineer, Art Of Problem Solving',
        desc: (
            <span>
                Develop and maintain scalable and robust data pipelines to ensure efficient data extraction, transformation, and
                loading (ETL) processes,perform data analysis on large scale data using Python, SQL, and Dbt.
                Collaborate with cross-functional teams, including product managers, software developers, and educational specialists,
                to define data requirements and integrate analytics into user-friendly platforms like LightDash.
                <b>Stack:Python,SQL, Dbt,Lightdash,AWS.</b>
            </span>
        )
    },
    {
        id: 2,
        category: 'experience',
        icon: 'icon-briefcase',
        year: '2023 - 2023',
        title: 'Clinical Robot Associate, Diligent Robotics',
        desc: (
            <span>
                Troubleshoot and debug a clinical robot in a hospital environment,data collection, automated data extraction efforts using
                Airflow in combination with astro cli in order to streamline deployment, management of Airflow environments.
                <b>Stack:Python,SQL, Airflow.</b>
            </span>
        )
    },
    {
        id: 3,
        category: 'experience',
        icon: 'icon-briefcase',
        year: '2022 - 2022',
        title: 'Research Assistant, Rutgers University',
        desc: (
            <span>
                Implemented and replicated state-of-the-art Active Learning models for object detection on a custom dataset,
                mapping the dataset to meet model requirements and retraining the models to compare the performance of the
                novel pipeline against the baseline.
                <b>Stack:PyTorch,Linux.</b>
            </span>
        )
    },
    {
        id: 4,
        category: 'experience',
        icon: 'icon-briefcase',
        year: '2020 - 2021',
        title: 'Data Engineer, Phenom People',
        desc: (
            <span>
                Built data pipelines by developing ETL scripts using Python and SQL, scheduling using Apache Airflow in the HR tech space.
                <b>Stack: Python,SQL,Airflow,AWS
                    S3,IAM,Git.</b>
            </span>
        ),
    },
    {
        id: 5,
        category: 'experience',
        icon: 'icon-briefcase',
        year: ' 2019-2020',
        title: 'Data Analyst ,GVPL Technologies',
        desc: (
            <span>
                Spearheaded data analysis projects within GVPL Technologies.
                Devised data-driven staffing strategies to
                project costs, leveraging offshore technology support to scale department
                resources according to project requirements.
                <b>Stack: Python, SQL, Tableau, AWS, Git</b>
            </span >
        )
    },

];

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container grid">
                <div className="timeline grid">
                    {expData.map(
                        (exp, index) =>
                            exp.category === 'education' && (
                                <Card
                                    key={index}
                                    icon={exp.icon}
                                    title={exp.title}
                                    year={exp.year}
                                    desc={exp.desc}
                                />
                            )
                    )}
                </div>

                <div className="timeline grid">
                    {expData.map(
                        (exp, index) =>
                            exp.category === 'experience' && (
                                <Card
                                    key={index}
                                    icon={exp.icon}
                                    title={exp.title}
                                    year={exp.year}
                                    desc={exp.desc}
                                />
                            )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Resume;