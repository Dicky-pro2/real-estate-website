import { Search, Home, TrendingUp, Award } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black/50">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600"
          alt="Hero background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Dream Home in <span className="text-blue-400">Nigeria</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Discover luxury apartments, modern homes, and prime real estate across Nigeria's most desirable locations
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2">
            <input
              type="text"
              placeholder="Search by location, property type..."
              className="flex-1 px-4 py-3 text-gray-800 rounded-lg focus:outline-none"
            />
            <select className="px-4 py-3 text-gray-800 rounded-lg focus:outline-none bg-gray-50">
              <option>Property Type</option>
              <option>Duplex</option>
              <option>Apartment</option>
              <option>Flat</option>
              <option>Mansion</option>
              <option>Commercial</option>
            </select>
            <select className="px-4 py-3 text-gray-800 rounded-lg focus:outline-none bg-gray-50">
              <option>Price Range</option>
              <option>₦0 - ₦50M</option>
              <option>₦50M - ₦100M</option>
              <option>₦100M - ₦200M</option>
              <option>₦200M+</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Search size={20} />
              Search
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Home className="h-6 w-6 text-blue-400" />
              </div>
              <div className="font-bold text-2xl">1500+</div>
              <div className="text-sm text-gray-300">Properties</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
              <div className="font-bold text-2xl">50+</div>
              <div className="text-sm text-gray-300">Locations</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-6 w-6 text-blue-400" />
              </div>
              <div className="font-bold text-2xl">1000+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;