import React from 'react'
import { skills, workExperience } from '../constants/index'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function About() {
  return (
    <div className='max-w-5xl mx-auto sm:p-16 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
      <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>
        Hello, I'm <span className='text-blue-500 font-semibold drop-shadow'>Jordan</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I am a software developer with two years of experience using web-based technologies to design and develop systems for business solutions.
          I love diving into new technologies and using them to address real-world challenges.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='font-semibold sm:text-3xl relative font-poppins'>My Skills</h3>
      </div>

      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill, index) => (
          <div key={index} className='relative transition-transform w-20 h-20'>
            <div className='rounded-xl flex justify-center items-center relative overflow-hidden transition-transform duration-300 transform hover:scale-125'>
              <img
                className='w-1/2 h-1/2 object-contain'
                src={skill.imageUrl}
                alt={skill.name}
              />
            </div>
          </div>
        ))}
      </div>

      <div className='py-16'>
        <h3 className='font-semibold sm:text-3xl relative font-poppins'>Work Experience</h3>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {workExperience.map((work, index) => (
              <VerticalTimelineElement
                key={index}
                className='vertical-timeline-element--work'
                iconStyle={{
                  background: work.color
                }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={work.date}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  boxShadow: 'none',
                  borderBottomColor: work.color
                }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img className='w-[60%] h-[60%] object-contain' src={work.icon} alt={work.companyName} />
                  </div>
                }
              >
                <h3 className='vertical-timeline-element-title'>{work.title}</h3>
                <h4 className='vertical-timeline-element-subtitle'>{work.companyName}</h4>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {work.responsibilities.map((responsibility, index) => (
                    <li key={index} className='text-black/50 font-normal pl-1 text-sm'>{responsibility}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

      </div>

    </div>
  )
}
