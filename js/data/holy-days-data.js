// Catholic Disney: Holy Days of Obligation, Abstinence Rules & Disney Dining Guide
// Comprehensive liturgical tracking across 4 traditions: Roman (USCCB), TLM (1962), Byzantine, and Anglican Ordinariate

export const TRADITIONS_LITURGICAL = {
  roman: {
    id: "roman",
    name: "Roman Rite (USCCB / Orlando Diocese)",
    icon: "🇻🇦",
    subtitle: "Standard US Ordinary Form & Florida Province of Miami Rules",
    description: "Follows the United States Conference of Catholic Bishops (USCCB) canon law calendar and Province of Miami provincial decisions (such as the celebration of Ascension on Sunday).",
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
export const DISNEY_ABSTINENCE_DINING = [
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
