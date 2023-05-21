import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Oi5</title>
        <meta
          name="description"
          content="an investigation and intelligence agency"
        />
      </Head>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <MDXProvider components={mdxComponents}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    </>
  )
}
