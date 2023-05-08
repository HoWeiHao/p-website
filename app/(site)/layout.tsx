import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';



export const metadata = {
  title: 'My Awesome Site',
  description: 'Generated by Next + Sanity',
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body>
        <div className="max-w-5x mx-auto">
        <header className="flex items-center justify-between bg-black-500 py-5 px-40">
          <Link href="/" className="text-blue-700 text-lg font-bold">Wei Hao</Link>
          <div className="flex items-center gap-5 text-sm">
            
            <Link href="/p_types">
              Projects
            </Link>

            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
            ))}

          </div>
        </header>
        </div>
        <hr></hr>
        <main className="py-0">{children}</main>
        
      </body>
      <div className="bg-blue-700 py-4 mt-20">

      </div>
    </html>
  )
}