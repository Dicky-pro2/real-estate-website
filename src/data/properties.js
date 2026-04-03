export const properties = [
  {
    id: 1,
    title: "Luxury 4-Bedroom Duplex",
    location: "Lekki Phase 1, Lagos",
    price: 85000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 350,
    type: "Duplex",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    description: "Stunning luxury duplex in the heart of Lekki Phase 1. Features include modern finishes, swimming pool, and 24/7 security.",
    features: ["Swimming Pool", "Parking", "Security", "Gym", "Garden", "AC Units"],
    agent: {
      name: "Adebayo Ogunlesi",
      phone: "+234 802 345 6789",
      email: "adebayo@realestate.ng"
    }
  },
  {
    id: 2,
    title: "Modern 3-Bedroom Apartment",
    location: "Victoria Island, Lagos",
    price: 120000000,
    bedrooms: 3,
    bathrooms: 3,
    area: 220,
    type: "Apartment",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    description: "Contemporary apartment with ocean view. Located in a high-end residential complex with premium amenities.",
    features: ["Ocean View", "24/7 Power", "Concierge", "Pool", "Gym"],
    agent: {
      name: "Chioma Eze",
      phone: "+234 803 456 7890",
      email: "chioma@realestate.ng"
    }
  },
  {
    id: 3,
    title: "Cozy 2-Bedroom Flat",
    location: "Ikeja, Lagos",
    price: 35000000,
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    type: "Flat",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    description: "Well-maintained flat in a secure estate. Close to major malls and transportation hubs.",
    features: ["Secure Estate", "Parking", "Water Treatment", "AC Units"],
    agent: {
      name: "Emeka Okafor",
      phone: "+234 804 567 8901",
      email: "emeka@realestate.ng"
    }
  },
  {
    id: 4,
    title: "5-Bedroom Mansion",
    location: "Banana Island, Lagos",
    price: 350000000,
    bedrooms: 5,
    bathrooms: 6,
    area: 550,
    type: "Mansion",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    description: "Exclusive waterfront mansion with private jetty. The epitome of luxury living.",
    features: ["Waterfront", "Private Jetty", "Home Theater", "Sauna", "Tennis Court"],
    agent: {
      name: "Tunde Adekunle",
      phone: "+234 805 678 9012",
      email: "tunde@realestate.ng"
    }
  },
  {
    id: 5,
    title: "Commercial Office Space",
    location: "Ikoyi, Lagos",
    price: 5000000,
    bedrooms: 0,
    bathrooms: 4,
    area: 500,
    type: "Commercial",
    status: "For Rent",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    description: "Prime office space in a commercial building. Perfect for corporate offices.",
    features: ["24/7 Security", "Backup Power", "Conference Room", "Parking"],
    agent: {
      name: "Ngozi Okonkwo",
      phone: "+234 806 789 0123",
      email: "ngozi@realestate.ng"
    }
  },
  {
    id: 6,
    title: "3-Bedroom Terrace",
    location: "Ajah, Lagos",
    price: 2500000,
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    type: "Terrace",
    status: "For Rent",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
    description: "Beautiful terrace house in a quiet neighborhood. Close to schools and shopping centers.",
    features: ["Parking", "Small Garden", "Water Heater", "AC"],
    agent: {
      name: "Femi Williams",
      phone: "+234 807 890 1234",
      email: "femi@realestate.ng"
    }
  }
];

export const featuredProperties = properties.slice(0, 4);