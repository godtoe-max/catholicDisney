// Catholic Disney: Disneyland Resort Wait Times & Crowd Curves Engine
// Historical curves, park metadata, and ride tiers for Disneyland Park & Disney California Adventure

export const DISNEYLAND_PARKS_METADATA = {
  "16": {
    id: 16,
    name: "Disneyland Park",
    icon: "🏰",
    slug: "disneyland",
    openingTime: "8:00 AM",
    closingTime: "12:00 AM",
    defaultPrayerNook: "Snow White Grotto & Wishing Well (Castle East Pathway)"
  },
  "17": {
    id: 17,
    name: "Disney California Adventure",
    icon: "🎡",
    slug: "california-adventure",
    openingTime: "8:00 AM",
    closingTime: "10:00 PM",
    defaultPrayerNook: "Redwood Creek Challenge Trail shaded pine amphitheater"
  }
};

// Disneyland Resort hourly crowd curves reflect the famous "SoCal Locals / Magic Key Bump"
// Unlike WDW (which thins out after 7 PM), Disneyland experiences a second major wave of guests between 5 PM and 8:30 PM!
export const DISNEYLAND_HOURLY_CROWD_CURVES = {
  "16": {
    "8": 20.4,
    "9": 28.5,
    "10": 36.2,
    "11": 44.8,
    "12": 48.3,
    "13": 47.9,
    "14": 46.2,
    "15": 44.5,
    "16": 45.8, // Locals start arriving after school/work
    "17": 49.6, // Evening peak begins
    "18": 52.1, // Prime dinner & ride surge
    "19": 50.4,
    "20": 46.2, // Pre-fireworks
    "21": 42.0,
    "22": 33.5,
    "23": 24.1
  },
  "17": {
    "8": 18.2,
    "9": 25.4,
    "10": 34.0,
    "11": 42.6,
    "12": 46.1,
    "13": 45.8,
    "14": 44.0,
    "15": 43.5,
    "16": 46.2, // Cars Land evening neon surge
    "17": 49.0,
    "18": 48.5,
    "19": 45.2,
    "20": 39.4, // World of Color crowds gather
    "21": 31.0
  }
};

export const DISNEYLAND_RIDE_TIERS = {
  // Tier 1: Mega-Headliners (Rope-Drop or Late Night Priority)
  "Radiator Springs Racers": { tier: 1, postedAvg: 75, actualAvg: 54, prayerBenefit: "High (Queue Rosary highly recommended)" },
  "Star Wars: Rise of the Resistance": { tier: 1, postedAvg: 70, actualAvg: 50, prayerBenefit: "High (Queue Rosary highly recommended)" },
  "Space Mountain": { tier: 1, postedAvg: 55, actualAvg: 39, prayerBenefit: "High" },

  // Tier 2: Major E-Tickets (High Demand)
  "Indiana Jones Adventure": { tier: 2, postedAvg: 50, actualAvg: 36, prayerBenefit: "High" },
  "Guardians of the Galaxy - Mission: BREAKOUT!": { tier: 2, postedAvg: 50, actualAvg: 36, prayerBenefit: "High" },
  "Matterhorn Bobsleds": { tier: 2, postedAvg: 45, actualAvg: 32, prayerBenefit: "Medium" },
  "Mickey & Minnie's Runaway Railway": { tier: 2, postedAvg: 45, actualAvg: 32, prayerBenefit: "Medium" },
  "WEB SLINGERS: A Spider-Man Adventure": { tier: 2, postedAvg: 45, actualAvg: 32, prayerBenefit: "Medium" },
  "Soarin' Around the World": { tier: 2, postedAvg: 42, actualAvg: 30, prayerBenefit: "Medium" },

  // Tier 3: Classic Family Headliners
  "Big Thunder Mountain Railroad": { tier: 3, postedAvg: 35, actualAvg: 25, prayerBenefit: "Medium" },
  "Peter Pan's Flight": { tier: 3, postedAvg: 35, actualAvg: 25, prayerBenefit: "Medium" },
  "The Incredicoaster": { tier: 3, postedAvg: 35, actualAvg: 25, prayerBenefit: "Medium" },
  "Grizzly River Run": { tier: 3, postedAvg: 32, actualAvg: 23, prayerBenefit: "Medium" },
  "Toy Story Midway Mania!": { tier: 3, postedAvg: 35, actualAvg: 25, prayerBenefit: "Medium" },
  "Millennium Falcon: Smugglers Run": { tier: 3, postedAvg: 35, actualAvg: 25, prayerBenefit: "Medium" },

  // Tier 4: Continuous Capacity & Classic Dark Rides
  "Pirates of the Caribbean": { tier: 4, postedAvg: 25, actualAvg: 18, prayerBenefit: "Low (Continuous boat loading)" },
  "Haunted Mansion": { tier: 4, postedAvg: 30, actualAvg: 21, prayerBenefit: "Low" },
  "Jungle Cruise": { tier: 4, postedAvg: 25, actualAvg: 18, prayerBenefit: "Low" },
  "It's a Small World": { tier: 4, postedAvg: 20, actualAvg: 14, prayerBenefit: "Low" },
  "Mr. Toad's Wild Ride": { tier: 4, postedAvg: 20, actualAvg: 14, prayerBenefit: "Low" },
  "Snow White's Enchanted Wish": { tier: 4, postedAvg: 20, actualAvg: 14, prayerBenefit: "Low" },
  "Monsters, Inc. Mike & Sulley to the Rescue!": { tier: 4, postedAvg: 22, actualAvg: 15, prayerBenefit: "Low" }
};
