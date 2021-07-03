import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Medium from '../components/Medium'
import Projects from '../components/Projects'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className="max-w-full">
      <Head>
        <title>Sheil Gandhi</title>
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet"></link>
      </Head>

      <main>
        <Header />
        <Main />
        <About />
        <Projects />
        <Medium />
        <Contact />
      </main>
    </div>
  )
}
