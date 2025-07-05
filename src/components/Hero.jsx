import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, TrendingUp, Zap, Shield, Clock, Users } from 'lucide-react'

const Hero = ({ onContactClick }) => {
  const benefits = [
    { icon: TrendingUp, text: 'Economia de até 95% na conta de luz' },
    { icon: Zap, text: 'Instalação em até 48 horas' },
    { icon: Shield, text: 'Garantia de 25 anos' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden w-full">
      {/* Background com gradiente */}
      <div className="absolute inset-0 gradient-bg opacity-10 w-full"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse-slow hidden sm:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-200 rounded-full opacity-20 animate-pulse-slow hidden sm:block"></div>
      
      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Conteúdo principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 w-full"
          >
            {/* Badge de destaque */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2 animate-pulse"></span>
              Líder em Santa Catarina
            </motion.div>

            {/* Banner de urgência */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg text-center"
            >
              <div className="flex items-center justify-center space-x-2">
                <Clock size={16} />
                <span className="font-bold">OFERTA LIMITADA:</span>
                <span>Instalação GRÁTIS + 10% de desconto até 30/06</span>
              </div>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight"
            >
              Transforme sua casa em uma{' '}
              <span className="gradient-text">fonte própria de energia</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-dark-600 leading-relaxed"
            >
              Economize até 95% na sua conta de luz com energia solar fotovoltaica. 
              Instalação rápida, garantia de 25 anos e retorno do investimento em apenas 3 anos.
            </motion.p>

            {/* Benefícios rápidos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-3"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <benefit.icon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-dark-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onContactClick}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Solicitar Orçamento Gratuito</span>
                <ArrowRight size={20} />
              </button>
              
              <button className="btn-outline text-lg px-8 py-4 flex items-center justify-center">
                <span>Ver Projetos</span>
              </button>
            </motion.div>

            {/* Social proof melhorado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-primary-200 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm text-dark-600">+500 clientes satisfeitos</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-secondary-500">★</span>
                  ))}
                </div>
                <span className="text-sm text-dark-600">4.9/5 avaliação</span>
              </div>

              <div className="flex items-center space-x-2">
                <Users size={16} className="text-primary-600" />
                <span className="text-sm text-dark-600">Atendimento em toda SC</span>
              </div>
            </motion.div>

            {/* Contador regressivo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="bg-gray-100 rounded-lg p-4 text-center"
            >
              <p className="text-sm text-dark-600 mb-2">Oferta termina em:</p>
              <div className="flex justify-center space-x-2">
                <div className="bg-primary-600 text-white px-3 py-2 rounded-lg">
                  <div className="text-lg font-bold">15</div>
                  <div className="text-xs">Dias</div>
                </div>
                <div className="bg-primary-600 text-white px-3 py-2 rounded-lg">
                  <div className="text-lg font-bold">08</div>
                  <div className="text-xs">Horas</div>
                </div>
                <div className="bg-primary-600 text-white px-3 py-2 rounded-lg">
                  <div className="text-lg font-bold">32</div>
                  <div className="text-xs">Min</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagem/Ilustração */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full"
          >
            <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-4 sm:p-8 shadow-2xl w-full max-w-full overflow-x-hidden">
              {/* Imagem real da empresa */}
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg w-full max-w-full">
                <img 
                  src="https://www.lapainelsolar.com.br/img/gallery-5.jpg" 
                  alt="Instalação de painéis solares pela L&A Painel Solar em Santa Catarina"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Overlay sutil para melhorar legibilidade dos cards */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              {/* Cards flutuantes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 w-32 max-w-[90vw]"
              >
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-primary-600">95%</div>
                  <div className="text-xs sm:text-sm text-dark-600">Economia média</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 w-32 max-w-[90vw]"
              >
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-secondary-600">25</div>
                  <div className="text-xs sm:text-sm text-dark-600">Anos garantia</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-3 sm:p-4 shadow-lg w-32 max-w-[90vw]"
              >
                <div className="text-center">
                  <div className="text-sm sm:text-lg font-bold">OFERTA</div>
                  <div className="text-xs sm:text-sm">Instalação GRÁTIS</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 