import Head from 'next/head'
import LinkMe from './components/LinkMe'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Description from './components/Description'

const links = [
  {
    slug: "/me",
    title: "Description",
    description: "Find informations about me !"
  },
  {
    slug: "/projects",
    title: "Projects",
    description: "Find my projects !"
  },
  {
    slug: "/contact",
    title: "Contact",
    description: "Contact me !"
  }
]

import projects from '../../data/data.json'

export default function Home() {
  return (
    <div>

      <main className="bg-gray-600 flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Benjamin DUJARRIER
        </h1>

        {/* <Navbar /> */}

        <p className="mt-3 text-2xl">
          Get started by reading my description{' '}
          {/* <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code> */}
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
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

        <h1 className="text-2xl font-bold m-5">Projects</h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
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

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
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
