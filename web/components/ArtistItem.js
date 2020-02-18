import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Target, Trigger, Close} from '@accessible/modal';
import imageUrlBuilder from '@sanity/image-url';
import styles from './ArtistItem.module.css';
import client from '../client';
import SimpleBlockContent from './SimpleBlockContent';
import FbLogoSvg from '../assets/fbLogo.svg';
import SpotifyLogoSvg from '../assets/spotifyLogo.svg';
import InstaLogoSvg from '../assets/instaLogo.svg';

const builder = imageUrlBuilder(client);

const ArtistItem = (props) => {
  const {name, text, image, fbUrl, spotifyUrl, instaUrl} = props;
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
              <div className={styles.modal_image_name}>
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
              <div className={styles.some_container}>
                {fbUrl &&
                <a
                  href={fbUrl}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className={styles.some_logo}
                >
                  <FbLogoSvg viewBox={'0 0 32 32'} />
                </a>
                }
                {spotifyUrl &&
                <a
                  href={spotifyUrl}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className={styles.some_logo}
                >
                  <SpotifyLogoSvg viewBox={'0 0 32 32'} />
                </a>
                }
                {instaUrl &&
                <a
                  href={instaUrl}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className={styles.some_logo}
                >
                  <InstaLogoSvg viewBox={'0 0 32 32'} />
                </a>
                }
              </div>
            </div>
            <div className={styles.modal_rightCol}>
              {text && <SimpleBlockContent blocks={text} />}
            </div>
            <Close>
              <button className={styles.modal_closeBtn}>CLOSE <span style={{fontWeight: '800'}}>X</span></button>
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
