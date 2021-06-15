import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div style={{ width: 'calc(100vw-100px)' }}>
      <Head>
        <title>Sheil Gandhi</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet"></link>
      </Head>
      
      <Main />
      <About />
      <Projects />
    </div>
  )
}
