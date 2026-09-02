// Catholic Disney: Land & Country Pavilion Patron Saints
// Connects every theme park land and all 11 EPCOT World Showcase pavilions to official Catholic patron saints, history, and sacred landmarks.

export const LAND_PATRONS = [
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
    saint: "St. Thomas More",
    saintTitle: "Patron Saint of Statesmen, Religious Liberty & Civil Law",
    feastDay: "June 22",
    scripture: "You will know the truth, and the truth will set you free. (John 8:32)",
    story: "Liberty Square houses the Liberty Bell replica, the Hall of Presidents, and the Liberty Tree, celebrating the birth of freedom. In Catholic tradition, true liberty is the freedom to do what is good and follow one's conscience before God. Saint Thomas More, the brilliant Lord Chancellor of England, was executed in 1535 for refusing to betray the Catholic Church. His famous dying declaration on the scaffold remains the gold standard of religious freedom: 'I die the King's good servant, but God's first!'",
    didYouKnow: "The famous Catholic signer of the American Declaration of Independence was Charles Carroll of Carrollton, whose cousin John Carroll became the first Catholic Bishop in the United States!",
    reflection: "Freedom is a gift from God. How can we use our freedom today to love and serve others, rather than just pleasing ourselves?"
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
    saint: "St. Francis of Assisi & St. Catherine of Siena",
    saintTitle: "Primary Co-Patrons of Italy • Instruments of Divine Peace",
    feastDay: "October 4 (St. Francis) • April 29 (St. Catherine)",
    scripture: "Lord, make me an instrument of Your peace: where there is hatred, let me sow love. (Peace Prayer of St. Francis)",
    story: "The Italy Pavilion is a breathtaking celebration of Catholic Venice and Florence, dominated by the replica of Saint Mark's Campanile and the Doge's Palace. Saint Francis of Assisi and Saint Catherine of Siena are the official national patrons of Italy. Francis embraced holy poverty, preached to birds, tamed wolves, and received the holy wounds of Christ (the Stigmata). Catherine was a brilliant Dominican mystic and Doctor of the Church who advised popes and reconciled warring Italian city-states through prayer and truth.",
    didYouKnow: "Atop the tall campanile bell tower in EPCOT Italy stands a golden statue of the Archangel Gabriel looking out over the World Showcase lagoon!",
    reflection: "Francis greeted everyone with 'Pax et Bonum' (Peace and Goodness). How can we bring peace and warmth to everyone around us in the parks today?"
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

export function getLandPatron(landIdOrName) {
  if (!landIdOrName) return null;
  const search = landIdOrName.toLowerCase();
  return LAND_PATRONS.find(p =>
    p.id.toLowerCase() === search ||
    p.name.toLowerCase().includes(search) ||
    search.includes(p.name.toLowerCase()) ||
    p.saint.toLowerCase().includes(search)
  ) || null;
}
