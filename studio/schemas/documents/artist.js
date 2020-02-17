import { FaMicrophone } from 'react-icons/lib/fa'

export default {
  type: 'document',
  name: 'artist',
  title: 'Artist',
  icon: FaMicrophone,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'fbUrl',
      type: 'string',
      title: 'Facebook URL'
    },
    {
      name: 'spotifyUrl',
      type: 'string',
      title: 'Spotify URL'
    },
    {
      name: 'instaUrl',
      type: 'string',
      title: 'Instagram URL'
    }
  ],
  preview: {
    select: {
      name: 'name'
    },
    prepare({ name }) {
      return {
        title: `${name}`,
        subtitle: 'Artist'
      };
    }
  }
};
