import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phone = '5548991003434'
    const message = 'Olá! Gostaria de solicitar um orçamento para energia solar.'
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </button>
  )
}

export default WhatsAppButton 