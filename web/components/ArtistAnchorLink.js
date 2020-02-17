import React from 'react'
import PropTypes from 'prop-types'
import styles from './sections/Hero.module.css'

function ArtistAnchorLink (props) {
  const {name} = props
  return <a className={styles.artist_list_item_link} href={`#${name.replace(/[^a-zA-Z]/g, '').toLowerCase()}`}>{name}</a>
}

ArtistAnchorLink.propTypes = {
  name: PropTypes.string.isRequired
}

export default ArtistAnchorLink
