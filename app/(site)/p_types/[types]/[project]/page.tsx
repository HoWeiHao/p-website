import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import  urlFor  from '@sanity/image-url';
import Image from "next/image"

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const project = await getProject(params.project);

  return (
    <div>
      <h1 className="py-5 px-40 text-blue-700">{project.name}</h1>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image src={project.image} width={600} height={300} alt={project.name} className="justify-content mt-10 border-2 border-gray-700 object-cover rounded-xl" />
      </div>
      <div className="py-5 px-40 mx-20 text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
    </div>
  );
}
