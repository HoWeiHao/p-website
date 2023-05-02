const p_type = {
  name: "p_type",
  title: "Project Types",
  type: "document",
  fields: [
    {
      name: "p_type",
      title: "Type",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "p_type", maxLength: 96 }
    },
  ]
}

export default p_type;