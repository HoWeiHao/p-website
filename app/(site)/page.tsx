import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();

  return (
    <section>
      <div className="bg-gray-100 p-1 grid grid-cols-2 gap-3 justify-items-center items-center py-30 px-40">
        <span className="pl-10">
          <h1 className="text-6xl font-bold">Hey there, 
            <br></br>
              I&apos;m
            <br></br>
          </h1>
          <h1>
            <span className="text-7xl font-extrabold text-blue-700"> Wei Hao</span>
          </h1>
        </span>
        <span className="pt-5 items-left">
          <Image 
            src='/Images/Photo3.png'
            alt='A photo of me.'
            width={500}
            height={300}
            className="rounded-lg items-center"
            />
        </span>
      </div>

      <div className="items-center justify-between py-5 px-40">
        <h2 className="mt-12 mb-3 text-3xl text-gray-900 font-bold">
          Welcome to My Page
            <span className="text-blue-700">
              !
            </span>
        </h2>
      
        <p className="mt-3 text-gray-900" style={{ fontSize: 15 }}>
          I am a Year 2 Electrical Engineering student studying at the National University of Singapore who is eager to take on new experiences and learn new things. I also have a Second Major in Innovation and Design.
        </p>

        <p className="mt-3 text-gray-900" style={{ fontSize: 15 }}>
          I had the opportunity to take on an internship at ST Engineering Land Defence Systems. This opportunity had me draft up both mechanical and electrical plans from scratch to meet the design requirements of my supervisor. This ground-up approach forced me to research topics that I was not familiar with before, thereby pushing me to learn beyond the classroom. I also cross-checked components to make sure they were compatible and order them to assemble together. From this experience, I have gained a new interest in robotics and electronics. 
        </p>

        <p className="mt-3 text-gray-900" style={{ fontSize: 15 }}>
          I experienced multiple leadership opportunities, the most impactful involved me leading my fellow National Servicemen despite not being a Sergeant during tasks and operations. In order to ensure my peers are kept updated on our protocols and knowledge, I organized routine lessons to clarify any doubts they had personally. I also acted as the liaison between my superiors and my peers. For my hard work, I was awarded the rank of Sergeant and the Wall of Fame Award in November 2020.
        </p>

        <p className="mt-3 text-gray-900" style={{ fontSize: 15 }}>
          As of now, I am eagerly looking for opportunities to grow in my technical engineering skills as well as soft skills like leadership and public speaking.
        </p>
      </div>
    </section>

  )

}