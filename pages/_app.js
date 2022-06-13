import { useState } from 'react'
import '../styles/globals.css'
import Layout from './components/Layout'
import Link from 'next/link'
import {BiSearchAlt} from 'react-icons/bi'
function MyApp({ Component, pageProps }) {
  return <>
    <Layout >
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
