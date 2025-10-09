
export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+9607778899';
    const message = 'Hello! I\'m interested in learning more about your Maldives tours.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover-lift animate-gentle-float z-50 cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      <i className="ri-whatsapp-line text-2xl"></i>
    </button>
  );
}
