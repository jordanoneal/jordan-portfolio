import everlights from '../assets/icons/everlights.png';
import myriad from '../assets/icons/myriad.png';

import docker from '../assets/icons/docker.png';
import postgresql from '../assets/icons/postgresql.png';
import tailwind from '../assets/icons/tailwind.png';
import typescript from '../assets/icons/typescript.png';
import react from '../assets/icons/react.png';
import javascript from '../assets/icons/javascript.png';
import git from '../assets/icons/git.png';
import nodejs from '../assets/icons/nodejs.png';
import expressjs from '../assets/icons/expressjs.png';
import css from '../assets/icons/css.png';
import html from '../assets/icons/html.png';
import webpack from '../assets/icons/webpack.png';

import social from '../assets/icons/social.png';
import wave from '../assets/icons/wave.png';



export const skills = [
    {
        name: "PostgreSQL",
        type: "Backend",
        imageUrl: postgresql,
    },
    {
        name: "Tailwind",
        type: "Frontend",
        imageUrl: tailwind,
    },
    {
        name: "TypeScript",
        type: "Frontend",
        imageUrl: typescript,
    },
    {
        name: "React",
        type: "Frontend",
        imageUrl: react,
    },
    {
        name: "JavaScript",
        type: "Frontend",
        imageUrl: javascript,
    },
    {
        name: "Git",
        type: "Version Control",
        imageUrl: git,
    },
    {
        name: "NodeJS",
        type: "Backend",
        imageUrl: nodejs,
    },
    {
        name: 'ExpressJS',
        type: 'Backend',
        imageUrl: expressjs,
    },
    {
        name: 'CSS',
        type: 'Frontend',
        imageUrl: css,
    },
    {
        name: 'HTML',
        type: 'Frontend',
        imageUrl: html,
    },
    {
        name: 'Docker',
        type: 'DevOps',
        imageUrl: docker,
    },
    {
        name: 'Webpack',
        type: 'Module Bundler',
        imageUrl: webpack,
    }
];

export const workExperience = [
    {
        title: 'Software Engineer',
        companyName: 'EverLights',
        icon: everlights,
        date: "Dec 2020 - Present",
        responsibilities: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        color: 'rgb(22,109,255)'
    },
    {
        title: 'Reimbursement Specialist',
        companyName: 'Myriad Genetics',
        icon: myriad,
        date: "Aug 2016 - Dec 2020",
        responsibilities: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        color: '#3dae2b'
    }
];

export const projects = [
    {
        name: 'Swell Dwell',
        description: 'Explore weather data with Swell Dwell. Visualize detailed information such as water temperature, wind speed, wave height, and swell period in a convenient table format. Simply click on any location on the map to view its weather data.',
        link: 'https://swell-dwell.onrender.com/',
        icon: wave,
        color: ''
    },
    {
        name: 'WePost',
        description: 'A social platform that allows users to create and share posts documenting incidents related to law enforcement. Using an Upvote/Downvote model, all users can participate in incident verification. Share, engage, and contribute to a community-driven effort aimed at raising awareness and promoting positive change in law enforcement practices.',
        link: '',
        icon: social,
        color: ''
    }
]