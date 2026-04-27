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
    description: "A beautiful fusion of modern icons and natural wonders ΓÇö from the Petronas Twin Towers to the pristine beaches of Langkawi and the cool heights of Genting.",
    image: "malaysia_main_new.jpg",
    video: "malaysia_video_final.mp4",
    featured: true,
    whyVisit: [
      "Soar above rainforests on the Langkawi Cable Car & Sky Bridge",
      "Explore the iconic Batu Caves and Genting Highlands",
      "Capture the stunning architecture of Kuala Lumpur and Putrajaya",
      "Relax on the turquoise waters of Pulau Dayang Bunting"
    ],
    adventureImages: [
      "mal_adv_1.jpg",
      "mal_adv_2.jpg",
      "mal_adv_3.jpg",
      "mal_adv_4.jpg",
      "mal_adv_5.jpg"
    ],
    packages: [
      {
        id: "malaysia-4n5d",
        duration: "4 Nights 5 Days (Langkawi & KL)",
        nights: 4,
        days: 5,
        price: 22999,
        image: "mal_adv_3.jpg",
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
        image: "mal_adv_4.jpg",
        inclusions: [
          "3 Nights Accommodation (3Γÿà with breakfast)",
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
            description: "Hills and culture ΓÇö the perfect KL day trip.",
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
      "thailand_adv_1.jpg",
      "thailand_adv_2.jpg",
      "thailand_adv_3.jpg",
      "thailand_adv_4.jpg",
      "thailand_adv_5.jpg"
    ],
    packages: [
      {
        id: "thailand-3n4d",
        duration: "3 Nights 4 Days (Pattaya & Bangkok)",
        nights: 3,
        days: 4,
        price: 15999,
        image: "thailand_adv_4.jpg",
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
        image: "thailand_adv_5.jpg",
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
        price: 24999,
        image: "thailand_adv_1.jpg",
        inclusions: [
          "4 Nights Hotel Accommodation (3Γÿà/4Γÿà options)",
          "Island Tours on SIC (Phi Phi, Khai, 4-Island)",
          "All transfers (Private from Airport, Shared for Tours)",
          "Daily Breakfast",
          "Indian Lunch on Day 2 & Day 4",
          "Phuket & Krabi City Tours",
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
              "Buffet Lunch Included"
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
    description: "The island of the gods ΓÇö where sacred temples, emerald rice terraces, and golden beaches create a mystical paradise. Experience the spiritual heart of Ubud and the vibrant sunsets of Kuta.",
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
      "bali_adv_1.jpg",
      "bali_adv_2.jpg",
      "bali_adv_3.jpg",
      "bali_adv_4.jpg"
    ],
    packages: [
      {
        id: "bali-4n5d",
        duration: "4 Nights 5 Days (Leisure & Nature)",
        nights: 4,
        days: 5,
        price: 25000,
        image: "bali_adv_4.jpg",
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
        image: "bali_adv_1.jpg",
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
        image: "bali_adv_3.jpg",
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
        image: "vietnam_new.jpg",
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
    description: "A futuristic metropolis where luxury meets tradition ΓÇö from the soaring Burj Khalifa to golden desert dunes. Dubai offers world-class dining, iconic attractions, and an experience unlike any other.",
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
      "dubai_adv_1.jpg",
      "dubai_adv_2.jpg",
      "dubai_adv_3.jpg",
      "dubai_adv_4.jpg",
      "dubai_adv_5.jpg"
    ],
    packages: [
      {
        id: "dubai-3n4d",
        duration: "3 Nights 4 Days",
        nights: 3,
        days: 4,
        price: 35000,
        image: "dubai_adv_4.jpg",
        inclusions: [
          "Airport Pickup & Drop",
          "3 Nights at 3Γÿà Hotel with Daily Buffet Breakfast",
          "Dhow Dinner Cruise at Creek",
          "Dubai City Tour",
          "Desert Safari with BBQ Dinner & Entertainment",
          "Burj Khalifa ΓÇö At The Top",
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
              "Visit Burj Khalifa ΓÇö At the Top (observation deck)",
              "Explore Dubai Mall ΓÇö world's biggest man-made shopping structure",
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
        image: "dubai_adv_5.jpg",
        inclusions: [
          "Airport Pickup & Drop (Private Transfers)",
          "4 Nights at Le Wana 3Γÿà Hotel (Bed & Breakfast)",
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
            description: "Discover the best of modern Dubai ΓÇö from heritage to iconic towers.",
            activities: [
              "Half Day Dubai City Tour covering key landmarks",
              "Visit Dubai Mall ΓÇö one of the world's largest malls",
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
            description: "A day of wonder ΓÇö from futuristic technology to breathtaking floral displays.",
            activities: [
              "Visit Museum of the Future ΓÇö an architectural marvel",
              "Explore Miracle Garden ΓÇö world's largest natural flower garden",
              "Evening at Global Village ΓÇö multicultural shopping & entertainment"
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
        image: "dubai_adv_1.jpg",
        inclusions: [
          "Airport Pickup & Drop (Private Transfers)",
          "5 Nights at Citymax Bur Dubai ΓÇö Standard Room (Bed & Breakfast)",
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
              "Miracle Garden ΓÇö world's largest natural flower garden",
              "Global Village ΓÇö multicultural shopping & entertainment hub",
              "Evening stroll and leisure"
            ]
          },
          {
            day: 4,
            title: "Dubai Frame + Desert Safari",
            description: "Frame the city and conquer the dunes ΓÇö an action-packed day.",
            activities: [
              "Dubai Frame ΓÇö visit both the old and new Dubai from a giant picture frame",
              "Afternoon Desert Safari with dune bashing",
              "BBQ dinner with Tanoura dance, horse dance, fire dance & belly dance"
            ]
          },
          {
            day: 5,
            title: "Museum of the Future + Dubai Dolphinarium",
            description: "Explore futuristic innovation and marvel at aquatic acrobatics.",
            activities: [
              "Museum of the Future ΓÇö 2-way private transfer",
              "Dubai Dolphinarium ΓÇö dolphin and seal show (shared transfer)",
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
      "mald_adv_1.jpg",
      "mald_adv_2.jpg",
      "mald_adv_3.jpg",
      "mald_adv_4.jpg"
    ],
    packages: [
      {
        id: "maldives-3n4d",
        duration: "3 Nights 4 Days (Maafushi Island)",
        nights: 3,
        days: 4,
        price: 34000,
        image: "mald_adv_2.jpg",
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
    description: "The Garden City ΓÇö where futuristic architecture meets lush nature. Experience the skyline from Marina Bay Sands, explore the magical Gardens by the Bay, and enjoy the wildlife at the world's first Night Safari.",
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
      "sing_adv_1.jpg",
      "sing_adv_2.jpg",
      "sing_adv_3.jpg",
      "sing_adv_4.jpg",
      "sing_adv_5.jpg"
    ],
    packages: [
      {
        id: "singapore-3n4d",
        duration: "3 Nights 4 Days (City & Wildlife)",
        nights: 3,
        days: 4,
        price: 38000,
        image: "sing_adv_2.jpg",
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
        image: "meghalaya_new.jpg",
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
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    description: "The Pearl of the Indian Ocean ΓÇö a land of ancient temples, lush tea plantations, and golden beaches. Experience the history of Kandy, the vibrant streets of Colombo, and the coastal beauty of Bentota.",
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
      "sl_adv_1.jpg",
      "sl_adv_2.jpg",
      "sl_adv_3.jpg",
      "sl_adv_4.jpg"
    ],
    packages: [
      {
        id: "sl-3n4d",
        duration: "3 Nights 4 Days (Bentota & Colombo)",
        nights: 3,
        days: 4,
        price: 22000,
        image: "sl_adv_3.jpg",
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
        image: "sl_adv_4.jpg",
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
  }
];
