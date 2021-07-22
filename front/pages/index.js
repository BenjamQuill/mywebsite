import Head from 'next/head'
import LinkMe from './components/LinkMe'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Description from './components/Description'
import Skills from './components/Skills'
import projects from '../../data/data.json'
import Contact from './components/Contact'
import Image from 'next/image'
import profilePic from '../public/images/photo_profil.jpeg'

const links = [
  {
    slug: "/me",
    title: "About me",
    description: "Find informations about me !"
  },
  {
    slug: "/projects",
    title: "Projects",
    description: "Find my projects !"
  },
  {
    slug: "/skills",
    title: "Skills",
    description: "Find my hard & soft skills"
  },
  {
    slug: "/contact",
    title: "Contact",
    description: "Contact me !"
  }
]

const skills = [
  {
      title: 'Technologies et langages de programmation',
      skills: [
          {
              title: 'Back-end',
              what: ['NodeJS', 'PostgreSQL', 'Sqitch', 'Javascript', 'Express']
          },
          {
              title: 'Front-end',
              what: ['HTML', 'CSS']
          },
          {
              title: 'Other',
              what: ['Javascript', 'Bootstrap', 'Tailwind']
          }
      ]
  },
  {
      title: 'Outils, méthodologie et gestion de projet',
      skills: [
          {
              title: 'Environnement de développement',
              what: ['Git', 'GitHub', 'Linux', 'Windows', 'Visual Studio Code', 'pgAdmin', 'Insomnia']
          },
          {
              title: 'Déploiement',
              what: ['Heroku', 'AWS']
          },
          {
              title: 'Gestion de projet',
              what: ['Méthodes Agile & Scrum', 'Trello']
          }
      ]
  }
]

export default function Home() {

  return (
    <div>

      <main className="bg-green-800 flex flex-col items-center justify-center w-full flex- px-20 text-center">
        <h1 className="text-6xl text-black-800 font-bold">
          Benjamin DUJARRIER
        </h1>

        {/* <Navbar /> */}

        <p className="m-3 text-3xl text-white text-opacity-50">
          Get started by reading my description{' '}
          {/* <code className="p-3 font-mono text-lg bg-green-100 rounded-md">
            pages/index.js
          </code> */}
        </p>
        <Image 
          class="inline object-contain w-16 h-16 m-2 rounded-full" 
          src={profilePic}
          width={150}
          height={150}
          alt="Picture of the author" />

        <div className="flex flex-wrap items-center justify-around max-w-8xl mt-6 sm:w-full">
          {
            links.map((link)=> {
              return (
                <LinkMe 
                  title={link.title}
                  slug={link.slug}
                  description={link.description}
                />
              )
            }
            )
          }
        </div>

        <Description />

        <h1 className="text-3xl text-black-700 font-bold mt-10">Projects</h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
          {
            projects.map((project)=> {
              return (
                <Project 
                  title={project.title}
                  description={project.description}
                  resum={project.resum}
                  label={project.label}
                />
              )
            }
            )
          }
        </div>

        <h1 className="text-3xl text-black-700 font-bold mt-10">My skills</h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-1 sm:w-full">
          {
            skills.map((skill)=> {
              return (
                <Skills 
                  title={skill.title}
                  skills={skill.skills}
                />
              )
            }
            )
          }
        </div>
        <Contact />

      </main>

      <footer className="bg-green-800 text-green-800 flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
