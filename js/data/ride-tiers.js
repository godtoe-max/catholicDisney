// Catholic Disney: Attraction Tier Dictionary & Capacity Matrix
// Based on the A-through-E Ticket Classification & TouringPlans Historical Data

export const RIDE_TIERS = {
  // MAGIC KINGDOM (Park ID: 6)
  129: { id: 129, name: "Seven Dwarfs Mine Train", parkId: 6, land: "Fantasyland", tier: "E", ratio: 1.00, pph: 1500, baseWait: 85, nearbyNook: "Cinderella Wishing Well Alcove" },
  138: { id: 138, name: "Space Mountain", parkId: 6, land: "Tomorrowland", tier: "E", ratio: 0.90, pph: 1600, baseWait: 65, nearbyNook: "Tomorrowland Water Terrace Path" },
  130: { id: 130, name: "Big Thunder Mountain Railroad", parkId: 6, land: "Frontierland", tier: "E", ratio: 0.85, pph: 1800, baseWait: 55, nearbyNook: "Tom Sawyer Island Quiet Gazebos" },
  15291: { id: 15291, name: "TRON Lightcycle / Run", parkId: 6, land: "Tomorrowland", tier: "E", ratio: 1.00, pph: 1600, baseWait: 75, nearbyNook: "Tomorrowland Water Terrace Path" },
  136: { id: 136, name: "Peter Pan's Flight", parkId: 6, land: "Fantasyland", tier: "E-ANOMALY", ratio: 0.85, pph: 800, baseWait: 68, nearbyNook: "Cinderella Wishing Well Alcove" },
  140: { id: 140, name: "The Haunted Mansion", parkId: 6, land: "Liberty Square", tier: "D", ratio: 0.60, pph: 2600, baseWait: 48, nearbyNook: "Liberty Square Quiet Courtyard & Scripture Bell" },
  137: { id: 137, name: "Pirates of the Caribbean", parkId: 6, land: "Adventureland", tier: "D", ratio: 0.55, pph: 3000, baseWait: 42, nearbyNook: "Caribbean Plaza Shaded Veranda" },
  134: { id: 134, name: "Jungle Cruise", parkId: 6, land: "Adventureland", tier: "D", ratio: 0.65, pph: 1800, baseWait: 52, nearbyNook: "Swiss Family Shaded Benches" },
  131: { id: 131, name: "Buzz Lightyear's Space Ranger Spin", parkId: 6, land: "Tomorrowland", tier: "C", ratio: 0.40, pph: 2000, baseWait: 32, nearbyNook: "Tomorrowland Terrace Benches" },
  142: { id: 142, name: "The Many Adventures of Winnie the Pooh", parkId: 6, land: "Fantasyland", tier: "C", ratio: 0.35, pph: 1400, baseWait: 30, nearbyNook: "Cinderella Wishing Well" },
  133: { id: 133, name: "it's a small world", parkId: 6, land: "Fantasyland", tier: "C", ratio: 0.30, pph: 3000, baseWait: 22, nearbyNook: "Liberty Square Courtyard" },
  127: { id: 127, name: "Under the Sea - Journey of The Little Mermaid", parkId: 6, land: "Fantasyland", tier: "C", ratio: 0.28, pph: 2400, baseWait: 20, nearbyNook: "Prince Eric Castle Wall Walk" },
  132: { id: 132, name: "Dumbo the Flying Elephant", parkId: 6, land: "Fantasyland", tier: "B", ratio: 0.22, pph: 1000, baseWait: 18, nearbyNook: "Storybook Circus Tent Benches" },
  135: { id: 135, name: "Mad Tea Party", parkId: 6, land: "Fantasyland", tier: "B", ratio: 0.18, pph: 1200, baseWait: 14, nearbyNook: "Cheshire Cafe Trellis" },
  141: { id: 141, name: "The Magic Carpets of Aladdin", parkId: 6, land: "Adventureland", tier: "B", ratio: 0.18, pph: 1000, baseWait: 15, nearbyNook: "Caribbean Plaza Shaded Veranda" },
  126: { id: 126, name: "The Barnstormer", parkId: 6, land: "Fantasyland", tier: "B", ratio: 0.20, pph: 900, baseWait: 16, nearbyNook: "Storybook Circus Benches" },
  143: { id: 143, name: "Tomorrowland Speedway", parkId: 6, land: "Tomorrowland", tier: "B", ratio: 0.22, pph: 1100, baseWait: 18, nearbyNook: "Tomorrowland Terrace" },
  125: { id: 125, name: "Monsters, Inc. Laugh Floor", parkId: 6, land: "Tomorrowland", tier: "B", ratio: 0.20, pph: 1600, baseWait: 15, nearbyNook: "Tomorrowland Terrace" },
  1190: { id: 1190, name: "Tomorrowland Transit Authority PeopleMover", parkId: 6, land: "Tomorrowland", tier: "A", ratio: 0.10, pph: 4000, baseWait: 8, nearbyNook: "Tomorrowland Terrace" },
  457: { id: 457, name: "Walt Disney's Carousel of Progress", parkId: 6, land: "Tomorrowland", tier: "A", ratio: 0.05, pph: 3600, baseWait: 5, nearbyNook: "Tomorrowland Terrace" },
  356: { id: 356, name: "The Hall of Presidents", parkId: 6, land: "Liberty Square", tier: "A", ratio: 0.05, pph: 3000, baseWait: 5, nearbyNook: "Liberty Square Quiet Courtyard" },

  // EPCOT (Park ID: 5)
  14415: { id: 14415, name: "Guardians of the Galaxy: Cosmic Rewind", parkId: 5, land: "World Discovery", tier: "E", ratio: 1.00, pph: 1800, baseWait: 80, nearbyNook: "Wonders of Xandar Outdoor Terrace" },
  13812: { id: 13812, name: "Remy's Ratatouille Adventure", parkId: 5, land: "World Showcase", tier: "E", ratio: 0.95, pph: 1600, baseWait: 75, nearbyNook: "France Pavilion Quiet Garden Alleys" },
  162: { id: 162, name: "Frozen Ever After", parkId: 5, land: "World Showcase", tier: "E", ratio: 0.90, pph: 1500, baseWait: 70, nearbyNook: "Stave Church in Norway (Quiet Air-Conditioned Prayer)" },
  157: { id: 157, name: "Test Track", parkId: 5, land: "World Discovery", tier: "E", ratio: 0.85, pph: 1800, baseWait: 62, nearbyNook: "World Discovery Shaded Lake Walk" },
  16467: { id: 16467, name: "Soarin' Around the World", parkId: 5, land: "World Nature", tier: "D", ratio: 0.65, pph: 2400, baseWait: 48, nearbyNook: "The Land Pavilion Mezzanine Benches" },
  159: { id: 159, name: "Spaceship Earth", parkId: 5, land: "World Celebration", tier: "C", ratio: 0.40, pph: 3000, baseWait: 25, nearbyNook: "Spaceship Earth Reflection Gardens" },
  158: { id: 158, name: "Mission: SPACE", parkId: 5, land: "World Discovery", tier: "C", ratio: 0.35, pph: 1800, baseWait: 28, nearbyNook: "World Discovery Lakeside Benches" },
  155: { id: 155, name: "Living with the Land", parkId: 5, land: "World Nature", tier: "B", ratio: 0.20, pph: 2400, baseWait: 15, nearbyNook: "The Land Pavilion Garden Seating" },
  156: { id: 156, name: "The Seas with Nemo & Friends", parkId: 5, land: "World Nature", tier: "B", ratio: 0.18, pph: 2200, baseWait: 12, nearbyNook: "SeaBase Ocean View Benches" },
  154: { id: 154, name: "Journey Into Imagination With Figment", parkId: 5, land: "World Celebration", tier: "B", ratio: 0.15, pph: 2400, baseWait: 10, nearbyNook: "Imagination Pavilion Jumping Fountains" },
  160: { id: 160, name: "Gran Fiesta Tour Starring The Three Caballeros", parkId: 5, land: "World Showcase", tier: "A", ratio: 0.10, pph: 2000, baseWait: 10, nearbyNook: "Mexico Pavilion Courtyard" },

  // HOLLYWOOD STUDIOS (Park ID: 7)
  12140: { id: 12140, name: "Star Wars: Rise of the Resistance", parkId: 7, land: "Star Wars: Galaxy's Edge", tier: "E", ratio: 1.00, pph: 1700, baseWait: 95, nearbyNook: "Black Spire Ancient Ruins Garden" },
  5476: { id: 5476, name: "Slinky Dog Dash", parkId: 7, land: "Toy Story Land", tier: "E", ratio: 0.90, pph: 1400, baseWait: 78, nearbyNook: "Woody's Lunch Box Shaded Back Benches" },
  118: { id: 118, name: "The Twilight Zone Tower of Terror", parkId: 7, land: "Sunset Boulevard", tier: "D", ratio: 0.70, pph: 1800, baseWait: 58, nearbyNook: "Sunset Boulevard Hollywood Tower Gardens" },
  117: { id: 117, name: "Toy Story Mania!", parkId: 7, land: "Toy Story Land", tier: "D", ratio: 0.65, pph: 2000, baseWait: 52, nearbyNook: "Toy Story Land Overlook" },
  12139: { id: 12139, name: "Millennium Falcon: Smugglers Run", parkId: 7, land: "Star Wars: Galaxy's Edge", tier: "D", ratio: 0.65, pph: 1800, baseWait: 52, nearbyNook: "Black Spire Resistance Forest Benches" },
  11978: { id: 11978, name: "Mickey & Minnie's Runaway Railway", parkId: 7, land: "Hollywood Boulevard", tier: "D", ratio: 0.65, pph: 1800, baseWait: 54, nearbyNook: "Echo Lake Shaded Veranda" },
  119: { id: 119, name: "Rock 'n' Roller Coaster", parkId: 7, land: "Sunset Boulevard", tier: "D", ratio: 0.68, pph: 1800, baseWait: 56, nearbyNook: "Sunset Boulevard Courtyard Benches" },
  5477: { id: 5477, name: "Alien Swirling Saucers", parkId: 7, land: "Toy Story Land", tier: "C", ratio: 0.38, pph: 1200, baseWait: 32, nearbyNook: "Toy Story Shaded Benches" },
  120: { id: 120, name: "Star Tours - The Adventures Continue", parkId: 7, land: "Echo Lake", tier: "B", ratio: 0.20, pph: 2400, baseWait: 16, nearbyNook: "Echo Lake Shaded Tree Veranda" },

  // ANIMAL KINGDOM (Park ID: 8)
  4439: { id: 4439, name: "Avatar Flight of Passage", parkId: 8, land: "Pandora", tier: "E", ratio: 1.00, pph: 1600, baseWait: 98, nearbyNook: "Valley of Mo'ara Waterfall Sanctuary" },
  4438: { id: 4438, name: "Na'vi River Journey", parkId: 8, land: "Pandora", tier: "D", ratio: 0.68, pph: 1500, baseWait: 58, nearbyNook: "Pandora Rainforest Benches" },
  113: { id: 113, name: "Kilimanjaro Safaris", parkId: 8, land: "Africa", tier: "D", ratio: 0.60, pph: 2800, baseWait: 45, nearbyNook: "Harambe Village Riverwalk" },
  110: { id: 110, name: "Expedition Everest", parkId: 8, land: "Asia", tier: "D", ratio: 0.55, pph: 2000, baseWait: 38, nearbyNook: "Anandapur Riverfront Shaded Pergola" },
  112: { id: 112, name: "Kali River Rapids", parkId: 8, land: "Asia", tier: "C", ratio: 0.45, pph: 1800, baseWait: 35, nearbyNook: "Maharajah Jungle Trek Quiet Alcove" },
  115: { id: 115, name: "DINOSAUR", parkId: 8, land: "DinoLand U.S.A.", tier: "C", ratio: 0.35, pph: 2200, baseWait: 28, nearbyNook: "Cretaceous Trail Shaded Path" }
};

// Mass Schedule Presets with Travel & Transit Buffers
export const SUNDAY_MASS_PRESETS = [
  {
    id: "mary-queen-730",
    name: "Basilica Mary Queen of the Universe - 7:30 AM",
    parish: "Basilica of the National Shrine of Mary, Queen of the Universe",
    massTime: "7:30 AM",
    massHour: 7.5,
    massDurationMin: 55,
    transitBufferMin: 45, // Drive, TTC parking, monorail/ferry
    gateArrivalHour: 9.17, // ~9:10 AM
    gateArrivalFormatted: "9:10 AM",
    distanceMiles: 4.2
  },
  {
    id: "mary-queen-930",
    name: "Basilica Mary Queen of the Universe - 9:30 AM",
    parish: "Basilica of the National Shrine of Mary, Queen of the Universe",
    massTime: "9:30 AM",
    massHour: 9.5,
    massDurationMin: 60,
    transitBufferMin: 45,
    gateArrivalHour: 11.25, // ~11:15 AM
    gateArrivalFormatted: "11:15 AM",
    distanceMiles: 4.2
  },
  {
    id: "mary-queen-1130",
    name: "Basilica Mary Queen of the Universe - 11:30 AM",
    parish: "Basilica of the National Shrine of Mary, Queen of the Universe",
    massTime: "11:30 AM",
    massHour: 11.5,
    massDurationMin: 65,
    transitBufferMin: 45,
    gateArrivalHour: 13.33, // ~1:20 PM
    gateArrivalFormatted: "1:20 PM",
    distanceMiles: 4.2
  },
  {
    id: "corpus-christi-1000",
    name: "Corpus Christi Catholic Church (Celebration) - 10:00 AM",
    parish: "Corpus Christi Catholic Church",
    massTime: "10:00 AM",
    massHour: 10.0,
    massDurationMin: 60,
    transitBufferMin: 50,
    gateArrivalHour: 11.83, // ~11:50 AM
    gateArrivalFormatted: "11:50 AM",
    distanceMiles: 6.8
  },
  {
    id: "holy-family-800",
    name: "Holy Family Catholic Church (Dr. Phillips) - 8:00 AM",
    parish: "Holy Family Catholic Church",
    massTime: "8:00 AM",
    massHour: 8.0,
    massDurationMin: 60,
    transitBufferMin: 50,
    gateArrivalHour: 9.83, // ~9:50 AM
    gateArrivalFormatted: "9:50 AM",
    distanceMiles: 8.5
  },
  {
    id: "saturday-vigil-600",
    name: "Saturday Vigil Mass (Mary Queen 6:00 PM / Full Sunday Park Day)",
    parish: "Basilica Mary Queen of the Universe (Saturday)",
    massTime: "Saturday 6:00 PM Vigil",
    massHour: 0, // Fulfilled on Saturday!
    massDurationMin: 60,
    transitBufferMin: 0,
    gateArrivalHour: 8.5, // 8:30 AM Rope Drop!
    gateArrivalFormatted: "8:30 AM (Full Rope Drop)",
    distanceMiles: 4.2
  }
];

// Crowd multipliers
export const CROWD_MULTIPLIERS = {
  low: { id: "low", label: "Low Season (Level 2-4 • Sept, Jan, Early Feb)", factor: 0.70, isHoliday: false },
  moderate: { id: "moderate", label: "Moderate Regular Day (Level 5-7 • Spring/Fall Weekdays)", factor: 1.00, isHoliday: false },
  peak: { id: "peak", label: "Peak Holiday / Holy Day (Level 8-10 • Easter, Christmas, Spring Break)", factor: 1.35, isHoliday: true }
};
