import React from 'react'
import { projects } from '../constants/index';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div className='max-w-5xl mx-auto sm:p-16 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
            <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>
                My <span className='text-blue-500 font-semibold drop-shadow'>Projects</span>
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>Hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor. Hodor hodor HODOR! Hodor. Hodor hodor! Hodor hodor. Hodor, hodor. Hodor. HODOR? HODOR hodor, hodor. Hodor! Hodor hodor. Hodor! Hodor hodor. Hodor? Hodor hodor! Hodor hodor HODOR! Hodor.
                    Hodor hodor. HODOR hodor, hodor. HODOR HODOR! HODOR? HODOR HODOR! HODOR HODOR! Hodor, hodor. Hodor. Hodor. HODOR HODOR! Hodor hodor! Hodor! Hodor hodor. Hodor hodor! Hodor? Hodor, hodor, hodor hodor. Hodor... Hodor hodor.
                </p>
            </div>

            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project, index) => (
                    <div className='lg:w-[400px] w-full' key={index}>
                        <div className='relative transition duration-250 perspective-500 w-12 h-12'>
                            <div className={`absolute inset-0 z-0 w-full h-full transition duration-250 transform-style-preserve-3d transform-origin-bottom-right rotate-15 will-change-transform shadow-2xl ${project.color}`} />
                            <div className='absolute inset-0 z-1 w-full h-full bg-white bg-opacity-20 backdrop-blur-md transition duration-250 transform-style-preserve-3d transform-origin-top-left overflow-hidden rounded-xl flex justify-center items-center'>
                                <img src={project.icon} alt="Project icon" className='w-1/2 h-1/2 object-contain ' />
                            </div>
                        </div>
                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
                            <p className='mt-2 text-slate-500'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-blue-600'
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <hr className='border-slate-200' />
        </div>
    )
}
