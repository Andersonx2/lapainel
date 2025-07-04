import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'Florianópolis, SC',
      rating: 5,
      text: 'Instalei energia solar há 2 anos e minha conta de luz caiu de R$ 400 para R$ 20! A equipe da L&A foi muito profissional e a instalação foi rápida. Recomendo para todos!',
      savings: '95% economia',
      type: 'Residencial'
    },
    {
      name: 'João Santos',
      location: 'Palhoça, SC',
      rating: 5,
      text: 'Excelente trabalho! A L&A fez um projeto personalizado para minha empresa e conseguimos reduzir os custos operacionais em 80%. Retorno do investimento em apenas 2 anos.',
      savings: '80% economia',
      type: 'Comercial'
    },
    {
      name: 'Ana Costa',
      location: 'São José, SC',
      rating: 5,
      text: 'Processo muito transparente desde o orçamento até a instalação. A equipe técnica é muito competente e o suporte pós-venda é excepcional. Valeu muito a pena!',
      savings: '90% economia',
      type: 'Residencial'
    },
    {
      name: 'Carlos Oliveira',
      location: 'Biguaçu, SC',
      rating: 5,
      text: 'Investimento que se paga sozinho! Em 3 anos já recuperei todo o valor investido. A qualidade dos equipamentos e o serviço são de primeira linha.',
      savings: '85% economia',
      type: 'Residencial'
    },
    {
      name: 'Patrícia Lima',
      location: 'Itajaí, SC',
      rating: 5,
      text: 'A L&A transformou minha casa em uma fonte de energia sustentável. Além da economia, me sinto bem contribuindo para um futuro mais limpo. Super recomendo!',
      savings: '92% economia',
      type: 'Residencial'
    },
    {
      name: 'Roberto Alves',
      location: 'Blumenau, SC',
      rating: 5,
      text: 'Para minha indústria, a energia solar foi um divisor de águas. Reduzimos custos significativamente e melhoramos nossa imagem sustentável no mercado.',
      savings: '75% economia',
      type: 'Industrial'
    }
  ]

  const stats = [
    { number: '500+', label: 'Clientes Satisfeitos' },
    { number: '4.9/5', label: 'Avaliação Média' },
    { number: '95%', label: 'Economia Média' },
    { number: '48h', label: 'Instalação Rápida' }
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-6">
            <Star size={16} className="mr-2" />
            Depoimentos Reais
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            O que nossos clientes{' '}
            <span className="gradient-text">dizem sobre nós</span>
          </h2>
          
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Mais de 500 clientes satisfeitos em Santa Catarina. 
            Veja os resultados reais que nossos clientes estão alcançando
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Quote size={24} className="text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-secondary-500 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-dark-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Savings Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
                {testimonial.savings}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-dark-900">{testimonial.name}</div>
                  <div className="text-sm text-dark-600">{testimonial.location}</div>
                </div>
                <div className="text-xs text-dark-500 bg-gray-100 px-2 py-1 rounded">
                  {testimonial.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Junte-se aos nossos clientes satisfeitos
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Solicite seu orçamento gratuito e comece a economizar como eles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-secondary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Solicitar Orçamento Gratuito
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-secondary-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                Ver Mais Depoimentos
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 