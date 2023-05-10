import { getP_types } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const p_types = await getP_types();
  console.log(p_types)
  

  return (
    <div className="items-center justify-between py-5 px-40">
      <div>
      <h1 className="text-blue-700 text-5xl drop-shadow font-extrabold py-3">Project Types</h1>
      <h2 className="mt-12 text-3xl text-gray-900 font-bold">
        Select a project type 
        <span className="text-blue-700">
          !
        </span>
      </h2>
      </div>

      <div>{p_types.map((p_type) => (
        <Link href={`/p_types/${p_type.slug}`} key={p_type._id} className="hover:scale-105 hover:border-blue-500 transition">
          <div className="bg-blue-100 p-1 grid grid-cols-2 gradient-from-center justify-items-center items-center my-5"> 
         
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {p_type.type}
            </h2>

            <span>
              {p_type.image && (
                <Image
                  src={p_type.image}
                  alt={p_type.name}
                  width={150}
                  height={30}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
            </span>
          
          </div>
        </Link>
      ))}
      </div>
    </div>
)}