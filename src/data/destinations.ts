export interface Package {
  id: string;
  duration: string;
  nights: number;
  days: number;
  price: number;
  inclusions: string[];
  itinerary?: DayItinerary[];
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  video?: string;
  featured: boolean;
  whyVisit: string[];
  adventureImages?: string[];
  packages: Package[];
}

export const destinations: Destination[] = [
  {
    id: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    description: "Experience the perfect blend of modern cities, ancient rainforests, and pristine beaches. Malaysia offers a unique cultural tapestry with its mix of Malay, Chinese, and Indian influences.",
    image: "malaysia_new.jpg",
    video: "malaysia_video.mp4",
    featured: true,
    whyVisit: [
      "Explore the iconic Petronas Twin Towers in Kuala Lumpur",
      "Discover the UNESCO World Heritage Sites of Penang and Malacca",
      "Experience diverse cultures, cuisines, and traditions",
      "Relax on beautiful tropical islands and beaches"
    ],
    adventureImages: [
      "malaysia_adventure_1.jpg",
      "malaysia_adventure_2.jpg",
      "malaysia_adventure_3.jpg"
    ],
    packages: [
      {
        id: "malaysia-3n4d",
        duration: "3 Nights 4 Days",
        nights: 3,
        days: 4,
        price: 13999,
        inclusions: [
          "Flight Tickets",
          "Airport Pickup & Drop",
          "Daily Breakfast",
          "3 Star Hotel Accommodation",
          "Entry Tickets to Major Attractions",
          "Sightseeing Tours"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Kuala Lumpur",
            description: "Welcome to Malaysia! Check-in and evening city tour",
            activities: [
              "Airport pickup and hotel check-in",
              "Evening visit to Petronas Twin Towers",
              "Dinner at Jalan Alor food street"
            ]
          },
          {
            day: 2,
            title: "Kuala Lumpur City Tour",
            description: "Explore the vibrant capital city",
            activities: [
              "Visit Batu Caves",
              "Tour of Merdeka Square and Sultan Abdul Samad Building",
              "Shopping at Central Market",
              "Visit KL Tower for panoramic views"
            ]
          },
          {
            day: 3,
            title: "Genting Highlands Day Trip",
            description: "Experience the cool mountain resort",
            activities: [
              "Cable car ride to Genting Highlands",
              "Visit casinos and theme parks",
              "Enjoy mountain views and cool weather",
              "Return to Kuala Lumpur"
            ]
          },
          {
            day: 4,
            title: "Departure",
            description: "Final shopping and departure",
            activities: [
              "Last-minute shopping at Pavilion KL",
              "Check-out from hotel",
              "Airport transfer for departure"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "thailand",
    name: "Bangkok",
    country: "Thailand",
    description: "The vibrant capital of Thailand blends ancient temples with modern shopping malls, street food with fine dining, and serene canals with bustling streets.",
    image: "thailand.jpg",
    video: "hero-video.mp4",
    featured: true,
    whyVisit: [
      "Visit the magnificent Grand Palace and Wat Phra Kaew",
      "Experience the floating markets and river life",
      "Enjoy world-class shopping and nightlife",
      "Savor authentic Thai street food and cuisine"
    ],
    packages: [
      {
        id: "thailand-3n4d",
        duration: "4 Days 3 Nights",
        nights: 3,
        days: 4,
        price: 14999,
        inclusions: [
          "Flight Tickets",
          "Airport Pickup & Drop",
          "Daily Breakfast",
          "3 Star Hotel Accommodation",
          "Entry Tickets to Temples and Attractions",
          "City Tours"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Bangkok",
            description: "Welcome to the City of Angels",
            activities: [
              "Airport transfer to hotel",
              "Evening visit to Asiatique The Riverfront",
              "Dinner cruise on Chao Phraya River"
            ]
          },
          {
            day: 2,
            title: "Bangkok Temples Tour",
            description: "Discover Bangkok's spiritual heritage",
            activities: [
              "Visit the Grand Palace and Wat Phra Kaew",
              "Explore Wat Pho (Temple of the Reclining Buddha)",
              "Visit Wat Arun (Temple of Dawn)",
              "Evening at Khao San Road"
            ]
          },
          {
            day: 3,
            title: "Pattaya Excursion",
            description: "Beach city adventure",
            activities: [
              "Day trip to Pattaya",
              "Coral Island water activities",
              "Visit Sanctuary of Truth",
              "Evening cabaret show"
            ]
          },
          {
            day: 4,
            title: "Shopping & Departure",
            description: "Last day in Bangkok",
            activities: [
              "Visit Chatuchak Weekend Market or MBK Center",
              "Thai massage experience",
              "Airport transfer for departure"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    description: "The Island of Gods offers stunning beaches, ancient temples, lush rice terraces, and a unique Hindu culture that creates an unforgettable tropical paradise experience.",
    image: "bali_new.jpg",
    video: "hero-video.mp4",
    featured: true,
    whyVisit: [
      "Witness breathtaking sunsets at Tanah Lot Temple",
      "Explore the iconic Tegalalang Rice Terraces",
      "Experience traditional Balinese dance and culture",
      "Relax on world-famous beaches like Seminyak and Nusa Dua"
    ],
    packages: [
      {
        id: "bali-4n5d",
        duration: "4 Nights 5 Days",
        nights: 4,
        days: 5,
        price: 15999,
        inclusions: [
          "Flight Tickets",
          "Airport Pickup & Drop",
          "Daily Breakfast",
          "3 Star Hotel Accommodation",
          "Entry Tickets to Attractions",
          "Private Tours",
          "Water Sports Activities"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Bali",
            description: "Welcome to paradise",
            activities: [
              "Airport pickup and hotel check-in",
              "Relax at the hotel or beach",
              "Welcome dinner with traditional dance performance"
            ]
          },
          {
            day: 2,
            title: "Ubud Cultural Tour",
            description: "Explore Bali's cultural heart",
            activities: [
              "Visit Tegalalang Rice Terraces",
              "Ubud Monkey Forest",
              "Ubud Palace and Art Market",
              "Coffee plantation tour"
            ]
          },
          {
            day: 3,
            title: "Water Temple & Beach",
            description: "Temples and coastal beauty",
            activities: [
              "Visit Tanah Lot Temple at sunset",
              "Explore Taman Ayun Temple",
              "Beach time at Seminyak",
              "Seafood dinner on the beach"
            ]
          },
          {
            day: 4,
            title: "Water Sports & Relaxation",
            description: "Adventure and leisure",
            activities: [
              "Water sports at Tanjung Benoa",
              "Visit Uluwatu Temple",
              "Kecak Fire Dance performance",
              "Jimbaran Bay seafood dinner"
            ]
          },
          {
            day: 5,
            title: "Shopping & Departure",
            description: "Last day in Bali",
            activities: [
              "Shopping at Kuta or Seminyak",
              "Spa treatment",
              "Airport transfer for departure"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    description: "From the bustling streets of Hanoi to the serene waters of Ha Long Bay, Vietnam offers a perfect blend of natural beauty, rich history, and delicious cuisine.",
    image: "vietnam_new.jpg",
    video: "hero-video.mp4",
    featured: true,
    whyVisit: [
      "Cruise through the stunning Ha Long Bay",
      "Experience the vibrant streets of Hanoi's Old Quarter",
      "Taste authentic Vietnamese cuisine and coffee",
      "Explore ancient temples and French colonial architecture"
    ],
    packages: [
      {
        id: "vietnam-3n4d",
        duration: "3 Nights 4 Days",
        nights: 3,
        days: 4,
        price: 21999,
        inclusions: [
          "Flight Tickets",
          "Airport Pickup & Drop",
          "Daily Breakfast",
          "3 Star Hotel Accommodation",
          "Entry Tickets to Attractions",
          "Ha Long Bay Cruise",
          "City Tours"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Hanoi",
            description: "Welcome to Vietnam's capital",
            activities: [
              "Airport transfer to hotel",
              "Explore Hoan Kiem Lake and Ngoc Son Temple",
              "Evening water puppet show",
              "Dinner at Old Quarter"
            ]
          },
          {
            day: 2,
            title: "Hanoi City Tour",
            description: "Discover Hanoi's heritage",
            activities: [
              "Visit Ho Chi Minh Mausoleum and Museum",
              "Tour Temple of Literature",
              "Explore Old Quarter streets",
              "Cyclo ride through the city",
              "Traditional Vietnamese dinner"
            ]
          },
          {
            day: 3,
            title: "Ha Long Bay Cruise",
            description: "UNESCO World Heritage wonder",
            activities: [
              "Drive to Ha Long Bay",
              "Cruise through limestone karsts",
              "Visit Sung Sot Cave",
              "Kayaking and swimming",
              "Return to Hanoi"
            ]
          },
          {
            day: 4,
            title: "Shopping & Departure",
            description: "Final day in Hanoi",
            activities: [
              "Shopping at Dong Xuan Market",
              "Last-minute souvenir hunting",
              "Airport transfer for departure"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    description: "A futuristic metropolis where luxury meets innovation, featuring the world's tallest building, spectacular shopping malls, and desert adventures.",
    image: "dubai.jpg",
    video: "hero-video.mp4",
    featured: true,
    whyVisit: [
      "Experience the iconic Burj Khalifa and Dubai Mall",
      "Enjoy thrilling desert safaris and dune bashing",
      "Shop at world-class malls and traditional souks",
      "Relax on pristine beaches and luxury resorts"
    ],
    packages: [
      {
        id: "dubai-3n4d",
        duration: "3 Nights 4 Days",
        nights: 3,
        days: 4,
        price: 27999,
        inclusions: [
          "Flight Tickets",
          "Airport Pickup & Drop",
          "Daily Breakfast",
          "3 Star Hotel Accommodation",
          "Entry Tickets to Major Attractions",
          "Desert Safari with BBQ Dinner",
          "City Tours"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Dubai",
            description: "Welcome to the city of gold",
            activities: [
              "Airport transfer to hotel",
              "Evening at Dubai Marina",
              "Dhow cruise dinner"
            ]
          },
          {
            day: 2,
            title: "Modern Dubai Tour",
            description: "Explore the futuristic city",
            activities: [
              "Visit Burj Khalifa - At the Top",
              "Dubai Mall and Aquarium",
              "Dubai Fountain show",
              "Evening at JBR Beach"
            ]
          },
          {
            day: 3,
            title: "Desert Safari & Old Dubai",
            description: "Adventure and heritage",
            activities: [
              "Morning visit to Gold and Spice Souks",
              "Explore Al Fahidi Historical District",
              "Afternoon desert safari with dune bashing",
              "BBQ dinner and entertainment under the stars"
            ]
          },
          {
            day: 4,
            title: "Shopping & Departure",
            description: "Last day in Dubai",
            activities: [
              "Visit Mall of the Emirates or Ibn Battuta Mall",
              "Last-minute shopping",
              "Airport transfer for departure"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    description: "The Garden City combines modern architecture, lush greenery, diverse cultures, and world-class attractions in a compact island nation.",
    image: "singapore.jpg",
    video: "hero-video.mp4",
    featured: true,
    whyVisit: [
      "Experience Gardens by the Bay and Marina Bay Sands",
      "Visit Sentosa Island attractions and beaches",
      "Explore diverse neighborhoods like Chinatown and Little India",
      "Enjoy world-class dining and shopping"
    ],
    packages: [
      {
        id: "singapore-3n4d",
        duration: "3 Nights 4 Days",
        nights: 3,
        days: 4,
        price: 38000,
        inclusions: [
          "Flight Tickets",
          "Airport Pickup & Drop",
          "Daily Breakfast",
          "3 Star Hotel Accommodation",
          "Entry Tickets to Universal Studios",
          "Gardens by the Bay",
          "City Tours"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Singapore",
            description: "Welcome to the Lion City",
            activities: [
              "Airport transfer to hotel",
              "Evening at Marina Bay",
              "Light and Water show at Marina Bay Sands",
              "Dinner at hawker center"
            ]
          },
          {
            day: 2,
            title: "Sentosa Island Adventure",
            description: "Full day at Sentosa",
            activities: [
              "Universal Studios Singapore",
              "S.E.A. Aquarium visit",
              "Cable car ride",
              "Evening at Siloso Beach"
            ]
          },
          {
            day: 3,
            title: "City & Gardens Tour",
            description: "Explore Singapore's highlights",
            activities: [
              "Visit Gardens by the Bay and Cloud Forest",
              "Explore Chinatown and Buddha Tooth Relic Temple",
              "Visit Little India",
              "Evening light show at Supertree Grove"
            ]
          },
          {
            day: 4,
            title: "Shopping & Departure",
            description: "Final day shopping",
            activities: [
              "Shopping at Orchard Road",
              "Visit Merlion Park",
              "Airport transfer for departure"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    country: "India",
    description: "The 'Abode of Clouds' features breathtaking waterfalls, living root bridges, pristine lakes, and some of the wettest places on Earth with stunning natural beauty.",
    image: "meghalaya_new.jpg",
    video: "hero-video.mp4",
    featured: true,
    whyVisit: [
      "Trek to the famous Double Decker Living Root Bridge",
      "Witness Asia's cleanest village - Mawlynnong",
      "Explore crystal clear rivers and natural pools",
      "Experience unique Khasi tribal culture"
    ],
    packages: [
      {
        id: "meghalaya-4n5d",
        duration: "4 Nights 5 Days",
        nights: 4,
        days: 5,
        price: 15999,
        inclusions: [
          "Transportation (Bus/Car)",
          "All Meals (Breakfast, Lunch, Dinner)",
          "Accommodation in Hotels/Homestays",
          "Trek Guide",
          "Bamboo Trek",
          "Double Decker Living Root Bridge Trek",
          "Entry Fees to Attractions"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Shillong",
            description: "The Scotland of the East",
            activities: [
              "Pickup from Guwahati",
              "Drive to Shillong (3-4 hours)",
              "Visit Elephant Falls",
              "Explore Police Bazaar",
              "Check-in and dinner"
            ]
          },
          {
            day: 2,
            title: "Cherrapunji Wonders",
            description: "The wettest place on Earth",
            activities: [
              "Visit Nohkalikai Falls",
              "Explore Mawsmai Cave",
              "See Seven Sisters Falls",
              "Visit Eco Park",
              "Overnight in Cherrapunji"
            ]
          },
          {
            day: 3,
            title: "Double Decker Root Bridge Trek",
            description: "Iconic living bridges",
            activities: [
              "Trek to Double Decker Living Root Bridge (3-4 hours)",
              "Natural pool swimming",
              "Bamboo trek experience",
              "Return trek",
              "Rest and relax"
            ]
          },
          {
            day: 4,
            title: "Dawki & Mawlynnong",
            description: "Crystal waters and clean village",
            activities: [
              "Visit Dawki - Umngot River (boat ride)",
              "Explore Mawlynnong - Asia's cleanest village",
              "Visit living root bridge in Mawlynnong",
              "Return to Shillong"
            ]
          },
          {
            day: 5,
            title: "Departure",
            description: "Farewell to Meghalaya",
            activities: [
              "Visit Umiam Lake",
              "Last-minute shopping",
              "Drop to Guwahati airport/station"
            ]
          }
        ]
      }
    ]
  }
];
