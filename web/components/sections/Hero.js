import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import SVG from 'react-inlinesvg'
import styles from './Hero.module.css'
import starsAnimStyles from './stars-animation.css'
import sharedStyles from '../../styles/shared.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import ArtistAnchorLink from '../ArtistAnchorLink'
import SiteConfigContext from '../SiteConfigContext'
import WaivesSvg from '../../assets/waives.svg'
import DigitLogoSvg from '../../assets/youDigItLogo.svg'
import SaltLogoSvg from '../../assets/salt-logo.svg'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

function Hero (props) {
  const {heading, backgroundImage, tagline, anchorLinks} = props
  console.log(backgroundImage)

  const style = (backgroundImage && backgroundImage.asset)
    ? {
      backgroundImage: `url("${urlFor(backgroundImage)
        .width(2000)
        .auto('format')
        .url()}")`
    }
    : {}
  const renderLogo = (logo) => {
    if (!logo || !logo.asset) {
      return null
    }

    if (logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url} className={styles.logo} />
    }

    return <img src={logo.asset.url} alt={logo.title} className={styles.logo} />
  }

  return (
    <SiteConfigContext.Consumer>
      {value =>
        <div className={styles.root} style={style}>
          <div className={styles.stars_container}>
            <div className={starsAnimStyles.stars1}></div>
            <div className={starsAnimStyles.stars2}></div>
            <div className={starsAnimStyles.stars3}></div>
          </div>
          <div className={styles.bg_waives_container}>
            <WaivesSvg />
          </div>
          <div className={styles.content}>
            <a href={'http://livestation.no/'} className={styles.partnerLink}>
              <DigitLogoSvg className={styles.digitLogo} />
            </a>
            <a href={'https://www.salted.no/'} className={styles.partnerLink}>
              <SaltLogoSvg className={styles.saltLogo} />
            </a>
            <div className={`${styles.logo} ${sharedStyles.desktopOnly}`}>{renderLogo(value.logo)}</div>
            <h2 className={styles.title}>{heading}</h2>
            <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
            {value.ticketUrl &&
            <a href={value.ticketUrl} className={styles.ticketsCta}>
              <span className={styles.ticketsCta_span}>BUY YOUR</span>
              <span className={styles.ticketsCta_span}>TICKETS HERE</span>
            </a>
            }
            {anchorLinks && (
              <div className={styles.artist_list_area}>
                <ul className={styles.artist_list}>
                  {anchorLinks.map(link => (
                    <li key={link._id} className={styles.artist_list_item}>
                      <ArtistAnchorLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      }
    </SiteConfigContext.Consumer>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  anchorLinks: PropTypes.arrayOf(PropTypes.object)
}

export default Hero
