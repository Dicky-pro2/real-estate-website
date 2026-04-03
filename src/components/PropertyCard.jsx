import { Bed, Bath, Square, MapPin, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const PropertyCard = ({ property }) => {
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppInquiry = () => {
    const message = `Hello! I'm interested in *${property.title}* in *${property.location}* priced at *${formatPrice(property.price)}*. Is it still available?`;
    const whatsappUrl = `https://wa.me/2349162869066?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart
            size={20}
            className={isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}
          />
        </button>
        <div className="absolute bottom-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              property.status === "For Sale"
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {property.status}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            <Link to={`/property/${property.id}`}>{property.title}</Link>
          </h3>
          <p className="text-blue-600 font-bold text-lg">
            {formatPrice(property.price)}
          </p>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin size={16} className="mr-1" />
          <span>{property.location}</span>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="flex items-center gap-1">
              <Bed size={18} />
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={18} />
              <span className="text-sm">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Square size={18} />
              <span className="text-sm">{property.area} m²</span>
            </div>
          </div>
        </div>

        <Link
          to={`/property/${property.id}`}
          className="mt-4 block text-center bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium"
        >
          View Details
        </Link>

        {/* WhatsApp Inquiry Button */}
        <button
          onClick={handleWhatsAppInquiry}
          className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium flex items-center justify-center gap-2"
        >
          <MessageCircle size={16} />
          Inquire on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
