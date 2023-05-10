const p_type = {
  name: "p_type",
  title: "Project Types",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "p_type", maxLength: 96 }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
   },
  ]
}

export default p_type;