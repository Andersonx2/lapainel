import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import About from './components/About'
import Services from './components/Services'
import PriceComparison from './components/PriceComparison'
import SavingsCalculator from './components/SavingsCalculator'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import LeadForm from './components/LeadForm'
import PasswordProtection from './components/PasswordProtection'

function App() {
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Verificar se já está autenticado
    const authenticated = localStorage.getItem('lapainel_authenticated') === 'true'
    setIsAuthenticated(authenticated)
  }, [])

  useEffect(() => {
    // Scroll suave para links internos
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  const handleAuthenticationSuccess = () => {
    setIsAuthenticated(true)
  }

  // Se não estiver autenticado, mostrar tela de senha
  if (!isAuthenticated) {
    return <PasswordProtection onSuccess={handleAuthenticationSuccess} />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={() => setShowLeadForm(true)} />
      <Hero onContactClick={() => setShowLeadForm(true)} />
      <Benefits />
      <About />
      <Services />
      <PriceComparison />
      <SavingsCalculator />
      <Testimonials />
      <FAQ />
      <Contact onContactClick={() => setShowLeadForm(true)} />
      <Footer />
      <WhatsAppButton />
      
      {showLeadForm && (
        <LeadForm onClose={() => setShowLeadForm(false)} />
      )}
    </div>
  )
}

export default App
