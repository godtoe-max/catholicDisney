// Catholic Disney: Anaheim & Orange County Catholic Parishes & Liturgical Traditions
// Serving Disneyland Resort pilgrims (Disneyland Park & Disney California Adventure)

export const DISNEYLAND_TRADITIONS_LITURGICAL = {
  roman: {
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
    }
  },

  tlm: {
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
    }
  },

  byzantine: {
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
    }
  },

  ordinariate: {
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
    }
  }
};

// Historic California Mission Pilgrimage Excursion
export const DISNEYLAND_MISSION_EXCURSION = {
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
