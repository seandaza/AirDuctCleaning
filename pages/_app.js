import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Air duct and vent dryer cleaning services</title>
        <script src="https://kit.fontawesome.com/41bcea2ae3.js" crossorigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
 