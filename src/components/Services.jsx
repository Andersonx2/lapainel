import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Home, 
  Building, 
  Factory, 
  Zap, 
  Settings,
  Wrench,
  Shield,
  Calculator
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Home,
      title: 'Residencial',
      description: 'Sistemas solares para casas e condomínios residenciais, com projetos personalizados para maximizar a economia.',
      features: ['Até 95% de economia', 'Instalação em 48h', 'Garantia de 25 anos'],
      price: 'A partir de R$ 15.000'
    },
    {
      icon: Building,
      title: 'Comercial',
      description: 'Soluções para empresas, escritórios e estabelecimentos comerciais, reduzindo custos operacionais.',
      features: ['Redução de custos', 'Projeto personalizado', 'Suporte empresarial'],
      price: 'A partir de R$ 25.000'
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Sistemas de grande porte para indústrias, com alta eficiência e retorno rápido do investimento.',
      features: ['Alta potência', 'ROI rápido', 'Manutenção especializada'],
      price: 'Sob consulta'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Análise e Projeto',
      description: 'Avaliamos seu consumo e criamos um projeto personalizado'
    },
    {
      step: '02',
      title: 'Aprovação',
      description: 'Apresentamos o orçamento e aguardamos sua aprovação'
    },
    {
      step: '03',
      title: 'Instalação',
      description: 'Equipe especializada instala em até 48 horas'
    },
    {
      step: '04',
      title: 'Ativação',
      description: 'Sistema é ativado e você começa a economizar'
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <Settings size={16} className="mr-2" />
            Nossos Serviços
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Soluções completas em{' '}
            <span className="gradient-text">energia solar</span>
          </h2>
          
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Oferecemos sistemas fotovoltaicos para todos os tipos de imóveis, 
            desde residências até grandes indústrias
          </p>
        </motion.div>

        {/* Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              {/* Ícone */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-white" />
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                {service.title}
              </h3>

              {/* Descrição */}
              <p className="text-dark-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-dark-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Preço */}
              <div className="border-t border-gray-200 pt-4">
                <div className="text-lg font-bold text-primary-600">
                  {service.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Processo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">
            Como funciona nosso processo
          </h3>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Processo simples e transparente, do primeiro contato até a ativação do seu sistema
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
              className="text-center relative"
            >
              {/* Linha conectora */}
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 z-0"></div>
              )}
              
              <div className="relative z-10">
                {/* Número do passo */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                
                {/* Título */}
                <h4 className="text-xl font-bold text-dark-900 mb-3">
                  {step.title}
                </h4>
                
                {/* Descrição */}
                <p className="text-dark-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center justify-center mb-6">
              <Calculator size={48} className="mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold">
                Orçamento Gratuito
              </h3>
            </div>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Solicite seu orçamento personalizado e descubra quanto você pode economizar 
              com energia solar. Sem compromisso!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                Falar com Especialista
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 