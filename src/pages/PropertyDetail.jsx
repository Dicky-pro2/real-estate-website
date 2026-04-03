import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Bed, Bath, Square, MapPin, Phone, Mail, ArrowLeft } from 'lucide-react';
import PropertyList from '../components/PropertyList';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [otherProperties, setOtherProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load properties from localStorage
    const stored = localStorage.getItem('properties');
    if (stored) {
      const allProperties = JSON.parse(stored);
      const currentProperty = allProperties.find(p => p.id === parseInt(id));
      setProperty(currentProperty);
      
      // Get other properties (excluding current)
      const others = allProperties.filter(p => p.id !== parseInt(id)).slice(0, 3);
      setOtherProperties(others);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Property not found</h2>
        <Link to="/properties" className="text-blue-600 mt-4 inline-block">Back to properties</Link>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/properties" className="inline-flex items-center gap-2 text-blue-600 mb-6 hover:text-blue-700">
          <ArrowLeft size={20} />
          Back to Properties
        </Link>

        {/* Main Image */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={18} className="mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">{formatPrice(property.price)}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    property.status === 'For Sale' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                  }`}>
                    {property.status}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="flex gap-6 py-4 border-y border-gray-100 mb-6">
                <div className="flex items-center gap-2">
                  <Bed size={20} className="text-gray-500" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath size={20} className="text-gray-500" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square size={20} className="text-gray-500" />
                  <span>{property.area} m²</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Features List */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Features & Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {property.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Agent Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">
                    {property.agent?.name?.charAt(0) || 'A'}
                  </span>
                </div>
                <h4 className="font-semibold text-lg">{property.agent?.name || 'Admin Agent'}</h4>
                <p className="text-gray-500 text-sm">Real Estate Agent</p>
              </div>
              <div className="space-y-3">
                <a
                  href={`tel:${property.agent?.phone || '+2348023456789'}`}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href={`mailto:${property.agent?.email || 'info@naijaestates.ng'}`}
                  className="flex items-center justify-center gap-2 w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Mail size={18} />
                  Send Email
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  Request a viewing or get more information about this property
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {otherProperties.length > 0 && (
          <div className="mt-12">
            <PropertyList properties={otherProperties} title="Similar Properties" showViewAll={false} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;