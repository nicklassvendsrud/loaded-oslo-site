export default {
  type: 'object',
  name: 'eventSection',
  title: 'Event section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'artistList',
      type: 'array',
      title: 'Artists list',
      of: [
        {
          type: 'reference',
          title: 'Artist',
          to: [{type: 'artist'}]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: `${title}`,
        subtitle: 'Event section'
      };
    }
  }
};
