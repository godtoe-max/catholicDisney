/* CatholicDisney.com Universal Standalone Engine */
(function(global) {
  'use strict';
  const CD = global.CatholicDisney = global.CatholicDisney || {};
  function syncGlobals() {
    for (var k in CD) {
      if (Object.prototype.hasOwnProperty.call(CD, k)) {
        global[k] = CD[k];
      }
    }
  }


  // ==========================================
  // FILE: js/data/holy-days-data.js
  // ==========================================

  (function() {
// Catholic Disney: Holy Days of Obligation, Abstinence Rules & Disney Dining Guide
// Comprehensive liturgical tracking across 4 traditions: Roman (USCCB), TLM (1962), Byzantine, and Anglican Ordinariate

var TRADITIONS_LITURGICAL = CD.TRADITIONS_LITURGICAL = global.TRADITIONS_LITURGICAL = {
  roman: {
    id: "roman",
    name: "Roman Rite (USCCB / Orlando Diocese)",
    icon: "🇻🇦",
    subtitle: "Standard US Ordinary Form & Florida Province of Miami Rules",
    description: "Follows the United States Conference of Catholic Bishops (USCCB) canon law calendar and Province of Miami provincial decisions (such as the celebration of Ascension on Sunday).",
    churchInfo: {
      parishName: "Basilica of the National Shrine of Mary, Queen of the Universe",
      shortName: "Basilica of Mary Queen of the Universe",
      address: "8300 Vineland Ave, Orlando, FL 32821",
      distance: "4.2 miles from Disney (approx. 10–12 min drive)",
      liturgyType: "Solemn Mass (Ordinary Form)",
      sundayMassTitle: "Sunday Mass",
      sundayTimes: "7:30 AM, 9:30 AM, 11:30 AM, 6:00 PM (Sat Vigil: 6:00 PM)",
      defaultTime: "7:30 AM or 9:30 AM",
      confessions: "Mon–Sat: 3:00 PM – 4:00 PM, Sunday between Masses",
      transitBufferMin: 45,
      postMassGateArrival: "9:15 AM or 11:15 AM",
      specialNotes: "10-station outdoor Rosary Garden, Eucharistic Adoration Chapel & Sacred Art Museum",
      altParish: "Corpus Christi Catholic Church (Celebration, FL - 6.8 mi)"
    },
    holyDays: [
      {
        feast: "Solemnity of Mary, Mother of God",
        date: "January 1",
        month: 1,
        day: 1,
        isObligation: true,
        abrogationRule: "Abrogated (not of obligation) if falling on a Saturday or Monday in the USA.",
        notes: "Celebrates the Divine Maternity of the Theotokos. Octave of the Nativity.",
        massAtDisney: "Special Masses celebrated at Basilica Mary Queen of the Universe at 8:00 AM, 10:00 AM, 12:00 PM."
      },
      {
        feast: "The Ascension of the Lord",
        date: "Transferred to 7th Sunday of Easter (Florida)",
        month: 5,
        day: "Varies (Easter + 43 days)",
        isObligation: true,
        abrogationRule: "Fulfilled at Sunday Mass.",
        notes: "In the Ecclesiastical Province of Miami (including the Diocese of Orlando), the solemnity is permanently transferred to the Seventh Sunday of Easter.",
        massAtDisney: "Attending any regular Sunday Mass fulfills this obligation."
      },
      {
        feast: "The Assumption of the Blessed Virgin Mary",
        date: "August 15",
        month: 8,
        day: 15,
        isObligation: true,
        abrogationRule: "Abrogated if falling on a Saturday or Monday.",
        notes: "Celebrates Mary being assumed body and soul into heavenly glory. High summer Disney crowds.",
        massAtDisney: "Holy Day Masses at Basilica Mary Queen of the Universe (8:30 AM & 12:15 PM)."
      },
      {
        feast: "All Saints' Day",
        date: "November 1",
        month: 11,
        day: 1,
        isObligation: true,
        abrogationRule: "Abrogated if falling on a Saturday or Monday.",
        notes: "Honoring all the saints in heaven, known and unknown. Day after Halloween in the parks.",
        massAtDisney: "Basilica Mary Queen of the Universe celebrates Holy Day Masses."
      },
      {
        feast: "The Immaculate Conception of the Blessed Virgin Mary",
        date: "December 8",
        month: 12,
        day: 8,
        isObligation: true,
        abrogationRule: "Patronal Feastday of the United States. Obligation remains even if celebrated on adjacent days, per USCCB norm.",
        notes: "Patronal Feast of the USA. If Dec 8 falls on an Advent Sunday, the liturgy transfers to Monday Dec 9.",
        massAtDisney: "Solemn Masses at Basilica Mary Queen of the Universe."
      },
      {
        feast: "The Nativity of the Lord (Christmas)",
        date: "December 25",
        month: 12,
        day: 25,
        isObligation: true,
        abrogationRule: "Always of strict obligation. Never abrogated regardless of day of week.",
        notes: "Christmas Day. Very high Disney attendance. Plan Mass attendance well in advance.",
        massAtDisney: "Christmas Eve Vigils (4 PM, 6 PM, Midnight) and Christmas Day Masses at the Basilica."
      }
    ],
    abstinenceRules: {
      summary: "Ash Wednesday & Good Friday (Fast & Abstinence); All Lenten Fridays (Strict Meat Abstinence); All Other Fridays (Penance).",
      details: [
        {
          title: "Ash Wednesday & Good Friday",
          rule: "Mandatory Fasting & Abstinence",
          ages: "Fasting: 18 to 59 • Abstinence: 14 and older",
          guidance: "One full meal and two smaller collations (not equaling a full meal). Complete abstinence from warm-blooded meat."
        },
        {
          title: "All Fridays of Lent",
          rule: "Mandatory Meat Abstinence",
          ages: "Ages 14 and older",
          guidance: "No meat (beef, pork, chicken). Fish, seafood, eggs, dairy, and plant-based foods are fully permitted."
        },
        {
          title: "Fridays Outside of Lent",
          rule: "Day of Penance (Meat Abstinence or Substituted Penance)",
          ages: "All Catholics",
          guidance: "In the United States, bishops permit substituting another substantial penance or act of charity, but traditional meat abstinence is praised and encouraged."
        }
      ]
    }
  },

  tlm: {
    id: "tlm",
    name: "Traditional Latin Mass (1962 Roman Missal)",
    icon: "☩",
    subtitle: "Traditional Roman Calendar & Classical Fasting Rules",
    description: "Follows the traditional liturgical calendar of the 1962 Missale Romanum and classic 1917/1962 Code of Canon Law fasting practices.",
    churchInfo: {
      parishName: "All Souls Historic Chapel / Central Florida Latin Mass",
      shortName: "All Souls Historic Chapel (TLM)",
      address: "800 S Oak Ave, Sanford, FL 32771 / Regional Central FL Apostolates",
      distance: "Approx. 35–40 min drive from Walt Disney World",
      liturgyType: "Traditional Latin Mass (1962 Missale Romanum)",
      sundayMassTitle: "Traditional Latin Mass (TLM)",
      sundayTimes: "8:00 AM (Low Mass) & 10:30 AM (Missa Cantata / High Mass)",
      defaultTime: "8:00 AM Low Mass",
      confessions: "Available 30 minutes before each Holy Mass",
      transitBufferMin: 55,
      postMassGateArrival: "10:00 AM",
      specialNotes: "Reverent ad orientem liturgy, Gregorian chant, traditional Latin vestments & altar rail communion",
      altParish: "Queen of Peace Catholic Church (Ocala, FL - Diocesan TLM)"
    },
    holyDays: [
      {
        feast: "Circumcision of Our Lord & Octave of Nativity",
        date: "January 1",
        month: 1,
        day: 1,
        isObligation: true,
        abrogationRule: "Traditional Holy Day of Obligation (1st Class).",
        notes: "Celebrates Christ's circumcision and shedding of blood for our salvation.",
        massAtDisney: "TLM celebrated at Queen of Peace (Ocala) or All Souls (Sanford) in Central Florida."
      },
      {
        feast: "Ascension Thursday",
        date: "40 Days after Easter (Always Thursday)",
        month: 5,
        day: "Thursday",
        isObligation: true,
        abrogationRule: "Strictly celebrated on Thursday (no transfer to Sunday in TLM).",
        notes: "Traditional 1st Class Feast celebrating Christ's bodily ascension into heaven.",
        massAtDisney: "Attend Thursday TLM in Central Florida or early parish Mass."
      },
      {
        feast: "Assumption of the Blessed Virgin Mary",
        date: "August 15",
        month: 8,
        day: 15,
        isObligation: true,
        abrogationRule: "Traditional Holy Day of Obligation.",
        notes: "1st Class Feast with traditional blessing of herbs and fruits.",
        massAtDisney: "Check local Central Florida TLM chapel schedules."
      },
      {
        feast: "All Saints (Festum Omnium Sanctorum)",
        date: "November 1",
        month: 11,
        day: 1,
        isObligation: true,
        abrogationRule: "Traditional Holy Day of Obligation.",
        notes: "Preceded by the traditional Vigil of All Saints (Oct 31 fast/abstinence day).",
        massAtDisney: "High Mass celebrated at regional TLM apostolates."
      },
      {
        feast: "Immaculate Conception of the B.V.M.",
        date: "December 8",
        month: 12,
        day: 8,
        isObligation: true,
        abrogationRule: "Principal Patroness of the United States.",
        notes: "1st Class Feast with white vestments celebrating Mary's preservation from original sin.",
        massAtDisney: "Central Florida traditional apostolates."
      },
      {
        feast: "Nativity of Our Lord (Christmas)",
        date: "December 25",
        month: 12,
        day: 25,
        isObligation: true,
        abrogationRule: "Always of obligation.",
        notes: "Priests traditionally offer three Masses (Midnight, Dawn, Day).",
        massAtDisney: "Solemn Midnight TLM offered in the Orlando/Central Florida region."
      }
    ],
    abstinenceRules: {
      summary: "All Fridays of the Year (Strict Meat Abstinence); Ember Days; Vigils of Major Feasts.",
      details: [
        {
          title: "All Fridays of the Entire Year",
          rule: "Universal Meat Abstinence",
          ages: "Age 7 and older (traditional law) / 14 and older",
          guidance: "Universal abstinence from meat on all Fridays of the year (unless a 1st Class Holy Day falls on Friday)."
        },
        {
          title: "Ember Days (Quatuor Tempora)",
          rule: "Fasting & Partial/Complete Abstinence",
          ages: "Wednesday, Friday, Saturday of Ember Weeks",
          guidance: "Occurs 4 times a year (Advent, Lent, Pentecost, September). Friday is complete abstinence; Wed & Sat partial abstinence."
        },
        {
          title: "Vigils of Major Feasts",
          rule: "Fast & Abstinence",
          ages: "Ages 21–59 (fast), 7+ (abstinence)",
          guidance: "Traditional fasting on the Vigils of Christmas (Dec 24), Pentecost, Assumption (Aug 14), and All Saints (Oct 31)."
        }
      ]
    }
  },

  byzantine: {
    id: "byzantine",
    name: "Byzantine Catholic Rite (Ruthenian / Ukrainian)",
    icon: "☦️",
    subtitle: "Eastern Catholic Feasts of Precept & Great Fast",
    description: "Follows the Byzantine Ruthenian Metropolia and Eastern Catholic liturgical canons with Great Feasts and traditional seasonal fasts.",
    churchInfo: {
      parishName: "St. Nicholas of Myra Byzantine Catholic Church",
      shortName: "St. Nicholas Byzantine Catholic Church",
      address: "5135 Sand Lake Rd, Orlando, FL 32819",
      distance: "12 miles from Disney (approx. 18–20 min drive)",
      liturgyType: "Divine Liturgy of St. John Chrysostom",
      sundayMassTitle: "Sunday Divine Liturgy",
      sundayTimes: "10:00 AM (Chanted Divine Liturgy)",
      defaultTime: "10:00 AM Divine Liturgy",
      confessions: "9:15 AM before Divine Liturgy or upon request with Father",
      transitBufferMin: 50,
      postMassGateArrival: "12:15 PM",
      specialNotes: "Traditional Byzantine iconostasis, incense, sung congregational chant, anointing on feast days",
      altParish: "St. Mary's Ukrainian Catholic Church (Apopka, FL)"
    },
    holyDays: [
      {
        feast: "Nativity of the Theotokos",
        date: "September 8",
        month: 9,
        day: 8,
        isObligation: true,
        abrogationRule: "Solemn Holy Day of Precept.",
        notes: "First Great Feast of the Byzantine liturgical year (which begins Sept 1).",
        massAtDisney: "Divine Liturgy at St. Nicholas of Myra Byzantine Catholic Church (Orlando, FL)."
      },
      {
        feast: "Exaltation of the Holy Cross",
        date: "September 14",
        month: 9,
        day: 14,
        isObligation: true,
        abrogationRule: "Feast of Precept & Strict Fast Day.",
        notes: "Veneration of the Life-Giving Cross. Strict fast from meat and dairy.",
        massAtDisney: "St. Nicholas Byzantine Church in Orlando."
      },
      {
        feast: "Entrance of the Theotokos into the Temple",
        date: "November 21",
        month: 11,
        day: 21,
        isObligation: true,
        abrogationRule: "Great Feast of Precept.",
        notes: "Falls during the Philip's Fast (Nativity Fast).",
        massAtDisney: "Orlando Byzantine parish."
      },
      {
        feast: "Nativity of Our Lord (Christmas)",
        date: "December 25",
        month: 12,
        day: 25,
        isObligation: true,
        abrogationRule: "Solemn Holy Day of Precept.",
        notes: "Preceded by the traditional Holy Supper (Svyat Vechir) on Christmas Eve.",
        massAtDisney: "Great Compline and Divine Liturgy of St. Basil the Great at St. Nicholas."
      },
      {
        feast: "Theophany of Our Lord (Epiphany)",
        date: "January 6",
        month: 1,
        day: 6,
        isObligation: true,
        abrogationRule: "Solemn Holy Day of Precept.",
        notes: "Great Blessing of Water commemorating Christ's baptism in the Jordan.",
        massAtDisney: "St. Nicholas Byzantine Church (Orlando)."
      },
      {
        feast: "Meeting of Our Lord in the Temple",
        date: "February 2",
        month: 2,
        day: 2,
        isObligation: true,
        abrogationRule: "Feast of Precept.",
        notes: "Traditional blessing of candles (Candlemas).",
        massAtDisney: "St. Nicholas Byzantine Church."
      },
      {
        feast: "Annunciation of the Theotokos",
        date: "March 25",
        month: 3,
        day: 25,
        isObligation: true,
        abrogationRule: "Solemn Holy Day of Precept.",
        notes: "Even during Great Lent, fish, wine, and oil are traditionally permitted on this feast.",
        massAtDisney: "St. Nicholas Byzantine Church."
      },
      {
        feast: "Ascension of Our Lord",
        date: "40 Days after Pascha (Thursday)",
        month: 5,
        day: "Thursday",
        isObligation: true,
        abrogationRule: "Solemn Feast of Precept.",
        notes: "Celebrated on Thursday across all Eastern Catholic jurisdictions.",
        massAtDisney: "St. Nicholas Byzantine Church."
      },
      {
        feast: "Holy Apostles Peter and Paul",
        date: "June 29",
        month: 6,
        day: 29,
        isObligation: true,
        abrogationRule: "Feast of Precept.",
        notes: "Concludes the Apostles' Fast (Peter & Paul Fast).",
        massAtDisney: "St. Nicholas Byzantine Church."
      },
      {
        feast: "Dormition of the Theotokos",
        date: "August 15",
        month: 8,
        day: 15,
        isObligation: true,
        abrogationRule: "Solemn Holy Day of Precept.",
        notes: "Concludes the two-week Dormition Fast. Traditional blessing of flowers and herbs.",
        massAtDisney: "St. Nicholas Byzantine Church."
      }
    ],
    abstinenceRules: {
      summary: "Wednesdays & Fridays (Meat Abstinence); Pure Monday & Great Friday (Strict Fast); 4 Fasting Seasons.",
      details: [
        {
          title: "Wednesdays & Fridays Throughout the Year",
          rule: "Traditional Abstinence from Meat",
          ages: "All faithful",
          guidance: "Wednesdays commemorate Christ's betrayal; Fridays commemorate the Crucifixion. Abstinence from meat."
        },
        {
          title: "Pure Monday & Great and Holy Friday",
          rule: "Strict Fast & Complete Abstinence",
          ages: "All adults",
          guidance: "Strict fast with abstinence from meat, poultry, eggs, and dairy products."
        },
        {
          title: "The Four Fasting Seasons",
          rule: "Ascetical Seasons of Prayer & Fasting",
          ages: "Community practice",
          guidance: "Great Fast (Lent), Philip's Fast (Nov 15–Dec 24), Apostles' Fast (after Pentecost), and Dormition Fast (Aug 1–14)."
        }
      ]
    }
  },

  ordinariate: {
    id: "ordinariate",
    name: "Anglican Ordinariate (Chair of St. Peter)",
    icon: "🇬🇧",
    subtitle: "Divine Worship & English Catholic Patrimony",
    description: "Follows the Ordo of the Personal Ordinariate of the Chair of St. Peter, restoring traditional English Catholic liturgical customs.",
    churchInfo: {
      parishName: "Incarnation Catholic Church (Ordinariate Community)",
      shortName: "Incarnation Catholic Church (Ordinariate)",
      address: "1515 Edgewater Dr, Orlando, FL 32804",
      distance: "18 miles from Disney (approx. 25 min drive)",
      liturgyType: "Divine Worship: The Missal (Sacral English)",
      sundayMassTitle: "Divine Worship Sunday Mass",
      sundayTimes: "10:15 AM (Solemn Mass with English Choral Patrimony)",
      defaultTime: "10:15 AM Divine Worship Mass",
      confessions: "9:30 AM – 10:00 AM before Sunday Mass",
      transitBufferMin: 50,
      postMassGateArrival: "12:30 PM",
      specialNotes: "Coverdale psalms, Cranmerian prayers of humble access, traditional choral music & ad orientem",
      altParish: "Basilica of Mary Queen of the Universe (Alternative close to parks)"
    },
    holyDays: [
      {
        feast: "Solemnity of Holy Mary, Mother of God",
        date: "January 1",
        month: 1,
        day: 1,
        isObligation: true,
        abrogationRule: "Holy Day of Obligation.",
        notes: "Divine Worship Missal liturgy.",
        massAtDisney: "Incarnation Catholic Church (Orlando Ordinariate Community)."
      },
      {
        feast: "Ascension Thursday",
        date: "40 Days after Easter (Thursday)",
        month: 5,
        day: "Thursday",
        isObligation: true,
        abrogationRule: "Observed on Thursday in the Ordinariate.",
        notes: "Solemn Evensong and Divine Worship Mass.",
        massAtDisney: "Incarnation Catholic Church (Orlando)."
      },
      {
        feast: "Assumption of the Blessed Virgin Mary",
        date: "August 15",
        month: 8,
        day: 15,
        isObligation: true,
        abrogationRule: "Holy Day of Obligation.",
        notes: "Lady Day of the Late Summer in English patrimony.",
        massAtDisney: "Incarnation Catholic Church."
      },
      {
        feast: "All Saints' Day",
        date: "November 1",
        month: 11,
        day: 1,
        isObligation: true,
        abrogationRule: "Holy Day of Obligation.",
        notes: "Preceded by All Hallows' Eve; followed by All Souls' Day.",
        massAtDisney: "Incarnation Catholic Church."
      },
      {
        feast: "The Immaculate Conception",
        date: "December 8",
        month: 12,
        day: 8,
        isObligation: true,
        abrogationRule: "Holy Day of Obligation.",
        notes: "Patronal Solemnity of the Americas.",
        massAtDisney: "Incarnation Catholic Church."
      },
      {
        feast: "Christmas Day (The Nativity of Our Lord)",
        date: "December 25",
        month: 12,
        day: 25,
        isObligation: true,
        abrogationRule: "Always of Obligation.",
        notes: "Festival of Nine Lessons and Carols & Solemn Christmas Mass.",
        massAtDisney: "Incarnation Catholic Church."
      }
    ],
    abstinenceRules: {
      summary: "All Fridays of the Year (Penance / Meat Abstinence); Ash Wednesday & Good Friday (Fast & Abstinence); Ember & Rogation Days.",
      details: [
        {
          title: "All Fridays of the Year",
          rule: "Days of Penance & Traditional Meat Abstinence",
          ages: "All faithful",
          guidance: "Observed through abstinence from meat or alternative substantial penitential practice."
        },
        {
          title: "Ash Wednesday & Good Friday",
          rule: "Fast and Abstinence",
          ages: "Ages 18–59 (fast), 14+ (abstinence)",
          guidance: "Fasting and total abstinence from meat."
        },
        {
          title: "Ember Days & Rogation Days",
          rule: "Traditional Days of Prayer, Fasting & Rogation",
          ages: "Faithful observance",
          guidance: "Spring Rogation Days (before Ascension) and Seasonal Ember Days for vocations and harvest blessings."
        }
      ]
    }
  }
};

// Curated Disney Theme Park Dining Guide for Friday & Lenten Abstinence Days
var DISNEY_ABSTINENCE_DINING = CD.DISNEY_ABSTINENCE_DINING = global.DISNEY_ABSTINENCE_DINING = [
  {
    park: "Magic Kingdom",
    parkId: 6,
    icon: "🏰",
    restaurant: "Columbia Harbour House",
    land: "Liberty Square",
    type: "Quick-Service",
    seafoodHighlights: "Fried Fisherman's Platter, Grilled Salmon with Green Beans, Lobster Roll, Plant-based Crab Cake.",
    catholicTip: "Head to the quiet upstairs dining room with views of Liberty Square for a peaceful family meal before your Queue Rosary!"
  },
  {
    park: "Magic Kingdom",
    parkId: 6,
    icon: "🏰",
    restaurant: "Pecos Bill Tall Tale Inn and Cafe",
    land: "Frontierland",
    type: "Quick-Service",
    seafoodHighlights: "Fajita Platters with grilled vegetables, rice, beans, guacamole, and queso.",
    catholicTip: "Hearty, filling meatless Mexican options that easily fuel hungry kids all afternoon."
  },
  {
    park: "EPCOT",
    parkId: 5,
    icon: "🌐",
    restaurant: "Yorkshire County Fish Shop",
    land: "World Showcase (United Kingdom)",
    type: "Quick-Service",
    seafoodHighlights: "World-famous crispy Beer-Battered Fish & Chips with tartar sauce.",
    catholicTip: "Enjoy your fish & chips at the waterside promenade tables overlooking World Showcase Lagoon."
  },
  {
    park: "EPCOT",
    parkId: 5,
    icon: "🌐",
    restaurant: "Sunshine Seasons",
    land: "World Nature (The Land Pavilion)",
    type: "Quick-Service",
    seafoodHighlights: "Oak-Grilled Salmon with mashed potatoes, Asian Vegetable Noodle Bowl, Mediterranean Salad.",
    catholicTip: "Air-conditioned indoor seating right next to Living with the Land. Perfect retreat during the 1:00 PM Florida heat!"
  },
  {
    park: "EPCOT",
    parkId: 5,
    icon: "🌐",
    restaurant: "Katsura Grill",
    land: "World Showcase (Japan Pavilion)",
    type: "Quick-Service",
    seafoodHighlights: "Shrimp Tempura Udon, Vegetable Roll, Salmon Sushi, Edamame.",
    catholicTip: "Dine in the quiet hilltop Japanese garden next to the koi pond and cascading waterfalls."
  },
  {
    park: "Hollywood Studios",
    parkId: 7,
    icon: "🎬",
    restaurant: "Docking Bay 7 Food and Cargo",
    land: "Star Wars: Galaxy's Edge",
    type: "Quick-Service",
    seafoodHighlights: "Pirjanad Hot Casserole, Felucian Kefta Spread (plant-based meatballs & hummus with pita).",
    catholicTip: "Spacious shaded indoor hangar seating with plenty of nutritious meatless fuel."
  },
  {
    park: "Hollywood Studios",
    parkId: 7,
    icon: "🎬",
    restaurant: "ABC Commissary",
    land: "Commissary Lane",
    type: "Quick-Service",
    seafoodHighlights: "Shrimp Tacos with cabbage slaw and chipotle mayo, California Burger (plant-based).",
    catholicTip: "One of the best-reviewed quick-service restaurants in Hollywood Studios with powerful air conditioning."
  },
  {
    park: "Animal Kingdom",
    parkId: 8,
    icon: "🌳",
    restaurant: "Satu'li Canteen",
    land: "Pandora - The World of Avatar",
    type: "Quick-Service",
    seafoodHighlights: "Chili-Garlic Fried Tofu Bowl with hearty vegetable quinoa base, Ocean Fish specialties.",
    catholicTip: "Consistently ranked the best quick-service food in all of Disney World. Healthy and delicious on fast days."
  },
  {
    park: "Animal Kingdom",
    parkId: 8,
    icon: "🌳",
    restaurant: "Yak & Yeti Local Food Cafes",
    land: "Asia",
    type: "Quick-Service",
    seafoodHighlights: "Vegetable Fried Rice, Vegetable Egg Rolls, Crispy Honey Shrimp.",
    catholicTip: "Shaded outdoor seating next to the Anandapur Riverfront path."
  },
  {
    park: "Near Disney / Orlando",
    parkId: 0,
    icon: "⛪",
    restaurant: "Cookes of Dublin & Raglan Road",
    land: "Disney Springs (Near Basilica)",
    type: "Casual & Table-Service",
    seafoodHighlights: "Famous Dubliner Irish Fish & Chips, Atlantic Salmon, Seafood Chowder.",
    catholicTip: "Just 8 minutes from the Basilica of Mary Queen of the Universe. Ideal Friday dinner stop after attending 12:15 PM or 5:00 PM Mass!"
  }
];

// Disneyland Resort (California) Meatless & Friday Abstinence Dining Guide
var DISNEYLAND_ABSTINENCE_DINING = CD.DISNEYLAND_ABSTINENCE_DINING = global.DISNEYLAND_ABSTINENCE_DINING = [
  {
    park: "Disneyland Park",
    parkId: 16,
    icon: "🏰",
    restaurant: "Harbour Galley",
    land: "Critter Country / Rivers of America",
    type: "Quick-Service",
    seafoodHighlights: "Fresh Clam Chowder in a Boudin Sourdough Bowl, Lobster Roll with kettle chips.",
    catholicTip: "Enjoy your chowder on the quiet waterfront patio overlooking Fowler's Harbor and the Sailing Ship Columbia."
  },
  {
    park: "Disneyland Park",
    parkId: 16,
    icon: "🏰",
    restaurant: "Rancho del Zocalo Restaurante",
    land: "Frontierland",
    type: "Quick-Service",
    seafoodHighlights: "Cheese Enchiladas with rice and beans, Baja Fish Tacos, Fresh Garden Guacamole.",
    catholicTip: "Beautiful Spanish hacienda courtyard with bubbling tile fountains and plenty of cool shade."
  },
  {
    park: "Disneyland Park",
    parkId: 16,
    icon: "🏰",
    restaurant: "Bengal Barbecue",
    land: "Adventureland",
    type: "Quick-Service",
    seafoodHighlights: "Grilled Vegetable Skewers (Zucchini, Yellow Squash, Red Onion, Pepper) with savory glaze.",
    catholicTip: "Quick, protein-rich meatless bite directly across from the Indiana Jones queue."
  },
  {
    park: "Disneyland Park",
    parkId: 16,
    icon: "🏰",
    restaurant: "Alien Pizza Planet",
    land: "Tomorrowland",
    type: "Quick-Service",
    seafoodHighlights: "Three-Cheese Pizza, Celestial Vegetable Caprese Salad, Penne with Marinara.",
    catholicTip: "High-capacity air-conditioned seating. Excellent option for feeding large families on Friday."
  },
  {
    park: "Disney California Adventure",
    parkId: 17,
    icon: "🎡",
    restaurant: "Pacific Wharf Cafe & Sourdough Bakery",
    land: "San Fransokyo Square",
    type: "Quick-Service",
    seafoodHighlights: "Signature clam chowder or creamy tomato basil soup served in warm freshly baked San Francisco sourdough.",
    catholicTip: "Outdoor patio tables with sea breezes honoring the spirit of St. Francis of Assisi."
  },
  {
    park: "Disney California Adventure",
    parkId: 17,
    icon: "🎡",
    restaurant: "Lucky Fortune Cookery",
    land: "San Fransokyo Square",
    type: "Quick-Service",
    seafoodHighlights: "Crispy Tofu Rice Bowl with spicy garlic or teriyaki glaze, Steamed Edamame.",
    catholicTip: "Nutritious and delicious plant-based lunch to keep family energy high without meat."
  },
  {
    park: "Disney California Adventure",
    parkId: 17,
    icon: "🎡",
    restaurant: "Flo's V8 Cafe",
    land: "Cars Land",
    type: "Quick-Service",
    seafoodHighlights: "Impossible Burger with fries, House-made Garden Green Salad with balsamic dressing.",
    catholicTip: "Sit in the rear sunroom with panoramic picture-window views of Radiator Springs Racers soaring over the canyon."
  },
  {
    park: "Downtown Disney / Anaheim",
    parkId: 0,
    icon: "⛪",
    restaurant: "Naples Ristorante e Bar",
    land: "Downtown Disney (Walking distance)",
    type: "Table-Service & Walk-up",
    seafoodHighlights: "Authentic Neapolitan Margherita Pizza, Quattro Formaggi, Calamari Fritti, Spaghetti alla Puttanesca.",
    catholicTip: "Only a 5-minute walk from the Disneyland Esplanade. Perfect Friday family feast before or after evening touring."
  }
];

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/liturgical-pairings.js
  // ==========================================

  (function() {
// Catholic Liturgical Year & Disney Movie / Feast Day Pairings
var liturgicalPairingsData = CD.liturgicalPairingsData = global.liturgicalPairingsData = [
  {
    feastDate: "October 4",
    season: "Ordinary Time",
    saint: "St. Francis of Assisi",
    patronOf: "Animals, Ecology, Peace, and the Poor",
    moviePairing: "Bambi (1942) / Brother Bear (2003)",
    theologicalConnection: "St. Francis praised God for 'Brother Sun and Sister Earth.' Both films invite children to marvel at God's magnificent handiwork in nature and develop reverence for creation.",
    familyActivity: "Blessing of the pets ceremony with holy water, followed by an outdoor woodland nature walk or animal scavenger hunt.",
    feastTreatRecipe: "Franciscan 'Brother Ass' Gingerbread or Birdseed Honey Treats."
  },
  {
    feastDate: "November 1 & 2",
    season: "Solemnities",
    saint: "All Saints Day & All Souls Day",
    patronOf: "The Church Triumphant & The Church Suffering (Holy Souls in Purgatory)",
    moviePairing: "Coco (2017)",
    theologicalConnection: "Celebrates the deep Catholic doctrine of the Communion of Saints and the importance of remembering and praying for our deceased family members in purgatory.",
    familyActivity: "Set up a family ofrenda / Catholic memorial table with photos of deceased grandparents, holy cards of favorite saints, and light candles while praying the Eternal Rest prayer (Requiem Aeternam).",
    feastTreatRecipe: "Traditional Mexican Pan de Muerto or Hot Spiced Mexican Chocolate."
  },
  {
    feastDate: "December 6",
    season: "Advent",
    saint: "St. Nicholas, Bishop of Myra",
    patronOf: "Children, Sailors, and Generosity",
    moviePairing: "The Santa Clause (1994) / Klaus (2019)",
    theologicalConnection: "Reclaiming the historic 4th-century Catholic Bishop of Myra who defended the divinity of Christ at the Council of Nicaea and secretly gave gold dowries to save poor girls from destitution.",
    familyActivity: "Put shoes by the fireplace on the eve of Dec 5th filled with chocolate gold coins and an orange, and assemble a toy donation basket for the St. Vincent de Paul parish pantry.",
    feastTreatRecipe: "Speculoos St. Nicholas spiced cookies and warm spiced cider."
  },
  {
    feastDate: "January 6",
    season: "Epiphany",
    saint: "The Three Wise Men (Magi: Gaspar, Melchior, Balthasar)",
    patronOf: "Pilgrims, Travelers, and Seekers of Truth",
    moviePairing: "Aladdin (1992) / The Lion, The Witch, and The Wardrobe",
    theologicalConnection: "The revelation of Jesus Christ as King of Kings to the Gentile nations of the East.",
    familyActivity: "Traditional Epiphany Home Chalking Blessing (20 + C + M + B + 26 over the front doorway: *Christus Mansionem Benedicat* / May Christ bless this house).",
    feastTreatRecipe: "King's Cake (Rosca de Reyes) with a hidden baby Jesus figurine inside."
  },
  {
    feastDate: "March 25",
    season: "Solemnity",
    saint: "The Annunciation of the Lord (Lady Day)",
    patronOf: "Expectant Mothers, Humility, and Obedience to God",
    moviePairing: "Cinderella (1950 & 2015 Live Action)",
    theologicalConnection: "Our Lady's humble 'Fiat' ('Let it be done to me according to your word') brought salvation into the world. Cinderella's motto—'Have courage and be kind'—reflects how humility and patient charity in suffering are crowned with royal glory.",
    familyActivity: "Pray the Angelus together at 12:00 PM noon and plant blue morning glories in honor of Mary's blue mantle.",
    feastTreatRecipe: "White Marian sugar cookies decorated with edible blue flowers or blueberry tarts."
  },
  {
    feastDate: "May 1",
    season: "Eastertide",
    saint: "St. Joseph the Worker",
    patronOf: "Fathers, Carpenters, Workers, and the Universal Church",
    moviePairing: "Pinocchio (1940) - Featuring Master Woodcarver Geppetto",
    theologicalConnection: "Honors the quiet dignity of manual labor, fatherhood, craftsmanship, and providing for one's family through honest work in God's presence.",
    familyActivity: "Father-child woodworking or DIY craft project; blessing of household tools.",
    feastTreatRecipe: "Italian Zeppole di San Giuseppe (choux pastry with cream and cherry)."
  },
  {
    feastDate: "May 30",
    season: "Eastertide / Ordinary Time",
    saint: "St. Joan of Arc, the Maid of Orléans",
    patronOf: "Soldiers, France, Courage, and Youth",
    moviePairing: "Mulan (1998) / Brave (2012)",
    theologicalConnection: "A peasant girl called by God to lead with fearless courage, filial devotion, and fidelity to heavenly voices despite immense odds.",
    familyActivity: "Make wooden cross shields, discuss courage and standing up for truth at school, and write prayer intentions for persecuted Christians.",
    feastTreatRecipe: "French crepes with strawberries and whipped cream."
  }
];

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/wallpapers.js
  // ==========================================

  (function() {
// Catholic Disney High-Resolution Wallpapers Dataset
var wallpapersData = CD.wallpapersData = global.wallpapersData = [
  {
    id: "phone-castle",
    title: "The Golden Cross Fairytale Castle",
    device: "phone",
    aspectRatioLabel: "9:16 Mobile",
    resolution: "1080 x 1920 HD",
    category: "Castle & Kingdom",
    src: "assets/wallpapers/phone-castle.jpg",
    downloadName: "CatholicDisney-Castle-Phone.jpg",
    description: "A sun-drenched fairytale castle crowned with a radiant golden cross above blooming rose gardens."
  },
  {
    id: "phone-st-francis",
    title: "St. Francis & Woodland Friends",
    device: "phone",
    aspectRatioLabel: "9:16 Mobile",
    resolution: "1080 x 1920 HD",
    category: "Saints & Nature",
    src: "assets/wallpapers/phone-st-francis.jpg",
    downloadName: "CatholicDisney-StFrancis-Phone.jpg",
    description: "Saint Francis of Assisi in an enchanted sunlit meadow surrounded by joyful woodland creatures."
  },
  {
    id: "tablet-kingdom",
    title: "The Fairytale Kingdom Plaza",
    device: "tablet",
    aspectRatioLabel: "4:3 Tablet / iPad",
    resolution: "2048 x 1536 HD",
    category: "Castle & Kingdom",
    src: "assets/wallpapers/tablet-kingdom.jpg",
    downloadName: "CatholicDisney-KingdomPlaza-Tablet.jpg",
    description: "A joyful village plaza with Franciscan friars, nuns, and families strolling before the cross castle."
  },
  {
    id: "tablet-basilica",
    title: "Mary Queen of the Universe Shrine",
    device: "tablet",
    aspectRatioLabel: "4:3 Tablet / iPad",
    resolution: "2048 x 1536 HD",
    category: "Shrines & Architecture",
    src: "assets/wallpapers/tablet-basilica.jpg",
    downloadName: "CatholicDisney-Basilica-Tablet.jpg",
    description: "The sun-drenched Basilica of Mary Queen of the Universe in Orlando surrounded by tropical palms."
  },
  {
    id: "desktop-kingdom",
    title: "The Grand Catholic Disney Kingdom",
    device: "desktop",
    aspectRatioLabel: "16:9 Desktop 4K",
    resolution: "3840 x 2160 4K",
    category: "Castle & Kingdom",
    src: "assets/wallpapers/desktop-kingdom.jpg",
    downloadName: "CatholicDisney-GrandKingdom-Desktop.jpg",
    description: "The full panoramic theme park scene with friars enjoying ice cream, sisters with kids, and the parish priest."
  },
  {
    id: "desktop-studio",
    title: "The Friar Animator's Workshop",
    device: "desktop",
    aspectRatioLabel: "16:9 Desktop 4K",
    resolution: "3840 x 2160 4K",
    category: "Art & Animation",
    src: "assets/wallpapers/desktop-studio.jpg",
    downloadName: "CatholicDisney-FriarStudio-Desktop.jpg",
    description: "A cheerful Franciscan monk sketching saint cartoons in a sunlit Florida animation studio."
  }
];

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/creators.js
  // ==========================================

  (function() {
// Catholic Animation, Graphic Novels & Creative Arts Showcase ("The Next Golden Age")
var creatorsData = CD.creatorsData = global.creatorsData = [
  {
    id: "voyage-comics",
    name: "Voyage Comics & Publishing",
    category: "Catholic Graphic Novels & Comic Art",
    founder: "Philip Kosloski (with veteran artists from Marvel & DC)",
    mission: "Creating world-class, heroic Catholic graphic novels, saint epics, and fantasy adventures with the visual caliber of modern mainstream comic powerhouses.",
    featuredProject: "Finnian and the Seven Mountains & Carlo Acutis: Miracles of the Eucharist",
    description: "Submits all titles for official theological review (carrying Nihil Obstat & Imprimatur) while delivering breathtaking full-color sequential art that inspires youth and adults to lives of heroic virtue.",
    tags: ["Graphic Novels", "Saint Stories", "Marvel/DC Alumni", "Youth & Teens"],
    status: "Active Publisher"
  },
  {
    id: "herald-brother-francis",
    name: "Herald Entertainment (Brother Francis)",
    category: "Catholic Children's Animation & Music",
    founder: "Award-winning faith-based animation studio",
    mission: "Teaching the Catholic faith, the Holy Mass, the Rosary, and the lives of the saints to children through delightful 2D & 3D animation, catchy songs, and character-driven storytelling.",
    featuredProject: "The Brother Francis Animated Series (Featured on FORMED.org)",
    description: "One of the most widely watched animated Catholic educational series in the world, bringing joy, humor, and orthodox catechesis to young children and homeschool families.",
    tags: ["2D/3D Animation", "Family & Children", "Music", "Catechesis"],
    status: "Active Production"
  },
  {
    id: "word-on-fire-classics",
    name: "Word on Fire Votive & Illustrated Classics",
    category: "High-Art Literature & Illuminated Books",
    founder: "Bishop Robert Barron & Word on Fire Institute",
    mission: "Reviving the Catholic aesthetic tradition of high craftsmanship, golden-age typography, and classical illustration to draw minds to God through Beauty.",
    featuredProject: "Illuminated Gospels & Children's Golden Treasury of Saints",
    description: "Proving that modern Catholic media can rival the finest design houses and publishers in the world by leading with beauty (the 'Via Pulchritudinis').",
    tags: ["Illuminated Books", "Sacred Art", "Via Pulchritudinis"],
    status: "Active Imprint"
  },
  {
    id: "orlando-catholic-disney-fellowship",
    name: "Central Florida Catholic Disney Fellowship",
    category: "Local Community & Pilgrimage Meetups",
    founder: "Local Florida Catholic Families & Annual Passholders",
    mission: "Organizing family park meetups, morning Mass at the Basilica of Mary Queen of the Universe, Epcot Catholic cultural walks, and Catholic Dapper Days.",
    featuredProject: "Annual 'St. Michael & The Castles' Autumn Park Pilgrimage",
    description: "A grassroots community of faithful families living in or traveling to Orlando who love Disney storytelling and the Catholic Church.",
    tags: ["Orlando Local", "Family Meetups", "Annual Pilgrimage"],
    status: "Active Community"
  }
];

var disneylandCreatorsData = CD.disneylandCreatorsData = global.disneylandCreatorsData = [
  creatorsData[0],
  creatorsData[1],
  creatorsData[2],
  {
    id: "anaheim-catholic-disneyland-fellowship",
    name: "Southern California Catholic Disneyland Fellowship",
    category: "Local Community & Pilgrimage Meetups",
    founder: "Orange County & Los Angeles Catholic Families & Magic Key Holders",
    mission: "Organizing family park meetups, morning Mass at Christ Cathedral & St. Boniface Anaheim, Disneyland Catholic architectural tours, and Catholic Dapper Days.",
    featuredProject: "Annual 'Our Lady of the Angels' Disneyland Resort Pilgrimage",
    description: "A joyful community of faithful Catholic families living in or visiting Southern California who celebrate the harmony between faith and world-class storytelling.",
    tags: ["Anaheim / OC Local", "Family Meetups", "Christ Cathedral Pilgrimage"],
    status: "Active Community"
  }
];

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/parishes-wdw.js
  // ==========================================

  (function() {
// Catholic Parishes, Shrines & Diverse Liturgical Traditions near Walt Disney World (Orlando, FL) & Disneyland
var parishesData = CD.parishesData = global.parishesData = [
  {
    id: "mary-queen-universe",
    name: "Basilica of the National Shrine of Mary, Queen of the Universe",
    diocese: "Diocese of Orlando",
    rite: "Roman Rite (Novus Ordo)",
    traditionCategory: "roman",
    tagline: "The World's Premier Theme Park Tourist Basilica",
    address: "8300 Vineland Ave, Orlando, FL 32821",
    distance: "5-10 minutes from Disney Springs & WDW Resorts (approx. 4 miles)",
    phone: "(407) 239-6600",
    website: "https://www.maryqueenoftheuniverse.org",
    isFlagship: true,
    description: "Built specifically to provide a spiritual oasis for millions of Catholic visitors traveling to Walt Disney World. This magnificent Romanesque-style Basilica seats over 2,000 pilgrims and features a 10-foot bronze statue of Mary Queen of the Universe, an outdoor Rosary Garden, the Mother of God Sacred Art Museum, and the Blessed Sacrament Chapel.",
    liturgyNotes: "Solemn, reverent Roman Rite liturgies featuring professional choir, magnificent pipe organ, and beautiful sacred artwork.",
    features: [
      "Dedicated Confessional Chapel with daily confession",
      "Perpetual Eucharistic Adoration Chapel",
      "Outdoor 10-station Rosary Garden with fountains",
      "Museum of Christian & Sacred Art (papal artifacts, relics)",
      "Largest Catholic Gift Shop & Bookstore in Central Florida",
      "Free ample car and motorcoach parking"
    ],
    massSchedule: {
      sunday: ["7:30 AM", "10:00 AM (Solemn Choir)", "12:00 PM (Noon)", "6:00 PM"],
      saturdayVigil: ["6:00 PM"],
      weekday: ["8:30 AM (Monday – Friday)", "12:15 PM (Monday – Friday)", "8:30 AM (Saturday)"],
      holyDays: ["Check shrine bulletin for solemnities"]
    },
    confessions: "Monday – Friday: 11:30 AM - 12:00 PM; Saturday: 3:30 PM - 5:30 PM; Sunday: 1:30 PM - 3:00 PM",
    languages: ["English", "Spanish assistance"],
    uberTip: "Ask driver for the front bell tower fountain entrance. Quick $8-$12 rideshare from Disney Springs hotels.",
    lat: 28.3888,
    lng: -81.4937
  },
  {
    id: "incarnation-ordinariate",
    name: "Incarnation Catholic Church",
    diocese: "Personal Ordinariate of the Chair of Saint Peter",
    rite: "Anglican Use / Divine Worship",
    traditionCategory: "ordinariate",
    tagline: "English Catholic Patrimony & Sacred Choral Liturgy",
    address: "1515 Edgewater Dr, Orlando, FL 32804",
    distance: "20-25 minutes north of Disney World (College Park district)",
    phone: "(407) 420-9993",
    website: "https://www.incarnationcc.org",
    isFlagship: false,
    description: "Established under Pope Benedict XVI's apostolic constitution Anglicanorum Coetibus, Incarnation is part of the Personal Ordinariate of the Chair of Saint Peter. It offers the full communion of the Catholic Church enriched by the timeless beauty of the English Catholic choral and liturgical patrimony (Divine Worship: The Missal).",
    liturgyNotes: "Offered *ad orientem* with sacred choral polyphony, traditional hymns, reverent King's English prayers, and communion received kneeling at the altar rail on the tongue.",
    features: [
      "Traditional English Catholic Patrimony",
      "Beautiful sacred choral music & Evensong",
      "Warm, hospitable coffee hour following Sunday Mass"
    ],
    massSchedule: {
      sunday: ["8:45 AM (Low Mass)", "10:15 AM (Solemn Sung Mass with Choir)", "5:00 PM (Evensong on select Sundays)"],
      saturdayVigil: ["4:30 PM"],
      weekday: ["12:00 PM (Wednesday & Friday)"],
      holyDays: ["7:00 PM (Solemn Mass)"]
    },
    confessions: "Sunday: 8:00 AM - 8:30 AM & 9:30 AM - 10:00 AM; Wednesday: 11:30 AM - 11:55 AM",
    languages: ["English (Sacral English)"],
    uberTip: "Located in charming College Park; combine with brunch along Edgewater Drive.",
    lat: 28.5684,
    lng: -81.3897
  },
  {
    id: "st-nicholas-byzantine",
    name: "St. Nicholas of Myra Byzantine Catholic Church",
    diocese: "Eparchy of Passaic (Ruthenian Byzantine Rite)",
    rite: "Byzantine Rite (Eastern Catholic)",
    traditionCategory: "byzantine",
    tagline: "Ancient Eastern Liturgy Moments from Disney & Universal",
    address: "5135 Sand Lake Rd, Orlando, FL 32819",
    distance: "12-15 minutes from Disney World & Universal Studios",
    phone: "(407) 351-0133",
    website: "https://orlandobyzantine.com",
    isFlagship: false,
    description: "In full communion with Rome and the Pope, St. Nicholas celebrates the ancient Eastern Byzantine Liturgy of St. John Chrysostom. The church features an ornate gilded iconostasis (icon screen), traditional chanting, abundant incense, and profound mystical reverence.",
    liturgyNotes: "Divine Liturgy of St. John Chrysostom. Holy Communion is administered under both species (Body and Precious Blood) via liturgical spoon while standing. Fulfills the Sunday Catholic Mass obligation.",
    features: [
      "Stunning hand-painted Eastern Iconography and Iconostasis",
      "Traditional 4-part a cappella Byzantine choral chanting",
      "Close proximity to Sand Lake Road Restaurant Row"
    ],
    massSchedule: {
      sunday: ["10:00 AM (Divine Liturgy of St. John Chrysostom)"],
      saturdayVigil: ["5:00 PM (Great Vespers / Divine Liturgy)"],
      weekday: ["9:00 AM (Feast Days)"],
      holyDays: ["7:00 PM (Divine Liturgy)"]
    },
    confessions: "Sunday: 9:15 AM - 9:45 AM or before any service",
    languages: ["English", "Old Church Slavonic (select hymns)"],
    uberTip: "Direct route north via I-4 or Turkey Lake Road.",
    lat: 28.4502,
    lng: -81.4721
  },
  {
    id: "all-souls-historic-tlm",
    name: "All Souls Catholic Church (Historic Chapel TLM)",
    diocese: "Diocese of Orlando",
    rite: "Traditional Latin Mass (1962 Missal / TLM)",
    traditionCategory: "tlm",
    tagline: "Diocesan-Approved Traditional Latin Mass Community",
    address: "800 S Oak Ave, Sanford, FL 32771 (Historic Chapel)",
    distance: "35-45 minutes north of Disney World (Seminole County)",
    phone: "(407) 322-3795",
    website: "https://asccsanford.org",
    isFlagship: false,
    description: "The official Diocesan-approved home for the Traditional Latin Mass in the Diocese of Orlando, celebrated in the historic 1937 Romanesque All Souls Chapel in downtown Sanford. Features the 1962 Roman Missal with reverent liturgical music and Gregorian chant.",
    liturgyNotes: "Celebrated in Latin according to the 1962 Missale Romanum with diocesan permission. 1st & 3rd Sundays: Low Mass; 2nd & 4th Sundays: High Mass (Missa Cantata); 5th Sundays: Alternating.",
    features: [
      "Diocesan-approved Traditional Latin Mass under bishop's permission",
      "Historic 1937 Romanesque Chapel with traditional altar and communion rail",
      "Gregorian chant & sacred polyphony for High Masses",
      "Active traditional young family community"
    ],
    massSchedule: {
      sunday: ["2:00 PM (Traditional Latin Mass / 1962 Missal)", "8:00 AM (Novus Ordo - Main Church)", "10:00 AM (Novus Ordo - Main Church)", "12:00 PM (Spanish - Main Church)"],
      saturdayVigil: ["4:00 PM (Main Church)"],
      weekday: ["8:30 AM (Mon–Fri Novus Ordo at Historic Chapel)"],
      holyDays: ["Check parish bulletin for Latin Mass solemnity times"]
    },
    confessions: "Sunday: 1:15 PM - 1:45 PM (before Latin Mass) & Saturday: 3:00 PM - 3:45 PM",
    languages: ["Latin (1962 Missal)", "English readings & homily"],
    uberTip: "Take I-4 East / Express lanes north toward Sanford; visit historic downtown Sanford along Lake Monroe afterwards.",
    lat: 28.8056,
    lng: -81.2678
  },
  {
    id: "st-jude-maronite",
    name: "St. Jude Maronite Catholic Church",
    diocese: "Eparchy of Saint Maron of Brooklyn (Maronite Rite)",
    rite: "Maronite Rite (Syriac-Antiochene)",
    traditionCategory: "byzantine",
    tagline: "Consecration in the Ancient Aramaic Language of Christ",
    address: "5555 Dr Phillips Blvd, Orlando, FL 32819",
    distance: "12 minutes from Disney World (Dr. Phillips district)",
    phone: "(407) 363-7405",
    website: "https://www.stjudemaronitecatholicchurch.com",
    isFlagship: false,
    description: "The Maronite Church is an Eastern Catholic Church of Syriac-Antiochene tradition that has never broken communion with the Holy See of Rome. During the Holy Qurbono (Mass), the Words of Consecration are chanted in Aramaic—the very language spoken by Jesus Christ and the Apostles.",
    liturgyNotes: "Holy Qurbono chanted in English, Arabic, and Syriac/Aramaic. Beautiful Syriac hymns, incensation, and traditional sign of peace. Fulfills Sunday Catholic Mass obligation.",
    features: [
      "Words of Consecration chanted in the original Aramaic of Jesus",
      "Rich Syriac liturgical heritage and St. Charbel devotions",
      "Warm Mediterranean parish hospitality"
    ],
    massSchedule: {
      sunday: ["10:30 AM (Solemn Divine Liturgy / Holy Qurbono)"],
      saturdayVigil: ["5:00 PM"],
      weekday: ["9:00 AM (Tuesday – Friday)"],
      holyDays: ["7:00 PM"]
    },
    confessions: "Sunday: 9:45 AM - 10:15 AM or upon request",
    languages: ["English", "Aramaic / Syriac (Consecration)", "Arabic"],
    uberTip: "Very close to Universal and north WDW resorts via Apopka Vineland Rd.",
    lat: 28.4721,
    lng: -81.4932
  },
  {
    id: "corpus-christi-celebration",
    name: "Corpus Christi Catholic Church",
    diocese: "Diocese of Orlando",
    rite: "Roman Rite (Novus Ordo)",
    traditionCategory: "roman",
    tagline: "Located in the historic Disney-founded town of Celebration",
    address: "1050 Celebration Ave, Celebration, FL 34747",
    distance: "8-12 minutes from Animal Kingdom & Hollywood Studios (approx. 6 miles)",
    phone: "(407) 833-0300",
    website: "https://www.celebrationcatholic.org",
    isFlagship: false,
    description: "Nestled in the picturesque town of Celebration (originally master-planned by the Walt Disney Company), Corpus Christi is an active parish with reverent liturgies, beautiful traditional architecture, and a strong family community.",
    liturgyNotes: "Reverent Novus Ordo liturgies in English and Spanish with rich contemporary and traditional sacred music.",
    features: [
      "Close proximity to Celebration town center & lakeside dining",
      "Reverent music & active youth ministry",
      "Children's liturgy at designated morning Masses"
    ],
    massSchedule: {
      sunday: ["8:00 AM", "9:30 AM", "11:00 AM", "5:00 PM"],
      saturdayVigil: ["4:30 PM"],
      weekday: ["9:00 AM (Monday – Saturday)"],
      holyDays: ["9:00 AM", "7:00 PM"]
    },
    confessions: "Saturday: 3:30 PM - 4:15 PM or by appointment",
    languages: ["English", "Spanish"],
    uberTip: "Enjoy breakfast at Celebration Lakeside following morning Mass before heading into the parks.",
    lat: 28.3183,
    lng: -81.5422
  },
  {
    id: "st-faustina-clermont",
    name: "St. Faustina Catholic Church",
    diocese: "Diocese of Orlando",
    rite: "Roman Rite (Novus Ordo)",
    traditionCategory: "roman",
    tagline: "Convenient for Disney's Western Gateway & Flamingo Crossings",
    address: "15551 N. Boggy Marsh Rd, Clermont, FL 34714",
    distance: "10-15 minutes from Flamingo Crossings & Western WDW resorts",
    phone: "(352) 515-9297",
    website: "https://www.stfaustina.org",
    isFlagship: false,
    description: "Dedicated to the Apostle of Divine Mercy, St. Faustina is located on North Boggy Marsh Road in south Clermont, ideal for families staying in vacation rental villas and Western WDW hotels.",
    liturgyNotes: "Warm, family-friendly Roman Rite liturgies with regular recitation of the Divine Mercy Chaplet.",
    features: [
      "Divine Mercy Chaplet prayed regularly",
      "Spacious newly built permanent church with warm community atmosphere",
      "Close to Western Way Disney entrance"
    ],
    massSchedule: {
      sunday: ["7:30 AM", "9:30 AM", "11:30 AM", "5:00 PM (Spanish)"],
      saturdayVigil: ["4:00 PM"],
      weekday: ["8:00 AM (Monday – Friday)"],
      holyDays: ["8:00 AM", "7:00 PM"]
    },
    confessions: "Saturday: 3:00 PM - 3:45 PM",
    languages: ["English", "Spanish"],
    uberTip: "Direct quick route via Western Way into Animal Kingdom.",
    lat: 28.3756,
    lng: -81.6689
  },
  {
    id: "holy-family-orlando",
    name: "Holy Family Catholic Church",
    diocese: "Diocese of Orlando",
    rite: "Roman Rite (Novus Ordo)",
    traditionCategory: "roman",
    tagline: "Vibrant Parish on Restaurant Row / Dr. Phillips",
    address: "5125 S Apopka Vineland Rd, Orlando, FL 32819",
    distance: "15 minutes from Magic Kingdom & Contemporary / Grand Floridian",
    phone: "(407) 876-2211",
    website: "https://www.holyfamilyorlando.org",
    isFlagship: false,
    description: "A large, vibrant Catholic community located north of Disney World in the Dr. Phillips district. Renowned for rich musical liturgy, perpetual adoration chapel, and active parish life.",
    liturgyNotes: "Active liturgies in English and Spanish with solemn choir.",
    features: [
      "24/7 Perpetual Adoration Chapel",
      "Rich choir and sacred music program",
      "Located near famous Orlando Restaurant Row"
    ],
    massSchedule: {
      sunday: ["7:00 AM", "8:45 AM", "10:30 AM", "12:15 PM (Spanish)", "5:00 PM"],
      saturdayVigil: ["4:00 PM", "6:00 PM (Spanish)"],
      weekday: ["6:45 AM (Mon–Fri)", "8:30 AM (Mon–Sat)"],
      holyDays: ["6:45 AM", "8:30 AM", "12:15 PM", "7:00 PM"]
    },
    confessions: "Saturday: 9:00 AM - 10:00 AM & 3:00 PM - 3:45 PM",
    languages: ["English", "Spanish"],
    uberTip: "Great Sunday Mass option if you want to dine along Sand Lake Road's Restaurant Row afterwards.",
    lat: 28.4842,
    lng: -81.5034
  },
  {
    id: "st-james-cathedral",
    name: "St. James Catholic Cathedral",
    diocese: "Diocese of Orlando (Cathedral)",
    rite: "Roman Rite (Novus Ordo)",
    traditionCategory: "roman",
    tagline: "Mother Church of the Diocese of Orlando",
    address: "215 N Orange Ave, Orlando, FL 32801",
    distance: "20-25 minutes from WDW (Downtown Orlando)",
    phone: "(407) 422-2005",
    website: "https://www.stjamesorlando.org",
    isFlagship: false,
    description: "The historical seat of the Bishop of Orlando. If your family enjoys historic downtown architecture, pipe organs, and magnificent cathedral liturgies, a visit to St. James is a memorable pilgrimage experience.",
    liturgyNotes: "Cathedral solemn liturgies with grand pipe organ and bishop solemnities.",
    features: [
      "Historic Cathedral of Central Florida",
      "Solemn Bishop liturgies and pipe organ",
      "Downtown cultural district location"
    ],
    massSchedule: {
      sunday: ["8:00 AM", "10:00 AM", "12:00 PM (Spanish)", "5:00 PM"],
      saturdayVigil: ["5:00 PM"],
      weekday: ["7:30 AM (Monday – Friday)", "12:10 PM (Monday – Friday)"],
      holyDays: ["7:30 AM", "12:10 PM", "7:00 PM (Bilingual)"]
    },
    confessions: "Monday – Friday: 11:30 AM - 12:00 PM",
    languages: ["English", "Spanish"],
    uberTip: "Easy highway access via I-4 East from Disney resorts.",
    lat: 28.5447,
    lng: -81.3792
  },
  {
    id: "st-boniface-anaheim",
    name: "St. Boniface Catholic Church (Disneyland / California)",
    diocese: "Diocese of Orange",
    rite: "Roman Rite (Novus Ordo)",
    traditionCategory: "roman",
    tagline: "Primary Catholic Parish for Disneyland Resort Guests",
    address: "120 N Janss St, Anaheim, CA 92805",
    distance: "5-8 minutes from Disneyland Park & Disney California Adventure",
    phone: "(714) 956-3110",
    website: "https://saintboniface.us",
    isFlagship: false,
    description: "Serving Disneyland travelers for decades, St. Boniface offers frequent weekend Masses in English, Spanish, and Vietnamese, located just moments from the Disneyland main gate.",
    liturgyNotes: "Vibrant multicultural liturgies serving Disneyland tourists.",
    features: [
      "Closest Catholic parish to Disneyland Resort",
      "Multicultural liturgies with vibrant music",
      "Convenient morning & evening Mass times"
    ],
    massSchedule: {
      sunday: ["6:30 AM", "8:00 AM", "9:30 AM (Spanish)", "11:00 AM", "12:30 PM (Spanish)", "5:00 PM", "6:30 PM (Vietnamese)"],
      saturdayVigil: ["5:00 PM", "6:30 PM (Vietnamese)"],
      weekday: ["6:30 AM", "8:30 AM (Mon-Fri)"],
      holyDays: ["6:30 AM", "8:30 AM", "7:00 PM (Bilingual)"]
    },
    confessions: "Saturday: 3:30 PM - 4:30 PM",
    languages: ["English", "Spanish", "Vietnamese"],
    uberTip: "Less than $10 rideshare from Disneyland resort hotels.",
    lat: 33.8378,
    lng: -117.9103
  }
];

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/parishes-dlr.js
  // ==========================================

  (function() {
// Catholic Parishes, Shrines & Liturgical Traditions near Disneyland Resort (Anaheim & Orange County, CA)
var disneylandParishesData = CD.disneylandParishesData = global.disneylandParishesData = [
  {
    id: "christ-cathedral",
    name: "Christ Cathedral & Shrine of Our Lady of La Vang",
    diocese: "Diocese of Orange",
    rite: "Roman Rite (Diocesan Cathedral)",
    traditionCategory: "roman",
    tagline: "The Architectural & Spiritual Crown of Southern California",
    address: "13280 Chapman Ave, Garden Grove, CA 92840",
    distance: "8 minutes south of Disneyland down Harbor Blvd (3.5 miles)",
    phone: "(714) 971-2141",
    website: "https://www.christcathedralcalifornia.org",
    isFlagship: true,
    description: "The monumental 34-acre cathedral campus of the Diocese of Orange, consecrated in 2019. Known worldwide for its soaring glass cathedral, 11,000-pipe Hazel Wright Organ, and the breathtaking 35-foot bronze Shrine of Our Lady of La Vang honoring Mary's miraculous apparition. Offers Masses in English, Spanish, Vietnamese, and Latin.",
    liturgyNotes: "Solemn diocesan cathedral liturgies with magnificent pipe organ, sacred choir, and perpetual adoration in the Blessed Sacrament chapel.",
    features: [
      "Monumental 35-foot bronze Marian Shrine of Our Lady of La Vang",
      "Perpetual Eucharistic Adoration Chapel",
      "The Hazel Wright Organ (one of the largest pipe organs in the world)",
      "Extensive 34-acre pilgrimage campus with outdoor Stations of the Cross",
      "Christ Cathedral Cultural Center, art museum, and Catholic bookstore",
      "Spacious visitor parking and beautiful reflecting pools"
    ],
    massSchedule: {
      sunday: [
        "6:15 AM (Vietnamese)",
        "8:15 AM (English)",
        "10:00 AM (English - Bishop/Choir)",
        "11:45 AM (Spanish)",
        "1:30 PM (Vietnamese)",
        "3:15 PM (Vietnamese)",
        "5:00 PM (English)",
        "7:00 PM (Spanish)"
      ],
      saturdayVigil: ["4:30 PM (English)", "6:30 PM (Vietnamese)"],
      weekday: ["6:30 AM (English)", "8:00 AM (English)", "5:30 PM (Vietnamese)", "7:00 PM (Spanish)"]
    },
    confessions: "Monday – Friday: 8:30 AM; Saturday: 9:00 AM; or anytime by appointment",
    languages: ["English", "Spanish", "Vietnamese", "Latin"],
    uberTip: "Quick 8-minute $10-$14 rideshare from Disneyland main entrance or Harbor Blvd hotels.",
    lat: 33.7881,
    lng: -117.8979
  },

  {
    id: "st-boniface-anaheim",
    name: "Saint Boniface Catholic Church",
    diocese: "Diocese of Orange",
    rite: "Roman Rite (Historic Anaheim Mother Church)",
    traditionCategory: "roman",
    tagline: "The Mother Church of Anaheim (Closest Walkable / Short Ride Parish)",
    address: "120 N Janss St, Anaheim, CA 92805",
    distance: "5 minutes north of Disneyland up Harbor Blvd (1.5 miles)",
    phone: "(714) 956-3110",
    website: "https://saintboniface.us",
    isFlagship: false,
    description: "Founded in 1860 by early Catholic pioneers, Saint Boniface is the historic mother church of Anaheim. Located just 1.5 miles north of Disneyland, it offers continuous Sunday morning Masses in English and Spanish, making it the premier choice for Catholic families attending morning Mass before park rope-drop!",
    liturgyNotes: "Reverent parish liturgies with active family community, early morning Sunday offerings, and robust sacramental life.",
    features: [
      "Extremely close proximity—just 5 minutes from the Disneyland main entrance",
      "Early 6:30 AM Sunday Mass allowing theme park rope-drop right after Mass",
      "Historic Catholic cemetery and parish museum documenting early California settlers",
      "Regular confessions and Eucharistic exposition"
    ],
    massSchedule: {
      sunday: [
        "6:30 AM (English)",
        "8:00 AM (English)",
        "9:30 AM (Spanish)",
        "11:30 AM (English)",
        "1:30 PM (Spanish)",
        "5:00 PM (English)",
        "6:30 PM (Spanish)"
      ],
      saturdayVigil: ["5:00 PM (English)", "6:30 PM (Spanish)"],
      weekday: ["8:00 AM (Monday – Saturday)", "6:30 PM (Tuesday & Thursday Spanish)"]
    },
    confessions: "Saturday: 3:30 PM - 4:30 PM & by appointment",
    languages: ["English", "Spanish"],
    uberTip: "Only 1.5 miles north on Harbor Blvd. Short $7-$10 rideshare or quick trip on Anaheim Resort Transit (ART).",
    lat: 33.8344,
    lng: -117.9135
  },

  {
    id: "st-john-baptist-tlm",
    name: "Saint John the Baptist (Norbertine Fathers of St. Michael's Abbey)",
    diocese: "Diocese of Orange",
    rite: "Traditional Latin Mass (1962 Missal) & Reverent Ordinary Form",
    traditionCategory: "tlm",
    tagline: "Gregorian Chant & Solemn Liturgy with the Canons Regular of Prémontré",
    address: "1015 Baker St, Costa Mesa, CA 92626",
    distance: "14 minutes south of Disneyland via CA-55 / I-5 (11.5 miles)",
    phone: "(714) 540-2214",
    website: "https://sjboc.org",
    isFlagship: false,
    description: "Staffed by the Norbertine Fathers (Canons Regular of Prémontré) of world-renowned Saint Michael's Abbey. Celebrates approved Traditional Latin High Mass (Missa Cantata) with sublime Gregorian chant, traditional vestments, and communion at the altar rail, with daily confessions before and during all Masses.",
    liturgyNotes: "Traditional Latin Mass (1962 Roman Missal) celebrated under diocesan faculty. Norbertine choral chant, solemn incense, and reverent ad orientem celebration.",
    features: [
      "Staffed by the holy Norbertine priests of Saint Michael's Abbey",
      "Sunday Missa Cantata (Solemn High Latin Mass) at 12:30 PM",
      "Low Latin Mass at 7:00 AM every Sunday",
      "Perpetual Eucharistic Adoration Chapel on campus",
      "Daily confessions heard before and during every Mass"
    ],
    massSchedule: {
      sunday: [
        "7:00 AM (Traditional Latin Low Mass)",
        "8:00 AM (English Ordinary Form)",
        "9:30 AM (English Ordinary Form)",
        "11:00 AM (English Ordinary Form)",
        "12:30 PM (Traditional Latin Sung High Mass / Missa Cantata)",
        "5:00 PM (English Ordinary Form)"
      ],
      saturdayVigil: ["5:00 PM (English)"],
      weekday: ["6:30 AM (Latin)", "8:00 AM (English)", "12:00 PM (Latin)", "5:30 PM (English)"]
    },
    confessions: "Before every single Mass (30 mins prior) and during Sunday High Masses",
    languages: ["Latin", "English", "Vietnamese"],
    uberTip: "Direct 14-minute drive south down the CA-55 / I-5 freeway. Excellent parking on campus.",
    lat: 33.6762,
    lng: -117.9042
  },

  {
    id: "annunciation-byzantine",
    name: "Annunciation Byzantine Catholic Church",
    diocese: "Ruthenian Byzantine Catholic Eparchy of Phoenix",
    rite: "Byzantine Catholic Rite",
    traditionCategory: "byzantine",
    tagline: "Sacred Iconostasis & Divine Liturgy Literally Adjacent to Disneyland!",
    address: "995 N West St, Anaheim, CA 92801 (Ball Rd & West St)",
    distance: "6 minutes from Disneyland gates (2.4 miles - directly behind Mickey & Friends!)",
    phone: "(714) 533-6292",
    website: "https://annunciationbyzantine.org",
    isFlagship: false,
    description: "In full communion with Rome, Annunciation is part of the Ruthenian Byzantine Catholic Eparchy of Phoenix. Situated literally minutes from the Disneyland Mickey & Friends parking structure, this jewel box church features an exquisite hand-painted iconostasis, Byzantine polyphonic chant, and the ancient Divine Liturgy of Saint John Chrysostom.",
    liturgyNotes: "The sacred Divine Liturgy of Saint John Chrysostom. Holy Communion received under both species (leavened bread & consecrated wine) from a golden liturgical spoon on the tongue. Incense, icons, and eastern liturgical beauty.",
    features: [
      "Incredible proximity—just 6 minutes from Disneyland theme park gates",
      "Authentic Byzantine iconostasis and holy iconography",
      "Ancient Byzantine choral music sung entirely by the faithful and cantor",
      "Prosphora holy blessed bread distributed after the Divine Liturgy",
      "Warm, hospitable parish coffee social following Sunday morning Liturgy"
    ],
    massSchedule: {
      sunday: ["9:00 AM (Matins / Morning Prayer)", "10:00 AM (Divine Liturgy of Saint John Chrysostom)"],
      saturdayVigil: ["5:00 PM (Great Vespers with Holy Communion)"],
      weekday: ["Feast days as announced in bulletin"]
    },
    confessions: "Sunday: 9:15 AM - 9:45 AM & upon request before any liturgy",
    languages: ["English", "Old Church Slavonic chants"],
    uberTip: "Just 2.4 miles on Ball Road. $8 rideshare or short 6-minute drive.",
    lat: 33.8406,
    lng: -117.9272
  },

  {
    id: "newman-ordinariate",
    name: "Blessed John Henry Newman Catholic Fellowship",
    diocese: "Personal Ordinariate of the Chair of Saint Peter",
    rite: "Anglican Use (Divine Worship: The Missal)",
    traditionCategory: "ordinariate",
    tagline: "English Catholic Patrimony & Sacred Choral Hymnody",
    address: "Queen of Life Chapel, 2532 Dupont Dr, Irvine, CA 92612",
    distance: "15 minutes south of Disneyland via I-5 (12 miles)",
    phone: "(949) 296-6415",
    website: "https://www.newmanfellowship.org",
    isFlagship: false,
    description: "Established under Pope Benedict XVI's apostolic constitution, this Ordinariate fellowship preserves the sacred choral, liturgical, and poetic patrimony of the English tradition in full Catholic communion. Celebrated ad orientem with traditional English hymns, King's English prayers, and communion at the altar rail.",
    liturgyNotes: "Divine Worship: The Missal celebrated ad orientem with traditional altar rails, sacred choral music, and traditional language.",
    features: [
      "Personal Ordinariate of the Chair of Saint Peter (Pope Benedict XVI)",
      "Traditional English Catholic hymns and sacred polyphony",
      "Reception of Holy Communion kneeling at the altar rail on the tongue",
      "Welcoming fellowship and large-family community hospitality"
    ],
    massSchedule: {
      sunday: ["9:30 AM (Sung Mass: Divine Worship)"],
      saturdayVigil: [],
      weekday: ["First Fridays at 7:00 PM"]
    },
    confessions: "Sunday: 8:45 AM - 9:15 AM",
    languages: ["English"],
    uberTip: "15-minute drive south down the I-5 to Irvine. Beautiful, peaceful chapel setting.",
    lat: 33.6738,
    lng: -117.8502
  },

  {
    id: "mission-san-juan-capistrano",
    name: "Mission Basilica San Juan Capistrano & The Serra Chapel",
    diocese: "Diocese of Orange",
    rite: "Historic California Mission & Modern Basilica",
    traditionCategory: "roman",
    tagline: "The Jewel of the California Missions & The Only Surviving Serra Chapel (1782)",
    address: "26801 Old Mission Rd, San Juan Capistrano, CA 92675",
    distance: "25 minutes south by car (or 22-min direct Amtrak Pacific Surfliner train from Anaheim!)",
    phone: "(949) 234-1360",
    website: "https://www.missionsjc.com",
    isFlagship: false,
    description: "Founded on All Saints' Day 1776 by Saint Junípero Serra. Houses the famous Serra Chapel—the oldest building in California still in use, and the ONLY surviving church where Saint Junípero Serra celebrated Holy Mass! Next door stands the soaring Mission Basilica San Juan Capistrano, offering Sunday Masses and Eucharistic adoration.",
    liturgyNotes: "Holy Mass offered in both the modern soaring Basilica and historic chapel settings. Surrounded by 250-year-old adobe walls, sacred bells, and blooming gardens.",
    features: [
      "The Serra Chapel (1782): The only place in the world where St. Junípero Serra offered Mass",
      "The Golden Retablo: 400-year-old hand-carved gilded Spanish baroque altarpiece",
      "Direct train excursion: Anaheim ARTIC train station to historic Capistrano depot across the street",
      "Sacred historic mission gardens, koi ponds, and original 1796 mission bells",
      "Full museum exhibits on early Catholic evangelization of the Americas"
    ],
    massSchedule: {
      sunday: [
        "7:30 AM (Basilica)",
        "9:00 AM (Basilica - Family Choir)",
        "11:00 AM (Basilica - Solemn Choir)",
        "1:00 PM (Basilica - Spanish)",
        "5:00 PM (Basilica - Youth Mass)"
      ],
      saturdayVigil: ["4:30 PM (Basilica)"],
      weekday: ["8:30 AM (Monday – Saturday in the Basilica)"]
    },
    confessions: "Saturday: 8:00 AM - 9:00 AM & 3:30 PM - 4:15 PM in the Basilica",
    languages: ["English", "Spanish"],
    uberTip: "Take the Amtrak Pacific Surfliner train from Anaheim ARTIC depot directly to San Juan Capistrano (22 mins)!",
    lat: 33.5019,
    lng: -117.6627
  }
];

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/park-secrets.js
  // ==========================================

  (function() {
// Catholic Secrets, Stained Glass Art, & Christian Heritage in Disney Parks
var parkSecretsData = CD.parkSecretsData = global.parkSecretsData = [
  {
    id: "cinderella-castle-mosaics",
    park: "Magic Kingdom",
    location: "Cinderella Castle Breezeway",
    title: "The 14K Gold European Mosaic Murals",
    category: "Sacred Craftsmanship",
    description: "The 5 magnificent mural panels inside the castle breezeway were designed by Disney Imagineer Dorothea Redmond and handcrafted by German master mosaicist Hanns-Joachim Scharff. Scharff used genuine centuries-old European smalti glass techniques, including over 500 hand-cut glass shades and real 14-karat gold leaf tile work.",
    catholicConnection: "The artisan technique directly mirrors the Byzantine and Roman mosaic traditions found in historic Italian and French basilicas (like St. Mark's Basilica in Venice and Ravenna). Look closely at the faces: the subtle use of complementary jewel-toned glass creates emotional transcendence in the story of redemption.",
    insiderTip: "Stand inside the breezeway in the early morning sunlight or at twilight when the gilded 14k tiles reflect the lanterns.",
    badge: "Must See"
  },
  {
    id: "epcot-italy-st-marks",
    park: "Epcot",
    location: "World Showcase - Italy Pavilion",
    title: "St. Mark's Campanile & The Lion of Venice",
    category: "Sacred Architecture",
    description: "The Italy Pavilion is an architectural tribute to Venetian Gothic and Renaissance Catholic architecture. It features a 105-foot faithful replica of the St. Mark's Campanile bell tower and the Doge's Palace.",
    catholicConnection: "Perched atop the columns are St. Theodore (an early Roman martyr and original patron saint of Venice) and the Winged Lion of St. Mark holding the open Gospel book inscribed with the Latin words: 'Pax tibi Marce, evangelista meus' ('Peace to you, Mark, my evangelist'). The facade of the Doge's Palace also includes classical statues representing Christian theological virtues (Prudence, Justice, Fortitude, and Temperance).",
    insiderTip: "Take a quiet moment on the bridge or near the Neptune Fountain to reflect on centuries of Italian Catholic artistic heritage.",
    badge: "Historical Treasure"
  },
  {
    id: "epcot-germany-st-george",
    park: "Epcot",
    location: "World Showcase - Germany Pavilion",
    title: "Statue of St. George & The Dragon",
    category: "Patron Saints",
    description: "In the center of the German cobblestone plaza stands a tall stone fountain column crowned with an intricate statue of Saint George on horseback slaying the dragon.",
    catholicConnection: "Saint George was a 3rd-century Christian soldier and Roman martyr. In Catholic iconography and chivalric tradition, St. George represents the ultimate Christian warrior conquering Satan and sin through Christ's power and unwavering faith. The statue serves as a visible witness to Catholic patron saint traditions in Bavaria and the Rhineland.",
    insiderTip: "A wonderful spot to teach children about the spiritual armor of God (Ephesians 6) and the victory of virtue over temptation.",
    badge: "Patron Saint"
  },
  {
    id: "epcot-france-gothic-spires",
    park: "Epcot",
    location: "World Showcase - France Pavilion",
    title: "Gothic Spire & Notre-Dame Artisanship",
    category: "Sacred Architecture",
    description: "The architecture of the France pavilion captures the romantic Parisian streets and includes delicate Gothic gargoyles, wrought iron crosses, and spires inspired by Notre-Dame de Paris and Sainte-Chapelle.",
    catholicConnection: "French culture is inextricably bound to its 1,500 years as the 'Eldest Daughter of the Church.' The architectural motifs recall the great Gothic cathedrals that were built as stone catechisms and prayers reaching into the heavens.",
    insiderTip: "Visit the quiet courtyard near the perfume shop or the back pathways for a quiet moment of prayer before enjoying a pastry.",
    badge: "Architecture"
  },
  {
    id: "epcot-mexico-guadalupe",
    park: "Epcot",
    location: "World Showcase - Mexico Pavilion",
    title: "Colonial Sacred Art & Our Lady of Guadalupe",
    category: "Marian Devotion",
    description: "Inside the Mesoamerican pyramid lies the bustling twilight plaza of the San Angel Inn, reflecting the deep syncretism and colonial Spanish Catholic beauty of Mexico.",
    catholicConnection: "Throughout the folk art displays and colonial archways, notice the references to Our Lady of Guadalupe, Patroness of the Americas, and Mexican Catholic folk traditions (including Día de los Muertos ofrendas honoring souls in purgatory and the communion of saints).",
    insiderTip: "The interior plaza's perpetual starlit night provides a cooling, peaceful environment to pray the Hail Mary for the Americas.",
    badge: "Marian Heritage"
  },
  {
    id: "epcot-uk-literary-giants",
    park: "Epcot",
    location: "World Showcase - United Kingdom Pavilion",
    title: "Chesterton, Tolkien & Lewis Literary Legacy",
    category: "Catholic Imagination",
    description: "The quaint cobblestone streets, tea cottages, and hedge gardens of the UK Pavilion honor the British storytellers whose deep Christian worldviews shaped modern fantasy and fairy tales.",
    catholicConnection: "G.K. Chesterton (Catholic apologist and master of wonder), J.R.R. Tolkien (devout daily-Mass Catholic who wrote The Lord of the Rings as a fundamentally Catholic work), and C.S. Lewis all defended fairy tales as reflections of the True Gospel story ('The Gospel is the myth that really happened').",
    insiderTip: "Sit in the quiet rear hedge maze garden for 15 minutes of quiet spiritual reading or journaling.",
    badge: "Literary Legacy"
  },
  {
    id: "liberty-square-scripture",
    park: "Magic Kingdom",
    location: "Liberty Square",
    title: "The Liberty Bell & Leviticus 25:10",
    category: "Biblical Inscription",
    description: "Liberty Square features an authentic replica of the 1776 Liberty Bell cast from the original mold by the Whitechapel Foundry in London.",
    catholicConnection: "Cast directly onto the bell's crown is the sacred Scripture verse from the Book of Leviticus (25:10): 'Proclaim LIBERTY throughout all the Land unto all the Inhabitants thereof.' A powerful reminder that genuine human freedom and dignity are divine gifts from the Creator.",
    insiderTip: "Walk past during early morning rope drop when Liberty Square is peaceful and read the inscription with your family.",
    badge: "Biblical History"
  },
  {
    id: "animal-kingdom-creation",
    park: "Disney's Animal Kingdom",
    location: "Tree of Life & Oasis",
    title: "The St. Francis Spirit of Creation & Stewardship",
    category: "Theology of Creation",
    description: "The central icon of Animal Kingdom is the 145-foot Tree of Life, hand-sculpted with over 300 intricately intertwined animal species.",
    catholicConnection: "St. Francis of Assisi wrote in his *Canticle of the Sun* that every creature is our brother and sister reflecting the majesty of God. The park's mission of conservation echoes the Catholic social teaching of stewardship over God's good creation (*Genesis 2:15* and Pope Francis' *Laudato Si'*).",
    insiderTip: "Take the Discovery Island trails behind the Tree of Life for a meditative walk among cascading waterfalls and shaded grottos.",
    badge: "Creation Theology"
  }
];

// Disneyland Resort (California) Park Secrets & Christian Heritage
var disneylandParkSecretsData = CD.disneylandParkSecretsData = global.disneylandParkSecretsData = [
  {
    id: "sleeping-beauty-gothic-walkthrough",
    park: "Disneyland Park",
    location: "Sleeping Beauty Castle Interior",
    title: "Medieval French Books of Hours & Stained Glass Tapestries",
    category: "Medieval Catholic Art",
    description: "Inside the winding interior passageways of Sleeping Beauty Castle, master animator Eyvind Earle created 3D diorama displays directly modeled on 15th-century French Catholic illuminated manuscripts.",
    catholicConnection: "Earle spent months studying the Très Riches Heures du Duc de Berry and medieval cathedral tapestries. The rich lapis lazuli blues, illuminated gold borders, and Gothic arches reflect how medieval Catholic artists depicted divine truth and triumph of grace over evil.",
    insiderTip: "Walk through during twilight when the passageway lanterns illuminate the stained glass panels with deep jewel tones.",
    badge: "Must See"
  },
  {
    id: "king-arthur-carrousel-chivalry",
    park: "Disneyland Park",
    location: "Fantasyland",
    title: "Christian Chivalry & 1922 Dentzel Hand-Carved Steeds",
    category: "Chivalric Tradition",
    description: "Built by the renowned Dentzel Carrousel Company in 1922, every single one of the 68 jumping horses was hand-carved with historic armor, royal crests, and heraldic crosses.",
    catholicConnection: "The Legend of King Arthur and the Round Table is rooted in Christian chivalry—the code by which knights took solemn vows before Catholic bishops to defend the weak, protect holy places, and seek the Holy Grail (the chalice of the Last Supper).",
    insiderTip: "Look for 'Jingler', the lead horse with ornate bells and floral garlands, dedicated to Julie Andrews.",
    badge: "Chivalric Legend"
  },
  {
    id: "buena-vista-mission-bell",
    park: "Disney California Adventure",
    location: "Buena Vista Street & Red Car Trolley",
    title: "El Camino Real Mission Bell & Saint Junípero Serra Heritage",
    category: "California Mission Heritage",
    description: "At the foot of Buena Vista Street sits an authentic cast iron El Camino Real mission bell mounted on a shepherd's crook post, mirroring the historic bells lining California's Royal Highway.",
    catholicConnection: "The original 21 California Missions were founded by Franciscan missionary Saint Junípero Serra starting in 1769. These bells rang daily for the Angelus prayer, Mass, and community gatherings, marking the birth of California's Catholic foundation.",
    insiderTip: "Pause by the bell in the morning as the Red Car Trolley passes for a tangible connection to California's Franciscan history.",
    badge: "California Heritage"
  },
  {
    id: "new-orleans-st-louis-ironwork",
    park: "Disneyland Park",
    location: "New Orleans Square",
    title: "French Quarter Balconies & St. Louis Cathedral Motifs",
    category: "Sacred Architecture",
    description: "Walt Disney worked directly with New Orleans artisans to cast authentic wrought-iron and cast-iron filigree railings throughout the square.",
    catholicConnection: "The architectural center of the New Orleans French Quarter is Saint Louis Cathedral, the oldest continuously active Roman Catholic cathedral in the United States. The fleur-de-lis and cross motifs in the ironwork reflect centuries of French and Spanish Catholic piety.",
    insiderTip: "Look up at the second-story balconies along Royal Street to spot hand-forged fleur-de-lis symbols.",
    badge: "Historic Architecture"
  },
  {
    id: "san-fransokyo-st-francis",
    park: "Disney California Adventure",
    location: "San Fransokyo Square",
    title: "The Legacy of Saint Francis of Assisi by the Bay",
    category: "Patron Saints",
    description: "The vibrant waterfront district celebrates the heritage of San Francisco, named directly in honor of Saint Francis of Assisi by Spanish Franciscan explorers in 1776.",
    catholicConnection: "Saint Francis is the patron saint of ecology, animals, and peacemakers. The district's wind turbines, solar elements, and celebration of community reflect Franciscan reverence for God's creation and stewardship.",
    insiderTip: "Enjoy a loaf of fresh Boudin sourdough bread on the wharf patio overlooking the tranquil bay waters.",
    badge: "Patron Saint"
  }
];

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/prayer-nooks.js
  // ==========================================

  (function() {
// Tested Quiet Prayer Nooks & Serene Spots in Disney Theme Parks
var prayerNooksData = CD.prayerNooksData = global.prayerNooksData = [
  {
    park: "Magic Kingdom",
    nooks: [
      {
        name: "Liberty Square Heritage Courtyard",
        location: "Behind Ye Olde Christmas Shoppe & Liberty Tree Tavern",
        ambiance: "Quiet, shaded by brick archways and large oak trees, low foot traffic.",
        bestFor: "Praying a 15-minute Rosary or Divine Mercy Chaplet while kids rest.",
        amenities: "Park benches in deep shade, water fountain nearby."
      },
      {
        name: "Cinderella Wishing Well Pathway",
        location: "Eastern pathway between Fantasyland and Tomorrowland",
        ambiance: "Lush botanical gardens, tranquil brick bridge with castle views, bubbling stone fountain.",
        bestFor: "Morning prayer, Marian thanksgiving, quiet contemplation.",
        amenities: "Secluded bench beside the ornate stone wishing well."
      },
      {
        name: "Tom Sawyer Island Porch & Fort Wilderness Trail",
        location: "Aunt Polly's Dock & Back trails of Tom Sawyer Island",
        ambiance: "Rustic rocking chairs overlooking the Rivers of America, peaceful breeze, distant riverboat bell.",
        bestFor: "Deep spiritual reading, Liturgy of the Hours, mid-afternoon retreat.",
        amenities: "Wooden rocking chairs, cool shade, river breeze (accessible via raft)."
      }
    ]
  },
  {
    park: "Epcot",
    nooks: [
      {
        name: "Morocco Pavilion Rear Courtyard",
        location: "Deep inside the Moroccan Bazaar past the Fez House",
        ambiance: "Intricate mosaic zellij tilework, soft trickling central fountain, zero theme park music.",
        bestFor: "Total quiet, contemplative prayer, private meditation away from crowds.",
        amenities: "Authentic shaded alcoves, quiet fountain acoustics."
      },
      {
        name: "United Kingdom Rear Hedge Gardens",
        location: "Behind the Tea Caddy shop and bandstand gazebo",
        ambiance: "English cottage flowerbeds, traditional manicured hedge labyrinth, secluded green lawn.",
        bestFor: "Family prayer time, reading saint stories to children.",
        amenities: "Benches surrounded by lavender and roses."
      },
      {
        name: "Japan Pavilion Waterfall & Koi Pond Garden",
        location: "Terraced paths winding uphill behind Katsura Grill",
        ambiance: "Cascading rock waterfalls, bamboo groves, swimming koi, serene Japanese maples.",
        bestFor: "Peaceful reflection on God's creation, rosary with waterfall white noise.",
        amenities: "Covered pagoda seating, stone paths."
      }
    ]
  },
  {
    park: "Disney's Hollywood Studios",
    nooks: [
      {
        name: "Grand Avenue Arts Courtyard",
        location: "Alleyway beside Muppet*Vision 3D / PizzeRizzo patio",
        ambiance: "Shaded brick facade with wrought-iron seating, relatively quiet outside show release windows.",
        bestFor: "Quick prayer break, resting feet, cool shade.",
        amenities: "Tables with umbrellas, fountain."
      },
      {
        name: "Echo Lake Far Perimeter Walk",
        location: "South-western curved bank of Echo Lake near Indiana Jones exit",
        ambiance: "Open water views, breezy shade from tall Florida palms.",
        bestFor: "St. Christopher traveler's prayer before thrill rides.",
        amenities: "Waterside benches."
      }
    ]
  },
  {
    park: "Disney's Animal Kingdom",
    nooks: [
      {
        name: "Maharajah Jungle Trek Sanctuary Alcove",
        location: "Asian ruins walking trail near the flying fox bats / temple ruins",
        ambiance: "Ancient stone temple arches, prayer flag atmosphere, lush tropical rainforest.",
        bestFor: "Reflecting on missionary saints and the beauty of creation.",
        amenities: "Carved stone seating, misting fans, peaceful birdsong."
      },
      {
        name: "Tree of Life Discovery Island Trails",
        location: "Wooded paths directly beneath the Tree of Life roots",
        ambiance: "Hidden wooden footbridges, rushing streams, lush ferns and subterranean rock hollows.",
        bestFor: "St. Francis Canticle meditation, restful prayer walk.",
        amenities: "Shady secluded benches with zero ride noise."
      }
    ]
  }
];

// Disneyland Resort (California) Quiet Prayer Nooks & Serene Spots
var disneylandPrayerNooksData = CD.disneylandPrayerNooksData = global.disneylandPrayerNooksData = [
  {
    park: "Disneyland Park",
    nooks: [
      {
        name: "Snow White Grotto & Wishing Well",
        location: "East slope pathway directly beside Sleeping Beauty Castle",
        ambiance: "Tranquil waterfall, marble statues of Snow White and the woodland creatures, bubbling wishing well.",
        bestFor: "Morning prayer, Marian thanksgiving, finding peaceful contemplation right next to the castle.",
        amenities: "Shaded curved stone bench facing the waterfall, peaceful birdsong."
      },
      {
        name: "Court of Angels & Royal Street Courtyards",
        location: "New Orleans Square hidden alleyways behind French Market",
        ambiance: "Wrought-iron balconies, historic brick archways, Spanish tiles, secluded from the main parade corridor.",
        bestFor: "Praying a 15-minute Rosary, quiet spiritual reflection.",
        amenities: "Ornate ironwork benches under leafy Magnolia trees."
      },
      {
        name: "Fowler's Harbor & Waterfront Walkway",
        location: "Critter Country & Rivers of America boardwalk",
        ambiance: "River breeze, views of the Sailing Ship Columbia, secluded wooden rocking benches.",
        bestFor: "Mid-day sensory retreat, breathing in God's peace away from loud ride queues.",
        amenities: "Spacious wooden benches overlooking the river water."
      },
      {
        name: "Pixar Short Film & Tomorrowland Elevated Terrace",
        location: "Second-level terrace pathway near Space Mountain",
        ambiance: "Elevated, shaded, breezy, overlooked by Monorail beamway, low pedestrian traffic.",
        bestFor: "Quick prayer of thanksgiving before lunch or afternoon touring.",
        amenities: "Clean modern benches with shaded overhead canopies."
      }
    ]
  },
  {
    park: "Disney California Adventure",
    nooks: [
      {
        name: "Redwood Creek Challenge Trail Woodland Sanctuary",
        location: "Deep interior shaded walking paths of Grizzly Peak",
        ambiance: "Towering California redwoods, babbling natural creeks, natural log benches, pine scent.",
        bestFor: "A Franciscan nature meditation, peaceful Rosary in the shade of giant redwood trees.",
        amenities: "Wooden log benches, cool mountain shade, rushing stream sound."
      },
      {
        name: "San Fransokyo Square Waterfront Pier",
        location: "Waterfront wooden deck overlooking Paradise Bay",
        ambiance: "Gentle bay waters, ocean breeze, sound of water lapping against the pier pilings.",
        bestFor: "Quiet prayer for peace, reflecting on St. Francis of Assisi by the water.",
        amenities: "Outdoor waterfront seating tables and benches."
      },
      {
        name: "Carthay Circle Rose Gardens",
        location: "Quiet curved garden walkway behind the Carthay Circle Restaurant",
        ambiance: "Spanish revival bell tower backdrop, blooming rose bushes, shaded tile fountain.",
        bestFor: "Quiet reading, prayer with babies and resting toddlers.",
        amenities: "Decorative wrought-iron benches under fragrant rose trellises."
      }
    ]
  }
];

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/rosary-mysteries.js
  // ==========================================

  (function() {
// Catholic Rosary Data: Multi-Tradition Prayers & Mysteries (Roman English, Latin TLM, Byzantine Catholic, Anglican Ordinariate)

var TRADITIONS = CD.TRADITIONS = global.TRADITIONS = {
  roman: {
    id: "roman",
    name: "Roman Rite (English)",
    badge: "🇻🇦 Roman Rite",
    lang: "en"
  },
  latin: {
    id: "latin",
    name: "Traditional Latin (TLM)",
    badge: "☩ Latin (TLM)",
    lang: "la"
  },
  byzantine: {
    id: "byzantine",
    name: "Byzantine Catholic (Rule of Theotokos)",
    badge: "☦️ Byzantine",
    lang: "byz"
  },
  anglican: {
    id: "anglican",
    name: "Anglican Ordinariate (Sacral English)",
    badge: "🇬🇧 Ordinariate",
    lang: "ang"
  }
};

var TRADITION_PRAYERS = CD.TRADITION_PRAYERS = global.TRADITION_PRAYERS = {
  roman: {
    signOfCross: {
      title: "Sign of the Cross",
      text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."
    },
    creed: {
      title: "The Apostles' Creed",
      text: "I believe in God, the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord: Who was conceived by the Holy Spirit, born of the Virgin Mary; suffered under Pontius Pilate, was crucified, died and was buried. He descended into hell; on the third day He rose again from the dead; He ascended into heaven, and is seated at the right hand of God the Father Almighty; from thence He will come to judge the living and the dead. I believe in the Holy Spirit, the Holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen."
    },
    ourFather: {
      title: "The Lord's Prayer (Our Father)",
      text: "Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen."
    },
    hailMary: {
      title: "Hail Mary (Ave Maria)",
      text: "Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."
    },
    gloryBe: {
      title: "Glory Be (Gloria Patri)",
      text: "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen."
    },
    fatima: {
      title: "The Fatima Prayer",
      text: "O My Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy. Amen."
    },
    hailHolyQueen: {
      title: "Hail, Holy Queen (Salve Regina)",
      text: "Hail, Holy Queen, Mother of Mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.\n\nV. Pray for us, O Holy Mother of God.\nR. That we may be made worthy of the promises of Christ."
    },
    rosaryClosing: {
      title: "Rosary Concluding Collect",
      text: "Let us pray:\nO God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen."
    },
    stMichael: {
      title: "Saint Michael the Archangel Prayer",
      text: "Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen."
    }
  },
  latin: {
    signOfCross: {
      title: "Signum Crucis",
      text: "In nómine Patris, et Fílii, et Spíritus Sancti. Amen."
    },
    creed: {
      title: "Symbolum Apostolorum (Credo)",
      text: "Credo in Deum Patrem omnipoténtem, Creatórem cæli et terræ. Et in Iesum Christum, Fílium eius únicum, Dóminum nostrum, qui concéptus est de Spíritu Sancto, natus ex María Vírgine, passus sub Póntio Piláto, crucifíxus, mórtuus, et sepúltus: descéndit ad ínferos; tértia die resurréxit a mórtuis; ascéndit ad cælos; sedet ad déxteram Dei Patris omnipoténtis: inde ventúrus est iudicáre vivos et mórtuos. Credo in Spíritum Sanctum, sanctam Ecclésiam cathólicam, sanctórum communiónem, remissiónem peccatórum, carnis resurrectiónem, vitam ætérnam. Amen."
    },
    ourFather: {
      title: "Pater Noster",
      text: "Pater noster, qui es in cælis, sanctificétur nomen tuum. Advéniat regnum tuum. Fiat volúntas tua, sicut in cælo et in terra. Panem nostrum quotidiánum da nobis hódie, et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris. Et ne nos indúcas in tentatiónem: sed líbera nos a malo. Amen."
    },
    hailMary: {
      title: "Ave Maria",
      text: "Ave María, grátia plena, Dóminus tecum; benedícta tu in muliéribus, et benedíctus fructus ventris tui, Iesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen."
    },
    gloryBe: {
      title: "Gloria Patri",
      text: "Glória Patri, et Fílio, et Spíritui Sancto. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen."
    },
    fatima: {
      title: "Oratio Fatimae",
      text: "O mi Iesu, dimítte nobis débita nostra, líbera nos ab igne inferni, perduc in cælum omnes ánimas, præsértim eas, quæ máxime índigent misericórdia tua. Amen."
    },
    hailHolyQueen: {
      title: "Salve Regina",
      text: "Salve, Regína, Mater misericórdiæ; vita, dulcédo, et spes nostra, salve. Ad te clamámus, éxsules fílii Hevæ. Ad te suspirámus, geméntes et flentes in hac lacrimárum valle. Eia ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convórte. Et Iesum, benedíctum fructum ventris tui, nobis post hoc exsílium osténde. O clemens, o pia, o dulcis Virgo María.\n\nV. Ora pro nobis, Sancta Dei Génetrix.\nR. Ut digni efficiámur promissiónibus Christi."
    },
    rosaryClosing: {
      title: "Oratio Conclusiva",
      text: "Orémus:\nDeus, cuius Unigénitus per vitam, mortem et resurrectiónem suam nobis salútis ætérnæ prǽmia comparávit: concéde, quǽsumus; ut hæc mystéria sacratíssimo beátæ Maríæ Vírginis Rosário recoléntes, et imitémur quod cóntinent, et quod promíttunt assequámur. Per eúndem Christum Dóminum nostrum. Amen."
    },
    stMichael: {
      title: "Oratio ad Sanctum Michaelem Archangelum",
      text: "Sancte Míchael Archángele, defénde nos in prǽlio; contra nequítiam et insídias diáboli esto præsídium. Imperet illi Deus, súpplices deprecámur: tuque, Princeps milítiæ cæléstis, Sátanam aliósque spíritus malígnos, qui ad perditiónem animárum pervagántur in mundo, divína virtúte, in inférnum detrúde. Amen."
    }
  },
  byzantine: {
    signOfCross: {
      title: "Sign of the Cross (Eastern Rite)",
      text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."
    },
    creed: {
      title: "The Nicene-Constantinopolitan Creed",
      text: "I believe in one God, Father Almighty, Maker of heaven and earth, and of all things visible and invisible. And in one Lord Jesus Christ, the only-begotten Son of God, begotten of the Father before all ages; Light of Light, true God of true God, begotten, not made, of one essence with the Father, by whom all things were made; Who for us men and for our salvation came down from heaven, and was incarnate of the Holy Spirit and the Virgin Mary, and became man. And was crucified also for us under Pontius Pilate, and suffered and was buried; And the third day He rose again, according to the Scriptures; And ascended into heaven, and sitteth at the right hand of the Father; And He shall come again with glory to judge the living and the dead, Whose Kingdom shall have no end. And in the Holy Spirit, the Lord, the Giver of Life, Who proceedeth from the Father, Who with the Father and the Son together is worshipped and glorified, Who spoke by the prophets. In One, Holy, Catholic, and Apostolic Church. I acknowledge one baptism for the remission of sins. I look for the resurrection of the dead, and the life of the world to come. Amen."
    },
    ourFather: {
      title: "Our Father (Eastern Doxology)",
      text: "Our Father, Who art in heaven, hallowed be Thy name. Thy Kingdom come. Thy will be done, on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. For Thine is the kingdom, and the power, and the glory, of the Father, and of the Son, and of the Holy Spirit, now and ever, and unto ages of ages. Amen."
    },
    hailMary: {
      title: "Theotokos Virgin Rejoice (Bogoroditse Devo)",
      text: "Rejoice, O Virgin Theotokos, Mary full of grace, the Lord is with thee! Blessed art thou among women, and blessed is the fruit of thy womb, for thou hast borne the Savior of our souls."
    },
    gloryBe: {
      title: "Doxology (Glory to the Father)",
      text: "Glory to the Father, and to the Son, and to the Holy Spirit, now and ever, and unto ages of ages. Amen."
    },
    fatima: {
      title: "The Jesus Prayer & Troparion",
      text: "Lord Jesus Christ, Son of God, have mercy on me, a sinner! Most Holy Theotokos, save us!"
    },
    hailHolyQueen: {
      title: "Axion Estin (It is Truly Meet)",
      text: "It is truly meet to bless thee, O Theotokos, ever-blessed and most pure, and the Mother of our God. More honorable than the Cherubim, and beyond compare more glorious than the Seraphim, without corruption thou gavest birth to God the Word. True Theotokos, thee do we magnify!"
    },
    rosaryClosing: {
      title: "Eastern Troparion of Thanksgiving",
      text: "O Lord, Who hast blessed those who bless Thee, and sanctified those who trust in Thee: save Thy people and bless Thine inheritance. Preserve the fullness of Thy Church; sanctify those who love the beauty of Thy house. Glorify them in return by Thy divine power, and forsake us not who put our trust in Thee. Amen."
    },
    stMichael: {
      title: "Troparion to the Archangel Michael",
      text: "Supreme Commander of the Heavenly Hosts, we unworthy ones beseech thee, by thy prayers encompass us beneath the wings of thine immaterial glory, preserving us who earnestly fall down and cry out: Deliver us from all danger, for thou art the leader of the heavenly powers. Amen."
    }
  },
  anglican: {
    signOfCross: {
      title: "Sign of the Cross (Coverdale)",
      text: "In the Name of the Father, and of the Son, and of the Holy Ghost. Amen."
    },
    creed: {
      title: "The Apostles' Creed (Book of Divine Worship)",
      text: "I believe in God the Father Almighty, Maker of heaven and earth: And in Jesus Christ his only Son our Lord, Who was conceived by the Holy Ghost, Born of the Virgin Mary, Suffered under Pontius Pilate, Was crucified, dead, and buried: He descended into hell; The third day he rose again from the dead; He ascended into heaven, And sitteth on the right hand of God the Father Almighty; From thence he shall come to judge the quick and the dead. I believe in the Holy Ghost; The holy Catholic Church; The Communion of Saints; The Forgiveness of sins; The Resurrection of the body, And the Life everlasting. Amen."
    },
    ourFather: {
      title: "The Lord's Prayer (Sacral English)",
      text: "Our Father, which art in heaven, Hallowed be thy Name. Thy kingdom come. Thy will be done, in earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, As we forgive them that trespass against us. And lead us not into temptation; But deliver us from evil. For thine is the kingdom, The power, and the glory, For ever and ever. Amen."
    },
    hailMary: {
      title: "Hail Mary (Traditional English)",
      text: "Hail Mary, full of grace, the Lord is with thee: blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."
    },
    gloryBe: {
      title: "Gloria Patri (Sacral English)",
      text: "Glory be to the Father, and to the Son: and to the Holy Ghost; As it was in the beginning, is now, and ever shall be: world without end. Amen."
    },
    fatima: {
      title: "The Fatima Prayer",
      text: "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of thy mercy. Amen."
    },
    hailHolyQueen: {
      title: "Hail, Holy Queen (Traditional Salve)",
      text: "Hail, Holy Queen, Mother of Mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this vale of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.\n\nV. Pray for us, O Holy Mother of God.\nR. That we may be made worthy of the promises of Christ."
    },
    rosaryClosing: {
      title: "The Rosary Collect (Book of Divine Worship)",
      text: "Let us pray:\nO God, whose only-begotten Son, by his life, death, and resurrection, hath purchased for us the rewards of everlasting life: grant, we beseech thee; that meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain, and obtain what they promise; through the same Christ our Lord. Amen."
    },
    stMichael: {
      title: "Saint Michael the Archangel Prayer",
      text: "Saint Michael the Archangel, defend us in battle; be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the heavenly host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen."
    }
  }
};

var ROSARY_MYSTERIES = CD.ROSARY_MYSTERIES = global.ROSARY_MYSTERIES = {
  joyful: {
    name: "Joyful Mysteries",
    color: "#f59e0b",
    tagline: "The Incarnation & Early Life of Jesus (5 Decades)",
    decades: [
      {
        decadeNumber: 1,
        title: "The Annunciation",
        fruit: "Humility",
        scripture: "The angel Gabriel said to Mary, 'Do not be afraid, Mary, for you have found favor with God.' (Luke 1:30)",
        queueReflection: "As we stand in line today, we ask Our Lady for a humble heart that says 'Yes' to God's will in every little moment of our family vacation."
      },
      {
        decadeNumber: 2,
        title: "The Visitation",
        fruit: "Love of Neighbor & Charity",
        scripture: "Mary arose and went with haste into the hill country to visit Elizabeth. (Luke 1:39)",
        queueReflection: "We pray for joyful charity and kindness toward the cast members, tired parents, and other families around us in the parks."
      },
      {
        decadeNumber: 3,
        title: "The Nativity",
        fruit: "Poverty of Spirit & Gratitude",
        scripture: "She gave birth to her firstborn Son and wrapped Him in swaddling cloths and laid Him in a manger. (Luke 2:7)",
        queueReflection: "We thank God for the blessing of this trip and ask Jesus to keep our hearts focused on simple family love over material souvenirs."
      },
      {
        decadeNumber: 4,
        title: "The Presentation in the Temple",
        fruit: "Obedience & Purity",
        scripture: "They brought Jesus up to Jerusalem to present Him to the Lord. (Luke 2:22)",
        queueReflection: "We consecrate our children and our family to the Sacred Heart of Jesus and the Immaculate Heart of Mary."
      },
      {
        decadeNumber: 5,
        title: "The Finding of Jesus in the Temple",
        fruit: "Joy in Finding Jesus & Wisdom",
        scripture: "After three days they found Him in the temple, sitting among the teachers, listening to them. (Luke 2:46)",
        queueReflection: "Whenever we feel tired or overwhelmed in crowds, we remember that Jesus is always near, waiting for us in the quiet temple of our hearts."
      }
    ]
  },
  luminous: {
    name: "Luminous Mysteries",
    color: "#3b82f6",
    tagline: "The Public Ministry & Light of Christ (5 Decades)",
    decades: [
      {
        decadeNumber: 1,
        title: "The Baptism in the Jordan",
        fruit: "Openness to the Holy Spirit",
        scripture: "A voice came from heaven, 'You are My beloved Son; with You I am well pleased.' (Mark 1:11)",
        queueReflection: "We renew our baptismal promises and pray for the grace to shine with the light of Christ everywhere we go."
      },
      {
        decadeNumber: 2,
        title: "The Wedding at Cana",
        fruit: "To Jesus through Mary",
        scripture: "His mother said to the servants, 'Do whatever He tells you.' (John 2:5)",
        queueReflection: "Mary interceded for joy and celebration at a wedding feast; we ask her to bless our family vacation with peace, good cheer, and unity."
      },
      {
        decadeNumber: 3,
        title: "The Proclamation of the Kingdom",
        fruit: "Repentance & Trust in God",
        scripture: "Jesus came into Galilee, proclaiming the gospel of God: 'The kingdom of God is at hand; repent and believe.' (Mark 1:14-15)",
        queueReflection: "We pray that our family acts as cheerful witnesses of the Gospel through our patience, smiles, and graciousness in long waits."
      },
      {
        decadeNumber: 4,
        title: "The Transfiguration",
        fruit: "Desire for Holiness",
        scripture: "He was transfigured before them, and His face shone like the sun, and His clothes became white as light. (Matthew 17:2)",
        queueReflection: "Amid the sparkling lights and castles of the theme park, we ask the Holy Spirit to let us glimpse the true eternal beauty of Heaven."
      },
      {
        decadeNumber: 5,
        title: "The Institution of the Eucharist",
        fruit: "Eucharistic Adoration & Thanksgiving",
        scripture: "Jesus took bread, and when He had given thanks, He broke it and gave it to them, saying, 'This is My body.' (Luke 22:19)",
        queueReflection: "We offer this decade in thanksgiving for Holy Mass and pray for our home priests and parish community back home."
      }
    ]
  },
  sorrowful: {
    name: "Sorrowful Mysteries",
    color: "#ef4444",
    tagline: "The Passion & Redeeming Sacrifice of Jesus (5 Decades)",
    decades: [
      {
        decadeNumber: 1,
        title: "The Agony in the Garden",
        fruit: "Sorrow for Sin & True Contrition",
        scripture: "In His anguish He prayed more earnestly, and His sweat became like great drops of blood falling to the ground. (Luke 22:44)",
        queueReflection: "When lines are long, feet are sore, or Florida heat is heavy, we offer our small discomforts in union with Jesus in Gethsemane."
      },
      {
        decadeNumber: 2,
        title: "The Scourging at the Pillar",
        fruit: "Purity & Mortification",
        scripture: "Pilate took Jesus and scourged Him. (John 19:1)",
        queueReflection: "We pray for patience and self-control, asking God to help us respond gently when tempers flare or children get tired."
      },
      {
        decadeNumber: 3,
        title: "The Crowning with Thorns",
        fruit: "Moral Courage & Humility",
        scripture: "Platting a crown of thorns, they put it on His head and put a reed in His right hand. (Matthew 27:29)",
        queueReflection: "We pray for the courage to stand up for our Catholic faith with kindness and joy in a modern secular world."
      },
      {
        decadeNumber: 4,
        title: "The Carrying of the Cross",
        fruit: "Patience in Trials",
        scripture: "Bearing His own cross, He went out to the place of the skull, which in Aramaic is called Golgotha. (John 19:17)",
        queueReflection: "We ask the Lord for the grace of Simon of Cyrene—to gladly help each other carry strollers, backpacks, and family burdens today."
      },
      {
        decadeNumber: 5,
        title: "The Crucifixion and Death of Our Lord",
        fruit: "Pardon & Salvation of Souls",
        scripture: "Jesus said, 'Father, forgive them, for they know not what they do.' (Luke 23:34)",
        queueReflection: "We pray for peace in our families, forgiveness for any misunderstandings today, and the salvation of all souls."
      }
    ]
  },
  glorious: {
    name: "Glorious Mysteries",
    color: "#10b981",
    tagline: "The Resurrection & Eternal Kingdom of Christ (5 Decades)",
    decades: [
      {
        decadeNumber: 1,
        title: "The Resurrection",
        fruit: "Faith & New Life",
        scripture: "He is not here; He has risen, just as He said. Come and see the place where He lay. (Matthew 28:6)",
        queueReflection: "Christ is risen! We pray for vibrant Easter joy and a renewed sense of wonder at God's miraculous gift of life and family."
      },
      {
        decadeNumber: 2,
        title: "The Ascension",
        fruit: "Hope & Desire for Heaven",
        scripture: "As they were watching, He was lifted up, and a cloud took Him out of their sight. (Acts 1:9)",
        queueReflection: "Earthly theme parks give us a tiny foretaste of wonder, but our true forever home and eternal paradise is with God in Heaven."
      },
      {
        decadeNumber: 3,
        title: "The Descent of the Holy Spirit (Pentecost)",
        fruit: "Wisdom & Zeal for the Gospel",
        scripture: "They were all filled with the Holy Spirit and began to speak in other tongues as the Spirit gave them utterance. (Acts 2:4)",
        queueReflection: "We pray for the 7 Gifts of the Holy Spirit in our family: Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, and Fear of the Lord."
      },
      {
        decadeNumber: 4,
        title: "The Assumption of the Blessed Virgin Mary",
        fruit: "Grace of a Happy Death & True Devotion to Mary",
        scripture: "A great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet. (Revelation 12:1)",
        queueReflection: "We honor Mary, Queen of the Universe and patroness of Orlando tourists, asking her maternal mantle of protection over our vacation."
      },
      {
        decadeNumber: 5,
        title: "The Coronation of Mary as Queen of Heaven and Earth",
        fruit: "Trust in Mary's Intercession & Perseverance",
        scripture: "On her head was a crown of twelve stars. (Revelation 12:1)",
        queueReflection: "We remember that Christ is the true King and Mary our loving Queen. May our vacation bring honor to Their Holy Names."
      }
    ]
  },
  byzantine_rule: {
    name: "Byzantine Rule of the Theotokos",
    color: "#8b5cf6",
    tagline: "The 15 Steps of the Mother of God (Eastern Tradition)",
    decades: [
      {
        decadeNumber: 1,
        title: "Nativity of the Most Holy Theotokos",
        fruit: "Joy of Salvation",
        scripture: "Thy Nativity, O Virgin Theotokos, hath proclaimed joy to the whole world! (Troparion)",
        queueReflection: "We rejoice in the birth of the Blessed Virgin Mary, thanking God for the gift of mothers, grandmothers, and daughters in our family."
      },
      {
        decadeNumber: 2,
        title: "Entry of the Theotokos into the Temple",
        fruit: "Consecration to God",
        scripture: "The young maiden Mary is led into the Holy of Holies to dwell in the presence of the Lord. (Protoevangelium)",
        queueReflection: "We dedicate our children's minds and hearts to God, praying they remain pure and consecrated amidst worldly noise."
      },
      {
        decadeNumber: 3,
        title: "The Annunciation to the Virgin Mary",
        fruit: "Obedience & Humility",
        scripture: "Rejoice, O highly favored one, the Lord is with thee! (Luke 1:28)",
        queueReflection: "We ask the Holy Theotokos to teach us how to say 'Let it be done unto me according to Thy Word' in every circumstance."
      },
      {
        decadeNumber: 4,
        title: "The Meeting of Mary & Elizabeth",
        fruit: "Brotherly Love & Kindness",
        scripture: "When Elizabeth heard the greeting of Mary, the baby leaped in her womb. (Luke 1:41)",
        queueReflection: "We pray for family unity, generosity, and peace between siblings while traveling and exploring the parks."
      },
      {
        decadeNumber: 5,
        title: "The Nativity of Christ Our Savior",
        fruit: "Peace on Earth & Humility",
        scripture: "Glory to God in the highest, and on earth peace, goodwill toward men! (Luke 2:14)",
        queueReflection: "We worship Christ the newborn King, finding peace in God's presence even in the midst of bustling crowds."
      },
      {
        decadeNumber: 6,
        title: "The Meeting of the Lord (Hypapante)",
        fruit: "Patience & Fulfillment",
        scripture: "Lord, now lettest Thou Thy servant depart in peace, according to Thy word. (Luke 2:29)",
        queueReflection: "Like holy Simeon, we wait with patient hearts, recognizing Christ as the true Light of the nations."
      },
      {
        decadeNumber: 7,
        title: "The Flight into Egypt",
        fruit: "Trust in Divine Protection",
        scripture: "Take the child and His mother, and flee to Egypt, and remain there until I tell you. (Matthew 2:13)",
        queueReflection: "We pray for all travelers, refugees, and families far from home, placing our travels under St. Joseph's watchful care."
      },
      {
        decadeNumber: 8,
        title: "Finding Jesus in the Temple",
        fruit: "Seeking Christ Daily",
        scripture: "Did you not know that I must be about My Father's business? (Luke 2:49)",
        queueReflection: "We ask for the grace to seek Jesus first each day—through morning prayers, the Rosary, and Sunday Mass."
      },
      {
        decadeNumber: 9,
        title: "The Miracle at Cana of Galilee",
        fruit: "Intercession of Mary",
        scripture: "Do whatever He tells you. (John 2:5)",
        queueReflection: "We ask Our Lady to turn our ordinary family moments, line waits, and meals into fountains of grace and sweet memory."
      },
      {
        decadeNumber: 10,
        title: "The Theotokos at the Foot of the Cross",
        fruit: "Compassion & Steadfastness",
        scripture: "Standing by the cross of Jesus were His mother and His mother's sister. (John 19:25)",
        queueReflection: "We stand with Mary in compassion for the sick, the lonely, and all who suffer in body or spirit today."
      },
      {
        decadeNumber: 11,
        title: "The Glorious Resurrection (Pascha)",
        fruit: "Victory over Sin & Death",
        scripture: "Christ is risen from the dead, trampling down death by death! (Paschal Troparion)",
        queueReflection: "We proclaim the joyful victory of Christ over sin and death, singing Paschal praise in our hearts."
      },
      {
        decadeNumber: 12,
        title: "The Ascension of Our Lord",
        fruit: "Heavenly Mindedness",
        scripture: "I am with you always, even unto the end of the world. (Matthew 28:20)",
        queueReflection: "We fix our gaze on the eternal Kingdom above, remembering that our ultimate citizenship is in Heaven."
      },
      {
        decadeNumber: 13,
        title: "Descent of the Holy Spirit at Pentecost",
        fruit: "Gifts of the Holy Spirit",
        scripture: "Heavenly King, Comforter, the Spirit of Truth, come and abide in us! (Eastern Hymn)",
        queueReflection: "We ask the Holy Spirit to fill our family with the fruits of love, joy, peace, patience, kindness, and self-control."
      },
      {
        decadeNumber: 14,
        title: "The Dormition of the Most Holy Theotokos",
        fruit: "Grace of a Peaceful Rest",
        scripture: "In giving birth you preserved your virginity; in falling asleep you did not forsake the world, O Theotokos! (Troparion)",
        queueReflection: "We honor the peaceful falling asleep of Mary, trusting in her ceaseless motherly prayers before the throne of God."
      },
      {
        decadeNumber: 15,
        title: "The Crowning & Protection of the Theotokos",
        fruit: "Maternal Protection (Pokrov)",
        scripture: "Today the Virgin stands in the midst of the Church, invisibly praying to God for us with the choirs of saints. (Kondakion)",
        queueReflection: "We take shelter beneath the holy veil of the Mother of God, asking her protection over our home, church, and loved ones."
      }
    ]
  }
};

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/queue-companions-data.js
  // ==========================================

  (function() {
// Catholic Disney: Queue Companions - Saints, Miracles & Faith in Line
// Connects every major Disney attraction to an authentic Catholic saint, Christian scientist, miracle, or sacred tradition.

var QUEUE_COMPANIONS = CD.QUEUE_COMPANIONS = global.QUEUE_COMPANIONS = [
  // ==========================================
  // MAGIC KINGDOM
  // ==========================================
  {
    id: "peter_pan",
    name: "Peter Pan's Flight",
    park: "Magic Kingdom",
    land: "Fantasyland",
    icon: "⛵",
    saint: "St. Joseph of Cupertino (The Flying Friar)",
    saintTitle: "Patron Saint of Aviators, Pilots & Air Travelers",
    feastDay: "September 18",
    scripture: "They that hope in the Lord shall renew their strength, they shall take wings as eagles. (Isaiah 40:31)",
    story: "As your pirate galleon lifts off the track to soar over London's Big Ben toward Neverland, remember the real-life 'Flying Friar,' Saint Joseph of Cupertino. Born in 17th-century Italy, Joseph was so clumsy as a boy that people thought he could never accomplish anything. But his love for Jesus and Mary was so pure and intense that during Mass or prayer, he would literally levitate into the air! On dozens of documented occasions in front of crowds, Joseph would float toward the altar or fly into the branches of church trees in prayerful ecstasy.",
    didYouKnow: "Because of his miraculous flights, the Catholic Church officially named St. Joseph of Cupertino the patron saint of airplane pilots, flight attendants, astronauts, and anyone traveling by air!",
    queueReflection: "How can we lift up our hearts to God today, like St. Joseph of Cupertino, offering up our worries and enjoying the joy of flight with our family?"
  },
  {
    id: "space_mountain",
    name: "Space Mountain",
    park: "Magic Kingdom",
    land: "Tomorrowland",
    icon: "🚀",
    saint: "Fr. Georges Lemaître & St. Dominic",
    saintTitle: "Father of the Big Bang Theory & The Star of Truth",
    feastDay: "August 8 (St. Dominic)",
    scripture: "The heavens declare the glory of God, and the firmament proclaims His handiwork. (Psalm 19:1)",
    story: "Before you blast off into the dark cosmos of Space Mountain, discover the Catholic priest who unlocked the universe! In 1927, Father Georges Lemaître, a Belgian Catholic priest, mathematician, and astrophysicist, proposed what we now call the 'Big Bang Theory'—the revolutionary idea that the universe had a definitive beginning and is constantly expanding. When he presented his math to Albert Einstein, Einstein was amazed and said, 'This is the most beautiful and satisfactory explanation of creation to which I have ever listened.'",
    didYouKnow: "Father Lemaître wore his Catholic clerical collar every day while teaching physics at university, showing the world that Catholic faith and cutting-edge science are in perfect harmony!",
    queueReflection: "As you race through the stars, thank God for the sheer vastness and beauty of His creation, designed with divine order and love."
  },
  {
    id: "seven_dwarfs",
    name: "Seven Dwarfs Mine Train",
    park: "Magic Kingdom",
    land: "Fantasyland",
    icon: "💎",
    saint: "St. Barbara",
    saintTitle: "Patron Saint of Miners, Tunnelers & Subterranean Workers",
    feastDay: "December 4",
    scripture: "The earth is the Lord's and all that is in it, the world, and those who live in it. (Psalm 24:1)",
    story: "As you wait to dig for glowing rubies and diamonds with the Seven Dwarfs, meet Saint Barbara, the ancient guardian of subterranean miners. When early Christian miners dug deep underground into dangerous shafts across Europe, they placed statues of St. Barbara at the tunnel entrances to pray for her protection against cave-ins, sudden darkness, and flashes of underground fire. To this day, in mining towns from Germany to South America, miners still invoke St. Barbara before heading deep into the rock.",
    didYouKnow: "The story of Snow White was collected by the Brothers Grimm in Germany, a region where Catholic miners celebrated 'Barbara Day' by bringing cherry branches indoors to bloom on Christmas!",
    queueReflection: "The dwarfs work hard every day with joy, whistling while they work. How can our family practice cheerful diligence in our daily chores and schoolwork?"
  },
  {
    id: "haunted_mansion",
    name: "The Haunted Mansion",
    park: "Magic Kingdom",
    land: "Liberty Square",
    icon: "👻",
    saint: "St. Benedict of Nursia",
    saintTitle: "Father of Western Monasticism • Protector Against the Demonic & Evil Spirits",
    feastDay: "July 11",
    scripture: "Crux Sacra Sit Mihi Lux! Non Draco Sit Mihi Dux! (May the Holy Cross be my light! May the dragon never be my guide!)",
    story: "As you step into the eerie gloom of the Haunted Mansion and hear the ghost host welcome you to the 999 'Happy Haunts,' remember the greatest spiritual defender in Church history: Saint Benedict of Nursia. In the 6th century, corrupt men tried to murder Benedict by offering him a glass of poisoned wine. When Benedict simply made the Sign of the Cross over the cup, the glass miraculously shattered into pieces as if struck by a stone! When devils attempted to terrify his monks with phantoms and dark illusions, Benedict taught them that Christ's Cross immediately scatters all demonic deceptions.",
    didYouKnow: "The famous 'Jubilee Medal of Saint Benedict' is the Catholic Church's official sacramental of protection and minor exorcism! The letters on the medal stand for Latin prayers: 'CSSML' (May the Holy Cross be my light) and 'VRS' (Begone, Satan, never tempt me with vain things!). Wearing it reminds us that evil spirits are completely powerless against Christ.",
    queueReflection: "If you ever feel scared of the dark or spooky illusions, remember the prayer of St. Benedict: 'May the Holy Cross be my light!' How can making the Sign of the Cross bring our family immediate peace?"
  },
  {
    id: "pirates",
    name: "Pirates of the Caribbean",
    park: "Magic Kingdom",
    land: "Adventureland",
    icon: "🏴‍☠️",
    saint: "St. Vincent de Paul",
    saintTitle: "Patron Saint of Captives, Prisoners & Charitable Works",
    feastDay: "September 27",
    scripture: "He has sent me to proclaim liberty to the captives and recovery of sight to the blind. (Luke 4:18)",
    story: "Before you plunge down the waterfall into the pirate battle of Castillo del Morro, hear the unbelievable true story of Saint Vincent de Paul! In 1605, while sailing across the Mediterranean, his ship was attacked and captured by Barbary pirates. Vincent was held in chains, sold as an enslaved laborer in North Africa, and forced to work for a series of masters. But Vincent's holy joy, kindness, and unshakeable faith were so radiant that he actually converted his final pirate master back to the Christian faith, escaped back to France, and spent the rest of his life founding hospitals and ransoming Christian captives!",
    didYouKnow: "Catholic religious orders like the Trinitarians and Mercedarians literally raised ransoms to trade their own lives to free prisoners captured by real Caribbean and Mediterranean pirates!",
    queueReflection: "St. Vincent responded to captivity with forgiveness and charity. How can we show patience and love when someone annoys or mistreats us today?"
  },
  {
    id: "big_thunder",
    name: "Big Thunder Mountain Railroad",
    park: "Magic Kingdom",
    land: "Frontierland",
    icon: "🚂",
    saint: "St. Kateri Tekakwitha",
    saintTitle: "Lily of the Mohawks • First Native American Catholic Saint",
    feastDay: "July 14",
    scripture: "I can do all things through Christ who strengthens me. (Philippians 4:13)",
    story: "As you prepare to board the 'wildest ride in the wilderness,' meet Saint Kateri Tekakwitha. Born in 1656 in the rugged North American frontier, she lost her parents to smallpox as a child and suffered facial scarring and weak eyesight. Despite immense family pressure and harsh wilderness survival conditions, she embraced the Catholic faith with heroic courage, walking over 200 miles through untamed forests to reach a Christian mission where she could devote her life entirely to prayer and caring for the sick.",
    didYouKnow: "When St. Kateri passed away at just 24 years old, witnesses recorded that all the smallpox scars on her face miraculously vanished within minutes, leaving her radiant and glowing!",
    queueReflection: "The frontier takes endurance and grit. How can we ask St. Kateri for courage when our faith is tested by friends or culture?"
  },
  {
    id: "jungle_cruise",
    name: "Jungle Cruise",
    park: "Magic Kingdom",
    land: "Adventureland",
    icon: "🦛",
    saint: "St. Francis Xavier",
    saintTitle: "Patron Saint of Explorers, Navigators & Foreign Missions",
    feastDay: "December 3",
    scripture: "Go into all the world and proclaim the good news to the whole creation. (Mark 16:15)",
    story: "Your skipper might tell silly river jokes about the 'backside of water,' but Saint Francis Xavier lived the real river expedition of faith! One of the original seven Jesuit companions of St. Ignatius of Loyola, Francis traveled over 40,000 miles by wooden ship, raft, and foot across uncharted rivers in India, the Moluccas (Spice Islands), and Japan. He braved tropical fevers, river bandits, and wild tigers, baptizing an estimated 30,000 souls and learning local languages to share God's word.",
    didYouKnow: "Francis Xavier's body remains miraculously incorrupt after nearly 500 years in Goa, India, where millions of pilgrims still visit his shrine!",
    queueReflection: "The Jungle Cruise reminds us of the exotic variety of God's earth. What is one country or culture our family would love to learn more about?"
  },
  {
    id: "small_world",
    name: "\"it's a small world\"",
    park: "Magic Kingdom",
    land: "Fantasyland",
    icon: "🌍",
    saint: "Pope St. John Paul II & St. Thérèse",
    saintTitle: "The Pilgrim Pope & The Little Flower of the Missions",
    feastDay: "October 22 (JPII) • October 1 (St. Thérèse)",
    scripture: "After this I looked, and there was a great multitude that no one could count, from every nation, from all tribes and peoples and languages. (Revelation 7:9)",
    story: "The iconic dolls singing 'it's a small world' in 29 languages represent the harmony of all human cultures under God. Pope Saint John Paul II loved this universal brotherhood deeply. Known as the 'Pilgrim Pope,' he traveled to 129 countries, kissing the ground of every nation he visited and establishing World Youth Day to bring young people from all corners of the globe together in Eucharistic adoration and joy.",
    didYouKnow: "The word 'Catholic' literally comes from the Greek 'Katholikos,' meaning 'universal' or 'throughout the whole world.' The Church was truly global long before modern theme parks!",
    queueReflection: "As you cruise through the nations, pray for peace in our world and for Catholic missionaries serving in difficult or poor countries."
  },
  {
    id: "tron",
    name: "TRON Lightcycle / Run",
    park: "Magic Kingdom",
    land: "Tomorrowland",
    icon: "🏍️",
    saint: "Blessed Carlo Acutis",
    saintTitle: "Patron Saint of the Internet, Gamers & Programmers",
    feastDay: "October 12",
    scripture: "To always be close to Jesus, that's my life plan. (Blessed Carlo Acutis)",
    story: "As you straddle your glowing digital lightcycle to enter the digital Grid, meet the first millennial Blessed of the Catholic Church: Carlo Acutis. Born in 1991, Carlo loved video games, PlayStation, coding, and playing soccer with his friends. But above all, he loved Jesus in the Eucharist, calling the Holy Eucharist his 'highway to heaven.' Using his computer programming skills as a teenager, he created an internationally acclaimed website documenting all the Eucharistic miracles in church history before dying of leukemia in 2006 at just 15 years old.",
    didYouKnow: "Carlo was beatified wearing jeans, a warm-up jacket, and Nike sneakers! He showed the world that modern kids and tech-lovers can become great saints.",
    queueReflection: "How can our family use our phones, screens, and digital technology for good, rather than letting them distract us from prayer and each other?"
  },
  {
    id: "tiana",
    name: "Tiana's Bayou Adventure",
    park: "Magic Kingdom",
    land: "Frontierland",
    icon: "🐸",
    saint: "St. Joseph the Worker & Ven. Henriette DeLille",
    saintTitle: "Patron of Honest Labor & New Orleans Servant of the Poor",
    feastDay: "May 1 (St. Joseph the Worker)",
    scripture: "Whatever you do, work heartily, as for the Lord and not for men. (Colossians 3:23)",
    story: "Tiana’s story is all about family, honest hard work, and sharing delicious food around a joyful table in historic New Orleans. In Catholic tradition, Saint Joseph the Worker taught Jesus the dignity of physical craftsmanship in his Nazareth workshop. And right in the heart of historic 19th-century New Orleans lived Venerable Henriette DeLille, a free woman of color who devoted her entire life to feeding the hungry, caring for elderly enslaved people, and teaching children.",
    didYouKnow: "Venerable Henriette DeLille founded the Sisters of the Holy Family in New Orleans in 1842, whose motto was: 'I believe in God. I hope in God. I love. I want to live and die for God.'",
    queueReflection: "Tiana's father taught her that food brings people together from all walks of life. How does sharing family dinners build love and unity in our home?"
  },
  {
    id: "pooh",
    name: "The Many Adventures of Winnie the Pooh",
    park: "Magic Kingdom",
    land: "Fantasyland",
    icon: "🍯",
    saint: "St. Ambrose",
    saintTitle: "Patron Saint of Beekeepers, Candlemakers & Honey",
    feastDay: "December 7",
    scripture: "Gracious words are like a honeycomb, sweetness to the soul and health to the body. (Proverbs 16:24)",
    story: "Pooh Bear loves his 'hunny,' and in Catholic history, honey is a sacred symbol of holy teaching! Saint Ambrose, the 4th-century Bishop of Milan who baptized Saint Augustine, was known as the 'Honey-Tongued Doctor.' Legend recounts that when Ambrose was an infant sleeping outdoors, a swarm of bees landed gently on his lips and flew away without stinging him, leaving behind drops of sweet honey. His preaching was so gentle, wise, and sweet that people flocked from hundreds of miles to hear him.",
    didYouKnow: "In Catholic liturgy, pure beeswax candles are still required on the altar because the bees' clean work without pollen destruction symbolizes the purity of Christ and Our Lady!",
    queueReflection: "Are our words to our brothers, sisters, and parents as sweet as honey, or do we sometimes sting with complaints?"
  },

  // ==========================================
  // EPCOT
  // ==========================================
  {
    id: "living_land",
    name: "Living with the Land",
    park: "EPCOT",
    land: "World Nature",
    icon: "🌱",
    saint: "Father Gregor Mendel & St. Isidore",
    saintTitle: "Father of Modern Genetics & Patron of Farmers",
    feastDay: "May 15 (St. Isidore)",
    scripture: "The Lord God took the man and put him in the garden of Eden to till it and keep it. (Genesis 2:15)",
    story: "As you float through the innovative greenhouse tunnels of Living with the Land, you are seeing the direct legacy of an Augustinian Catholic monk: Father Gregor Mendel. In the 1850s, in his monastery garden in Brno (modern Czech Republic), Father Mendel spent years carefully cross-breeding 29,000 pea plants. Through meticulous observation, he discovered the universal laws of dominant and recessive genetic inheritance that form the foundation of all modern biological and agricultural science!",
    didYouKnow: "Catholic monk Gregor Mendel was also an avid beekeeper and meteorologist, recording daily weather data for his local community between his daily Masses!",
    queueReflection: "God gave mankind the responsibility to care for the earth wisely. How can our family practice good stewardship of God's creation at home?"
  },
  {
    id: "spaceship_earth",
    name: "Spaceship Earth",
    park: "EPCOT",
    land: "World Celebration",
    icon: "🌐",
    saint: "St. Isidore of Seville & St. Bede",
    saintTitle: "Patron Saint of the Internet, Historians & Scribes",
    feastDay: "April 4 (St. Isidore)",
    scripture: "In the beginning was the Word, and the Word was with God, and the Word was God. (John 1:1)",
    story: "Inside the 180-foot geodesic sphere of Spaceship Earth, you journey through the history of human communication—from cave paintings to Gutenberg's printing press. One of the ride's most famous scenes depicts medieval Catholic monks in a scriptorium painstakingly copying Latin manuscripts by candlelight. Without these faithful monks, classical Greco-Roman history, philosophy, medicine, and the Holy Scriptures would have been permanently lost to the world during the Dark Ages!",
    didYouKnow: "Saint Isidore of Seville compiled the 'Etymologies,' the world's very first comprehensive encyclopedia, which is why the Vatican officially proposed him as the patron saint of the Internet and computer users!",
    queueReflection: "Language and reading are sacred gifts from God. What is our family's favorite Catholic book or Bible story to read together?"
  },
  {
    id: "soarin",
    name: "Soarin' Around the World",
    park: "EPCOT",
    land: "World Nature",
    icon: "🦅",
    saint: "Our Lady of Loreto",
    saintTitle: "Patroness of Aviation, Flight & Travelers",
    feastDay: "December 10",
    scripture: "If I take the wings of the morning and dwell in the uttermost parts of the sea, even there Thy hand shall lead me. (Psalm 139:9-10)",
    story: "Before hang-gliding over the Taj Mahal, Fiji coral reefs, and the Eiffel Tower, discover why aviators look to the Blessed Mother! Catholic tradition recounts that in 1291, when the Crusaders were driven from the Holy Land, holy angels miraculously lifted and transported the holy stone house of Mary from Nazareth across the seas to Loreto, Italy, to protect it from destruction. In 1920, Pope Benedict XV officially declared Our Lady of Loreto the universal patroness of all aviators and air travelers.",
    didYouKnow: "Astronauts on Apollo missions and military pilots have carried small medals of Our Lady of Loreto into flight, including into low-Earth orbit!",
    queueReflection: "As you soar above the wonders of the earth, pray a Hail Mary for the safety of our flight and travels home."
  },
  {
    id: "cosmic_rewind",
    name: "Guardians of the Galaxy: Cosmic Rewind",
    park: "EPCOT",
    land: "World Discovery",
    icon: "🌌",
    saint: "St. Thomas Aquinas",
    saintTitle: "The Angelic Doctor • Master of Cosmology and Time",
    feastDay: "January 28",
    scripture: "I am the Alpha and the Omega, the first and the last, the beginning and the end. (Revelation 22:13)",
    story: "Cosmic Rewind launches you backward through time to reset the universe! In Catholic theology, Saint Thomas Aquinas—the greatest philosopher-theologian of the medieval world—wrote extensively about the nature of time and cosmic motion. In his famous 'Five Proofs' for the existence of God, Thomas proved that everything that moves must be put into motion by something else. Therefore, there must exist an Unmoved Mover who stands outside of time: God Himself, who spoke the cosmos into existence!",
    didYouKnow: "St. Thomas was so tall and quiet as a student that his classmates nicknamed him 'The Dumb Ox.' But his professor, St. Albert the Great, declared: 'We call him the dumb ox, but his bellow will fill the whole world!'",
    queueReflection: "Even in the wildest cosmic roller coaster, God is in complete control of time and history. Where do we need to trust God's plan in our family right now?"
  },
  {
    id: "frozen",
    name: "Frozen Ever After",
    park: "EPCOT",
    land: "World Showcase (Norway)",
    icon: "❄️",
    saint: "St. Olaf (King of Norway)",
    saintTitle: "Patron Saint and Eternal King of Norway",
    feastDay: "July 29",
    scripture: "Greater love has no one than this, that someone lay down his life for his friends. (John 15:13)",
    story: "While the snowman Olaf loves warm hugs, the real Saint Olaf (King Olaf II) is the founding father of Christian Norway! In the 11th century, King Olaf transformed Norway from Viking paganism to the Catholic faith, establishing laws based on Christian mercy, protecting widows, and building churches across the snowy fjords. Right next to the Frozen ride in EPCOT stands the Norway Stave Church, which houses authentic Christian artifacts and exhibits on Norway's Catholic roots.",
    didYouKnow: "The core moral of Frozen—that 'only an act of true love can thaw a frozen heart'—is a profound Christian truth: sacrificial love, modeled by Christ, conquers all coldness and fear.",
    queueReflection: "How can we show sacrificial, forgiving love to our siblings today, especially when we feel frustrated or tired?"
  },
  {
    id: "remy",
    name: "Remy's Ratatouille Adventure",
    park: "EPCOT",
    land: "World Showcase (France)",
    icon: "🧀",
    saint: "St. Lawrence & St. Genevieve",
    saintTitle: "Patron Saint of Cooks & Patroness of Paris",
    feastDay: "August 10 (St. Lawrence) • January 3 (St. Genevieve)",
    scripture: "Whether you eat or drink, or whatever you do, do all to the glory of God. (1 Corinthians 10:31)",
    story: "As you shrink to the size of a mouse inside Gusteau's bustling Parisian restaurant, meet Saint Lawrence, the patron saint of cooks and chefs. Known for his legendary wit and deep love for the poor, Lawrence was ordered by the Roman prefect to hand over all the Church's gold. Lawrence gathered the blind, lame, and impoverished orphans of Rome and presented them, saying: 'These are the true treasures of the Church!'",
    didYouKnow: "Saint Genevieve is the patron saint and savior of Paris! In 451 AD, when Attila the Hun marched on Paris, Genevieve gathered the women of Paris to pray, and the invaders miraculously bypassed the city.",
    queueReflection: "Cooking and sharing food is an act of love and service. What is your favorite family meal that brings everyone together around the table?"
  },

  // ==========================================
  // DISNEY'S HOLLYWOOD STUDIOS
  // ==========================================
  {
    id: "tower_of_terror",
    name: "The Twilight Zone Tower of Terror",
    park: "Disney's Hollywood Studios",
    land: "Sunset Boulevard",
    icon: "⚡",
    saint: "St. Dismas (The Good Thief)",
    saintTitle: "Patron Saint of Sudden Emergencies & 11th-Hour Grace",
    feastDay: "March 25",
    scripture: "Jesus, remember me when You come into Your kingdom. (Luke 23:42)",
    story: "As you step into the ominous elevator shaft of the Hollywood Tower Hotel, ready to plunge into the unknown, remember Saint Dismas—the 'Good Thief' crucified beside Christ on Mount Calvary. Dismas had lived a reckless life, but in his final, terrifying moments, he looked at Christ with humble faith and said: 'Jesus, remember me when You come into Your kingdom.' And Jesus gave him the ultimate promise: 'Truly, I say to you, today you will be with Me in Paradise.'",
    didYouKnow: "St. Dismas is the only person in the entire Bible to be canonized directly by Jesus Christ Himself while still on earth!",
    queueReflection: "No matter how scary or sudden life's drops feel, God's mercy is always within reach the moment we ask for His help."
  },
  {
    id: "rise_resistance",
    name: "Star Wars: Rise of the Resistance",
    park: "Disney's Hollywood Studios",
    land: "Star Wars: Galaxy's Edge",
    icon: "⚔️",
    saint: "St. Maximilian Kolbe & St. Joan of Arc",
    saintTitle: "Martyr of Charity & Heroic Commander of the Faithful",
    feastDay: "August 14 (Kolbe) • May 30 (Joan of Arc)",
    scripture: "Be strong and courageous. Do not be frightened, for the Lord your God is with you wherever you go. (Joshua 1:9)",
    story: "When you are captured aboard a First Order Star Destroyer facing intimidation from Kylo Ren, you are entering the epic battle between light and darkness. In the real world, Saint Maximilian Kolbe faced a real evil empire in Nazi-occupied Poland. Imprisoned in Auschwitz, when a young father was condemned to death by starvation, Father Kolbe calmly stepped forward and volunteered to take the man's place, giving his life so that another father could live.",
    didYouKnow: "Saint Joan of Arc was a 17-year-old French peasant girl who followed heavenly voices to lead an outnumbered army against foreign occupation, carrying a banner of Jesus and Mary into battle without ever shedding blood herself!",
    queueReflection: "True resistance to evil does not come from hatred, but from sacrificial love and steadfast courage in the truth."
  },
  {
    id: "slinky_dog",
    name: "Slinky Dog Dash",
    park: "Disney's Hollywood Studios",
    land: "Toy Story Land",
    icon: "🐕",
    saint: "St. Philip Neri & Capriccio",
    saintTitle: "Patron Saint of Joy, Laughter & Playful Humility",
    feastDay: "May 26",
    scripture: "A cheerful heart is good medicine, but a crushed spirit dries up the bones. (Proverbs 17:22)",
    story: "Coiling through Andy's backyard on Slinky Dog's back is all about childhood wonder, friendship, and fun! Saint Philip Neri was the beloved 'Apostle of Rome' who proved that true saints have the best sense of humor. Philip had a famous, unruly dog named Capriccio who followed him everywhere. When young noblemen or haughty seminarians took themselves too seriously, Philip would make them walk Capriccio through the streets on a pink leash to teach them that holy joy begins with laughing at your own ego!",
    didYouKnow: "Philip Neri's favorite motto was: 'Cheerfulness strengthens the heart and makes us persevere in a good life. A servant of God ought always to be in good spirits!'",
    queueReflection: "Are we being good sports today when rides have long lines or things don't go exactly as planned?"
  },
  {
    id: "runaway_railway",
    name: "Mickey & Minnie's Runaway Railway",
    park: "Disney's Hollywood Studios",
    land: "Animation Courtyard",
    icon: "🚂",
    saint: "St. Cecilia",
    saintTitle: "Patroness of Musicians, Songs & Harmony",
    feastDay: "November 22",
    scripture: "Sing to the Lord a new song; play skillfully on the strings, with loud shouts. (Psalm 33:3)",
    story: "With the catchy theme 'Nothing Can Stop Us Now,' Runaway Railway celebrates the delightful musical slapstick of classic animation. Saint Cecilia is the ancient patron saint of music. Tradition recounts that as instruments played at her wedding banquet, Cecilia sang praise to God in her heart, devoting herself entirely to Christ. She reminds us that music and melody are heavenly gifts given to elevate our hearts in praise.",
    didYouKnow: "Pope Gregory the Great founded the Papal Choir in honor of St. Cecilia, which led to the development of Gregorian Chant—the foundation of all Western music notation!",
    queueReflection: "What holy hymns or joyful songs does our family love to sing in the car or at Sunday Mass?"
  },

  // ==========================================
  // DISNEY'S ANIMAL KINGDOM
  // ==========================================
  {
    id: "kilimanjaro_safaris",
    name: "Kilimanjaro Safaris",
    park: "Disney's Animal Kingdom",
    land: "Africa",
    icon: "🦁",
    saint: "St. Francis of Assisi & St. Jerome",
    saintTitle: "Patron of Animals & The Hermit who Befriended the Lion",
    feastDay: "October 4 (St. Francis) • Sept 30 (St. Jerome)",
    scripture: "Ask the beasts, and they will teach you; the birds of the heavens, and they will tell you. (Job 12:7)",
    story: "As you bounce through the savanna watching elephants, giraffes, and lions, discover Saint Jerome's famous friend! In the 4th century, while Jerome was translating the Bible into Latin in his desert monastery in Bethlehem, a huge wild lion limped into the courtyard. While the other monks fled in terror, Jerome calmly walked up to the lion, saw that its paw was pierced by a jagged thorn, pulled the thorn out, and bandaged the wound. The grateful lion became Jerome's faithful companion, guarding the monastery animals for the rest of its life!",
    didYouKnow: "Saint Francis of Assisi loved animals so deeply that when a fierce wolf terrorized the town of Gubbio, Francis walked into the forest unarmed, blessed the wolf, called him 'Brother Wolf,' and brokered a permanent peace treaty between the wolf and the townspeople!",
    queueReflection: "All animals and nature are creations of God's wisdom. How can we treat domestic pets and wildlife with care and respect?"
  },
  {
    id: "everest",
    name: "Expedition Everest - Legend of the Forbidden Mountain",
    park: "Disney's Animal Kingdom",
    land: "Asia",
    icon: "🏔️",
    saint: "St. Bernard of Montjoux & Bl. Pier Giorgio Frassati",
    saintTitle: "Founder of Alpine Mountain Hospices & 'Man of the Eight Beatitudes'",
    feastDay: "June 15 (St. Bernard) • July 4 (Bl. Pier Giorgio)",
    scripture: "I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth. (Psalm 121:1-2)",
    story: "Climbing through the icy peaks of Everest to encounter the Yeti calls to mind Saint Bernard of Montjoux. In the 11th century, in the freezing, snowbound mountain passes of the Alps, Bernard built high-altitude mountain hospices to shelter and rescue pilgrims who got trapped by blizzards and avalanches. To help rescue travelers buried in the snow, the monks bred the famous, gentle rescue dogs that bear his name to this day: Saint Bernards!",
    didYouKnow: "Blessed Pier Giorgio Frassati was an avid mountain climber in the Italian Alps whose famous motto was 'Verso l'alto!' (To the heights!), reminding us that our spiritual journey is an exciting climb toward heaven.",
    queueReflection: "Climbing mountains takes perseverance. When things get difficult in life or school, how can we keep our eyes fixed on Christ at the summit?"
  },
  {
    id: "indiana_jones",
    name: "Indiana Jones Adventure (Tropical Americas)",
    park: "Disney's Animal Kingdom",
    land: "Pueblo Esperanza",
    icon: "🤠",
    saint: "St. Boniface & St. Martin of Tours",
    saintTitle: "Tearers-Down of Pagan Idols & Protectors Against False Gods",
    feastDay: "June 5 (St. Boniface) • November 11 (St. Martin)",
    scripture: "For all the gods of the nations are idols, but the Lord made the heavens! Splendor and majesty are before Him. (Psalm 96:5-6)",
    story: "Venturing into an ancient Maya/Aztec temple ruin with Indiana Jones can feel thrilling—and a little eerie with all the menacing pagan carvings, serpents, and mythological idols staring from the shadows. If you feel scared, call upon Saint Boniface and Saint Martin of Tours! In 723 AD, Saint Boniface bravely walked into a pagan sanctuary in Germany, took up an axe, and chopped down the sacred 'Donar's Oak' (the tree of Thor). When the pagan god failed to strike him down, the crowd realized the idol was completely powerless and turned to Christ. Centuries earlier, when pagans tried to crush Saint Martin by cutting down a sacred pine tree directly onto him, Martin simply made the Sign of the Cross, and the falling giant tree miraculously spun backward in mid-air!",
    didYouKnow: "Catholic missionaries across the Americas, like the Franciscans and Dominicans, frequently carved the Sign of the Cross over former pagan temple stones to declare that Christ, the Prince of Peace, is the true Lord of all peoples and lands!",
    queueReflection: "Ancient idols were just carvings of wood and stone with zero power over God's children. When we see spooky mythical monsters or ancient statues, who can we remember is the true King of the universe?"
  },
  {
    id: "lion_king",
    name: "Festival of the Lion King",
    park: "Disney's Animal Kingdom",
    land: "Africa",
    icon: "👑",
    saint: "The Prophet Daniel & St. Ignatius of Antioch",
    saintTitle: "Champion of the Lions' Den & Fearless Apostolic Martyr",
    feastDay: "December 17 (Prophet Daniel) • October 17 (St. Ignatius)",
    scripture: "My God sent His angel and shut the lions' mouths, and they have not hurt me, because I was found blameless before Him. (Daniel 6:22)",
    story: "As you take your seat for the acrobatics and music of the Festival of the Lion King, discover the greatest lion miracle in the Holy Bible: the Prophet Daniel! In ancient Babylon, corrupt rulers plotted against Daniel and threw him into a pit of ravenous, starving lions because he refused to stop praying to the one true God. King Darius spent the night fasting in grief, running to the den at sunrise to cry, 'Daniel, was your God able to deliver you?' From the shadows, Daniel called back: 'My God sent His angel and shut the lions' mouths!' The starving beasts sat around Daniel like gentle kittens all night because God shielded His faithful servant.",
    didYouKnow: "In 107 AD, Saint Ignatius of Antioch walked fearlessly into the Roman arena facing real lions, declaring: 'I am the wheat of God, ground by the teeth of wild beasts to become pure bread for Christ!' And in Catholic sacred art, Saint Mark the Evangelist is also depicted as the Winged Lion, whose statue crowns St. Mark's Campanile in Venice and EPCOT Italy!",
    queueReflection: "Daniel was thrown to the lions because he refused to stop kneeling in prayer. What daily prayer habit can our family commit to, knowing God's angels surround us with protection?"
  }
];

var getCompanionForRide = CD.getCompanionForRide = global.getCompanionForRide = function(rideIdOrName) {
  if (!rideIdOrName) return null;
  const search = rideIdOrName.toLowerCase();
  return QUEUE_COMPANIONS.find(c => 
    c.id.toLowerCase() === search || 
    c.name.toLowerCase() === search || 
    c.name.toLowerCase().includes(search) || 
    search.includes(c.name.toLowerCase()) ||
    c.saint.toLowerCase().includes(search) ||
    (c.id === 'indiana_jones' && (search.includes('dinosaur') || search.includes('indy') || search.includes('jones')))
  ) || null;
}

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/land-patrons-data.js
  // ==========================================

  (function() {
// Catholic Disney: Land & Country Pavilion Patron Saints
// Connects every theme park land and all 11 EPCOT World Showcase pavilions to official Catholic patron saints, history, and sacred landmarks.

var LAND_PATRONS = CD.LAND_PATRONS = global.LAND_PATRONS = [
  // ==========================================
  // MAGIC KINGDOM LANDS
  // ==========================================
  {
    id: "main_street_usa",
    name: "Main Street, U.S.A.",
    park: "Magic Kingdom",
    icon: "🇺🇸",
    saint: "St. Frances Xavier Cabrini (Mother Cabrini)",
    saintTitle: "First American Citizen Saint • Patroness of Immigrants & American Enterprise",
    feastDay: "November 13",
    scripture: "I can do all things through Christ who strengthens me. (Philippians 4:13)",
    story: "Main Street represents the optimistic, turn-of-the-century American town with bustling streetcars, small shops, and grand community spirit. Walking this street calls to mind Mother Cabrini, who arrived in America in 1889 with little money and poor health. With tireless Catholic grit and unshakeable trust in the Sacred Heart of Jesus, she crossed the nation by train, founding 67 hospitals, orphanages, and schools to care for impoverished immigrants and children across American cities.",
    didYouKnow: "Mother Cabrini was canonized in 1946 as the very first United States citizen to be declared a saint by the Catholic Church!",
    reflection: "Main Street reminds us of the power of community. How can our family serve the immigrants, elderly, or needy in our own hometown?"
  },
  {
    id: "adventureland",
    name: "Adventureland",
    park: "Magic Kingdom",
    icon: "🧭",
    saint: "St. Francis Xavier",
    saintTitle: "Patron Saint of Foreign Missions, Explorers & Navigators",
    feastDay: "December 3",
    scripture: "Go into all the world and proclaim the good news to the whole creation. (Mark 16:15)",
    story: "From Polynesian tiki rooms to Arabian bazars and pirate coves, Adventureland captures the exotic allure of world expeditions. In Catholic history, Saint Francis Xavier was the greatest globe-trotting explorer of the gospel. He sailed over 40,000 miles across uncharted waters in India, Indonesia, and Japan, sleeping on coiled ship ropes, learning foreign languages, and baptizing tens of thousands with tireless missionary joy.",
    didYouKnow: "Francis Xavier carried only his Breviary, a crucifix, and a small notebook containing the names of his friends written inside his cassock over his heart!",
    reflection: "Every vacation is a holy journey. How can we be missionaries of kindness and patience to everyone we encounter today?"
  },
  {
    id: "frontierland",
    name: "Frontierland",
    park: "Magic Kingdom",
    icon: "🤠",
    saint: "St. Kateri Tekakwitha",
    saintTitle: "Lily of the Mohawks • Patroness of Ecology, Nature & Native Americans",
    feastDay: "July 14",
    scripture: "The wilderness and the dry land shall be glad; the desert shall rejoice and blossom like the rose. (Isaiah 35:1)",
    story: "Frontierland celebrates the rugged American frontier, towering red rocks, and wilderness rivers. In the harsh wilderness of 17th-century North America lived Saint Kateri Tekakwitha. Despite surviving smallpox as a child and facing intense tribal hostility, she consecrated her life to Jesus in the wilderness, carving crosses into birch trees in the forest and praying the rosary in freezing mountain snows.",
    didYouKnow: "When Kateri died at age 24, all the smallpox scars on her face miraculously vanished within fifteen minutes, leaving her glowing and radiant to the astonished witnesses!",
    reflection: "The frontier requires courage. What is one way our family can stand firm for our Catholic faith when friends or culture disagree with us?"
  },
  {
    id: "liberty_square",
    name: "Liberty Square",
    park: "Magic Kingdom",
    icon: "🔔",
    saint: "St. John Neumann (Bishop of Philadelphia)",
    saintTitle: "Bishop of the Liberty Bell City • First American Male Saint & Defender of Religious Freedom",
    feastDay: "January 5",
    scripture: "Proclaim liberty throughout all the land unto all the inhabitants thereof. (Leviticus 25:10 — Inscription on the Liberty Bell)",
    story: "Liberty Square is modeled after colonial Philadelphia in 1776, featuring the Liberty Tree, the Hall of Presidents, and an authentic full-scale replica of the Philadelphia Liberty Bell cast from the original historic mold. The supreme American patron saint of the Liberty Bell city is Saint John Neumann! Arriving in America with just one suit of clothes, Neumann ministered to pioneers across wilderness settlements before becoming Bishop of Philadelphia in 1852. In the very cradle of American independence, Bishop Neumann courageously defended the constitutional religious liberty of Catholic citizens during nativist riots, founding the American parochial school system so children could grow in faith and civic virtue.",
    didYouKnow: "The verse cast into the bronze rim of the Liberty Bell in Liberty Square is Leviticus 25:10: 'Proclaim liberty throughout all the land!' In 1977, Saint John Neumann became the very first American bishop and first American male canonized by the Catholic Church. Additionally, the only Catholic signer of the Declaration of Independence was Maryland patriot Charles Carroll of Carrollton!",
    reflection: "American freedom protects our sacred right to worship God openly. How can our family give thanks today for our religious freedom in the United States, and pray for Christians around the world who face persecution?"
  },
  {
    id: "fantasyland",
    name: "Fantasyland",
    park: "Magic Kingdom",
    icon: "👑",
    saint: "St. Elizabeth of Hungary (The Princess Saint)",
    saintTitle: "Royal Princess of Hungary • Patroness of Royalty, Brides & the Miracle of the Roses",
    feastDay: "November 17",
    scripture: "The King will say to them, 'Truly I say to you, as you did it to one of the least of these my brethren, you did it to Me.' (Matthew 25:40)",
    story: "Fantasyland is the royal heart of the Magic Kingdom, dominated by Cinderella Castle, Princess Fairytale Hall, and stories of princes, princesses, and enchanted kingdoms. Saint Elizabeth of Hungary was a real-life royal princess! Born the daughter of King Andrew II of Hungary in 1207, Elizabeth lived in the grand medieval hilltop castle of Wartburg. Surrounded by royal gold, silk gowns, and courtly luxury, she knew that the greatest crown in the kingdom of God is charity. She spent her royal fortune feeding the hungry, built a hospital at the foot of the castle, and cared for the sick with her own royal hands. When her husband asked what she was carrying down from the castle kitchens under her royal cloak, she opened her mantle, and the loaves of bread for the poor had miraculously transformed into a fragrant cascade of blooming red and white roses!",
    didYouKnow: "Saint Elizabeth is the patron saint of bakers, brides, and Catholic charities. She gave away her royal jewels and joined the Third Order of Saint Francis, showing children that being a true princess means serving Christ with humble, joyful love!",
    reflection: "Every child loves dressing up like a prince or princess in Fantasyland. How does Saint Elizabeth show us that real royalty isn't about vanity or bossing people around, but serving others with kindness?"
  },
  {
    id: "tomorrowland",
    name: "Tomorrowland",
    park: "Magic Kingdom",
    icon: "🚀",
    saint: "Blessed Carlo Acutis",
    saintTitle: "Patron Saint of the Internet, Gamers & Technology",
    feastDay: "October 12",
    scripture: "All they that believe were together, and had all things common. (Acts 2:44)",
    story: "Tomorrowland envisions the futuristic wonders of space travel, monorails, and digital energy. Blessed Carlo Acutis, born in 1991, is the millennial Catholic pioneer of the digital age. He loved PlayStation, computer coding, and video games, but used his programming genius to build a global website archiving Eucharistic miracles. He showed humanity that modern technology and future innovations can be sanctified to draw souls closer to Christ.",
    didYouKnow: "Carlo called the Holy Eucharist his 'highway to heaven,' showing that ancient sacramental truth remains the ultimate power source for the future!",
    reflection: "As we enjoy tomorrow's futuristic technology, how can we make sure God stays at the center of our digital habits?"
  },

  // ==========================================
  // EPCOT WORLD SHOWCASE PAVILIONS & NEIGHBORHOODS
  // ==========================================
  {
    id: "epcot_world_showcase",
    name: "World Showcase Promenade & Lagoon",
    park: "EPCOT",
    icon: "👑",
    saint: "Mary, Queen of the Universe (Regina Universi)",
    saintTitle: "Supreme Patroness of World Showcase & Mother of All Nations",
    feastDay: "August 22 (The Queenship of Mary)",
    scripture: "A great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars. (Revelation 12:1)",
    story: "Stretching around the 40-acre World Showcase Lagoon, the 11 national pavilions unite the cultures, languages, and heritages of the earth in peace. The supreme patroness of this global promenade is Mary, Queen of the Universe! Just minutes down the road from EPCOT stands the world-famous Basilica Shrine of Mary, Queen of the Universe—built specifically by the Catholic Church as a spiritual oasis for the millions of pilgrims and tourists traveling to Disney from every country on earth. As Queen Mother of Jesus Christ, Mary's mantle covers every race, language, and nation gathered around the lagoon.",
    didYouKnow: "In Revelation 12:1, Mary is crowned with 'twelve stars,' traditionally symbolizing the twelve tribes of Israel and the universal Church. When you walk around the World Showcase Lagoon with its 11 national pavilions, you are walking under her maternal queenship!",
    reflection: "Mary is the Queen of Peace who draws all nations into unity around her Son. As you stroll through the countries, pray a Hail Mary for international peace and goodwill among all peoples."
  },
  {
    id: "epcot_mexico",
    name: "Mexico Pavilion (World Showcase)",
    park: "EPCOT",
    icon: "🇲🇽",
    saint: "Our Lady of Guadalupe & St. Juan Diego",
    saintTitle: "Queen of Mexico & Empress of the Americas • Patroness of the Unborn",
    feastDay: "December 12 (Guadalupe) • December 9 (Juan Diego)",
    scripture: "A great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet. (Revelation 12:1)",
    story: "Inside the Mesoamerican pyramid of the Mexico Pavilion, you are transported into the rich Catholic culture of Mexico! In 1531 on the hill of Tepeyac outside Mexico City, the Blessed Virgin Mary appeared to a humble indigenous convert, Saint Juan Diego. She left her miraculous image imprinted on his woven cactus-fiber cloak (tilma). Over the next seven years, 9 million indigenous Mexicans embraced Christ, ending human sacrifice and uniting two cultures in the Catholic faith.",
    didYouKnow: "The original Tilma of Guadalupe hanging in the Mexico City Basilica has defied scientific explanation for 500 years: the cactus fiber should have decayed in 20 years, the colors contain no known animal or mineral pigments, and microscopic reflections of Juan Diego and the bishop are visible in Mary's eyes!",
    reflection: "Our Lady told Juan Diego: 'Am I not here, who am your Mother?' What worry can our family entrust to Mary's maternal care today?"
  },
  {
    id: "epcot_norway",
    name: "Norway Pavilion (World Showcase)",
    park: "EPCOT",
    icon: "🇳🇴",
    saint: "St. Olaf (Olaf II Haraldsson)",
    saintTitle: "Eternal King and Patron Saint of Norway",
    feastDay: "July 29",
    scripture: "The king shall joy in thy strength, O Lord; and in thy salvation how greatly shall he rejoice! (Psalm 21:1)",
    story: "The Norway Pavilion features the majestic wooden Stave Church, an exact replica of the Gol Stave Church built in Norway around 1200 AD. King Olaf II transformed Scandinavia from brutal Viking paganism to the Catholic Christian faith in the 11th century. He outlawed slavery, protected widows, built wooden churches across the fjords, and established the Christian law of mercy. When he was martyred in battle in 1030, miracles began occurring at his tomb, and he was proclaimed Norway's eternal patron.",
    didYouKnow: "Inside the EPCOT Stave Church gallery, you can view authentic historical exhibits explaining how medieval Norwegian Christians carved crosses alongside dragon motifs to symbolize Christ's victory over the serpent!",
    reflection: "The Vikings gave up war and raids to embrace the peace of Christ. How can we choose forgiveness and gentleness instead of fighting today?"
  },
  {
    id: "epcot_china",
    name: "China Pavilion (World Showcase)",
    park: "EPCOT",
    icon: "🇨🇳",
    saint: "The 120 Martyr Saints of China & Ven. Matteo Ricci",
    saintTitle: "Apostle of China • Bridges of Faith, Astronomy & Eastern Culture",
    feastDay: "July 9 (Martyr Saints of China)",
    scripture: "The people who walked in darkness have seen a great light. (Isaiah 9:2)",
    story: "Past the Gate of the Golden Sun stands the breathtaking Temple of Heaven. In Catholic history, Venerable Father Matteo Ricci was the famous 16th-century Jesuit astronomer and scholar who traveled to Beijing, adopted Chinese scholar robes, and translated Euclid's geometry and world maps into Chinese. He introduced Western astronomy to the Ming Emperor, showing how faith and Eastern philosophy harmonize. Centuries later, 120 heroic Chinese Catholics—including priests, fathers, mothers, and teenagers like 14-year-old Saint Anna Wang—gave their lives rather than renounce Jesus Christ.",
    didYouKnow: "When young Saint Anna Wang was ordered to step on a crucifix to save her life in 1900, she stood radiant and replied: 'The door of heaven is open to me!' and was crowned with martyrdom.",
    reflection: "The Chinese martyrs stood courageous under immense pressure. How can our family support Christians who are persecuted for their faith around the world today?"
  },
  {
    id: "epcot_germany",
    name: "Germany Pavilion (World Showcase)",
    park: "EPCOT",
    icon: "🇩🇪",
    saint: "St. George the Dragon Slayer & St. Boniface",
    saintTitle: "Protector of Germany & The Apostle of the Rhine",
    feastDay: "April 23 (St. George) • June 5 (St. Boniface)",
    scripture: "The Lord will fight for you, and you have only to be silent. (Exodus 14:14)",
    story: "Right in the center of EPCOT's Germany plaza stands a majestic statue of Saint George on horseback slaying the dragon with his spear! In Catholic Bavaria and the Rhineland, Saint George represents the heroic Christian knight defending the innocent and conquering the dragon of sin. And Saint Boniface was the fearless 8th-century missionary who felled Thor's Oak to prove that pagan gods were powerless, building Germany into a cradle of sacred architecture and music.",
    didYouKnow: "Look closely at the statue in EPCOT Germany: Saint George's shield bears the red cross on a white banner, the historic emblem of Christian chivalry and fortitude!",
    reflection: "Saint George conquered the dragon through faith in Christ. What 'dragon' of temptation—like anger, selfishness, or whining—can we defeat today?"
  },
  {
    id: "epcot_italy",
    name: "Italy Pavilion (World Showcase)",
    park: "EPCOT",
    icon: "🇮🇹",
    saint: "St. Peter the Apostle (The Rock of Rome)",
    saintTitle: "Prince of the Apostles • First Pope & Holder of the Keys of Heaven",
    feastDay: "June 29 (Sts. Peter & Paul) • February 22 (Chair of Peter)",
    scripture: "You are Peter, and on this rock I will build My Church, and the gates of hell shall not prevail against it. I will give you the keys of the kingdom of heaven! (Matthew 16:18-19)",
    story: "The Italy Pavilion is a breathtaking celebration of the heart of the Roman Catholic Church! Italy is home to Rome, the Eternal City, and the sacred Chair of Saint Peter (Cathedra Petri). When Jesus looked at Simon the fisherman from Galilee, He gave him the new name 'Cephas'—Peter, the Rock—promising that the gates of hell would never prevail against the Church. Peter journeyed to Rome, led the early Christians through imperial persecutions, and was martyred on Vatican Hill by being crucified upside-down, deeming himself unworthy to die in the same manner as Jesus.",
    didYouKnow: "Directly beneath the high altar of Saint Peter's Basilica in Rome lies the actual, archaeological tomb of Saint Peter, identified with 1st-century inscriptions reading 'Petros Eni' (Peter is here)! The Italy Pavilion at EPCOT celebrates 2,000 years of unbroken Catholic heritage and papal continuity.",
    reflection: "Jesus gave the keys of the kingdom to Peter and his successors. How can our family pray a decade of the Rosary today for the Holy Father and the unity of all Christians?"
  },
  {
    id: "epcot_america",
    name: "The American Adventure Pavilion (World Showcase)",
    park: "EPCOT",
    icon: "🇺🇸",
    saint: "St. Elizabeth Ann Seton",
    saintTitle: "First Native-Born American Saint • Mother of Catholic Education",
    feastDay: "January 4",
    scripture: "Faith is the assurance of things hoped for, the conviction of things not seen. (Hebrews 11:1)",
    story: "Housed in a grand Georgian colonial building, The American Adventure celebrates the trials and triumphs of the United States. Right during the founding era of George Washington lived Saint Elizabeth Ann Seton. A high-society New York mother who was widowed with five young children, Elizabeth converted to Catholicism, moved to Emmitsburg, Maryland, and founded the Sisters of Charity and the first free Catholic parochial school in the United States.",
    didYouKnow: "In 1975, Pope Paul VI canonized Elizabeth Ann Seton as the very first person born on American soil to become an official saint of the Roman Catholic Church!",
    reflection: "Mother Seton put her trust in God when she lost her husband and money. How does our family support Catholic schools and religious education in our diocese?"
  },
  {
    id: "epcot_japan",
    name: "Japan Pavilion (World Showcase)",
    park: "EPCOT",
    icon: "🇯🇵",
    saint: "The 26 Martyrs of Nagasaki (St. Paul Miki) & Bl. Justo Takayama Ukon",
    saintTitle: "The Samurai of Christ • Heroes of Faith in the Rising Sun",
    feastDay: "February 6 (St. Paul Miki) • February 3 (Bl. Takayama)",
    scripture: "For to me to live is Christ, and to die is gain. (Philippians 1:21)",
    story: "Beyond the red Torii gate stands the serene Japanese pagoda. Behind Japan's peaceful culture lies one of the most heroic stories of Catholic courage in world history. In 1597 on the hill of Nagasaki, 26 Christians—including Saint Paul Miki and three young altar boys—were crucified for their faith. From the cross, Paul Miki forgave his executioners and proclaimed the gospel. And Blessed Justo Takayama Ukon was a renowned feudal daimyo (warlord) and master swordsman who chose to surrender his castle, samurai rank, and wealth to follow Christ into exile rather than renounce his Catholic baptism.",
    didYouKnow: "When Japan sealed its borders to the outside world for over 250 years, the 'Hidden Christians' (Kakure Kirishitan) preserved the Catholic faith, baptizing children and reciting the Rosary in secret across 7 generations without a single priest until missionaries returned in 1865!",
    reflection: "The Japanese Hidden Christians secretly handed down the Rosary for 250 years. How can our family treasure our prayers so they last for generations?"
  },
  {
    id: "epcot_morocco",
    name: "Morocco Pavilion (World Showcase)",
    park: "EPCOT",
    icon: "🇲🇦",
    saint: "The Franciscan Protomartyrs of Morocco & St. Anthony of Padua",
    saintTitle: "The Holy Franciscan Martyrs of North Africa",
    feastDay: "January 16",
    scripture: "Blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven. (Matthew 5:10)",
    story: "With its intricate mosaic tiles, courtyards, and minarets handcrafted by Moroccan artisans, the Morocco Pavilion is a marvel of North African culture. In 1219, Saint Francis of Assisi sent five young friars—Berard, Peter, Accursio, Adiuto, and Otho—to Morocco to preach the gospel in peace and love. When their relics were returned to Portugal in 1220, a young Augustinian canon named Fernando was so deeply moved by their courage that he joined the Franciscans, took the name ANTHONY, and sailed for Morocco! That young man became the world-famous Saint Anthony of Padua!",
    didYouKnow: "When Saint Francis heard of the courage of the five martyrs in Morocco, he exclaimed with holy tears: 'Now I can truly say that I have five real Lesser Brothers!'",
    reflection: "Saint Anthony's life was completely changed by the example of other faithful Christians. How can our good example inspire our friends to love God?"
  },
  {
    id: "epcot_france",
    name: "France Pavilion (World Showcase)",
    park: "EPCOT",
    icon: "🇫🇷",
    saint: "St. Joan of Arc, St. Thérèse & St. Louis IX",
    saintTitle: "Eldest Daughter of the Church • Patrons of France & Chivalry",
    feastDay: "May 30 (Joan of Arc) • August 25 (St. Louis)",
    scripture: "I am not afraid; God is with me. I was born for this. (Saint Joan of Arc)",
    story: "Under the shadow of the Eiffel Tower, the France Pavilion evokes the beauty of the nation historically known as the 'Eldest Daughter of the Church.' France is the cradle of Gothic cathedrals (Notre-Dame, Chartres), the apparitions of Lourdes, and heroic saints. Saint Joan of Arc was a teenage peasant girl who led France to freedom with a banner of Jesus and Mary. Saint Louis IX was the saint-king who built Sainte-Chapelle to house the Crown of Thorns, washing the feet of the poor every day.",
    didYouKnow: "France has more officially canonized Catholic saints than almost any other country in Western Europe, including Saint Vincent de Paul, Saint Bernadette, and Saint John Vianney (patron of parish priests)!",
    reflection: "Joan of Arc famously said: 'Act, and God will act!' When you have a hard test or challenge ahead, how can you do your best and trust God for the rest?"
  },
  {
    id: "epcot_uk",
    name: "United Kingdom Pavilion (World Showcase)",
    park: "EPCOT",
    icon: "🇬🇧",
    saint: "St. Thomas More, St. John Henry Newman & St. Edward",
    saintTitle: "Champions of Conscience, Truth & the Isle of Saints",
    feastDay: "June 22 (Thomas More) • October 9 (John Henry Newman)",
    scripture: "Lead, Kindly Light, amidst the encircling gloom, lead Thou me on! (Saint John Henry Newman)",
    story: "From cobblestone London alleys to thatched-roof cottages, the UK Pavilion showcases British history. Ancient England was affectionately called 'Mary's Dowry' because of its deep devotion to Our Lady. Saint Thomas More gave his life in the Tower of London to defend the unity of the Church. And Saint John Henry Newman was the brilliant Oxford scholar whose search for historical truth led him into the Catholic Church, becoming a Cardinal and England's newest canonized saint.",
    didYouKnow: "J.R.R. Tolkien, author of *The Lord of the Rings*, and G.K. Chesterton were devout English Catholics whose faith deeply shaped classic British literature and fantasy worldbuilding!",
    reflection: "Saint John Henry Newman wrote that God has created each of us for a specific mission that no one else can do. What unique gifts has God given to you?"
  },
  {
    id: "epcot_canada",
    name: "Canada Pavilion (World Showcase)",
    park: "EPCOT",
    icon: "🇨🇦",
    saint: "St. Joseph & St. André Bessette (Brother André)",
    saintTitle: "Principal Patron of Canada & The Miracle Worker of Mount Royal",
    feastDay: "March 19 (St. Joseph) • January 6 (St. André)",
    scripture: "Go to Joseph; what he says to you, do. (Genesis 41:55)",
    story: "Surrounded by totem poles, the Canadian Rockies, and the Hôtel du Canada stands the great Canadian north. Saint Joseph was officially declared the Principal Patron Saint of Canada in 1624. Centuries later in Montreal lived Saint André Bessette, a frail, uneducated Holy Cross brother who worked as a humble doorkeeper at a boys' school. Brother André placed a small medal of Saint Joseph against sick visitors and prayed; within decades, thousands of miraculous healings occurred, and over 1 million pilgrims a year flocked to the Saint Joseph's Oratory he built on Mount Royal!",
    didYouKnow: "Thousands of crutches and canes left behind by people healed through Brother André's intercession to Saint Joseph still hang along the walls of the Oratory in Montreal!",
    reflection: "Brother André was 'just a doorkeeper,' yet God used him to heal thousands. How does God use small, humble people to do great things?"
  },

  // ==========================================
  // DISNEY'S HOLLYWOOD STUDIOS LANDS
  // ==========================================
  {
    id: "hollywood_blvd",
    name: "Hollywood Boulevard",
    park: "Disney's Hollywood Studios",
    icon: "🎬",
    saint: "St. Clare of Assisi & Ven. Fulton J. Sheen",
    saintTitle: "Patron Saint of Television & Emmy-Winning Catholic Broadcaster",
    feastDay: "August 11 (St. Clare) • December 9 (Fulton Sheen)",
    scripture: "What I tell you in the dark, say in the light; and what you hear whispered, proclaim on the housetops. (Matthew 10:27)",
    story: "Hollywood Boulevard represents the Golden Age of cinema, theaters, and broadcast communication. In 1958, Pope Pius XII officially proclaimed Saint Clare of Assisi the patron saint of television! In 1253, when Clare was dying and bedridden in her convent, she miraculously saw and heard the Christmas Mass being celebrated miles away in the Basilica projected on her cell wall. And Archbishop Fulton J. Sheen pioneered religious television, winning an Emmy for his prime-time show 'Life is Worth Living' which reached 30 million viewers weekly!",
    didYouKnow: "When Archbishop Sheen accepted his Emmy award, he jokingly thanked his 'writers: Matthew, Mark, Luke, and John!'",
    reflection: "Media and screens can either distract us or bring God's truth to millions. How can we use modern media to share faith and virtue?"
  },
  {
    id: "toy_story_land",
    name: "Toy Story Land",
    park: "Disney's Hollywood Studios",
    icon: "🧸",
    saint: "St. John Bosco (Don Bosco)",
    saintTitle: "Father and Teacher of Youth • Patron of Games, Magicians & Play",
    feastDay: "January 31",
    scripture: "Serve the Lord with joy! Let nothing disturb your peace. (Saint John Bosco)",
    story: "Toy Story Land shrinks guests down to toy size in Andy's backyard, celebrating childhood games, friendship, and fun. Saint John Bosco was a 19th-century Italian priest who realized that you reach children through their joy! Don Bosco learned to juggle, walk tightropes, and perform magic tricks in the streets to gather crowds of young boys, ending each performance with a short sermon and the Rosary before feeding and schooling them.",
    didYouKnow: "Don Bosco's famous rule for family life and classrooms was: 'Run, jump, shout, play as much as you like, but do not sin!'",
    reflection: "Playing games and having fun with our brothers, sisters, and friends is a holy gift. How can we be cheerful and fair in our games today?"
  },
  {
    id: "star_wars_land",
    name: "Star Wars: Galaxy's Edge (Batuu)",
    park: "Disney's Hollywood Studios",
    icon: "🌌",
    saint: "St. Maximilian Kolbe & St. Michael the Archangel",
    saintTitle: "Martyr of Auschwitz & Prince of the Heavenly Host",
    feastDay: "August 14 (Kolbe) • September 29 (St. Michael)",
    scripture: "Finally, be strong in the Lord and in the strength of His might. Put on the whole armor of God. (Ephesians 6:10-11)",
    story: "Galaxy's Edge immerses guests in the galactic outpost of Batuu, where the heroic Resistance battles the tyrannical First Order. In the real world, the ultimate spiritual resistance against totalitarian dark forces was led by Saint Maximilian Kolbe. Imprisoned in the Auschwitz concentration camp in 1941, Father Kolbe stepped forward to take the place of a condemned stranger, laying down his life with serene love and transforming his starvation bunker with hymns and prayers.",
    didYouKnow: "The famous 'Prayer to Saint Michael' was written by Pope Leo XIII in 1884 to invoke the Archangel's sword against dark forces seeking the ruin of souls across the world!",
    reflection: "Standing up for goodness in an evil world takes spiritual backbone. Who is someone in our life that needs our protection or prayer today?"
  },

  // ==========================================
  // DISNEY'S ANIMAL KINGDOM LANDS
  // ==========================================
  {
    id: "discovery_island",
    name: "Discovery Island & Tree of Life",
    park: "Disney's Animal Kingdom",
    icon: "🌳",
    saint: "St. Francis of Assisi",
    saintTitle: "Patron Saint of Animals, Ecology & the Canticle of the Creatures",
    feastDay: "October 4",
    scripture: "Praise be You, my Lord, with all Your creatures! (Canticle of Brother Sun)",
    story: "At the center of Animal Kingdom rises the 145-foot Tree of Life, with over 300 intricately carved animals intertwined across its roots and trunk. Saint Francis of Assisi is the Church's universal patron of ecology and creation. Francis saw every animal, tree, and stream as a brother and sister created by God. In his famous *Canticle of the Creatures*, Francis praised God through 'Brother Sun, Sister Moon, Brother Wind, and Sister Mother Earth.'",
    didYouKnow: "On the Feast of St. Francis (October 4), Catholic parishes across the globe hold 'Blessing of the Animals' ceremonies where families bring dogs, cats, birds, and pets to church!",
    reflection: "As you look at the carved creatures on the Tree of Life, thank God for the wonderful diversity of animals He created for our world."
  },
  {
    id: "dak_africa",
    name: "Africa (Harambe Village)",
    park: "Disney's Animal Kingdom",
    icon: "🌍",
    saint: "St. Josephine Bakhita & St. Augustine of Hippo",
    saintTitle: "Patroness of African Dignity & Great North African Doctor of the Church",
    feastDay: "February 8 (Bakhita) • August 28 (St. Augustine)",
    scripture: "You have made us for Yourself, O Lord, and our hearts are restless until they rest in You. (Saint Augustine)",
    story: "Harambe Village celebrates the vibrant warmth, music, and wilderness of East Africa. In Catholic history, Africa has produced some of the Church's greatest intellectual and spiritual giants. Saint Augustine of Hippo, who lived in North Africa, shaped Western theology and Catholic understanding of grace. And Saint Josephine Bakhita was born in Darfur, Sudan. Kidnapped and sold into brutal slavery as a young girl, she was eventually brought to Italy, discovered the love of Christ, became a Canossian sister, and spent her life radiant with forgiveness, saying: 'If I were to meet the slave-traders who kidnapped me, I would kneel and kiss their hands, for if that had not happened, I would not be a Christian today!'",
    didYouKnow: "Saint Josephine Bakhita is the patron saint of victims of human trafficking and the universal symbol of hope and forgiveness for Africa!",
    reflection: "Bakhita chose total forgiveness over bitterness and hatred. Who in our life do we need to forgive from the heart today?"
  },
  {
    id: "dak_asia",
    name: "Asia (Anandapur Village)",
    park: "Disney's Animal Kingdom",
    icon: "🏔️",
    saint: "St. Mother Teresa of Calcutta & St. Thomas the Apostle",
    saintTitle: "Missionary of Charity to the Poorest & Apostle to the Far East",
    feastDay: "September 5 (Mother Teresa) • July 3 (St. Thomas)",
    scripture: "I can do things you cannot, you can do things I cannot; together we can do great things for God. (Saint Mother Teresa)",
    story: "Anandapur Village captures the misty peaks, temples, and roaring rivers of the Himalayas and the Indian subcontinent. In the 1st century, Saint Thomas the Apostle sailed directly to India, establishing Christian communities along the Malabar Coast (the Syro-Malabar Catholic Church). Centuries later in Calcutta, India, Saint Mother Teresa founded the Missionaries of Charity, spending her life in the slums picking up the dying from the gutters to ensure that every human soul felt loved by Jesus.",
    didYouKnow: "Mother Teresa's sisters wear a simple white cotton sari with three blue stripes, symbolizing the vows of poverty, chastity, and obedience, and devotion to Our Lady!",
    reflection: "Mother Teresa said: 'Peace begins with a smile.' How can a simple smile brighten the day of someone who is tired or stressed in line?"
  },
  {
    id: "pueblo_esperanza",
    name: "Pueblo Esperanza (Tropical Americas)",
    park: "Disney's Animal Kingdom",
    icon: "🦜",
    saint: "St. Rose of Lima & St. Martin de Porres",
    saintTitle: "First Canonized Saint of the Americas & Beloved Dominican Healer",
    feastDay: "August 23 (St. Rose) • November 3 (St. Martin)",
    scripture: "Apart from the Cross, there is no other ladder by which we may get to heaven. (Saint Rose of Lima)",
    story: "Pueblo Esperanza ('Village of Hope') celebrates the rainforests, architecture, and warmth of Central and South America. In historic 16th-century Lima, Peru, lived Saint Rose of Lima and Saint Martin de Porres. Rose was renowned for her radiant beauty, deep life of prayer, and care for the indigenous poor, becoming the first canonized saint in the Americas. Martin de Porres was a humble mixed-race Dominican friar who had a miraculous connection with animals, famously feeding cats, dogs, and mice out of the very same bowl in peace!",
    didYouKnow: "Saint Martin de Porres was gifted with miraculous healings, bilocation, and levitation, and is the patron saint of social justice, barbers, and public health!",
    reflection: "Pueblo Esperanza means 'Village of Hope.' How can our family bring the hope and joy of Christ into our neighborhood?"
  }
];

var getLandPatron = CD.getLandPatron = global.getLandPatron = function(landIdOrName) {
  if (!landIdOrName) return null;
  const search = landIdOrName.toLowerCase();
  return LAND_PATRONS.find(p =>
    p.id.toLowerCase() === search ||
    p.name.toLowerCase().includes(search) ||
    search.includes(p.name.toLowerCase()) ||
    p.saint.toLowerCase().includes(search)
  ) || null;
}

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/calendar-crowds-data.js
  // ==========================================

  (function() {
// 366-Day Disney World Calendar Crowd Intelligence (Modern 5-Year Dataset: 2021-2026)
// Extracted from 175,137 post-COVID queue observations
// Calibrated for accurate Summer, Holiday, and Off-Peak crowd classification

var CALENDAR_CROWDS = CD.CALENDAR_CROWDS = global.CALENDAR_CROWDS = {
  "01-03": {
    "mmDd": "01-03",
    "avgWaitMin": 42.4,
    "peakWaitMin": 105,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 390
  },
  "01-04": {
    "mmDd": "01-04",
    "avgWaitMin": 45.7,
    "peakWaitMin": 130,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 371
  },
  "01-05": {
    "mmDd": "01-05",
    "avgWaitMin": 41.6,
    "peakWaitMin": 120,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 393
  },
  "01-06": {
    "mmDd": "01-06",
    "avgWaitMin": 37.9,
    "peakWaitMin": 120,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 396
  },
  "01-07": {
    "mmDd": "01-07",
    "avgWaitMin": 34.6,
    "peakWaitMin": 85,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 389
  },
  "01-08": {
    "mmDd": "01-08",
    "avgWaitMin": 33.4,
    "peakWaitMin": 80,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 386
  },
  "01-09": {
    "mmDd": "01-09",
    "avgWaitMin": 36.6,
    "peakWaitMin": 100,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 411
  },
  "01-10": {
    "mmDd": "01-10",
    "avgWaitMin": 29.4,
    "peakWaitMin": 75,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 386
  },
  "01-11": {
    "mmDd": "01-11",
    "avgWaitMin": 27.4,
    "peakWaitMin": 75,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 352
  },
  "01-12": {
    "mmDd": "01-12",
    "avgWaitMin": 24.9,
    "peakWaitMin": 70,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 364
  },
  "01-13": {
    "mmDd": "01-13",
    "avgWaitMin": 21.5,
    "peakWaitMin": 60,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 353
  },
  "01-14": {
    "mmDd": "01-14",
    "avgWaitMin": 23.6,
    "peakWaitMin": 60,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 335
  },
  "01-15": {
    "mmDd": "01-15",
    "avgWaitMin": 27.8,
    "peakWaitMin": 75,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 352
  },
  "01-16": {
    "mmDd": "01-16",
    "avgWaitMin": 40.2,
    "peakWaitMin": 105,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 380
  },
  "01-17": {
    "mmDd": "01-17",
    "avgWaitMin": 43.9,
    "peakWaitMin": 95,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 375
  },
  "01-18": {
    "mmDd": "01-18",
    "avgWaitMin": 37.6,
    "peakWaitMin": 135,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 356
  },
  "01-19": {
    "mmDd": "01-19",
    "avgWaitMin": 24.9,
    "peakWaitMin": 75,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 341
  },
  "01-20": {
    "mmDd": "01-20",
    "avgWaitMin": 21.6,
    "peakWaitMin": 70,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 331
  },
  "01-21": {
    "mmDd": "01-21",
    "avgWaitMin": 20.8,
    "peakWaitMin": 60,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 333
  },
  "01-22": {
    "mmDd": "01-22",
    "avgWaitMin": 24.2,
    "peakWaitMin": 70,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 303
  },
  "01-23": {
    "mmDd": "01-23",
    "avgWaitMin": 30.2,
    "peakWaitMin": 75,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 354
  },
  "01-24": {
    "mmDd": "01-24",
    "avgWaitMin": 29.5,
    "peakWaitMin": 75,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 356
  },
  "01-25": {
    "mmDd": "01-25",
    "avgWaitMin": 23.8,
    "peakWaitMin": 70,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 345
  },
  "01-26": {
    "mmDd": "01-26",
    "avgWaitMin": 24.9,
    "peakWaitMin": 60,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 332
  },
  "01-27": {
    "mmDd": "01-27",
    "avgWaitMin": 21.7,
    "peakWaitMin": 60,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 331
  },
  "01-28": {
    "mmDd": "01-28",
    "avgWaitMin": 24.8,
    "peakWaitMin": 70,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 360
  },
  "01-29": {
    "mmDd": "01-29",
    "avgWaitMin": 27.0,
    "peakWaitMin": 70,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 342
  },
  "01-30": {
    "mmDd": "01-30",
    "avgWaitMin": 35.1,
    "peakWaitMin": 85,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 372
  },
  "01-31": {
    "mmDd": "01-31",
    "avgWaitMin": 29.2,
    "peakWaitMin": 70,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "WINTER LOW",
    "isHoliday": false,
    "weatherHigh": 71,
    "weatherLow": 50,
    "schoolOut": false,
    "obsCount": 361
  },
  "02-01": {
    "mmDd": "02-01",
    "avgWaitMin": 21.7,
    "peakWaitMin": 65,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 385
  },
  "02-02": {
    "mmDd": "02-02",
    "avgWaitMin": 20.3,
    "peakWaitMin": 60,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 353
  },
  "02-03": {
    "mmDd": "02-03",
    "avgWaitMin": 23.7,
    "peakWaitMin": 60,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 330
  },
  "02-04": {
    "mmDd": "02-04",
    "avgWaitMin": 24.7,
    "peakWaitMin": 60,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 369
  },
  "02-05": {
    "mmDd": "02-05",
    "avgWaitMin": 27.0,
    "peakWaitMin": 83,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 355
  },
  "02-06": {
    "mmDd": "02-06",
    "avgWaitMin": 34.0,
    "peakWaitMin": 75,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 380
  },
  "02-07": {
    "mmDd": "02-07",
    "avgWaitMin": 28.0,
    "peakWaitMin": 60,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 359
  },
  "02-08": {
    "mmDd": "02-08",
    "avgWaitMin": 26.0,
    "peakWaitMin": 86,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 346
  },
  "02-09": {
    "mmDd": "02-09",
    "avgWaitMin": 26.5,
    "peakWaitMin": 70,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 338
  },
  "02-10": {
    "mmDd": "02-10",
    "avgWaitMin": 25.3,
    "peakWaitMin": 60,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 335
  },
  "02-11": {
    "mmDd": "02-11",
    "avgWaitMin": 29.0,
    "peakWaitMin": 90,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 351
  },
  "02-12": {
    "mmDd": "02-12",
    "avgWaitMin": 37.3,
    "peakWaitMin": 85,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "PRESIDENTS WEEK PEAK",
    "isHoliday": true,
    "weatherHigh": 74,
    "weatherLow": 53,
    "schoolOut": false,
    "obsCount": 354
  },
  "02-13": {
    "mmDd": "02-13",
    "avgWaitMin": 44.1,
    "peakWaitMin": 120,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "PRESIDENTS WEEK PEAK",
    "isHoliday": true,
    "weatherHigh": 74,
    "weatherLow": 53,
    "schoolOut": false,
    "obsCount": 381
  },
  "02-14": {
    "mmDd": "02-14",
    "avgWaitMin": 49.1,
    "peakWaitMin": 135,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "PRESIDENTS WEEK PEAK",
    "isHoliday": true,
    "weatherHigh": 74,
    "weatherLow": 53,
    "schoolOut": false,
    "obsCount": 419
  },
  "02-15": {
    "mmDd": "02-15",
    "avgWaitMin": 49.3,
    "peakWaitMin": 115,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "PRESIDENTS WEEK PEAK",
    "isHoliday": true,
    "weatherHigh": 74,
    "weatherLow": 53,
    "schoolOut": false,
    "obsCount": 405
  },
  "02-16": {
    "mmDd": "02-16",
    "avgWaitMin": 52.9,
    "peakWaitMin": 125,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "PRESIDENTS WEEK PEAK",
    "isHoliday": true,
    "weatherHigh": 74,
    "weatherLow": 53,
    "schoolOut": false,
    "obsCount": 385
  },
  "02-17": {
    "mmDd": "02-17",
    "avgWaitMin": 49.0,
    "peakWaitMin": 130,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "PRESIDENTS WEEK PEAK",
    "isHoliday": true,
    "weatherHigh": 74,
    "weatherLow": 53,
    "schoolOut": false,
    "obsCount": 370
  },
  "02-18": {
    "mmDd": "02-18",
    "avgWaitMin": 47.1,
    "peakWaitMin": 110,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "PRESIDENTS WEEK PEAK",
    "isHoliday": true,
    "weatherHigh": 74,
    "weatherLow": 53,
    "schoolOut": false,
    "obsCount": 332
  },
  "02-19": {
    "mmDd": "02-19",
    "avgWaitMin": 44.3,
    "peakWaitMin": 105,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "PRESIDENTS WEEK PEAK",
    "isHoliday": true,
    "weatherHigh": 74,
    "weatherLow": 53,
    "schoolOut": false,
    "obsCount": 338
  },
  "02-20": {
    "mmDd": "02-20",
    "avgWaitMin": 48.0,
    "peakWaitMin": 105,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "PRESIDENTS WEEK PEAK",
    "isHoliday": true,
    "weatherHigh": 74,
    "weatherLow": 53,
    "schoolOut": false,
    "obsCount": 388
  },
  "02-21": {
    "mmDd": "02-21",
    "avgWaitMin": 46.9,
    "peakWaitMin": 110,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "PRESIDENTS WEEK PEAK",
    "isHoliday": true,
    "weatherHigh": 74,
    "weatherLow": 53,
    "schoolOut": false,
    "obsCount": 373
  },
  "02-22": {
    "mmDd": "02-22",
    "avgWaitMin": 35.7,
    "peakWaitMin": 90,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "PRESIDENTS WEEK PEAK",
    "isHoliday": true,
    "weatherHigh": 74,
    "weatherLow": 53,
    "schoolOut": false,
    "obsCount": 369
  },
  "02-23": {
    "mmDd": "02-23",
    "avgWaitMin": 37.5,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 356
  },
  "02-24": {
    "mmDd": "02-24",
    "avgWaitMin": 36.8,
    "peakWaitMin": 80,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 378
  },
  "02-25": {
    "mmDd": "02-25",
    "avgWaitMin": 41.0,
    "peakWaitMin": 120,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 365
  },
  "02-26": {
    "mmDd": "02-26",
    "avgWaitMin": 40.0,
    "peakWaitMin": 95,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 358
  },
  "02-27": {
    "mmDd": "02-27",
    "avgWaitMin": 40.6,
    "peakWaitMin": 105,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 397
  },
  "02-28": {
    "mmDd": "02-28",
    "avgWaitMin": 36.9,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 417
  },
  "03-01": {
    "mmDd": "03-01",
    "avgWaitMin": 31.0,
    "peakWaitMin": 85,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 359
  },
  "03-02": {
    "mmDd": "03-02",
    "avgWaitMin": 29.7,
    "peakWaitMin": 90,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 359
  },
  "03-03": {
    "mmDd": "03-03",
    "avgWaitMin": 29.2,
    "peakWaitMin": 80,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 326
  },
  "03-04": {
    "mmDd": "03-04",
    "avgWaitMin": 37.5,
    "peakWaitMin": 80,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 349
  },
  "03-05": {
    "mmDd": "03-05",
    "avgWaitMin": 35.9,
    "peakWaitMin": 85,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 365
  },
  "03-06": {
    "mmDd": "03-06",
    "avgWaitMin": 34.9,
    "peakWaitMin": 75,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 397
  },
  "03-07": {
    "mmDd": "03-07",
    "avgWaitMin": 40.1,
    "peakWaitMin": 90,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 318
  },
  "03-08": {
    "mmDd": "03-08",
    "avgWaitMin": 45.1,
    "peakWaitMin": 115,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 419
  },
  "03-09": {
    "mmDd": "03-09",
    "avgWaitMin": 48.7,
    "peakWaitMin": 135,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 399
  },
  "03-10": {
    "mmDd": "03-10",
    "avgWaitMin": 47.2,
    "peakWaitMin": 115,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 417
  },
  "03-11": {
    "mmDd": "03-11",
    "avgWaitMin": 44.7,
    "peakWaitMin": 135,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 419
  },
  "03-12": {
    "mmDd": "03-12",
    "avgWaitMin": 37.9,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 455
  },
  "03-13": {
    "mmDd": "03-13",
    "avgWaitMin": 38.4,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 448
  },
  "03-14": {
    "mmDd": "03-14",
    "avgWaitMin": 37.9,
    "peakWaitMin": 97,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 515
  },
  "03-15": {
    "mmDd": "03-15",
    "avgWaitMin": 45.0,
    "peakWaitMin": 135,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 467
  },
  "03-16": {
    "mmDd": "03-16",
    "avgWaitMin": 44.9,
    "peakWaitMin": 125,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 510
  },
  "03-17": {
    "mmDd": "03-17",
    "avgWaitMin": 41.9,
    "peakWaitMin": 150,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 492
  },
  "03-18": {
    "mmDd": "03-18",
    "avgWaitMin": 42.9,
    "peakWaitMin": 135,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 474
  },
  "03-19": {
    "mmDd": "03-19",
    "avgWaitMin": 41.5,
    "peakWaitMin": 105,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 477
  },
  "03-20": {
    "mmDd": "03-20",
    "avgWaitMin": 38.9,
    "peakWaitMin": 90,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 471
  },
  "03-21": {
    "mmDd": "03-21",
    "avgWaitMin": 39.3,
    "peakWaitMin": 105,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 483
  },
  "03-22": {
    "mmDd": "03-22",
    "avgWaitMin": 39.8,
    "peakWaitMin": 110,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 466
  },
  "03-23": {
    "mmDd": "03-23",
    "avgWaitMin": 40.9,
    "peakWaitMin": 140,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 469
  },
  "03-24": {
    "mmDd": "03-24",
    "avgWaitMin": 39.8,
    "peakWaitMin": 115,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 438
  },
  "03-25": {
    "mmDd": "03-25",
    "avgWaitMin": 35.6,
    "peakWaitMin": 90,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 450
  },
  "03-26": {
    "mmDd": "03-26",
    "avgWaitMin": 33.5,
    "peakWaitMin": 105,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 463
  },
  "03-27": {
    "mmDd": "03-27",
    "avgWaitMin": 34.8,
    "peakWaitMin": 95,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 464
  },
  "03-28": {
    "mmDd": "03-28",
    "avgWaitMin": 39.9,
    "peakWaitMin": 95,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 475
  },
  "03-29": {
    "mmDd": "03-29",
    "avgWaitMin": 44.6,
    "peakWaitMin": 150,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 470
  },
  "03-30": {
    "mmDd": "03-30",
    "avgWaitMin": 41.0,
    "peakWaitMin": 150,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 485
  },
  "03-31": {
    "mmDd": "03-31",
    "avgWaitMin": 38.3,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 455
  },
  "04-01": {
    "mmDd": "04-01",
    "avgWaitMin": 42.1,
    "peakWaitMin": 120,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 478
  },
  "04-02": {
    "mmDd": "04-02",
    "avgWaitMin": 42.7,
    "peakWaitMin": 139,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 462
  },
  "04-03": {
    "mmDd": "04-03",
    "avgWaitMin": 37.9,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 468
  },
  "04-04": {
    "mmDd": "04-04",
    "avgWaitMin": 38.9,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 440
  },
  "04-05": {
    "mmDd": "04-05",
    "avgWaitMin": 39.8,
    "peakWaitMin": 115,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 454
  },
  "04-06": {
    "mmDd": "04-06",
    "avgWaitMin": 44.2,
    "peakWaitMin": 195,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 473
  },
  "04-07": {
    "mmDd": "04-07",
    "avgWaitMin": 40.3,
    "peakWaitMin": 135,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 481
  },
  "04-08": {
    "mmDd": "04-08",
    "avgWaitMin": 39.6,
    "peakWaitMin": 120,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 472
  },
  "04-09": {
    "mmDd": "04-09",
    "avgWaitMin": 36.7,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 474
  },
  "04-10": {
    "mmDd": "04-10",
    "avgWaitMin": 33.2,
    "peakWaitMin": 105,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 439
  },
  "04-11": {
    "mmDd": "04-11",
    "avgWaitMin": 26.5,
    "peakWaitMin": 80,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 362
  },
  "04-12": {
    "mmDd": "04-12",
    "avgWaitMin": 37.1,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 442
  },
  "04-13": {
    "mmDd": "04-13",
    "avgWaitMin": 36.8,
    "peakWaitMin": 90,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 432
  },
  "04-14": {
    "mmDd": "04-14",
    "avgWaitMin": 35.7,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 440
  },
  "04-15": {
    "mmDd": "04-15",
    "avgWaitMin": 34.5,
    "peakWaitMin": 75,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 455
  },
  "04-16": {
    "mmDd": "04-16",
    "avgWaitMin": 31.1,
    "peakWaitMin": 80,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 477
  },
  "04-17": {
    "mmDd": "04-17",
    "avgWaitMin": 32.6,
    "peakWaitMin": 85,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 473
  },
  "04-18": {
    "mmDd": "04-18",
    "avgWaitMin": 32.2,
    "peakWaitMin": 75,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING BREAK & EASTER",
    "isHoliday": false,
    "weatherHigh": 80,
    "weatherLow": 60,
    "schoolOut": true,
    "obsCount": 467
  },
  "04-19": {
    "mmDd": "04-19",
    "avgWaitMin": 35.4,
    "peakWaitMin": 90,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 432
  },
  "04-20": {
    "mmDd": "04-20",
    "avgWaitMin": 33.6,
    "peakWaitMin": 90,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 412
  },
  "04-21": {
    "mmDd": "04-21",
    "avgWaitMin": 35.9,
    "peakWaitMin": 90,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 420
  },
  "04-22": {
    "mmDd": "04-22",
    "avgWaitMin": 36.0,
    "peakWaitMin": 90,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 453
  },
  "04-23": {
    "mmDd": "04-23",
    "avgWaitMin": 32.1,
    "peakWaitMin": 80,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 487
  },
  "04-24": {
    "mmDd": "04-24",
    "avgWaitMin": 31.1,
    "peakWaitMin": 80,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 467
  },
  "04-25": {
    "mmDd": "04-25",
    "avgWaitMin": 30.1,
    "peakWaitMin": 75,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 453
  },
  "04-26": {
    "mmDd": "04-26",
    "avgWaitMin": 35.0,
    "peakWaitMin": 110,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 450
  },
  "04-27": {
    "mmDd": "04-27",
    "avgWaitMin": 33.1,
    "peakWaitMin": 85,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 479
  },
  "04-28": {
    "mmDd": "04-28",
    "avgWaitMin": 34.0,
    "peakWaitMin": 95,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 442
  },
  "04-29": {
    "mmDd": "04-29",
    "avgWaitMin": 30.4,
    "peakWaitMin": 75,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 415
  },
  "04-30": {
    "mmDd": "04-30",
    "avgWaitMin": 28.8,
    "peakWaitMin": 70,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 455
  },
  "05-01": {
    "mmDd": "05-01",
    "avgWaitMin": 32.0,
    "peakWaitMin": 90,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 455
  },
  "05-02": {
    "mmDd": "05-02",
    "avgWaitMin": 32.2,
    "peakWaitMin": 85,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 398
  },
  "05-03": {
    "mmDd": "05-03",
    "avgWaitMin": 36.2,
    "peakWaitMin": 115,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 430
  },
  "05-04": {
    "mmDd": "05-04",
    "avgWaitMin": 33.6,
    "peakWaitMin": 90,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 433
  },
  "05-05": {
    "mmDd": "05-05",
    "avgWaitMin": 34.2,
    "peakWaitMin": 120,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 431
  },
  "05-06": {
    "mmDd": "05-06",
    "avgWaitMin": 32.2,
    "peakWaitMin": 90,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 436
  },
  "05-07": {
    "mmDd": "05-07",
    "avgWaitMin": 30.8,
    "peakWaitMin": 95,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 455
  },
  "05-08": {
    "mmDd": "05-08",
    "avgWaitMin": 34.3,
    "peakWaitMin": 90,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 421
  },
  "05-09": {
    "mmDd": "05-09",
    "avgWaitMin": 34.3,
    "peakWaitMin": 120,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 436
  },
  "05-10": {
    "mmDd": "05-10",
    "avgWaitMin": 35.6,
    "peakWaitMin": 145,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 417
  },
  "05-11": {
    "mmDd": "05-11",
    "avgWaitMin": 38.7,
    "peakWaitMin": 120,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 438
  },
  "05-12": {
    "mmDd": "05-12",
    "avgWaitMin": 35.4,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 389
  },
  "05-13": {
    "mmDd": "05-13",
    "avgWaitMin": 37.7,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 451
  },
  "05-14": {
    "mmDd": "05-14",
    "avgWaitMin": 34.8,
    "peakWaitMin": 90,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 454
  },
  "05-15": {
    "mmDd": "05-15",
    "avgWaitMin": 33.7,
    "peakWaitMin": 95,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 456
  },
  "05-16": {
    "mmDd": "05-16",
    "avgWaitMin": 35.0,
    "peakWaitMin": 120,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 443
  },
  "05-17": {
    "mmDd": "05-17",
    "avgWaitMin": 38.5,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 426
  },
  "05-18": {
    "mmDd": "05-18",
    "avgWaitMin": 38.6,
    "peakWaitMin": 110,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 424
  },
  "05-19": {
    "mmDd": "05-19",
    "avgWaitMin": 37.1,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 462
  },
  "05-20": {
    "mmDd": "05-20",
    "avgWaitMin": 36.9,
    "peakWaitMin": 100,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 456
  },
  "05-21": {
    "mmDd": "05-21",
    "avgWaitMin": 33.6,
    "peakWaitMin": 105,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 449
  },
  "05-22": {
    "mmDd": "05-22",
    "avgWaitMin": 34.2,
    "peakWaitMin": 90,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 468
  },
  "05-23": {
    "mmDd": "05-23",
    "avgWaitMin": 33.0,
    "peakWaitMin": 95,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 474
  },
  "05-24": {
    "mmDd": "05-24",
    "avgWaitMin": 35.8,
    "peakWaitMin": 110,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 465
  },
  "05-25": {
    "mmDd": "05-25",
    "avgWaitMin": 33.9,
    "peakWaitMin": 105,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 459
  },
  "05-26": {
    "mmDd": "05-26",
    "avgWaitMin": 33.5,
    "peakWaitMin": 110,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 453
  },
  "05-27": {
    "mmDd": "05-27",
    "avgWaitMin": 33.8,
    "peakWaitMin": 95,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 453
  },
  "05-28": {
    "mmDd": "05-28",
    "avgWaitMin": 32.7,
    "peakWaitMin": 90,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 422
  },
  "05-29": {
    "mmDd": "05-29",
    "avgWaitMin": 32.3,
    "peakWaitMin": 120,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 428
  },
  "05-30": {
    "mmDd": "05-30",
    "avgWaitMin": 35.4,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 456
  },
  "05-31": {
    "mmDd": "05-31",
    "avgWaitMin": 36.3,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SPRING PRE-SUMMER",
    "isHoliday": false,
    "weatherHigh": 88,
    "weatherLow": 69,
    "schoolOut": false,
    "obsCount": 438
  },
  "06-01": {
    "mmDd": "06-01",
    "avgWaitMin": 35.9,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 434
  },
  "06-02": {
    "mmDd": "06-02",
    "avgWaitMin": 36.1,
    "peakWaitMin": 90,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 456
  },
  "06-03": {
    "mmDd": "06-03",
    "avgWaitMin": 34.4,
    "peakWaitMin": 100,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 476
  },
  "06-04": {
    "mmDd": "06-04",
    "avgWaitMin": 34.5,
    "peakWaitMin": 95,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 439
  },
  "06-05": {
    "mmDd": "06-05",
    "avgWaitMin": 33.8,
    "peakWaitMin": 105,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 466
  },
  "06-06": {
    "mmDd": "06-06",
    "avgWaitMin": 33.9,
    "peakWaitMin": 85,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 460
  },
  "06-07": {
    "mmDd": "06-07",
    "avgWaitMin": 36.9,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 444
  },
  "06-08": {
    "mmDd": "06-08",
    "avgWaitMin": 35.2,
    "peakWaitMin": 90,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 453
  },
  "06-09": {
    "mmDd": "06-09",
    "avgWaitMin": 37.6,
    "peakWaitMin": 110,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 481
  },
  "06-10": {
    "mmDd": "06-10",
    "avgWaitMin": 39.3,
    "peakWaitMin": 180,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 424
  },
  "06-11": {
    "mmDd": "06-11",
    "avgWaitMin": 34.0,
    "peakWaitMin": 197,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 435
  },
  "06-12": {
    "mmDd": "06-12",
    "avgWaitMin": 37.1,
    "peakWaitMin": 110,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 429
  },
  "06-13": {
    "mmDd": "06-13",
    "avgWaitMin": 36.3,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 421
  },
  "06-14": {
    "mmDd": "06-14",
    "avgWaitMin": 37.7,
    "peakWaitMin": 120,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 418
  },
  "06-15": {
    "mmDd": "06-15",
    "avgWaitMin": 36.7,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 403
  },
  "06-16": {
    "mmDd": "06-16",
    "avgWaitMin": 37.3,
    "peakWaitMin": 106,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 428
  },
  "06-17": {
    "mmDd": "06-17",
    "avgWaitMin": 38.0,
    "peakWaitMin": 120,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 453
  },
  "06-18": {
    "mmDd": "06-18",
    "avgWaitMin": 33.0,
    "peakWaitMin": 95,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 436
  },
  "06-19": {
    "mmDd": "06-19",
    "avgWaitMin": 31.6,
    "peakWaitMin": 110,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 449
  },
  "06-20": {
    "mmDd": "06-20",
    "avgWaitMin": 31.1,
    "peakWaitMin": 85,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 458
  },
  "06-21": {
    "mmDd": "06-21",
    "avgWaitMin": 33.7,
    "peakWaitMin": 110,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 416
  },
  "06-22": {
    "mmDd": "06-22",
    "avgWaitMin": 34.5,
    "peakWaitMin": 110,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 416
  },
  "06-23": {
    "mmDd": "06-23",
    "avgWaitMin": 38.8,
    "peakWaitMin": 107,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 425
  },
  "06-24": {
    "mmDd": "06-24",
    "avgWaitMin": 39.5,
    "peakWaitMin": 113,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 416
  },
  "06-25": {
    "mmDd": "06-25",
    "avgWaitMin": 36.5,
    "peakWaitMin": 140,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 416
  },
  "06-26": {
    "mmDd": "06-26",
    "avgWaitMin": 35.7,
    "peakWaitMin": 100,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 432
  },
  "06-27": {
    "mmDd": "06-27",
    "avgWaitMin": 41.0,
    "peakWaitMin": 140,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 402
  },
  "06-28": {
    "mmDd": "06-28",
    "avgWaitMin": 41.9,
    "peakWaitMin": 110,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 427
  },
  "06-29": {
    "mmDd": "06-29",
    "avgWaitMin": 43.7,
    "peakWaitMin": 121,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 396
  },
  "06-30": {
    "mmDd": "06-30",
    "avgWaitMin": 46.1,
    "peakWaitMin": 150,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "EARLY SUMMER",
    "isHoliday": false,
    "weatherHigh": 90,
    "weatherLow": 73,
    "schoolOut": true,
    "obsCount": 418
  },
  "07-01": {
    "mmDd": "07-01",
    "avgWaitMin": 42.0,
    "peakWaitMin": 125,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 410
  },
  "07-02": {
    "mmDd": "07-02",
    "avgWaitMin": 38.5,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 402
  },
  "07-03": {
    "mmDd": "07-03",
    "avgWaitMin": 36.1,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 374
  },
  "07-04": {
    "mmDd": "07-04",
    "avgWaitMin": 37.6,
    "peakWaitMin": 110,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 438
  },
  "07-05": {
    "mmDd": "07-05",
    "avgWaitMin": 41.7,
    "peakWaitMin": 120,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 420
  },
  "07-06": {
    "mmDd": "07-06",
    "avgWaitMin": 43.4,
    "peakWaitMin": 130,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 410
  },
  "07-07": {
    "mmDd": "07-07",
    "avgWaitMin": 41.4,
    "peakWaitMin": 135,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 406
  },
  "07-08": {
    "mmDd": "07-08",
    "avgWaitMin": 50.5,
    "peakWaitMin": 145,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 375
  },
  "07-09": {
    "mmDd": "07-09",
    "avgWaitMin": 44.7,
    "peakWaitMin": 155,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 417
  },
  "07-10": {
    "mmDd": "07-10",
    "avgWaitMin": 49.2,
    "peakWaitMin": 145,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 409
  },
  "07-11": {
    "mmDd": "07-11",
    "avgWaitMin": 42.8,
    "peakWaitMin": 140,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 434
  },
  "07-12": {
    "mmDd": "07-12",
    "avgWaitMin": 48.4,
    "peakWaitMin": 150,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 402
  },
  "07-13": {
    "mmDd": "07-13",
    "avgWaitMin": 53.4,
    "peakWaitMin": 210,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 429
  },
  "07-14": {
    "mmDd": "07-14",
    "avgWaitMin": 54.0,
    "peakWaitMin": 210,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 427
  },
  "07-15": {
    "mmDd": "07-15",
    "avgWaitMin": 51.2,
    "peakWaitMin": 165,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 438
  },
  "07-16": {
    "mmDd": "07-16",
    "avgWaitMin": 46.9,
    "peakWaitMin": 125,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 403
  },
  "07-17": {
    "mmDd": "07-17",
    "avgWaitMin": 43.0,
    "peakWaitMin": 150,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 399
  },
  "07-18": {
    "mmDd": "07-18",
    "avgWaitMin": 45.5,
    "peakWaitMin": 160,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 411
  },
  "07-19": {
    "mmDd": "07-19",
    "avgWaitMin": 53.2,
    "peakWaitMin": 160,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 381
  },
  "07-20": {
    "mmDd": "07-20",
    "avgWaitMin": 54.7,
    "peakWaitMin": 160,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 417
  },
  "07-21": {
    "mmDd": "07-21",
    "avgWaitMin": 54.8,
    "peakWaitMin": 180,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 411
  },
  "07-22": {
    "mmDd": "07-22",
    "avgWaitMin": 56.3,
    "peakWaitMin": 190,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 402
  },
  "07-23": {
    "mmDd": "07-23",
    "avgWaitMin": 51.2,
    "peakWaitMin": 155,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 424
  },
  "07-24": {
    "mmDd": "07-24",
    "avgWaitMin": 50.4,
    "peakWaitMin": 150,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 422
  },
  "07-25": {
    "mmDd": "07-25",
    "avgWaitMin": 45.3,
    "peakWaitMin": 155,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 435
  },
  "07-26": {
    "mmDd": "07-26",
    "avgWaitMin": 52.5,
    "peakWaitMin": 180,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 420
  },
  "07-27": {
    "mmDd": "07-27",
    "avgWaitMin": 56.5,
    "peakWaitMin": 165,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 416
  },
  "07-28": {
    "mmDd": "07-28",
    "avgWaitMin": 56.3,
    "peakWaitMin": 150,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 422
  },
  "07-29": {
    "mmDd": "07-29",
    "avgWaitMin": 51.3,
    "peakWaitMin": 155,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 423
  },
  "07-30": {
    "mmDd": "07-30",
    "avgWaitMin": 49.8,
    "peakWaitMin": 180,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 425
  },
  "07-31": {
    "mmDd": "07-31",
    "avgWaitMin": 40.7,
    "peakWaitMin": 160,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER PEAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 75,
    "schoolOut": true,
    "obsCount": 466
  },
  "08-01": {
    "mmDd": "08-01",
    "avgWaitMin": 40.3,
    "peakWaitMin": 135,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 433
  },
  "08-02": {
    "mmDd": "08-02",
    "avgWaitMin": 45.6,
    "peakWaitMin": 120,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 432
  },
  "08-03": {
    "mmDd": "08-03",
    "avgWaitMin": 47.5,
    "peakWaitMin": 130,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 475
  },
  "08-04": {
    "mmDd": "08-04",
    "avgWaitMin": 48.7,
    "peakWaitMin": 140,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 436
  },
  "08-05": {
    "mmDd": "08-05",
    "avgWaitMin": 50.7,
    "peakWaitMin": 140,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 463
  },
  "08-06": {
    "mmDd": "08-06",
    "avgWaitMin": 39.4,
    "peakWaitMin": 130,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 422
  },
  "08-07": {
    "mmDd": "08-07",
    "avgWaitMin": 38.9,
    "peakWaitMin": 120,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 456
  },
  "08-08": {
    "mmDd": "08-08",
    "avgWaitMin": 34.9,
    "peakWaitMin": 130,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 441
  },
  "08-09": {
    "mmDd": "08-09",
    "avgWaitMin": 38.2,
    "peakWaitMin": 110,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 434
  },
  "08-10": {
    "mmDd": "08-10",
    "avgWaitMin": 39.7,
    "peakWaitMin": 115,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 463
  },
  "08-11": {
    "mmDd": "08-11",
    "avgWaitMin": 35.4,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 434
  },
  "08-12": {
    "mmDd": "08-12",
    "avgWaitMin": 34.5,
    "peakWaitMin": 100,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SUMMER BREAK",
    "isHoliday": false,
    "weatherHigh": 92,
    "weatherLow": 76,
    "schoolOut": true,
    "obsCount": 446
  },
  "08-13": {
    "mmDd": "08-13",
    "avgWaitMin": 29.0,
    "peakWaitMin": 105,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 435
  },
  "08-14": {
    "mmDd": "08-14",
    "avgWaitMin": 25.9,
    "peakWaitMin": 95,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 442
  },
  "08-15": {
    "mmDd": "08-15",
    "avgWaitMin": 25.5,
    "peakWaitMin": 80,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 437
  },
  "08-16": {
    "mmDd": "08-16",
    "avgWaitMin": 25.7,
    "peakWaitMin": 80,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 437
  },
  "08-17": {
    "mmDd": "08-17",
    "avgWaitMin": 25.0,
    "peakWaitMin": 80,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 417
  },
  "08-18": {
    "mmDd": "08-18",
    "avgWaitMin": 23.5,
    "peakWaitMin": 70,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 430
  },
  "08-19": {
    "mmDd": "08-19",
    "avgWaitMin": 22.9,
    "peakWaitMin": 75,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 440
  },
  "08-20": {
    "mmDd": "08-20",
    "avgWaitMin": 20.9,
    "peakWaitMin": 70,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 447
  },
  "08-21": {
    "mmDd": "08-21",
    "avgWaitMin": 21.3,
    "peakWaitMin": 70,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 446
  },
  "08-22": {
    "mmDd": "08-22",
    "avgWaitMin": 21.4,
    "peakWaitMin": 75,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 426
  },
  "08-23": {
    "mmDd": "08-23",
    "avgWaitMin": 22.8,
    "peakWaitMin": 70,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 422
  },
  "08-24": {
    "mmDd": "08-24",
    "avgWaitMin": 21.0,
    "peakWaitMin": 75,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 425
  },
  "08-25": {
    "mmDd": "08-25",
    "avgWaitMin": 21.1,
    "peakWaitMin": 90,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 421
  },
  "08-26": {
    "mmDd": "08-26",
    "avgWaitMin": 20.4,
    "peakWaitMin": 65,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 426
  },
  "08-27": {
    "mmDd": "08-27",
    "avgWaitMin": 17.9,
    "peakWaitMin": 65,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 418
  },
  "08-28": {
    "mmDd": "08-28",
    "avgWaitMin": 19.0,
    "peakWaitMin": 60,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 452
  },
  "08-29": {
    "mmDd": "08-29",
    "avgWaitMin": 19.6,
    "peakWaitMin": 65,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 444
  },
  "08-30": {
    "mmDd": "08-30",
    "avgWaitMin": 19.9,
    "peakWaitMin": 85,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 1828
  },
  "08-31": {
    "mmDd": "08-31",
    "avgWaitMin": 19.4,
    "peakWaitMin": 85,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "LATE SUMMER (SCHOOLS RESUMING)",
    "isHoliday": false,
    "weatherHigh": 91,
    "weatherLow": 75,
    "schoolOut": false,
    "obsCount": 1816
  },
  "09-01": {
    "mmDd": "09-01",
    "avgWaitMin": 19.1,
    "peakWaitMin": 85,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 1831
  },
  "09-02": {
    "mmDd": "09-02",
    "avgWaitMin": 15.7,
    "peakWaitMin": 70,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 2435
  },
  "09-03": {
    "mmDd": "09-03",
    "avgWaitMin": 17.7,
    "peakWaitMin": 65,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 426
  },
  "09-04": {
    "mmDd": "09-04",
    "avgWaitMin": 31.4,
    "peakWaitMin": 80,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 443
  },
  "09-05": {
    "mmDd": "09-05",
    "avgWaitMin": 36.0,
    "peakWaitMin": 100,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 466
  },
  "09-06": {
    "mmDd": "09-06",
    "avgWaitMin": 28.8,
    "peakWaitMin": 110,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 488
  },
  "09-07": {
    "mmDd": "09-07",
    "avgWaitMin": 21.4,
    "peakWaitMin": 75,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 426
  },
  "09-08": {
    "mmDd": "09-08",
    "avgWaitMin": 16.6,
    "peakWaitMin": 60,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 407
  },
  "09-09": {
    "mmDd": "09-09",
    "avgWaitMin": 19.1,
    "peakWaitMin": 70,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 401
  },
  "09-10": {
    "mmDd": "09-10",
    "avgWaitMin": 20.1,
    "peakWaitMin": 60,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 409
  },
  "09-11": {
    "mmDd": "09-11",
    "avgWaitMin": 26.4,
    "peakWaitMin": 70,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 482
  },
  "09-12": {
    "mmDd": "09-12",
    "avgWaitMin": 24.9,
    "peakWaitMin": 70,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 463
  },
  "09-13": {
    "mmDd": "09-13",
    "avgWaitMin": 22.2,
    "peakWaitMin": 70,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 468
  },
  "09-14": {
    "mmDd": "09-14",
    "avgWaitMin": 24.1,
    "peakWaitMin": 80,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 405
  },
  "09-15": {
    "mmDd": "09-15",
    "avgWaitMin": 20.7,
    "peakWaitMin": 60,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 441
  },
  "09-16": {
    "mmDd": "09-16",
    "avgWaitMin": 23.8,
    "peakWaitMin": 70,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 436
  },
  "09-17": {
    "mmDd": "09-17",
    "avgWaitMin": 24.8,
    "peakWaitMin": 95,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 423
  },
  "09-18": {
    "mmDd": "09-18",
    "avgWaitMin": 27.7,
    "peakWaitMin": 95,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 429
  },
  "09-19": {
    "mmDd": "09-19",
    "avgWaitMin": 25.7,
    "peakWaitMin": 80,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 447
  },
  "09-20": {
    "mmDd": "09-20",
    "avgWaitMin": 24.5,
    "peakWaitMin": 70,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 458
  },
  "09-21": {
    "mmDd": "09-21",
    "avgWaitMin": 25.3,
    "peakWaitMin": 95,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 407
  },
  "09-22": {
    "mmDd": "09-22",
    "avgWaitMin": 21.6,
    "peakWaitMin": 80,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 457
  },
  "09-23": {
    "mmDd": "09-23",
    "avgWaitMin": 23.1,
    "peakWaitMin": 70,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 426
  },
  "09-24": {
    "mmDd": "09-24",
    "avgWaitMin": 26.0,
    "peakWaitMin": 75,
    "crowdLevel": 2,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 444
  },
  "09-25": {
    "mmDd": "09-25",
    "avgWaitMin": 28.7,
    "peakWaitMin": 85,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 532
  },
  "09-26": {
    "mmDd": "09-26",
    "avgWaitMin": 27.2,
    "peakWaitMin": 75,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 558
  },
  "09-27": {
    "mmDd": "09-27",
    "avgWaitMin": 22.6,
    "peakWaitMin": 80,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 529
  },
  "09-28": {
    "mmDd": "09-28",
    "avgWaitMin": 19.5,
    "peakWaitMin": 60,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 514
  },
  "09-29": {
    "mmDd": "09-29",
    "avgWaitMin": 19.7,
    "peakWaitMin": 75,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 483
  },
  "09-30": {
    "mmDd": "09-30",
    "avgWaitMin": 20.6,
    "peakWaitMin": 70,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "SEPTEMBER LOW",
    "isHoliday": false,
    "weatherHigh": 89,
    "weatherLow": 74,
    "schoolOut": false,
    "obsCount": 547
  },
  "10-01": {
    "mmDd": "10-01",
    "avgWaitMin": 17.6,
    "peakWaitMin": 70,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 561
  },
  "10-02": {
    "mmDd": "10-02",
    "avgWaitMin": 21.5,
    "peakWaitMin": 65,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 593
  },
  "10-03": {
    "mmDd": "10-03",
    "avgWaitMin": 22.8,
    "peakWaitMin": 75,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 619
  },
  "10-04": {
    "mmDd": "10-04",
    "avgWaitMin": 29.0,
    "peakWaitMin": 80,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 587
  },
  "10-05": {
    "mmDd": "10-05",
    "avgWaitMin": 29.8,
    "peakWaitMin": 90,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 605
  },
  "10-06": {
    "mmDd": "10-06",
    "avgWaitMin": 27.1,
    "peakWaitMin": 90,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 582
  },
  "10-07": {
    "mmDd": "10-07",
    "avgWaitMin": 30.5,
    "peakWaitMin": 83,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 567
  },
  "10-08": {
    "mmDd": "10-08",
    "avgWaitMin": 36.1,
    "peakWaitMin": 100,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 548
  },
  "10-09": {
    "mmDd": "10-09",
    "avgWaitMin": 39.1,
    "peakWaitMin": 120,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 593
  },
  "10-10": {
    "mmDd": "10-10",
    "avgWaitMin": 43.1,
    "peakWaitMin": 150,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 638
  },
  "10-11": {
    "mmDd": "10-11",
    "avgWaitMin": 43.7,
    "peakWaitMin": 135,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 578
  },
  "10-12": {
    "mmDd": "10-12",
    "avgWaitMin": 42.9,
    "peakWaitMin": 135,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 582
  },
  "10-13": {
    "mmDd": "10-13",
    "avgWaitMin": 39.1,
    "peakWaitMin": 100,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 572
  },
  "10-14": {
    "mmDd": "10-14",
    "avgWaitMin": 39.7,
    "peakWaitMin": 110,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 602
  },
  "10-15": {
    "mmDd": "10-15",
    "avgWaitMin": 39.1,
    "peakWaitMin": 130,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 574
  },
  "10-16": {
    "mmDd": "10-16",
    "avgWaitMin": 39.5,
    "peakWaitMin": 115,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 584
  },
  "10-17": {
    "mmDd": "10-17",
    "avgWaitMin": 36.7,
    "peakWaitMin": 120,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 573
  },
  "10-18": {
    "mmDd": "10-18",
    "avgWaitMin": 35.5,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 573
  },
  "10-19": {
    "mmDd": "10-19",
    "avgWaitMin": 35.0,
    "peakWaitMin": 125,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 563
  },
  "10-20": {
    "mmDd": "10-20",
    "avgWaitMin": 30.7,
    "peakWaitMin": 90,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 554
  },
  "10-21": {
    "mmDd": "10-21",
    "avgWaitMin": 34.2,
    "peakWaitMin": 95,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 560
  },
  "10-22": {
    "mmDd": "10-22",
    "avgWaitMin": 37.3,
    "peakWaitMin": 120,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 534
  },
  "10-23": {
    "mmDd": "10-23",
    "avgWaitMin": 36.5,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 567
  },
  "10-24": {
    "mmDd": "10-24",
    "avgWaitMin": 37.4,
    "peakWaitMin": 130,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 492
  },
  "10-25": {
    "mmDd": "10-25",
    "avgWaitMin": 31.0,
    "peakWaitMin": 120,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 527
  },
  "10-26": {
    "mmDd": "10-26",
    "avgWaitMin": 30.6,
    "peakWaitMin": 80,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 479
  },
  "10-27": {
    "mmDd": "10-27",
    "avgWaitMin": 29.6,
    "peakWaitMin": 80,
    "crowdLevel": 3,
    "crowdTier": "Low Crowd Lull",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 499
  },
  "10-28": {
    "mmDd": "10-28",
    "avgWaitMin": 20.7,
    "peakWaitMin": 75,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 539
  },
  "10-29": {
    "mmDd": "10-29",
    "avgWaitMin": 37.0,
    "peakWaitMin": 97,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 539
  },
  "10-30": {
    "mmDd": "10-30",
    "avgWaitMin": 41.2,
    "peakWaitMin": 140,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 542
  },
  "10-31": {
    "mmDd": "10-31",
    "avgWaitMin": 35.0,
    "peakWaitMin": 100,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "FALL & HALLOWEEN",
    "isHoliday": false,
    "weatherHigh": 85,
    "weatherLow": 68,
    "schoolOut": false,
    "obsCount": 523
  },
  "11-01": {
    "mmDd": "11-01",
    "avgWaitMin": 36.9,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 512
  },
  "11-02": {
    "mmDd": "11-02",
    "avgWaitMin": 35.1,
    "peakWaitMin": 90,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 533
  },
  "11-03": {
    "mmDd": "11-03",
    "avgWaitMin": 34.1,
    "peakWaitMin": 85,
    "crowdLevel": 4,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 536
  },
  "11-04": {
    "mmDd": "11-04",
    "avgWaitMin": 38.6,
    "peakWaitMin": 90,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 551
  },
  "11-05": {
    "mmDd": "11-05",
    "avgWaitMin": 20.3,
    "peakWaitMin": 90,
    "crowdLevel": 1,
    "crowdTier": "Low Crowd Lull",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 436
  },
  "11-06": {
    "mmDd": "11-06",
    "avgWaitMin": 47.5,
    "peakWaitMin": 158,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 531
  },
  "11-07": {
    "mmDd": "11-07",
    "avgWaitMin": 46.6,
    "peakWaitMin": 120,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 485
  },
  "11-08": {
    "mmDd": "11-08",
    "avgWaitMin": 44.4,
    "peakWaitMin": 125,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 519
  },
  "11-09": {
    "mmDd": "11-09",
    "avgWaitMin": 39.2,
    "peakWaitMin": 105,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 552
  },
  "11-10": {
    "mmDd": "11-10",
    "avgWaitMin": 36.7,
    "peakWaitMin": 95,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 552
  },
  "11-11": {
    "mmDd": "11-11",
    "avgWaitMin": 47.7,
    "peakWaitMin": 157,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 474
  },
  "11-12": {
    "mmDd": "11-12",
    "avgWaitMin": 47.2,
    "peakWaitMin": 135,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 489
  },
  "11-13": {
    "mmDd": "11-13",
    "avgWaitMin": 53.5,
    "peakWaitMin": 155,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 464
  },
  "11-14": {
    "mmDd": "11-14",
    "avgWaitMin": 48.5,
    "peakWaitMin": 135,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 477
  },
  "11-15": {
    "mmDd": "11-15",
    "avgWaitMin": 43.8,
    "peakWaitMin": 120,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 479
  },
  "11-16": {
    "mmDd": "11-16",
    "avgWaitMin": 38.7,
    "peakWaitMin": 100,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 459
  },
  "11-17": {
    "mmDd": "11-17",
    "avgWaitMin": 35.6,
    "peakWaitMin": 80,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 452
  },
  "11-18": {
    "mmDd": "11-18",
    "avgWaitMin": 36.1,
    "peakWaitMin": 100,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 456
  },
  "11-19": {
    "mmDd": "11-19",
    "avgWaitMin": 42.1,
    "peakWaitMin": 120,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "THANKSGIVING PEAK",
    "isHoliday": true,
    "weatherHigh": 75,
    "weatherLow": 56,
    "schoolOut": true,
    "obsCount": 437
  },
  "11-20": {
    "mmDd": "11-20",
    "avgWaitMin": 47.9,
    "peakWaitMin": 144,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "THANKSGIVING PEAK",
    "isHoliday": true,
    "weatherHigh": 75,
    "weatherLow": 56,
    "schoolOut": true,
    "obsCount": 285
  },
  "11-21": {
    "mmDd": "11-21",
    "avgWaitMin": 62.3,
    "peakWaitMin": 180,
    "crowdLevel": 10,
    "crowdTier": "Peak Crowd Surge",
    "season": "THANKSGIVING PEAK",
    "isHoliday": true,
    "weatherHigh": 75,
    "weatherLow": 56,
    "schoolOut": true,
    "obsCount": 458
  },
  "11-22": {
    "mmDd": "11-22",
    "avgWaitMin": 64.7,
    "peakWaitMin": 170,
    "crowdLevel": 10,
    "crowdTier": "Peak Crowd Surge",
    "season": "THANKSGIVING PEAK",
    "isHoliday": true,
    "weatherHigh": 75,
    "weatherLow": 56,
    "schoolOut": true,
    "obsCount": 445
  },
  "11-23": {
    "mmDd": "11-23",
    "avgWaitMin": 63.3,
    "peakWaitMin": 205,
    "crowdLevel": 10,
    "crowdTier": "Peak Crowd Surge",
    "season": "THANKSGIVING PEAK",
    "isHoliday": true,
    "weatherHigh": 75,
    "weatherLow": 56,
    "schoolOut": true,
    "obsCount": 490
  },
  "11-24": {
    "mmDd": "11-24",
    "avgWaitMin": 63.8,
    "peakWaitMin": 185,
    "crowdLevel": 10,
    "crowdTier": "Peak Crowd Surge",
    "season": "THANKSGIVING PEAK",
    "isHoliday": true,
    "weatherHigh": 75,
    "weatherLow": 56,
    "schoolOut": true,
    "obsCount": 483
  },
  "11-25": {
    "mmDd": "11-25",
    "avgWaitMin": 60.3,
    "peakWaitMin": 195,
    "crowdLevel": 10,
    "crowdTier": "Peak Crowd Surge",
    "season": "THANKSGIVING PEAK",
    "isHoliday": true,
    "weatherHigh": 75,
    "weatherLow": 56,
    "schoolOut": true,
    "obsCount": 470
  },
  "11-26": {
    "mmDd": "11-26",
    "avgWaitMin": 60.6,
    "peakWaitMin": 170,
    "crowdLevel": 10,
    "crowdTier": "Peak Crowd Surge",
    "season": "THANKSGIVING PEAK",
    "isHoliday": true,
    "weatherHigh": 75,
    "weatherLow": 56,
    "schoolOut": true,
    "obsCount": 456
  },
  "11-27": {
    "mmDd": "11-27",
    "avgWaitMin": 54.8,
    "peakWaitMin": 145,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "THANKSGIVING PEAK",
    "isHoliday": true,
    "weatherHigh": 75,
    "weatherLow": 56,
    "schoolOut": true,
    "obsCount": 449
  },
  "11-28": {
    "mmDd": "11-28",
    "avgWaitMin": 46.9,
    "peakWaitMin": 140,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "THANKSGIVING PEAK",
    "isHoliday": true,
    "weatherHigh": 75,
    "weatherLow": 56,
    "schoolOut": true,
    "obsCount": 481
  },
  "11-29": {
    "mmDd": "11-29",
    "avgWaitMin": 44.4,
    "peakWaitMin": 122,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 469
  },
  "11-30": {
    "mmDd": "11-30",
    "avgWaitMin": 42.7,
    "peakWaitMin": 125,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 456
  },
  "12-01": {
    "mmDd": "12-01",
    "avgWaitMin": 36.5,
    "peakWaitMin": 105,
    "crowdLevel": 5,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 472
  },
  "12-02": {
    "mmDd": "12-02",
    "avgWaitMin": 40.6,
    "peakWaitMin": 100,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 471
  },
  "12-03": {
    "mmDd": "12-03",
    "avgWaitMin": 47.1,
    "peakWaitMin": 195,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 467
  },
  "12-04": {
    "mmDd": "12-04",
    "avgWaitMin": 49.7,
    "peakWaitMin": 150,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 470
  },
  "12-05": {
    "mmDd": "12-05",
    "avgWaitMin": 49.7,
    "peakWaitMin": 135,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 462
  },
  "12-06": {
    "mmDd": "12-06",
    "avgWaitMin": 46.4,
    "peakWaitMin": 105,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 473
  },
  "12-07": {
    "mmDd": "12-07",
    "avgWaitMin": 45.8,
    "peakWaitMin": 105,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 450
  },
  "12-08": {
    "mmDd": "12-08",
    "avgWaitMin": 43.1,
    "peakWaitMin": 109,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 454
  },
  "12-09": {
    "mmDd": "12-09",
    "avgWaitMin": 47.0,
    "peakWaitMin": 125,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 455
  },
  "12-10": {
    "mmDd": "12-10",
    "avgWaitMin": 44.6,
    "peakWaitMin": 140,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 471
  },
  "12-11": {
    "mmDd": "12-11",
    "avgWaitMin": 47.8,
    "peakWaitMin": 140,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 477
  },
  "12-12": {
    "mmDd": "12-12",
    "avgWaitMin": 49.1,
    "peakWaitMin": 180,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 480
  },
  "12-13": {
    "mmDd": "12-13",
    "avgWaitMin": 47.2,
    "peakWaitMin": 180,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 457
  },
  "12-14": {
    "mmDd": "12-14",
    "avgWaitMin": 46.2,
    "peakWaitMin": 125,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 480
  },
  "12-15": {
    "mmDd": "12-15",
    "avgWaitMin": 44.1,
    "peakWaitMin": 120,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 474
  },
  "12-16": {
    "mmDd": "12-16",
    "avgWaitMin": 46.9,
    "peakWaitMin": 120,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 473
  },
  "12-17": {
    "mmDd": "12-17",
    "avgWaitMin": 45.5,
    "peakWaitMin": 155,
    "crowdLevel": 7,
    "crowdTier": "Peak Crowd Surge",
    "season": "REGULAR SEASON",
    "isHoliday": false,
    "weatherHigh": 78,
    "weatherLow": 60,
    "schoolOut": false,
    "obsCount": 455
  },
  "12-18": {
    "mmDd": "12-18",
    "avgWaitMin": 58.5,
    "peakWaitMin": 180,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 455
  },
  "12-19": {
    "mmDd": "12-19",
    "avgWaitMin": 57.9,
    "peakWaitMin": 190,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 473
  },
  "12-20": {
    "mmDd": "12-20",
    "avgWaitMin": 64.7,
    "peakWaitMin": 233,
    "crowdLevel": 10,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 485
  },
  "12-21": {
    "mmDd": "12-21",
    "avgWaitMin": 52.1,
    "peakWaitMin": 205,
    "crowdLevel": 8,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 464
  },
  "12-22": {
    "mmDd": "12-22",
    "avgWaitMin": 64.5,
    "peakWaitMin": 225,
    "crowdLevel": 10,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 460
  },
  "12-23": {
    "mmDd": "12-23",
    "avgWaitMin": 59.3,
    "peakWaitMin": 195,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 485
  },
  "12-24": {
    "mmDd": "12-24",
    "avgWaitMin": 56.5,
    "peakWaitMin": 180,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 475
  },
  "12-25": {
    "mmDd": "12-25",
    "avgWaitMin": 54.2,
    "peakWaitMin": 192,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 470
  },
  "12-26": {
    "mmDd": "12-26",
    "avgWaitMin": 56.5,
    "peakWaitMin": 205,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 475
  },
  "12-27": {
    "mmDd": "12-27",
    "avgWaitMin": 59.1,
    "peakWaitMin": 180,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 486
  },
  "12-28": {
    "mmDd": "12-28",
    "avgWaitMin": 59.7,
    "peakWaitMin": 180,
    "crowdLevel": 9,
    "crowdTier": "Peak Crowd Surge",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 489
  },
  "12-29": {
    "mmDd": "12-29",
    "avgWaitMin": 40.2,
    "peakWaitMin": 110,
    "crowdLevel": 6,
    "crowdTier": "Moderate Crowd",
    "season": "CHRISTMAS PEAK",
    "isHoliday": true,
    "weatherHigh": 72,
    "weatherLow": 52,
    "schoolOut": true,
    "obsCount": 78
  }
};

var getCrowdForDate = CD.getCrowdForDate = global.getCrowdForDate = function(dateObj) {
  const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
  const dd = String(dateObj.getDate()).padStart(2, '0');
  const key = `${mm}-${dd}`;
  return CALENDAR_CROWDS[key] || {
    mmDd: key,
    avgWaitMin: 42.0,
    peakWaitMin: 120,
    crowdLevel: 5,
    crowdTier: "Moderate Crowd",
    season: "REGULAR SEASON",
    isHoliday: false,
    weatherHigh: 82,
    weatherLow: 65,
    schoolOut: false,
    obsCount: 400
  };
}

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/wait-times-data.js
  // ==========================================

  (function() {
// Clean Disney World Wait Times Data Engine
var PARKS_METADATA = CD.PARKS_METADATA = global.PARKS_METADATA = {
  "6": {
    "id": 6,
    "name": "Magic Kingdom",
    "icon": "\ud83c\udff0",
    "slug": "magic-kingdom",
    "openingTime": "9:00 AM",
    "closingTime": "10:00 PM",
    "defaultPrayerNook": "Liberty Square Quiet Courtyard"
  },
  "5": {
    "id": 5,
    "name": "EPCOT",
    "icon": "\ud83c\udf10",
    "slug": "epcot",
    "openingTime": "9:00 AM",
    "closingTime": "9:00 PM",
    "defaultPrayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  "7": {
    "id": 7,
    "name": "Disney's Hollywood Studios",
    "icon": "\ud83c\udfac",
    "slug": "hollywood-studios",
    "openingTime": "8:30 AM",
    "closingTime": "9:00 PM",
    "defaultPrayerNook": "Echo Lake Shaded Veranda"
  },
  "8": {
    "id": 8,
    "name": "Disney's Animal Kingdom",
    "icon": "\ud83c\udf33",
    "slug": "animal-kingdom",
    "openingTime": "8:00 AM",
    "closingTime": "7:00 PM",
    "defaultPrayerNook": "Tree of Life Serene Pathways"
  },
  "16": {
    "id": 16,
    "name": "Disneyland Park",
    "icon": "\ud83c\udff0",
    "slug": "disneyland",
    "openingTime": "8:00 AM",
    "closingTime": "11:00 PM",
    "defaultPrayerNook": "Snow White Grotto & Wishing Well"
  },
  "17": {
    "id": 17,
    "name": "Disney California Adventure",
    "icon": "\ud83c\udfa1",
    "slug": "disney-california-adventure",
    "openingTime": "8:00 AM",
    "closingTime": "10:00 PM",
    "defaultPrayerNook": "San Fransokyo Waterfront Pier"
  }
};

var HOURLY_CROWD_CURVES = CD.HOURLY_CROWD_CURVES = global.HOURLY_CROWD_CURVES = {
  "16": {
    "8": 25.4, "9": 42.3, "10": 59.4, "11": 72.1, "12": 80.4, "13": 84.8,
    "14": 82.9, "15": 77.9, "16": 76.3, "17": 42.0, "18": 67.8, "19": 63.3,
    "20": 55.1, "21": 46.5, "22": 34.0, "23": 21.5
  },
  "17": {
    "8": 45.2, "9": 70.5, "10": 85.9, "11": 96.0, "12": 101.1, "13": 98.7,
    "14": 96.1, "15": 93.3, "16": 88.7, "17": 59.3, "18": 78.8, "19": 71.0,
    "20": 55.9, "21": 40.5, "22": 30.0, "23": 20.0
  },
  "6": {
    "8": 25.9,
    "9": 32.0,
    "10": 37.8,
    "11": 45.6,
    "12": 47.0,
    "13": 43.6,
    "14": 45.6,
    "15": 46.9,
    "16": 44.3,
    "17": 44.6,
    "18": 43.1,
    "19": 38.8,
    "20": 32.6,
    "21": 31.2,
    "22": 28.1
  },
  "5": {
    "8": 10.1,
    "9": 9.7,
    "10": 17.5,
    "11": 27.5,
    "12": 31.3,
    "13": 29.8,
    "14": 24.6,
    "15": 23.1,
    "16": 22.7,
    "17": 21.9,
    "18": 21.3,
    "19": 19.9,
    "20": 18.8,
    "21": 17.4,
    "22": 16.1
  },
  "7": {
    "8": 21.6,
    "9": 30.9,
    "10": 41.6,
    "11": 49.7,
    "12": 48.5,
    "13": 45.0,
    "14": 43.5,
    "15": 42.3,
    "16": 38.5,
    "17": 35.5,
    "18": 33.1,
    "19": 29.1,
    "20": 27.5,
    "21": 30.2,
    "22": 28.0
  },
  "8": {
    "8": 26.2,
    "9": 33.7,
    "10": 42.0,
    "11": 46.3,
    "12": 46.3,
    "13": 44.6,
    "14": 42.3,
    "15": 40.2,
    "16": 37.8,
    "17": 34.3,
    "18": 34.2,
    "19": 40.6,
    "20": 47.1,
    "21": 21.4
  }
};

var ALL_ATTRACTIONS = CD.ALL_ATTRACTIONS = global.ALL_ATTRACTIONS = [
  {
    "id": 4439,
    "name": "Avatar Flight of Passage",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Pandora",
    "avgWait": 95,
    "maxWait": 210,
    "tier": "Headliner",
    "rosaryRec": "Full 5-Decade Rosary",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 6369,
    "name": "Star Wars: Rise of the Resistance",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Star Wars: Galaxy's Edge",
    "avgWait": 85,
    "maxWait": 180,
    "tier": "Headliner",
    "rosaryRec": "Full 5-Decade Rosary",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 14531,
    "name": "Star Wars: Rise of the Resistance Single Rider",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Star Wars: Galaxy's Edge",
    "avgWait": 85,
    "maxWait": 180,
    "tier": "Headliner",
    "rosaryRec": "Full 5-Decade Rosary",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 129,
    "name": "Seven Dwarfs Mine Train",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 74,
    "maxWait": 180,
    "tier": "Headliner",
    "rosaryRec": "Full 5-Decade Rosary",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 5476,
    "name": "Slinky Dog Dash",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Toy Story Land",
    "avgWait": 69,
    "maxWait": 140,
    "tier": "Headliner",
    "rosaryRec": "Full 5-Decade Rosary",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 10916,
    "name": "Guardians of the Galaxy: Cosmic Rewind",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Discovery",
    "avgWait": 68,
    "maxWait": 130,
    "tier": "Headliner",
    "rosaryRec": "Full 5-Decade Rosary",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 10914,
    "name": "Remy's Ratatouille Adventure",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Showcase",
    "avgWait": 65,
    "maxWait": 120,
    "tier": "Headliner",
    "rosaryRec": "Full 5-Decade Rosary",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 10915,
    "name": "Remy's Ratatouille Adventure Single Rider",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Showcase",
    "avgWait": 65,
    "maxWait": 120,
    "tier": "Headliner",
    "rosaryRec": "Full 5-Decade Rosary",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 11527,
    "name": "TRON Lightcycle / Run",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Tomorrowland",
    "avgWait": 65,
    "maxWait": 120,
    "tier": "Headliner",
    "rosaryRec": "Full 5-Decade Rosary",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 2679,
    "name": "Frozen Ever After",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Showcase",
    "avgWait": 60,
    "maxWait": 110,
    "tier": "Headliner",
    "rosaryRec": "Full 5-Decade Rosary",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 136,
    "name": "Peter Pan's Flight",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 58,
    "maxWait": 115,
    "tier": "Headliner",
    "rosaryRec": "Full 5-Decade Rosary",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 4438,
    "name": "Na'vi River Journey",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Pandora",
    "avgWait": 58,
    "maxWait": 115,
    "tier": "Headliner",
    "rosaryRec": "3 - 4 Decades",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 123,
    "name": "The Twilight Zone Tower of Terror",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Sunset Boulevard",
    "avgWait": 55,
    "maxWait": 120,
    "tier": "Headliner",
    "rosaryRec": "3 - 4 Decades",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 160,
    "name": "Test Track",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Discovery",
    "avgWait": 54,
    "maxWait": 110,
    "tier": "Headliner",
    "rosaryRec": "3 - 4 Decades",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 10900,
    "name": "Test Track Presented by Chevrolet Single Rider",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Discovery",
    "avgWait": 54,
    "maxWait": 110,
    "tier": "Headliner",
    "rosaryRec": "3 - 4 Decades",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 16343,
    "name": "Rock 'n' Roller Coaster Starring Aerosmith Single Rider",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Sunset Boulevard",
    "avgWait": 54,
    "maxWait": 115,
    "tier": "Headliner",
    "rosaryRec": "3 - 4 Decades",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 16342,
    "name": "Rock 'n' Roller Coaster Starring The Muppets",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Sunset Boulevard",
    "avgWait": 54,
    "maxWait": 115,
    "tier": "Headliner",
    "rosaryRec": "3 - 4 Decades",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 6368,
    "name": "Millennium Falcon: Smugglers Run",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Star Wars: Galaxy's Edge",
    "avgWait": 52,
    "maxWait": 110,
    "tier": "Headliner",
    "rosaryRec": "3 - 4 Decades",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 10902,
    "name": "Millennium Falcon: Smugglers Run Single Rider",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Star Wars: Galaxy's Edge",
    "avgWait": 52,
    "maxWait": 110,
    "tier": "Headliner",
    "rosaryRec": "3 - 4 Decades",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 117,
    "name": "Toy Story Mania!",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Toy Story Land",
    "avgWait": 52,
    "maxWait": 105,
    "tier": "Headliner",
    "rosaryRec": "3 - 4 Decades",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 6361,
    "name": "Mickey & Minnie's Runaway Railway",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Hollywood Boulevard",
    "avgWait": 50,
    "maxWait": 100,
    "tier": "Headliner",
    "rosaryRec": "3 - 4 Decades",
    "bestTime": "Rope Drop (First 60 mins) or Last 90 mins",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 138,
    "name": "Space Mountain",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Tomorrowland",
    "avgWait": 48,
    "maxWait": 120,
    "tier": "Popular",
    "rosaryRec": "3 - 4 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 134,
    "name": "Jungle Cruise",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Adventureland",
    "avgWait": 45,
    "maxWait": 100,
    "tier": "Popular",
    "rosaryRec": "3 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 130,
    "name": "Big Thunder Mountain Railroad",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Frontierland",
    "avgWait": 42,
    "maxWait": 100,
    "tier": "Popular",
    "rosaryRec": "2 - 3 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 113,
    "name": "Kilimanjaro Safaris",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Africa",
    "avgWait": 42,
    "maxWait": 95,
    "tier": "Popular",
    "rosaryRec": "2 - 3 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 140,
    "name": "Haunted Mansion",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Liberty Square",
    "avgWait": 38,
    "maxWait": 90,
    "tier": "Popular",
    "rosaryRec": "2 - 3 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 110,
    "name": "Expedition Everest - Legend of the Forbidden Mountain",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Asia",
    "avgWait": 36,
    "maxWait": 85,
    "tier": "Popular",
    "rosaryRec": "2 - 3 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 14533,
    "name": "Expedition Everest - Legend of the Forbidden Mountain Single Rider",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Asia",
    "avgWait": 36,
    "maxWait": 85,
    "tier": "Popular",
    "rosaryRec": "2 - 3 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 137,
    "name": "Pirates of the Caribbean",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Adventureland",
    "avgWait": 35,
    "maxWait": 80,
    "tier": "Popular",
    "rosaryRec": "2 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 5477,
    "name": "Alien Swirling Saucers",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Toy Story Land",
    "avgWait": 32,
    "maxWait": 65,
    "tier": "Popular",
    "rosaryRec": "2 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 112,
    "name": "Kali River Rapids",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Asia",
    "avgWait": 32,
    "maxWait": 75,
    "tier": "Popular",
    "rosaryRec": "2 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 131,
    "name": "Buzz Lightyear's Space Ranger Spin",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Tomorrowland",
    "avgWait": 30,
    "maxWait": 70,
    "tier": "Popular",
    "rosaryRec": "2 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 158,
    "name": "Mission: SPACE",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Discovery",
    "avgWait": 28,
    "maxWait": 65,
    "tier": "Popular",
    "rosaryRec": "2 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 142,
    "name": "The Many Adventures of Winnie the Pooh",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 28,
    "maxWait": 65,
    "tier": "Popular",
    "rosaryRec": "2 Decades",
    "bestTime": "Before 11:00 AM or during evening parades",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 159,
    "name": "Spaceship Earth",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Celebration",
    "avgWait": 25,
    "maxWait": 60,
    "tier": "Family Walk-On",
    "rosaryRec": "2 Decades",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 7323,
    "name": "Awesome Planet",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Nature",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 829,
    "name": "Canada Far and Wide in Circle-Vision 360",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Showcase",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 2495,
    "name": "Disney and Pixar Short Film Festival",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Celebration",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 12387,
    "name": "Journey of Water, Inspired by Moana",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Nature",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 6701,
    "name": "Meet Anna and Elsa at Royal Sommerhus",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Showcase",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 13627,
    "name": "Meet Beloved Disney Pals at Mickey & Friends",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Celebration",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 13782,
    "name": "SeaBase Aquarium",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Nature",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 16467,
    "name": "Soarin' Across America",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Nature",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 152,
    "name": "Turtle Talk With Crush",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Nature",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 133,
    "name": "it's a small world",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 50,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 1184,
    "name": "A Pirate's Adventure ~ Treasures of the Seven Seas",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Adventureland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 248,
    "name": "Astro Orbiter",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Tomorrowland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 13764,
    "name": "Casey Jr. Splash 'N' Soak Station",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 13763,
    "name": "Cinderella Castle",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 1214,
    "name": "Country Bear Musical Jamboree",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Frontierland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 128,
    "name": "Enchanted Tales with Belle",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 1188,
    "name": "Main Street Vehicles",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Main Street, U.S.A.",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 147,
    "name": "Meet Ariel at Her Grotto",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 6700,
    "name": "Meet Cinderella and a Visiting Princess at Princess Fairytale Hall",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 144,
    "name": "Meet Daring Disney Pals as Circus Stars at Pete's Silly Sideshow",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 145,
    "name": "Meet Dashing Disney Pals as Circus Stars at Pete's Silly Sideshow",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 17526,
    "name": "Meet Festive Disney Pals at Mickey's Not-So-Scary Halloween Party",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Park Area",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 14928,
    "name": "Meet Jack Skellington and Sally at Mickey's Not-So-Scary Halloween Party",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Other",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 14927,
    "name": "Meet Mickey Mouse and Minnie Mouse at Mickey's Not-So-Scary Halloween Party",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Other",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 146,
    "name": "Meet Mickey at Town Square Theater",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Main Street, U.S.A.",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 6699,
    "name": "Meet Princess Tiana and a Visiting Princess at Princess Fairytale Hall",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 171,
    "name": "Mickey's PhilharMagic",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 161,
    "name": "Prince Charming Regal Carrousel",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 355,
    "name": "Swiss Family Treehouse",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Adventureland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 356,
    "name": "The Hall of Presidents",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Liberty Square",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 13630,
    "name": "Tiana's Bayou Adventure",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Frontierland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 143,
    "name": "Tomorrowland Speedway",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Tomorrowland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 1190,
    "name": "Tomorrowland Transit Authority PeopleMover",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Tomorrowland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 1181,
    "name": "Walt Disney World Railroad - Fantasyland",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 1189,
    "name": "Walt Disney World Railroad - Main Street, U.S.A.",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Main Street, U.S.A.",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 457,
    "name": "Walt Disney's Carousel of Progress",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Tomorrowland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 334,
    "name": "Walt Disney's Enchanted Tiki Room",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Adventureland",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 1176,
    "name": "Beauty and the Beast \u2013 Live on Stage",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Sunset Boulevard",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 16641,
    "name": "Disney Jr. Mickey Mouse Clubhouse Live!",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Animation Courtyard",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 1174,
    "name": "For the First Time in Forever: A Frozen Sing-Along Celebration",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Echo Lake",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 6702,
    "name": "Indiana Jones Epic Stunt Spectacular!",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Echo Lake",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 12430,
    "name": "Meet Ariel at Walt Disney Presents",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Animation Courtyard",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 6704,
    "name": "Meet Disney Stars at Red Carpet Dreams",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Commissary Lane",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 12425,
    "name": "Meet Edna Mode at the Edna Mode Experience",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Pixar Plaza",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 6703,
    "name": "Meet Olaf at Celebrity Spotlight",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Echo Lake",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 120,
    "name": "Star Tours \u2013 The Adventures Continue",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Echo Lake",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 14859,
    "name": "The Little Mermaid \u2013 A Musical Adventure",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Animation Courtyard",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 7333,
    "name": "Vacation Fun - An Original Animated Short with Mickey & Minnie",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Echo Lake",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 5145,
    "name": "Walt Disney Presents",
    "parkId": 7,
    "parkName": "Disney's Hollywood Studios",
    "parkIcon": "\ud83c\udfac",
    "land": "Animation Courtyard",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Echo Lake Shaded Veranda"
  },
  {
    "id": 13806,
    "name": "Animal Care at Conservation Station",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Conservation Station",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 16545,
    "name": "Bluey's Wild World at Conservation Station",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Conservation Station",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 13811,
    "name": "Discovery Island Trails",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Discovery Island",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 10921,
    "name": "Feathered Friends in Flight!",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Asia",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 657,
    "name": "Festival of the Lion King",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Africa",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 10920,
    "name": "Finding Nemo: The Big Blue... and Beyond!",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Dinoland U.S.A",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 651,
    "name": "Gorilla Falls Exploration Trail",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Africa",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 116,
    "name": "Meet Favorite Disney Pals at Adventurers Outpost",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Discovery Island",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 12451,
    "name": "Meet Moana at Character Landing",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Discovery Island",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 13812,
    "name": "The Oasis Exhibits",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "The Oasis",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 13751,
    "name": "Tree of Life",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Discovery Island",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 13808,
    "name": "Wilderness Explorers",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "The Oasis",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 655,
    "name": "Wildlife Express Train",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Africa",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 14943,
    "name": "Zootopia: Better Zoogether!",
    "parkId": 8,
    "parkName": "Disney's Animal Kingdom",
    "parkIcon": "\ud83c\udf33",
    "land": "Discovery Island",
    "avgWait": 20,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Tree of Life Serene Pathways"
  },
  {
    "id": 132,
    "name": "Dumbo the Flying Elephant",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 18,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 127,
    "name": "Under the Sea - Journey of The Little Mermaid",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 18,
    "maxWait": 45,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 126,
    "name": "The Barnstormer",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 16,
    "maxWait": 40,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 125,
    "name": "Monsters, Inc. Laugh Floor",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Tomorrowland",
    "avgWait": 15,
    "maxWait": 35,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 141,
    "name": "The Magic Carpets of Aladdin",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Adventureland",
    "avgWait": 15,
    "maxWait": 35,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 156,
    "name": "Living with the Land",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Nature",
    "avgWait": 14,
    "maxWait": 35,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 153,
    "name": "The Seas with Nemo & Friends",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Nature",
    "avgWait": 12,
    "maxWait": 30,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 135,
    "name": "Mad Tea Party",
    "parkId": 6,
    "parkName": "Magic Kingdom",
    "parkIcon": "\ud83c\udff0",
    "land": "Fantasyland",
    "avgWait": 12,
    "maxWait": 30,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "Liberty Square Quiet Courtyard"
  },
  {
    "id": 466,
    "name": "Gran Fiesta Tour Starring The Three Caballeros",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Showcase",
    "avgWait": 10,
    "maxWait": 25,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  },
  {
    "id": 155,
    "name": "Journey Into Imagination With Figment",
    "parkId": 5,
    "parkName": "EPCOT",
    "parkIcon": "\ud83c\udf10",
    "land": "World Celebration",
    "avgWait": 10,
    "maxWait": 25,
    "tier": "Family Walk-On",
    "rosaryRec": "1 Decade",
    "bestTime": "Anytime (consistently low wait)",
    "prayerNook": "St. George Fountain (UK) or Japan Waterfall Garden"
  }
];

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/ride-tiers.js
  // ==========================================

  (function() {
// Catholic Disney: Attraction Tier Dictionary & Capacity Matrix
// Based on the A-through-E Ticket Classification & TouringPlans Historical Data

var RIDE_TIERS = CD.RIDE_TIERS = global.RIDE_TIERS = {
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
  115: { id: 115, name: "DINOSAUR", parkId: 8, land: "DinoLand U.S.A.", tier: "C", ratio: 0.35, pph: 2200, baseWait: 28, nearbyNook: "Cretaceous Trail Shaded Path" },

  // DISNEYLAND PARK (Park ID: 16)
  284: { id: 284, name: "Space Mountain", parkId: 16, land: "Tomorrowland", tier: "E", ratio: 0.95, pph: 1600, baseWait: 65, nearbyNook: "Tomorrowland Elevated Terrace" },
  279: { id: 279, name: "Matterhorn Bobsleds", parkId: 16, land: "Fantasyland", tier: "E", ratio: 0.90, pph: 1500, baseWait: 60, nearbyNook: "Snow White Grotto & Alpine Lake" },
  326: { id: 326, name: "Indiana Jones Adventure", parkId: 16, land: "Adventureland", tier: "E", ratio: 0.95, pph: 1800, baseWait: 65, nearbyNook: "Bengal BBQ Shaded Bamboo Alcove" },
  323: { id: 323, name: "Big Thunder Mountain Railroad", parkId: 16, land: "Frontierland", tier: "E", ratio: 0.85, pph: 1800, baseWait: 50, nearbyNook: "Fowler's Harbor Waterfront Benches" },
  6340: { id: 6340, name: "Star Wars: Rise of the Resistance", parkId: 16, land: "Star Wars: Galaxy's Edge", tier: "E", ratio: 1.00, pph: 1700, baseWait: 85, nearbyNook: "Black Spire Ancient Ruins Garden" },
  6339: { id: 6339, name: "Millennium Falcon: Smugglers Run", parkId: 16, land: "Star Wars: Galaxy's Edge", tier: "D", ratio: 0.70, pph: 1800, baseWait: 55, nearbyNook: "Resistance Forest Benches" },
  281: { id: 281, name: "Peter Pan's Flight", parkId: 16, land: "Fantasyland", tier: "E-ANOMALY", ratio: 0.80, pph: 800, baseWait: 55, nearbyNook: "Snow White Grotto & Wishing Well" },
  325: { id: 325, name: "Haunted Mansion Holiday", parkId: 16, land: "New Orleans Square", tier: "D", ratio: 0.65, pph: 2600, baseWait: 45, nearbyNook: "Court of Angels Courtyard" },
  289: { id: 289, name: "Pirates of the Caribbean", parkId: 16, land: "New Orleans Square", tier: "D", ratio: 0.55, pph: 3200, baseWait: 38, nearbyNook: "Royal Street Shaded Courtyard" },
  296: { id: 296, name: "Jungle Cruise", parkId: 16, land: "Adventureland", tier: "D", ratio: 0.60, pph: 1800, baseWait: 42, nearbyNook: "Tropical Hideaway River Veranda" },
  11526: { id: 11526, name: "Mickey & Minnie's Runaway Railway", parkId: 16, land: "Mickey's Toontown", tier: "D", ratio: 0.65, pph: 1800, baseWait: 50, nearbyNook: "Toontown CenTOONial Park Green" },
  307: { id: 307, name: "it's a small world", parkId: 16, land: "Fantasyland", tier: "C", ratio: 0.30, pph: 3000, baseWait: 20, nearbyNook: "Small World Promenade Garden Benches" },
  285: { id: 285, name: "Alice in Wonderland", parkId: 16, land: "Fantasyland", tier: "C", ratio: 0.45, pph: 1200, baseWait: 35, nearbyNook: "Mad Hatter Trellis Pathway" },
  332: { id: 332, name: "Roger Rabbit's Car Toon Spin", parkId: 16, land: "Mickey's Toontown", tier: "C", ratio: 0.40, pph: 1400, baseWait: 30, nearbyNook: "Toontown Quiet Alley Benches" },
  273: { id: 273, name: "Buzz Lightyear Astro Blasters", parkId: 16, land: "Tomorrowland", tier: "C", ratio: 0.35, pph: 2000, baseWait: 28, nearbyNook: "Tomorrowland Central Terrace" },
  275: { id: 275, name: "Dumbo the Flying Elephant", parkId: 16, land: "Fantasyland", tier: "B", ratio: 0.25, pph: 1000, baseWait: 22, nearbyNook: "Fantasyland Courtyard Benches" },
  283: { id: 283, name: "Snow White's Enchanted Wish", parkId: 16, land: "Fantasyland", tier: "B", ratio: 0.25, pph: 1200, baseWait: 20, nearbyNook: "Castle Eastern Slope Benches" },
  282: { id: 282, name: "Pinocchio's Daring Journey", parkId: 16, land: "Fantasyland", tier: "B", ratio: 0.20, pph: 1200, baseWait: 15, nearbyNook: "Village Haus Rear Benches" },
  280: { id: 280, name: "Mr. Toad's Wild Ride", parkId: 16, land: "Fantasyland", tier: "B", ratio: 0.25, pph: 1200, baseWait: 20, nearbyNook: "King Arthur Carrousel Courtyard" },
  277: { id: 277, name: "King Arthur Carrousel", parkId: 16, land: "Fantasyland", tier: "A", ratio: 0.12, pph: 1800, baseWait: 10, nearbyNook: "Fantasyland Castle Archway" },
  674: { id: 674, name: "Disneyland Railroad", parkId: 16, land: "Main Street U.S.A", tier: "A", ratio: 0.15, pph: 2400, baseWait: 10, nearbyNook: "New Orleans Square Train Depot Garden" },

  // DISNEY CALIFORNIA ADVENTURE (Park ID: 17)
  295: { id: 295, name: "Radiator Springs Racers", parkId: 17, land: "Cars Land", tier: "E", ratio: 1.00, pph: 1600, baseWait: 85, nearbyNook: "Ornament Valley Scenic Overlook" },
  329: { id: 329, name: "Guardians of the Galaxy - Mission: BREAKOUT!", parkId: 17, land: "Avengers Campus", tier: "E", ratio: 0.90, pph: 1800, baseWait: 70, nearbyNook: "Avengers Campus Shaded Terrace" },
  17129: { id: 17129, name: "Soarin' Across America", parkId: 17, land: "Grizzly Peak", tier: "E", ratio: 0.80, pph: 2200, baseWait: 60, nearbyNook: "Grizzly Peak Airfield Hangar Benches" },
  322: { id: 322, name: "Incredicoaster", parkId: 17, land: "Pixar Pier", tier: "E", ratio: 0.75, pph: 1800, baseWait: 55, nearbyNook: "Pixar Pier Boardwalk Bay Overlook" },
  8843: { id: 8843, name: "WEB SLINGERS: A Spider-Man Adventure", parkId: 17, land: "Avengers Campus", tier: "D", ratio: 0.70, pph: 1700, baseWait: 55, nearbyNook: "Ancient Sanctum Shaded Benches" },
  302: { id: 302, name: "Grizzly River Run", parkId: 17, land: "Grizzly Peak", tier: "D", ratio: 0.60, pph: 2000, baseWait: 45, nearbyNook: "Redwood Creek Trail Shaded Hermitage" },
  313: { id: 313, name: "Toy Story Midway Mania!", parkId: 17, land: "Pixar Pier", tier: "D", ratio: 0.65, pph: 2000, baseWait: 50, nearbyNook: "Paradise Gardens Pergola" },
  291: { id: 291, name: "Monsters, Inc. Mike & Sulley to the Rescue!", parkId: 17, land: "Hollywood Land", tier: "C", ratio: 0.35, pph: 1600, baseWait: 25, nearbyNook: "Hollywood Backlot Quiet Plaza" },
  316: { id: 316, name: "The Little Mermaid - Ariel's Undersea Adventure", parkId: 17, land: "Paradise Gardens Park", tier: "C", ratio: 0.20, pph: 2400, baseWait: 15, nearbyNook: "Palace Courtyard Waterfront Seating" },
  319: { id: 319, name: "Goofy's Sky School", parkId: 17, land: "Paradise Gardens Park", tier: "C", ratio: 0.35, pph: 1000, baseWait: 28, nearbyNook: "Paradise Gardens Gazebo" },
  311: { id: 311, name: "Pixar Pal-A-Round - Swinging", parkId: 17, land: "Pixar Pier", tier: "C", ratio: 0.40, pph: 1200, baseWait: 30, nearbyNook: "Pier Promenade Overlook" },
  301: { id: 301, name: "Silly Symphony Swings", parkId: 17, land: "Paradise Gardens Park", tier: "B", ratio: 0.20, pph: 1200, baseWait: 15, nearbyNook: "Lakeside Boardwalk Benches" },
  298: { id: 298, name: "Golden Zephyr", parkId: 17, land: "Paradise Gardens Park", tier: "B", ratio: 0.18, pph: 1000, baseWait: 12, nearbyNook: "Paradise Bay Benches" },
  321: { id: 321, name: "Animation Academy", parkId: 17, land: "Hollywood Land", tier: "A", ratio: 0.12, pph: 2000, baseWait: 10, nearbyNook: "Sorcerer's Workshop Quiet Alcove" }
};

// Mass Schedule Presets with Travel & Transit Buffers
var SUNDAY_MASS_PRESETS = CD.SUNDAY_MASS_PRESETS = global.SUNDAY_MASS_PRESETS = [
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
var CROWD_MULTIPLIERS = CD.CROWD_MULTIPLIERS = global.CROWD_MULTIPLIERS = {
  low: { id: "low", label: "Low Season (Level 2-4 • Sept, Jan, Early Feb)", factor: 0.70, isHoliday: false },
  moderate: { id: "moderate", label: "Moderate Regular Day (Level 5-7 • Spring/Fall Weekdays)", factor: 1.00, isHoliday: false },
  peak: { id: "peak", label: "Peak Holiday / Holy Day (Level 8-10 • Easter, Christmas, Spring Break)", factor: 1.35, isHoliday: true }
};


var DISNEYLAND_SUNDAY_MASS_PRESETS = CD.DISNEYLAND_SUNDAY_MASS_PRESETS = global.DISNEYLAND_SUNDAY_MASS_PRESETS = [
  {
    id: "boniface-630",
    name: "Saint Boniface (Anaheim) - 6:30 AM (Early Rope Drop)",
    parish: "Saint Boniface Catholic Church (Harbor Blvd)",
    massTime: "6:30 AM",
    massHour: 6.5,
    massDurationMin: 50,
    transitBufferMin: 25, // 5 min drive / ART to Disneyland main gate
    gateArrivalHour: 7.75, // 7:45 AM (Perfect for 8:00 AM rope drop!)
    gateArrivalFormatted: "7:45 AM (Full Rope Drop)",
    distanceMiles: 1.5
  },
  {
    id: "boniface-800",
    name: "Saint Boniface (Anaheim) - 8:00 AM",
    parish: "Saint Boniface Catholic Church",
    massTime: "8:00 AM",
    massHour: 8.0,
    massDurationMin: 55,
    transitBufferMin: 30,
    gateArrivalHour: 9.42, // ~9:25 AM
    gateArrivalFormatted: "9:25 AM",
    distanceMiles: 1.5
  },
  {
    id: "christ-cathedral-815",
    name: "Christ Cathedral (Garden Grove) - 8:15 AM",
    parish: "Christ Cathedral & Shrine of Our Lady of La Vang",
    massTime: "8:15 AM",
    massHour: 8.25,
    massDurationMin: 60,
    transitBufferMin: 35,
    gateArrivalHour: 9.83, // ~9:50 AM
    gateArrivalFormatted: "9:50 AM",
    distanceMiles: 3.5
  },
  {
    id: "st-john-tlm-700",
    name: "Saint John the Baptist (Costa Mesa TLM) - 7:00 AM Low Mass",
    parish: "Norbertine Fathers of Saint Michael's Abbey",
    massTime: "7:00 AM (TLM)",
    massHour: 7.0,
    massDurationMin: 50,
    transitBufferMin: 35,
    gateArrivalHour: 8.42, // ~8:25 AM
    gateArrivalFormatted: "8:25 AM",
    distanceMiles: 11.5
  },
  {
    id: "annunciation-byzantine-1000",
    name: "Annunciation Byzantine (Anaheim) - 10:00 AM Divine Liturgy",
    parish: "Annunciation Byzantine Catholic Church",
    massTime: "10:00 AM (Byzantine)",
    massHour: 10.0,
    massDurationMin: 70,
    transitBufferMin: 25,
    gateArrivalHour: 11.58, // ~11:35 AM
    gateArrivalFormatted: "11:35 AM",
    distanceMiles: 2.4
  },
  {
    id: "boniface-vigil-500",
    name: "Saturday Vigil (St. Boniface 5:00 PM / Full Sunday Park Day)",
    parish: "Saint Boniface Catholic Church (Saturday)",
    massTime: "Saturday 5:00 PM Vigil",
    massHour: 0,
    massDurationMin: 55,
    transitBufferMin: 0,
    gateArrivalHour: 7.75,
    gateArrivalFormatted: "7:45 AM (Full Rope Drop)",
    distanceMiles: 1.5
  }
];

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/disneyland-churches-data.js
  // ==========================================

  (function() {


var DISNEYLAND_TRADITIONS_LITURGICAL = CD.DISNEYLAND_TRADITIONS_LITURGICAL = global.DISNEYLAND_TRADITIONS_LITURGICAL = {
  roman: {
    ...TRADITIONS_LITURGICAL.roman,
    name: "Roman Rite (Diocese of Orange)",
    icon: "🇻🇦",
    summary: "The Ordinary Form of the Roman Rite in the Diocese of Orange. Featuring both historic Saint Boniface (the mother church of Anaheim, 1.5 miles north on Harbor Blvd) and the monumental Christ Cathedral in Garden Grove (seat of the diocese, housing the 35-foot bronze Shrine of Our Lady of La Vang).",
    churchInfo: {
      parishName: "Saint Boniface Catholic Church",
      shortName: "St. Boniface (Anaheim)",
      address: "120 N Janss St, Anaheim, CA 92805",
      distanceFromPark: "1.5 miles (5 mins straight up Harbor Blvd from Disneyland)",
      sundayTimes: "6:30 AM, 8:00 AM, 9:30 AM, 11:30 AM (English & Spanish)",
      confessionTimes: "Saturday 3:30 PM - 4:30 PM & weekdays by appointment",
      transitBufferMinutes: 20,
      sundayMassTitle: "Solemn Sunday Mass at Historic St. Boniface",
      features: [
        "Mother church of Anaheim, founded in 1860 by early Catholic settlers",
        "Short 5-minute Uber or Anaheim Resort Transit (ART) ride from Harbor Blvd",
        "Multiple early morning Sunday Masses allowing rope-drop right after Mass"
      ]
    },
    cathedralInfo: {
      parishName: "Christ Cathedral (Diocese of Orange)",
      shortName: "Christ Cathedral (Garden Grove)",
      address: "13280 Chapman Ave, Garden Grove, CA 92840",
      distanceFromPark: "3.5 miles (8 mins south of Disneyland down Harbor Blvd)",
      sundayTimes: "English: 8:15 AM, 10:00 AM, 5:00 PM • Spanish: 11:45 AM, 7:00 PM • Vietnamese: 6:15 AM, 1:30 PM, 3:15 PM",
      confessionTimes: "Monday-Friday 8:30 AM & Saturday 9:00 AM",
      features: [
        "Seat of the Bishop of Orange, dedicated in 2019",
        "Monumental 35-foot bronze Marian Shrine of Our Lady of La Vang",
        "Extensive 34-acre pilgrimage campus with outdoor Stations of the Cross"
      ]
    },
    holyDays: TRADITIONS_LITURGICAL.roman.holyDays.map(hd => ({
      ...hd,
      massAtDisney: `Special Holy Day Masses celebrated at Christ Cathedral (Garden Grove - 8 mins) & St. Boniface (Anaheim - 5 mins).`
    }))
  },

  tlm: {
    ...TRADITIONS_LITURGICAL.tlm,
    name: "Traditional Latin Mass (1962 Missal)",
    icon: "☩",
    summary: "The Traditional Latin Mass (Usus Antiquior) celebrated under diocesan faculty by the Norbertine Fathers of Saint Michael's Abbey at Saint John the Baptist in Costa Mesa, renowned for Gregorian chant and sacred liturgy.",
    churchInfo: {
      parishName: "Saint John the Baptist Catholic Church (Norbertine Fathers)",
      shortName: "St. John the Baptist (Costa Mesa)",
      address: "1015 Baker St, Costa Mesa, CA 92626",
      distanceFromPark: "11.5 miles (14 mins south via SR-55 / I-5)",
      sundayTimes: "7:00 AM (Low Mass), 12:30 PM (Missa Cantata / High Mass)",
      confessionTimes: "Before and during all Sunday Masses & daily 8:00 AM",
      transitBufferMinutes: 35,
      sundayMassTitle: "Traditional Latin High Mass with the Norbertine Fathers",
      features: [
        "Staffed by the Canons Regular of Prémontré (Norbertines of St. Michael's Abbey)",
        "Reverent liturgical music, Gregorian chant, and traditional vestments",
        "Generous confession availability before and during every Mass"
      ]
    },
    holyDays: (TRADITIONS_LITURGICAL.tlm.holyDays || TRADITIONS_LITURGICAL.roman.holyDays).map(hd => ({
      ...hd,
      massAtDisney: `Traditional Latin High & Low Masses celebrated at St. John the Baptist in Costa Mesa (14 mins from Disneyland).`
    }))
  },

  byzantine: {
    ...TRADITIONS_LITURGICAL.byzantine,
    name: "Byzantine Catholic Rite (Ruthenian)",
    icon: "☦️",
    summary: "The Byzantine Divine Liturgy of Saint John Chrysostom within the Ruthenian Byzantine Catholic Eparchy of Phoenix (in full communion with the Pope of Rome). Annunciation Byzantine is located practically adjacent to Disneyland on Ball Road!",
    churchInfo: {
      parishName: "Annunciation Byzantine Catholic Church",
      shortName: "Annunciation Byzantine (Anaheim)",
      address: "995 N West St, Anaheim, CA 92801 (Ball Rd & West St)",
      distanceFromPark: "2.4 miles (6 mins from Disneyland, directly behind Mickey & Friends structure)",
      sundayTimes: "9:00 AM (Matins), 10:00 AM (Divine Liturgy of St. John Chrysostom)",
      confessionTimes: "Sunday 9:15 AM - 9:45 AM & upon request",
      transitBufferMinutes: 20,
      sundayMassTitle: "Divine Liturgy of Saint John Chrysostom",
      features: [
        "Incredible proximity—just 6 minutes from the Disneyland theme park gates",
        "Full traditional iconostasis, sacred Byzantine choral chant, and incense",
        "Communion under both species via liturgical golden spoon (leavened bread & consecrated wine)"
      ]
    },
    holyDays: (TRADITIONS_LITURGICAL.byzantine.holyDays || TRADITIONS_LITURGICAL.roman.holyDays).map(hd => ({
      ...hd,
      massAtDisney: `Feast Day Divine Liturgy celebrated at Annunciation Byzantine Church (6 mins from Disneyland gates on Ball Rd).`
    }))
  },

  ordinariate: {
    ...TRADITIONS_LITURGICAL.ordinariate,
    name: "Anglican Ordinariate (Divine Worship)",
    icon: "🇬🇧",
    summary: "The Personal Ordinariate of the Chair of Saint Peter, established by Pope Benedict XVI for communities of the Anglican tradition entering full Catholic communion while preserving their liturgical and musical patrimony.",
    churchInfo: {
      parishName: "Blessed John Henry Newman Catholic Community",
      shortName: "Newman Ordinariate Community (Orange County)",
      address: "Queen of Life Chapel, 2532 Dupont Dr, Irvine, CA 92612",
      distanceFromPark: "12 miles (15 mins south down I-5)",
      sundayTimes: "9:30 AM (Sung Mass: Divine Worship: The Missal)",
      confessionTimes: "Sunday 8:45 AM - 9:15 AM",
      transitBufferMinutes: 30,
      sundayMassTitle: "Divine Worship Sung Mass (English Catholic Patrimony)",
      features: [
        "Celebrated using 'Divine Worship: The Missal' with traditional English choral hymnody",
        "Reverent celebration ad orientem with traditional altar rails",
        "Welcoming large-family fellowship and hospitality after Mass"
      ]
    },
    holyDays: (TRADITIONS_LITURGICAL.ordinariate.holyDays || TRADITIONS_LITURGICAL.roman.holyDays).map(hd => ({
      ...hd,
      massAtDisney: `Solemn Sung Mass celebrated by Blessed John Henry Newman Ordinariate Community at Queen of Life Chapel (Irvine).`
    }))
  }
};

// Historic California Mission Pilgrimage Excursion
var DISNEYLAND_MISSION_EXCURSION = CD.DISNEYLAND_MISSION_EXCURSION = global.DISNEYLAND_MISSION_EXCURSION = {
  name: "Mission San Juan Capistrano & The Serra Chapel",
  icon: "🔔",
  saint: "Saint Junípero Serra (Apostle of California)",
  address: "26801 Old Mission Rd, San Juan Capistrano, CA 92675",
  transitDescription: "25-30 mins south by car, or a scenic 22-minute ride on the Amtrak Pacific Surfliner train directly from the Anaheim ARTIC depot to the historic San Juan Capistrano depot right across the street!",
  historicalSignificance: "Founded on All Saints' Day (November 1, 1776) by Saint Junípero Serra. Known as the 'Jewel of the California Missions.'",
  sacredHighlights: [
    "The Serra Chapel (built 1782): The oldest building in California still in use, and the ONLY surviving chapel where Saint Junípero Serra celebrated Holy Mass.",
    "The Golden Retablo: A breathtaking 400-year-old hand-carved gilded Spanish baroque altarpiece.",
    "Mission Basilica San Juan Capistrano: The soaring modern basilica next door, offering Sunday Masses and silent Eucharistic Adoration.",
    "The Historic Mission Bells: Cast in 1796 and 1804, rung for the Angelus and sacred liturgies."
  ]
};

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/disneyland-queue-companions-data.js
  // ==========================================

  (function() {
// Catholic Disney: Disneyland Resort Queue Companions
// Spiritual connections, patron saints, virtues, and queue prayers for Disneyland & DCA attractions

var DISNEYLAND_QUEUE_COMPANIONS = CD.DISNEYLAND_QUEUE_COMPANIONS = global.DISNEYLAND_QUEUE_COMPANIONS = [
  // ==========================================
  // Disneyland Park
  // ==========================================
  {
    rideId: "dl-matterhorn",
    rideName: "Matterhorn Bobsleds",
    park: "Disneyland Park",
    land: "Fantasyland / Tomorrowland",
    icon: "🏔️",
    patronSaint: "Saint Bernard of Montjoux & Saint Nicholas of Flüe",
    patronRole: "Patron Saints of Mountaineers, the Swiss Alps, and Alpine Monks",
    feastDay: "May 28 (St. Bernard) & September 25 (St. Nicholas of Flüe)",
    virtue: "Fortitude & Christian Hospitality in Peril",
    summary: "Rushing down the icy crags of Switzerland's most legendary peak evokes Saint Bernard of Montjoux, who founded high Alpine hospices to rescue stranded pilgrims, and Saint Nicholas of Flüe, the beloved Swiss hermit who preserved peace.",
    catholicConnection: `The real Matterhorn looms over the Swiss-Italian border at 14,692 feet, capped in perpetual ice. In the 10th century, Archdeacon Saint Bernard of Montjoux established hospices high in the treacherous Alpine passes (at over 8,000 feet elevation) to feed, shelter, and rescue Catholic pilgrims journeying through blizzards to the tombs of Peter and Paul in Rome. 

The famous Saint Bernard rescue dogs—bred by the Augustinian monks of the hospice—braved sub-zero avalanches carrying provisions to revive travelers freezing to death. When your bobsled plunges into the icy glacial caverns past the roaring Abominable Snowman, remember that no matter how desolate the mountain or howling the frost, God's saints built beacons of shelter, warmth, and mercy along the rugged heights.`,
    queuePrayer: `Lord Jesus Christ, who called Your apostles up to the heights of Mount Tabor and Transfigured before them, grant us fortitude as we climb the rugged mountains of life. Saint Bernard of Montjoux and Saint Nicholas of Flüe, pray for all travelers and mountaineers, and inspire our hearts to offer shelter, kindness, and refuge to those shivering in trials. Amen.`,
    scripturePassage: `"I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth." — Psalm 121:1-2`,
    prayerNook: "Snow White Grotto wishing well and marble statuary to the right of Sleeping Beauty Castle."
  },

  {
    rideId: "dl-indiana-jones",
    rideName: "Indiana Jones Adventure: Temple of the Forbidden Eye",
    park: "Disneyland Park",
    land: "Adventureland",
    icon: "🏛️",
    patronSaint: "Saint Boniface & Saint Martin of Tours",
    patronRole: "Champions of Christ against Pagan False Deities",
    feastDay: "June 5 (St. Boniface) & November 11 (St. Martin of Tours)",
    virtue: "Holy Fear of the Lord & Undaunted Faith",
    summary: "Journeying into the ominous Temple of Mara surrounded by illusory earthly treasures reminds us of St. Boniface boldly felling Thor's oak and St. Martin reversing falling pagan pine trees to show that idols possess zero real power before the Living God.",
    catholicConnection: `In the eerie depths of the Temple of the Forbidden Eye, travelers are warned not to gaze into the glowing eyes of Mara, a false god promising youth, wealth, or knowledge. When guests become frightened by snakes, collapsing bridges, and roaring supernatural statues, our Catholic tradition offers immense courage. 

In the 8th century, Saint Boniface marched directly into a menacing pagan grove in Germany and swung his axe into the sacred Oak of Thor. The pagans stood trembling, expecting Thor to strike Boniface with thunderbolts. Instead, the oak split into four pieces under God's breeze, and Boniface used the timber to build a chapel dedicated to Saint Peter! Centuries earlier, Saint Martin of Tours stood unarmed while pagan woodsmen felled a sacred tree directly toward his head; Martin raised his hand with the Sign of the Cross, and the massive falling trunk miraculously spun backward. When darkness, tremors, or idols seem intimidating, the name of Jesus Christ breaks every illusory chain.`,
    queuePrayer: `Almighty God, before whom every knee shall bow in heaven, on earth, and under the earth, protect our family from the illusions of false worldly promises. Saint Boniface and Saint Martin, stand beside us when we face frightening shadows, and remind us that Christ alone is our eternal rock, our light, and our salvation. Amen.`,
    scripturePassage: `"For great is the Lord, and greatly to be praised; He is to be feared above all gods. For all the gods of the peoples are worthless idols, but the Lord made the heavens." — Psalm 96:4-5`,
    prayerNook: "Peaceful benches along the Jungle Cruise tropical river dock."
  },

  {
    rideId: "dl-pirates",
    rideName: "Pirates of the Caribbean (Disneyland Original)",
    park: "Disneyland Park",
    land: "New Orleans Square",
    icon: "🏴‍☠️",
    patronSaint: "Saint Francis Xavier & Blessed Miguel Pro",
    patronRole: "Patron of Ocean Voyagers and the Martyr of Mexico",
    feastDay: "December 3 (St. Francis Xavier) & November 23 (Bl. Miguel Pro)",
    virtue: "Spiritual Freedom & Heavenly Treasure",
    summary: "Walt Disney's final personally overseen masterpiece features a descent into dark bayous and pirate caves, evoking Saint Francis Xavier's perilous voyages and Blessed Miguel Pro's unshakable joy in the face of lawlessness.",
    catholicConnection: `Disneyland's Pirates of the Caribbean is twice as long as Orlando's version, beginning with a tranquil glide through the Blue Bayou under moss-draped cypress trees before plunging down two waterfalls into eerie skeletal pirate caves. The talking skull reminds us: 'Dead men tell no tales!' 

Saint Francis Xavier spent thousands of days aboard rotting Spanish and Portuguese wooden galleons, surviving deadly storms, fevers, and pirate skirmishes across the Indian and Pacific Oceans to bring the Sacraments to unreached souls. And Blessed Miguel Pro in Mexico proved that no matter how lawless the surrounding world becomes, true treasure cannot be locked in a pirate chest—it is stored in the Sacred Heart of Jesus.`,
    queuePrayer: `O Lord of the seas, who silenced the tempest with a single word, protect our family on all life's voyages. Grant that we may never seek the fool's gold of piracy, greed, or selfishness, but instead seek the imperishable pearl of great price: Your eternal friendship. Amen.`,
    scripturePassage: `"Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal, but lay up for yourselves treasures in heaven." — Matthew 6:19-20`,
    prayerNook: "Court of Angels courtyard in New Orleans Square (quiet wrought-iron oasis)."
  },

  {
    rideId: "dl-haunted-mansion",
    rideName: "The Haunted Mansion",
    park: "Disneyland Park",
    land: "New Orleans Square",
    icon: "🕯️",
    patronSaint: "Saint Benedict of Nursia",
    patronRole: "Father of Western Monasticism & Victor over Evil Spirits",
    feastDay: "July 11",
    virtue: "Sovereignty of Christ & Holy Peace",
    summary: "The playful 'grim grinning ghosts' of the Haunted Mansion lose all dread when we invoke Saint Benedict and wear the Jubilee Medal of Saint Benedict, which bears the ancient minor exorcism prayer: Crux Sacra Sit Mihi Lux (May the Holy Cross be my light!).",
    catholicConnection: `Disneyland's Haunted Mansion stands as an elegant 19th-century antebellum plantation house. Inside, 999 happy haunts host a swinging wake. While modern horror movies promote terrifying superstition, Catholic theology teaches that Christ completely conquered death, hell, and evil on the Cross of Calvary. 

Saint Benedict of Nursia, when confronted by demons trying to distract his monks or poisoning his cup, simply made the Sign of the Cross and the poisoned glass shattered like stone! The ancient Medal of Saint Benedict contains the initials: V.R.S.N.S.M.V. (Vade Retro Satana, Nunquam Suade Mihi Vana — 'Begone, Satan, never tempt me with your vanities!'). For a Catholic pilgrim, ghosts and specters are harmless special effects; the Holy Cross is our eternal shield.`,
    queuePrayer: `Crux Sacra Sit Mihi Lux, Non Draco Sit Mihi Dux. May the Holy Cross be my light, and let not the dragon be my guide! Saint Benedict, holy father of monks and terror of evil spirits, protect our children and family in peaceful confidence in Christ's victory. Amen.`,
    scripturePassage: `"For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." — Romans 8:38-39`,
    prayerNook: "Quiet benches alongside the Rivers of America overlooking the Sailing Ship Columbia."
  },

  {
    rideId: "dl-mr-toad",
    rideName: "Mr. Toad's Wild Ride",
    park: "Disneyland Park",
    land: "Fantasyland",
    icon: "🚗",
    patronSaint: "Saint Christopher & Saint Philip Neri",
    patronRole: "Patron of Safe Travel and the Apostle of Joy & Humility",
    feastDay: "July 25 (St. Christopher) & May 26 (St. Philip Neri)",
    virtue: "Prudence, Temperance & Humorous Self-Awareness",
    summary: "Mr. Toad's frantic, reckless mania for motorcars—crashing through fireplaces, courtrooms, and even a comical depiction of the underworld—teaches the classic Catholic virtue of temperance and the folly of unchecked earthly obsessions.",
    catholicConnection: `Disneyland's Mr. Toad's Wild Ride (an opening-day 1955 original preserved in California!) is famous for its madcap humor. J. Thaddeus Toad, Esq., is overwhelmed by 'motor-mania,' recklessly abandoning his estate, ignoring his loyal friends Ratty and Moley, and careening blindly into chaos. 

Saint Philip Neri was famous in Rome for using humor, self-mockery, and practical jokes to puncture human pride and worldly obsessions. Philip taught that when humans take themselves too seriously and chase the latest worldly craze, we look just like Mr. Toad crashing his roadster into haystacks! Saint Christopher carried the Christ Child safely through dangerous waters; Toad reminds us to invite Christ into the driver's seat of our lives so we never steer our souls off course.`,
    queuePrayer: `Saint Christopher, patron of travelers, protect our hands and feet from reckless folly. Lord, give us the humor of Saint Philip Neri to laugh at our petty attachments, and grant us the virtue of temperance so we never let earthly fads drive us away from Your peace. Amen.`,
    scripturePassage: `"A man's heart plans his way, but the Lord directs his steps." — Proverbs 16:9`,
    prayerNook: "The shaded garden courtyard next to the Fantasyland theater."
  },

  {
    rideId: "dl-snow-white",
    rideName: "Snow White's Enchanted Wish",
    park: "Disneyland Park",
    land: "Fantasyland",
    icon: "🍎",
    patronSaint: "Saint Elizabeth of Hungary",
    patronRole: "The Royal Princess Saint & Patroness of Purity",
    feastDay: "November 17",
    virtue: "Purity of Soul & Victorious Hope",
    summary: "Re-imagined into a story of joy and radiant grace, Snow White’s journey from dark woodlands to happily ever after reflects Saint Elizabeth of Hungary, the holy princess whose purity transformed a royal court.",
    catholicConnection: `In 2021, Disneyland re-imagined the classic Snow White ride into 'Snow White's Enchanted Wish,' highlighting dancing, joyful domestic cottage warmth with the dwarfs, and the radiant golden sunlight of True Love's Kiss. 

Saint Elizabeth of Hungary was born a royal princess in 1207. Despite the grandeur of the Wartburg castle, Elizabeth chose humility, baking bread with her own hands for the starving, nursing the sick, and keeping her soul untarnished by courtly jealousy or vanity. When her hostile brother-in-law tried to catch her smuggling bread, her cloak opened to reveal a miraculous bouquet of fresh red roses! Snow White reminds us that authentic beauty comes from within, and no poisonous deceit of the Enemy can overcome God's resurrection light.`,
    queuePrayer: `Saint Elizabeth of Hungary, princess of charity and purity, pray for our daughters, sons, and families. Help us to cultivate inner radiance of soul, to love the poor and simple, and to trust that God's grace will triumph over every shadowy forest in our lives. Amen.`,
    scripturePassage: `"Do not let your adorning be external... but let your adorning be the hidden person of the heart with the imperishable beauty of a gentle and quiet spirit, which in God's sight is very precious." — 1 Peter 3:3-4`,
    prayerNook: "Snow White Grotto marble deer and wishing well to the right of the Castle."
  },

  {
    rideId: "dl-peter-pan",
    rideName: "Peter Pan's Flight",
    park: "Disneyland Park",
    land: "Fantasyland",
    icon: "⛵",
    patronSaint: "Saint Gabriel the Archangel & Saint Philomena",
    patronRole: "Messenger of Heavenly Tidings & Patroness of Youth",
    feastDay: "September 29 (Archangels) & August 11 (St. Philomena)",
    virtue: "Childlike Faith & Heavenly Aspiration",
    summary: "Soaring aboard a flying pirate galleon above moonlit London toward the Second Star to the Right echoes the lift of the Holy Angels carrying our souls toward our true heavenly homeland.",
    catholicConnection: `Flying over Big Ben and into the starlit sky aboard a galleon suspended from an overhead track is one of the purest expressions of childhood wonder at Disneyland. In the Christian tradition, flight has always symbolized the soul's ascent to God, liberated from the gravity of sin. 

Saint Gabriel the Archangel flew across the cosmos to bring the greatest tidings in human history to the humble Virgin of Nazareth. Saint Thérèse of Lisieux spoke of the 'Little Way' as an elevator of divine love that carries little children directly into the arms of Jesus without having to climb steep, perilous stairs. When your ship sails into the night sky, look up to the Creator who hung the stars in the heavens and loves each of your children by name.`,
    queuePrayer: `Angel of God, my guardian dear, to whom God's love commits me here: ever this day be at my side, to light and guard, to rule and guide. May our family always look upward toward heaven with childlike faith and joyful confidence. Amen.`,
    scripturePassage: `"Truly, I say to you, unless you turn and become like children, you will never enter the kingdom of heaven." — Matthew 18:3`,
    prayerNook: "Sleeping Beauty Castle side walkway overlooking the moat."
  },

  {
    rideId: "dl-king-arthur",
    rideName: "King Arthur Carrousel",
    park: "Disneyland Park",
    land: "Fantasyland",
    icon: "🎠",
    patronSaint: "Saint George & Saint Louis IX of France",
    patronRole: "Patron of Christian Chivalry and the Holy King of France",
    feastDay: "April 23 (St. George) & August 25 (St. Louis)",
    virtue: "Chivalry, Nobility of Spirit & Protection of the Weak",
    summary: "Built in 1922 and personally selected by Walt Disney, the 68 hand-carved jumping steeds recall the medieval Christian ideals of King Arthur, the Quest for the Holy Grail, and the chivalric oath to defend the vulnerable.",
    catholicConnection: `Carved with astonishing craftsmanship, every single horse on Disneyland's King Arthur Carrousel is unique, adorned with medieval royal coats of arms and golden saddles. The King Arthur legend itself is saturated in Catholic medieval thought: the Knights of the Round Table swore solemn oaths on the Holy Gospels to protect widows and orphans, champion justice, and embark on the supreme spiritual quest—finding the Holy Grail (the cup of the Last Supper). 

Saint George, the Roman soldier who gave his life for Christ under Diocletian, became the universal patron of knights defending the innocent against dragon-like tyrants. Saint Louis IX, King of France, built the Sainte-Chapelle in Paris to house Christ's Crown of Thorns and washed the feet of lepers daily. True nobility is found not in conquering others, but in laying down our strength in service to the weak.`,
    queuePrayer: `Saint George and Saint Louis, holy champions of Christ the King, inspire our sons and daughters with the true spirit of chivalry, honor, and courage. Help our family to use our strength to defend the vulnerable, speak truth with charity, and serve Christ with noble hearts. Amen.`,
    scripturePassage: `"He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?" — Micah 6:8`,
    prayerNook: "Sword in the Stone courtyard directly in front of the Carrousel."
  },

  {
    rideId: "dl-space-mountain",
    rideName: "Space Mountain",
    park: "Disneyland Park",
    land: "Tomorrowland",
    icon: "🚀",
    patronSaint: "Saint Dominic Savio & Saint Joseph of Cupertino",
    patronRole: "Youthful Purity and the Mystic of Celestial Flight",
    feastDay: "May 6 (St. Dominic Savio) & September 18 (St. Joseph of Cupertino)",
    virtue: "Contemplation of the Cosmos & Fearless Zeal",
    summary: "Rocketing through the vast celestial cosmos amidst swirling nebulae points our minds to the majesty of God the Creator, who numbered every star and yet loved humanity enough to redeem us.",
    catholicConnection: `Blasting into the pitch-black void of Space Mountain, surrounded by swirling cosmic dust, flashing satellites, and distant stars, evokes the awe of the astronomer friars. For centuries, the Vatican Observatory (one of the oldest astronomical research institutions in the world) has studied deep space. 

Father Georges Lemaître, a Belgian Catholic priest and physicist, first proposed the Big Bang theory in 1927! Saint Dominic Savio, who died at age 14, lived with his eyes constantly fixed on eternity, famously proclaiming: 'Death rather than sin!' As you hurtle past celestial galaxies, remember that the infinite God who set every star in motion knows every hair on your head.`,
    queuePrayer: `O Lord our Sovereign, how majestic is Your name in all the earth! You have set Your glory above the heavens. When we look at Your stars, the work of Your fingers, we marvel that You are mindful of us. Keep our hearts steadfast in the orbit of Your love. Amen.`,
    scripturePassage: `"He determines the number of the stars; He gives to all of them their names." — Psalm 147:4`,
    prayerNook: "Space Mountain upper concourse overlooking the Tomorrowland skyline."
  },

  {
    rideId: "dl-small-world",
    rideName: "It's a Small World",
    park: "Disneyland Park",
    land: "Fantasyland",
    icon: "🌍",
    patronSaint: "Mary, Mother of the Church & Saint Francis Xavier",
    patronRole: "Mother of All Nations & Apostle to the Ends of the Earth",
    feastDay: "Monday after Pentecost & December 3",
    virtue: "Universal Fraternity, Peace & Pentecost Unity",
    summary: "Featuring Mary Blair’s iconic white-and-gold kinetic clock facade, this joyful voyage through every continent reflects the Catholic ('Universal') Church uniting every tribe, tongue, and nation in the Peace of Christ.",
    catholicConnection: `Disneyland's 'It's a Small World' is the legendary 1964 New York World's Fair original, housed behind Mary Blair's magnificent kinetic outdoor clock tower. Inside, hundreds of children in traditional cultural dress sing in their native tongues across every ocean and continent. 

The word 'Catholic' literally comes from the Greek 'Katholikos'—meaning universal. On the morning of Pentecost (Acts 2), the Holy Spirit descended upon the Apostles, and people from every nation under heaven heard the Good News spoken in their own languages! Unlike the Tower of Babel, where human pride divided mankind into confusion, Christ brings harmony, mutual dignity, and peace to every culture.`,
    queuePrayer: `Heavenly Father, You created the human family in all its rich beauty, diversity, and colors. Grant peace to our world, protect children of all nations, and unite us as brothers and sisters in the Sacred Heart of Your Son. Mary, Queen of Peace, pray for us! Amen.`,
    scripturePassage: `"After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb." — Revelation 7:9`,
    prayerNook: "The topiaries and shaded terraces flanking the Small World plaza."
  },

  // ==========================================
  // Disney California Adventure (DCA)
  // ==========================================
  {
    rideId: "dca-radiator-springs",
    rideName: "Radiator Springs Racers",
    park: "Disney California Adventure",
    land: "Cars Land",
    icon: "🏎️",
    patronSaint: "Saint Frances of Rome & Saint Christopher",
    patronRole: "Patroness of Automobiles, Motorists, and Travelers",
    feastDay: "March 9 (St. Frances of Rome) & July 25 (St. Christopher)",
    virtue: "Neighborly Solidarity & Prudence on the Road",
    summary: "Racing through the towering red-rock grandeur of Ornament Valley along Route 66 evokes Saint Frances of Rome, patroness of motorists, and the neighborly virtue of slowing down to care for small desert towns and forgotten neighbors.",
    catholicConnection: `Cars Land is one of the most breathtaking themed lands ever built, featuring a massive 280,000-square-foot hand-carved rockwork replica of the American Southwest along historic Route 66. In the movie 'Cars,' hotshot racer Lightning McQueen learns that winning trophies is worthless if you have no friends, and that slowing down in a forgotten roadside town like Radiator Springs can save your soul. 

Saint Frances of Rome was declared the patron saint of motorists by Pope Pius XI in 1925 because of her legendary guardian angel, who accompanied her through dark streets holding a lantern to guide her footsteps. Along the historic Route 66, Catholic travelers built small roadside chapels, grottos, and crosses to bless motorists. When your racer zooms through the desert turns at 40 mph, thank God for the blessing of travel, mechanics, and family companionship.`,
    queuePrayer: `Saint Frances of Rome and Saint Christopher, watch over all drivers, travelers, and mechanics on the road. Protect our family from road hazards and mechanical breakdowns, and teach us to value humility, community, and true friendship over worldly trophies. Amen.`,
    scripturePassage: `"For He will command His angels concerning you to guard you in all your ways; on their hands they will bear you up, lest you strike your foot against a stone." — Psalm 91:11-12`,
    prayerNook: "The peaceful courtyard behind the Cozy Cone Motel facing the Cadillac Mountain range."
  },

  {
    rideId: "dca-soarin",
    rideName: "Soarin' Around the World",
    park: "Disney California Adventure",
    land: "Grizzly Peak",
    icon: "🦅",
    patronSaint: "Saint Joseph of Cupertino & Saint Michael the Archangel",
    patronRole: "The Flying Friar & Defender of the Skies",
    feastDay: "September 18 & September 29",
    virtue: "Wonder, Awe & Environmental Stewardship",
    summary: "Gliding high above the Matterhorn, the Taj Mahal, the African savannas, and the Fiji islands awakens our hearts to the sheer grandeur of God's global canvas.",
    catholicConnection: `Suspended 40 feet in the air inside an IMAX dome with flight scents of orange blossoms, grass, and sea breeze, Soarin' gives humans a glimpse of flight that mystics celebrated for centuries. 

Saint Joseph of Cupertino, a 17th-century Franciscan friar, became known as 'the Flying Friar' because his intense love of God caused him to spontaneously levitate in ecstasy during Holy Mass, soaring toward the high altar and statues of Christ! When soaring over the Polar ice caps, the Great Wall of China, and the Pyramids of Egypt, we reflect on Saint Francis of Assisi's Canticle of the Sun, praising God for the grandeur of our common home.`,
    queuePrayer: `O Lord, how manifold are Your works! In wisdom You have made them all; the earth is full of Your creatures. As we soar above Your earth in wonder, elevate our souls above worldly anxieties so that our thoughts remain fixed on the beauty of heaven. Amen.`,
    scripturePassage: `"The heavens declare the glory of God, and the sky above proclaims His handiwork." — Psalm 19:1`,
    prayerNook: "Grizzly Peak shaded pine tree pathways next to the roaring waterfalls."
  },

  {
    rideId: "dca-grizzly-river",
    rideName: "Grizzly River Run",
    park: "Disney California Adventure",
    land: "Grizzly Peak",
    icon: "🐻",
    patronSaint: "Saint Kateri Tekakwitha & Saint Francis of Assisi",
    patronRole: "Lily of the Mohawks & Patron Saint of Ecology and Animals",
    feastDay: "July 14 (St. Kateri) & October 4 (St. Francis)",
    virtue: "Harmony with God's Creation & Cleansing of the Heart",
    summary: "Braving the churning white-water rapids of California's High Sierra wilderness reminds us of Saint Kateri Tekakwitha's deep communion with God in nature and the cleansing water of baptism.",
    catholicConnection: `Rafting through abandoned mining flumes, geysers, and roaring waterfalls beneath the stone grizzly bear peak showcases California's rugged wilderness. 

Saint Kateri Tekakwitha, canonized in 2012, spent her youth in the forests of North America, carving crosses into trees throughout the woods so she could pause and pray at every step of her journeys. In Catholic theology, water is the sacred element of rebirth: in Holy Baptism, water washes away all stain of original sin and infuses divine life into the soul. As the river water splashes and cleanses, praise God for the wilderness, the rushing rivers, and the living water of the Holy Spirit.`,
    queuePrayer: `Praise be to You, my Lord, through Sister Water, who is so useful, humble, precious, and pure! Saint Kateri Tekakwitha and Saint Francis of Assisi, help our family walk through nature with reverence, seeing in every stream and forest the handiwork of our Loving Creator. Amen.`,
    scripturePassage: `"Whoever drinks of the water that I will give him will never be thirsty again. The water that I will give him will become in him a spring of water welling up to eternal life." — John 4:14`,
    prayerNook: "The Redwood Creek Challenge Trail shaded amphitheater and prayer nooks."
  },

  {
    rideId: "dca-guardians",
    rideName: "Guardians of the Galaxy – Mission: BREAKOUT!",
    park: "Disney California Adventure",
    land: "Avengers Campus / Hollywood Land",
    icon: "⚡",
    patronSaint: "Saint Maximilian Kolbe & Saint Peter in Chains",
    patronRole: "Hero of Auschwitz & Deliverance of Prisoners",
    feastDay: "August 14 (St. Maximilian) & August 1 (St. Peter in Chains)",
    virtue: "Self-Sacrificial Solidarity & Liberation of Captives",
    summary: "Breaking Rocket, Groot, and friends out of the Collector's high-security fortress fortress recalls the spiritual virtue of visiting the imprisoned and Saint Maximilian Kolbe volunteering to take the place of a condemned captive.",
    catholicConnection: `Inside the towering fortress of Taneleer Tivan (The Collector), Rocket Raccoon needs your help to breach the fortress power grid and free his family of misfits from glass display cages. 

Visiting and ransoming the imprisoned is one of the Corporal Works of Mercy. In the Acts of the Apostles (Acts 12), Saint Peter was chained between two Roman guards inside a high-security prison when an angel of the Lord appeared, light filled the cell, the iron chains fell off his wrists, and the massive iron prison gate opened by itself! In 1941 at Auschwitz, Saint Maximilian Kolbe stepped forward to take the place of Franciszek Gajowniczek, a stranger with a wife and children who had been condemned to starvation. Kolbe turned a dungeon of death into a sanctuary of prayer and singing. When your gantry lift plunges in gravity-defying freefall, remember that true heroes lay down their lives to break the chains of others.`,
    queuePrayer: `Lord Jesus, You came to proclaim liberty to captives and recovery of sight to the blind. Saint Maximilian Kolbe, pray for all who are trapped in prisons of fear, addiction, or loneliness. Give us the courage to stand up for our family and friends, loving them with sacrificial courage. Amen.`,
    scripturePassage: `"Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body." — Hebrews 13:3`,
    prayerNook: "Quiet benches tucked behind the Hyperion Theater."
  },

  {
    rideId: "dca-incredicoaster",
    rideName: "The Incredicoaster",
    park: "Disney California Adventure",
    land: "Pixar Pier",
    icon: "🦸",
    patronSaint: "The Holy Family of Nazareth (Jesus, Mary & Joseph)",
    patronRole: "Model of the Domestic Church and Family Solidarity",
    feastDay: "Sunday after Christmas",
    virtue: "Family Unity, Patience & Protecting the Little Ones",
    summary: "Racing at 55 mph to rescue baby Jack-Jack as the Parr family combines their unique superpowers celebrates the Catholic truth of the Domestic Church: every family member has God-given gifts to lift up the whole household.",
    catholicConnection: `The Incredicoaster is California's fastest and longest steel roller coaster, featuring a 0-to-55 mph launch in four seconds. The storyline revolves around the whole family (Bob, Helen, Dash, and Violet) using their individual superpowers in harmony to catch baby Jack-Jack as he teleports through dimensions. 

Saint John Paul II wrote extensively on the 'Domestic Church'—the truth that the Christian family is a miniature sanctuary where each member's unique gifts are placed at the service of one another. Fathers protect like Mr. Incredible, mothers stretch their endurance like Elastigirl, and siblings learn patience. When your coaster loops upside down overlooking Paradise Bay, celebrate the gift of your family—your ultimate earthly superhero team!`,
    queuePrayer: `Holy Family of Nazareth—Jesus, Mary, and Joseph—bless our home with peace, patience, and unity. When our days feel frantic or chaotic, remind us that our family is God's greatest team. Protect our little ones, and help us use our talents to build up one another in love. Amen.`,
    scripturePassage: `"As for me and my house, we will serve the Lord." — Joshua 24:15`,
    prayerNook: "Waterfront boardwalk benches overlooking Pixar Pier lagoon."
  },

  {
    rideId: "dca-monsters-inc",
    rideName: "Monsters, Inc. Mike & Sulley to the Rescue!",
    park: "Disney California Adventure",
    land: "Hollywood Land",
    icon: "🚪",
    patronSaint: "Saint Dymphna & The Holy Guardian Angels",
    patronRole: "Patroness of Anxieties and Fears & Heavenly Protectors of Children",
    feastDay: "May 15 (St. Dymphna) & October 2 (Guardian Angels)",
    virtue: "Overcoming Fear with Love & Protecting Childlike Innocence",
    summary: "Riding a yellow taxi through Monstropolis to protect toddler Boo from danger proves the classic Christian truth: love and laughter are vastly more powerful than fear and darkness.",
    catholicConnection: `In 'Monsters, Inc.,' the entire monster economy is based on scaring children to collect screams. But Mike and Sulley discover a revolutionary truth: a child's laughter generates ten times more power than a scream, and genuine love casts out fear completely! 

Saint Dymphna, the 7th-century Irish princess, is the patron saint of those suffering from anxiety, fears, and mental distress. For young children visiting a theme park, monsters and dark rides can sometimes feel overwhelming. In Catholic tradition, every child is assigned a real Guardian Angel who never sleeps, watching over them with fierce divine protection. Boo’s fearless trust in 'Kitty' (Sulley) shows how childlike love disarms the most intimidating monsters.`,
    queuePrayer: `Holy Guardian Angel, watch over my children day and night. Protect them from bad dreams, shadowy fears, and all anxieties. Jesus, fill our home with laughter, joy, and peace, reminding us that Your love casts out all fear. Amen.`,
    scripturePassage: `"There is no fear in love, but perfect love casts out fear." — 1 John 4:18`,
    prayerNook: "Shaded tree plaza near the Disney Animation building in Hollywood Land."
  }
];

var getDisneylandCompanionForRide = CD.getDisneylandCompanionForRide = global.getDisneylandCompanionForRide = function(rideNameOrId) {
  if (!rideNameOrId) return null;
  const clean = String(rideNameOrId).toLowerCase().trim();
  return DISNEYLAND_QUEUE_COMPANIONS.find(c => 
    c.rideId.toLowerCase() === clean ||
    clean.includes(c.rideName.toLowerCase()) ||
    c.rideName.toLowerCase().includes(clean)
  );
}

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/disneyland-land-patrons-data.js
  // ==========================================

  (function() {
// Catholic Disney: Disneyland Resort Land Patrons Data
// Designated Catholic Patron Saints for all 16 Lands of Disneyland Park & Disney California Adventure

var DISNEYLAND_LAND_PATRONS = CD.DISNEYLAND_LAND_PATRONS = global.DISNEYLAND_LAND_PATRONS = [
  // ==========================================
  // Disneyland Park Lands
  // ==========================================
  {
    landId: "dl-land-main-street",
    landName: "Main Street, U.S.A.",
    park: "Disneyland Park",
    icon: "🇺🇸",
    patronSaint: "Saint Frances Xavier Cabrini (Mother Cabrini)",
    patronTitle: "First Canonized U.S. Citizen Saint & Patroness of Immigrants",
    feastDay: "November 13",
    virtue: "Pioneering Charity, Civic Virtue & Hospitality",
    spiritualConnection: "Main Street, U.S.A. captures the idealized turn-of-the-century American small town of Walt Disney's boyhood. During this very era (the late 1800s and early 1900s), Mother Cabrini crisscrossed America and California, establishing 67 orphanages, schools, and hospitals with fearless trust in the Sacred Heart of Jesus.",
    catecheticalReflection: "Walking beneath the Victorian gaslamps and town square bunting reminds us of the immigrants and working families who built the towns of America. Mother Cabrini taught that true patriotism is rooted in serving the poorest in our communities, showing that holiness and hard work walk hand-in-hand in the town square.",
    designatedPrayerNook: "Quiet benches tucked in the Victorian courtyard of Center Street (off Main Street)."
  },

  {
    landId: "dl-land-fantasyland",
    landName: "Fantasyland",
    park: "Disneyland Park",
    icon: "🏰",
    patronSaint: "Saint Elizabeth of Hungary",
    patronTitle: "The Princess Saint & Miracle of the Roses",
    feastDay: "November 17",
    virtue: "Humility, Charity & Unshakable Wonder",
    spiritualConnection: "Sleeping Beauty Castle and the European fairy tale kingdom of Fantasyland honor Saint Elizabeth of Hungary, a royal princess of Wartburg Castle who chose humility over worldly vanity, nursing the sick and transforming courtly grandeur into a sanctuary of Christ's love.",
    catecheticalReflection: "Fantasyland celebrates storybook castles, flying ships, and royal courts. Catholic culture gave birth to these medieval stories of chivalry and virtue. Saint Elizabeth of Hungary showed that real royalty is measured not by crowns, but by washing the feet of the humble and trusting in divine miracles.",
    designatedPrayerNook: "Snow White Grotto wishing well and marble statues to the right of the Castle."
  },

  {
    landId: "dl-land-adventureland",
    landName: "Adventureland",
    park: "Disneyland Park",
    icon: "🧭",
    patronSaint: "Saint Francis Xavier",
    patronTitle: "Apostle of the Indies & Patron Saint of Foreign Missions",
    feastDay: "December 3",
    virtue: "Missionary Courage & Zeal for the Gospel",
    spiritualConnection: "The dense tropical jungles of Adventureland evoke the fearless journeys of Saint Francis Xavier, who sailed uncharted oceans and trekked through Asian jungles to bring the Sacraments to thousands of souls who had never heard the name of Jesus.",
    catecheticalReflection: "Adventure is at the heart of the Christian life. Christ commanded His Apostles: 'Go into all the world and proclaim the gospel to the whole creation.' Saint Francis Xavier lived with his bags packed, ready to cross any river or wilderness for the glory of God.",
    designatedPrayerNook: "Quiet waterfront benches along the Jungle Cruise tropical river dock."
  },

  {
    landId: "dl-land-new-orleans-square",
    landName: "New Orleans Square",
    park: "Disneyland Park",
    icon: "⚜️",
    patronSaint: "Saint Joan of Arc (The Maid of Orléans)",
    patronTitle: "Heavenly Patroness of Orléans, France & Soldier of Christ",
    feastDay: "May 30",
    virtue: "Uncompromising Courage & Fidelity to Heavenly Voices",
    spiritualConnection: "New Orleans was founded in 1718 and named in honor of the French royal Duke of Orléans, whose historic city was miraculously liberated by the 17-year-old Saint Joan of Arc. Wrought-iron balconies, gas lamps, and French Quarter courtyards directly honor her legacy.",
    catecheticalReflection: "Saint Joan of Arc was a peasant girl who listened to Saint Michael the Archangel and rode into battle carrying a banner of Jesus and Mary. In New Orleans Square, surrounded by pirate and haunted themes, Joan reminds us that a single soul anchored in Christ possesses more courage than an entire army.",
    designatedPrayerNook: "Court of Angels—the quiet, wrought-iron staircase oasis tucked in New Orleans Square."
  },

  {
    landId: "dl-land-frontierland",
    landName: "Frontierland",
    park: "Disneyland Park",
    icon: "🛶",
    patronSaint: "Saint Kateri Tekakwitha",
    patronTitle: "Lily of the Mohawks & First Native American Saint",
    feastDay: "July 14",
    virtue: "Pure Devotion to the Cross & Wilderness Reverence",
    spiritualConnection: "The vast American western wilderness of Frontierland along the Rivers of America recalls the frontier faith of Saint Kateri Tekakwitha, who carved crosses into forest trees and found Christ amidst the rivers and forests of North America.",
    catecheticalReflection: "Frontier pioneers built civilization out of rugged wild lands. Saint Kateri proved that the seeds of faith take root deeply in the wilderness. When looking out over the water toward Pirate's Lair on Tom Sawyer Island, remember that the Lord is present in every quiet corner of nature.",
    designatedPrayerNook: "Shaded rocking chairs along the waterfront porch of the Golden Horseshoe."
  },

  {
    landId: "dl-land-bayou-country",
    landName: "Critter Country / Bayou Country",
    park: "Disneyland Park",
    icon: "🐻",
    patronSaint: "Saint Martin de Porres",
    patronTitle: "Patron of All Animals, the Humble, and Peacemakers",
    feastDay: "November 3",
    virtue: "Humility, Care for the Smallest Creatures & Gentleness",
    spiritualConnection: "Nestled along the deep forested riverbanks with Tiana’s Bayou Adventure and the Many Adventures of Winnie the Pooh, this tranquil corner honors Saint Martin de Porres, the humble Dominican friar who lived in peaceful friendship with all God’s creatures.",
    catecheticalReflection: "Saint Martin de Porres was renowned for feeding stray dogs, cats, and even barn mice from the monastery kitchen, calling them brothers and teaching that no creature is too humble for God's loving providence. In Bayou Country, celebrate the joy of simple, gentle living.",
    designatedPrayerNook: "The quiet river overlook near the Davy Crockett's Explorer Canoes dock."
  },

  {
    landId: "dl-land-tomorrowland",
    landName: "Tomorrowland",
    park: "Disneyland Park",
    icon: "🚀",
    patronSaint: "Saint Thomas Aquinas & Saint Albert the Great",
    patronRole: "Patron Saints of Scientists, Thinkers, and Future Knowledge",
    feastDay: "January 28 (St. Thomas Aquinas) & November 15 (St. Albert the Great)",
    virtue: "Harmony of Faith and Reason & Cosmic Stewardship",
    spiritualConnection: "Tomorrowland celebrates scientific discovery, space exploration, and futuristic human ingenuity. The Catholic Church has championed astronomy, genetics, and university science for over a thousand years, proving that faith and reason are the two wings upon which the human spirit rises to truth.",
    catecheticalReflection: "Saint Albert the Great and his brilliant pupil Saint Thomas Aquinas taught that studying the laws of nature brings us closer to the Creator. Technological advancement is a wonderful gift when used to heal, protect, and lift up human dignity in service of God's Kingdom.",
    designatedPrayerNook: "Tomorrowland upper concourse walkway overlooking the futuristic fountains."
  },

  {
    landId: "dl-land-galaxys-edge",
    landName: "Star Wars: Galaxy's Edge",
    park: "Disneyland Park",
    icon: "⚔️",
    patronSaint: "Saint Michael the Archangel",
    patronTitle: "Prince of the Heavenly Host & Defender Against Darkness",
    feastDay: "September 29",
    virtue: "Spiritual Warfare, Courage & Victory of the Light",
    spiritualConnection: "The spires of Black Spire Outpost on the planet Batuu feature the epic struggle between the tyrannical First Order and the courageous Resistance—a mythic mirror of the cosmic spiritual battle fought by Saint Michael the Archangel against the forces of darkness.",
    catecheticalReflection: "In Star Wars, the ancient Jedi speak of a spiritual energy that binds all things and the danger of giving into hatred and fear. In Catholic truth, Christ is the Light of the World that no darkness can overcome. Saint Michael stands as our heavenly general in the everyday spiritual battle for truth.",
    designatedPrayerNook: "The secluded stone meditation alcove near the ancient Trandoshan ruins on the path toward Critter Country."
  },

  {
    landId: "dl-land-toontown",
    landName: "Mickey's Toontown",
    park: "Disneyland Park",
    icon: "🎈",
    patronSaint: "Saint Philip Neri",
    patronTitle: "Apostle of Joy, Laughter, and Childlike Innocence",
    feastDay: "May 26",
    virtue: "Christian Joy, Playfulness & Family Warmth",
    spiritualConnection: "Mickey's Toontown is a colorful, animated wonderland where cartoon physics reign and children run free in CenTOONial Park. It honors Saint Philip Neri, the joyful Roman saint known as the 'Third Apostle of Rome,' who used games, humor, and laughter to draw children and families to Christ.",
    catecheticalReflection: "Saint Philip Neri famously said: 'A joyful heart is more easily made perfect than a downcast one.' In a world that often demands children grow up too fast, Toontown reminds Catholic parents of the sacred gift of playful childhood innocence.",
    designatedPrayerNook: "Quiet shaded grass berms along the perimeter of CenTOONial Park."
  },

  // ==========================================
  // Disney California Adventure (DCA) Lands
  // ==========================================
  {
    landId: "dca-land-buena-vista",
    landName: "Buena Vista Street",
    park: "Disney California Adventure",
    icon: "🚋",
    patronSaint: "Saint Junípero Serra",
    patronTitle: "Apostle of California & Founder of the California Missions",
    feastDay: "July 1",
    virtue: "Evangelization, Resilience & California Heritage",
    spiritualConnection: "Buena Vista Street recreates the 1920s Los Angeles where young Walt Disney stepped off the train with $40 and a sketch pad. Over 150 years earlier, Saint Junípero Serra walked the very same California El Camino Real on foot, founding 21 missions and naming cities like Los Angeles (Nuestra Señora de los Ángeles).",
    catecheticalReflection: "Saint Junípero Serra’s personal motto was '¡Siempre adelante, nunca atrás!' (Always forward, never back!). That same frontier tenacity fueled California's artists and pioneers. Buena Vista Street reminds us to enter every new journey with missionary zeal and humble trust in providence.",
    designatedPrayerNook: "The quiet mission-style tile fountain courtyard behind the Carthay Circle Restaurant."
  },

  {
    landId: "dca-land-cars-land",
    landName: "Cars Land",
    park: "Disney California Adventure",
    land: "Cars Land",
    icon: "🏁",
    patronSaint: "Saint Frances of Rome",
    patronTitle: "Patroness of Automobiles, Highways & Motorists",
    feastDay: "March 9",
    virtue: "Neighborly Solidarity, Hospitality & Safe Travels",
    spiritualConnection: "The red-rock grandeur of Ornament Valley along Route 66 celebrates the open American road. Saint Frances of Rome was named patroness of motorists by Pope Pius XI in 1925 because of her legendary guardian angel who guided her every step.",
    catecheticalReflection: "The town of Radiator Springs reminds us of the Christian virtue of slowing down. In our rushed modern lives, we often speed past people who need our friendship. Route 66 roadside grottos and shrines reminded generations of travelers to give thanks for the open road.",
    designatedPrayerNook: "The quiet patio tucked behind the Cozy Cone Motel facing the Cadillac Range."
  },

  {
    landId: "dca-land-grizzly-peak",
    landName: "Grizzly Peak",
    park: "Disney California Adventure",
    icon: "🌲",
    patronSaint: "Saint Francis of Assisi",
    patronTitle: "Patron Saint of Ecology, Animals & California Redwoods",
    feastDay: "October 4",
    virtue: "Care for Creation, Simplicity & Contemplation",
    spiritualConnection: "Towering redwood pines, rushing glacial rivers, and granite peaks recreate California's National Parks. Saint Francis of Assisi (whose name graces the city of San Francisco) celebrated the sacred brotherhood of all creation in his Canticle of the Sun.",
    catecheticalReflection: "In the shade of towering California redwoods, Saint Francis of Assisi invites us to quiet our busy minds. In nature, God's silent presence speaks louder than any theme park music. Pausing to listen to the rushing waterfalls of Grizzly River Run cleanses the soul.",
    designatedPrayerNook: "The Redwood Creek Challenge Trail shaded amphitheater and prayer nooks."
  },

  {
    landId: "dca-land-pixar-pier",
    landName: "Pixar Pier",
    park: "Disney California Adventure",
    icon: "🎡",
    patronSaint: "Saint John Bosco (Don Bosco)",
    patronTitle: "Father and Teacher of Youth & Patron of Carnival Entertainers",
    feastDay: "January 31",
    virtue: "Joyful Mentorship, Playfulness & Family Cheer",
    spiritualConnection: "The classic Victorian seaside amusement boardwalk overlooking Paradise Bay honors Saint John Bosco, who juggled, performed magic tricks, and walked tightropes to gather working-class youth in Turin before teaching them the Catechism and hearing their confessions.",
    catecheticalReflection: "Don Bosco proved that holiness does not require being somber or dour. He taught: 'Run, jump, shout, play, do whatever you like, but do not commit sin.' Pixar Pier celebrates the healthy, innocent laughter that draws families together in shared gratitude.",
    designatedPrayerNook: "Waterfront benches at the edge of Paradise Bay overlooking the Pixar Pal-A-Round."
  },

  {
    landId: "dca-land-avengers-campus",
    landName: "Avengers Campus",
    park: "Disney California Adventure",
    icon: "🛡️",
    patronSaint: "Saint George the Martyr & Saint Joan of Arc",
    patronTitle: "Defenders of the Weak & Heavenly Champions",
    feastDay: "April 23 & May 30",
    virtue: "Sacrificial Courage & Using Gifts in Defense of Others",
    spiritualConnection: "Surrounded by superheroes and high-tech headquarters, Avengers Campus celebrates heroes who stand between innocent people and destructive forces. Saint George and Saint Joan of Arc proved that the greatest superpower on earth is self-sacrificing love.",
    catecheticalReflection: "In 1 John 3:16, scripture teaches: 'By this we know love, that He laid down His life for us, and we ought to lay down our lives for our brothers.' True heroism is never about vanity or physical dominance; it is about using our gifts to defend the vulnerable.",
    designatedPrayerNook: "The shaded garden path tucked behind the Ancient Sanctum of Doctor Strange."
  },

  {
    landId: "dca-land-san-fransokyo",
    landName: "San Fransokyo Square",
    park: "Disney California Adventure",
    icon: "🌉",
    patronSaint: "Saint Peter the Apostle",
    patronTitle: "The Fisherman of Galilee & Rock of the Church",
    feastDay: "June 29",
    virtue: "Hospitality, Cultural Fellowship & Spiritual Nourishment",
    spiritualConnection: "The bustling seaside fishing cannery and bakery district of San Fransokyo Square evokes Saint Peter the Apostle, the fisherman of Galilee whom Jesus called to cast his nets into deep waters to become a fisher of men.",
    catecheticalReflection: "At the seaside, Jesus cooked fish and bread on the shore for His weary apostles after a long night of labor. In San Fransokyo Square, the smell of fresh sourdough bread and warm meals reminds us of the sacred gift of breaking bread together with family and strangers.",
    designatedPrayerNook: "The waterfront observation dock overlooking the bay."
  }
];

var getDisneylandLandPatron = CD.getDisneylandLandPatron = global.getDisneylandLandPatron = function(landNameOrId) {
  if (!landNameOrId) return null;
  const clean = String(landNameOrId).toLowerCase().trim();
  return DISNEYLAND_LAND_PATRONS.find(p => 
    p.landId.toLowerCase() === clean ||
    clean.includes(p.landName.toLowerCase()) ||
    p.landName.toLowerCase().includes(clean)
  );
}

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/data/disneyland-wait-times-data.js
  // ==========================================

  (function() {
// Catholic Disney: Disneyland Resort Wait Times & Crowd Curves Engine
// Historical curves, park metadata, and ride tiers for Disneyland Park & Disney California Adventure

var DISNEYLAND_PARKS_METADATA = CD.DISNEYLAND_PARKS_METADATA = global.DISNEYLAND_PARKS_METADATA = {
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
var DISNEYLAND_HOURLY_CROWD_CURVES = CD.DISNEYLAND_HOURLY_CROWD_CURVES = global.DISNEYLAND_HOURLY_CROWD_CURVES = {
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

var DISNEYLAND_RIDE_TIERS = CD.DISNEYLAND_RIDE_TIERS = global.DISNEYLAND_RIDE_TIERS = {
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

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/resort-switcher.js
  // ==========================================

  (function() {
// Catholic Disney: Resort Switcher Controller
// Toggles between Walt Disney World (Florida) and Disneyland Resort (California)

var RESORTS = CD.RESORTS = global.RESORTS = {
  wdw: {
    id: "wdw",
    name: "Walt Disney World",
    location: "Orlando, Florida",
    icon: "🏰",
    shortName: "Florida (WDW)",
    badge: "🏰 Walt Disney World (FL)",
    defaultLiveParkId: 6,
    parks: [
      { id: 6, name: "Magic Kingdom", icon: "🏰" },
      { id: 5, name: "EPCOT", icon: "🌐" },
      { id: 7, name: "Hollywood Studios", icon: "🎬" },
      { id: 8, name: "Animal Kingdom", icon: "🌳" }
    ],
    lodgingTiers: [
      { id: "wdw-value", label: "Disney Value Family Suites (Art of Animation / All-Star Music for 6)" },
      { id: "wdw-moderate", label: "Disney Moderate (Fort Wilderness Cabins for 6 / Caribbean Beach)" },
      { id: "wdw-deluxe", label: "Disney Deluxe & 1-2 Bedroom Villa Suites" },
      { id: "wdw-off-prop", label: "Off-Property Family Suites (Near Mary Queen of the Universe)" },
      { id: "wdw-tickets-only", label: "Tickets & Planning Only (Lodging already arranged)" }
    ]
  },
  dlr: {
    id: "dlr",
    name: "Disneyland Resort",
    location: "Anaheim, California",
    icon: "🌴",
    shortName: "California (DLR)",
    badge: "🌴 Disneyland Resort (CA)",
    defaultLiveParkId: 16,
    parks: [
      { id: 16, name: "Disneyland Park", icon: "🏰" },
      { id: 17, name: "Disney California Adventure", icon: "🎡" }
    ],
    lodgingTiers: [
      { id: "dlr-good-neighbor", label: "Harbor Blvd Walkable Good Neighbor Family Suites (Direct Walk to Gates)" },
      { id: "dlr-disneyland-hotel", label: "Disneyland Hotel (Classic Disney Nostalgia & Monorail)" },
      { id: "dlr-grand-californian", label: "Disney's Grand Californian Hotel & Spa (Private DCA Park Entrance)" },
      { id: "dlr-pixar-place", label: "Pixar Place Hotel (Modernized Suites overlooking DCA)" },
      { id: "dlr-tickets-only", label: "Tickets & Planning Only (Lodging already arranged)" }
    ]
  }
};

const STORAGE_KEY = 'catholic_disney_resort';
let inMemoryResort = 'wdw';

var getActiveResortId = CD.getActiveResortId = global.getActiveResortId = function() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && RESORTS[stored]) {
      inMemoryResort = stored;
      return stored;
    }
  } catch(e) {}
  return inMemoryResort || 'wdw';
}

var getActiveResort = CD.getActiveResort = global.getActiveResort = function() {
  const id = getActiveResortId();
  return RESORTS[id] || RESORTS.wdw;
}

var setActiveResort = CD.setActiveResort = global.setActiveResort = function(resortId) {
  if (!RESORTS[resortId]) return;
  inMemoryResort = resortId;
  try {
    localStorage.setItem(STORAGE_KEY, resortId);
  } catch(e) {}

  // Apply inlined header/banner visuals synchronously
  if (window.__applyResortVisuals) {
    window.__applyResortVisuals(resortId);
  }

  // Update UI switchers
  renderResortSwitchers();

  // Dispatch custom event to notify all components
  window.dispatchEvent(new CustomEvent('catholic-resort-changed', {
    detail: { resortId, resort: RESORTS[resortId] }
  }));
}

window.__setActiveResort = setActiveResort;
window.selectCatholicResort = (resortId) => {
  setActiveResort(resortId);
};

var initResortSwitcher = CD.initResortSwitcher = global.initResortSwitcher = function() {
  renderResortSwitchers();
}

var renderResortSwitchers = CD.renderResortSwitchers = global.renderResortSwitchers = function() {
  const activeId = getActiveResortId();

  document.querySelectorAll('.resort-switcher-mount').forEach(container => {
    const isDark = container.closest('[style*="1e3a8a"]');
    const wdwBtn = container.querySelector('.resort-btn-wdw');
    const dlrBtn = container.querySelector('.resort-btn-dlr');

    if (wdwBtn && dlrBtn) {
      if (activeId === 'wdw') {
        wdwBtn.style.background = isDark ? '#fbbf24' : '#1a73e8';
        wdwBtn.style.color = isDark ? '#78350f' : '#ffffff';
        wdwBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.25)';

        dlrBtn.style.background = 'transparent';
        dlrBtn.style.color = isDark ? '#ffffff' : '#334155';
        dlrBtn.style.boxShadow = 'none';
      } else {
        dlrBtn.style.background = isDark ? '#fbbf24' : '#1a73e8';
        dlrBtn.style.color = isDark ? '#78350f' : '#ffffff';
        dlrBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.25)';

        wdwBtn.style.background = 'transparent';
        wdwBtn.style.color = isDark ? '#ffffff' : '#334155';
        wdwBtn.style.boxShadow = 'none';
      }
    } else {
      // Fallback injection if mount was empty
      container.innerHTML = `
        <div class="resort-switcher-pill" style="display: inline-flex; background: ${isDark ? 'rgba(255,255,255,0.18)' : '#e2e8f0'}; border-radius: 999px; padding: 4px; gap: 6px; border: 1.5px solid ${isDark ? 'rgba(251, 191, 36, 0.5)' : '#cbd5e1'};">
          <button 
            type="button" 
            class="resort-btn-wdw"
            onclick="window.selectCatholicResort('wdw')" 
            style="border: none; background: ${activeId === 'wdw' ? (isDark ? '#fbbf24' : '#1a73e8') : 'transparent'}; color: ${activeId === 'wdw' ? (isDark ? '#78350f' : '#ffffff') : (isDark ? '#ffffff' : '#334155')}; padding: 7px 16px; border-radius: 999px; font-weight: 800; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 6px; box-shadow: ${activeId === 'wdw' ? '0 2px 8px rgba(0,0,0,0.25)' : 'none'};">
            <span>🏰</span> <span>Florida (WDW)</span>
          </button>
          <button 
            type="button" 
            class="resort-btn-dlr"
            onclick="window.selectCatholicResort('dlr')" 
            style="border: none; background: ${activeId === 'dlr' ? (isDark ? '#fbbf24' : '#1a73e8') : 'transparent'}; color: ${activeId === 'dlr' ? (isDark ? '#78350f' : '#ffffff') : (isDark ? '#ffffff' : '#334155')}; padding: 7px 16px; border-radius: 999px; font-weight: 800; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 6px; box-shadow: ${activeId === 'dlr' ? '0 2px 8px rgba(0,0,0,0.25)' : 'none'};">
            <span>🌴</span> <span>California (DLR)</span>
          </button>
        </div>
      `;
    }
  });

  // Update hero subtext or destination badges if present
  const heroBadge = document.getElementById('hero-resort-badge');
  if (heroBadge) {
    const res = getActiveResort();
    heroBadge.innerHTML = `${res.icon} Currently Viewing: <strong>${res.name} (${res.location})</strong>`;
  }
}

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/wait-time-insights.js
  // ==========================================

  (function() {
// Catholic Disney: Rule-Based Wait Time Analytics & Natural Language Coaching Engine
// Implements the mathematical formulas and rules from CATHOLIC_DISNEY_WAIT_TIMES_SPEC.md




var calculateItineraryProjections = CD.calculateItineraryProjections = global.calculateItineraryProjections = function({ massPresetId, parkId, rideIds, crowdLevelKey }) {
  const allPresets = [...SUNDAY_MASS_PRESETS, ...(DISNEYLAND_SUNDAY_MASS_PRESETS || [])];
  const massPreset = allPresets.find(m => m.id === massPresetId) || allPresets[0];
  const crowdConfig = CROWD_MULTIPLIERS[crowdLevelKey] || CROWD_MULTIPLIERS.moderate;
  const parkHourlyCurve = HOURLY_CROWD_CURVES[parkId] || HOURLY_CROWD_CURVES[6] || {};

  // Arrival hour at the park gates
  const arrivalHour = massPreset.gateArrivalHour;
  const baseAnchorHour = Math.floor(arrivalHour);
  const anchorHourWait = parkHourlyCurve[baseAnchorHour] || parkHourlyCurve[10] || 55;

  const calculatedRides = [];
  let totalPostedWaitMin = 0;

  rideIds.forEach(id => {
    const tierData = RIDE_TIERS[id];
    if (!tierData) return;

    // Mathematical formula from spec:
    // Estimated Wait(t) = W_anchor(t) * R_tier * C_crowd
    const rawCalculated = anchorHourWait * tierData.ratio * crowdConfig.factor;
    const postedWait = Math.max(5, Math.round(rawCalculated / 5) * 5); // Round to nearest 5 mins like Disney does
    
    // TouringPlans In-Park Timer Deflation formula (from 77,700+ timer records):
    // Actual Wait = Posted Wait * 0.72
    const actualWait = Math.max(5, Math.round(postedWait * 0.72));

    totalPostedWaitMin += postedWait;

    // Queue Rosary recommendation for this specific ride
    let rosaryText = "1 Decade (10-15 min)";
    let rosaryDecades = 1;
    if (postedWait >= 70) {
      rosaryText = "Full 5-Decade Rosary or 15-Step Byzantine Rule";
      rosaryDecades = 5;
    } else if (postedWait >= 45) {
      rosaryText = "3 to 4 Decades";
      rosaryDecades = 3;
    } else if (postedWait >= 25) {
      rosaryText = "2 Decades";
      rosaryDecades = 2;
    }

    calculatedRides.push({
      ...tierData,
      postedWait,
      actualWait,
      rosaryText,
      rosaryDecades
    });
  });

  // Sort rides by priority routing recommendation
  calculatedRides.sort((a, b) => {
    // E-tickets with low PPH capacity should be done early or late
    if (a.tier === "E-ANOMALY" && b.tier !== "E-ANOMALY") return -1;
    if (b.tier === "E-ANOMALY" && a.tier !== "E-ANOMALY") return 1;
    return b.postedWait - a.postedWait;
  });

  const totalActualWaitMin = Math.round(totalPostedWaitMin * 0.72);
  const totalPostedHours = (totalPostedWaitMin / 60).toFixed(1);
  const totalActualHours = (totalActualWaitMin / 60).toFixed(1);

  // Generate Natural Language Insights from Spec Section 5.B
  const insights = generateCoachingInsights({
    massPreset,
    arrivalHour,
    totalPostedWaitMin,
    totalActualWaitMin,
    calculatedRides,
    crowdConfig,
    parkId
  });

  return {
    massPreset,
    arrivalHour,
    gateArrivalFormatted: massPreset.gateArrivalFormatted,
    crowdConfig,
    rides: calculatedRides,
    totalPostedWaitMin,
    totalActualWaitMin,
    totalPostedHours,
    totalActualHours,
    insights
  };
}

function generateCoachingInsights({ massPreset, arrivalHour, totalPostedWaitMin, totalActualWaitMin, calculatedRides, crowdConfig, parkId }) {
  const insights = [];

  // 1. Sunday Mass Arrival Timing Insight
  if (arrivalHour >= 10.5 && arrivalHour <= 13.5) {
    insights.push({
      type: "pacing",
      icon: "⏰",
      title: "Midday Post-Mass Arrival Strategy",
      badge: "Arrival Strategy",
      badgeBg: "#e0f2fe",
      badgeColor: "#0369a1",
      text: `Arriving at the gates around ${massPreset.gateArrivalFormatted} places your family right in the midday park surge. E-ticket coasters are already at 75–95 min lines. Start your day with high-capacity classics in Adventureland or Liberty Square (*Pirates*, *Haunted Mansion*) while Fantasyland is bottlenecked. Save *Seven Dwarfs Mine Train* or *Space Mountain* for the evening fireworks lull.`
    });
  } else if (arrivalHour < 9.5) {
    insights.push({
      type: "pacing",
      icon: "🌅",
      title: "Rope Drop Advantage Unlocked!",
      badge: "Peak Lull Advantage",
      badgeBg: "#dcfce7",
      badgeColor: "#15803d",
      text: `By attending early 7:30 AM Mass (or the Saturday Vigil), you arrive at the park by ${massPreset.gateArrivalFormatted}. You will beat 70% of the daily crowd! Head directly to your top E-ticket headliner to walk on before lines double by 11:00 AM.`
    });
  }

  // 2. The "Actual vs Posted" Reality Check (77,700+ In-Park Timer Observation)
  insights.push({
    type: "reality",
    icon: "📊",
    title: "The In-Park Timer Reality Check",
    badge: "28% Real Savings",
    badgeBg: "#fef3c7",
    badgeColor: "#b45309",
    text: `Disney posted boards will tell you that your ${calculatedRides.length} rides total ~${totalPostedWaitMin} minutes (${(totalPostedWaitMin / 60).toFixed(1)} hrs). However, ground-truth in-park timer data proves Disney inflates posted times by 20% to 40%. Your real standby wait will be approximately ~${totalActualWaitMin} minutes (${(totalActualWaitMin / 60).toFixed(1)} hrs)—saving your family over an hour of expected line time!`
  });

  // 3. Lightning Lane Stewardship & Financial ROI Verdict
  if (totalPostedWaitMin >= 200 && crowdConfig.isHoliday) {
    insights.push({
      type: "budget-alert",
      icon: "🚨",
      title: "Lightning Lane Recommended (High Crowd / Holiday)",
      badge: "High Stewardship ROI",
      badgeBg: "#fee2e2",
      badgeColor: "#b91c1c",
      text: `On peak holiday days, your selected wishlist will consume ${totalPostedWaitMin} minutes in lines. For a large family, standing in 4+ hours of queues leads to exhausted, over-stimulated children. Investing in Lightning Lane Multi Pass will reclaim ~3.2 hours of precious family time and peace.`
    });
  } else if (totalPostedWaitMin <= 110 || !crowdConfig.isHoliday) {
    const familySavingsEstimate = 180; // Estimate for family of 5-6 ($30-35/ticket)
    insights.push({
      type: "budget-save",
      icon: "💡",
      title: "Stewardship Tip: Save Your Money (Skip Lightning Lane)",
      badge: `Save ~$${familySavingsEstimate}+ for Family`,
      badgeBg: "#dcfce7",
      badgeColor: "#15803d",
      text: `Your selected rides only total ~${totalActualWaitMin} minutes of real wait. By hitting your top headliner early or during fireworks, you can easily bypass peak lines without spending $150–$250 on Lightning Lane passes. Save that budget for a celebratory sit-down family dinner or your home parish tithe!`
    });
  } else {
    insights.push({
      type: "budget-split",
      icon: "🎯",
      title: "Split Strategy Recommendation",
      badge: "Best Value Balance",
      badgeBg: "#fef3c7",
      badgeColor: "#b45309",
      text: `Consider purchasing a Single Pass only for your top headliner (e.g. *Seven Dwarfs Mine Train* or *Flight of Passage* for ~$12–$15/person), but SKIP the costly Multi Pass bundle. The remaining rides on your list can be completed with minimal waits after 5:00 PM.`
    });
  }

  // 4. Queue Rosary & Prayer Nook Pairing
  const longestRide = calculatedRides.reduce((max, r) => (r.postedWait > max.postedWait ? r : max), calculatedRides[0]);
  if (longestRide && longestRide.postedWait >= 30) {
    insights.push({
      type: "spiritual",
      icon: "📿",
      title: `Queue Rosary Opportunity at ${longestRide.name}`,
      badge: `${longestRide.rosaryDecades} Decades of Grace`,
      badgeBg: "#ede9fe",
      badgeColor: "#6d28d9",
      text: `Your longest wait will be ~${longestRide.postedWait} minutes at ${longestRide.name}. That provides the perfect sacred window to pray ${longestRide.rosaryText} together in line. When midday crowds peak around 2:00 PM, retreat to ${longestRide.nearbyNook} for peaceful shade.`
    });
  }

  return insights;
}

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/wait-time-alerts.js
  // ==========================================

  (function() {
// Catholic Disney: Ride Wait Time Drop Alerts & In-Park Notifications Engine
// Allows pilgrims to set wait time targets (e.g., "Alert me when Space Mountain <= 30 min")
// Triggers audio chimes, mobile vibrations, OS lock-screen notifications, and suggests walking prayer companions.

const ALERTS_STORAGE_KEY = 'catholic_disney_ride_alerts';

var activeAlerts = CD.activeAlerts = global.activeAlerts = [];
var swRegistration = CD.swRegistration = global.swRegistration = null;
let currentModalRide = null;

// Initialize Service Worker and Alert Engine
var initWaitTimeAlerts = CD.initWaitTimeAlerts = global.initWaitTimeAlerts = function() {
  loadAlertsFromStorage();
  initServiceWorker();
  injectAlertModalDOM();
  injectToastContainerDOM();
}

function loadAlertsFromStorage() {
  try {
    const saved = localStorage.getItem(ALERTS_STORAGE_KEY);
    activeAlerts = saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.warn('Failed to load active alerts from localStorage:', e);
    activeAlerts = [];
  }
}

var saveAlertsToStorage = CD.saveAlertsToStorage = global.saveAlertsToStorage = function() {
  try {
    localStorage.setItem(ALERTS_STORAGE_KEY, JSON.stringify(activeAlerts));
  } catch (e) {
    console.warn('Failed to save alerts to localStorage:', e);
  }
}

function initServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  navigator.serviceWorker
    .register('sw.js')
    .then((reg) => {
      swRegistration = reg;
      console.log('Catholic Disney Service Worker registered.');
    })
    .catch((err) => {
      console.warn('Catholic Disney Service Worker registration fallback:', err);
    });

  if (navigator.serviceWorker.ready) {
    navigator.serviceWorker.ready.then((reg) => {
      swRegistration = reg;
    });
  }
}

// Sound Chime generator using Web Audio API (church bell / cheerful harp tone)
var playChimeSound = CD.playChimeSound = global.playChimeSound = function() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;

    // Harmonic bell chord: C5, E5, G5, C6
    const chordFrequencies = [523.25, 659.25, 783.99, 1046.5];

    chordFrequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      gain.gain.setValueAtTime(0, now + idx * 0.1);
      gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.1 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.55);
    });
  } catch (e) {
    console.warn('Chime audio playback prevented:', e);
  }
}

// In-app Toast message
var showToast = CD.showToast = global.showToast = function(title, desc, icon = '🔔', durationMs = 6000) {
  const container = document.getElementById('cdToastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'cd-toast-item';
  toast.innerHTML = `
    <span class="cd-toast-icon">${icon}</span>
    <div class="cd-toast-content">
      <span class="cd-toast-title">${escapeHtml(title)}</span>
      <span class="cd-toast-desc">${escapeHtml(desc)}</span>
    </div>
    <button class="cd-toast-close" aria-label="Dismiss">&times;</button>
  `;

  toast.querySelector('.cd-toast-close').addEventListener('click', () => {
    toast.remove();
  });

  container.appendChild(toast);

  if (durationMs > 0) {
    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }
    }, durationMs);
  }
}

// Request Browser Notification Permission
var requestNotificationPermission = CD.requestNotificationPermission = global.requestNotificationPermission = async function() {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    showToast('Notifications Unavailable', 'This browser does not support web push notifications.', '⚠️');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      sendPushNotification(
        '☩ In-Park Wait Alerts Active!',
        'You will now receive device notifications when wait times drop or rides reopen! ✨'
      );
      return true;
    }
  } catch (e) {
    console.warn('Error requesting notification permission:', e);
  }
  return false;
}

// Dispatches OS / Screen Notification
var sendPushNotification = CD.sendPushNotification = global.sendPushNotification = function(title, body, data = {}) {
  // 1. Play Chime
  playChimeSound();

  // 2. Hardware vibration
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate([350, 150, 350]);
    } catch (e) {}
  }

  // 3. In-App Visual Toast
  showToast(title, body, '🔔', 8000);

  // 4. OS System Lock-Screen Banner
  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
    const options = {
      body: body,
      icon: 'https://emojicdn.elk.sh/☩',
      badge: 'https://emojicdn.elk.sh/🔔',
      vibrate: [350, 150, 350],
      tag: `cd-alert-${Date.now()}`,
      renotify: true,
      requireInteraction: true,
      data: { url: window.location.href, ...data }
    };

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'SHOW_NOTIFICATION',
        title: title,
        options: options
      });
    } else if (swRegistration && swRegistration.showNotification) {
      swRegistration.showNotification(title, options).catch(() => {
        tryDirectNotification(title, options);
      });
    } else {
      tryDirectNotification(title, options);
    }
  }
}

function tryDirectNotification(title, options) {
  try {
    new Notification(title, options);
  } catch (e) {
    console.warn('Direct Notification constructor failed:', e);
  }
}

// Evaluates all live rides against active alerts
var evaluateWaitAlerts = CD.evaluateWaitAlerts = global.evaluateWaitAlerts = function(allRides, parkName = 'Disney Park') {
  if (!activeAlerts || activeAlerts.length === 0 || !allRides || allRides.length === 0) {
    return;
  }

  let stateModified = false;

  activeAlerts.forEach((alert) => {
    if (alert.is_active === false) return;

    const ride = allRides.find((r) =>
      String(r.id) === String(alert.ride_id) ||
      Number(r.id) === Number(alert.ride_id) ||
      (alert.ride_name && r.name && r.name.toLowerCase().trim() === alert.ride_name.toLowerCase().trim())
    );

    if (!ride) return;

    const isOpen = Boolean(ride.is_open);
    const waitTime = Number(ride.wait_time) || 0;
    const targetThreshold = Number(alert.threshold) || 30;

    // Condition A: Wait Time Reached / Dropped
    if (isOpen && waitTime <= targetThreshold) {
      const nowMs = Date.now();
      const lastNotifiedMs = alert.last_notified_at ? new Date(alert.last_notified_at).getTime() : 0;
      const reAlertWindowMs = 6 * 60 * 1000; // 6 mins re-alert interval

      const shouldAlert = !alert.last_notified_at || (nowMs - lastNotifiedMs >= reAlertWindowMs) || (alert.last_notified_wait !== waitTime);

      if (shouldAlert) {
        const prayerSuggestion = waitTime <= 15
          ? 'Walk-on opportunity! Perfect time to walk over with a short prayer of gratitude.'
          : 'Great queue window! Ideal for 1-2 Decades of the Rosary during your walk & wait.';

        sendPushNotification(
          `🔔 Goal Reached: ${ride.name} (${waitTime}m)!`,
          `Standby wait dropped to ${waitTime} min (Goal ≤ ${targetThreshold}m) at ${parkName}! ${prayerSuggestion}`,
          { rideId: ride.id }
        );

        alert.last_notified_wait = waitTime;
        alert.last_notified_at = new Date().toISOString();
        stateModified = true;
      }
    } else if (isOpen && waitTime > targetThreshold) {
      if (alert.last_notified_wait !== null || alert.last_notified_at) {
        alert.last_notified_wait = null;
        alert.last_notified_at = null;
        stateModified = true;
      }
    }

    // Condition B: Ride Reopening from Downtime
    if (alert.notify_reopen && alert.was_down && isOpen) {
      sendPushNotification(
        `✨ Reopened: ${ride.name}!`,
        `${ride.name} is back up with a ${waitTime} min standby wait! Head over now before lines build up.`,
        { rideId: ride.id }
      );
      alert.was_down = false;
      stateModified = true;
    } else if (!isOpen) {
      alert.was_down = true;
    }
  });

  if (stateModified) {
    saveAlertsToStorage();
  }
}

// Injects the alert configuration modal into DOM
function injectAlertModalDOM() {
  if (document.getElementById('cdAlertModal')) return;

  const modalEl = document.createElement('div');
  modalEl.id = 'cdAlertModal';
  modalEl.className = 'cd-modal-overlay hidden';
  modalEl.setAttribute('role', 'dialog');
  modalEl.setAttribute('aria-modal', 'true');
  modalEl.innerHTML = `
    <div class="cd-modal-card">
      <div class="cd-modal-header">
        <div>
          <span class="cd-modal-badge">🔔 IN-PARK WAIT ALERT</span>
          <h3 id="cdModalRideTitle" class="cd-modal-title">Set Wait Alert</h3>
          <p id="cdModalRideMeta" class="cd-modal-meta">Disneyland Resort</p>
        </div>
        <button id="cdCloseAlertModalBtn" class="cd-modal-close-btn" aria-label="Close">&times;</button>
      </div>

      <div class="cd-modal-body">
        <div class="cd-current-wait-box">
          <span class="cd-wait-label">Current Standby Time:</span>
          <span id="cdModalCurrentWaitVal" class="cd-wait-val">-- min</span>
        </div>

        <div class="cd-modal-control-group">
          <label class="cd-modal-input-label">
            Notify me when wait drops to or below:
            <span id="cdThresholdDisplay" class="cd-threshold-badge">30 mins</span>
          </label>
          <input type="range" id="cdThresholdSlider" min="5" max="90" step="5" value="30" class="cd-threshold-slider">
          
          <div class="cd-preset-chips">
            <button type="button" class="cd-preset-chip" data-threshold="15">&le; 15 min (Walk-On)</button>
            <button type="button" class="cd-preset-chip active" data-threshold="30">&le; 30 min</button>
            <button type="button" class="cd-preset-chip" data-threshold="45">&le; 45 min</button>
            <button type="button" class="cd-preset-chip" data-threshold="60">&le; 60 min</button>
          </div>
        </div>

        <div class="cd-modal-toggle-row">
          <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.88rem; color:#1e293b; font-weight:600;">
            <input type="checkbox" id="cdNotifyReopenCheckbox" checked style="width:18px; height:18px; accent-color:#1a73e8;">
            Also notify if ride reopens from downtime
          </label>
        </div>

        <div id="cdPermissionNoticeBox" class="cd-permission-notice hidden">
          <span>🔔 <strong>Device Alerts:</strong> Click "Save Alert" to enable lock-screen notifications and audio chimes on your phone.</span>
        </div>
      </div>

      <div class="cd-modal-footer">
        <button id="cdCancelAlertBtn" class="btn btn-outline" style="font-size:0.88rem; padding:8px 16px;">Cancel</button>
        <button id="cdSaveAlertBtn" class="btn btn-primary" style="font-size:0.88rem; padding:8px 20px;">
          <span>🔔 Save In-Park Alert</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modalEl);

  // Setup listeners
  document.getElementById('cdCloseAlertModalBtn').addEventListener('click', closeAlertModal);
  document.getElementById('cdCancelAlertBtn').addEventListener('click', closeAlertModal);
  document.getElementById('cdSaveAlertBtn').addEventListener('click', saveCurrentModalAlert);

  const slider = document.getElementById('cdThresholdSlider');
  const display = document.getElementById('cdThresholdDisplay');
  if (slider && display) {
    slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      display.textContent = `${val} mins`;
      document.querySelectorAll('.cd-preset-chip').forEach((c) => {
        c.classList.toggle('active', parseInt(c.getAttribute('data-threshold'), 10) === val);
      });
    });
  }

  document.querySelectorAll('.cd-preset-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.cd-preset-chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const val = parseInt(chip.getAttribute('data-threshold'), 10);
      if (slider) slider.value = val;
      if (display) display.textContent = `${val} mins`;
    });
  });
}

function injectToastContainerDOM() {
  if (document.getElementById('cdToastContainer')) return;
  const toastContainer = document.createElement('div');
  toastContainer.id = 'cdToastContainer';
  toastContainer.className = 'cd-toast-container';
  document.body.appendChild(toastContainer);
}

// Opens the Alert modal for a specific ride
var openSetAlertModal = CD.openSetAlertModal = global.openSetAlertModal = function(ride, parkName = 'Disney Park') {
  if (!ride) return;
  currentModalRide = { ...ride, parkName };

  const modal = document.getElementById('cdAlertModal');
  const titleEl = document.getElementById('cdModalRideTitle');
  const metaEl = document.getElementById('cdModalRideMeta');
  const waitValEl = document.getElementById('cdModalCurrentWaitVal');
  const slider = document.getElementById('cdThresholdSlider');
  const display = document.getElementById('cdThresholdDisplay');
  const reopenCb = document.getElementById('cdNotifyReopenCheckbox');
  const noticeBox = document.getElementById('cdPermissionNoticeBox');

  if (titleEl) titleEl.textContent = ride.name;
  if (metaEl) metaEl.textContent = `🏰 ${parkName} • ${ride.landName || 'Attraction'}`;

  if (waitValEl) {
    if (ride.is_open) {
      waitValEl.textContent = `${ride.wait_time} min standby`;
      waitValEl.style.color = ride.wait_time <= 25 ? '#166534' : '#1a73e8';
    } else {
      waitValEl.textContent = 'Closed (Downtime)';
      waitValEl.style.color = '#dc2626';
    }
  }

  const existingAlert = activeAlerts.find((a) => String(a.ride_id) === String(ride.id) || Number(a.ride_id) === Number(ride.id));
  const defaultThreshold = existingAlert ? existingAlert.threshold : (ride.wait_time > 30 ? Math.min(60, Math.floor(ride.wait_time / 10) * 10 - 10) : 25);
  const finalThreshold = Math.max(5, defaultThreshold || 30);

  if (slider) slider.value = finalThreshold;
  if (display) display.textContent = `${finalThreshold} mins`;
  if (reopenCb) reopenCb.checked = existingAlert ? existingAlert.notify_reopen !== false : true;

  document.querySelectorAll('.cd-preset-chip').forEach((chip) => {
    chip.classList.toggle('active', parseInt(chip.getAttribute('data-threshold'), 10) === finalThreshold);
  });

  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission !== 'granted') {
    if (noticeBox) noticeBox.classList.remove('hidden');
  } else {
    if (noticeBox) noticeBox.classList.add('hidden');
  }

  if (modal) modal.classList.remove('hidden');
}

var closeAlertModal = CD.closeAlertModal = global.closeAlertModal = function() {
  const modal = document.getElementById('cdAlertModal');
  if (modal) modal.classList.add('hidden');
  currentModalRide = null;
}

async function saveCurrentModalAlert() {
  if (!currentModalRide) return;

  const slider = document.getElementById('cdThresholdSlider');
  const reopenCb = document.getElementById('cdNotifyReopenCheckbox');
  const threshold = slider ? parseInt(slider.value, 10) : 30;
  const notifyReopen = reopenCb ? reopenCb.checked : true;

  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
    await requestNotificationPermission();
  }

  const existingIdx = activeAlerts.findIndex((a) => String(a.ride_id) === String(currentModalRide.id) || Number(a.ride_id) === Number(currentModalRide.id));

  const newAlert = {
    id: existingIdx >= 0 ? activeAlerts[existingIdx].id : `cd_alert_${Date.now()}`,
    ride_id: currentModalRide.id,
    ride_name: currentModalRide.name,
    park_name: currentModalRide.parkName || 'Disney Park',
    land_name: currentModalRide.landName || 'Attraction',
    threshold: threshold,
    notify_reopen: notifyReopen,
    is_active: true,
    last_notified_wait: null,
    was_down: !currentModalRide.is_open,
    created_at: new Date().toISOString()
  };

  if (existingIdx >= 0) {
    activeAlerts[existingIdx] = newAlert;
  } else {
    activeAlerts.push(newAlert);
  }

  saveAlertsToStorage();
  closeAlertModal();

  showToast(
    `🔔 Alert Set for ${currentModalRide.name}`,
    `You'll be alerted when wait drops to ≤ ${threshold} min${notifyReopen ? ' or reopens' : ''}!`,
    '✅'
  );
  playChimeSound();

  // Re-render live board so alert badges update
  if (typeof window !== 'undefined' && window.renderLiveWaitTimes) {
    window.renderLiveWaitTimes();
  }
}

var deleteAlert = CD.deleteAlert = global.deleteAlert = function(alertId) {
  activeAlerts = activeAlerts.filter((a) => a.id !== alertId);
  saveAlertsToStorage();
  showToast('Alert Removed', 'You will no longer receive alerts for this attraction.', 'ℹ️');
  if (typeof window !== 'undefined' && window.renderLiveWaitTimes) {
    window.renderLiveWaitTimes();
  }
}

// Generates HTML for the Goal Reached strip at the top of the wait times board
var getTriggeredAlertsBannerHTML = CD.getTriggeredAlertsBannerHTML = global.getTriggeredAlertsBannerHTML = function(allRides) {
  if (!activeAlerts || activeAlerts.length === 0 || !allRides || allRides.length === 0) {
    return '';
  }

  const triggered = [];

  activeAlerts.forEach((alert) => {
    if (!alert.is_active) return;
    const ride = allRides.find((r) =>
      String(r.id) === String(alert.ride_id) ||
      Number(r.id) === Number(alert.ride_id) ||
      (alert.ride_name && r.name && r.name.toLowerCase().trim() === alert.ride_name.toLowerCase().trim())
    );

    if (ride && ride.is_open && Number(ride.wait_time) <= Number(alert.threshold)) {
      triggered.push({
        alert,
        ride,
        waitTime: Number(ride.wait_time)
      });
    }
  });

  if (triggered.length === 0) return '';

  return `
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border: 1.5px solid #86efac; border-radius: 16px; padding: 14px 18px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(22, 101, 52, 0.08);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.4rem;">🎯</span>
          <div>
            <h4 style="margin: 0; font-size: 1rem; font-weight: 800; color: #166534;">
              Goal Reached! Walk-On &amp; Queue Prayer Opportunities (${triggered.length})
            </h4>
            <p style="margin: 2px 0 0; font-size: 0.8rem; color: #15803d;">
              Standby wait times have dropped into your target window. Perfect time to walk over!
            </p>
          </div>
        </div>
        <button class="btn btn-sm btn-sun" onclick="window.testDeviceAlertChime()" style="font-size: 0.78rem; padding: 4px 10px;">
          🔔 Test Chime &amp; Push
        </button>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;">
        ${triggered.map(t => `
          <div style="background: #ffffff; border: 1px solid #86efac; border-radius: 10px; padding: 6px 12px; display: inline-flex; align-items: center; gap: 8px; font-size: 0.84rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
            <span style="font-weight: 800; color: #0f172a;">🎢 ${escapeHtml(t.ride.name)}</span>
            <span style="background: #dcfce7; color: #166534; font-weight: 800; padding: 2px 8px; border-radius: 999px; font-size: 0.76rem;">
              ${t.waitTime}m (Goal &le;${t.alert.threshold}m)
            </span>
            <button onclick="window.deleteActiveAlert('${t.alert.id}')" title="Dismiss Alert" style="background:none; border:none; color:#94a3b8; font-size:1.1rem; cursor:pointer; padding:0 2px; line-height:1;">&times;</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Global Window Helpers
if (typeof window !== 'undefined') {
  window.openSetAlertModal = (rideJsonStr, parkName) => {
    try {
      const ride = typeof rideJsonStr === 'string' ? JSON.parse(decodeURIComponent(rideJsonStr)) : rideJsonStr;
      openSetAlertModal(ride, parkName);
    } catch (e) {
      console.warn('Failed to parse ride data for alert modal:', e);
    }
  };

  window.deleteActiveAlert = (alertId) => {
    deleteAlert(alertId);
  };

  window.testDeviceAlertChime = async () => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      await requestNotificationPermission();
    }
    sendPushNotification(
      '☩ Catholic Disney In-Park Alert Test',
      'Harmonic chime, haptic vibration, and lock-screen alerts are working! You will be alerted when wait times drop. ✨'
    );
  };
}

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/wait-times-hub.js
  // ==========================================

  (function() {
// Catholic Disney: Wait Time Analytics & Itinerary Integration Hub
// Implements CATHOLIC_DISNEY_WAIT_TIMES_SPEC.md







let selectedMassId = "mary-queen-730";
let selectedParkId = 6; // Magic Kingdom default
let selectedCrowdKey = "moderate";
let selectedDateStr = "2026-08-01"; // Default to August 1st to demonstrate exact calendar intelligence!
let selectedRideIds = [129, 136, 140, 131]; // Default Magic Kingdom classics: Seven Dwarfs, Peter Pan, Haunted Mansion, Buzz Lightyear

var initWaitTimesHub = CD.initWaitTimesHub = global.initWaitTimesHub = function() {
  const container = document.getElementById('wait-times-container');
  if (!container) return;

  renderWaitTimesHub();

  window.renderWaitTimesHub = renderWaitTimesHub;
  window.__getWaitTimesState = () => ({ selectedParkId, selectedMassId, isDlr: getActiveResortId() === 'dlr' });

  window.addEventListener('catholic-resort-changed', (e) => {
    const resortId = (e && e.detail && (e.detail.resortId || (e.detail.resort && e.detail.resort.id))) || getActiveResortId();
    console.log("WAIT-TIMES-HUB RECEIVED RESORT CHANGE:", resortId);
    const isDlr = resortId === 'dlr';
    if (isDlr) {
      selectedParkId = 16;
      selectedMassId = "boniface-630";
    } else {
      selectedParkId = 6;
      selectedMassId = "mary-queen-730";
    }
    selectedRideIds = [];
    renderWaitTimesHub();
  });
}

function renderWaitTimesHub() {
  const container = document.getElementById('wait-times-container');
  if (!container) return;

  const isDlr = (selectedParkId === 16 || selectedParkId === 17) || getActiveResortId() === 'dlr';
  const activeMassPresets = isDlr ? DISNEYLAND_SUNDAY_MASS_PRESETS : SUNDAY_MASS_PRESETS;
  const activeParks = isDlr 
    ? [
        { id: 16, icon: "🏰", name: "Disneyland Park" },
        { id: 17, icon: "🎡", name: "Disney California Adv." }
      ]
    : [
        { id: 6, icon: "🏰", name: "Magic Kingdom" },
        { id: 5, icon: "🌐", name: "EPCOT" },
        { id: 7, icon: "🎬", name: "Hollywood Studios" },
        { id: 8, icon: "🌳", name: "Animal Kingdom" }
      ];

  if (isDlr && (selectedParkId !== 16 && selectedParkId !== 17)) {
    selectedParkId = 16;
  } else if (!isDlr && (selectedParkId === 16 || selectedParkId === 17)) {
    selectedParkId = 6;
  }

  if (!activeMassPresets.some(m => m.id === selectedMassId)) {
    selectedMassId = activeMassPresets[0].id;
  }

  // Filter available rides for selected park
  const parkRides = Object.values(RIDE_TIERS).filter(r => r.parkId === selectedParkId);

  // Validate selected ride IDs belong to current park
  const validSelectedRides = selectedRideIds.filter(id => RIDE_TIERS[id] && RIDE_TIERS[id].parkId === selectedParkId);
  if (validSelectedRides.length === 0 && parkRides.length > 0) {
    // Pick top 4 default rides for this park
    selectedRideIds = parkRides.slice(0, 4).map(r => r.id);
  }

  // Calculate mathematical projections
  const projections = calculateItineraryProjections({
    massPresetId: selectedMassId,
    parkId: selectedParkId,
    rideIds: selectedRideIds,
    crowdLevelKey: selectedCrowdKey
  });

  const currentPark = PARKS_METADATA[selectedParkId] || PARKS_METADATA[isDlr ? 16 : 6];
  const hourlyData = HOURLY_CROWD_CURVES[selectedParkId] || HOURLY_CROWD_CURVES[isDlr ? 16 : 6] || {};

  const curDateObj = selectedDateStr ? new Date(selectedDateStr + 'T00:00:00') : new Date();
  const dateCrowd = getCrowdForDate(curDateObj);
  const formattedSelectedDate = curDateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  container.innerHTML = `
    <div class="crowd-planner-engine">
      <!-- Embedded Component Styles -->
      <style>
        .crowd-planner-engine {
          font-family: var(--font-body, 'Inter', sans-serif);
          color: #0f172a;
        }
        .planner-hero-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 10px 25px -3px rgba(15, 23, 42, 0.06);
          margin-bottom: 24px;
        }
        .config-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 24px;
          margin-bottom: 24px;
        }
        .config-block {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 18px;
        }
        .config-label {
          font-weight: 800;
          font-size: 0.92rem;
          color: #1e293b;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .park-tab-pill {
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .park-tab-pill.active {
          background: #1a73e8;
          color: #ffffff;
          border-color: #1a73e8;
          box-shadow: 0 2px 8px rgba(26, 115, 232, 0.3);
        }
        .rides-checkbox-container {
          max-height: 180px;
          overflow-y: auto;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ride-checkbox-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #334155;
          padding: 6px 8px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .ride-checkbox-item:hover {
          background: #f1f5f9;
        }
        .ride-checkbox-item.checked {
          background: #eff6ff;
          color: #1a73e8;
        }
        .analytics-hero-banner {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          color: #ffffff;
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .stat-card-group {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .stat-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 18px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
        }
        .results-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin: 24px 0;
        }
        .result-metric-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
          text-align: center;
        }
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 18px;
          margin: 24px 0;
        }
        .insight-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 22px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .breakdown-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          margin-top: 14px;
        }
        .breakdown-table th {
          background: #f1f5f9;
          padding: 10px 14px;
          text-align: left;
          font-size: 0.8rem;
          color: #475569;
          font-weight: 800;
          border-bottom: 2px solid #e2e8f0;
        }
        .breakdown-table td {
          padding: 12px 14px;
          border-bottom: 1px solid #f1f5f9;
        }
        @media (max-width: 768px) {
          .planner-hero-card {
            padding: 20px 16px;
          }
          .breakdown-table th, .breakdown-table td {
            padding: 8px 10px;
          }
        }
      </style>

      <!-- Control Card -->
      <div class="planner-hero-card">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
          <div>
            <span style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #1a73e8; background: #e0f2fe; padding: 4px 10px; border-radius: 999px;">
              📊 Modern 5-Year Data Engine (175k Observations)
            </span>
            <h3 style="font-size: 1.6rem; color: #0f172a; margin: 8px 0 2px; font-weight: 800;">
              Catholic Disney Family Crowd &amp; Wait Time Calculator
            </h3>
            <p style="font-size: 0.95rem; color: #475569; margin-bottom: 0;">
              Harmonize Sunday Mass obligations, real-world queue deflation (0.72 factor), and financial stewardship for your family.
            </p>
          </div>

          <button class="btn btn-sun" onclick="window.navigateToTab('rosary-tab')" style="font-size: 0.92rem; padding: 10px 18px;">
            Open Queue Rosary 📿
          </button>
        </div>

        <!-- Clear 3-Step Quick Guide -->
        <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 14px; padding: 14px 18px; margin-top: 18px; margin-bottom: 8px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <span style="font-size: 1.6rem;">💡</span>
          <div style="font-size: 0.88rem; color: #1e40af; line-height: 1.5;">
            <strong>How to Use This in 3 Simple Steps:</strong><br>
            <strong>Step 1:</strong> Select your Sunday Mass time (or choose "Skip Mass" for weekday touring) ➔ 
            <strong>Step 2:</strong> Choose your Park and Date to load historical crowd levels ➔ 
            <strong>Step 3:</strong> Check off the rides your family wants to do. The engine instantly reveals your post-Mass arrival time, true in-park wait times, and whether Lightning Lane is worth your money!
          </div>
        </div>

        <!-- 3-Step Config Grid -->
        <div class="config-grid">
          <!-- Step 1: Sunday Mass Picker -->
          <div class="config-block">
            <div class="config-label">
              <span>⛪ Step 1: Sunday Mass Schedule</span>
            </div>
            <select class="form-select" id="mass-schedule-select" onchange="window.handleMassChange(this.value)" style="background: #ffffff; border-radius: 10px; font-weight: 600;">
              ${activeMassPresets.map(m => `
                <option value="${m.id}" ${m.id === selectedMassId ? 'selected' : ''}>
                  ${m.name}
                </option>
              `).join('')}
            </select>
            <div style="font-size: 0.8rem; color: #64748b; margin-top: 8px; line-height: 1.35;">
              ⏱️ <strong>Buffer:</strong> ${projections.massPreset.massDurationMin}m Mass + ${projections.massPreset.transitBufferMin}m parking/TTC/monorail ➔ <strong>Gate Arrival: ${projections.massPreset.gateArrivalFormatted}</strong>
            </div>
          </div>

          <!-- Step 2: Park & Calendar Date -->
          <div class="config-block">
            <div class="config-label">
              <span>🏰 Step 2: Park &amp; Calendar Date</span>
            </div>
            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px;">
              ${activeParks.map(p => `
                <button class="park-tab-pill ${p.id === selectedParkId ? 'active' : ''}" onclick="window.handleParkChange(${p.id})">
                  ${p.icon} ${p.name}
                </button>
              `).join('')}
            </div>

            <!-- Specific Calendar Date Input -->
            <div style="margin-bottom: 8px;">
              <label style="font-size: 0.78rem; font-weight: 700; color: #475569; display: block; margin-bottom: 3px;">
                📅 Select Exact Calendar Date (366-Day History):
              </label>
              <input type="date" class="form-input" id="crowd-calendar-date" value="${selectedDateStr}" onchange="window.handleDateChange(this.value)" style="padding: 6px 10px; font-size: 0.88rem; font-weight: 700; background: #ffffff; border-radius: 8px; border: 1.5px solid #cbd5e1; width: 100%;">
            </div>

            <!-- Historical Date Intelligence Callout -->
            <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 10px; padding: 10px 12px; margin-bottom: 10px; font-size: 0.79rem; color: #166534; line-height: 1.45;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <strong>📅 ${formattedSelectedDate}:</strong>
                <span style="background: #dcfce7; color: #15803d; font-weight: 800; font-size: 0.72rem; padding: 2px 7px; border-radius: 999px;">
                  Level ${dateCrowd.crowdLevel}/10 (${dateCrowd.crowdTier})
                </span>
              </div>
              <div>
                ⏱️ Historical Average Wait: <strong>${dateCrowd.avgWaitMin} min</strong> (Peak: ${dateCrowd.peakWaitMin}m)<br>
                ☀️ Historical Weather: High <strong>${dateCrowd.weatherHigh}°F</strong> / Low ${dateCrowd.weatherLow}°F<br>
                ${dateCrowd.schoolOut ? '🏖️ <strong>Peak Vacation (Schools Out)</strong>' : '🎒 <strong>Normal School Session</strong>'} • Season: <em>${dateCrowd.season}</em>
              </div>
            </div>

            <select class="form-select" id="crowd-level-select" onchange="window.handleCrowdChange(this.value)" style="background: #ffffff; border-radius: 10px; font-weight: 600;">
              ${Object.values(CROWD_MULTIPLIERS).map(c => `
                <option value="${c.id}" ${c.id === selectedCrowdKey ? 'selected' : ''}>
                  Manual Override: ${c.label}
                </option>
              `).join('')}
            </select>
          </div>

          <!-- Step 3: Must-Do Family Wishlist -->
          <div class="config-block">
            <div class="config-label">
              <span>🎢 Step 3: Must-Do Wishlist (${selectedRideIds.length} Selected)</span>
            </div>
            <div class="rides-checkbox-container">
              ${parkRides.map(r => {
                const isChecked = selectedRideIds.includes(r.id);
                return `
                  <label class="ride-checkbox-item ${isChecked ? 'checked' : ''}">
                    <input type="checkbox" value="${r.id}" ${isChecked ? 'checked' : ''} onchange="window.handleRideToggle(${r.id})" style="accent-color: #1a73e8;">
                    <span style="flex: 1;">${r.name}</span>
                    <span style="font-size: 0.72rem; background: #e2e8f0; padding: 2px 6px; border-radius: 4px; color: #475569;">
                      Tier ${r.tier}
                    </span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="results-summary-grid">
          <div class="result-metric-card">
            <span style="font-size: 0.8rem; font-weight: 700; color: #64748b; text-transform: uppercase;">Post-Mass Gate Arrival</span>
            <div style="font-size: 1.8rem; font-weight: 900; color: #0284c7; margin: 4px 0;">
              ${projections.gateArrivalFormatted}
            </div>
            <span style="font-size: 0.78rem; color: #64748b;">Includes 45m TTC Transit Buffer</span>
          </div>

          <div class="result-metric-card">
            <span style="font-size: 0.8rem; font-weight: 700; color: #64748b; text-transform: uppercase;">Disney Posted Wait Sum</span>
            <div style="font-size: 1.8rem; font-weight: 900; color: #dc2626; margin: 4px 0;">
              ${projections.totalPostedWaitMin}m
            </div>
            <span style="font-size: 0.78rem; color: #64748b;">${projections.totalPostedHours} hrs on Disney App Boards</span>
          </div>

          <div class="result-metric-card" style="border: 2px solid #10b981; background: #f0fdf4;">
            <span style="font-size: 0.8rem; font-weight: 800; color: #15803d; text-transform: uppercase;">Real Actual Standby Time</span>
            <div style="font-size: 1.8rem; font-weight: 900; color: #16a34a; margin: 4px 0;">
              ~${projections.totalActualWaitMin}m
            </div>
            <span style="font-size: 0.78rem; font-weight: 700; color: #15803d;">~${projections.totalActualHours} hrs (0.72 Deflation Reality)</span>
          </div>

          <div class="result-metric-card" style="border: 2px solid #f59e0b; background: #fffbeb;">
            <span style="font-size: 0.8rem; font-weight: 800; color: #b45309; text-transform: uppercase;">Time Saved via Reality</span>
            <div style="font-size: 1.8rem; font-weight: 900; color: #d97706; margin: 4px 0;">
              -${projections.totalPostedWaitMin - projections.totalActualWaitMin}m
            </div>
            <span style="font-size: 0.78rem; font-weight: 700; color: #b45309;">Over 1 Hour Less Than Posted!</span>
          </div>
        </div>

        <!-- Natural Language Rule-Based Coaching Cards -->
        <h4 style="font-size: 1.3rem; color: #0f172a; margin: 28px 0 14px; font-weight: 800;">
          💡 Strategic Catholic Family Coaching Insights
        </h4>

        <div class="insights-grid">
          ${projections.insights.map(ins => `
            <div class="insight-card">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <span style="font-size: 1.5rem;">${ins.icon}</span>
                  <span style="font-size: 0.78rem; font-weight: 800; background: ${ins.badgeBg}; color: ${ins.badgeColor}; padding: 4px 10px; border-radius: 999px;">
                    ${ins.badge}
                  </span>
                </div>
                <strong style="font-size: 1.1rem; color: #0f172a; display: block; margin-bottom: 8px;">
                  ${ins.title}
                </strong>
                <p style="font-size: 0.92rem; color: #475569; line-height: 1.5; margin-bottom: 0;">
                  ${ins.text}
                </p>
              </div>

              ${ins.type === 'spiritual' ? `
                <div style="margin-top: 14px; padding-top: 12px; border-top: 1px dashed #e2e8f0;">
                  <button class="btn btn-sun" onclick="window.navigateToTab('rosary-tab')" style="width: 100%; font-size: 0.88rem;">
                    Launch Queue Rosary in Line 📿
                  </button>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>

        <!-- Wishlist Attraction Breakdown Table -->
        <h4 style="font-size: 1.25rem; color: #0f172a; margin: 30px 0 12px; font-weight: 800;">
          📋 Wishlist Time Breakdown &amp; Queue Rosary Pairing
        </h4>

        <div style="overflow-x: auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px;">
          <table class="breakdown-table">
            <thead>
              <tr>
                <th>Attraction</th>
                <th>Tier / Ratio</th>
                <th>Disney Posted</th>
                <th>Real Actual Wait</th>
                <th>Queue Rosary Devotion</th>
                <th>Nearby Sanctuary</th>
              </tr>
            </thead>
            <tbody>
              ${projections.rides.map(r => `
                <tr>
                  <td>
                    <strong>${r.name}</strong>
                    <div style="font-size: 0.75rem; color: #64748b;">${r.land}</div>
                  </td>
                  <td>
                    <span style="font-weight: 700; color: #1e40af;">Tier ${r.tier}</span>
                    <div style="font-size: 0.72rem; color: #64748b;">${r.ratio}x anchor</div>
                  </td>
                  <td>
                    <span style="color: #dc2626; font-weight: 800;">${r.postedWait} min</span>
                  </td>
                  <td>
                    <span style="color: #16a34a; font-weight: 800; background: #f0fdf4; padding: 2px 8px; border-radius: 6px;">
                      ~${r.actualWait} min
                    </span>
                  </td>
                  <td>
                    <span style="color: #6d28d9; font-weight: 700; font-size: 0.85rem;">
                      📿 ${r.rosaryText}
                    </span>
                  </td>
                  <td>
                    <span style="font-size: 0.82rem; color: #475569;">
                      🕊️ ${r.nearbyNook}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Hourly Curve Visualizer -->
        <div style="margin-top: 36px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
            <h4 style="font-size: 1.15rem; color: #0f172a; margin-bottom: 0;">
              📈 Full Hourly Baseline Curve: <span style="color: #1a73e8;">${currentPark.name}</span>
            </h4>
            <span style="font-size: 0.82rem; color: #64748b;">
              891,000+ Historical TouringPlans Observations
            </span>
          </div>

          <div style="width: 100%; overflow-x: auto;">
            <svg viewBox="0 0 900 180" style="width: 100%; height: auto; min-width: 600px; display: block;">
              <defs>
                <linearGradient id="barGradGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#34d399" />
                  <stop offset="100%" stop-color="#059669" />
                </linearGradient>
                <linearGradient id="barGradAmber" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#fbbf24" />
                  <stop offset="100%" stop-color="#d97706" />
                </linearGradient>
                <linearGradient id="barGradRed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#f87171" />
                  <stop offset="100%" stop-color="#dc2626" />
                </linearGradient>
                <linearGradient id="barGradBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#60a5fa" />
                  <stop offset="100%" stop-color="#2563eb" />
                </linearGradient>
              </defs>

              <line x1="30" y1="150" x2="880" y2="150" stroke="#cbd5e1" stroke-width="1.5" />

              ${[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((hour, idx) => {
                const wait = hourlyData[hour] || 25;
                const xPos = 50 + idx * 56;
                const barHeight = Math.min(125, Math.max(16, Math.round((wait / 85) * 125)));
                const yPos = 150 - barHeight;

                let grad = "url(#barGradGreen)";
                if (wait >= 50) grad = "url(#barGradRed)";
                else if (wait >= 35) grad = "url(#barGradAmber)";
                else if (hour >= 20) grad = "url(#barGradBlue)";

                const isArrivalHour = Math.floor(projections.arrivalHour) === hour;
                const labelHour = hour > 12 ? `${hour - 12} PM` : hour === 12 ? '12 PM' : `${hour} AM`;

                return `
                  <g>
                    <rect x="${xPos}" y="${yPos}" width="36" height="${barHeight}" rx="5" fill="${grad}" ${isArrivalHour ? 'stroke="#0f172a" stroke-width="2.5"' : ''} />
                    <text x="${xPos + 18}" y="${yPos - 5}" font-size="10.5" font-weight="700" fill="#334155" text-anchor="middle">
                      ${Math.round(wait)}m
                    </text>
                    <text x="${xPos + 18}" y="168" font-size="10.5" font-weight="${isArrivalHour ? '800' : '600'}" fill="${isArrivalHour ? '#0284c7' : '#64748b'}" text-anchor="middle">
                      ${labelHour}
                    </text>
                    ${isArrivalHour ? `
                      <text x="${xPos + 18}" y="${yPos - 18}" font-size="11" font-weight="800" fill="#0284c7" text-anchor="middle">
                        Gate ➔
                      </text>
                    ` : ''}
                  </g>
                `;
              }).join('')}
            </svg>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Interactive Event Handlers
window.handleMassChange = (massId) => {
  selectedMassId = massId;
  renderWaitTimesHub();
};

window.handleParkChange = (parkId) => {
  selectedParkId = parkId;
  // Pre-select top 4 rides for the new park
  const parkRides = Object.values(RIDE_TIERS).filter(r => r.parkId === parkId);
  selectedRideIds = parkRides.slice(0, 4).map(r => r.id);
  renderWaitTimesHub();
};

window.handleCrowdChange = (crowdKey) => {
  selectedCrowdKey = crowdKey;
  renderWaitTimesHub();
};

window.handleRideToggle = (rideId) => {
  const numId = parseInt(rideId, 10);
  if (selectedRideIds.includes(numId)) {
    // Keep at least 1 ride selected
    if (selectedRideIds.length > 1) {
      selectedRideIds = selectedRideIds.filter(id => id !== numId);
    }
  } else {
    selectedRideIds.push(numId);
  }
  renderWaitTimesHub();
};

window.handleDateChange = (dateStr) => {
  selectedDateStr = dateStr;
  const d = new Date(dateStr + 'T00:00:00');
  const c = getCrowdForDate(d);
  if (c.crowdLevel >= 7) {
    selectedCrowdKey = "peak";
  } else if (c.crowdLevel <= 3) {
    selectedCrowdKey = "low";
  } else {
    selectedCrowdKey = "moderate";
  }
  renderWaitTimesHub();
};

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/live-wait-times.js
  // ==========================================

  (function() {
// Catholic Disney: Live Park Wait Times Board
// Fetches real-time queue times from Queue-Times API (proxied via /api/queue-times/:park_id)
// Matches attractions with tier classifications, 0.72 deflated real waits, Catholic prayer nooks, and In-Park Drop Alerts







function getLiveParks() {
  return getActiveResort().parks;
}

let activeLiveParkId = getActiveResort().defaultLiveParkId;
let liveDataCache = {};
let isLoading = false;
let searchQuery = "";
let statusFilter = "all"; // 'all', 'open', 'low'
let autoPollInterval = null;

var initLiveWaitTimes = CD.initLiveWaitTimes = global.initLiveWaitTimes = function(containerId = 'live-wait-times-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  initWaitTimeAlerts();

  activeLiveParkId = getActiveResort().defaultLiveParkId;
  renderLiveWaitTimes(containerId);
  loadParkWaitTimes(activeLiveParkId, containerId);

  window.addEventListener('catholic-resort-changed', (e) => {
    const res = (e && e.detail && e.detail.resort) || getActiveResort();
    activeLiveParkId = res ? res.defaultLiveParkId : 16;
    loadParkWaitTimes(activeLiveParkId, containerId);
  });

  // Background auto-refresh polling every 90 seconds while tab is active in-park
  if (!autoPollInterval) {
    autoPollInterval = setInterval(() => {
      const waitTimesTab = document.getElementById('wait-times-tab');
      if (waitTimesTab && !waitTimesTab.classList.contains('hidden') && !isLoading) {
        loadParkWaitTimes(activeLiveParkId, containerId, true);
      }
    }, 90000);
  }
}

var loadParkWaitTimes = CD.loadParkWaitTimes = global.loadParkWaitTimes = async function(parkId, containerId = 'live-wait-times-container', isSilent = false) {
  if (!isSilent) {
    isLoading = true;
    renderLiveWaitTimes(containerId);
  }
  activeLiveParkId = parkId;

  try {
    const targetUrl = `/api/queue-times/${parkId}`;
    const resp = await fetch(targetUrl);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    liveDataCache[parkId] = {
      timestamp: new Date(),
      data: data
    };

    // Extract all rides for evaluating active alerts
    let parkRides = [];
    if (data && data.lands) {
      data.lands.forEach(land => {
        if (land.rides) {
          land.rides.forEach(r => {
            parkRides.push({ ...r, landName: land.name });
          });
        }
      });
    }

    const currentPark = getLiveParks().find(p => p.id === parkId) || { name: 'Disney Park' };
    evaluateWaitAlerts(parkRides, currentPark.name);

  } catch (err) {
    console.error("Failed to load live wait times:", err);
    if (!liveDataCache[parkId]) {
      liveDataCache[parkId] = {
        timestamp: new Date(),
        error: "Unable to retrieve live wait times from queue servers. Please try again shortly."
      };
    }
  } finally {
    isLoading = false;
    renderLiveWaitTimes(containerId);
  }
}

var renderLiveWaitTimes = CD.renderLiveWaitTimes = global.renderLiveWaitTimes = function(containerId = 'live-wait-times-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const parksList = getLiveParks();
  const currentPark = parksList.find(p => p.id === activeLiveParkId) || parksList[0];
  if (currentPark && activeLiveParkId !== currentPark.id) {
    activeLiveParkId = currentPark.id;
  }
  const cached = liveDataCache[activeLiveParkId];
  const lastUpdated = cached && cached.timestamp ? cached.timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) : null;

  let allRides = [];
  let lands = [];

  if (cached && cached.data && cached.data.lands) {
    lands = cached.data.lands;
    cached.data.lands.forEach(land => {
      if (land.rides) {
        land.rides.forEach(r => {
          allRides.push({
            ...r,
            landName: land.name
          });
        });
      }
    });
  }

  // Filter rides
  const filteredRides = allRides.filter(r => {
    const matchesSearch = !searchQuery || r.name.toLowerCase().includes(searchQuery.toLowerCase()) || (r.landName && r.landName.toLowerCase().includes(searchQuery.toLowerCase()));
    if (!matchesSearch) return false;
    if (statusFilter === 'open') return r.is_open;
    if (statusFilter === 'low') return r.is_open && r.wait_time <= 25;
    return true;
  });

  const openCount = allRides.filter(r => r.is_open).length;
  const closedCount = allRides.filter(r => !r.is_open).length;
  const avgWait = openCount > 0 
    ? Math.round(allRides.filter(r => r.is_open && r.wait_time > 0).reduce((acc, r) => acc + r.wait_time, 0) / Math.max(1, allRides.filter(r => r.is_open && r.wait_time > 0).length)) 
    : 0;

  const triggeredBannerHTML = getTriggeredAlertsBannerHTML(allRides);

  container.innerHTML = `
    <div class="live-wait-times-board" style="margin-top: 10px;">
      <!-- Triggered Goal Alert Banner (if threshold is met) -->
      ${triggeredBannerHTML}

      <!-- Header & Park Selector Bar -->
      <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 22px 24px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04); margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-bottom: 18px;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px #22c55e;"></span>
              <span style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #166534; letter-spacing: 0.5px;">
                Live Theme Park Wait Times
              </span>
            </div>
            <h3 style="font-size: 1.65rem; color: #0f172a; margin: 4px 0 2px; font-weight: 800;">
              ${currentPark.icon} ${currentPark.name} Live Queue Board
            </h3>
            <div style="font-size: 0.88rem; color: #64748b;">
              ${lastUpdated ? `Live sync as of <strong>${lastUpdated}</strong> • ` : ''}
              <strong>${openCount}</strong> open attractions (${closedCount} temporarily closed) • Park Avg Wait: <strong>${avgWait}m</strong>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            <button class="btn btn-outline" onclick="window.testDeviceAlertChime()" style="font-size: 0.84rem; padding: 8px 14px;" title="Test Lock-Screen Notifications & Chime">
              🔔 Test Alert Sound
            </button>
            <button class="btn btn-sun" onclick="window.refreshLivePark(${activeLiveParkId})" ${isLoading ? 'disabled' : ''} style="font-size: 0.88rem; padding: 8px 16px;">
              ${isLoading ? '⏳ Refreshing...' : '🔄 Refresh Live Data'}
            </button>
          </div>
        </div>

        <!-- Park Switcher Pills -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; padding-bottom: 14px; border-bottom: 1px solid #f1f5f9;">
          ${parksList.map(p => `
            <button class="park-tab-pill ${p.id === activeLiveParkId ? 'active' : ''}" onclick="window.switchLivePark(${p.id})" style="font-size: 0.88rem; padding: 8px 18px;">
              ${p.icon} ${p.name}
            </button>
          `).join('')}
        </div>

        <!-- Search & Filter Controls -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 14px;">
          <div style="flex: 1; min-width: 220px;">
            <input type="text" class="form-input" placeholder="🔍 Search attraction or land..." value="${searchQuery}" oninput="window.handleLiveSearch(this.value)" style="padding: 8px 12px; font-size: 0.88rem; border-radius: 10px; background: #f8fafc;">
          </div>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-sm ${statusFilter === 'all' ? 'btn-primary' : 'btn-outline'}" onclick="window.handleStatusFilter('all')" style="font-size: 0.8rem; padding: 6px 12px;">
              All (${allRides.length})
            </button>
            <button class="btn btn-sm ${statusFilter === 'open' ? 'btn-primary' : 'btn-outline'}" onclick="window.handleStatusFilter('open')" style="font-size: 0.8rem; padding: 6px 12px;">
              Open Only (${openCount})
            </button>
            <button class="btn btn-sm ${statusFilter === 'low' ? 'btn-primary' : 'btn-outline'}" onclick="window.handleStatusFilter('low')" style="font-size: 0.8rem; padding: 6px 12px;">
              Walk-Ons &le;25m
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      ${isLoading && (!cached || !cached.data) ? `
        <div style="text-align: center; padding: 60px 20px; background: #ffffff; border-radius: 20px; border: 1.5px solid #e2e8f0;">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">⏳</div>
          <h4 style="font-size: 1.25rem; color: #0f172a; margin-bottom: 6px;">Connecting to Live Disney Queue Servers...</h4>
          <p style="color: #64748b; font-size: 0.92rem; margin: 0;">Pulling live standby times for ${currentPark.name}...</p>
        </div>
      ` : ''}

      <!-- Error State -->
      ${cached && cached.error ? `
        <div style="background: #fef2f2; border: 1.5px solid #fca5a5; border-radius: 16px; padding: 24px; text-align: center; margin-bottom: 24px;">
          <span style="font-size: 2rem;">⚠️</span>
          <h4 style="color: #991b1b; font-size: 1.15rem; margin: 8px 0 4px;">Live Queue Feed Unavailable</h4>
          <p style="color: #7f1d1d; font-size: 0.9rem; margin-bottom: 14px;">${cached.error}</p>
          <button class="btn btn-primary" onclick="window.refreshLivePark(${activeLiveParkId})">
            Try Reconnecting 🔄
          </button>
        </div>
      ` : ''}

      <!-- Live Rides Grid -->
      ${!isLoading && filteredRides.length > 0 ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 14px;">
          ${filteredRides.map(r => {
            const deflatedWait = Math.round(r.wait_time * 0.72);
            const isLongWait = r.wait_time >= 35;
            const tierMeta = Object.values(RIDE_TIERS).find(t => t.name.toLowerCase() === r.name.toLowerCase() || r.name.toLowerCase().includes(t.name.toLowerCase()));
            const prayerNook = tierMeta ? tierMeta.nearbyPrayerNook : null;

            const companion = getActiveResortId() === 'dlr'
              ? (getDisneylandCompanionForRide(r.name) || getCompanionForRide(r.name))
              : (getCompanionForRide(r.name) || getDisneylandCompanionForRide(r.name));

            const existingAlert = (activeAlerts || []).find(a => String(a.ride_id) === String(r.id) || Number(a.ride_id) === Number(r.id));
            const rideJsonSafe = encodeURIComponent(JSON.stringify({
              id: r.id,
              name: r.name,
              wait_time: r.wait_time,
              is_open: r.is_open,
              landName: r.landName || currentPark.name
            }));

            return `
              <div style="background: #ffffff; border: 1.5px solid ${existingAlert ? '#86efac' : (!r.is_open ? '#f1f5f9' : (isLongWait ? '#fde68a' : '#e2e8f0'))}; border-radius: 16px; padding: 16px 18px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03); opacity: ${r.is_open ? '1' : '0.65'};">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 8px;">
                  <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase;">
                        ${r.landName || currentPark.name}
                      </span>
                      ${existingAlert ? `<span style="font-size: 0.7rem; font-weight: 800; background: #dcfce7; color: #166534; padding: 1px 6px; border-radius: 999px;">🔔 Alert &le;${existingAlert.threshold}m</span>` : ''}
                    </div>
                    <h4 style="font-size: 1.05rem; color: #0f172a; margin: 2px 0 0; font-weight: 800; line-height: 1.3;">
                      ${r.name}
                    </h4>
                  </div>

                  <!-- Wait Time Badge -->
                  <div>
                    ${!r.is_open ? `
                      <span style="background: #f1f5f9; color: #64748b; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 999px; white-space: nowrap;">
                        Closed
                      </span>
                    ` : (r.wait_time === 0 ? `
                      <span style="background: #dcfce7; color: #166534; font-size: 0.78rem; font-weight: 800; padding: 4px 10px; border-radius: 999px; white-space: nowrap;">
                        Walk-On ⚡
                      </span>
                    ` : `
                      <div style="text-align: right;">
                        <span style="font-size: 1.3rem; font-weight: 800; color: ${isLongWait ? '#b45309' : '#1a73e8'};">
                          ${r.wait_time}m
                        </span>
                        <div style="font-size: 0.72rem; color: #166534; font-weight: 700;" title="Estimated real in-park wait via 0.72 deflation factor">
                          Real: ~${deflatedWait}m
                        </div>
                      </div>
                    `)}
                  </div>
                </div>

                <!-- Action Toolbar: Set Alert & Read Companion -->
                <div style="display: flex; gap: 6px; margin-top: 10px; flex-wrap: wrap;">
                  <button class="btn-alert-bell ${existingAlert ? 'active' : ''}" onclick="window.openSetAlertModal('${rideJsonSafe}', '${currentPark.name}')" title="Set wait time drop alert for ${escapeHtml(r.name)}">
                    ${existingAlert ? '🔔 Alert Set' : '🔔 Set Drop Alert'}
                  </button>

                  ${companion ? `
                    <button class="btn btn-sm btn-outline" onclick="window.openCompanionModal('${companion.id}')" style="font-size: 0.75rem; padding: 4px 10px; border-radius: 8px; background: #f0fdf4; border-color: #bbf7d0; color: #166534; font-weight: 700;">
                      📖 ${companion.saint.split(' (')[0]}
                    </button>
                  ` : ''}
                </div>

                <!-- Catholic Queue Rosary Opportunity & Nearby Nook -->
                ${r.is_open && isLongWait ? `
                  <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 6px 10px; margin-top: 10px; font-size: 0.78rem; color: #92400e; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                    <span>
                      📿 <strong>${r.wait_time >= 50 ? 'Full Rosary Line' : '1-2 Decades Window'}</strong> (${deflatedWait}m actual)
                    </span>
                    <button class="btn btn-sm btn-sun" onclick="window.navigateToTab('rosary-tab')" style="font-size: 0.72rem; padding: 2px 8px; border-radius: 6px; white-space: nowrap;">
                      Pray 📿
                    </button>
                  </div>
                ` : ''}

                ${prayerNook ? `
                  <div style="margin-top: 8px; font-size: 0.74rem; color: #475569;">
                    📍 <strong>Nearby Sanctuary:</strong> ${prayerNook}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}

      ${!isLoading && filteredRides.length === 0 && cached && cached.data ? `
        <div style="text-align: center; padding: 40px 20px; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; color: #64748b;">
          No attractions found matching "${searchQuery}".
        </div>
      ` : ''}
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Window Event Handlers for interactive live board
window.switchLivePark = (parkId) => {
  activeLiveParkId = parkId;
  searchQuery = "";
  if (!liveDataCache[parkId]) {
    loadParkWaitTimes(parkId);
  } else {
    renderLiveWaitTimes();
  }
};

window.refreshLivePark = (parkId) => {
  loadParkWaitTimes(parkId);
};

window.handleLiveSearch = (query) => {
  searchQuery = query;
  renderLiveWaitTimes();
};

window.handleStatusFilter = (filter) => {
  statusFilter = filter;
  renderLiveWaitTimes();
};

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/pilgrimage-hub.js
  // ==========================================

  (function() {
// Pilgrimage & Theme Park Hub Component with Diverse Catholic Traditions & Rites






function getActiveParishes() {
  return getActiveResortId() === 'dlr' ? disneylandParishesData : parishesData;
}

function getActiveSecrets() {
  return getActiveResortId() === 'dlr' ? disneylandParkSecretsData : parkSecretsData;
}

function getActivePrayerNooks() {
  return getActiveResortId() === 'dlr' ? disneylandPrayerNooksData : prayerNooksData;
}

var initPilgrimageHub = CD.initPilgrimageHub = global.initPilgrimageHub = function() {
  renderPilgrimageHeader();
  renderBasilicaSpotlight();
  renderParishFinder('all', '');
  renderSecretsFilterChips();
  renderParkSecrets('all');
  renderNookFilterChips();
  renderPrayerNooks('all');
  setupPilgrimageFilters();

  window.addEventListener('catholic-resort-changed', () => {
    renderPilgrimageHeader();
    renderBasilicaSpotlight();
    renderParishFinder('all', '');
    renderSecretsFilterChips();
    renderParkSecrets('all');
    renderNookFilterChips();
    renderPrayerNooks('all');
  });
}

function renderPilgrimageHeader() {
  const isDlr = getActiveResortId() === 'dlr';
  const tagEl = document.querySelector('#pilgrimage-tab .section-tag');
  const titleEl = document.querySelector('#pilgrimage-tab .section-title');
  const descEl = document.querySelector('#pilgrimage-tab .section-description');
  const parishesHeading = document.querySelector('#pilgrimage-tab h3');

  if (tagEl) {
    tagEl.textContent = isDlr 
      ? 'Southern California & Anaheim Pilgrimage' 
      : 'Florida & Central Florida Pilgrimage';
  }
  if (titleEl) {
    titleEl.innerHTML = isDlr
      ? 'The Catholic Family Guide to <span class="text-gradient-blue">Disneyland Resort</span>'
      : 'The Catholic Family Guide to <span class="text-gradient-blue">Walt Disney World</span>';
  }
  if (descEl) {
    descEl.textContent = isDlr
      ? 'Keep your family grounded in joy and prayer! Find Mass times minutes from Disneyland gates, explore the monumental Christ Cathedral, and walk in the footsteps of St. Junípero Serra.'
      : 'Keep your family grounded in joy and prayer! Find Mass times minutes from the parks, visit the world-famous tourist Basilica, and discover hidden Christian art in the Disney castles.';
  }
  if (parishesHeading) {
    parishesHeading.textContent = isDlr
      ? '⛪ Catholic Parishes & Liturgical Traditions Near Disneyland'
      : '⛪ Catholic Parishes & Liturgical Traditions Near Disney World';
  }
}

function renderBasilicaSpotlight() {
  const container = document.getElementById('basilica-spotlight-container');
  if (!container) return;

  const isDlr = getActiveResortId() === 'dlr';
  const parishes = getActiveParishes();
  const basilica = isDlr 
    ? parishes.find(p => p.id === 'christ-cathedral') || parishes[0]
    : parishes.find(p => p.id === 'mary-queen-universe') || parishes[0];
  const bgImg = isDlr 
    ? 'assets/images/christ_cathedral_la_vang.jpg' 
    : 'assets/images/basilica.jpg';

  container.innerHTML = `
    <div class="flagship-spotlight-card">
      <div class="spotlight-image-side" style="background: url('${bgImg}') center/cover no-repeat; min-height: 360px;">
        <div class="spotlight-overlay">
          <span class="spotlight-badge">${isDlr ? '🌴 Orange County Flagship Pilgrimage Site' : '☀️ Orlando Flagship Pilgrimage Site'}</span>
        </div>
      </div>
      <div class="spotlight-content-side">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <span class="park-pill" style="background: var(--blue-light); color: var(--blue-dark); font-weight: 800;">
            ${basilica.rite}
          </span>
        </div>
        <h3 class="spotlight-title">${basilica.name}</h3>
        <div class="spotlight-subtitle">${basilica.tagline}</div>
        <p>${basilica.description}</p>
        
        <div class="mass-times-box">
          <div class="mass-grid-row">
            <span class="mass-day">📅 Sunday Masses</span>
            <span class="mass-times">${basilica.massSchedule.sunday.join(' • ')}</span>
          </div>
          ${basilica.massSchedule.saturdayVigil && basilica.massSchedule.saturdayVigil.length > 0 ? `
            <div class="mass-grid-row">
              <span class="mass-day">🕯️ Saturday Vigil</span>
              <span class="mass-times">${basilica.massSchedule.saturdayVigil.join(', ')}</span>
            </div>
          ` : ''}
          <div class="mass-grid-row">
            <span class="mass-day">☀️ Daily Mass</span>
            <span class="mass-times">${basilica.massSchedule.weekday.join(' • ')}</span>
          </div>
          <div class="mass-grid-row">
            <span class="mass-day">🕊️ Confessions</span>
            <span class="mass-times">${basilica.confessions}</span>
          </div>
        </div>

        <ul class="spotlight-features-list">
          ${basilica.features.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px;">
          <a href="${basilica.website}" target="_blank" rel="noopener noreferrer" class="btn btn-sun">Official Website ↗</a>
          <a href="https://maps.google.com/?q=${encodeURIComponent(basilica.address)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Directions (${basilica.distance}) ↗</a>
        </div>
      </div>
    </div>
  `;
}

function getRiteBadgeStyle(tradition) {
  if (tradition === 'tlm') {
    return { bg: '#ede9fe', color: '#6d28d9', icon: '☩' }; // Purple for Traditional Latin Mass
  }
  if (tradition === 'ordinariate') {
    return { bg: '#ffe4e6', color: '#be123c', icon: '👑' }; // Royal Crimson for Anglican Ordinariate
  }
  if (tradition === 'byzantine') {
    return { bg: '#fef3c7', color: '#b45309', icon: '☦' }; // Gold/Amber for Eastern Byzantine/Maronite
  }
  return { bg: '#e8f0fe', color: '#1d4ed8', icon: '☀️' }; // Sky Blue for Roman Rite
}

var renderParishFinder = CD.renderParishFinder = global.renderParishFinder = function(filter = 'all', searchQuery = '') {
  const container = document.getElementById('parishes-grid');
  if (!container) return;

  const parishes = getActiveParishes();
  const query = searchQuery.toLowerCase().trim();

  const filtered = parishes.filter(parish => {
    // Search match
    const matchesSearch = !query || 
      parish.name.toLowerCase().includes(query) ||
      parish.rite.toLowerCase().includes(query) ||
      parish.diocese.toLowerCase().includes(query) ||
      parish.address.toLowerCase().includes(query) ||
      parish.description.toLowerCase().includes(query);

    if (!matchesSearch) return false;

    // Filter logic
    if (filter === 'all') return true;
    if (filter === 'tlm') return parish.traditionCategory === 'tlm';
    if (filter === 'ordinariate') return parish.traditionCategory === 'ordinariate';
    if (filter === 'byzantine') return parish.traditionCategory === 'byzantine';
    if (filter === 'roman') return parish.traditionCategory === 'roman';
    if (filter === 'sunday-am') {
      return parish.massSchedule.sunday.some(t => t.includes('AM'));
    }
    if (filter === 'sunday-pm') {
      return parish.massSchedule.sunday.some(t => t.includes('PM'));
    }
    if (filter === 'daily') {
      return parish.massSchedule.weekday && parish.massSchedule.weekday.length > 0;
    }
    if (filter === 'confessions') {
      return parish.confessions && parish.confessions.length > 0;
    }
    if (filter === 'spanish') {
      return parish.languages.some(l => l.toLowerCase().includes('spanish'));
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 12px;">No parishes found matching your filter or search.</p>
        <button class="btn btn-outline" onclick="window.resetParishFilters()">View All Parishes & Traditions</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(parish => {
    const badgeStyle = getRiteBadgeStyle(parish.traditionCategory);

    return `
      <div class="parish-card">
        <div>
          <div class="parish-header">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px; margin-bottom: 8px;">
              <span class="park-pill" style="background: ${badgeStyle.bg}; color: ${badgeStyle.color}; font-weight: 800; font-size: 0.8rem; padding: 4px 12px;">
                ${badgeStyle.icon} ${parish.rite}
              </span>
              <span class="parish-distance">📍 ${parish.distance}</span>
            </div>
            
            <h4 class="parish-name">${parish.name}</h4>
            <div class="parish-address">${parish.address} • <em>${parish.diocese}</em></div>
          </div>

          <p style="font-size: 0.92rem; margin-bottom: 12px; color: var(--text-secondary);">${parish.description}</p>

          ${parish.liturgyNotes ? `
            <div style="background: #f8fafc; border-left: 3px solid ${badgeStyle.color}; padding: 10px 14px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; margin-bottom: 14px; font-size: 0.88rem; color: #334155;">
              <strong style="color: ${badgeStyle.color}; font-size: 0.8rem; text-transform: uppercase;">Liturgical Notes:</strong> ${parish.liturgyNotes}
            </div>
          ` : ''}

          <div class="mass-times-box" style="margin-bottom: 14px;">
            <div class="mass-grid-row">
              <span class="mass-day">Sunday Schedule:</span>
              <span class="mass-times">${parish.massSchedule.sunday.join(', ')}</span>
            </div>
            ${parish.massSchedule.saturdayVigil && parish.massSchedule.saturdayVigil.length > 0 ? `
              <div class="mass-grid-row">
                <span class="mass-day">Saturday Vigil:</span>
                <span class="mass-times">${parish.massSchedule.saturdayVigil.join(', ')}</span>
              </div>
            ` : ''}
            <div class="mass-grid-row">
              <span class="mass-day">Confessions:</span>
              <span class="mass-times">${parish.confessions}</span>
            </div>
          </div>

          <div style="font-size: 0.84rem; color: #b45309; margin-bottom: 8px;">
            <strong>🚗 Travel / Rideshare Tip:</strong> ${parish.uberTip}
          </div>
        </div>

        <div class="parish-actions">
          <a href="${parish.website}" target="_blank" rel="noopener noreferrer" class="btn btn-sun" style="font-size: 0.85rem; padding: 8px 16px;">Parish Website ↗</a>
          <a href="https://maps.google.com/?q=${encodeURIComponent(parish.address)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="font-size: 0.85rem; padding: 8px 16px;">Map & Directions ↗</a>
        </div>
      </div>
    `;
  }).join('');
}

var renderSecretsFilterChips = CD.renderSecretsFilterChips = global.renderSecretsFilterChips = function() {
  const container = document.getElementById('park-filter-chips');
  if (!container) return;
  const isDlr = getActiveResortId() === 'dlr';
  container.innerHTML = isDlr ? `
    <button class="filter-chip active" data-park="all">All Parks</button>
    <button class="filter-chip" data-park="Disneyland Park">Disneyland Park</button>
    <button class="filter-chip" data-park="Disney California Adventure">Disney California Adventure</button>
  ` : `
    <button class="filter-chip active" data-park="all">All Parks</button>
    <button class="filter-chip" data-park="Magic Kingdom">Magic Kingdom</button>
    <button class="filter-chip" data-park="Epcot">Epcot World Showcase</button>
    <button class="filter-chip" data-park="Animal Kingdom">Animal Kingdom</button>
  `;

  const parkSecretsGrid = document.getElementById('park-secrets-grid');
  container.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const park = chip.getAttribute('data-park') || 'all';
      renderParkSecrets(park);
      if (parkSecretsGrid) parkSecretsGrid.scrollTo({ left: 0, behavior: 'smooth' });
    });
  });
}

var renderNookFilterChips = CD.renderNookFilterChips = global.renderNookFilterChips = function() {
  const container = document.getElementById('nook-filter-chips');
  if (!container) return;
  const isDlr = getActiveResortId() === 'dlr';
  container.innerHTML = isDlr ? `
    <button class="filter-chip active" data-park="all">All Parks (7 Nooks)</button>
    <button class="filter-chip" data-park="Disneyland Park">Disneyland Park</button>
    <button class="filter-chip" data-park="Disney California Adventure">Disney California Adventure</button>
  ` : `
    <button class="filter-chip active" data-park="all">All Parks (10 Nooks)</button>
    <button class="filter-chip" data-park="Magic Kingdom">Magic Kingdom</button>
    <button class="filter-chip" data-park="Epcot">Epcot</button>
    <button class="filter-chip" data-park="Disney's Hollywood Studios">Hollywood Studios</button>
    <button class="filter-chip" data-park="Disney's Animal Kingdom">Animal Kingdom</button>
  `;

  const nooksContainer = document.getElementById('prayer-nooks-container');
  container.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const park = chip.getAttribute('data-park') || 'all';
      renderPrayerNooks(park);
      if (nooksContainer) nooksContainer.scrollTo({ left: 0, behavior: 'smooth' });
    });
  });
}

var renderParkSecrets = CD.renderParkSecrets = global.renderParkSecrets = function(parkFilter = 'all') {
  const container = document.getElementById('park-secrets-grid');
  if (!container) return;

  const dataset = getActiveSecrets();
  const filtered = parkFilter === 'all' 
    ? dataset 
    : dataset.filter(s => s.park.toLowerCase().includes(parkFilter.toLowerCase()));

  container.innerHTML = filtered.map(secret => `
    <div class="secret-card">
      <div class="secret-badge-group">
        <span class="park-pill">${secret.park}</span>
        <span style="font-size: 0.8rem; color: #b45309; font-weight: 700;">${secret.category}</span>
      </div>
      <h4 class="secret-title">${secret.title}</h4>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 10px;">📍 ${secret.location}</div>
      <p style="font-size: 0.93rem;">${secret.description}</p>
      
      <div class="secret-catholic-box">
        <strong>✦ Catholic & Sacramental Significance</strong>
        ${secret.catholicConnection}
      </div>

      <div style="font-size: 0.88rem; color: var(--text-secondary); margin-top: auto;">
        <span style="color: #b45309; font-weight: 700;">Family Tip:</span> ${secret.insiderTip}
      </div>
    </div>
  `).join('');
}

var renderPrayerNooks = CD.renderPrayerNooks = global.renderPrayerNooks = function(parkFilter = 'all') {
  const container = document.getElementById('prayer-nooks-container');
  if (!container) return;

  const dataset = getActivePrayerNooks();
  const allNooks = [];
  dataset.forEach(group => {
    group.nooks.forEach(nook => {
      allNooks.push({
        ...nook,
        park: group.park
      });
    });
  });

  const filtered = parkFilter === 'all'
    ? allNooks
    : allNooks.filter(n => n.park.toLowerCase().includes(parkFilter.toLowerCase()));

  container.innerHTML = filtered.map(nook => `
    <div class="nook-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <span class="park-pill">${nook.park}</span>
        <span style="font-size: 0.8rem; color: #b45309; font-weight: 700;">🕊️ Sanctuary</span>
      </div>
      <h4 class="nook-name">${nook.name}</h4>
      <div class="nook-location">📍 ${nook.location}</div>
      <p class="nook-ambiance">${nook.ambiance}</p>
      
      <div class="nook-best-for">
        <strong style="display: block; font-size: 0.8rem; text-transform: uppercase; color: #92400e; margin-bottom: 2px;">Spiritual Recommendation:</strong>
        ${nook.bestFor}
      </div>

      <div class="nook-amenities">
        <strong>🌿 Spot Details:</strong> ${nook.amenities}
      </div>
    </div>
  `).join('');
}

function setupPilgrimageFilters() {
  const parishChips = document.querySelectorAll('#parish-filter-chips .filter-chip');
  const parishSearch = document.getElementById('parish-search-input');
  const parishGrid = document.getElementById('parishes-grid');
  const prevBtn = document.getElementById('parish-scroll-prev');
  const nextBtn = document.getElementById('parish-scroll-next');

  if (prevBtn && parishGrid) {
    prevBtn.addEventListener('click', () => {
      parishGrid.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }

  if (nextBtn && parishGrid) {
    nextBtn.addEventListener('click', () => {
      parishGrid.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  let currentParishFilter = 'all';

  parishChips.forEach(chip => {
    chip.addEventListener('click', () => {
      parishChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentParishFilter = chip.getAttribute('data-filter') || 'all';
      renderParishFinder(currentParishFilter, parishSearch ? parishSearch.value : '');
      if (parishGrid) parishGrid.scrollTo({ left: 0, behavior: 'smooth' });
    });
  });

  if (parishSearch) {
    parishSearch.addEventListener('input', (e) => {
      renderParishFinder(currentParishFilter, e.target.value);
      if (parishGrid) parishGrid.scrollTo({ left: 0, behavior: 'smooth' });
    });
  }

  const parkSecretsGrid = document.getElementById('park-secrets-grid');
  const secretsPrevBtn = document.getElementById('secrets-scroll-prev');
  const secretsNextBtn = document.getElementById('secrets-scroll-next');

  if (secretsPrevBtn && parkSecretsGrid) {
    secretsPrevBtn.addEventListener('click', () => {
      parkSecretsGrid.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }

  if (secretsNextBtn && parkSecretsGrid) {
    secretsNextBtn.addEventListener('click', () => {
      parkSecretsGrid.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  const nooksContainer = document.getElementById('prayer-nooks-container');
  const nooksPrevBtn = document.getElementById('nooks-scroll-prev');
  const nooksNextBtn = document.getElementById('nooks-scroll-next');

  if (nooksPrevBtn && nooksContainer) {
    nooksPrevBtn.addEventListener('click', () => {
      nooksContainer.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }

  if (nooksNextBtn && nooksContainer) {
    nooksNextBtn.addEventListener('click', () => {
      nooksContainer.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  window.resetParishFilters = () => {
    if (parishSearch) parishSearch.value = '';
    parishChips.forEach(c => c.classList.remove('active'));
    if (parishChips[0]) parishChips[0].classList.add('active');
    renderParishFinder('all', '');
    if (parishGrid) parishGrid.scrollTo({ left: 0, behavior: 'smooth' });
  };
}

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/queue-rosary.js
  // ==========================================

  (function() {
// Interactive Queue Rosary Component with Multi-Tradition Support (Roman, Latin TLM, Byzantine, Anglican Ordinariate)
// Unified & Sequential: Opening Prayers -> Decades (1-5) -> Closing Prayers (Salve Regina, Collect, St. Michael)
// Freedom of Choice: Choose any mystery set anytime with zero day restrictions



let currentTraditionKey = 'roman'; // 'roman', 'latin', 'byzantine', 'anglican'
let currentMysteryKey = 'joyful'; // 'joyful', 'luminous', 'sorrowful', 'glorious', 'byzantine_rule'
let currentSection = 'intro'; // 'intro', 'decades', 'exit' - Start with Intro so users see full Rosary!
let currentIntroStep = 0; // 0: Sign of Cross, 1: Creed, 2: Our Father, 3: Hail Mary (Faith), 4: Hail Mary (Hope), 5: Hail Mary (Charity), 6: Glory Be & Fatima
let currentDecadeIndex = 0; // 0 to 4 (or 0 to 14 for Byzantine)
let currentBeadStep = 0; // 0: Our Father, 1-10: Hail Marys, 11: Glory Be
let currentExitStep = 0; // 0: Hail Holy Queen, 1: Concluding Collect, 2: St. Michael Prayer, 3: Final Sign of Cross

var initQueueRosary = CD.initQueueRosary = global.initQueueRosary = function() {
  const container = document.getElementById('queue-rosary-hub');
  if (!container) return;

  renderRosary();
}

function renderRosary() {
  const container = document.getElementById('queue-rosary-hub');
  if (!container) return;

  const tradition = TRADITIONS[currentTraditionKey] || TRADITIONS.roman;
  const prayers = TRADITION_PRAYERS[currentTraditionKey] || TRADITION_PRAYERS.roman;
  const mysteryData = ROSARY_MYSTERIES[currentMysteryKey] || ROSARY_MYSTERIES.joyful;
  
  if (currentDecadeIndex >= mysteryData.decades.length) {
    currentDecadeIndex = 0;
  }
  const decade = mysteryData.decades[currentDecadeIndex];
  const isByzantine = currentTraditionKey === 'byzantine' || currentMysteryKey === 'byzantine_rule';

  // Determine active prayer for the current section
  let currentPrayerTitle = "";
  let currentPrayerText = "";
  let currentStepLabel = "";

  const introSteps = [
    { label: "Opening • Sign of the Cross", title: prayers.signOfCross.title, text: prayers.signOfCross.text },
    { label: "On the Crucifix • Apostles' Creed", title: prayers.creed.title, text: prayers.creed.text },
    { label: "First Large Bead • Our Father (For the Holy Father)", title: prayers.ourFather.title, text: prayers.ourFather.text },
    { label: "First Small Bead • Hail Mary (For an Increase in Faith)", title: `${prayers.hailMary.title} (For Faith)`, text: prayers.hailMary.text },
    { label: "Second Small Bead • Hail Mary (For an Increase in Hope)", title: `${prayers.hailMary.title} (For Hope)`, text: prayers.hailMary.text },
    { label: "Third Small Bead • Hail Mary (For an Increase in Charity)", title: `${prayers.hailMary.title} (For Charity)`, text: prayers.hailMary.text },
    { label: "Chain • Glory Be & Fatima Prayer", title: `${prayers.gloryBe.title} & ${prayers.fatima.title}`, text: `${prayers.gloryBe.text}\n\n${prayers.fatima.text}` }
  ];

  const exitSteps = [
    { label: "Medal • Hail Holy Queen (Salve Regina)", title: prayers.hailHolyQueen.title, text: prayers.hailHolyQueen.text },
    { label: "Rosary Concluding Collect", title: prayers.rosaryClosing.title, text: prayers.rosaryClosing.text },
    { label: "Protection • Saint Michael the Archangel Prayer", title: prayers.stMichael.title, text: prayers.stMichael.text },
    { label: "Conclusion • Final Sign of the Cross", title: prayers.signOfCross.title, text: prayers.signOfCross.text }
  ];

  if (currentSection === 'intro') {
    const step = introSteps[currentIntroStep] || introSteps[0];
    currentStepLabel = step.label;
    currentPrayerTitle = step.title;
    currentPrayerText = step.text;
  } else if (currentSection === 'exit') {
    const step = exitSteps[currentExitStep] || exitSteps[0];
    currentStepLabel = step.label;
    currentPrayerTitle = step.title;
    currentPrayerText = step.text;
  } else {
    // Decades mode
    if (currentBeadStep === 0) {
      currentStepLabel = `Decade ${decade.decadeNumber} Opening • Lord's Prayer`;
      currentPrayerTitle = prayers.ourFather.title;
      currentPrayerText = prayers.ourFather.text;
    } else if (currentBeadStep >= 1 && currentBeadStep <= 10) {
      currentStepLabel = `${prayers.hailMary.title} • Bead ${currentBeadStep} of 10`;
      currentPrayerTitle = `${prayers.hailMary.title} (Bead #${currentBeadStep})`;
      currentPrayerText = prayers.hailMary.text;
    } else {
      currentStepLabel = `Decade ${decade.decadeNumber} Conclusion • Glory Be & Fatima`;
      currentPrayerTitle = `${prayers.gloryBe.title} & ${prayers.fatima.title}`;
      currentPrayerText = `${prayers.gloryBe.text}\n\n${prayers.fatima.text}`;
    }
  }

  container.innerHTML = `
    <!-- Tradition Selector Ribbon -->
    <div style="margin-bottom: 16px; background: #ffffff; border: 1.5px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 18px 20px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--blue-primary); letter-spacing: 0.06em;">
          Select Catholic Liturgical Tradition:
        </span>
        <span class="park-pill">${tradition.badge}</span>
      </div>

      <div class="filter-chips" style="gap: 6px; padding: 2px 0;">
        <button class="filter-chip ${currentTraditionKey === 'roman' ? 'active' : ''}" onclick="window.setRosaryTradition('roman')">
          🇻🇦 Roman Rite (English)
        </button>
        <button class="filter-chip ${currentTraditionKey === 'latin' ? 'active' : ''}" onclick="window.setRosaryTradition('latin')">
          ☩ Traditional Latin (TLM)
        </button>
        <button class="filter-chip ${currentTraditionKey === 'byzantine' ? 'active' : ''}" onclick="window.setRosaryTradition('byzantine')">
          ☦️ Byzantine Catholic
        </button>
        <button class="filter-chip ${currentTraditionKey === 'anglican' ? 'active' : ''}" onclick="window.setRosaryTradition('anglican')">
          🇬🇧 Anglican Ordinariate
        </button>
      </div>
    </div>

    <!-- Step 1: Choose Your Mystery (Completely Open Choice - No Day Restrictions) -->
    <div class="rosary-card-header" style="text-align: center; margin-bottom: 18px;">
      <div style="font-size: 0.82rem; font-weight: 800; text-transform: uppercase; color: #b45309; letter-spacing: 0.5px; margin-bottom: 6px;">
        Step 1: Choose Which Rosary to Pray (Open Choice Anytime)
      </div>
      <h3 style="font-size: 1.6rem; color: #0f172a; margin: 0 0 12px; font-weight: 800;">
        ☀️ ${mysteryData.name}
      </h3>
      <p style="font-size: 0.9rem; color: #64748b; margin: 0 0 14px;">
        ${mysteryData.tagline} • Feel free to choose any mysteries you and your family wish to pray!
      </p>

      <!-- Mystery Selector Chips (No Day of Week Labels!) -->
      <div class="filter-chips" style="justify-content: center; gap: 8px;">
        <button class="filter-chip ${currentMysteryKey === 'joyful' ? 'active' : ''}" onclick="window.selectMysterySet('joyful')">
          ☀️ Joyful Mysteries
        </button>
        <button class="filter-chip ${currentMysteryKey === 'luminous' ? 'active' : ''}" onclick="window.selectMysterySet('luminous')">
          💡 Luminous Mysteries
        </button>
        <button class="filter-chip ${currentMysteryKey === 'sorrowful' ? 'active' : ''}" onclick="window.selectMysterySet('sorrowful')">
          ✝️ Sorrowful Mysteries
        </button>
        <button class="filter-chip ${currentMysteryKey === 'glorious' ? 'active' : ''}" onclick="window.selectMysterySet('glorious')">
          👑 Glorious Mysteries
        </button>
        <button class="filter-chip ${currentMysteryKey === 'byzantine_rule' ? 'active' : ''}" onclick="window.selectMysterySet('byzantine_rule')">
          ☦️ Byzantine Rule (15 Steps)
        </button>
      </div>
    </div>

    <!-- Step 2: Full Rosary Progression Bar (Opening -> Decades 1-5 -> Closing) -->
    <div style="background: #ffffff; border: 1.5px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px 20px; margin-bottom: 20px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.82rem; font-weight: 800; text-transform: uppercase; color: #1e3a8a; letter-spacing: 0.5px;">
          Step 2: Choose Part of Rosary to Pray in Line
        </span>
        <span style="font-size: 0.82rem; color: #64748b; font-weight: 600;">
          Tap any part or tap Next Prayer
        </span>
      </div>

      <div class="decade-selector-bar" style="margin-top: 0;">
        <!-- Opening Prayers Button -->
        <button class="decade-num-btn ${currentSection === 'intro' ? 'active' : ''}" onclick="window.selectIntro()" style="background: ${currentSection === 'intro' ? 'var(--blue-primary)' : '#e0f2fe'}; color: ${currentSection === 'intro' ? '#ffffff' : '#0369a1'}; border-color: #38bdf8; font-weight: 800;">
          ✝️ Opening Prayers
        </button>

        <!-- Decades Buttons -->
        ${mysteryData.decades.map((d, idx) => `
          <button class="decade-num-btn ${currentSection === 'decades' && currentDecadeIndex === idx ? 'active' : ''}" onclick="window.selectDecade(${idx})">
            ${isByzantine ? `Step ${d.decadeNumber}` : `Decade ${d.decadeNumber}`}
          </button>
        `).join('')}

        <!-- Closing Prayers Button -->
        <button class="decade-num-btn ${currentSection === 'exit' ? 'active' : ''}" onclick="window.selectExit()" style="background: ${currentSection === 'exit' ? '#b45309' : '#fef3c7'}; color: ${currentSection === 'exit' ? '#ffffff' : '#92400e'}; border-color: #fde68a; font-weight: 800;">
          👑 Closing Prayers
        </button>
      </div>
    </div>

    <!-- MAIN BODY -->
    ${currentSection === 'intro' ? `
      <!-- OPENING PRAYERS BEAD TRACK -->
      <div class="rosary-bead-track-wrapper" style="margin-bottom: 18px;">
        <div class="rosary-track-label">
          <span>✝️ Opening Prayers:</span>
          <span style="font-weight: 800; color: var(--sun-gold);">${currentStepLabel}</span>
        </div>

        <div class="rosary-bead-chain">
          <!-- Step 0: Sign of Cross -->
          <button class="rosary-bead large-bead ${currentIntroStep === 0 ? 'current' : currentIntroStep > 0 ? 'completed' : ''}" onclick="window.setIntroStep(0)" title="Sign of the Cross">
            ✝️
          </button>
          <!-- Step 1: Apostles Creed (Crucifix) -->
          <button class="rosary-bead large-bead ${currentIntroStep === 1 ? 'current' : currentIntroStep > 1 ? 'completed' : ''}" onclick="window.setIntroStep(1)" title="Apostles' Creed (Crucifix)">
            📜
          </button>
          <!-- Step 2: Our Father -->
          <button class="rosary-bead large-bead ${currentIntroStep === 2 ? 'current' : currentIntroStep > 2 ? 'completed' : ''}" onclick="window.setIntroStep(2)" title="Our Father (Pope's Intentions)">
            🙏
          </button>
          <!-- Steps 3, 4, 5: Three Hail Marys (Faith, Hope, Charity) -->
          <div class="decade-beads-group">
            <button class="rosary-bead small-bead ${currentIntroStep === 3 ? 'current' : currentIntroStep > 3 ? 'completed' : ''}" onclick="window.setIntroStep(3)" title="Hail Mary for Faith">
              1
            </button>
            <button class="rosary-bead small-bead ${currentIntroStep === 4 ? 'current' : currentIntroStep > 4 ? 'completed' : ''}" onclick="window.setIntroStep(4)" title="Hail Mary for Hope">
              2
            </button>
            <button class="rosary-bead small-bead ${currentIntroStep === 5 ? 'current' : currentIntroStep > 5 ? 'completed' : ''}" onclick="window.setIntroStep(5)" title="Hail Mary for Charity">
              3
            </button>
          </div>
          <!-- Step 6: Glory Be & Fatima -->
          <button class="rosary-bead large-bead ${currentIntroStep === 6 ? 'current' : ''}" onclick="window.setIntroStep(6)" title="Glory Be & Fatima Prayer">
            ✨
          </button>
        </div>
      </div>
    ` : (currentSection === 'exit' ? `
      <!-- CLOSING PRAYERS BEAD TRACK -->
      <div class="rosary-bead-track-wrapper" style="margin-bottom: 18px;">
        <div class="rosary-track-label">
          <span>👑 Closing Prayers:</span>
          <span style="font-weight: 800; color: #b45309;">${currentStepLabel}</span>
        </div>

        <div class="rosary-bead-chain">
          <button class="rosary-bead large-bead ${currentExitStep === 0 ? 'current' : currentExitStep > 0 ? 'completed' : ''}" onclick="window.setExitStep(0)" title="Hail Holy Queen (Salve Regina)">
            👑
          </button>
          <button class="rosary-bead large-bead ${currentExitStep === 1 ? 'current' : currentExitStep > 1 ? 'completed' : ''}" onclick="window.setExitStep(1)" title="Rosary Concluding Collect">
            📜
          </button>
          <button class="rosary-bead large-bead ${currentExitStep === 2 ? 'current' : currentExitStep > 2 ? 'completed' : ''}" onclick="window.setExitStep(2)" title="Saint Michael the Archangel Prayer">
            ⚔️
          </button>
          <button class="rosary-bead large-bead ${currentExitStep === 3 ? 'current' : ''}" onclick="window.setExitStep(3)" title="Final Sign of the Cross">
            ✝️
          </button>
        </div>
      </div>
    ` : `
      <!-- ACTIVE DECADE MEDITATION CARD -->
      <div class="rosary-meditation-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
          <span class="park-pill" style="background: #fef3c7; color: #92400e;">
            ${isByzantine ? `Step ${decade.decadeNumber} of 15` : `Decade ${decade.decadeNumber} of 5`}
          </span>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue-primary);">Spiritual Fruit: ${decade.fruit}</span>
        </div>
        <h3 style="font-size: 1.45rem; color: var(--text-primary); margin-bottom: 8px;">
          ${decade.title}
        </h3>
        <p style="font-size: 0.94rem; color: var(--text-secondary); font-style: italic; margin-bottom: 12px; border-left: 3px solid var(--sun-gold); padding-left: 12px;">
          📖 "${decade.scripture}"
        </p>
        <div style="background: var(--bg-surface-soft); padding: 12px 14px; border-radius: var(--radius-sm); font-size: 0.92rem; color: #1e293b; line-height: 1.45;">
          <strong>🏰 Queue Family Reflection:</strong> ${decade.queueReflection}
        </div>
      </div>

      <!-- INTERACTIVE 10-BEAD TRACK FOR THE DECADE -->
      <div class="rosary-bead-track-wrapper">
        <div class="rosary-track-label">
          <span>Tap bead or tap Next Prayer:</span>
          <span style="font-weight: 800; color: var(--sun-gold);">${currentStepLabel}</span>
        </div>

        <div class="rosary-bead-chain">
          <!-- Our Father Bead -->
          <button class="rosary-bead large-bead ${currentBeadStep === 0 ? 'current' : currentBeadStep > 0 ? 'completed' : ''}" 
                  onclick="window.jumpToBead(0)" aria-label="Our Father Bead" title="Lord's Prayer (Our Father)">
            ✝️
          </button>

          <!-- 10 Hail Mary Beads -->
          <div class="decade-beads-group">
            ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => `
              <button class="rosary-bead small-bead ${currentBeadStep === num ? 'current' : currentBeadStep > num ? 'completed' : ''}" 
                      onclick="window.jumpToBead(${num})" aria-label="Hail Mary Bead ${num}">
                ${num}
              </button>
            `).join('')}
          </div>

          <!-- Glory Be Bead -->
          <button class="rosary-bead large-bead ${currentBeadStep === 11 ? 'current' : ''}" 
                  onclick="window.jumpToBead(11)" aria-label="Glory Be Bead" title="Glory Be & Fatima Prayer">
            ✨
          </button>
        </div>
      </div>
    `)}

    <!-- ACTIVE PRAYER READING CARD (USED FOR ALL SECTIONS) -->
    <div class="rosary-prayer-card" style="margin-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span class="section-tag" style="margin-bottom: 0;">${tradition.name}</span>
        <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700;">
          ${currentSection === 'intro' ? `Intro Step ${currentIntroStep + 1} of 7` : (currentSection === 'exit' ? `Closing Step ${currentExitStep + 1} of 4` : `Decade Bead ${currentBeadStep + 1} of 12`)}
        </span>
      </div>

      <h4 style="font-size: 1.35rem; color: var(--text-primary); margin-bottom: 12px; font-weight: 800;">
        ${currentPrayerTitle}
      </h4>

      <div class="prayer-text-display">
        ${currentPrayerText.replace(/\n\n/g, '<br><br>')}
      </div>

      <!-- Navigation Action Buttons -->
      <div class="rosary-action-buttons">
        <button class="btn btn-outline" onclick="window.prevRosaryStep()" style="flex: 1;">
          ← Previous Prayer
        </button>
        <button class="btn btn-sun" onclick="window.nextRosaryStep()" style="flex: 2; font-size: 1.05rem; padding: 14px 20px;">
          ${getNextButtonLabel()}
        </button>
      </div>
    </div>
  `;
}

function getNextButtonLabel() {
  if (currentSection === 'intro') {
    return currentIntroStep === 6 ? 'Begin Decade 1 ➔' : 'Next Prayer Bead ➔';
  } else if (currentSection === 'exit') {
    return currentExitStep === 3 ? 'Finish Rosary 🎉' : 'Next Closing Prayer ➔';
  } else {
    if (currentBeadStep === 11) {
      const mysteryData = ROSARY_MYSTERIES[currentMysteryKey] || ROSARY_MYSTERIES.joyful;
      if (currentDecadeIndex < mysteryData.decades.length - 1) {
        return `Begin Decade ${currentDecadeIndex + 2} ➔`;
      } else {
        return 'Proceed to Closing Prayers ➔';
      }
    }
    return 'Next Prayer Bead ➔';
  }
}

// Window Controller Functions
window.setRosaryTradition = (tradKey) => {
  currentTraditionKey = tradKey;
  if (tradKey === 'byzantine') {
    currentMysteryKey = 'byzantine_rule';
  } else if (currentMysteryKey === 'byzantine_rule') {
    currentMysteryKey = 'joyful';
  }
  renderRosary();
};

window.selectIntro = () => {
  currentSection = 'intro';
  currentIntroStep = 0;
  renderRosary();
};

window.selectExit = () => {
  currentSection = 'exit';
  currentExitStep = 0;
  renderRosary();
};

window.setIntroStep = (step) => {
  currentSection = 'intro';
  currentIntroStep = step;
  renderRosary();
};

window.setExitStep = (step) => {
  currentSection = 'exit';
  currentExitStep = step;
  renderRosary();
};

window.selectMysterySet = (mysteryKey) => {
  currentMysteryKey = mysteryKey;
  currentSection = 'intro'; // Start at intro so they see the full Rosary for the chosen mystery!
  currentIntroStep = 0;
  currentDecadeIndex = 0;
  currentBeadStep = 0;
  renderRosary();
};

window.selectDecade = (idx) => {
  currentSection = 'decades';
  currentDecadeIndex = idx;
  currentBeadStep = 0;
  renderRosary();
};

window.jumpToBead = (beadNum) => {
  currentSection = 'decades';
  currentBeadStep = beadNum;
  renderRosary();
};

window.nextRosaryStep = () => {
  if (currentSection === 'intro') {
    if (currentIntroStep < 6) {
      currentIntroStep++;
    } else {
      currentSection = 'decades';
      currentDecadeIndex = 0;
      currentBeadStep = 0;
    }
  } else if (currentSection === 'exit') {
    if (currentExitStep < 3) {
      currentExitStep++;
    } else {
      // Completed entire Rosary! Reset to intro of current mystery
      currentSection = 'intro';
      currentIntroStep = 0;
    }
  } else {
    // Decades
    if (currentBeadStep < 11) {
      currentBeadStep++;
    } else {
      const mysteryData = ROSARY_MYSTERIES[currentMysteryKey] || ROSARY_MYSTERIES.joyful;
      if (currentDecadeIndex < mysteryData.decades.length - 1) {
        currentDecadeIndex++;
        currentBeadStep = 0;
      } else {
        // Finished all 5 decades! Move to Closing Prayers!
        currentSection = 'exit';
        currentExitStep = 0;
      }
    }
  }
  renderRosary();
};

window.prevRosaryStep = () => {
  if (currentSection === 'intro') {
    if (currentIntroStep > 0) currentIntroStep--;
  } else if (currentSection === 'exit') {
    if (currentExitStep > 0) currentExitStep--;
    else {
      currentSection = 'decades';
      const mysteryData = ROSARY_MYSTERIES[currentMysteryKey] || ROSARY_MYSTERIES.joyful;
      currentDecadeIndex = mysteryData.decades.length - 1;
      currentBeadStep = 11;
    }
  } else {
    if (currentBeadStep > 0) {
      currentBeadStep--;
    } else if (currentDecadeIndex > 0) {
      currentDecadeIndex--;
      currentBeadStep = 11;
    } else {
      currentSection = 'intro';
      currentIntroStep = 6;
    }
  }
  renderRosary();
};

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/queue-companions.js
  // ==========================================

  (function() {
// Catholic Disney: Queue Companions Interactive Explorer
// Browse and read saint connections, Christian scientist stories, and queue reflections for Disney attractions and Lands







let currentViewMode = 'rides'; // 'rides' or 'lands'
let activeParkFilter = 'all';
let searchQuery = '';

function getResortData() {
  const resortId = getActiveResortId();
  if (resortId === 'dlr') {
    const rides = DISNEYLAND_QUEUE_COMPANIONS.map(c => ({
      id: c.rideId,
      name: c.rideName,
      park: c.park,
      land: c.land,
      icon: c.icon,
      saint: c.patronSaint,
      saintTitle: c.patronRole,
      feastDay: c.feastDay,
      scripture: c.scripturePassage || 'Psalm 121:1-2',
      story: c.catholicConnection,
      didYouKnow: c.summary,
      reflection: c.queuePrayer,
      queueReflection: c.queuePrayer,
      prayerNook: c.prayerNook
    }));

    const lands = DISNEYLAND_LAND_PATRONS.map(l => ({
      id: l.landId,
      name: l.landName,
      park: l.park,
      land: l.landName,
      icon: l.icon,
      saint: l.patronSaint,
      saintTitle: l.patronTitle,
      feastDay: l.feastDay,
      scripture: 'Revelation 21:3-4',
      story: `${l.spiritualConnection}\n\n${l.catecheticalReflection}`,
      didYouKnow: l.spiritualConnection,
      reflection: l.catecheticalReflection,
      queueReflection: l.catecheticalReflection,
      prayerNook: l.designatedPrayerNook
    }));

    const parkFilters = [
      { id: 'all', label: '🌟 All Parks' },
      { id: 'disneyland', label: '🏰 Disneyland Park' },
      { id: 'california', label: '🎡 Disney California Adventure' }
    ];

    return { rides, lands, parkFilters, resortName: 'Disneyland Resort' };
  }

  return {
    rides: QUEUE_COMPANIONS,
    lands: LAND_PATRONS,
    parkFilters: [
      { id: 'all', label: '🌟 All Parks' },
      { id: 'magic', label: '🏰 Magic Kingdom' },
      { id: 'epcot', label: '🌐 EPCOT' },
      { id: 'hollywood', label: '🎬 Hollywood Studios' },
      { id: 'animal', label: '🌳 Animal Kingdom' }
    ],
    resortName: 'Walt Disney World'
  };
}

var initQueueCompanions = CD.initQueueCompanions = global.initQueueCompanions = function() {
  const container = document.getElementById('queue-companions-container');
  if (!container) return;

  renderQueueCompanions();

  window.addEventListener('catholic-resort-changed', () => {
    activeParkFilter = 'all';
    renderQueueCompanions();
  });
}

var renderQueueCompanions = CD.renderQueueCompanions = global.renderQueueCompanions = function() {
  const container = document.getElementById('queue-companions-container');
  if (!container) return;

  const data = getResortData();
  const dataset = currentViewMode === 'rides' ? data.rides : data.lands;

  const filtered = dataset.filter(item => {
    const matchesPark = (activeParkFilter === 'all') || item.park.toLowerCase().includes(activeParkFilter.toLowerCase());
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query || 
      item.name.toLowerCase().includes(query) || 
      item.saint.toLowerCase().includes(query) || 
      (item.land && item.land.toLowerCase().includes(query)) ||
      (item.story && item.story.toLowerCase().includes(query));
    return matchesPark && matchesSearch;
  });

  container.innerHTML = `
    <div class="queue-companions-hub">
      <!-- Section Header -->
      <div class="section-header" style="text-align: center; margin-bottom: 24px;">
        <span class="section-tag">Faith in the Queue • Stories, Saints &amp; Miracles</span>
        <h2 class="section-title">Queue Companions: <span class="text-gradient-sun">Catholic Saints at ${data.resortName}</span></h2>
        <p class="section-description" style="max-width: 780px; margin: 0 auto;">
          Turn line waits and park strolls into captivating family storytelling moments. Discover the champions of faith, holy patrons, and sacred miracles behind every Disney ride and land!
        </p>
      </div>

      <!-- Mode Switcher: Rides vs Lands/Countries -->
      <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 22px; flex-wrap: wrap;">
        <button class="btn ${currentViewMode === 'rides' ? 'btn-primary' : 'btn-outline'}" onclick="window.setCompanionMode('rides')" style="font-weight: 800; padding: 10px 22px; border-radius: 999px;">
          🎢 Attractions &amp; Rides (${data.rides.length})
        </button>
        <button class="btn ${currentViewMode === 'lands' ? 'btn-primary' : 'btn-outline'}" onclick="window.setCompanionMode('lands')" style="font-weight: 800; padding: 10px 22px; border-radius: 999px;">
          🌍 Lands &amp; Pavilions (${data.lands.length})
        </button>
      </div>

      <!-- Park Filter & Search Bar -->
      <div class="filter-bar" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 18px; padding: 14px 18px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <!-- Park Filter Chips -->
          <div class="filter-chips" style="gap: 6px; padding: 0;">
            ${data.parkFilters.map(f => `
              <button class="filter-chip ${activeParkFilter === f.id ? 'active' : ''}" onclick="window.setCompanionPark('${f.id}')">
                ${f.label}
              </button>
            `).join('')}
          </div>

          <!-- Search Input -->
          <div style="flex: 1; min-width: 240px; max-width: 340px;">
            <input type="text" class="form-input" placeholder="🔍 Search ${currentViewMode === 'rides' ? 'ride, saint, or theme' : 'country, land, or saint'}..." value="${searchQuery}" oninput="window.handleCompanionSearch(this.value)" style="padding: 8px 14px; font-size: 0.88rem; border-radius: 999px; background: #f8fafc;">
          </div>
        </div>
      </div>

      <!-- Cards Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 18px;">
        ${filtered.map(item => `
          <div class="companion-card" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 20px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s, box-shadow 0.2s;" onmouseenter="this.style.transform='translateY(-2px)'" onmouseleave="this.style.transform='translateY(0)'">
            <div>
              <!-- Header Badges -->
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; gap: 8px;">
                <span class="park-pill" style="font-size: 0.72rem; padding: 2px 8px; background: #f1f5f9; color: #475569;">
                  ${item.park} ${item.land ? `• ${item.land}` : ''}
                </span>
                <span style="font-size: 1.4rem;">${item.icon}</span>
              </div>

              <!-- Name -->
              <h3 style="font-size: 1.25rem; color: #0f172a; margin: 0 0 6px; font-weight: 800; line-height: 1.3;">
                ${item.name}
              </h3>

              <!-- Associated Saint Callout -->
              <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 10px 12px; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span style="font-size: 1.1rem;">☩</span>
                  <strong style="font-size: 0.95rem; color: #1e40af;">${item.saint}</strong>
                </div>
                <div style="font-size: 0.78rem; color: #3b82f6; font-weight: 700; margin-top: 2px;">
                  ${item.saintTitle}
                </div>
              </div>

              <!-- Brief Story Excerpt -->
              <p style="font-size: 0.88rem; color: #475569; line-height: 1.5; margin: 0 0 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                ${item.story}
              </p>
            </div>

            <!-- Read Story Button -->
            <button class="btn btn-sun" onclick="${currentViewMode === 'rides' ? `window.openCompanionModal('${item.id}')` : `window.openLandModal('${item.id}')`}" style="width: 100%; font-size: 0.9rem; padding: 10px 14px; border-radius: 12px; justify-content: center; font-weight: 800; cursor: pointer;">
              📖 Read Story &amp; Reflection
            </button>
          </div>
        `).join('')}
      </div>

      ${filtered.length === 0 ? `
        <div style="text-align: center; padding: 50px 20px; background: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; color: #64748b;">
          No items found matching "${searchQuery}". Try a different keyword!
        </div>
      ` : ''}
    </div>
  `;
}

// Window Controller Functions
window.setCompanionMode = (mode) => {
  currentViewMode = mode;
  searchQuery = '';
  renderQueueCompanions();
};

window.setCompanionPark = (parkKey) => {
  activeParkFilter = parkKey;
  renderQueueCompanions();
};

window.handleCompanionSearch = (query) => {
  searchQuery = query;
  renderQueueCompanions();
};

// Generic Modal Renderer for Rides & Lands
function showModalContent(item) {
  let modalWrapper = document.getElementById('companion-modal-wrapper');
  if (!modalWrapper) {
    modalWrapper = document.createElement('div');
    modalWrapper.id = 'companion-modal-wrapper';
    document.body.appendChild(modalWrapper);
  }

  modalWrapper.innerHTML = `
    <div style="position: fixed; inset: 0; background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(6px); z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 20px; box-sizing: border-box;" onclick="if(event.target === this) window.closeCompanionModal()">
      <div style="background: #ffffff; border-radius: 24px; max-width: 680px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 28px 24px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4); position: relative; border: 2.5px solid #fbbf24; box-sizing: border-box;">
        <!-- Close Button -->
        <button onclick="window.closeCompanionModal()" aria-label="Close" style="position: absolute; top: 18px; right: 18px; background: #f1f5f9; border: none; width: 38px; height: 38px; border-radius: 50%; font-size: 1.3rem; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #475569; z-index: 10; font-weight: 800;">
          ✕
        </button>

        <!-- Header -->
        <div style="margin-bottom: 18px; padding-right: 40px;">
          <span class="park-pill" style="font-size: 0.78rem; background: #fef3c7; color: #92400e; font-weight: 800;">
            ${item.icon} ${item.park} ${item.land ? `• ${item.land}` : ''}
          </span>
          <h2 style="font-size: 1.65rem; color: #0f172a; margin: 8px 0 4px; font-weight: 800; line-height: 1.25;">
            ${item.name}
          </h2>
          <div style="font-size: 1.15rem; font-weight: 800; color: #1a73e8; display: flex; align-items: center; gap: 6px;">
            <span>☩</span> ${item.saint}
          </div>
          <div style="font-size: 0.85rem; color: #64748b; font-weight: 600; margin-top: 2px;">
            ${item.saintTitle} ${item.feastDay ? `• Feast Day: ${item.feastDay}` : ''}
          </div>
        </div>

        <!-- Scripture Banner -->
        <div style="background: #f8fafc; border-left: 4px solid var(--sun-gold); padding: 12px 16px; border-radius: 8px; margin-bottom: 18px; font-style: italic; font-size: 0.95rem; color: #334155; line-height: 1.45;">
          📖 ${item.scripture}
        </div>

        <!-- The Inspiring Story -->
        <div style="font-size: 1rem; line-height: 1.65; color: #1e293b; margin-bottom: 20px;">
          ${item.story}
        </div>

        <!-- Did You Know? Callout Box -->
        <div style="background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 14px; padding: 16px; margin-bottom: 18px;">
          <div style="font-weight: 800; color: #b45309; font-size: 0.95rem; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span>💡</span> Did You Know?
          </div>
          <p style="font-size: 0.92rem; color: #78350f; margin: 0; line-height: 1.5;">
            ${item.didYouKnow}
          </p>
        </div>

        <!-- Family Reflection -->
        <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 14px; padding: 16px; margin-bottom: 24px;">
          <div style="font-weight: 800; color: #166534; font-size: 0.95rem; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span>🏰</span> Family Reflection:
          </div>
          <p style="font-size: 0.92rem; color: #14532d; margin: 0; line-height: 1.5; font-weight: 600;">
            "${item.queueReflection || item.reflection}"
          </p>
        </div>

        <!-- Bottom Action Buttons -->
        <div style="display: flex; gap: 10px; justify-content: space-between; flex-wrap: wrap;">
          <button class="btn btn-outline" onclick="window.closeCompanionModal()" style="flex: 1; min-width: 140px; justify-content: center;">
            Back to Explorer
          </button>
          <button class="btn btn-sun" onclick="window.navigateToRosaryFromModal()" style="flex: 2; min-width: 200px; justify-content: center; font-weight: 800;">
            📿 Pray a Queue Decade Now
          </button>
        </div>
      </div>
    </div>
  `;
  modalWrapper.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

window.openCompanionModal = (companionId) => {
  const data = getResortData();
  const comp = data.rides.find(c => c.id === companionId || c.name.toLowerCase() === String(companionId).toLowerCase())
    || QUEUE_COMPANIONS.find(c => c.id === companionId) 
    || getCompanionForRide(companionId)
    || getDisneylandCompanionForRide(companionId);
  if (comp) showModalContent(comp);
};

window.openLandModal = (landId) => {
  const data = getResortData();
  const land = data.lands.find(l => l.id === landId || l.name.toLowerCase() === String(landId).toLowerCase())
    || LAND_PATRONS.find(l => l.id === landId) 
    || getLandPatron(landId)
    || getDisneylandLandPatron(landId);
  if (land) showModalContent(land);
};

window.closeCompanionModal = () => {
  const modalWrapper = document.getElementById('companion-modal-wrapper');
  if (modalWrapper) {
    modalWrapper.style.display = 'none';
    modalWrapper.innerHTML = '';
  }
  document.body.style.overflow = '';
};

window.navigateToRosaryFromModal = () => {
  window.closeCompanionModal();
  if (window.navigateToTab) {
    window.navigateToTab('rosary-tab');
  }
};

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/liturgical-hub.js
  // ==========================================

  (function() {
// Catholic Disney: Liturgical Living, Holy Days of Obligation & Abstinence Tracker
// Supports 4 Liturgical Traditions: Roman (USCCB), TLM (1962), Byzantine, and Anglican Ordinariate






let activeTraditionId = "roman";
let activeViewTab = "holydays"; // 'holydays', 'abstinence', 'dining', 'movies'
let activeDiningPark = "all";

var initLiturgicalHub = CD.initLiturgicalHub = global.initLiturgicalHub = function() {
  renderLiturgicalHub();
  window.addEventListener('catholic-resort-changed', () => {
    renderLiturgicalHub();
  });
}

var renderLiturgicalHub = CD.renderLiturgicalHub = global.renderLiturgicalHub = function() {
  const container = document.getElementById('liturgical-hub-container');
  if (!container) return;

  const isDlr = getActiveResortId() === 'dlr';
  const activeTraditions = isDlr ? DISNEYLAND_TRADITIONS_LITURGICAL : TRADITIONS_LITURGICAL;
  const tradition = activeTraditions[activeTraditionId] || activeTraditions.roman;
  const church = tradition.churchInfo || (isDlr ? DISNEYLAND_TRADITIONS_LITURGICAL.roman.churchInfo : TRADITIONS_LITURGICAL.roman.churchInfo);
  const holyDays = tradition.holyDays || TRADITIONS_LITURGICAL[activeTraditionId]?.holyDays || TRADITIONS_LITURGICAL.roman.holyDays || [];
  const abstinenceRules = tradition.abstinenceRules || TRADITIONS_LITURGICAL[activeTraditionId]?.abstinenceRules || TRADITIONS_LITURGICAL.roman.abstinenceRules || { summary: '', details: [] };

  // Filter dining items
  const diningDataset = isDlr ? DISNEYLAND_ABSTINENCE_DINING : DISNEY_ABSTINENCE_DINING;
  const filteredDining = activeDiningPark === 'all'
    ? diningDataset
    : diningDataset.filter(d => String(d.parkId) === String(activeDiningPark));

  container.innerHTML = `
    <!-- Tradition Selector Navigation -->
    <div class="liturgical-control-bar" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 20px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05); margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
        <div>
          <span class="section-tag" style="background: #fef3c7; color: #92400e; margin-bottom: 4px;">
            ${isDlr ? '🌴 Southern California Parishes & Traditions' : '🏰 Central Florida Parishes & Traditions'}
          </span>
          <h3 style="font-size: 1.45rem; color: #0f172a; margin: 0; font-weight: 800;">
            Select Your Liturgical Tradition
          </h3>
        </div>
        <span style="font-size: 0.85rem; color: #64748b;">
          ${isDlr ? 'Mass obligations & churches in Anaheim / Orange County' : 'Mass obligation & fasting rules tailored to your family'}
        </span>
      </div>

      <!-- Tradition Selector Pills -->
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        ${Object.keys(activeTraditions).map(k => {
          const t = activeTraditions[k];
          return `
            <button class="filter-chip ${activeTraditionId === k ? 'active' : ''}" 
                    onclick="window.switchLiturgicalTradition('${k}')"
                    style="font-size: 0.9rem; padding: 8px 16px;">
              ${t.icon} ${t.name}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Current Tradition & Designated Local Church Banner -->
      <div style="background: #f8fafc; border-left: 4px solid #1a73e8; border-radius: 8px; padding: 14px 16px; margin-top: 16px;">
        <div style="font-weight: 800; color: #0f172a; font-size: 1rem; margin-bottom: 4px;">
          ${tradition.name}
        </div>
        <div style="color: #475569; font-size: 0.88rem; line-height: 1.45; margin-bottom: 8px;">
          ${tradition.summary || tradition.description}
        </div>
        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 8px 12px; font-size: 0.84rem; color: #1e40af;">
          <strong>📍 Designated ${isDlr ? 'Orange County' : 'Orlando'} Parish:</strong> <span style="font-weight: 700;">${church.parishName}</span> (${church.address})<br>
          ⏰ <strong>Sunday Times:</strong> ${church.sundayTimes} • <em>${church.distanceFromPark || church.distance || ''}</em>
        </div>
      </div>

      ${isDlr ? `
        <!-- Historic Mission Excursion Callout (California Exclusive) -->
        <div style="background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); border: 1.5px solid #fde68a; border-radius: 12px; padding: 14px 16px; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div style="flex: 1; min-width: 260px;">
            <div style="font-weight: 800; color: #92400e; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
              <span>🔔</span> Historic California Pilgrimage: ${DISNEYLAND_MISSION_EXCURSION.name}
            </div>
            <p style="font-size: 0.85rem; color: #78350f; margin: 4px 0 0; line-height: 1.4;">
              ${DISNEYLAND_MISSION_EXCURSION.transitDescription}
            </p>
          </div>
          <span style="background: #ffffff; color: #b45309; font-weight: 800; font-size: 0.78rem; padding: 4px 10px; border-radius: 999px; border: 1px solid #fcd34d;">
            Serra Chapel (1782)
          </span>
        </div>
      ` : ''}

      <!-- Feature View Navigation Tabs -->
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; border-top: 1px dashed #e2e8f0; padding-top: 16px;">
        <button class="btn ${activeViewTab === 'holydays' ? 'btn-sun' : 'btn-outline'}" 
                onclick="window.switchLiturgicalView('holydays')" style="font-size: 0.88rem; padding: 8px 16px;">
          ⛪ Holy Days of Obligation (${holyDays.length})
        </button>
        <button class="btn ${activeViewTab === 'abstinence' ? 'btn-sun' : 'btn-outline'}" 
                onclick="window.switchLiturgicalView('abstinence')" style="font-size: 0.88rem; padding: 8px 16px;">
          🐟 Fasting &amp; Abstinence Rules
        </button>
        <button class="btn ${activeViewTab === 'dining' ? 'btn-sun' : 'btn-outline'}" 
                onclick="window.switchLiturgicalView('dining')" style="font-size: 0.88rem; padding: 8px 16px;">
          🍽️ Disney Meatless Dining Guide (${diningDataset.length})
        </button>
        <button class="btn ${activeViewTab === 'movies' ? 'btn-sun' : 'btn-outline'}" 
                onclick="window.switchLiturgicalView('movies')" style="font-size: 0.88rem; padding: 8px 16px;">
          🎬 Feast Days &amp; Disney Movie Pairings (${liturgicalPairingsData.length})
        </button>
      </div>
    </div>

    <!-- VIEW 1: HOLY DAYS OF OBLIGATION -->
    ${activeViewTab === 'holydays' ? `
      <div class="holydays-view-container animate-fade-in">
        <div style="margin-bottom: 18px;">
          <h4 style="font-size: 1.35rem; color: #0f172a; margin-bottom: 4px; font-weight: 800;">
            ⛪ Holy Days of Obligation (${tradition.name})
          </h4>
          <p style="font-size: 0.92rem; color: #475569; margin-bottom: 0;">
            Never miss a Mass on vacation. Here are the feasts of precept, canonical relaxation rules, and local ${isDlr ? 'Orange County' : 'Orlando'} Mass locations.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px;">
          ${holyDays.map(hd => `
            <div class="parish-card" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 18px; padding: 22px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
                  <span class="park-pill" style="background: #fee2e2; color: #b91c1c; font-weight: 800; font-size: 0.78rem;">
                    🔴 Holy Day of Precept
                  </span>
                  <span style="font-size: 0.85rem; font-weight: 800; color: #1a73e8; background: #eff6ff; padding: 3px 10px; border-radius: 999px;">
                    📅 ${hd.date}
                  </span>
                </div>

                <h4 style="font-size: 1.22rem; color: #0f172a; margin: 0 0 6px; font-weight: 800;">
                  ${hd.feast}
                </h4>
                <p style="font-size: 0.88rem; color: #475569; line-height: 1.45; margin-bottom: 12px;">
                  ${hd.notes}
                </p>

                <!-- Canonical Abrogation / Transfer Rule -->
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 12px; margin-bottom: 12px; font-size: 0.82rem;">
                  <strong style="color: #92400e;">⚖️ Canonical Rule:</strong> ${hd.abrogationRule}
                </div>
              </div>

              <!-- Mass at Disney Tip -->
              <div style="border-top: 1px dashed #e2e8f0; padding-top: 12px; margin-top: 10px; font-size: 0.84rem; color: #1e40af;">
                <strong>⛪ Where to Fulfill Near Disney:</strong><br>
                ${hd.massAtDisney}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- VIEW 2: FASTING & ABSTINENCE RULES -->
    ${activeViewTab === 'abstinence' ? `
      <div class="abstinence-view-container animate-fade-in">
        <div style="margin-bottom: 18px;">
          <h4 style="font-size: 1.35rem; color: #0f172a; margin-bottom: 4px; font-weight: 800;">
            🐟 Fasting &amp; Abstinence Rules (${tradition.name})
          </h4>
          <p style="font-size: 0.92rem; color: #475569; margin-bottom: 0;">
            ${abstinenceRules.summary || ''}
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px; margin-bottom: 24px;">
          ${(abstinenceRules.details || []).map(rule => `
            <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 18px; padding: 22px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);">
              <span class="park-pill" style="background: #dbeafe; color: #1e40af; font-weight: 800; font-size: 0.78rem; margin-bottom: 8px; display: inline-block;">
                ${rule.rule}
              </span>
              <h5 style="font-size: 1.15rem; color: #0f172a; margin: 0 0 4px; font-weight: 800;">
                ${rule.title}
              </h5>
              <div style="font-size: 0.8rem; font-weight: 700; color: #64748b; margin-bottom: 10px;">
                👥 Obligation Ages: ${rule.ages}
              </div>
              <p style="font-size: 0.9rem; color: #475569; line-height: 1.5; margin-bottom: 0;">
                ${rule.guidance}
              </p>
            </div>
          `).join('')}
        </div>

        <!-- Quick Jump to Dining Guide Callout -->
        <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 16px; padding: 18px 22px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <div>
            <strong style="color: #1e40af; font-size: 1.05rem;">Visiting the parks on Friday or during Lent?</strong>
            <p style="font-size: 0.88rem; color: #3b82f6; margin: 4px 0 0;">
              Check our Disney Park Fish &amp; Meatless Dining Guide for the best salmon, lobster rolls, and veggie platters!
            </p>
          </div>
          <button class="btn btn-primary" onclick="window.switchLiturgicalView('dining')" style="font-size: 0.88rem; padding: 8px 16px;">
            View Meatless Dining Guide 🍽️
          </button>
        </div>
      </div>
    ` : ''}

    <!-- VIEW 3: DISNEY MEATLESS DINING GUIDE -->
    ${activeViewTab === 'dining' ? `
      <div class="dining-view-container animate-fade-in">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
          <div>
            <h4 style="font-size: 1.35rem; color: #0f172a; margin-bottom: 4px; font-weight: 800;">
              🍽️ Catholic Family Meatless Dining Guide at ${isDlr ? 'Disneyland Resort' : 'Disney World'}
            </h4>
            <p style="font-size: 0.92rem; color: #475569; margin-bottom: 0;">
              Where to enjoy delicious fish, seafood, and hearty meatless meals on Friday abstinence days without sacrificing quality or family fun.
            </p>
          </div>

          <!-- Park Filters -->
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button class="filter-chip ${activeDiningPark === 'all' ? 'active' : ''}" onclick="window.filterDiningByPark('all')">All Locations</button>
            ${isDlr ? `
              <button class="filter-chip ${activeDiningPark === '16' ? 'active' : ''}" onclick="window.filterDiningByPark('16')">🏰 Disneyland Park</button>
              <button class="filter-chip ${activeDiningPark === '17' ? 'active' : ''}" onclick="window.filterDiningByPark('17')">🎡 Disney California Adv.</button>
              <button class="filter-chip ${activeDiningPark === '0' ? 'active' : ''}" onclick="window.filterDiningByPark('0')">⛪ Downtown Disney</button>
            ` : `
              <button class="filter-chip ${activeDiningPark === '6' ? 'active' : ''}" onclick="window.filterDiningByPark('6')">🏰 Magic Kingdom</button>
              <button class="filter-chip ${activeDiningPark === '5' ? 'active' : ''}" onclick="window.filterDiningByPark('5')">🌐 EPCOT</button>
              <button class="filter-chip ${activeDiningPark === '7' ? 'active' : ''}" onclick="window.filterDiningByPark('7')">🎬 Studios</button>
              <button class="filter-chip ${activeDiningPark === '8' ? 'active' : ''}" onclick="window.filterDiningByPark('8')">🌳 Animal Kingdom</button>
            `}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px;">
          ${filteredDining.map(item => `
            <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 18px; padding: 20px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
                  <span class="park-pill" style="font-size: 0.75rem; padding: 2px 8px;">
                    ${item.icon} ${item.park} • ${item.land}
                  </span>
                  <span style="font-size: 0.75rem; font-weight: 700; color: #475569; background: #f1f5f9; padding: 2px 8px; border-radius: 6px;">
                    ${item.type}
                  </span>
                </div>

                <h5 style="font-size: 1.15rem; color: #0f172a; margin: 0 0 6px; font-weight: 800;">
                  ${item.restaurant}
                </h5>

                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 10px 12px; margin-bottom: 12px;">
                  <div style="font-size: 0.78rem; font-weight: 800; color: #15803d; text-transform: uppercase;">🐟 Meatless &amp; Seafood Highlights</div>
                  <div style="font-size: 0.88rem; color: #166534; margin-top: 2px; line-height: 1.35;">${item.seafoodHighlights}</div>
                </div>
              </div>

              <div style="border-top: 1px dashed #e2e8f0; padding-top: 10px; margin-top: 6px; font-size: 0.82rem; color: #64748b;">
                <strong>💡 Catholic Family Tip:</strong> ${item.catholicTip}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- VIEW 4: FEAST DAYS & DISNEY MOVIE PAIRINGS -->
    ${activeViewTab === 'movies' ? `
      <div class="movies-view-container animate-fade-in">
        <div style="margin-bottom: 18px;">
          <h4 style="font-size: 1.35rem; color: #0f172a; margin-bottom: 4px; font-weight: 800;">
            🎬 Feast Day Celebrations &amp; Disney Movie Pairings
          </h4>
          <p style="font-size: 0.92rem; color: #475569; margin-bottom: 0;">
            Connect Catholic saints, liturgical seasons, and virtue-filled movie nights for your family.
          </p>
        </div>

        <div class="cards-grid-2">
          ${liturgicalPairingsData.map(item => `
            <div class="parish-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 22px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <span class="park-pill" style="background: #fef3c7; color: #92400e; font-weight: 700;">
                  📅 ${item.feastDate} • ${item.season}
                </span>
              </div>

              <h4 style="font-size: 1.3rem; color: #0f172a; margin-bottom: 4px; font-weight: 800;">${item.saint}</h4>
              <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 12px;"><strong>Patronage:</strong> ${item.patronOf}</div>

              <div style="background: #f8fafc; padding: 12px 16px; border-radius: 10px; border-left: 3px solid #1a73e8; margin-bottom: 12px;">
                <div style="font-size: 0.78rem; color: #1a73e8; font-weight: 800; text-transform: uppercase;">🎬 Disney Pairing</div>
                <div style="font-size: 1.05rem; color: #0f172a; font-weight: 700; margin-top: 2px;">${item.moviePairing}</div>
              </div>

              <p style="font-size: 0.9rem; color: #475569; margin-bottom: 12px; line-height: 1.45;">${item.theologicalConnection}</p>

              <div style="border-top: 1px solid #f1f5f9; padding-top: 12px; margin-top: auto; display: grid; gap: 8px; font-size: 0.86rem;">
                <div><strong style="color: #1a73e8;">👨‍👩‍👧‍👦 Family Activity:</strong> ${item.familyActivity}</div>
                <div><strong style="color: #d97706;">🍪 Feast Day Treat:</strong> ${item.feastTreatRecipe}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;
}

// Global Handlers
window.switchLiturgicalTradition = (traditionId) => {
  activeTraditionId = traditionId;
  renderLiturgicalHub();
};

window.switchLiturgicalView = (viewTab) => {
  activeViewTab = viewTab;
  renderLiturgicalHub();
};

window.filterDiningByPark = (parkId) => {
  activeDiningPark = parkId;
  renderLiturgicalHub();
};

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/itinerary-planner.js
  // ==========================================

  (function() {
// Catholic Disney: Large-Family Pilgrimage Itinerary Planner
// Features: Canon 1251 Solemnity Abrogation on Fridays, Travel Days, Disney Springs, Park Hoppers, Tradition Churches & 5-Yr Crowd Data






var PARK_OPTIONS = CD.PARK_OPTIONS = global.PARK_OPTIONS = [
  { id: "mk", name: "Magic Kingdom", icon: "🏰", food: "Columbia Harbour House (Liberty Square - Grilled Salmon & Lobster Roll)" },
  { id: "epcot", name: "EPCOT", icon: "🌐", food: "Sunshine Seasons (The Land) or Yorkshire County Fish Shop (UK Fish & Chips)" },
  { id: "hs", name: "Hollywood Studios", icon: "🎬", food: "ABC Commissary (Grilled Shrimp Tacos) or Docking Bay 7 (Tofu/Kefta)" },
  { id: "ak", name: "Animal Kingdom", icon: "🌳", food: "Satu'li Canteen (Pandora - Chili-Garlic Tofu Bowl & Ocean Fish)" },
  { id: "hopper_mk_epcot", name: "Park Hopper: MK + EPCOT", icon: "🦘", food: "Columbia Harbour House (Lunch) / EPCOT World Showcase (Dinner)" },
  { id: "hopper_ak_hs", name: "Park Hopper: AK + Studios", icon: "🦘", food: "Satu'li Canteen (Lunch) / ABC Commissary (Dinner)" },
  { id: "hopper_custom", name: "Park Hopper (Two Parks)", icon: "🦘", food: "Park 1 Quick-Service (Lunch) / Park 2 Waterfront Dining" },
  { id: "springs", name: "Disney Springs & Resort", icon: "🛍️", food: "Cookes of Dublin / Raglan Road (Atlantic Fish & Chips / Shepherd's Pie)" },
  { id: "travel_arrival", name: "Travel & Arrival Day", icon: "✈️", food: "Resort Quick-Service or Disney Springs Casual Dining" },
  { id: "travel_depart", name: "Travel & Departure Day", icon: "🚗", food: "Airport / Travel Dining or Final Morning Resort Brunch" },
  { id: "rest", name: "Basilica Pilgrimage & Rest Day", icon: "⛪", food: "Cookes of Dublin / Raglan Road (Disney Springs - Atlantic Fish & Chips)" }
];

var DISNEYLAND_PARK_OPTIONS = CD.DISNEYLAND_PARK_OPTIONS = global.DISNEYLAND_PARK_OPTIONS = [
  { id: "dl", name: "Disneyland Park", icon: "🏰", food: "French Market / Cafe Orleans (New Orleans Square - Salmon / Gumbo) or Plaza Inn" },
  { id: "dca", name: "Disney California Adventure", icon: "🎡", food: "Pacific Wharf Cafe (Sourdough Clam Chowder) or Flo's V8 Cafe" },
  { id: "hopper_dl_dca", name: "Park Hopper: Disneyland + DCA", icon: "🦘", food: "French Market (Lunch) / San Fransokyo Square Sourdough (Dinner)" },
  { id: "downtown_disney", name: "Downtown Disney & Hotel Exploration", icon: "🛍️", food: "Naples Ristorante e Bar (Wood-fired Margherita Pizza) or Jazz Kitchen" },
  { id: "mission_excursion", name: "Mission San Juan Capistrano Excursion", icon: "🔔", food: "Historic Mission Inn / San Juan Capistrano dining (Train excursion)" },
  { id: "travel_arrival", name: "Travel & Arrival Day", icon: "✈️", food: "Harbor Blvd Dining or Downtown Disney Quick-Service" },
  { id: "travel_depart", name: "Travel & Departure Day", icon: "🚗", food: "Airport / Travel Dining or Final Morning Resort Brunch" },
  { id: "rest", name: "Christ Cathedral Pilgrimage & Rest Day", icon: "⛪", food: "Christ Cathedral Cultural Plaza / Garden Grove dining" }
];

var getActiveParkOptions = CD.getActiveParkOptions = global.getActiveParkOptions = function() {
  return getActiveResortId() === 'dlr' ? DISNEYLAND_PARK_OPTIONS : PARK_OPTIONS;
}

var getActiveTraditions = CD.getActiveTraditions = global.getActiveTraditions = function() {
  return getActiveResortId() === 'dlr' ? DISNEYLAND_TRADITIONS_LITURGICAL : TRADITIONS_LITURGICAL;
}

let selectedDailyParks = [];

var initItineraryPlanner = CD.initItineraryPlanner = global.initItineraryPlanner = function() {
  const generateBtn = document.getElementById('generate-itinerary-btn');
  if (generateBtn) {
    generateBtn.addEventListener('click', generateCustomItinerary);
  }

  const startInput = document.getElementById('planner-start-date');
  const endInput = document.getElementById('planner-end-date');
  const traditionSelect = document.getElementById('planner-tradition');

  if (startInput) startInput.addEventListener('change', refreshDailyParksUI);
  if (endInput) endInput.addEventListener('change', refreshDailyParksUI);
  if (traditionSelect) {
    traditionSelect.addEventListener('change', () => {
      updateTraditionParishPreview();
      refreshDailyParksUI();
    });
  }

  window.addEventListener('catholic-resort-changed', () => {
    selectedDailyParks = [];
    updateTraditionParishPreview();
    refreshDailyParksUI();
    renderBestDaysOfWeek();
    renderHourlyQueueRhythm();
    const outputBox = document.querySelector('.itinerary-output-box');
    if (outputBox) outputBox.remove();
  });

  // Pre-fill default dates (e.g. upcoming Monday to Friday)
  prefillDefaultDates();
  updateTraditionParishPreview();
  refreshDailyParksUI();
  renderBestDaysOfWeek();
  renderHourlyQueueRhythm();
}

var renderBestDaysOfWeek = CD.renderBestDaysOfWeek = global.renderBestDaysOfWeek = function() {
  const container = document.getElementById('best-days-of-week-list');
  const resortLabel = document.getElementById('best-days-resort-label');
  const wdwChip = document.getElementById('chip-bestdays-wdw');
  const dlrChip = document.getElementById('chip-bestdays-dlr');

  const isDlr = getActiveResortId() === 'dlr';

  if (wdwChip && dlrChip) {
    if (isDlr) {
      dlrChip.classList.add('active');
      wdwChip.classList.remove('active');
    } else {
      wdwChip.classList.add('active');
      dlrChip.classList.remove('active');
    }
  }

  if (resortLabel) {
    resortLabel.textContent = isDlr ? 'Disneyland Resort (California)' : 'Walt Disney World (Florida)';
  }

  if (!container) return;

  if (isDlr) {
    container.innerHTML = `
      <div class="best-days-row">
        <div>
          <strong style="color: #0f172a; font-size: 0.92rem;">🏰 Disneyland Park</strong>
          <div style="font-size: 0.78rem; color: #64748b;">Lowest wait days; avoids weekend Magic Key passholders &amp; Monday surges</div>
        </div>
        <span class="best-days-badge">Tuesday &amp; Thursday</span>
      </div>
      <div class="best-days-row">
        <div>
          <strong style="color: #0f172a; font-size: 0.92rem;">🎡 Disney California Adventure</strong>
          <div style="font-size: 0.78rem; color: #64748b;">Avoids Friday/Saturday Food &amp; Wine / Festival of Holidays evening crowds</div>
        </div>
        <span class="best-days-badge">Mon, Tue &amp; Wed</span>
      </div>
      <div class="best-days-row">
        <div>
          <strong style="color: #0f172a; font-size: 0.92rem;">🦘 Park Hopper (DL + DCA)</strong>
          <div style="font-size: 0.78rem; color: #64748b;">1-minute esplanade walk allows fast, seamless mid-day park hopping</div>
        </div>
        <span class="best-days-badge">Wednesday &amp; Thursday</span>
      </div>
      <div class="best-days-row">
        <div>
          <strong style="color: #0f172a; font-size: 0.92rem;">⛪ Christ Cathedral &amp; Mission Day</strong>
          <div style="font-size: 0.78rem; color: #64748b;">Sunday Morning Mass or historic San Juan Capistrano excursion before park evening</div>
        </div>
        <span class="best-days-badge">Sunday Morning &amp; Friday</span>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="best-days-row">
        <div>
          <strong style="color: #0f172a; font-size: 0.92rem;">🏰 Magic Kingdom</strong>
          <div style="font-size: 0.78rem; color: #64748b;">Avoids Monday travel rush &amp; Saturday local peak lines</div>
        </div>
        <span class="best-days-badge">Tuesday &amp; Thursday</span>
      </div>
      <div class="best-days-row">
        <div>
          <strong style="color: #0f172a; font-size: 0.92rem;">🌐 EPCOT</strong>
          <div style="font-size: 0.78rem; color: #64748b;">Avoids Friday/Saturday World Showcase evening crowds &amp; festival surges</div>
        </div>
        <span class="best-days-badge">Mon, Tue &amp; Wed</span>
      </div>
      <div class="best-days-row">
        <div>
          <strong style="color: #0f172a; font-size: 0.92rem;">🎬 Hollywood Studios</strong>
          <div style="font-size: 0.78rem; color: #64748b;">Better Lightning Lane availability for Rise of the Resistance &amp; Slinky Dog</div>
        </div>
        <span class="best-days-badge">Monday &amp; Thursday</span>
      </div>
      <div class="best-days-row">
        <div>
          <strong style="color: #0f172a; font-size: 0.92rem;">🌳 Animal Kingdom</strong>
          <div style="font-size: 0.78rem; color: #64748b;">Low early morning standby lines; easy rope drop for Flight of Passage</div>
        </div>
        <span class="best-days-badge">Sunday Morning &amp; Wed</span>
      </div>
      <div class="best-days-row">
        <div>
          <strong style="color: #0f172a; font-size: 0.92rem;">🛍️ Disney Springs &amp; Basilica</strong>
          <div style="font-size: 0.78rem; color: #64748b;">Abstinence fish dining, sacred art pilgrimage &amp; restful family stroll</div>
        </div>
        <span class="best-days-badge">Friday Afternoon &amp; Evening</span>
      </div>
    `;
  }
}

var renderHourlyQueueRhythm = CD.renderHourlyQueueRhythm = global.renderHourlyQueueRhythm = function() {
  const container = document.getElementById('hourly-queue-rhythm-list');
  if (!container) return;

  const isDlr = getActiveResortId() === 'dlr';

  if (isDlr) {
    container.innerHTML = `
      <div class="queue-rhythm-row">
        <span style="font-size: 1.2rem; flex-shrink: 0;">🌅</span>
        <div>
          <strong style="color: #166534; font-size: 0.88rem;">8:00 AM – 10:30 AM (Rope Drop Strategy)</strong>
          <div style="color: #64748b; font-size: 0.8rem; line-height: 1.4;">Standby waits are 45% lower. Knock out Space Mountain, Matterhorn, or Radiator Springs Racers before local park hoppers arrive.</div>
        </div>
      </div>
      <div class="queue-rhythm-row sanctuary-pause">
        <span style="font-size: 1.2rem; flex-shrink: 0;">⛪</span>
        <div>
          <strong style="color: #1e40af; font-size: 0.88rem;">12:30 PM – 3:30 PM (Sacred Mid-Day Pause)</strong>
          <div style="color: #1d4ed8; font-size: 0.8rem; line-height: 1.4;">Peak afternoon lines &amp; California sun. Step away to Christ Cathedral (Garden Grove - 10 min) or historic Mission San Juan Capistrano / St. Boniface for sacred shade, prayer, and restful lunch.</div>
        </div>
      </div>
      <div class="queue-rhythm-row">
        <span style="font-size: 1.2rem; flex-shrink: 0;">🌙</span>
        <div>
          <strong style="color: #7e22ce; font-size: 0.88rem;">8:30 PM – Park Close (Twilight &amp; Post-Fireworks)</strong>
          <div style="color: #64748b; font-size: 0.8rem; line-height: 1.4;">Lines plummet significantly after fireworks. Walk directly between Disneyland and DCA across the 1-minute esplanade!</div>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="queue-rhythm-row">
        <span style="font-size: 1.2rem; flex-shrink: 0;">🌅</span>
        <div>
          <strong style="color: #166534; font-size: 0.88rem;">8:30 AM – 10:30 AM (Rope Drop Strategy)</strong>
          <div style="color: #64748b; font-size: 0.8rem; line-height: 1.4;">Standby waits are 45% lower. Knock out 2 major headliners before Florida crowds and tour groups arrive.</div>
        </div>
      </div>
      <div class="queue-rhythm-row sanctuary-pause">
        <span style="font-size: 1.2rem; flex-shrink: 0;">⛪</span>
        <div>
          <strong style="color: #1e40af; font-size: 0.88rem;">12:30 PM – 3:30 PM (Sacred Mid-Day Sanctuary Pause)</strong>
          <div style="color: #1d4ed8; font-size: 0.8rem; line-height: 1.4;">Peak queues &amp; Florida humidity. Step away to the Basilica of Mary, Queen of the Universe (5 min from Disney Springs) or Corpus Christi for quiet A/C prayer and Eucharistic Adoration.</div>
        </div>
      </div>
      <div class="queue-rhythm-row">
        <span style="font-size: 1.2rem; flex-shrink: 0;">🌙</span>
        <div>
          <strong style="color: #7e22ce; font-size: 0.88rem;">8:30 PM – Park Close (Twilight &amp; Post-Fireworks)</strong>
          <div style="color: #64748b; font-size: 0.8rem; line-height: 1.4;">Lines plummet 35–50% during fireworks. Walk on Fantasyland &amp; Tomorrowland favorites with minimal waits!</div>
        </div>
      </div>
    `;
  }
}

function updateTraditionParishPreview() {
  const preview = document.getElementById('tradition-parish-preview');
  const traditionSelect = document.getElementById('planner-tradition');
  if (!preview) return;

  const traditionId = traditionSelect ? traditionSelect.value : 'roman';
  const activeTraditions = getActiveTraditions();
  const tradition = activeTraditions[traditionId] || activeTraditions.roman;
  const church = tradition.churchInfo || activeTraditions.roman.churchInfo;

  preview.innerHTML = `
    <strong>📍 Designated Church:</strong> ${church.shortName}<br>
    <span style="color: #475569;">⏰ Sunday Times: ${church.sundayTimes} • ${church.address}</span>
  `;
}

function prefillDefaultDates() {
  const startInput = document.getElementById('planner-start-date');
  const endInput = document.getElementById('planner-end-date');
  if (!startInput || !endInput) return;

  if (!startInput.value) {
    const today = new Date();
    // Default to 14 days ahead on a Monday
    const nextTrip = new Date(today);
    nextTrip.setDate(today.getDate() + ((1 + 7 - today.getDay()) % 7 || 7)); // Next Monday
    const endTrip = new Date(nextTrip);
    endTrip.setDate(nextTrip.getDate() + 4); // Friday

    startInput.value = formatDateForInput(nextTrip);
    endInput.value = formatDateForInput(endTrip);
  }
}

function formatDateForInput(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

var refreshDailyParksUI = CD.refreshDailyParksUI = global.refreshDailyParksUI = function() {
  const container = document.getElementById('daily-parks-container');
  const startInput = document.getElementById('planner-start-date');
  const endInput = document.getElementById('planner-end-date');
  const traditionSelect = document.getElementById('planner-tradition');
  if (!container || !startInput) return;

  const traditionId = traditionSelect ? traditionSelect.value : 'roman';
  const activeTraditions = getActiveTraditions();
  const tradition = activeTraditions[traditionId] || activeTraditions.roman;

  let startDate = startInput.value ? new Date(startInput.value + 'T00:00:00') : new Date();
  let endDate = endInput && endInput.value ? new Date(endInput.value + 'T00:00:00') : new Date(startDate.getTime() + 4 * 86400000);

  if (endDate < startDate) {
    endDate = new Date(startDate.getTime() + 4 * 86400000);
  }

  const diffTime = Math.abs(endDate - startDate);
  const duration = Math.max(1, Math.min(14, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1));
  const parkOptions = getActiveParkOptions();
  const isDlr = getActiveResortId() === 'dlr';

  // Validate that currently selected daily parks belong to the active resort
  const validOptionIds = new Set(parkOptions.map(p => p.id));
  const hasInvalidParks = selectedDailyParks.some(pId => !validOptionIds.has(pId));

  if (selectedDailyParks.length !== duration || hasInvalidParks) {
    selectedDailyParks = [];
    for (let i = 0; i < duration; i++) {
      const curDate = new Date(startDate.getTime() + i * 86400000);
      const dayOfWeek = curDate.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat

      if (i === 0 && duration >= 4) {
        selectedDailyParks.push("travel_arrival");
      } else if (i === duration - 1 && duration >= 4) {
        selectedDailyParks.push("travel_depart");
      } else {
        // Intelligently assign the statistically optimal park for that specific day of the week
        if (isDlr) {
          switch (dayOfWeek) {
            case 0: selectedDailyParks.push("rest"); break; // Sunday: Christ Cathedral / Mission Excursion
            case 1: selectedDailyParks.push("dca"); break;  // Monday: Disney California Adventure
            case 2: selectedDailyParks.push("dl"); break;   // Tuesday: Disneyland Park (#1 lowest wait day!)
            case 3: selectedDailyParks.push("dca"); break;  // Wednesday: DCA
            case 4: selectedDailyParks.push("dl"); break;   // Thursday: Disneyland Park
            case 5: selectedDailyParks.push("hopper_dl_dca"); break; // Friday: Park Hopper
            case 6: selectedDailyParks.push("downtown_disney"); break; // Saturday: Downtown Disney / Rest
            default: selectedDailyParks.push("dl");
          }
        } else {
          switch (dayOfWeek) {
            case 0: selectedDailyParks.push("ak"); break; // Sunday: Animal Kingdom (Lowest Sunday morning standby)
            case 1: selectedDailyParks.push("hs"); break; // Monday: Hollywood Studios (Lower LL competition)
            case 2: selectedDailyParks.push("mk"); break; // Tuesday: Magic Kingdom (#1 lowest wait day!)
            case 3: selectedDailyParks.push("epcot"); break; // Wednesday: EPCOT (Low mid-week World Showcase)
            case 4: selectedDailyParks.push("mk"); break; // Thursday: Magic Kingdom (2nd best MK day!)
            case 5: selectedDailyParks.push("springs"); break; // Friday: Disney Springs / Abstinence Seafood / Basilica
            case 6: selectedDailyParks.push("hopper_mk_epcot"); break; // Saturday: Park Hopper
            default: selectedDailyParks.push("mk");
          }
        }
      }
    }
  }

  container.innerHTML = Array.from({ length: duration }).map((_, idx) => {
    const curDate = new Date(startDate.getTime() + idx * 86400000);
    const dayOfWeek = curDate.getDay();
    const isSunday = (dayOfWeek === 0);
    const isFriday = (dayOfWeek === 5);
    const isWednesday = (dayOfWeek === 3 && tradition.id === "byzantine");
    const month = curDate.getMonth() + 1;
    const dayOfMonth = curDate.getDate();

    // Check Holy Day of Obligation / Solemnity
    const isHolyDay = tradition.holyDays && tradition.holyDays.some(hd => hd.month === month && hd.day === dayOfMonth);
    const isUniversalSolemnity = (month === 12 && dayOfMonth === 25) || (month === 1 && dayOfMonth === 1) || (month === 8 && dayOfMonth === 15) || (month === 11 && dayOfMonth === 1) || (month === 12 && dayOfMonth === 8);
    const isSolemnity = isHolyDay || isUniversalSolemnity;

    // CANON 1251: Solemnities trump Friday abstinence!
    const solemnityLiftsFridayFast = isFriday && isSolemnity;
    const showFastBadge = (isFriday || isWednesday) && !solemnityLiftsFridayFast;

    const crowd = getCrowdForDate(curDate);
    const formattedDay = curDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const currentSelectedPark = selectedDailyParks[idx] || (isDlr ? "dl" : "mk");

    return `
      <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 12px 14px; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; flex-wrap: wrap; gap: 4px;">
          <strong style="font-size: 0.88rem; color: #0f172a;">Day ${idx + 1}: ${formattedDay}</strong>
          <div style="display: flex; gap: 4px; flex-wrap: wrap;">
            ${isHolyDay ? `<span style="font-size: 0.68rem; font-weight: 800; background: #fee2e2; color: #b91c1c; padding: 1px 6px; border-radius: 4px;">🔴 Holy Day</span>` : ''}
            ${isSunday ? `<span style="font-size: 0.68rem; font-weight: 800; background: #fef3c7; color: #92400e; padding: 1px 6px; border-radius: 4px;">⛪ Mass</span>` : ''}
            ${solemnityLiftsFridayFast ? `<span style="font-size: 0.68rem; font-weight: 800; background: #dcfce7; color: #166534; padding: 1px 6px; border-radius: 4px;">🎉 Solemnity</span>` : ''}
            ${showFastBadge ? `<span style="font-size: 0.68rem; font-weight: 800; background: #dbeafe; color: #1e40af; padding: 1px 6px; border-radius: 4px;">🐟 Fast</span>` : ''}
          </div>
        </div>

        <div style="font-size: 0.74rem; color: #0369a1; margin-bottom: 8px; font-weight: 600;">
          ⏱️ Historical: <strong>${crowd.avgWaitMin}m avg</strong> (Lvl ${crowd.crowdLevel}/10 • ${crowd.season})
        </div>

        <select class="form-select" onchange="window.updateDayPark(${idx}, this.value)" style="font-size: 0.85rem; padding: 6px 10px; border-radius: 8px; font-weight: 700; width: 100%; box-sizing: border-box;">
          ${parkOptions.map(opt => `
            <option value="${opt.id}" ${opt.id === currentSelectedPark ? 'selected' : ''}>
              ${opt.icon} ${opt.name}
            </option>
          `).join('')}
        </select>
      </div>
    `;
  }).join('');
}

window.updateDayPark = (dayIndex, parkId) => {
  selectedDailyParks[dayIndex] = parkId;
};

var generateCustomItinerary = CD.generateCustomItinerary = global.generateCustomItinerary = function() {
  const startInput = document.getElementById('planner-start-date');
  const endInput = document.getElementById('planner-end-date');
  const adultsInput = document.getElementById('planner-adults');
  const teensInput = document.getElementById('planner-teens');
  const kidsInput = document.getElementById('planner-kids');
  const infantsInput = document.getElementById('planner-infants');
  const traditionSelect = document.getElementById('planner-tradition');
  const focusSelect = document.getElementById('planner-focus');
  const outputContainer = document.getElementById('itinerary-output');

  if (!outputContainer) return;

  const adults = Math.max(1, parseInt(adultsInput ? adultsInput.value : '2', 10) || 2);
  const teens = Math.max(0, parseInt(teensInput ? teensInput.value : '1', 10) || 0);
  const kids = Math.max(0, parseInt(kidsInput ? kidsInput.value : '2', 10) || 0);
  const infants = Math.max(0, parseInt(infantsInput ? infantsInput.value : '0', 10) || 0);

  const totalParty = adults + teens + kids + infants;
  const adultTickets = adults + teens; // Ages 10+ pay adult ticket
  const childTickets = kids;           // Ages 3-9 pay child ticket
  const freeTickets = infants;         // Ages 0-2 enter Disney theme parks free!
  const ticketedParty = adultTickets + childTickets; // Total guests 3+

  const traditionId = traditionSelect ? traditionSelect.value : 'roman';
  const focus = focusSelect ? focusSelect.value : 'park-touring';

  const activeTraditions = getActiveTraditions();
  const tradition = activeTraditions[traditionId] || activeTraditions.roman;
  const church = tradition.churchInfo || activeTraditions.roman.churchInfo;

  let startDate = startInput && startInput.value ? new Date(startInput.value + 'T00:00:00') : new Date();
  let endDate = endInput && endInput.value ? new Date(endInput.value + 'T00:00:00') : new Date(startDate.getTime() + 4 * 86400000);

  if (endDate < startDate) {
    endDate = new Date(startDate.getTime() + 4 * 86400000);
  }

  const diffTime = Math.abs(endDate - startDate);
  const duration = Math.max(1, Math.min(14, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1));

  // Build calendar-aware days with custom parks, Canon 1251 logic, and date crowds
  const itineraryDays = buildCalendarItineraryDays({
    startDate,
    duration,
    adults,
    teens,
    kids,
    infants,
    adultTickets,
    childTickets,
    freeTickets,
    ticketedParty,
    totalParty,
    tradition,
    church,
    focus,
    dailyParks: selectedDailyParks
  });

  // Financial stewardship math: only ticketed guests (ages 3+) pay for Lightning Lane
  const dailyLLCost = ticketedParty * 32;
  const totalTripLLSavings = dailyLLCost * duration;

  // Cache current pilgrimage itinerary for printing & travel agent export
  window.currentPilgrimageItinerary = {
    duration,
    startDate: startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    endDate: endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    adults,
    teens,
    kids,
    infants,
    adultTickets,
    childTickets,
    freeTickets,
    ticketedParty,
    totalParty,
    traditionName: tradition.name,
    churchName: church.parishName,
    churchAddress: church.address,
    churchTimes: church.sundayTimes,
    dailyLLCost,
    totalTripLLSavings,
    days: itineraryDays
  };

  outputContainer.innerHTML = `
    <div class="itinerary-output-box animate-fade-in" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 24px; padding: 32px; box-shadow: 0 10px 25px -3px rgba(15, 23, 42, 0.06); margin-top: 30px;">
      <!-- Header Banner & Top Action Buttons -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 20px;">
        <div style="flex: 1; min-width: 280px;">
          <span class="park-pill" style="background: #fef3c7; color: #92400e; font-weight: 800; font-size: 0.85rem;">
            👨‍👩‍👧‍👦 Custom Catholic Pilgrimage Plan
          </span>
          <h3 style="color: #0f172a; font-size: 1.85rem; margin: 8px 0 4px; font-weight: 800;">
            Your ${duration}-Day Catholic Disney Pilgrimage
          </h3>
          <div style="color: #475569; font-size: 0.95rem; line-height: 1.5;">
            <strong>Travel Dates:</strong> ${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} (${duration} Days)<br>
            <strong>Pilgrimage Party:</strong> 🧑 ${adults} Adult${adults > 1 ? 's' : ''} (18+)${teens > 0 ? ` &nbsp;•&nbsp; 🧒 ${teens} Teen${teens > 1 ? 's' : ''} (10–17)` : ''} &nbsp;•&nbsp; 👧 ${kids} Child${kids === 1 ? '' : 'ren'} (3–9)${infants > 0 ? ` &nbsp;•&nbsp; 👶 ${infants} Toddler${infants > 1 ? 's' : ''} (0–2, Free)` : ''} — <strong>${totalParty} Total Pilgrims</strong> (${adultTickets} Adult Tickets, ${childTickets} Child Tickets, ${freeTickets} Free Under 3)<br>
            <strong>Liturgical Tradition:</strong> ${tradition.name}<br>
            <strong>Designated Orlando Church:</strong> <span style="color: #1a73e8; font-weight: 700;">${church.parishName}</span> (${church.address})
          </div>
        </div>

        <!-- Primary Action Buttons -->
        <div class="print-hide" style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
          <button class="btn btn-sun" onclick="window.printCustomItinerary()" style="font-size: 0.92rem; padding: 11px 18px; font-weight: 800; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2); cursor: pointer;">
            🖨️ Print / Save PDF
          </button>
          <button class="btn btn-primary" onclick="window.openTravelAgentModal()" style="font-size: 0.92rem; padding: 11px 20px; font-weight: 800; background: #1a73e8; color: #ffffff; box-shadow: 0 4px 12px rgba(26, 115, 232, 0.25); cursor: pointer;">
            ✈️ Send to Travel Agent
          </button>
        </div>
      </div>

      <!-- Preferred Catholic Disney Travel Agent Callout Banner -->
      <div class="print-hide" style="background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%); border: 2px solid #bfdbfe; border-radius: 18px; padding: 20px 24px; margin-bottom: 26px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div style="flex: 1; min-width: 280px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <span style="background: #1a73e8; color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 999px; text-transform: uppercase;">
              ✨ 100% Free Planning Partner
            </span>
            <strong style="color: #1e3a8a; font-size: 1.1rem;">Official Catholic Disney Travel Specialist</strong>
          </div>
          <p style="margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;">
            Want stress-free help booking large-family suites, finding resort discounts, and aligning park reservations with Holy Mass and Confession? Our preferred Disney travel specialist services are <strong>100% free to your family</strong> (Disney pays the agent commission).
          </p>
        </div>
        <button class="btn btn-primary" onclick="window.openTravelAgentModal()" style="font-weight: 800; padding: 11px 22px; font-size: 0.92rem; white-space: nowrap; background: #1a73e8; color: #ffffff; cursor: pointer;">
          Send Itinerary to Agent ✈️
        </button>
      </div>

      <!-- Large Family Affirmation & Financial Stewardship Banner -->
      <div style="background: #f0fdf4; border: 2px solid #86efac; border-radius: 18px; padding: 22px 24px; margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <div>
            <span style="background: #dcfce7; color: #166534; font-weight: 800; font-size: 0.78rem; padding: 3px 10px; border-radius: 999px; text-transform: uppercase;">
              ${(teens + kids + infants) >= 3 ? '🌟 Large Family Blessing' : '💡 Financial Stewardship'}
            </span>
            <h4 style="font-size: 1.25rem; color: #14532d; margin: 6px 0 2px; font-weight: 800;">
              Lightning Lane Stewardship Verdict: Save $${totalTripLLSavings.toLocaleString()}+
            </h4>
            <p style="font-size: 0.92rem; color: #166534; margin: 0; line-height: 1.45;">
              For your <strong>${ticketedParty} ticketed pilgrims</strong> (${adultTickets} adults/teens 10+ and ${childTickets} children 3–9), purchasing Disney Lightning Lane Multi Pass would cost <strong>$${dailyLLCost}/day</strong>, totaling <strong>$${totalTripLLSavings.toLocaleString()}</strong> for your trip!${infants > 0 ? ` <em>(Infants 0–2 enter the parks and rides 100% free!)</em>` : ''} By utilizing our early rope-drop strategies, afternoon quiet prayer nook breaks, and Queue Rosaries, you can skip Lightning Lane and direct those funds to a special celebratory dinner or family blessing.
            </p>
          </div>
        </div>
      </div>

      <!-- Day-by-Day Calendar Timeline -->
      <div style="display: grid; gap: 24px;">
        ${itineraryDays.map((day, idx) => `
          <div class="day-timeline-card" style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 24px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
              <div>
                <span style="font-size: 0.85rem; font-weight: 800; color: #1a73e8; background: #e0f2fe; padding: 3px 10px; border-radius: 999px;">
                  Day ${idx + 1} • ${day.formattedDate}
                </span>
                <h4 style="font-size: 1.35rem; color: #0f172a; margin: 8px 0 2px; font-weight: 800;">
                  ${day.title}
                </h4>
              </div>

              <!-- Day Special Badges -->
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${day.isHolyDay ? `
                  <span style="background: #fee2e2; color: #b91c1c; font-weight: 800; font-size: 0.78rem; padding: 4px 10px; border-radius: 999px;">
                    🔴 Holy Day: ${day.holyDayName}
                  </span>
                ` : ''}
                ${day.isSunday ? `
                  <span style="background: #fef3c7; color: #92400e; font-weight: 800; font-size: 0.78rem; padding: 4px 10px; border-radius: 999px;">
                    ⛪ ${church.sundayMassTitle}
                  </span>
                ` : ''}
                ${day.solemnityLiftsFridayFast ? `
                  <span style="background: #dcfce7; color: #166534; font-weight: 800; font-size: 0.78rem; padding: 4px 10px; border-radius: 999px;" title="Code of Canon Law, Canon 1251: Friday abstinence is not observed on Solemnities">
                    🎉 Friday Fast Lifted (Can. 1251 Solemnity)
                  </span>
                ` : (day.isAbstinenceDay ? `
                  <span style="background: #dbeafe; color: #1e40af; font-weight: 800; font-size: 0.78rem; padding: 4px 10px; border-radius: 999px;">
                    🐟 Meat Abstinence Day
                  </span>
                ` : '')}
              </div>
            </div>

            <!-- Historical Crowd Intelligence & Weather Card -->
            <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 12px 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div>
                <span style="font-size: 0.76rem; font-weight: 800; background: ${day.crowd.crowdLevel >= 7 ? '#fee2e2' : (day.crowd.crowdLevel <= 3 ? '#dcfce7' : '#fef3c7')}; color: ${day.crowd.crowdLevel >= 7 ? '#b91c1c' : (day.crowd.crowdLevel <= 3 ? '#15803d' : '#92400e')}; padding: 3px 8px; border-radius: 999px;">
                  📊 Historical Crowd: Level ${day.crowd.crowdLevel}/10 (${day.crowd.crowdTier})
                </span>
                <div style="margin-top: 4px; font-size: 0.92rem; color: #0f172a; font-weight: 700;">
                  Average Wait for ${day.formattedShortDate}: <span style="color: #1a73e8;">${day.crowd.avgWaitMin} min</span> <span style="font-size: 0.8rem; font-weight: 500; color: #64748b;">(Peak: ${day.crowd.peakWaitMin}m • Season: ${day.crowd.season})</span>
                </div>
              </div>
              <div style="text-align: right; font-size: 0.82rem; color: #475569;">
                ☀️ <strong>High:</strong> ${day.crowd.weatherHigh}°F (Low: ${day.crowd.weatherLow}°F)<br>
                ${day.crowd.schoolOut ? '🏖️ <strong>Peak Vacation (Schools Out)</strong>' : '🎒 <strong>Normal School Session</strong>'}
              </div>
            </div>

            <!-- Spiritual Theme -->
            <div style="font-size: 0.9rem; color: #64748b; margin-bottom: 16px; font-weight: 600;">
              🌟 <strong>Spiritual Theme:</strong> ${day.theme}
            </div>

            <!-- Liturgical & Dining Highlights Box -->
            ${day.isAbstinenceDay || day.solemnityLiftsFridayFast || day.isHolyDay || day.isSunday ? `
              <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 14px 16px; margin-bottom: 18px;">
                ${day.isHolyDay ? `
                  <div style="margin-bottom: 6px; font-size: 0.88rem; color: #991b1b;">
                    <strong>🔴 Holy Day Precept:</strong> ${day.holyDayGuidance}
                  </div>
                ` : ''}
                ${day.isSunday ? `
                  <div style="margin-bottom: 6px; font-size: 0.88rem; color: #92400e;">
                    <strong>⛪ Sunday Mass (${tradition.name}):</strong> ${church.sundayTimes} at <em>${church.parishName}</em> (${church.address}). Arrive at ${day.parkName} at approx. ${church.postMassGateArrival} (includes transit/parking buffer).
                  </div>
                ` : ''}
                ${day.solemnityLiftsFridayFast ? `
                  <div style="font-size: 0.88rem; color: #166534;">
                    <strong>🎉 Solemnity Feast Day:</strong> Today is a major Solemnity of the Church (${day.holyDayName || 'the Lord'})! Under Catholic Canon Law (Can. 1251), Friday meat abstinence is lifted for Solemnities. Enjoy your family's celebratory feast!
                  </div>
                ` : (day.isAbstinenceDay ? `
                  <div style="font-size: 0.88rem; color: #1e40af;">
                    <strong>🐟 Meatless Dining Highlight:</strong> ${day.diningRecommendation}
                  </div>
                ` : '')}
              </div>
            ` : ''}

            <!-- Day Schedule Timeline -->
            <ul class="timeline-event-list" style="list-style: none; padding: 0; margin: 0; display: grid; gap: 12px;">
              ${day.events.map(ev => `
                <li style="display: flex; gap: 14px; background: #ffffff; border: 1px solid #f1f5f9; border-radius: 10px; padding: 12px 14px;">
                  <span style="font-weight: 800; color: #1a73e8; font-size: 0.88rem; min-width: 75px;">${ev.time}</span>
                  <div>
                    <strong style="color: #0f172a; font-size: 0.95rem;">${ev.title}</strong>
                    <div style="color: #475569; font-size: 0.88rem; margin-top: 2px;">${ev.description}</div>
                  </div>
                </li>
              `).join('')}
            </ul>

            <!-- Large Family Pro-Tip -->
            ${kids >= 3 ? `
              <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 10px 14px; border-radius: 10px; margin-top: 14px; font-size: 0.85rem; color: #92400e;">
                <strong>👨‍👩‍👧‍👦 Large Family Pro-Tip:</strong> ${day.largeFamilyTip}
              </div>
            ` : ''}

            <!-- Nightly Reflection -->
            <div style="background: #ffffff; padding: 12px 16px; border-radius: 10px; border-left: 3px solid #f59e0b; margin-top: 14px; font-size: 0.88rem; color: #0f172a;">
              <strong style="color: #b45309;">🌙 Nightly Family Reflection:</strong> ${day.nightlyReflection}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Traveler's Blessing Footer -->
      <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; padding: 20px; border-radius: 18px; margin-top: 30px; text-align: center;">
        <h4 style="color: #1e40af; margin: 0 0 6px; font-size: 1.15rem; font-weight: 800;">
          🙏 Traveler's Blessing for the ${totalParty} of You
        </h4>
        <p style="font-size: 0.92rem; margin-bottom: 0; color: #1e3a8a; font-style: italic;">
          "May the Lord direct your steps in peace, and may His holy angels accompany your family on your journey, bringing you safely home with joy. Saint Christopher, Saint Joseph, and Mary Queen of the Universe, pray for our family."
        </p>
      </div>

      <!-- Bottom Action Bar & Reusable Travel Agent CTA -->
      <div class="print-hide" style="margin-top: 30px; padding-top: 24px; border-top: 1.5px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div>
          <h4 style="margin: 0 0 4px; font-size: 1.15rem; color: #0f172a; font-weight: 800;">
            Ready to Lock in Your Family Pilgrimage?
          </h4>
          <p style="margin: 0; font-size: 0.88rem; color: #64748b;">
            Print or save your custom plan, or have our preferred Catholic Disney travel specialist handle room reservations and discounts for free!
          </p>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="btn btn-sun" onclick="window.printCustomItinerary()" style="font-size: 0.92rem; padding: 10px 18px; font-weight: 800; cursor: pointer;">
            🖨️ Print / Save PDF
          </button>
          <button class="btn btn-primary" onclick="window.openTravelAgentModal()" style="font-size: 0.92rem; padding: 10px 20px; font-weight: 800; background: #1a73e8; color: #ffffff; cursor: pointer;">
            ✈️ Send to Travel Agent
          </button>
        </div>
      </div>
    </div>
  `;

  outputContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function buildCalendarItineraryDays({ startDate, duration, adults, kids, totalParty, tradition, church, focus, dailyParks = [] }) {
  const days = [];

  const parkConfigs = {
    mk: {
      parkName: "Magic Kingdom",
      icon: "🏰",
      food: "Columbia Harbour House (Liberty Square - Grilled Salmon & Lobster Roll)",
      theme: "The Sacramental Imagination & The Victory of Good",
      morningEvent: "Rope Drop at Magic Kingdom & Morning Offering walking toward Cinderella Castle.",
      afternoonNook: "Cinderella Castle Mosaics & Liberty Square Quiet Courtyard by the Scripture Bell.",
      eveningEvent: "Happily Ever After Fireworks & Nighttime Fantasyland walk-ons."
    },
    epcot: {
      parkName: "EPCOT",
      icon: "🌐",
      food: "Sunshine Seasons (The Land) or Yorkshire County Fish Shop (UK Fish & Chips)",
      theme: "The Catholic Heritage of the Nations (The Church Universal)",
      morningEvent: "World Discovery / Nature rope-drop (Guardians of the Galaxy or Soarin').",
      afternoonNook: "Stave Church in Norway (air-conditioned prayer) & St. George Fountain in Germany.",
      eveningEvent: "World Showcase Promenade stroll & Luminous fireworks over the lagoon."
    },
    hs: {
      parkName: "Disney's Hollywood Studios",
      icon: "🎬",
      food: "ABC Commissary (Grilled Shrimp Tacos) or Docking Bay 7 (Felucian Kefta Spread)",
      theme: "Courage in the Battle of Faith & Moral Truth",
      morningEvent: "Star Wars: Galaxy's Edge & Toy Story Land morning touring.",
      afternoonNook: "Echo Lake Shaded Veranda & Grand Avenue peaceful alcoves.",
      eveningEvent: "Fantasmic! (celebrating the triumph of imagination and good over darkness)."
    },
    ak: {
      parkName: "Disney's Animal Kingdom",
      icon: "🌳",
      food: "Satu'li Canteen (Pandora - Chili-Garlic Tofu Bowl & Ocean Fish)",
      theme: "St. Francis of Assisi & Christian Creation Stewardship",
      morningEvent: "Kilimanjaro Safaris golden hour & Avatar Flight of Passage.",
      afternoonNook: "Discovery Island Tree of Life Trails & Maharajah Jungle Trek peaceful ruins.",
      eveningEvent: "Festival of the Lion King & sunset walk through Pandora's bioluminescent pathways."
    },
    hopper_mk_epcot: {
      parkName: "Park Hopper: Magic Kingdom & EPCOT",
      icon: "🦘",
      food: "Columbia Harbour House (Liberty Square) & Sunshine Seasons (The Land)",
      theme: "From the Castle of Truth to the Church of the Nations",
      morningEvent: "Morning rope drop at Magic Kingdom (Fantasyland & Adventureland classics).",
      afternoonNook: "Midday Monorail transit to EPCOT; air-conditioned prayer in Norway Stave Church.",
      eveningEvent: "World Showcase dinner promenade & Luminous fireworks over World Showcase Lagoon."
    },
    hopper_ak_hs: {
      parkName: "Park Hopper: Animal Kingdom & Studios",
      icon: "🦘",
      food: "Satu'li Canteen (Pandora) & ABC Commissary (Hollywood Studios)",
      theme: "Care of God's Creation & Heroic Moral Courage",
      morningEvent: "Morning Kilimanjaro Safaris & Avatar Flight of Passage at Animal Kingdom.",
      afternoonNook: "Midday decompression break, then transit to Hollywood Studios by 2:30 PM.",
      eveningEvent: "Toy Story Land, Galaxy's Edge, and evening Fantasmic! show."
    },
    hopper_custom: {
      parkName: "Park Hopper (Two Parks)",
      icon: "🦘",
      food: "Quick-Service lunch at Park 1 & Sit-down dining at Park 2",
      theme: "Dynamic Pilgrimage & Christian Joy",
      morningEvent: "Rope drop your primary park wishlist attractions before morning wait times surge.",
      afternoonNook: "Midday travel buffer and sensory rest in a quiet prayer nook.",
      eveningEvent: "Hop to your second park at 2:00 PM for evening rides and fireworks."
    },
    springs: {
      parkName: "Disney Springs & Resort Leisure",
      icon: "🛍️",
      food: "Cookes of Dublin / Raglan Road Irish Pub (Atlantic Fish & Chips / Shepherd's Pie)",
      theme: "Sabbath Fellowship & St. Joseph the Worker",
      morningEvent: "Sleep in, morning family prayer, and relaxing poolside morning at your resort.",
      afternoonNook: "Stroll Disney Springs waterfront, World of Disney, and Lego imagination sculptures.",
      eveningEvent: "Dinner at Raglan Road with live Irish music and evening waterfront stroll."
    },
    dl: {
      parkName: "Disneyland Park",
      icon: "🏰",
      food: "French Market / Cafe Orleans (New Orleans Square - Salmon / Gumbo) or Plaza Inn",
      theme: "The Original Storybook Kingdom & The Triumph of Virtue",
      morningEvent: "Rope Drop at Disneyland Park & Morning Offering walking down Main Street toward Sleeping Beauty Castle.",
      afternoonNook: "Snow White Grotto wishing well & Court of Angels quiet courtyard in New Orleans Square.",
      eveningEvent: "Together Forever Fireworks over Sleeping Beauty Castle & late night Matterhorn bobsledding."
    },
    dca: {
      parkName: "Disney California Adventure",
      icon: "🎡",
      food: "Pacific Wharf Cafe (Sourdough Clam Chowder) or Flo's V8 Cafe in Cars Land",
      theme: "St. Junípero Serra, California Wilderness & Family Heroism",
      morningEvent: "Radiator Springs Racers rope drop & morning flight on Soarin' Around the World.",
      afternoonNook: "Redwood Creek Challenge Trail pine amphitheater & Carthay Circle fountain courtyard.",
      eveningEvent: "Cars Land sunset neon lighting & World of Color luminous water spectacular."
    },
    hopper_dl_dca: {
      parkName: "Park Hopper: Disneyland + DCA",
      icon: "🦘",
      food: "French Market / Cafe Orleans (Lunch) & San Fransokyo Square Sourdough (Dinner)",
      theme: "Two Parks, One Sacred Journey (Seamless 60-Second Esplanade Walk)",
      morningEvent: "Morning E-tickets at Disneyland Park (Space Mountain, Indiana Jones).",
      afternoonNook: "Breeze across the 100-foot Esplanade into DCA for Grizzly Peak shade and afternoon treats.",
      eveningEvent: "Cars Land neon illumination followed by Disneyland nighttime fireworks."
    },
    downtown_disney: {
      parkName: "Downtown Disney & Hotel Discovery",
      icon: "🛍️",
      food: "Naples Ristorante e Bar (Wood-fired Margherita Pizza) or Jazz Kitchen Coastal Grill",
      theme: "Sabbath Rest, Family Fellowship & Southern California Sunshine",
      morningEvent: "Gentle morning stroll through the craftsman architecture of Disney's Grand Californian Hotel.",
      afternoonNook: "Grand Californian great hearth lobby (relax by the massive stone fireplace).",
      eveningEvent: "Outdoor live music in Downtown Disney and sweet Mickey beignets."
    },
    mission_excursion: {
      parkName: "Mission San Juan Capistrano Excursion",
      icon: "🔔",
      food: "Historic El Adobe de Capistrano or Trevors at the Tracks (historic depot)",
      theme: "In the Footsteps of Saint Junípero Serra (1776 Serra Chapel)",
      morningEvent: "Scenic 22-minute ride on the Amtrak Pacific Surfliner from Anaheim ARTIC depot directly to historic Capistrano.",
      afternoonNook: "Serra Chapel (built 1782)—the only surviving church where St. Junípero Serra offered Holy Mass.",
      eveningEvent: "Walk the 400-year-old mission gardens, ring the sacred bells, and evening train return to Anaheim."
    },
    travel_arrival: {
      parkName: "Travel & Arrival Day",
      icon: "✈️",
      food: "Resort food court or casual dining",
      theme: "The Pilgrim's Journey & St. Christopher's Protection",
      morningEvent: `Travel journey to ${(getActiveResortId() === 'dlr') ? 'Anaheim, California' : 'Orlando, Florida'}. Pray the Traveler's Blessing for safe arrival.`,
      afternoonNook: "Hotel check-in, unpacking, stroller assembly, and exploring the resort grounds.",
      eveningEvent: "Evening family dinner, unpacking, and early bedtime to prepare for rope drop tomorrow!"
    },
    travel_depart: {
      parkName: "Travel & Departure Day",
      icon: "🚗",
      food: "Morning resort breakfast or airport travel dining",
      theme: "Gratitude, Thanksgiving & Carrying Grace Home",
      morningEvent: "Morning Mass of Thanksgiving for family blessings and safe vacation memories.",
      afternoonNook: `Pack bags, return rental strollers, and bid farewell to ${(getActiveResortId() === 'dlr') ? 'Disneyland Resort' : 'Walt Disney World'}.`,
      eveningEvent: "Safe travels home with peaceful hearts, refreshed in faith and family unity."
    },
    rest: {
      parkName: (getActiveResortId() === 'dlr') ? "Christ Cathedral Pilgrimage & Rest Day" : "Basilica Pilgrimage & Rest Day",
      icon: "⛪",
      food: (getActiveResortId() === 'dlr') ? "Christ Cathedral Cultural Plaza / Garden Grove dining" : "Cookes of Dublin / Raglan Road at Disney Springs",
      theme: "Sabbath Rest, Marian Pilgrimage & Family Renewal",
      morningEvent: `Pilgrimage and Holy Mass at ${church.shortName} (${church.address}).`,
      afternoonNook: `Sacrament of Confession at ${church.shortName}, followed by peaceful family rest.`,
      eveningEvent: (getActiveResortId() === 'dlr') ? "Evening stroll through Downtown Disney with sweet treats." : "Family stroll and dinner at Disney Springs with live Irish music."
    }
  };

  const largeFamilyTips = [
    "Rider Switch (Child Swap): Ask the Cast Member at the line entrance! One parent waits with young toddlers while the other rides with older kids, then parents swap without waiting twice.",
    "Stroller Spotting Ribbon: With thousands of parked strollers, tie a bright ribbon or Catholic family bandana to the handle to spot your double stroller in seconds.",
    "Bulk Snack Stash & Free Ice Water: Pack gallon bags with trail mix, pretzels, and fruit. Any Disney quick-service counter provides free cups of iced water on request!",
    "Midday Sensory Decompression: Between 1:30 PM and 4:00 PM, large families thrive by finding a quiet shaded retreat (e.g. Tom Sawyer Island or Morocco Pavilion courtyards) for quiet prayer and rest.",
    "Shareable Quick-Service Dining: Platters at Columbia Harbour House and Pecos Bill are large enough to split between kids, saving dozens of dollars per meal compared to table-service."
  ];

  for (let i = 0; i < duration; i++) {
    const currentDate = new Date(startDate.getTime() + i * 86400000);
    const dayOfWeek = currentDate.getDay();
    const month = currentDate.getMonth() + 1;
    const dayOfMonth = currentDate.getDate();

    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const formattedShortDate = currentDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });

    const isSunday = (dayOfWeek === 0);
    const isFriday = (dayOfWeek === 5);
    const isWednesday = (dayOfWeek === 3 && tradition.id === "byzantine");

    // Check Holy Day of Obligation
    let isHolyDay = false;
    let isSolemnity = false;
    let holyDayName = "";
    let holyDayGuidance = "";

    if (tradition && tradition.holyDays) {
      const match = tradition.holyDays.find(hd => hd.month === month && hd.day === dayOfMonth);
      if (match) {
        isHolyDay = true;
        isSolemnity = true;
        holyDayName = match.feast;
        holyDayGuidance = `${match.notes} Mass obligation is celebrated locally: ${match.massAtDisney}`;
      }
    }

    // Universal Solemnities
    if ((month === 12 && dayOfMonth === 25) || (month === 1 && dayOfMonth === 1) || (month === 8 && dayOfMonth === 15) || (month === 11 && dayOfMonth === 1) || (month === 12 && dayOfMonth === 8)) {
      isSolemnity = true;
      if (!holyDayName) {
        holyDayName = (month === 12 && dayOfMonth === 25) ? "Christmas Day (The Nativity of the Lord)" : "Solemnity of Mary, Mother of God";
      }
    }

    // CANON 1251: Friday abstinence is lifted on Solemnities!
    let isAbstinenceDay = isFriday || isWednesday;
    let solemnityLiftsFridayFast = false;

    if (isFriday && isSolemnity) {
      isAbstinenceDay = false;
      solemnityLiftsFridayFast = true;
    }

    // Determine exact historical crowd and weather from 5-year dataset
    const crowd = getCrowdForDate(currentDate);

    // Determine park from user choice or fallback
    const chosenParkId = (dailyParks && dailyParks[i]) ? dailyParks[i] : (isSunday ? "mk" : ["mk", "epcot", "hs", "ak"][i % 4]);
    const parkInfo = parkConfigs[chosenParkId] || parkConfigs.mk;
    const largeFamilyTip = largeFamilyTips[i % largeFamilyTips.length];

    const events = [];

    if (isSunday) {
      events.push({
        time: church.defaultTime.split(' ')[0] || "8:00 AM",
        title: `${church.sundayMassTitle} at ${church.shortName}`,
        description: `Attend ${church.liturgyType} at ${church.address} (${church.distance}). ${church.specialNotes}`
      });
      events.push({
        time: church.postMassGateArrival || "10:15 AM",
        title: `Transit Buffer & Arrival at ${parkInfo.parkName}`,
        description: `Arrive refreshed after Mass (includes ${church.transitBufferMin}m transit and parking buffer). Head directly to high-capacity classics.`
      });
    } else if (isHolyDay) {
      events.push({
        time: "8:30 AM",
        title: `Holy Day Liturgy: ${holyDayName}`,
        description: `Fulfill your Holy Day precept at ${church.shortName} (${church.address}) before entering ${parkInfo.parkName}.`
      });
      events.push({
        time: "10:30 AM",
        title: `Enter ${parkInfo.parkName} with Holy Grace`,
        description: "Begin your day refreshed in spirit with your family."
      });
    } else {
      events.push({
        time: "8:00 AM",
        title: parkInfo.morningEvent,
        description: "Begin your day with the morning offering and prayer of thanksgiving."
      });
    }

    if (!chosenParkId.includes("rest") && !chosenParkId.includes("travel") && !chosenParkId.includes("springs")) {
      events.push({
        time: "11:00 AM",
        title: "Queue Rosary Devotion in Line",
        description: `During your first 35+ minute queue at ${parkInfo.parkName}, gather the family to pray 1 to 2 decades of the Queue Rosary together.`
      });
    }

    events.push({
      time: "1:30 PM",
      title: solemnityLiftsFridayFast 
        ? `Celebratory Solemnity Feast at ${parkInfo.food.split(' (')[0]}` 
        : (isAbstinenceDay ? `Meatless Lunch at ${parkInfo.food.split(' (')[0]}` : `Family Lunch at ${parkInfo.parkName}`),
      description: solemnityLiftsFridayFast
        ? `Under Canon 1251, Friday fast is lifted today for the Solemnity of ${holyDayName}! Enjoy a joyful family celebratory meal.`
        : (isAbstinenceDay 
            ? `Enjoy delicious seafood or plant-based meals at ${parkInfo.food}. Honor your Friday penance joyfully!`
            : `Hydrate and rest during midday heat. Pray the family blessing before meals.`)
    });

    events.push({
      time: "3:30 PM",
      title: `Midday Break: ${parkInfo.afternoonNook.split(' & ')[0]}`,
      description: parkInfo.afternoonNook
    });

    events.push({
      time: "8:30 PM",
      title: parkInfo.eveningEvent,
      description: "Enjoy peaceful nighttime touring when queues drop significantly."
    });

    days.push({
      formattedDate,
      formattedShortDate,
      parkName: parkInfo.parkName,
      isSunday,
      isFriday,
      isAbstinenceDay,
      solemnityLiftsFridayFast,
      isHolyDay,
      holyDayName,
      holyDayGuidance,
      crowd,
      title: `${parkInfo.icon} ${parkInfo.parkName}: ${isHolyDay ? holyDayName : isSunday ? `${church.sundayMassTitle} & Wonder` : 'Family Pilgrimage Adventure'}`,
      theme: isHolyDay ? `Honoring ${holyDayName}` : parkInfo.theme,
      diningRecommendation: parkInfo.food,
      largeFamilyTip,
      events,
      nightlyReflection: `How did our family witness to Christ's love and patience today, especially in waiting and caring for one another?`
    });
  }

  return days;
}

// ==========================================================
// Print & PDF Controller
// ==========================================================
window.printCustomItinerary = () => {
  const plan = window.currentPilgrimageItinerary;
  let printHeader = document.getElementById('print-itinerary-header');
  
  if (!printHeader) {
    printHeader = document.createElement('div');
    printHeader.id = 'print-itinerary-header';
    printHeader.className = 'print-only-banner';
    
    printHeader.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f172a; padding-bottom: 8px; margin-bottom: 12px;">
        <div>
          <h1 style="font-size: 20pt; margin: 0; color: #0f172a; font-weight: 900;">CatholicDisney.com</h1>
          <div style="font-size: 11pt; color: #475569; font-weight: 600;">Custom Large-Family Pilgrimage Itinerary &amp; Liturgical Schedule</div>
        </div>
        <div style="text-align: right; font-size: 9.5pt; color: #334155;">
          <strong>Date Printed:</strong> ${new Date().toLocaleDateString('en-US')}<br>
          <em>"May the Holy Angels guide your pilgrimage!"</em>
        </div>
      </div>
      ${plan ? `
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; margin-bottom: 12px; font-size: 9.5pt; line-height: 1.4;">
          <strong>Dates:</strong> ${plan.startDate} – ${plan.endDate} (${plan.duration} Days) &nbsp;•&nbsp; 
          <strong>Party:</strong> ${plan.adults} Adults (18+)${plan.teens > 0 ? `, ${plan.teens} Teens (10–17)` : ''}, ${plan.kids} Children (3–9)${plan.infants > 0 ? `, ${plan.infants} Toddlers (0–2, Free)` : ''} — <strong>${plan.totalParty} Total Pilgrims</strong> (${plan.adultTickets} Adult Tickets, ${plan.childTickets} Child Tickets, ${plan.freeTickets} Free Under 3) &nbsp;•&nbsp; 
          <strong>Tradition:</strong> ${plan.traditionName} &nbsp;•&nbsp; 
          <strong>Parish:</strong> ${plan.churchName} (${plan.churchAddress})
        </div>
      ` : ''}
    `;

    const itineraryBox = document.querySelector('.itinerary-output-box');
    if (itineraryBox) {
      itineraryBox.insertBefore(printHeader, itineraryBox.firstChild);
    }
  }

  window.print();
};

// ==========================================================
// Travel Agent Modal & Lead Submission Controller
// ==========================================================
window.openTravelAgentModal = () => {
  const plan = window.currentPilgrimageItinerary;
  let modalWrapper = document.getElementById('travel-agent-modal-wrapper');
  if (!modalWrapper) {
    modalWrapper = document.createElement('div');
    modalWrapper.id = 'travel-agent-modal-wrapper';
    document.body.appendChild(modalWrapper);
  }

  const durationStr = plan ? `${plan.duration} Days (${plan.startDate} – ${plan.endDate})` : 'Custom Dates';
  const partyStr = plan 
    ? `${plan.adults} Adults (18+)${plan.teens > 0 ? `, ${plan.teens} Teens (10–17)` : ''}, ${plan.kids} Kids (3–9)${plan.infants > 0 ? `, ${plan.infants} Toddlers (0–2, Free)` : ''} — ${plan.totalParty} Total Pilgrims`
    : 'Family Pilgrims';
  const ticketStr = plan
    ? `${plan.adultTickets} Adult Tickets (10+), ${plan.childTickets} Child Tickets (3–9), ${plan.freeTickets} Free Toddlers (0–2)`
    : 'Theme Park Tickets';
  const churchStr = plan ? `${plan.churchName} (${plan.traditionName})` : 'Catholic Parish in Orlando';

  modalWrapper.innerHTML = `
    <div style="position: fixed; inset: 0; background: rgba(15, 23, 42, 0.78); backdrop-filter: blur(6px); z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 16px; box-sizing: border-box;" onclick="if(event.target === this) window.closeTravelAgentModal()">
      <div style="background: #ffffff; border-radius: 24px; max-width: 650px; width: 100%; max-height: 92vh; overflow-y: auto; padding: 28px 24px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.35); position: relative; border: 2.5px solid #1a73e8; box-sizing: border-box;">
        
        <!-- Close Button -->
        <button onclick="window.closeTravelAgentModal()" aria-label="Close" style="position: absolute; top: 16px; right: 16px; background: #f1f5f9; border: none; width: 36px; height: 36px; border-radius: 50%; font-size: 1.3rem; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #475569; z-index: 10; font-weight: 800;">
          ✕
        </button>

        <!-- Header -->
        <div style="margin-bottom: 16px; padding-right: 36px;">
          <span class="park-pill" style="background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 0.78rem;">
            ✈️ Official Catholic Disney Travel Partner
          </span>
          <h2 style="font-size: 1.55rem; color: #0f172a; margin: 8px 0 4px; font-weight: 800; line-height: 1.25;">
            Send Itinerary to Our Travel Specialist
          </h2>
          <p style="font-size: 0.88rem; color: #64748b; margin: 0; line-height: 1.45;">
            Our preferred Catholic Disney travel specialist helps your family secure large-family room layouts, discounts, and dining at <strong>zero extra cost</strong> (Disney pays the agent commission directly).
          </p>
        </div>

        <!-- 100% Free Service Benefits Strip -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px 14px; margin-bottom: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.8rem; color: #334155;">
          <div>✅ <strong>100% Free Service</strong> (No markup or fee)</div>
          <div>👨‍👩‍👧‍👦 <strong>Large Family Suites</strong> (Connecting rooms/villas)</div>
          <div>⛪ <strong>Mass Schedule Sync</strong> (Never miss Sunday Mass)</div>
          <div>🏷️ <strong>Discount Monitoring</strong> (Auto-applies price drops)</div>
        </div>

        <!-- Pre-populated Trip Summary -->
        <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 14px; padding: 12px 16px; margin-bottom: 18px;">
          <div style="font-size: 0.8rem; font-weight: 800; color: #1e40af; text-transform: uppercase; margin-bottom: 3px;">
            📋 Attached Pilgrimage Itinerary &amp; Ticket/Hotel Breakdown
          </div>
          <div style="font-size: 0.88rem; color: #1e3a8a; line-height: 1.45;">
            <strong>Dates:</strong> ${durationStr}<br>
            <strong>Party:</strong> ${partyStr}<br>
            <strong>Tickets:</strong> ${ticketStr}<br>
            <strong>Church:</strong> ${churchStr}
          </div>
        </div>

        <!-- Form Content Container -->
        <div id="ta-form-container">
          <form id="travel-agent-form" onsubmit="window.handleTravelAgentSubmit(event)">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
              <div>
                <label style="display: block; font-size: 0.82rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
                  Your Full Name *
                </label>
                <input type="text" id="ta-name" required class="form-input" placeholder="e.g. John &amp; Kayla Garone" style="padding: 9px 12px; font-size: 0.88rem; width: 100%; box-sizing: border-box; border-radius: 10px; border: 1.5px solid #cbd5e1;">
              </div>
              <div>
                <label style="display: block; font-size: 0.82rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
                  Email Address *
                </label>
                <input type="email" id="ta-email" required class="form-input" placeholder="you@example.com" style="padding: 9px 12px; font-size: 0.88rem; width: 100%; box-sizing: border-box; border-radius: 10px; border: 1.5px solid #cbd5e1;">
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
              <div>
                <label style="display: block; font-size: 0.82rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
                  Phone Number (for text/quotes)
                </label>
                <input type="tel" id="ta-phone" class="form-input" placeholder="(555) 000-0000" style="padding: 9px 12px; font-size: 0.88rem; width: 100%; box-sizing: border-box; border-radius: 10px; border: 1.5px solid #cbd5e1;">
              </div>
              <div>
                <label style="display: block; font-size: 0.82rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
                  Preferred Lodging Tier
                </label>
                <select id="ta-lodging" class="form-select" style="padding: 9px 12px; font-size: 0.85rem; width: 100%; box-sizing: border-box; border-radius: 10px; border: 1.5px solid #cbd5e1;">
                  ${getActiveResortId() === 'dlr' ? `
                    <option value="Harbor Blvd Walkable Good Neighbor Suites (Direct Walk to Gates)" selected>Harbor Blvd Good Neighbor Suites (Walk to Gates)</option>
                    <option value="Disneyland Hotel (Classic Disney Nostalgia &amp; Monorail)">Disneyland Hotel (Classic Nostalgia)</option>
                    <option value="Disney's Grand Californian Hotel &amp; Spa (Private DCA Entrance)">Grand Californian Hotel &amp; Spa</option>
                    <option value="Pixar Place Hotel (Modern Suites overlooking DCA)">Pixar Place Hotel</option>
                    <option value="Tickets &amp; Itinerary Only (Lodging already arranged)">Tickets &amp; Planning Only (Lodging booked)</option>
                    <option value="Recommend the Best Large-Family Value Option">Recommend Best Large-Family Value</option>
                  ` : `
                    <option value="Disney Value Family Suites (Art of Animation / All-Star Music for 6)" selected>Disney Value Suites (Art of Animation / Music for 6)</option>
                    <option value="Disney Moderate (Fort Wilderness Cabins for 6 / Caribbean Beach)">Disney Moderate (Fort Wilderness Cabins for 6)</option>
                    <option value="Disney Deluxe &amp; 1-2 Bedroom Villa Suites">Disney Deluxe &amp; 1-2 Bedroom Villas</option>
                    <option value="Off-Property Family Suites (Near Mary Queen of the Universe)">Off-Property Suites (Near Mary Queen of Universe)</option>
                    <option value="Tickets &amp; Itinerary Only (Lodging already arranged)">Tickets &amp; Planning Only (Lodging booked)</option>
                    <option value="Recommend the Best Large-Family Value Option">Recommend Best Large-Family Value</option>
                  `}
                </select>
              </div>
            </div>

            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 0.82rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
                Special Questions or Family Notes
              </label>
              <textarea id="ta-notes" rows="3" class="form-textarea" placeholder="e.g. We have toddlers needing stroller rentals, or would love advice on character dining and Fort Wilderness campfire sing-a-longs..." style="padding: 9px 12px; font-size: 0.88rem; width: 100%; box-sizing: border-box; border-radius: 10px; border: 1.5px solid #cbd5e1;"></textarea>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button type="submit" id="ta-submit-btn" class="btn btn-primary" style="flex: 2; min-width: 200px; justify-content: center; font-weight: 800; padding: 12px 18px; border-radius: 12px; background: #1a73e8; color: #ffffff; cursor: pointer;">
                ✈️ Send Itinerary to Travel Agent
              </button>
              <button type="button" onclick="window.copyItineraryText()" class="btn btn-outline" style="flex: 1; min-width: 140px; justify-content: center; font-size: 0.88rem; border-radius: 12px; cursor: pointer;">
                📋 Copy Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  modalWrapper.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

window.closeTravelAgentModal = () => {
  const modalWrapper = document.getElementById('travel-agent-modal-wrapper');
  if (modalWrapper) {
    modalWrapper.style.display = 'none';
    modalWrapper.innerHTML = '';
  }
  document.body.style.overflow = '';
};

window.handleTravelAgentSubmit = (e) => {
  e.preventDefault();
  const plan = window.currentPilgrimageItinerary;
  const name = document.getElementById('ta-name')?.value || 'Catholic Disney Pilgrim';
  const email = document.getElementById('ta-email')?.value || '';
  const phone = document.getElementById('ta-phone')?.value || 'Not provided';
  const lodging = document.getElementById('ta-lodging')?.value || 'Disney Value Family Suites';
  const notes = document.getElementById('ta-notes')?.value || 'None';

  const dailyParksText = plan && plan.days ? plan.days.map((d, i) => `• Day ${i + 1} (${d.formattedShortDate}): ${d.parkName}`).join('\n') : 'Custom Schedule';

  const summaryText = `Catholic Disney Pilgrimage Inquiry:
Guest Name: ${name}
Email: ${email}
Phone: ${phone}
Lodging Preference: ${lodging}

PILGRIMAGE & LODGING/TICKETING BREAKDOWN:
Dates: ${plan ? `${plan.startDate} to ${plan.endDate} (${plan.duration} Days)` : 'Custom'}
Party Breakdown:
- Adults (Ages 18+): ${plan ? plan.adults : '2'} (Hotel room pricing base; standard room includes up to 2 adults)
- Teens & Youths (Ages 10–17): ${plan ? plan.teens : '0'} (Adult park ticket, but child hotel rate - no room surcharge!)
- Children (Ages 3–9): ${plan ? plan.kids : '0'} (Child park ticket & child hotel rate)
- Toddlers (Ages 0–2): ${plan ? plan.infants : '0'} (100% Free park admission & free crib in room)
- Total Pilgrims: ${plan ? plan.totalParty : '0'}
- Theme Park Tickets: ${plan ? `${plan.adultTickets} Adult Tickets (10+), ${plan.childTickets} Child Tickets (3–9), ${plan.freeTickets} Free Under 3` : ''}
Liturgical Tradition: ${plan ? plan.traditionName : 'Roman Rite'}
Designated Church: ${plan ? `${plan.churchName} (${plan.churchAddress})` : 'Orlando Parish'}
Estimated Lightning Lane Savings: $${plan ? plan.totalTripLLSavings.toLocaleString() : '0'}

DAILY PARKS PLANNED:
${dailyParksText}

SPECIAL FAMILY REQUESTS & NOTES:
${notes}
`;

  // Submit to Netlify forms endpoint in the background
  try {
    const formData = new URLSearchParams();
    formData.append('form-name', 'travel-agent-inquiry');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('lodging', lodging);
    formData.append('trip-dates', plan ? `${plan.startDate} - ${plan.endDate}` : '');
    formData.append('adults', plan ? plan.adults : '');
    formData.append('teens', plan ? plan.teens : '');
    formData.append('kids', plan ? plan.kids : '');
    formData.append('infants', plan ? plan.infants : '');
    formData.append('party-size', plan ? `${plan.totalParty} Total (${plan.adults} Adults 18+, ${plan.teens} Teens 10-17, ${plan.kids} Kids 3-9, ${plan.infants} Infants 0-2)` : '');
    formData.append('liturgical-tradition', plan ? plan.traditionName : '');
    formData.append('itinerary-summary', dailyParksText);
    formData.append('notes', notes);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    }).catch(err => console.log('Netlify form background submission:', err));
  } catch (err) {
    console.log('Background form catch:', err);
  }

  // Generate mailto link for direct sending
  const mailtoSubject = encodeURIComponent(`Catholic Disney Pilgrimage Inquiry - ${name} (${plan ? plan.totalParty : ''} Pilgrims)`);
  const mailtoBody = encodeURIComponent(summaryText);
  const mailtoUrl = `mailto:travel@catholicdisney.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  // Copy details to clipboard automatically
  if (navigator.clipboard) {
    navigator.clipboard.writeText(summaryText).catch(() => {});
  }

  // Display joyful confirmation view inside modal
  const container = document.getElementById('ta-form-container');
  if (container) {
    container.innerHTML = `
      <div style="background: #f0fdf4; border: 2px solid #86efac; border-radius: 18px; padding: 22px; text-align: center; animation: fadeIn 0.3s ease;">
        <div style="font-size: 2.4rem; margin-bottom: 6px;">🎉</div>
        <h3 style="font-size: 1.35rem; color: #166534; margin: 0 0 8px; font-weight: 800;">
          Deo Gratias! Your Inquiry Has Been Prepared!
        </h3>
        <p style="font-size: 0.92rem; color: #14532d; line-height: 1.5; margin: 0 0 16px;">
          Thank you, <strong>${name}</strong>! Your customized ${plan ? `${plan.duration}-day` : ''} pilgrimage itinerary has been copied to your clipboard and logged for our Catholic Disney travel specialist.
        </p>
        <div style="display: flex; flex-direction: column; gap: 10px; max-width: 360px; margin: 0 auto;">
          <a href="${mailtoUrl}" class="btn btn-primary" style="justify-content: center; font-weight: 800; padding: 12px; border-radius: 12px; text-decoration: none;">
            ✉️ Open in Email App to Send Directly
          </a>
          <button onclick="window.closeTravelAgentModal()" class="btn btn-outline" style="justify-content: center; font-size: 0.9rem; border-radius: 12px; cursor: pointer;">
            Back to Itinerary
          </button>
        </div>
      </div>
    `;
  }
};

window.copyItineraryText = () => {
  const plan = window.currentPilgrimageItinerary;
  if (!plan) return;

  const summary = `Catholic Disney Pilgrimage Plan:
Dates: ${plan.startDate} – ${plan.endDate} (${plan.duration} Days)
Party: ${plan.adults} Adults, ${plan.kids} Children (${plan.totalParty} Pilgrims)
Liturgical Tradition: ${plan.traditionName}
Parish: ${plan.churchName} (${plan.churchAddress})
Estimated Lightning Lane Savings: $${plan.totalTripLLSavings.toLocaleString()}

Daily Schedule:
${plan.days.map((d, i) => `• Day ${i + 1} (${d.formattedShortDate}): ${d.parkName} - ${d.title}`).join('\n')}

Generated on CatholicDisney.com
`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(summary).then(() => {
      alert('Pilgrimage itinerary copied to clipboard! You can paste it into an email or message to your travel agent.');
    });
  }
};

window.applyRecommendedDates = (startStr, endStr) => {
  const startInput = document.getElementById('planner-start-date');
  const endInput = document.getElementById('planner-end-date');
  const plannerFormCard = document.getElementById('itinerary-planner-card');

  if (startInput) startInput.value = startStr;
  if (endInput) endInput.value = endStr;

  refreshDailyParksUI();

  if (plannerFormCard) {
    plannerFormCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (typeof window.showToast === 'function') {
    window.showToast(
      '📅 Travel Dates Applied!',
      `Selected ${startStr} to ${endStr}. Review your daily schedule and tap Generate Itinerary! ✨`,
      '🌟'
    );
  }
};


  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/creators-hub.js
  // ==========================================

  (function() {
// Catholic Animation & Creative Arts Showcase Component



var initCreatorsHub = CD.initCreatorsHub = global.initCreatorsHub = function() {
  renderCreatorsCards();
  renderCommunityCta();

  window.addEventListener('catholic-resort-changed', () => {
    renderCreatorsCards();
    renderCommunityCta();
  });
}

var renderCreatorsCards = CD.renderCreatorsCards = global.renderCreatorsCards = function() {
  const container = document.getElementById('creators-cards-grid');
  if (!container) return;

  const isDlr = getActiveResortId() === 'dlr';
  const data = isDlr ? disneylandCreatorsData : creatorsData;

  container.innerHTML = data.map(creator => `
    <div class="parish-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
        <span class="park-pill" style="background: rgba(212, 175, 55, 0.15); border-color: var(--border-gold-glow); color: var(--gold-light);">
          ${creator.category}
        </span>
        <span style="font-size: 0.8rem; color: #52b788; font-weight: 700;">● ${creator.status}</span>
      </div>

      <h4 style="font-size: 1.4rem; color: #fff; margin-bottom: 4px;">${creator.name}</h4>
      <div style="font-size: 0.88rem; color: var(--marian-light); margin-bottom: 12px;">${creator.founder}</div>

      <div style="background: rgba(4, 9, 20, 0.6); padding: 12px 16px; border-radius: var(--radius-sm); border-left: 3px solid var(--gold-primary); margin-bottom: 14px;">
        <div style="font-size: 0.8rem; color: var(--gold-light); font-weight: 700; text-transform: uppercase;">Featured Project / Activity</div>
        <div style="font-size: 1rem; color: #fff; font-weight: 600; margin-top: 2px;">${creator.featuredProject}</div>
      </div>

      <p style="font-size: 0.92rem; margin-bottom: 14px;">${creator.mission}</p>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">${creator.description}</p>

      <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border-subtle);">
        ${creator.tags.map(t => `<span class="virtue-tag">#${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

var renderCommunityCta = CD.renderCommunityCta = global.renderCommunityCta = function() {
  const ctaContainer = document.querySelector('.community-cta-box');
  if (!ctaContainer) return;

  const isDlr = getActiveResortId() === 'dlr';
  ctaContainer.innerHTML = isDlr ? `
    <div>
      <span class="section-tag" style="background: #fef3c7; color: #92400e; margin-bottom: 8px;">California Community</span>
      <h3 style="color: var(--text-primary); font-size: 1.6rem; margin: 4px 0 6px;">Living in Southern California or Visiting Disneyland?</h3>
      <p style="margin-bottom: 0; font-size: 0.95rem;">
        Join local Catholic Disney family meetups, morning Mass at Christ Cathedral & St. Boniface Anaheim, Disneyland Catholic architectural walks, and joyful fellowship in the Golden State.
      </p>
    </div>
    <a href="mailto:info@catholicdisney.com?subject=Join%20California%20Catholic%20Disney%20Fellowship" class="btn btn-primary" style="white-space: nowrap;">
      Connect With Us ✉️
    </a>
  ` : `
    <div>
      <span class="section-tag" style="background: #fef3c7; color: #92400e; margin-bottom: 8px;">Florida Community</span>
      <h3 style="color: var(--text-primary); font-size: 1.6rem; margin: 4px 0 6px;">Moving to Florida or Visiting Orlando?</h3>
      <p style="margin-bottom: 0; font-size: 0.95rem;">
        Join local Catholic Disney family meetups, morning Mass at the Basilica of Mary Queen of the Universe, Epcot Catholic cultural walks, and joyful fellowship with other Catholic Disney enthusiasts living in the Sunshine State.
      </p>
    </div>
    <a href="mailto:info@catholicdisney.com?subject=Join%20Florida%20Catholic%20Disney%20Fellowship" class="btn btn-primary" style="white-space: nowrap;">
      Connect With Us ✉️
    </a>
  `;
}

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/components/wallpapers-hub.js
  // ==========================================

  (function() {
// Catholic Disney High-Resolution Wallpapers Hub Component


var initWallpapersHub = CD.initWallpapersHub = global.initWallpapersHub = function() {
  renderWallpapers('all');
  setupWallpaperFilters();
}

var renderWallpapers = CD.renderWallpapers = global.renderWallpapers = function(deviceFilter = 'all') {
  const container = document.getElementById('wallpapers-grid');
  if (!container) return;

  const filtered = deviceFilter === 'all'
    ? wallpapersData
    : wallpapersData.filter(w => w.device === deviceFilter);

  container.innerHTML = filtered.map(item => {
    const isPhone = item.device === 'phone';

    return `
      <div class="wallpaper-card ${isPhone ? 'wallpaper-card-phone' : ''}">
        <div class="wallpaper-preview-wrapper ${isPhone ? 'wallpaper-phone-frame' : 'wallpaper-landscape-frame'}">
          <img src="${item.src}" alt="${item.title}" class="wallpaper-thumb-img" loading="lazy">
          <div class="wallpaper-overlay-badge">
            <span class="park-pill" style="background: rgba(255, 255, 255, 0.92); color: var(--text-primary); font-weight: 800;">
              ${item.aspectRatioLabel}
            </span>
          </div>
          <button class="wallpaper-zoom-trigger" onclick="window.openImageLightbox('${item.src}', '${item.title}')" title="Preview Full Size">
            🔍
          </button>
        </div>

        <div class="wallpaper-info-body">
          <h4 class="wallpaper-title">${item.title}</h4>
          <div class="wallpaper-resolution">📐 ${item.resolution} • ${item.category}</div>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px;">${item.description}</p>

          <div style="display: flex; gap: 8px; margin-top: auto;">
            <a href="${item.src}" download="${item.downloadName}" class="btn btn-sun" style="flex: 1; font-size: 0.9rem; padding: 10px 16px;">
              📥 Download Free
            </a>
            <button class="btn btn-outline" style="font-size: 0.9rem; padding: 10px 14px;" onclick="window.openImageLightbox('${item.src}', '${item.title}')">
              Preview
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function setupWallpaperFilters() {
  const chips = document.querySelectorAll('#wallpaper-filter-chips .filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const device = chip.getAttribute('data-device') || 'all';
      renderWallpapers(device);
    });
  });
}

  })();
  syncGlobals();


  // ==========================================
  // FILE: js/app.js
  // ==========================================

  (function() {
// CatholicDisney.com Application Controller











function bootApp() {
  initResortSwitcher();
  initTabNavigation();
  initHamburgerMenu();
  initPilgrimageHub();
  initQueueRosary();
  initQueueCompanions();
  initWaitTimesHub();
  initLiveWaitTimes();
  initLiturgicalHub();
  initItineraryPlanner();
  initCreatorsHub();
  initWallpapersHub();
  initTipsForm();
  initModalListeners();
  initLightbox();

  window.dispatchEvent(new CustomEvent('catholic-app-ready'));

  let storedResort = 'wdw';
  try {
    storedResort = localStorage.getItem('catholic_disney_resort') || 'wdw';
  } catch(e) {}

  if (storedResort === 'dlr') {
    window.dispatchEvent(new CustomEvent('catholic-resort-changed', {
      detail: { resortId: 'dlr' }
    }));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}

// Mode Switcher between Live Waits and Crowd Simulator
window.switchWaitMode = (mode) => {
  const liveContainer = document.getElementById('live-wait-times-container');
  const simContainer = document.getElementById('wait-times-container');
  const liveBtn = document.getElementById('mode-live-waits-btn');
  const simBtn = document.getElementById('mode-simulator-btn');

  if (mode === 'live') {
    if (liveContainer) liveContainer.style.display = 'block';
    if (simContainer) simContainer.style.display = 'none';
    if (liveBtn) { liveBtn.className = 'btn btn-primary'; }
    if (simBtn) { simBtn.className = 'btn btn-outline'; }
  } else {
    if (liveContainer) liveContainer.style.display = 'none';
    if (simContainer) simContainer.style.display = 'block';
    if (liveBtn) { liveBtn.className = 'btn btn-outline'; }
    if (simBtn) { simBtn.className = 'btn btn-primary'; }
  }
};

// Hero Icon Artwork Switcher
window.switchHeroIcon = (type) => {
  const img = document.getElementById('hero-icon-display');
  if (!img) return;
  if (type === 'queen') {
    img.src = 'assets/images/queen_of_universe_icon.jpg';
    img.alt = 'Mary Queen of the Universe Altarpiece with Saint Michael and Saint Gabriel';
  } else {
    img.src = 'assets/images/holy_family_icon.jpg';
    img.alt = 'The Holy Family in Byzantine Gold Leaf Iconography with Fairytale Castle';
  }
};

// Tab Switching & Deep Linking
function initTabNavigation() {
  const navLinks = document.querySelectorAll('.desktop-nav-link, .drawer-nav-item');
  const tabContents = document.querySelectorAll('.tab-content');

  function switchTab(targetTabId) {
    navLinks.forEach(link => {
      const isTarget = link.getAttribute('data-tab') === targetTabId;
      link.classList.toggle('active', isTarget);
      link.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    tabContents.forEach(content => {
      const isTarget = content.id === targetTabId;
      content.classList.toggle('active', isTarget);
    });

    if (history.replaceState) {
      history.replaceState(null, null, `#${targetTabId}`);
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-tab');
      if (target) {
        switchTab(target);
        window.closeNavDrawer();
      }
    });
  });

  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  }

  window.navigateToTab = (tabId) => {
    switchTab(tabId);
    window.closeNavDrawer();
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  window.scrollToTipSection = () => {
    window.closeNavDrawer();
    setTimeout(() => {
      const formSection = document.getElementById('submit-tip-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };
}

// Hamburger Menu & Navigation Drawer Controller
function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawerBackdrop = document.getElementById('nav-drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerTipBtn = document.getElementById('drawer-submit-tip-btn');

  function openDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.add('open');
      drawerBackdrop.setAttribute('aria-hidden', 'false');
    }
    if (hamburgerBtn) {
      hamburgerBtn.classList.add('active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('open');
      drawerBackdrop.setAttribute('aria-hidden', 'true');
    }
    if (hamburgerBtn) {
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  window.openNavDrawer = openDrawer;
  window.closeNavDrawer = closeDrawer;

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (drawerBackdrop && drawerBackdrop.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) {
        closeDrawer();
      }
    });
  }

  if (drawerTipBtn) {
    drawerTipBtn.addEventListener('click', () => {
      window.navigateToTab('creators-tab');
      window.scrollToTipSection();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerBackdrop && drawerBackdrop.classList.contains('open')) {
      closeDrawer();
    }
  });
}

// Netlify Community Tips Form Handler
function initTipsForm() {
  const form = document.getElementById('community-tips-form');
  const successBanner = document.getElementById('tip-form-success');
  const submitBtn = document.getElementById('tip-submit-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
    }

    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then((response) => {
        if (response.ok || response.status === 200 || response.status === 302) {
          if (successBanner) {
            successBanner.style.display = 'block';
            successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          form.reset();
        } else {
          form.submit();
        }
      })
      .catch((error) => {
        console.error('Netlify form submission error:', error);
        form.submit();
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send';
        }
      });
  });
}

// Global modal backdrop close & escape key
function initModalListeners() {
  const modals = document.querySelectorAll('.modal-backdrop');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(m => m.classList.remove('open'));
    }
  });
}

// Lightbox for viewing artwork & wallpapers in full resolution
function initLightbox() {
  window.openImageLightbox = (src, title) => {
    const modalBackdrop = document.getElementById('virtue-modal');
    const modalContent = document.getElementById('virtue-modal-content');
    if (!modalBackdrop || !modalContent) return;

    modalContent.innerHTML = `
      <div class="lightbox-img-wrapper">
        <h3 style="color: var(--text-primary); margin-bottom: 12px; font-size: 1.35rem;">${title}</h3>
        <img src="${src}" alt="${title}" class="lightbox-img">
        <div style="margin-top: 16px; display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
          <a href="${src}" download class="btn btn-sun" style="font-size: 0.9rem;">
            📥 Download Wallpaper
          </a>
          <button class="btn btn-outline" onclick="window.closeVirtueModal()" style="font-size: 0.9rem;">
            Close
          </button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('open');
  };
}

  })();
  syncGlobals();

})(typeof window !== 'undefined' ? window : this);
