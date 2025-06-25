import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
