import React from 'react'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

import { Layout } from '../components'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
