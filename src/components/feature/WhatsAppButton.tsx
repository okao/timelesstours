
export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9609404623';
    const message = 'Hello! I\'m interested in learning more about your Maldives tours.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg transition-all duration-300 hover-lift animate-gentle-float z-50 cursor-pointer flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <i className="ri-whatsapp-line text-2xl"></i>
    </button>
  );
}
