// Catholic Rosary Data: Multi-Tradition Prayers & Mysteries (Roman English, Latin TLM, Byzantine Catholic, Anglican Ordinariate)

export const TRADITIONS = {
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

export const TRADITION_PRAYERS = {
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
    }
  }
};

export const ROSARY_MYSTERIES = {
  joyful: {
    name: "Joyful Mysteries",
    traditionalDays: ["Monday", "Saturday"],
    color: "#f59e0b",
    tagline: "The Incarnation & Hidden Life of Jesus",
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
    name: "Luminous Mysteries (Mysteries of Light)",
    traditionalDays: ["Thursday"],
    color: "#3b82f6",
    tagline: "The Public Ministry & Light of Christ",
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
    traditionalDays: ["Tuesday", "Friday"],
    color: "#ef4444",
    tagline: "The Passion & Redeeming Sacrifice of Jesus",
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
    traditionalDays: ["Wednesday", "Sunday"],
    color: "#10b981",
    tagline: "The Resurrection & Eternal Kingdom of Christ",
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
    name: "Byzantine Rule of the Theotokos (15 Steps)",
    traditionalDays: ["Daily (Eastern Catholic Rule)"],
    color: "#8b5cf6",
    tagline: "The 15 Steps of the Mother of God (Bogoroditse)",
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
