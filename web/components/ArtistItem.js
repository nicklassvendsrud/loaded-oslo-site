import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ArtistItem.module.css';
import client from '../client';

const builder = imageUrlBuilder(client);

const ArtistItem = (props) => {
  const {name, text, image} = props;
  return (
    <div className={styles.root}>
      {image &&
      <img
        src={builder
          .image(image)
          .auto('format')
          .width(2000)
          .url()}
        className={styles.image}
        alt=""
      />
      }
      <span className={styles.name}>{name}</span>
    </div>
  );
};

ArtistItem.propTypes = {
  name: PropTypes.string,
  text: PropTypes.any,
  image: PropTypes.any
};

export default ArtistItem;
