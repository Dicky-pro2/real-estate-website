import { Users, Award, HandshakeIcon, Shield } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Users, title: "Expert Agents", description: "Professional real estate experts" },
    { icon: Award, title: "Quality Properties", description: "Carefully selected listings" },
    { icon: HandshakeIcon, title: "Trusted Service", description: "Transparent transactions" },
    { icon: Shield, title: "Secure Deals", description: "Your investment is safe" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Trusted Real Estate Partner in Nigeria
            </h2>
            <p className="text-gray-600 mb-6">
              With over a decade of experience, NaijaEstates has helped thousands of Nigerians find their dream homes and make profitable real estate investments. We combine local expertise with global standards to deliver exceptional service.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <feature.icon className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More About Us
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
              alt="About us"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;