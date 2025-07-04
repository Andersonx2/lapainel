import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send
} from 'lucide-react'

const Contact = ({ onContactClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(48) 99100-3434',
      description: 'WhatsApp disponível'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'lapainelsolar@gmail.com',
      description: 'Resposta em até 2h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Paulo Roberto Vidal Nº 31, Centro Comercial IPÊ, Bela Vista, Palhoça, Santa Catarina',
      description: 'Atendimento em toda SC'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      value: 'Segunda a Sexta: 8h às 18h',
      description: 'Sábado: 8h às 12h'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 to-white">
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
            <MessageCircle size={16} className="mr-2" />
            Entre em Contato
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Pronto para começar a{' '}
            <span className="gradient-text">economizar?</span>
          </h2>
          
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Solicite seu orçamento gratuito e descubra quanto você pode economizar 
            com energia solar. Nossa equipe está pronta para atendê-lo!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-6">
                Informações de Contato
              </h3>
              <p className="text-lg text-dark-600 mb-8">
                Entre em contato conosco através de qualquer um dos canais abaixo. 
                Nossa equipe especializada está pronta para atendê-lo.
              </p>
            </div>

            {/* Cards de contato */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-dark-900 mb-2">{info.title}</h4>
                      <p className="text-dark-700 font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-dark-500">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">Atendimento Prioritário</h4>
              <p className="mb-6 opacity-90">
                Clientes que entram em contato pelo WhatsApp recebem atendimento prioritário 
                e resposta em até 30 minutos!
              </p>
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Falar no WhatsApp
              </button>
            </motion.div>
          </motion.div>

          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-dark-900 mb-6">
              Solicite seu Orçamento Gratuito
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="(48) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Sua cidade"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Consumo Mensal de Energia (kWh)
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200">
                  <option>Selecione seu consumo</option>
                  <option>Até 200 kWh</option>
                  <option>200 - 500 kWh</option>
                  <option>500 - 1000 kWh</option>
                  <option>Acima de 1000 kWh</option>
                  <option>Não sei</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Conte-nos mais sobre seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Solicitar Orçamento Gratuito</span>
              </button>

              <p className="text-sm text-dark-500 text-center">
                * Campos obrigatórios. Seus dados estão seguros conosco.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 