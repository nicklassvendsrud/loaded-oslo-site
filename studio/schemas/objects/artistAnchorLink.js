export default {
  type: 'object',
  name: 'artistAnchorLink',
  title: 'Artist anchor link',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    }
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }) {
      return {
        title: `${name}`,
        subtitle: 'Anchor link',
      };
    },
  },
};
