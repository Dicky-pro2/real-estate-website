import { useState, useEffect } from 'react';
import { properties } from '../../data/properties';
import { Home, DollarSign, MapPin, Users, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProperties: 0,
    totalValue: 0,
    totalLocations: 0,
    propertyTypes: {}
  });

  useEffect(() => {
    const totalValue = properties.reduce((sum, p) => sum + p.price, 0);
    const locations = [...new Set(properties.map(p => p.location.split(',')[0]))];
    const types = {};
    properties.forEach(p => {
      types[p.type] = (types[p.type] || 0) + 1;
    });

    setStats({
      totalProperties: properties.length,
      totalValue: totalValue,
      totalLocations: locations.length,
      propertyTypes: types
    });
  }, []);

  const statCards = [
    { title: 'Total Properties', value: stats.totalProperties, icon: Home, color: 'bg-blue-500' },
    { title: 'Total Value', value: `₦${(stats.totalValue / 1000000).toFixed(0)}M`, icon: DollarSign, color: 'bg-green-500' },
    { title: 'Locations', value: stats.totalLocations, icon: MapPin, color: 'bg-purple-500' },
    { title: 'Active Listings', value: stats.totalProperties, icon: TrendingUp, color: 'bg-orange-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${card.color} p-3 rounded-lg text-white`}>
                <card.icon size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-800">{card.value}</span>
            </div>
            <h3 className="text-gray-600 font-medium">{card.title}</h3>
          </div>
        ))}
      </div>

      {/* Property Types Chart */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Property Types</h2>
        <div className="space-y-3">
          {Object.entries(stats.propertyTypes).map(([type, count]) => (
            <div key={type}>
              <div className="flex justify-between text-sm mb-1">
                <span>{type}</span>
                <span>{count} properties</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(count / stats.totalProperties) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Properties */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Properties</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Title</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Location</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Price</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {properties.slice(0, 5).map((property) => (
                <tr key={property.id} className="border-t border-gray-100">
                  <td className="px-4 py-3 text-sm">{property.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{property.location}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-blue-600">
                    ₦{property.price.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      property.status === 'For Sale' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {property.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;