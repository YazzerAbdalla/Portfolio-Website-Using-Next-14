export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'num',
      title: 'Number',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'stack',
      title: 'The Project stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [{name: 'name', title: 'Name', type: 'string'}],
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'live',
      title: 'Live link',
      type: 'string',
    },
    {
      name: 'github',
      title: 'Github link',
      type: 'string',
    },
  ],
}
