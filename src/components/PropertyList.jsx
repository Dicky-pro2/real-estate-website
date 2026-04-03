import PropertyCard from './PropertyCard';

const PropertyList = ({ properties, title = "Featured Properties", showViewAll = true }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-600 mt-2">Discover the finest properties across Nigeria</p>
          </div>
          {showViewAll && (
            <a href="/properties" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;