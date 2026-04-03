import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // Replace with your WhatsApp number (without +)
  const adminWhatsApp = "2349162869066"; // Nigeria format: 234XXXXXXXXXX

  const handleSendMessage = () => {
    const text = `🏠 *New Property Inquiry* 🏠\n\n${message}\n\n📞 My number: ${phoneNumber || "Not provided"}`;
    const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
    setMessage("");
    setPhoneNumber("");
  };

  const quickInquiry = (propertyTitle, propertyPrice) => {
    const quickMsg = `Hello! I'm interested in *${propertyTitle}* priced at *₦${propertyPrice.toLocaleString()}*. Is it still available?`;
    const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(quickMsg)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 animate-bounce"
          >
            <MessageCircle size={28} />
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="font-semibold">Chat with Agent</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-green-600 rounded-full p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-4">
                👋 Hi! Chat with our real estate agent on WhatsApp
              </p>

              <input
                type="tel"
                placeholder="Your phone number (optional)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                placeholder="Tell us what you're looking for..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                onClick={handleSendMessage}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Send on WhatsApp →
              </button>

              <div className="mt-3 text-center text-xs text-gray-400">
                Quick replies:
                <button
                  onClick={() => quickInquiry("any property", "0")}
                  className="ml-2 text-green-600 hover:underline"
                >
                  I'm interested
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* For property detail page - Quick WhatsApp button */}
      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
