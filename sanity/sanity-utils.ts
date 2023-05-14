import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from './config/client-config'
import { Page } from "@/types/Page";
import { P_type } from "@/types/P_type";

export async function getProjects(types: string): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && p_type == $types] | order(_createdAt desc){
      _id,
      _createdAt,
      name,
      p_type,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    {types}
  )
}

export async function getProject(project: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && id_tag == $project][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { project }
  )
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

export async function getP_types(): Promise<P_type[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "p_type" ]{
      _id,
      _createdAt,
      type,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getP_type(slug: string): Promise<P_type> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "p_type" && slug.current == $slug][0]{
      _id,
      _createdAt,
      type,
      "slug": slug.current,
      "image": image.asset->url,
      url,
    }`,
    { slug }
  )
}

