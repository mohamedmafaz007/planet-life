export interface Package {
  id: string;
  duration: string;
  nights: number;
  days: number;
  price: number;
  image?: string;
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
    description: "A beautiful fusion of modern icons and natural wonders — from the Petronas Twin Towers to the pristine beaches of Langkawi and the cool heights of Genting.",
    image: "malaysia_profile_new.jpg",
    video: "malaysia_video_final.mp4",
    featured: true,
    whyVisit: [
      "Soar above rainforests on the Langkawi Cable Car & Sky Bridge",
      "Explore the iconic Batu Caves and Genting Highlands",
      "Capture the stunning architecture of Kuala Lumpur and Putrajaya",
      "Relax on the turquoise waters of Pulau Dayang Bunting"
    ],
    adventureImages: [
      "mal_adventure_1.jpg",
      "mal_adventure_2.jpg",
      "mal_adventure_3.jpg",
      "mal_adventure_4.jpg",
      "mal_adventure_5.jpg"
    ],
    packages: [
      {
        id: "malaysia-4n5d",
        duration: "4 Nights 5 Days (Langkawi & KL)",
        nights: 4,
        days: 5,
        price: 22999,
        image: "mal_adventure_3.jpg",
        inclusions: [
          "4 Nights Accommodation (2N Langkawi + 2N Kuala Lumpur)",
          "Daily Breakfast (Except Day 1)",
          "All Tours & Transfers on Private Basis",
          "Entry Tickets: Langkawi Cable Car, SkyBridge, SkyRex, 3D Art, SkyDome, KL Tower, Genting Cable Car",
          "Langkawi Island Hopping Tour (SIC basis)",
          "24x7 English Assistance via Hotline"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival Langkawi + City Tour & Sky Attractions",
            description: "Pick up from airport and explore the highlights of Langkawi.",
            activities: [
              "Pickup from Langkawi International Airport",
              "Private Transfer to Hotel for Check-in",
              "Langkawi Cable Car & Sky Bridge visit",
              "SkyDome, SkyRex & 3D Art Museum Langkawi",
              "Overnight stay at Langkawi"
            ]
          },
          {
            day: 2,
            title: "Langkawi Island Hopping Tour",
            description: "A shared boat tour to Langkawi's most beautiful satellite islands.",
            activities: [
              "Breakfast at hotel",
              "Visit Pulau Dayang Bunting (Lake of the Pregnant Maiden)",
              "Witness eagle feeding at Pulau Singa Besar",
              "Relax and swim at Pulau Beras Basah",
              "Evening at leisure and overnight stay"
            ]
          },
          {
            day: 3,
            title: "Transfer to Kuala Lumpur + Putrajaya Stopover",
            description: "Fly to the capital and see the stunning architecture of Putrajaya enroute.",
            activities: [
              "Breakfast and check-out from Langkawi",
              "Drop at Langkawi Airport for flight to KL",
              "Arrival at KL Airport and transfer to hotel",
              "Complimentary Photo Stop at Putrajaya (Pink Mosque & modern architecture)",
              "Overnight stay at Kuala Lumpur"
            ]
          },
          {
            day: 4,
            title: "Genting Highlands & Batu Caves Tour",
            description: "A refreshing day trip to the hills and cultural icons.",
            activities: [
              "Breakfast at hotel",
              "Visit Batu Caves (Murugan Temple)",
              "Visit Genting Highlands with 2-Way Skyway Cable Car ride",
              "Free time at Genting (Theme parks, shopping, casinos)",
              "Return to KL and overnight stay"
            ]
          },
          {
            day: 5,
            title: "KL City Tour + KL Tower + Departure",
            description: "Explore the landmarks of KL and visit the KL Tower observation deck.",
            activities: [
              "Breakfast and check-out from hotel",
              "City Tour: King's Palace, Merdeka Square, Petronas Twin Towers (Photo stop)",
              "Visit KL Tower (Entry Ticket included)",
              "Private transfer to Kuala Lumpur Airport for departure"
            ]
          }
        ]
      },
      {
        id: "malaysia-3n4d",
        duration: "3 Nights 4 Days (Kuala Lumpur)",
        nights: 3,
        days: 4,
        price: 17999,
        image: "mal_adventure_4.jpg",
        inclusions: [
          "3 Nights Accommodation (3★ with breakfast)",
          "KL City Tour with KL Tower Entry",
          "Putrajaya Photoshoot Stop (Complimentary)",
          "Genting Highlands Trip with Cable Car",
          "Batu Caves Visit",
          "Airport Transfers (Private Basis)",
          "All tours & transfers on a private basis"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival | KL City Tour + KL Tower",
            description: "Welcome to KL! Start with a city tour and panoramic views.",
            activities: [
              "Pick-up from KL International Airport",
              "Enroute Putrajaya sightseeing with photo stop",
              "Half-day Kuala Lumpur City Tour (Merdeka Square, Sultan Abdul Samad Building)",
              "KL Tower Entry (Observation Deck)",
              "Transfer to hotel & overnight stay"
            ]
          },
          {
            day: 2,
            title: "Genting Highlands + Batu Caves",
            description: "Hills and culture — the perfect KL day trip.",
            activities: [
              "Breakfast at hotel",
              "Visit Batu Caves and Murugan Temple",
              "Proceed to Genting Highlands with 2-way Cable Car tickets",
              "Free time at Sky Avenue and theme parks",
              "Return to hotel and overnight stay"
            ]
          },
          {
            day: 3,
            title: "KLCC Aquarium / Leisure",
            description: "A day for shopping or marine exploration.",
            activities: [
              "Breakfast at hotel",
              "Optional visit to KLCC Aquarium (at extra cost)",
              "Leisure time for shopping or optional add-on tours",
              "Overnight stay in Kuala Lumpur"
            ]
          },
          {
            day: 4,
            title: "Departure",
            description: "Say goodbye to Malaysia.",
            activities: [
              "Breakfast and hotel check-out",
              "Transfer to airport as per flight schedule"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "thailand",
    name: "Thailand",
    country: "Thailand",
    description: "The land of smiles where ancient temples meet vibrant nightlife and pristine islands. Experience the hustle of Bangkok, the fun of Pattaya, and the tropical bliss of Phuket and Krabi.",
    image: "thailand_new.jpg",
    video: "thailand_video.mp4",
    featured: true,
    whyVisit: [
      "Island hopping in the crystal clear waters of Phuket and Krabi",
      "Experiencing the vibrant street life and temples of Bangkok",
      "Thrilling water sports and entertainment in Pattaya",
      "World-renowned Thai massage and delicious street food"
    ],
    adventureImages: [
      "thailand_adventure_1.jpg",
      "thailand_adventure_2.jpg",
      "thailand_adventure_3.jpg",
      "thailand_adventure_4.jpg",
      "thailand_adventure_5.jpg"
    ],
    packages: [
      {
        id: "thailand-3n4d",
        duration: "3 Nights 4 Days (Pattaya & Bangkok)",
        nights: 3,
        days: 4,
        price: 15999,
        image: "thailand_adventure_4.jpg",
        inclusions: [
          "Accommodation as mentioned",
          "Transfers and Entrance Tickets as per Itinerary",
          "04 Breakfast & 02 Lunch",
          "Tiger Topia Entry Ticket",
          "Coral Island Tour with Indian Lunch (SIC)",
          "Safari World & Marine Park with animal shows",
          "Bangkok City & Temple Tour (SIC)"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival + Tiger Topia + Transfer to Pattaya",
            description: "Arrival at Bangkok Airport and transfer to the fun-filled city of Pattaya.",
            activities: [
              "Airport pickup and transfer to Pattaya",
              "Visit Tiger Topia (Walk Around Entry Ticket)",
              "Indian Breakfast near Tiger Topia",
              "Check-in at Pattaya Hotel and overnight stay"
            ]
          },
          {
            day: 2,
            title: "Pattaya Coral Island Tour",
            description: "A day of sun, sand, and sea at the beautiful Coral Island.",
            activities: [
              "Breakfast at Hotel",
              "Coral Island Tour by Speed Boat (SIC)",
              "Indian Lunch at the island"
            ]
          },
          {
            day: 3,
            title: "Safari World & Marine Park + Transfer to Bangkok",
            description: "Experience the wild at Thailand's greatest open zoo and leisure park.",
            activities: [
              "Breakfast at Hotel and check-out",
              "Transfer towards Bangkok",
              "Enroute visit Safari World & Marine Park with animal show tickets",
              "Lunch at Safari World",
              "Overnight Stay at Bangkok"
            ]
          },
          {
            day: 4,
            title: "Bangkok City Tour + Departure",
            description: "Explore the cultural heritage of Bangkok before heading home.",
            activities: [
              "Breakfast at Hotel and check-out",
              "Visit Golden Buddha (Wat Traimit)",
              "Visit Wat Maha Phruettharam (Mini Reclining Buddha)",
              "Visit Gems Gallery",
              "Drop at Bangkok Airport for Departure"
            ]
          }
        ]
      },
      {
        id: "thailand-4n5d-pb",
        duration: "4 Nights 5 Days (Pattaya & Bangkok)",
        nights: 4,
        days: 5,
        price: 19999,
        image: "thailand_adventure_5.jpg",
        inclusions: [
          "Accommodation as mentioned",
          "Transfers and Entrance Tickets as per Itinerary",
          "05 Breakfast, 02 Lunch & 01 Dinner",
          "Tiger Topia Entry Ticket",
          "Coral Island Tour with Indian Lunch (SIC)",
          "Chao Phraya Dinner Cruise Tickets",
          "Safari World & Marine Park with animal shows",
          "Bangkok City & Temple Tour (SIC)"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival + Tiger Topia + Transfer to Pattaya",
            description: "Land in Bangkok and head straight to Pattaya with a visit to the tiger sanctuary.",
            activities: [
              "Arrival Transfer to Pattaya",
              "Visit Tiger Topia (Walk Around Entry Ticket)",
              "Indian Breakfast near Tiger Topia",
              "Overnight stay in Pattaya"
            ]
          },
          {
            day: 2,
            title: "Pattaya Coral Island Tour",
            description: "Enjoy a speed boat journey to Coral Island followed by a delicious lunch.",
            activities: [
              "Breakfast at Hotel",
              "Coral Island Tour by Speed Boat with Indian Lunch (SIC)",
              "Free time for water activities",
              "Overnight Stay at Pattaya"
            ]
          },
          {
            day: 3,
            title: "Bangkok City Tour + Dinner Cruise",
            description: "Journey to the capital and enjoy a romantic evening on the river.",
            activities: [
              "Breakfast at Hotel and check-out from Pattaya",
              "Transfer to Bangkok",
              "City tour: Golden Buddha (Wat Traimit) & Wat Maha Phruettharam",
              "Check-in at Hotel",
              "Evening Chao Phraya Dinner Cruise (River Cruise Tickets)",
              "Overnight Stay at Bangkok"
            ]
          },
          {
            day: 4,
            title: "Safari World & Marine Park",
            description: "A full day of animal encounters and spectacular shows.",
            activities: [
              "Breakfast at Hotel",
              "Full day at Safari World & Marine Park",
              "Lunch included at the park",
              "Overnight stay at Bangkok"
            ]
          },
          {
            day: 5,
            title: "Departure",
            description: "Final leisure time and airport transfer.",
            activities: [
              "Breakfast at Hotel and check-out",
              "Drop at Bangkok Airport for Departure"
            ]
          }
        ]
      },
      {
        id: "thailand-4n5d-pk",
        duration: "4 Nights 5 Days (Phuket & Krabi)",
        nights: 4,
        days: 5,
        price: 22000,
        image: "thailand_adventure_1.jpg",
        inclusions: [
          "4 Nights Hotel Accommodation (3★/4★ options)",
          "Daily Hotel Breakfast",
          "Island Tours on SIC (Phi Phi, Khai, 4-Island)",
          "Indian Lunch on Day 2 & Day 4",
          "Phuket & Krabi City Tours",
          "All transfers (Private/Shared as per plan)",
          "Private Airport Transfers"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival Phuket + City Tour",
            description: "Welcome to the island paradise of Phuket.",
            activities: [
              "Arrival at Phuket Airport and private transfer to hotel",
              "Visit Karon View Point",
              "Elephant Sanctuary photo stop",
              "Visit Chalong Temple",
              "Overnight in Phuket"
            ]
          },
          {
            day: 2,
            title: "Phi Phi & Khai Islands Tour",
            description: "The ultimate island-hopping adventure by fast speed boat.",
            activities: [
              "Full-Day Phi Phi & Khai Island Speed boat Tour (SIC)",
              "Visit Maya Bay and Pileh Lagoon (Snorkeling)",
              "See Monkey Beach",
              "Relaxation and swimming at Khai Island",
              "Indian Buffet Lunch Included"
            ]
          },
          {
            day: 3,
            title: "Transfer to Krabi + City Tour",
            description: "Move to the stunning limestone cliffs and beaches of Krabi.",
            activities: [
              "Checkout from Phuket Hotel and transfer to Krabi",
              "Full-day Krabi highlights tour (SIC Basis)",
              "Visit Ao Nang Beach and Nopparat Thara Beach",
              "Visit White Temple and Fruit Market",
              "Photo stops at Twin Mountains and Black Crab Statue",
              "Overnight stay in Krabi"
            ]
          },
          {
            day: 4,
            title: "Krabi 4-Island Tour",
            description: "Discover the hidden gems of the Andaman Sea by traditional longtail boat.",
            activities: [
              "4 Island Tour by Longtail boat (SIC)",
              "Explore Chicken Island, Tup Island, and Poda Island",
              "Visit Phra Nang Cave Beach",
              "Indian Lunch Included",
              "Overnight stay at Krabi"
            ]
          },
          {
            day: 5,
            title: "Departure",
            description: "Check out and head to the airport.",
            activities: [
              "Breakfast and check-out",
              "Drop at Krabi Airport for departure"
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
    description: "The island of the gods — where sacred temples, emerald rice terraces, and golden beaches create a mystical paradise. Experience the spiritual heart of Ubud and the vibrant sunsets of Kuta.",
    image: "bali_main_new.jpg",
    video: "bali_video_final.mp4",
    featured: true,
    whyVisit: [
      "Visit the iconic Tanah Lot and Uluwatu sea temples",
      "Adventure to the breathtaking cliffs of Nusa Penida Island",
      "Witness the majestic Mount Batur volcano in Kintamani",
      "Experience the spiritual 'Gate of Heaven' at Lempuyang Temple"
    ],
    adventureImages: [
      "bali_adventure_1.jpg",
      "bali_adventure_2.jpg",
      "bali_adventure_3.jpg",
      "bali_adventure_4.jpg"
    ],
    packages: [
      {
        id: "bali-4n5d",
        duration: "4 Nights 5 Days (Leisure & Nature)",
        nights: 4,
        days: 5,
        price: 25000,
        image: "bali_adventure_4.jpg",
        inclusions: [
          "4 Nights Stay in 3-Star Resort (Kuta/Nusa Dua)",
          "Daily Buffet Breakfast",
          "Private Airport Pickup & Drop",
          "Full-Day Kintamani Volcano Tour",
          "Nusa Penida Island Tour (Speedboat + Private Transfers)",
          "Bedugul Tour (Ulun Danu & Tanah Lot Temples)",
          "Local Lunch at Nusa Penida",
          "All Entry Fees & Applicable Taxes"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Bali - Leisure Day",
            description: "Welcome to Bali! Settle into your resort and start exploring.",
            activities: [
              "Airport pickup and private transfer to resort",
              "Check-in at your beautiful 3-star resort",
              "Explore nearby markets or relax at the beach",
              "Overnight stay in Bali"
            ]
          },
          {
            day: 2,
            title: "Culture, Volcano & Nature Tour",
            description: "Explore the scenic highlights of Kintamani and Ubud.",
            activities: [
              "Full-Day Kintamani Volcano Tour (Mount Batur viewpoint)",
              "Visit Ubud Village and Tegalalang Rice Terrace",
              "Explore Tegenungan Waterfall",
              "Coffee Plantation visit with tasting session",
              "Overnight stay at resort"
            ]
          },
          {
            day: 3,
            title: "Nusa Penida Island Adventure",
            description: "A thrilling island hop to Bali's most iconic beaches.",
            activities: [
              "Speedboat to West Nusa Penida Island",
              "Visit Kelingking Beach, Crystal Bay, Broken Beach & Angel's Billabong",
              "Local Lunch included",
              "Private island transfers",
              "Overnight stay at resort"
            ]
          },
          {
            day: 4,
            title: "Iconic Temples & Sunset Tour",
            description: "Witness the spiritual beauty of Bali's famous lake and sea temples.",
            activities: [
              "Full-Day Bedugul Tour",
              "Visit Ulun Danu Beratan Lake Temple",
              "Witness the breathtaking sunset at Tanah Lot Temple",
              "Overnight stay at resort"
            ]
          },
          {
            day: 5,
            title: "Departure",
            description: "Final leisure time before heading home.",
            activities: [
              "Breakfast and checkout from hotel",
              "Private drop-off to Bali Airport",
              "Departure with beautiful memories"
            ]
          }
        ]
      },
      {
        id: "bali-5n6d",
        duration: "5 Nights 6 Days (Lempuyang & Nusa Penida)",
        nights: 5,
        days: 6,
        price: 32500,
        image: "bali_adventure_1.jpg",
        inclusions: [
          "5 Nights Stay at Radhana Kuta Bali",
          "Daily Breakfast & 01 Mineral Water per day",
          "Bali Visa cost included",
          "Private transfers by Air-conditioned vehicle",
          "Full Day Nusa Penida Island Tour with Lunch",
          "Lempuyang Temple (Gate of Heaven) visit",
          "Bali Jungle Swing experience"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival + Uluwatu & Kecak Dance",
            description: "Arrive in paradise and witness the famous fire dance.",
            activities: [
              "Airport pickup with Flower Garland",
              "Visit Uluwatu Temple",
              "Experience the Kecak Fire Dance at sunset",
              "Overnight stay at Radhana Kuta Bali"
            ]
          },
          {
            day: 2,
            title: "Nusa Penida Island Tour",
            description: "A full day exploring the hidden gems of Nusa Penida.",
            activities: [
              "Nusa Penida Island Tour (Kelingking, Broken Beach, Angel's Billabong, Crystal Bay)",
              "Local Lunch included",
              "Transfer by shared speedboat",
              "Overnight stay at hotel"
            ]
          },
          {
            day: 3,
            title: "Kintamani Volcano & Ubud Highlights",
            description: "Volcano views and traditional village exploration.",
            activities: [
              "Visit Kintamani Volcano & Mount Batur View",
              "Visit Celuk & Mas Village",
              "Explore Tegenungan Waterfall",
              "Enjoy the Bali Jungle Swing",
              "Overnight stay at hotel"
            ]
          },
          {
            day: 4,
            title: "Temples & Gates",
            description: "Photo stops at Bali's most beautiful landmarks.",
            activities: [
              "Visit Ulun Danu Beratan Temple",
              "Snap a photo at Handara Gate",
              "Visit Tanah Lot Temple at sunset",
              "Overnight stay at hotel"
            ]
          },
          {
            day: 5,
            title: "Gate of Heaven & Tirta Gangga",
            description: "Visit the spiritual highlights of East Bali.",
            activities: [
              "Visit Lempuyang Temple (Gate Of Heaven)",
              "Explore Lahangan Sweet (scenic viewpoint)",
              "Visit Tirta Gangga Water Palace",
              "Overnight stay at hotel"
            ]
          },
          {
            day: 6,
            title: "Departure",
            description: "Final checkout and transfer.",
            activities: [
              "Breakfast and checkout",
              "Drop at airport for departure"
            ]
          }
        ]
      },
      {
        id: "bali-6n7d",
        duration: "6 Nights 7 Days (Pool Villa & Adventure)",
        nights: 6,
        days: 7,
        price: 50000,
        image: "bali_adventure_3.jpg",
        inclusions: [
          "4 Nights at Risata Bali Resort (Superior Room)",
          "2 Nights at Alam Puisi (One Bedroom Pool Villa)",
          "Daily Breakfast at hotel/villa",
          "Day Trip to Nusa Penida with Lunch",
          "River Rafting and ATV Tandem Ride KUBER",
          "All Tours & Transfers on Private Basis",
          "Tanah Lot, Uluwatu, and Kintamani tours"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival",
            description: "Welcome to Bali.",
            activities: [
              "Private Airport transfer to hotel",
              "Check-in at Risata Bali Resort",
              "Overnight stay"
            ]
          },
          {
            day: 2,
            title: "Tanah Lot + Uluwatu Sunset & Kecak",
            description: "The most iconic sea temples and traditional dance.",
            activities: [
              "Full Day Tanah Lot Tour",
              "Visit Uluwatu Temple",
              "Watch Sunset Kecak & Fire Dance",
              "Overnight stay at hotel"
            ]
          },
          {
            day: 3,
            title: "Nusa Penida Island Trip",
            description: "Explore the wild beauty of Penida island.",
            activities: [
              "Full day trip to Nusa Penida",
              "Visit Kelingking, Broken Beach, Angel's Billabong, Crystal Bay",
              "Local lunch at Nusa Penida",
              "Overnight stay at hotel"
            ]
          },
          {
            day: 4,
            title: "Bali Waterfalls",
            description: "Discover the hidden water wonders.",
            activities: [
              "Full Day Kanto Lampo Waterfall",
              "Explore Tukad Cepung Waterfall",
              "Overnight stay at hotel"
            ]
          },
          {
            day: 5,
            title: "Kintamani Volcano + Bali Swing",
            description: "Move to Ubud and soar over the rice terraces.",
            activities: [
              "Early Morning Kintamani Volcano View",
              "Visit Tegallalang Rice Terrace",
              "Bali Swing Aloha experience",
              "Transfer to Alam Puisi Pool Villa",
              "Overnight stay in Villa"
            ]
          },
          {
            day: 6,
            title: "River Rafting & ATV Adventure",
            description: "A day for thrill-seekers.",
            activities: [
              "Ayung River Rafting with Local Lunch",
              "ATV Tandem Ride KUBER",
              "Overnight stay in Villa"
            ]
          },
          {
            day: 7,
            title: "Departure",
            description: "Final goodbye to Bali.",
            activities: [
              "Check-out from villa",
              "Private drop to the airport"
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
    description: "Experience the magic of Vietnam — from the emerald waters of Ha Long Bay and the historic charm of Hoi An to the vibrant life in Hanoi and the tropical paradise of Phu Quoc.",
    image: "vietnam_main.jpg",
    video: "vietnam_video.mp4",
    featured: true,
    whyVisit: [
      "Walk the iconic Golden Bridge in the misty Ba Na Hills",
      "Cruise through the UNESCO World Heritage limestone karsts of Ha Long Bay",
      "Explore the lantern-lit streets of Hoi An Ancient Town",
      "Experience the pristine beaches and world-class theme parks of Phu Quoc Island"
    ],
    adventureImages: [
      "viet_adventure_1.jpg",
      "viet_adventure_2.jpg",
      "viet_adventure_3.jpg",
      "viet_adventure_4.jpg"
    ],
    packages: [
      {
        id: "vietnam-6d5n-central-north",
        duration: "6 Days 5 Nights (Central & North Vietnam)",
        nights: 5,
        days: 6,
        price: 32000,
        image: "viet_adventure_1.jpg",
        inclusions: [
          "5 Nights stay in 3/4★ hotels (Double/Twin sharing)",
          "Daily breakfast + meals as per itinerary",
          "Private transportation for all sightseeings",
          "Entrance fees for sightseeing attractions",
          "Ha Long Bay Cruise with buffet lunch",
          "Airport transfers (PVT basis)"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Da Nang | Marble Mountain | Hoi An",
            description: "Arrival at Da Nang and exploration of the central coast.",
            activities: [
              "Meet guide at Da Nang Airport & transfer to hotel",
              "Visit Marble Mountains - explore caves & pagodas",
              "Basket boat ride at Bay Mau Coconut Forest",
              "Tour Hoi An Ancient Town (Japanese Bridge, Riverside Market)",
              "Dinner at a local restaurant"
            ]
          },
          {
            day: 2,
            title: "Ba Na Hills | Golden Bridge | Fantasy Park",
            description: "A full day at the stunning Ba Na Hills mountain resort.",
            activities: [
              "World's longest cable car ride to Ba Na Hills",
              "Walk the iconic Golden Bridge",
              "Explore Le Jardin d'Amour Gardens & Linh Ung Pagoda",
              "Free time for rides & fun at Fantasy Park",
              "Evening visit to local silk village"
            ]
          },
          {
            day: 3,
            title: "Flight to Ha Noi | Half-Day City Tour",
            description: "Travel to the capital city of Hanoi.",
            activities: [
              "Morning flight to Ha Noi & transfer to hotel",
              "Visit Tran Quoc Pagoda & Temple of Literature",
              "Explore Hoa Lo Prison Museum",
              "Evening free to explore Old Quarter & Ta Hien nightlife"
            ]
          },
          {
            day: 4,
            title: "Ninh Binh Excursion (Hoa Lu & Tam Coc)",
            description: "Experience the 'Ha Long Bay on Land'.",
            activities: [
              "Drive to Ninh Binh to visit Hoa Lu Ancient Capital",
              "Visit Dinh-Le temples",
              "Boat ride through Tam Coc caves among limestone cliffs",
              "Return to Ha Noi in the evening"
            ]
          },
          {
            day: 5,
            title: "Ha Long Bay Day Cruise",
            description: "A breathtaking cruise through Vietnam's most famous natural wonder.",
            activities: [
              "Transfer to Tuan Chau Harbor & board Cozy Bay Premium Cruise",
              "Visit Surprising Cave & Titop Island (viewpoint)",
              "Kayaking or bamboo boat ride at Luon Cave",
              "Lunch onboard & sunset tea party"
            ]
          },
          {
            day: 6,
            title: "Departure from Ha Noi",
            description: "Final breakfast and airport transfer.",
            activities: [
              "Breakfast at hotel & check-out",
              "Transfer to airport for return flight"
            ]
          }
        ]
      },
      {
        id: "vietnam-8d7n-phuquoc-hanoi-sapa",
        duration: "8 Days 7 Nights (Phu Quoc, Hanoi & Sapa)",
        nights: 7,
        days: 8,
        price: 40000,
        image: "viet_adventure_2.jpg",
        inclusions: [
          "Accommodation in Twin/Double Sharing",
          "A/C Transport with Experienced Driver",
          "Local English-speaking Guide (Where Mentioned)",
          "Meals as Mentioned (Breakfast & Lunch)",
          "Halong Bay Cruise (Shared) with Lunch",
          "Entry Fees as per itinerary",
          "1 Bottle of Water Per Person / Day"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Phu Quoc - Leisure Day",
            description: "Welcome to the pearl island of Vietnam.",
            activities: [
              "Meet & Greet at Phu Quoc Airport & transfer to hotel",
              "Free time to relax on the beach or explore nearby cafés",
              "Overnight in Phu Quoc"
            ]
          },
          {
            day: 2,
            title: "VinWonders & Grand World",
            description: "Adventure at Vietnam's biggest theme park and the sleepless city.",
            activities: [
              "Full day at VinWonders Theme Park",
              "Visit Grand World - 'Sleepless City'",
              "Optional Venice-style boat ride",
              "The Colors of Venice Show & Bamboo Legend structure"
            ]
          },
          {
            day: 3,
            title: "4 Island Tour + Cable Car + Waterpark",
            description: "Island hopping and world-class aerial views.",
            activities: [
              "Visit Pearl Farm, speedboat to Coral Park",
              "Snorkeling at Mong Tay & Gam Ghi Islands",
              "Vietnamese Lunch on island",
              "Visit Thom Island & Aquatopia Waterpark",
              "Return via 25-min Cable Car"
            ]
          },
          {
            day: 4,
            title: "Flight to Hanoi + City Tour",
            description: "Travel to the historic heart of Vietnam.",
            activities: [
              "Flight from Phu Quoc to Hanoi",
              "Visit Ho Chi Minh Complex & One Pillar Pagoda",
              "Tour President's Fish Pond & Stilt House",
              "Explore Old Quarters (Hang Gai, Opera House, Silk Street)"
            ]
          },
          {
            day: 5,
            title: "Ha Long Bay Cruise",
            description: "A shared cruise experience in the bay.",
            activities: [
              "Transfer to Tuan Chau Harbor & board Cozy Bay Premium Cruise",
              "Onboard Lunch & Visit Surprising Cave",
              "Trek to the top of Titop Island",
              "Kayaking or Bamboo Boat at Luon Cave",
              "Sunset Party with Tea & Cakes"
            ]
          },
          {
            day: 6,
            title: "Hanoi - Sapa",
            description: "Journey into the northern mountains.",
            activities: [
              "Transfer to Sapa (5.5 hrs via expressway)",
              "Check-in at hotel & free evening",
              "Explore Sapa Night Market & Church"
            ]
          },
          {
            day: 7,
            title: "Fansipan Mountain & Cat Cat Village",
            description: "The roof of Indochina and cultural heritage.",
            activities: [
              "Cable Car to Fansipan Summit (3,143m)",
              "Visit Pagodas and hike to the peak",
              "Afternoon visit to Cat Cat Village (Black Hmong tribe)",
              "Cultural dance show"
            ]
          },
          {
            day: 8,
            title: "Sapa - Hanoi - Departure",
            description: "Final return to Hanoi for your flight.",
            activities: [
              "Breakfast & checkout from Sapa",
              "Transfer to Hanoi Airport for departure flight"
            ]
          }
        ]
      },
      {
        id: "vietnam-5d4n-phuquoc-adventure",
        duration: "5 Days 4 Nights (Phu Quoc Adventure)",
        nights: 4,
        days: 5,
        price: 45000,
        image: "viet_adventure_4.jpg",
        inclusions: [
          "Private airport pick-up & drop-off",
          "Private transfers to attractions",
          "Entry Tickets: VinWonders, Safari, Grand World",
          "3 Island Tour by Speedboat (Group Tour)",
          "Flycam video & photos session",
          "Thom Island Cable Car & Aquatopia Water Park",
          "South Island Guided Tour"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Phu Quoc & Grand World",
            description: "Start your adventure at the vibrant Grand World.",
            activities: [
              "Private airport pick-up & transfer to Grand World",
              "Free evening to explore night market & dining",
              "Optional: Vietnamese Quintessence Show & Teddy Bear Museum"
            ]
          },
          {
            day: 2,
            title: "VinWonders & Safari Experience",
            description: "A day of wildlife and theme park thrills.",
            activities: [
              "Private transfer to VinWonders & Safari",
              "Explore VinWonders Theme Park & Waterpark",
              "Visit Vinpearl Safari open zoo & animal shows"
            ]
          },
          {
            day: 3,
            title: "Three Island Adventure by Speedboat",
            description: "Snorkeling and beach fun in the southern islands.",
            activities: [
              "Speedboat tour to Mong Tay, Gam Ghi & May Rut Islands",
              "Snorkeling among coral reefs",
              "Flycam video & photos session",
              "Thom Island Cable Car ride",
              "Access to Aquatopia Water Park"
            ]
          },
          {
            day: 4,
            title: "South Island Exploration",
            description: "Discover the history and industry of the island.",
            activities: [
              "Visit Pearl Farm & Sim Wine garden",
              "Explore Phu Quoc Prison Museum & Ho Quoc Pagoda",
              "Relax at Sao Beach",
              "Chill at Sonato Beach Club",
              "Photo stops at Sunset Town & Kiss Bridge"
            ]
          },
          {
            day: 5,
            title: "Departure",
            description: "Final breakfast and transfer.",
            activities: [
              "Breakfast at hotel & check-out",
              "Private transfer to Phu Quoc Airport"
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
    description: "A futuristic metropolis where luxury meets tradition — from the soaring Burj Khalifa to golden desert dunes. Dubai offers world-class dining, iconic attractions, and an experience unlike any other.",
    image: "dubai_new.jpg",
    video: "dubai_video_new.mp4",
    featured: true,
    whyVisit: [
      "Ascend to the top of the iconic Burj Khalifa, the world's tallest building",
      "Sail on a magical Dhow Cruise through Dubai Creek or Marina",
      "Experience heart-pounding desert safari with BBQ dinner under the stars",
      "Explore world-class malls, souks, and vibrant cultural landmarks"
    ],
    adventureImages: [
      "dubai_adventure_1.jpg",
      "dubai_adventure_2.jpg",
      "dubai_adventure_3.jpg",
      "dubai_adventure_4.jpg",
      "dubai_adventure_5.jpg"
    ],
    packages: [
      {
        id: "dubai-3n4d",
        duration: "3 Nights 4 Days",
        nights: 3,
        days: 4,
        price: 35000,
        image: "dubai_adventure_4.jpg",
        inclusions: [
          "Airport Pickup & Drop",
          "3 Nights at 3★ Hotel with Daily Buffet Breakfast",
          "Dhow Dinner Cruise at Creek",
          "Dubai City Tour",
          "Desert Safari with BBQ Dinner & Entertainment",
          "Burj Khalifa — At The Top",
          "Dubai Mall Visit",
          "Transfers to All Mentioned Sightseeing Places",
          "Entry Tickets to All Mentioned Attractions"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Dubai + Dhow Dinner Cruise",
            description: "Welcome to the City of Gold! Check in to your hotel and start the evening with a magical Dhow Cruise.",
            activities: [
              "Airport pickup and hotel check-in",
              "Evening Dhow Dinner Cruise at Dubai Creek",
              "Enjoy international buffet dinner aboard the cruise",
              "Scenic views of old and new Dubai from the water"
            ]
          },
          {
            day: 2,
            title: "Dubai City Tour + Desert Safari",
            description: "Explore the best of modern Dubai in the morning, then head out to the thrilling golden desert by evening.",
            activities: [
              "Morning Dubai City Tour of major landmarks",
              "Evening Desert Safari with dune bashing",
              "BBQ dinner under the stars",
              "Folk entertainment: Tanoura dance, fire show, belly dance"
            ]
          },
          {
            day: 3,
            title: "Burj Khalifa & Dubai Mall",
            description: "Visit the world's tallest structure and explore one of the planet's largest shopping destinations.",
            activities: [
              "Visit Burj Khalifa — At the Top (observation deck)",
              "Explore Dubai Mall — world's biggest man-made shopping structure",
              "Watch the spectacular Dubai Fountain show",
              "Leisure time for shopping and dining"
            ]
          },
          {
            day: 4,
            title: "Departure",
            description: "Check out and transfer to Dubai Airport as per your flight time.",
            activities: [
              "Hotel check-out",
              "Airport drop as per flight schedule"
            ]
          }
        ]
      },
      {
        id: "dubai-4n5d",
        duration: "4 Nights 5 Days",
        nights: 4,
        days: 5,
        price: 42000,
        image: "dubai_adventure_5.jpg",
        inclusions: [
          "Airport Pickup & Drop (Private Transfers)",
          "4 Nights at Le Wana 3★ Hotel (Bed & Breakfast)",
          "Dhow Cruise Marina with Dinner",
          "Half Day Dubai City Tour",
          "Dubai Mall + Burj Khalifa 124th Floor (Non-Prime)",
          "Desert Safari with BBQ Dinner (Shared)",
          "Museum of the Future",
          "Miracle Garden",
          "Global Village",
          "All Entry Tickets as per Itinerary",
          "Hotel Tourism Fee, Municipality Fee & VAT"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Dubai + Dhow Cruise Marina",
            description: "Arrive in Dubai and set sail on a spectacular Dhow Cruise at the Marina.",
            activities: [
              "Airport pickup (private transfer) and hotel check-in",
              "Evening Dhow Cruise at Dubai Marina with dinner",
              "Stunning views of Marina skyline from the water"
            ]
          },
          {
            day: 2,
            title: "Dubai City Tour + Burj Khalifa + Dubai Mall",
            description: "Discover the best of modern Dubai — from heritage to iconic towers.",
            activities: [
              "Half Day Dubai City Tour covering key landmarks",
              "Visit Dubai Mall — one of the world's largest malls",
              "Burj Khalifa 124th Floor (Non-Prime) observation deck",
              "Dubai Fountain Show in the evening"
            ]
          },
          {
            day: 3,
            title: "Desert Safari with BBQ Dinner",
            description: "Experience the thrilling Arabian desert with an unforgettable BBQ evening.",
            activities: [
              "Afternoon Desert Safari with dune bashing (shared basis)",
              "Camel ride and sandboarding",
              "BBQ dinner with live entertainment",
              "Tanoura dance and belly dance performance"
            ]
          },
          {
            day: 4,
            title: "Museum of the Future + Miracle Garden + Global Village",
            description: "A day of wonder — from futuristic technology to breathtaking floral displays.",
            activities: [
              "Visit Museum of the Future — an architectural marvel",
              "Explore Miracle Garden — world's largest natural flower garden",
              "Evening at Global Village — multicultural shopping & entertainment"
            ]
          },
          {
            day: 5,
            title: "Departure",
            description: "Check out and transfer to Dubai Airport.",
            activities: [
              "Hotel check-out",
              "Airport drop (private transfer) as per flight schedule"
            ]
          }
        ]
      },
      {
        id: "dubai-5n6d",
        duration: "5 Nights 6 Days",
        nights: 5,
        days: 6,
        price: 49999,
        image: "dubai_adventure_1.jpg",
        inclusions: [
          "Airport Pickup & Drop (Private Transfers)",
          "5 Nights at Citymax Bur Dubai — Standard Room (Bed & Breakfast)",
          "Daily Breakfast",
          "Dhow Cruise Creek with International Buffet Dinner",
          "Half Day Dubai City Tour",
          "Burj Khalifa 124th/125th Floor (Off-Peak)",
          "Miracle Garden",
          "Global Village",
          "Dubai Frame",
          "Desert Safari with BBQ Dinner (Tanoura, Horse, Fire & Belly Dance)",
          "Museum of the Future (Private Transfer)",
          "Dubai Dolphinarium",
          "All Tours & Transfers on SIC/Private Basis"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Dubai + Dhow Cruise Creek",
            description: "Land in Dubai and kick off your trip with a traditional Dhow Cruise at the historic Creek.",
            activities: [
              "Airport pickup (private transfer) to hotel",
              "Dhow Cruise at Dubai Creek with international buffet dinner (shared transfer)",
              "Experience Dubai's old town skyline from the water"
            ]
          },
          {
            day: 2,
            title: "Dubai City Tour + Burj Khalifa",
            description: "Explore iconic Dubai landmarks and ascend to the top of the world.",
            activities: [
              "Half Day Dubai City Tour covering major landmarks",
              "Burj Khalifa 124th/125th Floor off-peak ticket with transfers",
              "Dubai Fountain show and leisure time at Dubai Mall"
            ]
          },
          {
            day: 3,
            title: "Miracle Garden + Global Village",
            description: "A full day of natural beauty and cultural entertainment.",
            activities: [
              "Miracle Garden — world's largest natural flower garden",
              "Global Village — multicultural shopping & entertainment hub",
              "Evening stroll and leisure"
            ]
          },
          {
            day: 4,
            title: "Dubai Frame + Desert Safari",
            description: "Frame the city and conquer the dunes — an action-packed day.",
            activities: [
              "Dubai Frame — visit both the old and new Dubai from a giant picture frame",
              "Afternoon Desert Safari with dune bashing",
              "BBQ dinner with Tanoura dance, horse dance, fire dance & belly dance"
            ]
          },
          {
            day: 5,
            title: "Museum of the Future + Dubai Dolphinarium",
            description: "Explore futuristic innovation and marvel at aquatic acrobatics.",
            activities: [
              "Museum of the Future — 2-way private transfer",
              "Dubai Dolphinarium — dolphin and seal show (shared transfer)",
              "Evening leisure and last-night dinner"
            ]
          },
          {
            day: 6,
            title: "Departure",
            description: "Check out and bid farewell to Dubai.",
            activities: [
              "Hotel check-out",
              "Airport drop (private transfer) as per flight schedule"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    description: "A tropical paradise of crystal-clear turquoise waters, white sandy beaches, and vibrant marine life. Experience the ultimate island escape in Maafushi.",
    image: "maldives_main_new.jpg",
    video: "maldives_video_final.mp4",
    featured: true,
    whyVisit: [
      "Relax on the pristine sandbanks and turquoise lagoons",
      "Snorkel through vibrant coral reefs and encounter sea turtles",
      "Witness lucky dolphins playing in the wild",
      "Enjoy traditional Malidivian fishing and BBQ dinners on the beach"
    ],
    adventureImages: [
      "mald_adventure_1.jpg",
      "mald_adventure_2.jpg",
      "mald_adventure_3.jpg",
      "mald_adventure_4.jpg"
    ],
    packages: [
      {
        id: "maldives-3n4d",
        duration: "3 Nights 4 Days (Maafushi Island)",
        nights: 3,
        days: 4,
        price: 34000,
        image: "mald_adventure_2.jpg",
        inclusions: [
          "3 Nights stay at Maafushi Island (3-Star/4-Star options)",
          "Full Board (Breakfast, Lunch & Dinner)",
          "Return Speedboat Transfers (Airport - Maafushi)",
          "Guided Snorkeling (Multiple points)",
          "Lucky Dolphin Watching & Sandbank Visit",
          "Maldivian style Fishing with BBQ Dinner",
          "All Green Taxes included"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Maafushi Welcome",
            description: "Start your island adventure with a scenic transfer.",
            activities: [
              "Receiving and Welcome at Male International Airport",
              "Speed boat transfer to Maafushi Island",
              "Welcome drinks upon arrival at the jetty",
              "Check-in and Dinner at the Hotel",
              "Overnight stay at Maafushi"
            ]
          },
          {
            day: 2,
            title: "Snorkeling, Dolphins & Sandbank Visit",
            description: "A day filled with marine life and turquoise waters.",
            activities: [
              "Breakfast at the hotel",
              "2 or 3 Point snorkeling session at vibrant reefs",
              "Lucky dolphin watching cruise",
              "Sandbank visit with lunch (at sandbank or on boat)",
              "DJ Safari Boat experience in the evening",
              "Overnight stay at Maafushi"
            ]
          },
          {
            day: 3,
            title: "Leisure & Night Fishing",
            description: "Explore the island at your own pace and catch your dinner.",
            activities: [
              "Breakfast and free leisure in the Island",
              "Visit Bikini Beach, Open Gym, or Shopping areas",
              "Lunch at the Hotel",
              "Optional watersports or resort visits (at own cost)",
              "Maldivian style Fishing with BBQ Dinner at night",
              "Overnight stay at Maafushi"
            ]
          },
          {
            day: 4,
            title: "Departure",
            description: "Final sunrise before you head home.",
            activities: [
              "Breakfast and hotel checkout",
              "Speedboat transfer to airport for departure"
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
    description: "The Garden City — where futuristic architecture meets lush nature. Experience the skyline from Marina Bay Sands, explore the magical Gardens by the Bay, and enjoy the wildlife at the world's first Night Safari.",
    image: "singapore_main_new.jpg",
    video: "singapore_video_new.mp4",
    featured: true,
    whyVisit: [
      "Experience the world's first Night Safari with a tram ride",
      "Visit the iconic Marina Bay Sands Sky Park for skyline views",
      "Explore Gardens by the Bay - Flower Dome and Super Tree Observatory",
      "Enjoy a full day of fun at Sentosa Island including Wings of Time"
    ],
    adventureImages: [
      "sing_adventure_1.jpg",
      "sing_adventure_2.jpg",
      "sing_adventure_3.jpg",
      "sing_adventure_4.jpg",
      "sing_adventure_5.jpg"
    ],
    packages: [
      {
        id: "singapore-3n4d",
        duration: "3 Nights 4 Days (City & Wildlife)",
        nights: 3,
        days: 4,
        price: 38000,
        image: "sing_adventure_2.jpg",
        inclusions: [
          "3 Nights accommodation at selected hotel (Standard/Premium)",
          "Daily breakfast (except Day 1)",
          "All entry tickets as per itinerary",
          "SIC transfers for sightseeing",
          "Private airport pickup & drop",
          "24-hour English assistance hotline"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival | City Tour | Night Safari",
            description: "Welcome to Singapore and discover the nocturnal wildlife.",
            activities: [
              "Arrival at Singapore Airport and meet representative",
              "Singapore City Tour (SIC) - explore iconic landmarks",
              "Evening visit to Night Safari with tram ride",
              "Overnight stay at hotel"
            ]
          },
          {
            day: 2,
            title: "Skyline & Gardens by the Bay",
            description: "Marvel at the futuristic architecture and botanical wonders.",
            activities: [
              "Breakfast at the hotel",
              "Visit Marina Bay Sands Sky Park (Skyline views)",
              "Explore Flower Dome, Cloud Forest, and Super Tree Observatory",
              "Visit the Jurassic World Exhibition at Gardens by the Bay",
              "Overnight stay at hotel"
            ]
          },
          {
            day: 3,
            title: "Sentosa Island Excursion",
            description: "A day of entertainment and thrills.",
            activities: [
              "Breakfast at the hotel",
              "Half-Day Sentosa Island Tour",
              "1-Way Cable Car Ride and Wings of Time Show",
              "Madame Tussauds 4-in-1 Experience",
              "Overnight stay at hotel"
            ]
          },
          {
            day: 4,
            title: "Departure",
            description: "Bid farewell to the Lion City.",
            activities: [
              "Breakfast at hotel and check out",
              "Private airport transfer for return flight"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "srilanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    description: "The Pearl of the Indian Ocean — a land of ancient temples, lush tea plantations, and golden beaches. Experience the history of Kandy, the vibrant streets of Colombo, and the coastal beauty of Bentota.",
    image: "srilanka_main.jpg",
    video: "srilanka_video.mp4",
    featured: true,
    whyVisit: [
      "Visit the sacred Temple of the Tooth in Kandy",
      "Experience the turtle hatcheries and water sports in Bentota",
      "Explore the vibrant capital city and shopping of Colombo",
      "Witness the majestic Pinnawala Elephant Orphanage"
    ],
    adventureImages: [
      "sl_adventure_1.jpg",
      "sl_adventure_2.jpg",
      "sl_adventure_3.jpg",
      "sl_adventure_4.jpg"
    ],
    packages: [
      {
        id: "sl-3n4d",
        duration: "3 Nights 4 Days (Bentota & Colombo)",
        nights: 3,
        days: 4,
        price: 22000,
        image: "sl_adventure_3.jpg",
        inclusions: [
          "Accommodations with dinner and breakfast in 3/4 star hotel",
          "Transport in an A/C Vehicle with English speaking guide",
          "Sightseeing as per itinerary (Madhu river, Turtle hatchery, Colombo City)",
          "Value added tax included",
          "Meet and greet at the airport"
        ],
        itinerary: [
          {
            day: 1,
            title: "Airport / Bentota",
            description: "Arrival in Sri Lanka and transfer to the coastal town of Bentota.",
            activities: [
              "Meet and greet at Sri Lanka Airport",
              "Proceed to Bentota (approx. 2.30 Hrs)",
              "Check in at the Hotel and spend the day at leisure",
              "Overnight stay in Bentota"
            ]
          },
          {
            day: 2,
            title: "Bentota Sightseeing",
            description: "Turtle hatcheries and river safaris.",
            activities: [
              "Breakfast at hotel",
              "Madhu river boat ride",
              "Visit Turtle hatchery (Sea creature protection effort)",
              "Optional Water sports",
              "Overnight stay in Bentota"
            ]
          },
          {
            day: 3,
            title: "Bentota / Colombo",
            description: "Journey to the vibrant capital.",
            activities: [
              "Breakfast and proceed to Colombo (Approx. 2 hrs)",
              "Enjoy Colombo City and Shopping Tour",
              "Visit Gangaramaya Temple and Viharamahadevi Park",
              "Check in the Hotel and overnight stay in Colombo"
            ]
          },
          {
            day: 4,
            title: "Colombo / Airport",
            description: "Final day and departure.",
            activities: [
              "Breakfast and hotel check out",
              "Proceed to the airport for departure (Approx. 45 mins)"
            ]
          }
        ]
      },
      {
        id: "sl-4n5d",
        duration: "4 Nights 5 Days (Kandy, Bentota & Colombo)",
        nights: 4,
        days: 5,
        price: 28000,
        image: "sl_adventure_4.jpg",
        inclusions: [
          "Accommodations with dinner and breakfast in 3 star hotels",
          "Transport in an A/C Vehicle with English speaking guide",
          "Sightseeing as per itinerary (Elephant Orphanage, Kandy, Bentota, Colombo)",
          "Value added tax included"
        ],
        itinerary: [
          {
            day: 1,
            title: "Airport / Kandy",
            description: "The ancient royal capital and gateway to the hills.",
            activities: [
              "Meet and greet at Airport and proceed to Kandy (approx. 3.30 Hrs)",
              "Visit Pinnawala Elephant Orphanage",
              "Explore Temple of the Tooth and Gem Museum",
              "Watch Cultural Show and check in at Kandy hotel"
            ]
          },
          {
            day: 2,
            title: "Kandy / Bentota",
            description: "Botanical gardens and transfer to the beach.",
            activities: [
              "Breakfast and visit Royal Botanical Garden",
              "Proceed to Bentota (approx. 4.30 Hrs)",
              "Check in at the Hotel and spend the day at leisure",
              "Overnight stay in Bentota"
            ]
          },
          {
            day: 3,
            title: "Bentota Leisure & Activities",
            description: "River rides and turtle conservation.",
            activities: [
              "Breakfast at hotel",
              "Madhu river ride and Turtle hatchery visit",
              "Water sports (optional)",
              "Overnight stay in Bentota"
            ]
          },
          {
            day: 4,
            title: "Bentota / Colombo",
            description: "City tour and shopping in the capital.",
            activities: [
              "Breakfast and proceed to Colombo (Approx. 2 hrs)",
              "Enjoy Colombo City and Shopping Tour (Gangaramaya Temple)",
              "Check in the Hotel and overnight stay"
            ]
          },
          {
            day: 5,
            title: "Colombo / Airport",
            description: "Farewell to Sri Lanka.",
            activities: [
              "Breakfast and check out",
              "Proceed to the airport for departure"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "kerala",
    name: "Kerala",
    country: "India",
    description: "God's Own Country — where misty hill stations, serene backwaters, lush tea gardens, and golden beaches come together for the perfect escape. From the houseboat cruises of Alleppey to the wildlife of Thekkady, Kerala is nature at its finest.",
    image: "kerala_main.jpg",
    video: "kerala_video.mp4",
    featured: true,
    whyVisit: [
      "Cruise through the serene backwaters of Alleppey on a traditional houseboat",
      "Explore the misty tea gardens and waterfalls of Munnar",
      "Spot elephants and tigers at the Periyar Wildlife Sanctuary in Thekkady",
      "Discover the adventure meadows and pine forests of Vagamon"
    ],
    adventureImages: [
      "kerala_adventure_1.jpg",
      "kerala_adventure_2.jpg",
      "kerala_adventure_3.jpg",
      "kerala_adventure_4.jpg",
      "kerala_adventure_5.jpg",
      "kerala_adventure_6.jpg"
    ],
    packages: [
      {
        id: "kerala-4d3n-south",
        duration: "4 Days 3 Nights (South Kerala – Mist & Water)",
        nights: 3,
        days: 4,
        price: 4500,
        image: "kerala_adventure_1.jpg",
        inclusions: [
          "Pickup & Drop at Ernakulam Railway Station",
          "3 Breakfast, 1 Lunch & 1 Dinner",
          "4 Days private cab for entire tour",
          "2 Nights Hotel Accommodation at Munnar",
          "1 Night Boathouse Accommodation Alleppey"
        ],
        itinerary: [
          {
            day: 1,
            title: "Cochin to Munnar",
            description: "Arrive and transfer to the scenic hill station of Munnar.",
            activities: [
              "Pickup from Ernakulam Railway Station / Cochin Airport",
              "Drive to Munnar – Nature Lover's Paradise",
              "Check-in at hotel/resort",
              "Leisure time enjoying the beauty of Munnar",
              "Overnight stay at Munnar"
            ]
          },
          {
            day: 2,
            title: "Full Day Munnar Excursion",
            description: "Discover all the grandeurs of this gorgeous hill station.",
            activities: [
              "Breakfast at hotel",
              "Visit Echo Point, Gundala Lake & Elephant Arrival Point",
              "Explore Mattuppetty Dam & Tata Tea Museum",
              "Visit Eravikulam National Park & Blossom Hydel Park",
              "Spice plantation & Anaimudi Peak",
              "Overnight stay at Munnar"
            ]
          },
          {
            day: 3,
            title: "Munnar to Alleppey – Backwater Cruise",
            description: "Drive through green valley and check into a traditional houseboat.",
            activities: [
              "Drive through scenic green valley to Alleppey",
              "Check-in to Kerala houseboat – welcome drink",
              "Backwater cruise through narrow canals & paddy fields",
              "Enjoy the cool breeze and stunning backwater views",
              "Night halt on houseboat"
            ]
          },
          {
            day: 4,
            title: "Alleppey to Departure",
            description: "Morning cruise, Cochin sightseeing and onward journey.",
            activities: [
              "Morning backwater day cruise",
              "Breakfast & checkout from houseboat",
              "Half-day sightseeing of Cochin",
              "Drop at Airport / Railway Station"
            ]
          }
        ]
      },
      {
        id: "kerala-5d4n-munnar-vagamon-thekkady",
        duration: "5 Days 4 Nights (Munnar, Vagamon & Thekkady)",
        nights: 4,
        days: 5,
        price: 4500,
        image: "kerala_adventure_2.jpg",
        inclusions: [
          "Pickup & Drop at Ernakulam Railway Station",
          "4 Breakfast & 1 Dinner",
          "5 Days private cab for entire tour",
          "4 Nights Accommodation at Munnar, Vagamon & Thekkady",
          "Parking, Petrol & Toll fee"
        ],
        itinerary: [
          {
            day: 1,
            title: "Kochi to Munnar",
            description: "Transfer to the misty highlands with waterfall stops en route.",
            activities: [
              "Pickup from Ernakulam Railway Station / Cochin Airport",
              "Visit Cheeyappara & Valara Waterfalls en route",
              "Check-in at Cloud Castle Resort (tea plantation property)",
              "Visit Tea Museum & Pothamedu Viewpoint",
              "Overnight stay in Munnar"
            ]
          },
          {
            day: 2,
            title: "Munnar Sightseeing",
            description: "Explore the best of Munnar's wildlife and natural beauty.",
            activities: [
              "Eravikulam National Park – spot the Nilgiri Tahr",
              "Mattupetty Dam & Echo Point",
              "Kundala Lake – boating & kayaking",
              "Leisure time for shopping",
              "Overnight stay in Munnar"
            ]
          },
          {
            day: 3,
            title: "Munnar to Vagamon",
            description: "Adventure and nature at the meadows of Vagamon.",
            activities: [
              "Drive to Vagamon (101 km, 3-4 hrs)",
              "Check-in at The Grassmere Resort",
              "Vagamon Meadows & Pine Forest",
              "Vagamon Adventure Park activities",
              "Jeep Safari – 3 viewpoints, 1 tunnel, 1 waterfall",
              "Campfire & Dinner at resort"
            ]
          },
          {
            day: 4,
            title: "Vagamon to Thekkady",
            description: "Wildlife and martial arts in the jungle.",
            activities: [
              "Drive to Thekkady (49 km, 2 hrs)",
              "Periyar Wildlife Sanctuary – Jungle Safari / Boat Ride",
              "Elephant Ride & Bathing Experience",
              "Kadathanadan Kalari – Martial Arts Show",
              "Overnight stay in Thekkady"
            ]
          },
          {
            day: 5,
            title: "Thekkady to Kochi – Departure",
            description: "Drive back to Kochi and head home.",
            activities: [
              "Drive to Kochi (154 km, 5 hrs)",
              "Drop at Airport / Railway Station"
            ]
          }
        ]
      },
      {
        id: "kerala-3d2n-munnar-kolukkumalai",
        duration: "3 Days 2 Nights (Munnar & Kolukkumalai Safari)",
        nights: 2,
        days: 3,
        price: 4500,
        image: "kerala_adventure_3.jpg",
        inclusions: [
          "Day 1 Hotel Accommodation at Munnar",
          "Day 2 Tent Stay at campsite",
          "Day 2 BBQ Dinner",
          "Day 2 & 3 Breakfast",
          "Day 2 Common Campfire",
          "Day 3 Jeep Safari to Kolukkumalai",
          "Private vehicle for entire tour",
          "Pickup & Drop at Kochi",
          "Petrol, Toll & Parking Fee"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Munnar Sightseeing",
            description: "Pickup from Kochi and explore Munnar's iconic sites.",
            activities: [
              "Pickup from Kochi Railway Station / Airport",
              "En route: Valara & Cheeyappara Waterfalls",
              "Check-in at Munnar Castle hotel",
              "Mattupetty Dam, Echo Point & Shooting Point",
              "Rose Garden, Botanical Garden & Elephant Point",
              "Overnight stay at Munnar"
            ]
          },
          {
            day: 2,
            title: "Suryanelli Camp & Sunset Trek",
            description: "Drive to campsite with scenic stops and a guided sunset trek.",
            activities: [
              "Checkout from hotel after breakfast",
              "En route: Idli Mountain View, Lockhart Gap, Periakanal Waterfalls & Anerangal Dam",
              "Check-in to campsite",
              "Evening tea & snacks",
              "Guided Sunset Trek",
              "Common Campfire & BBQ Dinner",
              "Overnight in tents"
            ]
          },
          {
            day: 3,
            title: "Kolukkumalai Sunrise Jeep Safari",
            description: "World's highest organic tea estate at sunrise.",
            activities: [
              "4 AM Jeep Safari to Kolukkumalai – world's highest organic tea estate",
              "Sunrise views from the peak",
              "Breakfast at campsite",
              "Checkout & departure"
            ]
          }
        ]
      },
      {
        id: "kerala-3d2n-varkala",
        duration: "3 Days 2 Nights (Varkala – Beaches & Cliffs)",
        nights: 2,
        days: 3,
        price: 4500,
        image: "kerala_adventure_4.jpg",
        inclusions: [
          "2 Nights Stay at Resort with Swimming Pool",
          "2 Breakfast",
          "Private vehicle for entire tour",
          "Pickup & Drop at Varkala Railway Station",
          "Petrol, Toll & Parking Fee"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Local Exploration",
            description: "Arrive at Varkala and explore the coastal and cultural gems.",
            activities: [
              "Pickup from Varkala Railway Station",
              "Jatayu Earth's Center – world's largest bird sculpture",
              "Mangrove Forest eco-trail",
              "Elephant Park – close encounter with elephants",
              "Check-in at resort & relax by the beach",
              "Overnight stay at Varkala"
            ]
          },
          {
            day: 2,
            title: "Backwaters, Beaches & Cliffs",
            description: "Island, aquarium, cliff views and a stunning sunset.",
            activities: [
              "Breakfast at resort",
              "Golden Island – serene backwater island by boat",
              "Varkala Aquarium",
              "Varkala Cliff – scenic views, cafés & shopping",
              "Black Beach – unique sand & stunning sunset",
              "Overnight stay at Varkala"
            ]
          },
          {
            day: 3,
            title: "Forts & Farewell",
            description: "Historic landmarks and departure.",
            activities: [
              "Breakfast & check-out",
              "Anchuthengu Fort – historic British-era fort by the sea",
              "Varkala Lighthouse – breathtaking views",
              "Shopping & local market exploration",
              "Drop at Varkala Railway Station"
            ]
          }
        ]
      },
      {
        id: "kerala-3d2n-vagamon",
        duration: "3 Days 2 Nights (Vagamon – Meadows & Adventure)",
        nights: 2,
        days: 3,
        price: 4500,
        image: "kerala_adventure_5.jpg",
        inclusions: [
          "Pickup & Drop at Kottayam Bus Stand / Railway Station",
          "3 Days Private Cab for Sightseeing",
          "Toll Fees, Fuel Charges & Parking Fees",
          "1 Night Accommodation in Resort with Swimming Pool at Vagamon",
          "1 Night Tent Stay at Vagamon",
          "Daily Breakfast & Dinner (2 Days)"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Vagamon",
            description: "Transfer to Vagamon and soak in the serene meadows.",
            activities: [
              "Pickup from Kottayam Railway Station",
              "Transfer to Vagamon",
              "Check-in at Green Palace Residency Resort",
              "Vagamon Meadows & Pine Forest",
              "Dinner & overnight stay at resort"
            ]
          },
          {
            day: 2,
            title: "Adventure Awaits!",
            description: "Full day of activities, viewpoints and campfire.",
            activities: [
              "Breakfast at resort",
              "Optional Jeep Safari (3-4 hrs)",
              "3 Stunning Viewpoints: Lemongrass View, Idukki Dam View, Ulupunni Peak",
              "Tunnel Exploration & Waterfall Bathing",
              "Vagamon Adventure Park",
              "Campfire (complimentary, weather dependent)",
              "Dinner & overnight stay at campsite"
            ]
          },
          {
            day: 3,
            title: "Spiritual Sites & Departure",
            description: "Visit sacred hills and return home.",
            activities: [
              "Breakfast at campsite",
              "Visit Kurisumala, Thangalpara & Murugan Mala",
              "Drop at Kottayam Railway Station"
            ]
          }
        ]
      },
      {
        id: "kerala-3d2n-wayanad",
        duration: "3 Days 2 Nights (Wayanad – Forests & Falls)",
        nights: 2,
        days: 3,
        price: 4500,
        image: "kerala_adventure_6.jpg",
        inclusions: [
          "Pickup & Drop at Kozhikode Bus Stand / Railway Station",
          "3 Days Private Cab for Sightseeing",
          "Toll Fees, Fuel Charges & Parking Fees",
          "1 Night Accommodation in Resort with Swimming Pool at Wayanad",
          "1 Night Hilltop Tent Stay at Wayanad",
          "Daily Breakfast & Dinner (2 Days)"
        ],
        itinerary: [
          {
            day: 1,
            title: "Nature's Welcome",
            description: "Arrive and immerse in the natural wonders of Wayanad.",
            activities: [
              "Pickup from Kozhikode Railway Station",
              "Thusharagiri Waterfalls",
              "Lakkidi Viewpoint – breathtaking valley views",
              "En Ooru Tribal Village – cultural immersion",
              "Pookode Lake",
              "Check-in at Besrauma Vythiri Resort",
              "Dinner & overnight stay in Wayanad"
            ]
          },
          {
            day: 2,
            title: "Explore & Experience",
            description: "Dams, caves, and a unique glass bridge adventure.",
            activities: [
              "Breakfast at resort",
              "Karapuzha Dam & Kanthanpara Waterfalls",
              "Edakkal Caves – ancient history walk",
              "900 Kandi Glass Bridge (Jeep charges extra)",
              "Check-in at campsite",
              "Campfire (weather permitting)",
              "Dinner & tent stay"
            ]
          },
          {
            day: 3,
            title: "The Grand Finale",
            description: "Sunrise, dams, lakes and waterfalls before departure.",
            activities: [
              "Sunrise view from campsite",
              "Breakfast & checkout",
              "Banasura Sagar Dam – India's largest earthen dam",
              "Karlad Lake",
              "Meenmutty Waterfalls & Tea Plantation visit",
              "Drop at Kozhikode Railway Station"
            ]
          }
        ]
      },
      {
        id: "kerala-5d4n-munnar-thekkady-alleppey",
        duration: "5 Days 4 Nights (Munnar, Thekkady & Alleppey)",
        nights: 4,
        days: 5,
        price: 4500,
        image: "kerala_main.jpg",
        inclusions: [
          "Pickup & Drop at Ernakulam Railway Station",
          "4 Breakfast, 1 Lunch & 1 Dinner",
          "5 Days private cab for entire tour",
          "3 Nights Hotel Accommodation at Munnar & Thekkady",
          "1 Night Boathouse Accommodation Alleppey"
        ],
        itinerary: [
          {
            day: 1,
            title: "Kochi to Munnar",
            description: "Scenic drive with waterfalls and tea gardens en route.",
            activities: [
              "Pickup from Ernakulam Railway Station / Cochin Airport",
              "Visit Cheeyappara & Valara Waterfalls en route",
              "Check-in at tea plantation resort (Munnar Castle / Cloud Castle)",
              "Visit Tea Museum & Pothamedu Viewpoint",
              "Dinner & overnight stay in Munnar"
            ]
          },
          {
            day: 2,
            title: "Munnar Sightseeing",
            description: "Explore the lush highlands of Munnar.",
            activities: [
              "Eravikulam National Park – Nilgiri Tahr spotting",
              "Mattupetty Dam & Echo Point",
              "Kundala Lake – Boating & Kayaking",
              "Evening leisure shopping",
              "Dinner & overnight stay in Munnar"
            ]
          },
          {
            day: 3,
            title: "Munnar to Thekkady",
            description: "Wildlife, spice gardens and a cultural martial arts show.",
            activities: [
              "Drive to Thekkady via Lockhart Gap Viewpoint",
              "Spice Plantation visit",
              "Periyar Wildlife Sanctuary – Jungle Safari / Boat Ride",
              "Elephant Ride & Bathing Experience",
              "Kadathanadan Kalari – Martial Arts Show",
              "Dinner & overnight stay in Thekkady"
            ]
          },
          {
            day: 4,
            title: "Thekkady to Alleppey – Houseboat",
            description: "Experience the magic of Kerala's iconic backwaters.",
            activities: [
              "Drive to Alleppey (140 km, 4 hrs)",
              "Check-in to traditional houseboat",
              "Backwater cruise through scenic canals",
              "Kerala-style meals onboard",
              "Sunset views from the boat",
              "Dinner & overnight stay on houseboat"
            ]
          },
          {
            day: 5,
            title: "Alleppey to Kochi – Departure",
            description: "Morning cruise and final transfer to Kochi.",
            activities: [
              "Morning backwater cruise",
              "Drive to Kochi (150 km, 4.5 hrs)",
              "Drop at Airport / Railway Station"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "andaman",
    name: "Andaman & Nicobar",
    country: "India",
    description: "A tropical paradise in the Bay of Bengal, Andaman & Nicobar Islands are famous for their pristine white sandy beaches, crystal-clear turquoise waters, and vibrant marine life. From the historic Cellular Jail to the world-renowned Radhanagar Beach, experience an unforgettable island getaway.",
    image: "andaman_main.jpg",
    video: "andaman_video.mp4",
    featured: true,
    whyVisit: [
      "Relax on Radhanagar Beach, rated as one of Asia's best beaches",
      "Explore the historic Cellular Jail and its moving Light & Sound Show",
      "Discover vibrant coral reefs and marine life at Elephant Beach",
      "Experience the unique rock formations of the Natural Bridge on Neil Island"
    ],
    adventureImages: [
      "andaman_adventure_1.jpg",
      "andaman_adventure_2.jpg",
      "andaman_adventure_3.jpg",
      "andaman_adventure_4.jpg",
      "andaman_adventure_5.jpg"
    ],
    packages: [
      {
        id: "andaman-5n6d",
        duration: "5 Nights 6 Days",
        nights: 5,
        days: 6,
        price: 22000,
        image: "andaman_adventure_1.jpg",
        inclusions: [
          "Pick up & Drop at Veer Savarkar International Airport",
          "Private luxury A/C car for transfers & sightseeing",
          "Accommodation: 02 nights Port Blair, 02 nights Havelock, 01 night Neil Island",
          "Daily Breakfast",
          "Private cruise transfers to Havelock & Neil (round trip)",
          "Entry permits, tickets, and boat transfers as per itinerary",
          "Hotel GST included",
          "Premium Package available at ₹25,000"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Port Blair City Tour",
            description: "Welcome to Andaman and explore the historic landmarks of Port Blair.",
            activities: [
              "Airport pickup and hotel transfer",
              "Visit Cellular Jail (Historic Monument)",
              "Relax at Corbyn's Cove Beach",
              "Light & Sound Show at Cellular Jail",
              "Overnight stay in Port Blair"
            ]
          },
          {
            day: 2,
            title: "Port Blair to Havelock Island",
            description: "Cruise to Havelock and visit the world-famous Radhanagar Beach.",
            activities: [
              "Transfer to harbor for cruise to Havelock",
              "Visit Kalapathar Beach (Golden sand & black rocks)",
              "Visit Radhanagar Beach (One of Asia's best beaches)",
              "Overnight stay in Havelock"
            ]
          },
          {
            day: 3,
            title: "Elephant Beach Excursion",
            description: "A day for snorkeling and underwater beauty at Elephant Beach.",
            activities: [
              "Speed boat to Elephant Beach",
              "Snorkeling with vibrant coral reefs",
              "Optional glass-bottom boat rides",
              "Rest of the day at leisure",
              "Overnight stay in Havelock"
            ]
          },
          {
            day: 4,
            title: "Havelock to Neil Island",
            description: "Transfer to Neil Island and witness a stunning sunset.",
            activities: [
              "Ferry to Neil Island (Shaheed Dweep)",
              "Visit Bharatpur Beach (Swimming & water activities)",
              "Visit Laxmanpur Beach (Sunset Point)",
              "Overnight stay in Neil Island"
            ]
          },
          {
            day: 5,
            title: "Neil Island to Port Blair",
            description: "Return to Port Blair and discover local culture and crafts.",
            activities: [
              "Visit Natural Bridge (Rock formation)",
              "Ferry back to Port Blair",
              "Visit Anthropological Museum",
              "Shopping at Sagarika Emporium",
              "Overnight stay in Port Blair"
            ]
          },
          {
            day: 6,
            title: "Departure",
            description: "Bid farewell to the islands.",
            activities: [
              "Hotel check-out",
              "Transfer to Port Blair Airport"
            ]
          }
        ]
      },
      {
        id: "andaman-3n4d",
        duration: "3 Nights 4 Days",
        nights: 3,
        days: 4,
        price: 15000,
        image: "andaman_adventure_2.jpg",
        inclusions: [
          "Pick up & Drop at Veer Savarkar International Airport",
          "Private A/C car for transfers & sightseeing",
          "Accommodation: 01 night Port Blair, 02 nights Havelock Island",
          "Daily Breakfast",
          "Private cruise transfers to Havelock (round trip)",
          "Entry permits, tickets, and boat transfers as per itinerary",
          "Hotel GST included",
          "Premium Package available at ₹18,000"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Transfer to Havelock",
            description: "Arrive at Port Blair and immediately cruise to the beautiful Havelock Island.",
            activities: [
              "Airport pickup and transfer to harbor",
              "Board cruise to Havelock Island",
              "Visit Radhanagar Beach (White sand & crystal waters)",
              "Overnight stay at Havelock Island"
            ]
          },
          {
            day: 2,
            title: "Elephant Beach Excursion",
            description: "Explore the snorkeling paradise of Elephant Beach.",
            activities: [
              "Speed boat to Elephant Beach",
              "Swimming and snorkeling at the pristine beach",
              "Evening at leisure",
              "Overnight stay at Havelock Island"
            ]
          },
          {
            day: 3,
            title: "Havelock to Port Blair City Tour",
            description: "Return to the capital and visit the historic Cellular Jail.",
            activities: [
              "Cruise back to Port Blair",
              "Visit Cellular Jail & Anthropological Museum",
              "Light & Sound Show at Cellular Jail",
              "Shopping at Sagarika Emporium",
              "Overnight stay at Port Blair"
            ]
          },
          {
            day: 4,
            title: "Departure",
            description: "Final sunrise and airport transfer.",
            activities: [
              "Breakfast and check-out",
              "Transfer to Port Blair Airport / Harbour"
            ]
          }
        ]
      },
      {
        id: "andaman-4n5d",
        duration: "4 Nights 5 Days",
        nights: 4,
        days: 5,
        price: 20000,
        image: "andaman_adventure_3.jpg",
        inclusions: [
          "Pick up & Drop at Veer Savarkar International Airport",
          "Private A/C car for transfers & sightseeing",
          "Accommodation: 01 night Port Blair, 02 nights Havelock, 01 night Neil Island",
          "Daily Breakfast (except day 1)",
          "Private cruise transfers (Port Blair to Havelock to Neil)",
          "Entry permits, tickets, and boat transfers as per itinerary",
          "Hotel GST included",
          "Premium Package available at ₹23,000"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Port Blair to Havelock",
            description: "Welcome to Andaman and transfer to the stunning Havelock Island.",
            activities: [
              "Airport pickup and escort to harbor",
              "Cruise to Havelock Island",
              "Visit Radhanagar Beach (Grade A beach)",
              "Overnight stay at Havelock"
            ]
          },
          {
            day: 2,
            title: "Elephant Beach",
            description: "A day at the most visited snorkeling destination.",
            activities: [
              "Speed boat to Elephant Beach",
              "Secluded beach experience with clear blue waters",
              "Complimentary snorkeling session",
              "Overnight stay at Havelock"
            ]
          },
          {
            day: 3,
            title: "Havelock to Neil Island",
            description: "Transfer to the 'vegetable bowl' of Andaman.",
            activities: [
              "Ferry to Neil Island",
              "Visit Bharatpur Beach & Laxmanpur Beach",
              "Enjoy amazing sunset view",
              "Overnight stay at Neil Island"
            ]
          },
          {
            day: 4,
            title: "Neil to Port Blair & City Tour",
            description: "Visit the Natural Bridge and historical monuments of Port Blair.",
            activities: [
              "Visit Natural Bridge (Rock formation)",
              "Return journey to Port Blair by boat",
              "Visit Cellular Jail & Anthropological Museum",
              "Light and Sound Show at Cellular Jail",
              "Shopping at Sagarika Emporium",
              "Overnight stay at Port Blair"
            ]
          },
          {
            day: 5,
            title: "Departure",
            description: "Depart with wonderful and sweet memories.",
            activities: [
              "Breakfast and check-out",
              "Transfer to Port Blair Airport / Harbour"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    country: "India",
    description: "The land of eternal snows, Himachal Pradesh is a paradise for nature lovers and adventure seekers alike. From the colonial charm of Shimla to the adventurous valleys of Manali, experience the Himalayas in all their glory.",
    image: "himachal_main.webp",
    video: "himachal_video.mp4",
    featured: true,
    whyVisit: [
      "Explore the scenic ridge and colonial architecture of Shimla",
      "Adventure activities like paragliding and river rafting in Manali",
      "Visit the spiritual abode of Dalai Lama in Dharamshala",
      "Witness the stunning beauty of Solang Valley and Rohtang Pass"
    ],
    adventureImages: [
      "him_adventure_1.jpg",
      "him_adventure_2.jpg",
      "him_adventure_3.jpg",
      "him_adventure_4.jpg",
      "him_adventure_5.jpg"
    ],
    packages: [
      {
        id: "himachal-5n6d-shimla-manali",
        duration: "5 Nights 6 Days (Shimla & Manali)",
        nights: 5,
        days: 6,
        price: 18500,
        image: "him_adventure_1.jpg",
        inclusions: [
          "5 Nights stay in comfortable hotels",
          "Daily Breakfast and Dinner",
          "Private cab for all transfers and sightseeing",
          "Sightseeing of Shimla, Kufri, Manali, and Solang Valley",
          "Taxes and driver allowances"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Delhi | Transfer to Shimla",
            description: "Journey from the plains to the queen of hills.",
            activities: [
              "Pickup from Delhi Airport/Station",
              "Drive to Shimla (approx. 8 hours)",
              "Check-in at Shimla hotel",
              "Evening at leisure on Mall Road",
              "Overnight stay in Shimla"
            ]
          },
          {
            day: 2,
            title: "Shimla & Kufri Exploration",
            description: "Discover the scenic beauty and colonial heritage.",
            activities: [
              "Visit Kufri - Himalayan Nature Park & Fun World",
              "Visit Jakhoo Temple and Ridge",
              "Walk through Christ Church and Gaiety Theatre",
              "Shopping at Lakkar Bazaar",
              "Overnight stay in Shimla"
            ]
          },
          {
            day: 3,
            title: "Shimla to Manali via Kullu",
            description: "A scenic drive along the Beas River.",
            activities: [
              "Breakfast and checkout from Shimla",
              "Drive to Manali (approx. 7-8 hours)",
              "Enroute visit Kullu Valley and Shawl Factory",
              "Enjoy river rafting in Beas River (optional)",
              "Overnight stay in Manali"
            ]
          },
          {
            day: 4,
            title: "Manali Local Sightseeing",
            description: "Explore the cultural and natural highlights of Manali.",
            activities: [
              "Visit Hadimba Devi Temple",
              "Explore Vashisht Village and hot springs",
              "Visit Tibetan Monastery",
              "Evening stroll at Mall Road and Old Manali",
              "Overnight stay in Manali"
            ]
          },
          {
            day: 5,
            title: "Solang Valley / Snow Point",
            description: "Adventure and snow in the high mountains.",
            activities: [
              "Visit Solang Valley for paragliding and zorbing",
              "Visit Atal Tunnel and Sissu (subject to permit/weather)",
              "Enjoy snow activities",
              "Return to Manali",
              "Overnight stay in Manali"
            ]
          },
          {
            day: 6,
            title: "Manali to Delhi | Departure",
            description: "Bid farewell to the mountains.",
            activities: [
              "Breakfast and checkout",
              "Drive back to Delhi",
              "Drop at Delhi Airport/Station for departure"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "kashmir",
    name: "Kashmir",
    country: "India",
    description: "Experience the 'Paradise on Earth' with its serene lakes, snow-capped mountains, and lush Mughal gardens. From the tranquil Dal Lake to the adventurous slopes of Gulmarg, Kashmir offers a soul-stirring escape into nature.",
    image: "kashmir_main.jpg",
    video: "kashmir_video.mp4",
    featured: true,
    whyVisit: [
      "Stay in traditional houseboats on the world-famous Dal Lake",
      "Witness the stunning beauty of Sonamarg and the Thajiwas Glacier",
      "Explore the vibrant Mughal Gardens and historical landmarks of Srinagar",
      "Enjoy the thrill of the Gulmarg Gondola, one of the highest in the world"
    ],
    adventureImages: [
      "kas_adventure_1.jpg",
      "kas_adventure_2.jpg",
      "kas_adventure_3.jpg",
      "kas_adventure_4.jpg",
      "kas_adventure_5.jpg",
      "kas_adventure_6.jpg"
    ],
    packages: [
      {
        id: "kashmir-4n5d-basic",
        duration: "4 Nights 5 Days (Basic)",
        nights: 4,
        days: 5,
        price: 16000,
        image: "kas_adventure_1.jpg",
        inclusions: [
          "4 Nights Stay (City Residency / Sri Mazda / Country Side)",
          "Daily Breakfast & Dinner",
          "Airport Pickup & Drop",
          "5 Days Individual Cab for Sightseeing",
          "1 hr Complimentary Shikara Ride",
          "24/7 Ground Support"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival Srinagar | Local Sightseeing",
            description: "Welcome to Srinagar! Begin your journey with a tour of the famous Mughal Gardens.",
            activities: [
              "Airport Pickup and transfer to hotel",
              "Visit Shankaracharya Temple overlooking Dal Lake",
              "Explore Mughal Gardens: Nishat Garden & Shalimar Garden",
              "Visit Pari Mahal and Chashme Shahi",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 2,
            title: "Sonamarg - The Meadow of Gold",
            description: "Explore the stunning landscapes of Sonamarg and the Thajiwas Glacier.",
            activities: [
              "Drive to Sonamarg (approx. 3 hours)",
              "Visit Thajiwas Glacier (Pony/Taxi ride optional)",
              "Evening return to Srinagar",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 3,
            title: "Pahalgam - The Valley of Shepherds",
            description: "Visit the film-famous valleys of Pahalgam and the saffron fields.",
            activities: [
              "Enroute visit Saffron Fields and Cricket Bat Factories",
              "Explore Aru Valley, Betaab Valley, and Chandanwari",
              "Visit Baisaran Valley (Mini Switzerland) by pony",
              "Evening at leisure and overnight stay in Srinagar"
            ]
          },
          {
            day: 4,
            title: "Gulmarg - The Meadow of Flowers",
            description: "A day for snow and the world-famous Gondola ride.",
            activities: [
              "Full day trip to Gulmarg",
              "Optional Gondola ride (highest golf course)",
              "Explore the snowy slopes and ski resort",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 5,
            title: "Shikara Ride & Departure",
            description: "Final sunrise on Dal Lake before you head home.",
            activities: [
              "1 hr Shikara Ride on Dal Lake (Floating Gardens & Inner Markets)",
              "Scenic view of Zabarwan Mountains",
              "Transfer to Srinagar Airport for departure"
            ]
          }
        ]
      },
      {
        id: "kashmir-4n5d-economy",
        duration: "4 Nights 5 Days (Economy)",
        nights: 4,
        days: 5,
        price: 18500,
        image: "kas_adventure_2.jpg",
        inclusions: [
          "4 Nights Stay (Shahzir villa / Palazzo Zaffrino / Siddiq palace deluxe)",
          "Daily Breakfast & Dinner",
          "Airport Pickup & Drop",
          "5 Days Individual Cab for Sightseeing",
          "1 hr Complimentary Shikara Ride",
          "24/7 Ground Support"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival Srinagar | Local Sightseeing",
            description: "Welcome to Srinagar! Begin your journey with a tour of the famous Mughal Gardens.",
            activities: [
              "Airport Pickup and transfer to hotel",
              "Visit Shankaracharya Temple overlooking Dal Lake",
              "Explore Mughal Gardens: Nishat Garden & Shalimar Garden",
              "Visit Pari Mahal and Chashme Shahi",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 2,
            title: "Sonamarg - The Meadow of Gold",
            description: "Explore the stunning landscapes of Sonamarg and the Thajiwas Glacier.",
            activities: [
              "Drive to Sonamarg (approx. 3 hours)",
              "Visit Thajiwas Glacier (Pony/Taxi ride optional)",
              "Evening return to Srinagar",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 3,
            title: "Pahalgam - The Valley of Shepherds",
            description: "Visit the film-famous valleys of Pahalgam and the saffron fields.",
            activities: [
              "Enroute visit Saffron Fields and Cricket Bat Factories",
              "Explore Aru Valley, Betaab Valley, and Chandanwari",
              "Visit Baisaran Valley (Mini Switzerland) by pony",
              "Evening at leisure and overnight stay in Srinagar"
            ]
          },
          {
            day: 4,
            title: "Gulmarg - The Meadow of Flowers",
            description: "A day for snow and the world-famous Gondola ride.",
            activities: [
              "Full day trip to Gulmarg",
              "Optional Gondola ride (highest golf course)",
              "Explore the snowy slopes and ski resort",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 5,
            title: "Shikara Ride & Departure",
            description: "Final sunrise on Dal Lake before you head home.",
            activities: [
              "1 hr Shikara Ride on Dal Lake (Floating Gardens & Inner Markets)",
              "Scenic view of Zabarwan Mountains",
              "Transfer to Srinagar Airport for departure"
            ]
          }
        ]
      },
      {
        id: "kashmir-4n5d-premium",
        duration: "4 Nights 5 Days (Premium)",
        nights: 4,
        days: 5,
        price: 20000,
        image: "kas_adventure_3.jpg",
        inclusions: [
          "4 Nights Stay (Siddiq palace Super deluxe / Sahara grand hills / GM Castle)",
          "Daily Breakfast & Dinner",
          "Airport Pickup & Drop",
          "5 Days Individual Cab for Sightseeing",
          "1 hr Complimentary Shikara Ride",
          "24/7 Ground Support"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival Srinagar | Local Sightseeing",
            description: "Welcome to Srinagar! Begin your journey with a tour of the famous Mughal Gardens.",
            activities: [
              "Airport Pickup and transfer to hotel",
              "Visit Shankaracharya Temple overlooking Dal Lake",
              "Explore Mughal Gardens: Nishat Garden & Shalimar Garden",
              "Visit Pari Mahal and Chashme Shahi",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 2,
            title: "Sonamarg - The Meadow of Gold",
            description: "Explore the stunning landscapes of Sonamarg and the Thajiwas Glacier.",
            activities: [
              "Drive to Sonamarg (approx. 3 hours)",
              "Visit Thajiwas Glacier (Pony/Taxi ride optional)",
              "Evening return to Srinagar",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 3,
            title: "Pahalgam - The Valley of Shepherds",
            description: "Visit the film-famous valleys of Pahalgam and the saffron fields.",
            activities: [
              "Enroute visit Saffron Fields and Cricket Bat Factories",
              "Explore Aru Valley, Betaab Valley, and Chandanwari",
              "Visit Baisaran Valley (Mini Switzerland) by pony",
              "Evening at leisure and overnight stay in Srinagar"
            ]
          },
          {
            day: 4,
            title: "Gulmarg - The Meadow of Flowers",
            description: "A day for snow and the world-famous Gondola ride.",
            activities: [
              "Full day trip to Gulmarg",
              "Optional Gondola ride (highest golf course)",
              "Explore the snowy slopes and ski resort",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 5,
            title: "Shikara Ride & Departure",
            description: "Final sunrise on Dal Lake before you head home.",
            activities: [
              "1 hr Shikara Ride on Dal Lake (Floating Gardens & Inner Markets)",
              "Scenic view of Zabarwan Mountains",
              "Transfer to Srinagar Airport for departure"
            ]
          }
        ]
      },
      {
        id: "kashmir-4n5d-luxury",
        duration: "4 Nights 5 Days (Luxury)",
        nights: 4,
        days: 5,
        price: 23000,
        image: "kas_adventure_4.jpg",
        inclusions: [
          "4 Nights Stay (Stay villa / Karam gold / The Azara)",
          "Daily Breakfast & Dinner",
          "Airport Pickup & Drop",
          "5 Days Individual Cab for Sightseeing",
          "1 hr Complimentary Shikara Ride",
          "24/7 Ground Support"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival Srinagar | Local Sightseeing",
            description: "Welcome to Srinagar! Begin your journey with a tour of the famous Mughal Gardens.",
            activities: [
              "Airport Pickup and transfer to hotel",
              "Visit Shankaracharya Temple overlooking Dal Lake",
              "Explore Mughal Gardens: Nishat Garden & Shalimar Garden",
              "Visit Pari Mahal and Chashme Shahi",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 2,
            title: "Sonamarg - The Meadow of Gold",
            description: "Explore the stunning landscapes of Sonamarg and the Thajiwas Glacier.",
            activities: [
              "Drive to Sonamarg (approx. 3 hours)",
              "Visit Thajiwas Glacier (Pony/Taxi ride optional)",
              "Evening return to Srinagar",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 3,
            title: "Pahalgam - The Valley of Shepherds",
            description: "Visit the film-famous valleys of Pahalgam and the saffron fields.",
            activities: [
              "Enroute visit Saffron Fields and Cricket Bat Factories",
              "Explore Aru Valley, Betaab Valley, and Chandanwari",
              "Visit Baisaran Valley (Mini Switzerland) by pony",
              "Evening at leisure and overnight stay in Srinagar"
            ]
          },
          {
            day: 4,
            title: "Gulmarg - The Meadow of Flowers",
            description: "A day for snow and the world-famous Gondola ride.",
            activities: [
              "Full day trip to Gulmarg",
              "Optional Gondola ride (highest golf course)",
              "Explore the snowy slopes and ski resort",
              "Overnight stay in Srinagar"
            ]
          },
          {
            day: 5,
            title: "Shikara Ride & Departure",
            description: "Final sunrise on Dal Lake before you head home.",
            activities: [
              "1 hr Shikara Ride on Dal Lake (Floating Gardens & Inner Markets)",
              "Scenic view of Zabarwan Mountains",
              "Transfer to Srinagar Airport for departure"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    description: "The land of sun, sand, and serenity. Goa is a tropical paradise where vibrant nightlife meets tranquil beaches and colonial history. Experience the thrill of North Goa and the peaceful soul of South Goa.",
    image: "goa_main.jpg",
    video: "goa_video.mp4",
    featured: true,
    whyVisit: [
      "Relax on the pristine beaches of Candolim, Calangute, and Baga",
      "Explore the historic Old Goa Churches and colonial heritage",
      "Enjoy the vibrant nightlife and sunset views at Chapora Fort",
      "Witness the stunning marine life with dolphin spotting trips"
    ],
    adventureImages: [
      "goa_adventure_1.jpg",
      "goa_adventure_2.jpg",
      "goa_adventure_3.jpg",
      "goa_adventure_4.jpg"
    ],
    packages: [
      {
        id: "goa-2n3d-basic",
        duration: "2 Nights 3 Days (North & South Goa)",
        nights: 2,
        days: 3,
        price: 9500,
        image: "goa_adventure_1.jpg",
        inclusions: [
          "2 Nights Stay in 3★ AC Resort with Swimming Pool",
          "Daily Breakfast",
          "Private Vehicle for North & South Goa Sightseeing",
          "Pickup & Drop by Private Car (Airport/Railway Station)",
          "24/7 Support from Local Team"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival + North Goa Sightseeing",
            description: "Welcome to Goa! Kick off your trip with the vibrant beaches and forts of the North.",
            activities: [
              "Airport Pickup and transfer to hotel",
              "Visit Fort Aguada and Candolim Beach",
              "Explore Calangute, Baga, and Anjuna Beach",
              "Sunset views at Vagator Beach & Chapora Fort",
              "Overnight stay at Resort"
            ]
          },
          {
            day: 2,
            title: "South Goa Serenity",
            description: "Discover the spiritual and historical heart of Goa.",
            activities: [
              "Visit Old Goa Churches and Wax Museum",
              "Explore Miramar Beach and Dona Paula Jetty",
              "Visit Mangueshi & Shantadurga Temples",
              "Optional Mandovi River Cruise (Evening)",
              "Overnight stay at Resort"
            ]
          },
          {
            day: 3,
            title: "Leisure & Departure",
            description: "Enjoy your final morning in paradise.",
            activities: [
              "Breakfast and morning at leisure",
              "Transfer to Goa International Airport for departure"
            ]
          }
        ]
      },
      {
        id: "goa-3n4d-premium",
        duration: "3 Nights 4 Days (Extended Goa Experience)",
        nights: 3,
        days: 4,
        price: 14000,
        image: "goa_adventure_2.jpg",
        inclusions: [
          "3 Nights Accommodation in 3 Star AC Resort with Swimming Pool",
          "Daily Breakfast",
          "Pickup & Drop by Private Car (Airport/Railway Station)",
          "Cab for 1 Day North Goa & 1 Day South Goa Sightseeing",
          "24/7 Guidance by Local Team"
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Leisure",
            description: "Arrive in Goa and settle into your resort for a relaxing start.",
            activities: [
              "Airport Pickup and check-in",
              "Evening at leisure to explore nearby beaches",
              "Overnight stay at Resort"
            ]
          },
          {
            day: 2,
            title: "North Goa Highlights",
            description: "Dolphins, forts, and the best of North Goa's coastline.",
            activities: [
              "Dolphin Trip (optional)",
              "Visit Fort Aguada, Candolim, and Calangute Beach",
              "Explore Baga and Anjuna Beach",
              "Vagator Beach and Chapora Fort",
              "Overnight stay at Resort"
            ]
          },
          {
            day: 3,
            title: "South Goa Cultural Tour",
            description: "Churches, temples, and the scenic Mandovi river.",
            activities: [
              "Tour of Old Goa Churches and Wax Museum",
              "Visit Miramar Beach and Dona Paula Jetty",
              "Visit Sahakari Spice Farm and Mangueshi Temple",
              "Panjim Church and Local Market visit",
              "Evening Boat Cruise at Mandovi River",
              "Overnight stay at Resort"
            ]
          },
          {
            day: 4,
            title: "Departure",
            description: "Final morning for last-minute shopping or beach relaxation.",
            activities: [
              "Breakfast and morning leisure",
              "Drop at Goa Airport for departure"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "karnataka",
    name: "Karnataka",
    country: "India",
    description: "A land of diverse landscapes and rich heritage. From the royal palaces of Mysore to the misty hills of Coorg, Karnataka offers a perfect blend of culture, nature, and adventure.",
    image: "kar_main.jpg",
    video: "kar_video.mp4",
    featured: true,
    whyVisit: [
      "Explore the majestic Mysore Palace and its royal heritage",
      "Relax in the misty coffee estates of Coorg",
      "Visit the serene Namdroling Monastery (Golden Temple)",
      "Interact with elephants at Dubare Elephant Camp"
    ],
    adventureImages: [
      "kar_adventure_1.jpg",
      "kar_adventure_2.jpg",
      "kar_adventure_3.jpg",
      "kar_adventure_4.jpg",
      "kar_adventure_5.jpg",
      "kar_adventure_6.jpg"
    ],
    packages: [
      {
        id: "kar-2n3d-coorg",
        duration: "2 Nights 3 Days (Mysuru & Coorg)",
        nights: 2,
        days: 3,
        price: 6500,
        image: "kar_adventure_1.jpg",
        inclusions: [
          "2 Nights stay at Coorg Misty Garden",
          "Daily Breakfasts",
          "Private vehicle for 3 days sightseeing",
          "Pickup & Drop from Mysore Railway Station",
          "24/7 Support from Local Team"
        ],
        itinerary: [
          {
            day: 1,
            title: "Mysuru to Coorg | Arrival",
            description: "Journey from the royal city of Mysore to the misty hills of Coorg.",
            activities: [
              "Pickup from Mysuru and drive to Coorg",
              "Visit Golden Temple (Namdroling Monastery)",
              "Walk through Nisargadhama bamboo groves",
              "Experience Dubare Elephant Camp",
              "Sunset at Harangi Dam",
              "Overnight stay in Coorg"
            ]
          },
          {
            day: 2,
            title: "Coorg Sightseeing",
            description: "Explore the natural and cultural highlights of Coorg.",
            activities: [
              "Trek to Abbey Falls",
              "Visit Coorg Museum",
              "Sunset at Raja's Seat",
              "Explore Omkareshwara Temple",
              "Overnight stay in Coorg"
            ]
          },
          {
            day: 3,
            title: "Mysore Tour | Departure",
            description: "Final day exploring the grandeur of Mysore before departure.",
            activities: [
              "Breakfast and check-out from Coorg",
              "Tour the majestic Mysore Palace",
              "Explore Mysore Zoo",
              "Seek blessings at Chamundi Hills Temple",
              "Drop-off at Mysore Railway Station"
            ]
          }
        ]
      }
    ]
  }
];
