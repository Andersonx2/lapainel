import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Eye, EyeOff, Zap } from 'lucide-react'

const PasswordProtection = ({ onSuccess }) => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const correctPassword = 'sustentabilidade'

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simular delay para melhor UX
    setTimeout(() => {
      if (password.toLowerCase() === correctPassword.toLowerCase()) {
        setError(false)
        localStorage.setItem('lapainel_authenticated', 'true')
        onSuccess()
      } else {
        setError(true)
        setPassword('')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
              <Zap size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-dark-900">L&A Painel Solar</h1>
              <p className="text-sm text-dark-600">Energia Solar Fotovoltaica</p>
            </div>
          </div>
        </div>

        {/* Card de login */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={32} className="text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900 mb-2">
              Acesso Restrito
            </h2>
            <p className="text-dark-600">
              Digite a senha para acessar o site
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError(false)
                  }}
                  className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                    error ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Digite a senha"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2"
                >
                  Senha incorreta. Tente novamente.
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !password}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                isLoading || !password
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 transform hover:scale-105 shadow-lg'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Verificando...</span>
                </div>
              ) : (
                'Acessar Site'
              )}
            </button>
          </form>

          {/* Dica */}
          <div className="mt-6 p-4 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-lg">
            <p className="text-sm text-secondary-800 text-center">
              💡 <strong>Dica:</strong> A senha está relacionada ao nosso compromisso com o futuro
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-dark-500">
            © 2024 L&A Painel Solar. Todos os direitos reservados.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default PasswordProtection 