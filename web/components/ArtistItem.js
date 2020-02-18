import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Target, Trigger, Close} from '@accessible/modal';
import imageUrlBuilder from '@sanity/image-url';
import styles from './ArtistItem.module.css';
import client from '../client';
import SimpleBlockContent from './SimpleBlockContent';

const builder = imageUrlBuilder(client);

const ArtistItem = (props) => {
  const {name, text, image} = props;
  return (
    <Modal>
      <Trigger>
        <button className={styles.modal_trigger}>
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
        </button>
      </Trigger>
      <Target closedClass={styles.modal__closed} openClass={styles.modal__open}>
        <div>
          <div className={styles.modal_inner}>
            <div className={styles.modal_leftCol}>
              {image &&
              <img
                src={builder
                  .image(image)
                  .auto('format')
                  .width(2000)
                  .url()}
                className={styles.modal_image}
                alt=""
              />
              }
              <h3 className={styles.modal_name}>{name}</h3>
            </div>
            <div className={styles.modal_rightCol}>
              {text && <SimpleBlockContent blocks={text} />}
            </div>
            <Close>
              <button className={styles.modal_closeBtn}>Close <span style={{fontWeight: '800'}}>x</span></button>
            </Close>
          </div>
        </div>
      </Target>
    </Modal>
  );
};

ArtistItem.propTypes = {
  name: PropTypes.string,
  text: PropTypes.any,
  image: PropTypes.any
};

export default ArtistItem;
