import { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties as initialProperties } from '../data/properties';
import { Search, Filter } from 'lucide-react';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [properties, setProperties] = useState([]);

  // Load properties from localStorage or use initial data
  useEffect(() => {
    const stored = localStorage.getItem('properties');
    if (stored) {
      setProperties(JSON.parse(stored));
    } else {
      setProperties(initialProperties);
      localStorage.setItem('properties', JSON.stringify(initialProperties));
    }
  }, []); // Empty dependency array = runs once on page load

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedType || property.type === selectedType;
    const matchesStatus = !selectedStatus || property.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const propertyTypes = ['Duplex', 'Apartment', 'Flat', 'Mansion', 'Commercial', 'Terrace'];
  const statusTypes = ['For Sale', 'For Rent'];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">All Properties</h1>
          <p className="text-gray-600">Browse our extensive collection of properties across Nigeria</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by location or title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Status</option>
              {statusTypes.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Filter size={18} />
              More Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">Showing {filteredProperties.length} properties</p>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;