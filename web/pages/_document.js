import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import client from '../client'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then(lang => {
      return {...initialProps, lang}
    })
  }

  render () {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head>
          <script dangerouslySetInnerHTML={{__html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '9fql9y2oj3h422rs2yjlmcd77f9glv');
            fbq('track', 'PageView');`}}
          />
          <noscript>
            <img height={'1'} width={'1'} style={{display: 'none'}} alt={''}
              src={'https://www.facebook.com/tr?id=9fql9y2oj3h422rs2yjlmcd77f9glv&ev=PageView&noscript=1'} />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
