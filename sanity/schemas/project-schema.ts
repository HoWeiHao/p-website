import  config  from "@/sanity.config";
import p_type from "./p_type-schema";
import { getP_types } from "../sanity-utils";
import getTypes from "../../types/p_type-list";
import p_types from "../../types/p_type-list";

const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'p_type',
            title: 'Project Type',
            type: "string",
            options: { list: p_types}
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: (project: any) => {
                  return `/blog/${project.p_type}/${project.name}`;
                },
                slugify: (slug: any) => slug.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },

        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        }, 
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]
}



export default project;