import '../styles/globals.css'
import '../components/header.css'
import '../components/landingPage/servizi.css'
import '../components/contatti/contatti.css'
import '../components/footer.css'
import '../components/landingPage/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      < Component {...pageProps } />
    </>
  ) 
}

export default MyApp
