import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  Award, 
  Clock, 
  MapPin,
  CheckCircle,
  Star
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const highlights = [
    'Mais de 500 projetos instalados',
    'Equipe técnica especializada',
    'Garantia de 25 anos',
    'Suporte 24/7',
    'Instalação em até 48h',
    'Financiamento facilitado'
  ]

  const achievements = [
    { number: '10+', label: 'Anos de Experiência', icon: Clock },
    { number: '500+', label: 'Projetos Concluídos', icon: Award },
    { number: '100%', label: 'Clientes Satisfeitos', icon: Star },
    { number: 'SC', label: 'Cobertura Estadual', icon: MapPin }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
              <Users size={16} className="mr-2" />
              Empresa Familiar
            </div>

            {/* Título */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900">
              Experiência sólida para um{' '}
              <span className="gradient-text">futuro sustentável</span>
            </h2>

            {/* Descrição */}
            <div className="space-y-6 text-lg text-dark-600 leading-relaxed">
              <p>
                A <strong>L&A Painel Solar</strong> é especializada em energia solar fotovoltaica, 
                proporcionando economia nas contas de energia e um futuro sustentável. 
                Garantimos um retorno econômico superior e contribuímos para o equilíbrio ambiental.
              </p>
              
              <p>
                Cada projeto é personalizado para maximizar benefícios, atendendo às suas 
                necessidades e condições financeiras. Oferecemos instalações de excelência, 
                unindo qualidade técnica e eficiência econômica.
              </p>

              <p>
                Nossa equipe entrega soluções que superam expectativas e promovem uma 
                experiência rentável. Escolher a L&A Painel Solar é optar por sustentabilidade, 
                economia e alta qualidade.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle size={20} className="text-primary-600 flex-shrink-0" />
                  <span className="text-dark-700 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-4"
            >
              <button className="btn-primary text-lg px-8 py-4">
                Conheça Nossa História
              </button>
            </motion.div>
          </motion.div>

          {/* Lado direito - Estatísticas e imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-dark-700 font-medium text-sm">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Imagem/Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mx-auto flex items-center justify-center">
                    <Users size={48} className="text-white" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 bg-primary-200 rounded w-3/4 mx-auto"></div>
                    <div className="h-4 bg-primary-200 rounded w-1/2 mx-auto"></div>
                    <div className="h-4 bg-primary-200 rounded w-2/3 mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Card flutuante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">2013</div>
                  <div className="text-sm text-dark-600">Ano de fundação</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 