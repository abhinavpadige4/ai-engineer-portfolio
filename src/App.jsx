import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Architecture from './components/Architecture'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}