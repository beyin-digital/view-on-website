import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const KeywordsPage = ({ data }: any) => {
  const router = useRouter()
  useEffect(() => {
    if (data?.sublink) {
      window.location.href = data?.sublink
      return
    } else {
      console.log(data?.slug)
      router.push(
        data?.slug.length < 4
          ? `/subscribe/premium?hashtag=${data.slug}`
          : `/subscribe?hashtag=${data.slug}`
      )

      return
    }
  }, [router.query.slug])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <title>keyword #{decodeURI(data?.letters)}</title>
        <meta
          name="description"
          content="Experience a new era of internet browsing with VOW's keyword redirection service. Enter your #Keyword for instant redirection"
        />
        <meta
          name="keyword"
          content="VOW, ViewOnWebsite, Keyword Redirection, Sub-Links, E-Lable,#a,#b,#c,#d,#e,#f,#g,#h,#i,#j,#k,#l,#m,#n,#o,#p,#q,#r,#s,#t,#u,#v,#w,#x,#y,#z"
        />
        <link
          rel="canonical"
          href={`https://www.viewonwebsite.com/${decodeURI(data?.letters)}`}
        />
        <meta name="application-name" content="VIEW ON WEBSITE" />
        <meta name="apple-mobile-web-app-title" content="VIEW ON WEBSITE" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-config" content="/pwa/browserconfig.xml" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/pwa/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/pwa/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/pwa/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/pwa/safari-pinned-tab.svg"
          color="#171b1c"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-TileImage"
          content="/pwa/mstile-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/pwa/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://viewonwebsite.com" />
        <meta name="twitter:title" content="View On Website" />
        <meta
          name="twitter:description"
          content="Experience a new era of internet browsing with VOW's keyword redirection service. Enter your #Keyword for instant redirection"
        />
        <meta name="twitter:image" content="https://viewonwebsite.com" />
        <meta name="twitter:creator" content="View On Website" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="View On Website" />
        <meta
          property="og:description"
          content="Experience a new era of internet browsing with VOW's keyword redirection service. Enter your #Keyword for instant redirection"
        />
        <meta property="og:site_name" content="VIEW ON WEBSITE" />
        <meta property="og:url" content="https://www.viewonwebsite.com" />
        <meta
          property="og:image"
          content="https://www.viewonwebsite.com/images/logo.svg"
        />
      </Head>
      <div></div>
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/keywords/check/premium`
  )
  const data = await response.json()

  const paths = data?.map((item: any) => ({
    params: {
      slug: item.slug,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/keywords/letters?letters=${params?.slug}`
    )

    const data = await response.json()

    return {
      props: {
        data,
      },
      revalidate: 1,
    }
  } catch (error) {
    return {
      props: {
        data: {
          letters: params?.slug,
          slug: params?.slug,
        },
      },
      revalidate: 1,
    }
  }
}

export default KeywordsPage
