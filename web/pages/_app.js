import React from 'react'
import BaseApp, {Container} from 'next/app'
import client from '../client'
// import 'normalize.css'
import '../styles/shared.module.css'
import '../styles/layout.css'

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `

class App extends BaseApp {
  static async getInitialProps ({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then(config => {
      if (!config) {
        return {pageProps}
      }
      if (config && pageProps) {
        pageProps.config = config
      }
      return {pageProps}
    })
  }

  handleAnchorClick (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  }

  componentDidMount () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', this.handleAnchorClick);
    });
  }

  componentWillUnmount () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.removeEventListener('click', this.handleAnchorClick);
    });
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default App
