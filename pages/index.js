import LinkMe from './components/LinkMe'
import Project from './components/Project'
import Description from './components/Description'
import Skills from './components/Skills'
import projects from '../data/data.json'
import Contact from './components/Contact'
import Image from 'next/image'
import profilePic from '../public/images/photo_profil.jpeg'
import Footer from './components/Footer'
import skills from '../data/skills.json'
import links from '../data/links.json'


export default function Home() {

  return (
    <div>
      <main className="bg-opacity-25 bg-gradient-to-r from-green-600 to-green-900 flex flex-col items-center justify-center w-screen flex- px-20 text-center">        
        <h1 className="text-4xl text-black font-bold md:text-6xl">
          Benjamin DUJARRIER
        </h1>

        {/* <Navbar /> */}

        <p className="m-3 text-xl text-white text-opacity-50 md:text-2xl">
          Commencez par lire ma description pour découvrir brièvement mon parcours.{' '}
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

        <div className="flex flex-wrap items-center justify-around w-screen p-4 md:w-full">
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

        <h1 id="projects" className="text-xl text-black font-bold m-5 md:text-3xl">Projets</h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl md:w-full">
          {
            projects.map((project)=> {
              return (
                <Project 
                  title={project.title}
                  description={project.description}
                  resum={project.resum}
                  label={project.label}
                  statut={project.statut}
                  slug={project.slug}
                />
              )
            }
            )
          }
        </div>

        <h1 id="skills" class="text-xl text-black font-bold m-5 md:text-3xl">Mes compétences</h1>
        <div className="flex flex-wrap items-stretch justify-around max-w-1xl mt-1 sm:w-full">
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
        
      <Footer />
    </div>
  )
}
