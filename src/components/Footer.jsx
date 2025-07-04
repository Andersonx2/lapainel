import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L&A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">L&A Painel Solar</h3>
                <p className="text-sm text-gray-400">Energia Solar Fotovoltaica</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em energia solar fotovoltaica, proporcionando economia nas contas 
              de energia e um futuro sustentável.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Vantagens</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">(48) 99100-3434</p>
                  <p className="text-sm text-gray-400">WhatsApp disponível</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">lapainelsolar@gmail.com</p>
                  <p className="text-sm text-gray-400">Resposta em até 2h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Palhoça, SC</p>
                  <p className="text-sm text-gray-400">Atendimento em toda SC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-8">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar a economizar?</h3>
            <p className="text-xl mb-6 opacity-90">Solicite seu orçamento gratuito agora mesmo!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} L&A Painel Solar. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 