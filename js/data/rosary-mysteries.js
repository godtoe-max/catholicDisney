// Catholic Rosary Data: Mysteries, Fruits, Scripture, and Theme Park Queue Family Reflections

export const ROSARY_PRAYERS = {
  signOfCross: {
    title: "Sign of the Cross",
    latin: "In nómine Patris, et Fílii, et Spíritus Sancti. Amen.",
    english: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen."
  },
  apostlesCreed: {
    title: "The Apostles' Creed",
    english: "I believe in God, the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord: Who was conceived by the Holy Spirit, born of the Virgin Mary; suffered under Pontius Pilate, was crucified, died and was buried. He descended into hell; on the third day He rose again from the dead; He ascended into heaven, and is seated at the right hand of God the Father Almighty; from thence He will come to judge the living and the dead. I believe in the Holy Spirit, the Holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen."
  },
  ourFather: {
    title: "The Lord's Prayer (Our Father)",
    latin: "Pater noster, qui es in caelis: sanctificetur nomen tuum...",
    english: "Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen."
  },
  hailMary: {
    title: "Hail Mary (Ave Maria)",
    latin: "Ave Maria, gratia plena, Dominus tecum...",
    english: "Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."
  },
  gloryBe: {
    title: "Glory Be (Gloria Patri)",
    latin: "Gloria Patri, et Filio, et Spiritui Sancto...",
    english: "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen."
  },
  fatimaPrayer: {
    title: "The Fatima Prayer",
    english: "O My Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy. Amen."
  },
  hailHolyQueen: {
    title: "Hail, Holy Queen (Salve Regina)",
    english: "Hail, Holy Queen, Mother of Mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O Holy Mother of God, that we may be made worthy of the promises of Christ. Amen."
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
  }
};
