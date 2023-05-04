import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="items-center justify-between py-5 px-40">
      <h1 className="text-blue-700 text-5xl drop-shadow font-extrabold py-3">{page.title}</h1>
            <div className="px-20">
            <Image
              src={page.image}
              alt={page.title}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500 "
            />
            </div>
        
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.content}/>
        </div>
    </div>
  )
}