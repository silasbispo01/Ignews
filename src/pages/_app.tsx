import { AppProps } from 'next/app'
import Router from 'next/router'
import Head from 'next/head'

import { Provider as NextAuthProvider } from 'next-auth/client'

import { Header } from '../components/Header'
import '../styles/global.scss'

import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => {NProgress.start()})
Router.events.on('routeChangeComplete', () => {NProgress.done()})
Router.events.on('routeChangeError', () => {NProgress.done()})

export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/nprogress.css" type='text/css'/>
      </Head>
      <NextAuthProvider session={pageProps.session}>
        <Header/>
        <Component {...pageProps} />
      </NextAuthProvider>
    </>
  );
}

export default MyApp
