import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();

  return (
    <section>
      <div className=" border-2 border-gray-500 rounded-lg p-1 mt-5 grid grid-cols-2 gap-6 justify-items-center items-center">
        <span className="py-30">
          <h1 className="text-6xl font-extrabold">Hey there, 
            <br></br>
              I&apos;m
            <br></br>
          </h1>
          <h1>
            <span className="text-7xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> Wei Hao</span>
          </h1>
        </span>
        <span>
          <Image 
            src='/Images/Photo1.jpg'
            alt='A photo of me.'
            width={250}
            height={50}
            className="rounded-lg items-center"
            />
        </span>
      </div>

      <div>
        <h2 className="mt-12 mb-3 text-2xl text-gray-600 underlined">Welcome to my page!</h2>
      
        <p className="mt-3 text-gray-700 text-0.1xl px=30" style={{ fontSize: 15 }}>
          I am a Year 2 Electrical Engineering student studying at the National University of Singapore who is eager to take on new experiences and learn new things. I also have a Second Major in Innovation and Design.
        </p>

        <p className="mt-3 text-gray-700 text-0.1xl px=30" style={{ fontSize: 15 }}>
          I had the opportunity to take on an internship at ST Engineering Land Defence Systems. This opportunity had me draft up both mechanical and electrical plans from scratch to meet the design requirements of my supervisor. This ground-up approach forced me to research topics that I was not familiar with before, thereby pushing me to learn beyond the classroom. I also cross-checked components to make sure they were compatible and order them to assemble together. From this experience, I have gained a new interest in robotics and electronics. 
        </p>

        <p className="mt-3 text-gray-700 text-0.1xl px=30" style={{ fontSize: 15 }}>
          I experienced multiple leadership opportunities, the most impactful involved me leading my fellow National Servicemen despite not being a Sergeant during tasks and operations. In order to ensure my peers are kept updated on our protocols and knowledge, I organized routine lessons to clarify any doubts they had personally. I also acted as the liaison between my superiors and my peers. For my hard work, I was awarded the rank of Sergeant and the Wall of Fame Award in November 2020.
        </p>

        <p className="mt-3 text-gray-700 text-0.1xl px=30" style={{ fontSize: 15 }}>
          As of now, I am eagerly looking for opportunities to grow in my technical engineering skills as well as soft skills like leadership and public speaking.
        </p>
      </div>
    </section>

  )

}