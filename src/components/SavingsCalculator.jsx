import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calculator, TrendingUp, DollarSign, Zap, Calendar } from 'lucide-react'

const SavingsCalculator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    monthlyBill: 300,
    city: 'Florianópolis'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    })
  }

  // Cálculos baseados no consumo
  const annualConsumption = formData.monthlyBill * 12
  const solarSystemSize = Math.ceil(annualConsumption / 1200) // kWp
  const systemCost = solarSystemSize * 15000 // R$ 15.000 por kWp
  const monthlySavings = formData.monthlyBill * 0.95 // 95% de economia
  const annualSavings = monthlySavings * 12
  const paybackPeriod = Math.ceil(systemCost / annualSavings)
  const lifetimeSavings = annualSavings * 25 // 25 anos de vida útil

  const cities = [
    'Florianópolis', 'Palhoça', 'São José', 'Biguaçu', 'Itajaí', 
    'Blumenau', 'Joinville', 'Criciúma', 'Tubarão', 'Lages'
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <Calculator size={16} className="mr-2" />
            Calculadora de Economia
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Descubra quanto você pode{' '}
            <span className="gradient-text">economizar</span>
          </h2>
          
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Calcule sua economia em tempo real e veja o retorno do investimento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-dark-900 mb-6">
              Informações do seu consumo
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Conta de luz mensal (R$)
                </label>
                <input
                  type="range"
                  name="monthlyBill"
                  min="100"
                  max="1000"
                  step="50"
                  value={formData.monthlyBill}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-dark-600 mt-2">
                  <span>R$ 100</span>
                  <span className="font-bold text-primary-600">R$ {formData.monthlyBill}</span>
                  <span>R$ 1000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Cidade
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-dark-900 mb-3">Resumo do seu perfil:</h4>
                <div className="space-y-2 text-sm text-dark-600">
                  <div className="flex justify-between">
                    <span>Consumo anual:</span>
                    <span className="font-medium">{annualConsumption.toLocaleString()} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sistema recomendado:</span>
                    <span className="font-medium">{solarSystemSize} kWp</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Investimento necessário:</span>
                    <span className="font-medium">R$ {systemCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resultados */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Economia mensal */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <TrendingUp size={32} className="mr-3" />
                <h3 className="text-2xl font-bold">Economia Mensal</h3>
              </div>
              <div className="text-4xl font-bold mb-2">
                R$ {monthlySavings.toFixed(0)}
              </div>
              <p className="text-green-100">
                Você economizará {monthlySavings.toFixed(0)} reais por mês
              </p>
            </div>

            {/* Retorno do investimento */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Calendar size={32} className="mr-3" />
                <h3 className="text-2xl font-bold">Retorno do Investimento</h3>
              </div>
              <div className="text-4xl font-bold mb-2">
                {paybackPeriod} anos
              </div>
              <p className="text-primary-100">
                Seu investimento se paga em {paybackPeriod} anos
              </p>
            </div>

            {/* Economia total */}
            <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <DollarSign size={32} className="mr-3" />
                <h3 className="text-2xl font-bold">Economia Total</h3>
              </div>
              <div className="text-4xl font-bold mb-2">
                R$ {(lifetimeSavings / 1000).toFixed(0)}k
              </div>
              <p className="text-secondary-100">
                Economia total em 25 anos de vida útil
              </p>
            </div>

            {/* CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                Pronto para começar a economizar?
              </h3>
              <p className="text-dark-600 mb-6">
                Solicite seu orçamento personalizado e garanta condições especiais
              </p>
              <button className="btn-primary text-lg px-8 py-4 w-full">
                Solicitar Orçamento Personalizado
              </button>
            </div>
          </motion.div>
        </div>

        {/* Informações adicionais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap size={32} className="text-primary-600" />
            </div>
            <h4 className="text-lg font-bold text-dark-900 mb-2">Instalação Rápida</h4>
            <p className="text-dark-600">Sistema instalado em apenas 48 horas</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} className="text-secondary-600" />
            </div>
            <h4 className="text-lg font-bold text-dark-900 mb-2">Garantia Estendida</h4>
            <p className="text-dark-600">25 anos de garantia nos painéis</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <DollarSign size={32} className="text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-dark-900 mb-2">Financiamento</h4>
            <p className="text-dark-600">Parcelas que cabem no seu bolso</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SavingsCalculator 