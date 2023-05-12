import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: { types: string };
}
  
export default async function Projects({ params }: Props) {
  const projects = await getProjects(params.types);
  

  return (
    <div className="items-center justify-between ">
      <h1 className="text-blue-700 text-5xl drop-shadow font-extrabold py-3"></h1>  

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link key={project._id} href={`${project.slug}`}  className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="py-5 mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  )
}