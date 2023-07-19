const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      title: "Project Description",
      type: "string",
    },
    {
      name: "date",
      title: "Date of Completion",
      type: "string",
    },
    {
      name: "github",
      title: "GitHub Link",
      type: "url",
    },
    {
      name: "livebuild",
      title: "Live Build Link",
      type: "url",
    },
    {
      name: "clientoverview",
      title: "Client Overview",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "projectoverview",
      title: "Project Overview",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "tools",
      title: "Tools Used",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default project;
