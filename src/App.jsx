import About from './components/About'
import Doing from './components/Doing'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <main className='flex lg:flex-col gap-10 xxs:gap-6 outter-padding leading-relaxed bg-blue-2 text-white tracking-widest'>
        <Nav />
        <article className='outter-padding rounded-corner bg-blue-1'>
          <About />
          <Doing />
          <Experience />
          <Skills />
        </article>
      </main>
      <Footer />
    </>
  )
}

export default App
