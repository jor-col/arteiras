const art = {
  name: "art",
  title: "Art",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96, // <-- define validation here
      },
    },
    {
      name: 'image1',
      title: 'Image1',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'image2',
      title: 'Image2',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'image3',
      title: 'Image3',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'image4',
      title: 'Image4',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'image5',
      title: 'Image5',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'image6',
      title: 'Image6',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "string",
      title: "String",
      type: "string",
    },
  ],
};

export default art;