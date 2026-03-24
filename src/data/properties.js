const mumbaiLocations = [
  "Dombivli", "Kalyan", "Thakurli", "Ulhasnagar", "Ambernath", "Badlapur", "Titwala", "Vithalwadi",
  "Thane", "Mulund", "Bhandup", "Kanjurmarg", "Vikhroli", "Ghatkopar", "Vidyavihar", "Kurla", "Sion",
  "Matunga", "Dadar", "Parel", "Lower Parel", "Mahalaxmi", "Mumbai Central", "Grant Road", "Charni Road",
  "Marine Lines", "Churchgate", "CSMT", "Masjid Bunder", "Sandhurst Road", "Byculla", "Chinchpokli",
  "Currey Road", "Vashi", "Sanpada", "Juinagar", "Nerul", "Seawoods", "Belapur", "Kharghar", "Mansarovar",
  "Khandeshwar", "Panvel", "Airoli", "Rabale", "Ghansoli", "Kopar Khairane", "Bandra", "Khar", "Santacruz",
  "Vile Parle", "Andheri", "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar", 
  "Mira Road", "Bhayandar", "Vasai", "Virar", "Nalasopara", "Palghar", "Boisar"
];

const mockImages = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&q=80&w=1000",
];

const mockAmenities = [
  ["Swimming Pool", "Gym", "Clubhouse", "24/7 Security"],
  ["Infinity Pool", "Sky Lounge", "Automated Parking", "Concierge Service"],
  ["Garden", "Children's Play Area", "CCTV", "Power Backup"],
  ["Private Terrace", "Steam Room", "Business Lounge", "EV Charging"],
  ["Jogging Track", "Yoga Deck", "Library", "Senior Citizen Corner"]
];

const namesPrefix = ["Aura", "Golden", "Skyview", "Orchid", "Serene", "Heritage", "Emerald", "Sunrise", "Royal", "Platinum", "Crown", "Imperial"];
const namesSuffix = ["Heights", "Towers", "Residency", "Park", "Gardens", "Greens", "Estate", "Meadows", "Enclave"];

function generateLocationStats() {
  const stats = {};
  mumbaiLocations.forEach(loc => {
    stats[loc] = {
      totalProjects: Math.floor(Math.random() * 8) + 2,
      availableUnits: Math.floor(Math.random() * 50) + 10,
      priceRange: `₹${Math.floor(Math.random() * 30 + 30)}L - ₹${Math.floor(Math.random() * 5 + 1)}.${Math.floor(Math.random() * 9)} Cr`,
      popular: Math.random() > 0.5 ? "2 BHK" : "1 & 2 BHK",
      about: `Premium residential hub in ${loc} with excellent connectivity, top schools, and modern infrastructure.`
    };
  });
  return stats;
}

function generateProperties(stats) {
  const props = [];
  let id = 1;
  
  mumbaiLocations.forEach(loc => {
    const numProjects = stats[loc].totalProjects;
    for (let i = 0; i < numProjects; i++) {
        const prefix = namesPrefix[Math.floor(Math.random() * namesPrefix.length)];
        const suffix = namesSuffix[Math.floor(Math.random() * namesSuffix.length)];
        const basePrice = Math.floor(Math.random() * 50) + 30;
        
        props.push({
            id: id++,
            name: `${prefix} ${suffix}`,
            location: loc,
            station: loc,
            price: `₹${basePrice} Lakhs - ₹${basePrice * 2} Lakhs`,
            priceLabel: `₹${basePrice}L onwards`,
            configuration: Math.random() > 0.5 ? "1 & 2 BHK" : "2 & 3 BHK",
            availableUnits: Math.floor(Math.random() * 15) + 2,
            totalFloors: Math.floor(Math.random() * 25) + 7,
            possession: `${["Mar", "Jun", "Sep", "Dec"][Math.floor(Math.random() * 4)]} 202${Math.floor(Math.random() * 4) + 5}`,
            layout: "Spacious apartments with modern amenities and premium finishes",
            description: `Experience luxury living in ${loc}. ${prefix} ${suffix} offers premium residences with world-class facilities.`,
            amenities: mockAmenities[Math.floor(Math.random() * mockAmenities.length)],
            highlight: Math.random() > 0.7 ? "New Launch" : "Ready to Move",
            image: mockImages[Math.floor(Math.random() * mockImages.length)]
        });
    }
  });
  
  return props.sort(() => Math.random() - 0.5);
}

export const locationStats = generateLocationStats();
export const properties = generateProperties(locationStats);
