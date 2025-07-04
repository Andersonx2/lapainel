import { useState } from 'react'
import { X, Send, Phone, Mail, MapPin } from 'lucide-react'

const LeadForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    consumption: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar os dados
    console.log('Form submitted:', formData)
    alert('Obrigado! Entraremos em contato em breve.')
    onClose()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-dark-900">Solicitar Orçamento</h3>
            <p className="text-sm text-dark-600">Preencha os dados abaixo</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-700 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
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
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              placeholder="(48) 99999-9999"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-700 mb-2">
              E-mail *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
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
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              placeholder="Sua cidade"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-700 mb-2">
              Consumo Mensal (kWh)
            </label>
            <select
              name="consumption"
              value={formData.consumption}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Selecione seu consumo</option>
              <option value="ate-200">Até 200 kWh</option>
              <option value="200-500">200 - 500 kWh</option>
              <option value="500-1000">500 - 1000 kWh</option>
              <option value="acima-1000">Acima de 1000 kWh</option>
              <option value="nao-sei">Não sei</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-700 mb-2">
              Mensagem
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              placeholder="Conte-nos mais sobre seu projeto..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-4 flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>Solicitar Orçamento Gratuito</span>
          </button>

          <p className="text-xs text-dark-500 text-center">
            * Campos obrigatórios. Seus dados estão seguros conosco.
          </p>
        </form>

        {/* Contact Info */}
        <div className="p-6 bg-gray-50 rounded-b-2xl">
          <h4 className="font-bold text-dark-900 mb-4">Outras formas de contato:</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone size={16} className="text-primary-600" />
              <span className="text-sm text-dark-700">(48) 99100-3434</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={16} className="text-primary-600" />
              <span className="text-sm text-dark-700">lapainelsolar@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={16} className="text-primary-600" />
              <span className="text-sm text-dark-700">Palhoça, SC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadForm 