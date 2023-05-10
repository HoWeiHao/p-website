
import p_types from "../../types/p_type-list";
import { PortableText } from "@portabletext/react";

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
      name: 'id_tag',
      title: 'ID Tag',
      type: 'string',
      options: { source: "name"}
    },
    {
        name: 'p_type',
        title: 'Project Type',
        type: "string",
        options: { list: p_types }
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: (project: any) => {
            return `p_types/${project.p_type}/${project.name}`;
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
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*'
      }
    },
    {
        name: 'url',
        title: 'URL',
        type: 'url'
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
        {
          type: "image",
          options: { hotspot: true },
        },
        {
          type: "file",
        },
      ],
    },
  ]
} 
    
        

export default project;