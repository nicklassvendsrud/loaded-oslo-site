import React from 'react'
import PropTypes from 'prop-types'
import styles from './EventSection.module.css'
import ArtistItem from '../ArtistItem'

const EventSection = (props) => {
  const {title, artistList} = props;
  console.log(props);
  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <h2 className={styles.heading}>{title}</h2>
        <div className={styles.artist_list}>
          {artistList && artistList.length > 0 &&
          artistList.map(artist => (
            <div
              key={`artistKey_${artist.name}`}
              id={artist.name.replace(/[^a-zA-Z]/g, '').toLowerCase()}
              className={styles.artist_item_wrapper}
            >
              <ArtistItem {...artist} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

EventSection.propTypes = {
  title: PropTypes.string,
  artistList: PropTypes.arrayOf(PropTypes.object)
}

export default EventSection
