import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import PropertyList from '../components/PropertyList';
import About from '../components/About';
import { properties as initialProperties } from '../data/properties';

const Home = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('properties');
    let allProperties;
    
    if (stored) {
      allProperties = JSON.parse(stored);
    } else {
      allProperties = initialProperties;
      localStorage.setItem('properties', JSON.stringify(initialProperties));
    }
    
    // Get first 4 properties for featured section
    setFeaturedProperties(allProperties.slice(0, 4));
  }, []);

  return (
    <div>
      <Hero />
      <PropertyList properties={featuredProperties} title="Featured Properties" />
      <About />
      
      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let our expert agents help you discover the perfect property that matches your lifestyle and budget.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Browse All Properties
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;