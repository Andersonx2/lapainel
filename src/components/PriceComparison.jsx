import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, X, TrendingDown, DollarSign, Zap } from 'lucide-react'

const PriceComparison = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const competitors = [
    {
      name: 'Concorrente A',
      price: 'R$ 25.000',
      installation: '7-15 dias',
      warranty: '10 anos',
      support: 'Limitado',
      features: ['Painéis básicos', 'Instalação padrão', 'Suporte básico'],
      missing: ['Garantia estendida', 'Suporte 24/7', 'Financiamento']
    },
    {
      name: 'Concorrente B',
      price: 'R$ 28.000',
      installation: '10-20 dias',
      warranty: '15 anos',
      support: '8h/dia',
      features: ['Painéis médios', 'Instalação rápida', 'Suporte comercial'],
      missing: ['Garantia 25 anos', 'Suporte 24/7', 'Cobertura estadual']
    },
    {
      name: 'L&A Painel Solar',
      price: 'R$ 22.000',
      installation: '48 horas',
      warranty: '25 anos',
      support: '24/7',
      features: ['Painéis premium', 'Instalação express', 'Suporte completo', 'Financiamento', 'Cobertura SC'],
      missing: [],
      highlighted: true
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <TrendingDown size={16} className="mr-2" />
            Melhor Custo-Benefício
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Por que a{' '}
            <span className="gradient-text">L&A é a melhor escolha?</span>
          </h2>
          
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Compare e veja por que somos a opção mais inteligente para sua energia solar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {competitors.map((competitor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className={`relative rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                competitor.highlighted 
                  ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-white scale-105' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              {competitor.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    RECOMENDADO
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${
                  competitor.highlighted ? 'text-primary-600' : 'text-dark-900'
                }`}>
                  {competitor.name}
                </h3>
                
                <div className="mb-4">
                  <div className="text-4xl font-bold text-dark-900 mb-2">
                    {competitor.price}
                  </div>
                  <div className="text-sm text-dark-600">Preço médio</div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-bold text-dark-900">{competitor.installation}</div>
                    <div className="text-dark-600">Instalação</div>
                  </div>
                  <div>
                    <div className="font-bold text-dark-900">{competitor.warranty}</div>
                    <div className="text-dark-600">Garantia</div>
                  </div>
                  <div>
                    <div className="font-bold text-dark-900">{competitor.support}</div>
                    <div className="text-dark-600">Suporte</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-dark-900">Incluído:</h4>
                <ul className="space-y-2">
                  {competitor.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-dark-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {competitor.missing.length > 0 && (
                  <>
                    <h4 className="font-bold text-dark-900 mt-6">Não incluído:</h4>
                    <ul className="space-y-2">
                      {competitor.missing.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <X size={16} className="text-red-500 flex-shrink-0" />
                          <span className="text-dark-500 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {competitor.highlighted && (
                <div className="mt-8">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <DollarSign size={20} />
                      <span className="font-bold">Economia de R$ 3.000</span>
                    </div>
                    <p className="text-sm opacity-90">Comparado à concorrência</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Zap size={32} className="mr-3" />
              <h3 className="text-2xl font-bold">Vantagem Competitiva</h3>
            </div>
            <p className="text-xl mb-6 opacity-90">
              Economia de até R$ 6.000 + instalação mais rápida + garantia estendida
            </p>
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Solicitar Orçamento Especial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PriceComparison 