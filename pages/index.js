import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Medium from '../components/Medium'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div className="max-w-full">
      <Head>
        <title>Sheil Gandhi</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet"></link>
      </Head>
      
      <Main />
      <About />
      <Projects />
      <Medium />
    </div>
  )
}
