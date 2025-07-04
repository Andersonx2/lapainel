import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Quanto tempo leva para instalar energia solar?',
      answer: 'A instalação completa leva apenas 48 horas! Nossa equipe especializada trabalha de forma eficiente para que você comece a economizar o mais rápido possível.'
    },
    {
      question: 'Qual é o retorno do investimento em energia solar?',
      answer: 'O retorno do investimento acontece em média em 3 anos. Com a economia de até 95% na conta de luz, você recupera todo o valor investido rapidamente.'
    },
    {
      question: 'Os painéis solares funcionam em dias nublados?',
      answer: 'Sim! Os painéis solares modernos são altamente eficientes mesmo em dias nublados. Eles captam a radiação solar difusa e continuam gerando energia.'
    },
    {
      question: 'Qual é a garantia dos painéis solares?',
      answer: 'Oferecemos garantia de 25 anos para os painéis e 10 anos para o inversor. Além disso, nossa instalação tem garantia de 5 anos.'
    },
    {
      question: 'Preciso de manutenção frequente?',
      answer: 'Os painéis solares requerem pouca manutenção. Recomendamos apenas limpeza semestral e verificação anual do sistema. Oferecemos planos de manutenção preventiva.'
    },
    {
      question: 'Posso financiar a instalação?',
      answer: 'Sim! Oferecemos diversas opções de financiamento com parcelas que cabem no seu bolso. Alguns bancos oferecem taxas especiais para energia solar.'
    },
    {
      question: 'O que acontece se faltar energia?',
      answer: 'Para ter energia durante quedas de energia, você precisará de um sistema com baterias. Podemos instalar sistemas híbridos que mantêm sua casa funcionando.'
    },
    {
      question: 'A instalação danifica meu telhado?',
      answer: 'Não! Usamos técnicas de instalação que preservam a integridade do seu telhado. Nossos suportes são específicos para cada tipo de telha e garantem total segurança.'
    },
    {
      question: 'Posso vender energia para a concessionária?',
      answer: 'Sim! O sistema de compensação de energia permite que você gere créditos quando produzir mais energia do que consumir, reduzindo ainda mais sua conta.'
    },
    {
      question: 'A L&A atende minha região?',
      answer: 'Atendemos todo o estado de Santa Catarina! Nossa equipe está preparada para atender desde residências até grandes indústrias em qualquer cidade do estado.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <HelpCircle size={16} className="mr-2" />
            Dúvidas Frequentes
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Perguntas{' '}
            <span className="gradient-text">mais comuns</span>
          </h2>
          
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre energia solar e descubra como podemos ajudar você
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl"
                >
                  <span className="font-semibold text-dark-900 text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-primary-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-dark-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Nossa equipe especializada está pronta para responder todas as suas perguntas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Falar com Especialista
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 