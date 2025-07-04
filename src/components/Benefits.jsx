import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  TrendingUp, 
  DollarSign, 
  Home, 
  Shield, 
  Zap, 
  Leaf,
  Clock,
  Award
} from 'lucide-react'

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Valorização do Imóvel',
      description: 'Aumente o valor da sua propriedade em até 15% com a instalação de energia solar.',
      highlight: '+15% valorização'
    },
    {
      icon: DollarSign,
      title: 'Economia Garantida',
      description: 'Reduza sua conta de energia em até 95% e tenha retorno do investimento em apenas 3 anos.',
      highlight: '95% economia'
    },
    {
      icon: Shield,
      title: 'Garantia de 25 Anos',
      description: 'Painéis com garantia de performance por 25 anos e vida útil de até 30 anos.',
      highlight: '25 anos garantia'
    },
    {
      icon: Zap,
      title: 'Independência Energética',
      description: 'Produza sua própria energia e fique livre das variações tarifárias.',
      highlight: '100% independente'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Contribua para um futuro mais limpo e sustentável para as próximas gerações.',
      highlight: 'Zero poluição'
    },
    {
      icon: Clock,
      title: 'Instalação Rápida',
      description: 'Instalação completa em até 48 horas com equipe especializada.',
      highlight: '48h instalação'
    }
  ]

  const stats = [
    { number: '500+', label: 'Clientes Satisfeitos' },
    { number: '95%', label: 'Economia Média' },
    { number: '25', label: 'Anos de Garantia' },
    { number: '48h', label: 'Tempo de Instalação' }
  ]

  return (
    <section id="benefits" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Header da seção */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <Award size={16} className="mr-2" />
            Vantagens Exclusivas
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Por que escolher a{' '}
            <span className="gradient-text">L&A Painel Solar?</span>
          </h2>
          
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Descubra os benefícios que fazem da energia solar o melhor investimento para o seu futuro
          </p>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-dark-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Grid de benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              {/* Ícone */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon size={32} className="text-white" />
              </div>

              {/* Highlight */}
              <div className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-semibold mb-4">
                {benefit.highlight}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                {benefit.title}
              </h3>

              {/* Descrição */}
              <p className="text-dark-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para começar a economizar?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Solicite seu orçamento gratuito e descubra quanto você pode economizar
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Solicitar Orçamento Gratuito
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits 