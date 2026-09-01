// Catholic Disney Vacation & Pilgrimage Itinerary Generator
export function initItineraryPlanner() {
  const generateBtn = document.getElementById('generate-itinerary-btn');
  if (generateBtn) {
    generateBtn.addEventListener('click', generateCustomItinerary);
  }
}

export function generateCustomItinerary() {
  const durationSelect = document.getElementById('planner-duration');
  const groupSelect = document.getElementById('planner-group');
  const focusSelect = document.getElementById('planner-focus');
  const outputContainer = document.getElementById('itinerary-output');

  if (!durationSelect || !groupSelect || !focusSelect || !outputContainer) return;

  const duration = parseInt(durationSelect.value, 10) || 3;
  const group = groupSelect.value;
  const focus = focusSelect.value;

  const itineraryDays = buildItineraryDays(duration, group, focus);

  outputContainer.innerHTML = `
    <div class="itinerary-output-box animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 14px; margin-bottom: 24px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
        <div>
          <span class="virtue-primary-badge">Customized Pilgrimage Plan</span>
          <h3 style="color: var(--gold-light); font-size: 1.8rem; margin: 6px 0 2px;">Your ${duration}-Day Catholic Disney Pilgrimage</h3>
          <div style="color: var(--marian-light); font-size: 0.95rem;">Tailored for: ${getGroupTitle(group)} • Focus: ${getFocusTitle(focus)}</div>
        </div>
        <button class="btn btn-gold" onclick="window.print()" style="font-size: 0.9rem;">
          Print Itinerary 🖨️
        </button>
      </div>

      <div style="display: grid; gap: 28px;">
        ${itineraryDays.map((day, idx) => `
          <div class="day-timeline-card">
            <h4 class="day-title">Day ${idx + 1}: ${day.title}</h4>
            <div class="day-theme">🌟 Spiritual Theme: ${day.theme}</div>
            
            <ul class="timeline-event-list">
              ${day.events.map(ev => `
                <li class="timeline-event-item">
                  <span class="timeline-time">${ev.time}</span>
                  <div>
                    <strong style="color: #fff;">${ev.title}</strong>
                    <div style="color: var(--text-secondary); font-size: 0.9rem;">${ev.description}</div>
                  </div>
                </li>
              `).join('')}
            </ul>

            <div style="background: rgba(14, 30, 56, 0.6); padding: 12px 16px; border-radius: var(--radius-sm); margin-top: 14px; border-left: 2px solid var(--gold-light); font-size: 0.88rem;">
              <strong style="color: var(--gold-light);">🌙 Nightly Family Reflection:</strong> ${day.nightlyReflection}
            </div>
          </div>
        `).join('')}
      </div>

      <div style="background: rgba(212, 175, 55, 0.1); border: 1px solid var(--border-gold-glow); padding: 18px; border-radius: var(--radius-md); margin-top: 30px; text-align: center;">
        <h4 style="color: var(--gold-light); margin-bottom: 6px;">🙏 Traveler's Blessing</h4>
        <p style="font-size: 0.92rem; margin-bottom: 0; color: #fff; font-style: italic;">
          "May the Lord direct your steps in peace, and may His holy angels accompany you on your journey, bringing you safely home with joy. Saint Christopher and Mary Queen of the Universe, pray for us."
        </p>
      </div>
    </div>
  `;

  outputContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getGroupTitle(group) {
  if (group === 'young-kids') return 'Family with Young Children (Pacing & Rest)';
  if (group === 'teens') return 'Youth & Teens (Faith, Fellowship & High Thrills)';
  return 'Adults & Couples (Spiritual Depth & Culture)';
}

function getFocusTitle(focus) {
  if (focus === 'sacred-art') return 'Sacred Art, Epcot Heritage & Cathedrals';
  if (focus === 'park-touring') return 'High Magic & Balanced Liturgy';
  return 'Gentle Pace & Prayer Retreat';
}

function buildItineraryDays(duration, group, focus) {
  const allDays = [
    {
      title: "Arrival & The Queen of the Universe Welcome",
      theme: "Setting Intentions & Marian Dedication",
      events: [
        { time: "2:00 PM", title: "Resort Check-In & Settling In", description: "Unpack and designate a small prayer corner in your hotel room (lay out family rosaries and travel crucifix)." },
        { time: "4:30 PM", title: "Pilgrimage to Mary Queen of the Universe", description: "Visit the Basilica (Vineland Ave). Stroll the outdoor 10-station Rosary garden, view the Sacred Art Museum, and pray the family intention for the trip." },
        { time: "6:00 PM", title: "Saturday Vigil Mass at the Basilica", description: "Fulfill your Sunday obligation with beautiful liturgical choir music." },
        { time: "7:30 PM", title: "Welcome Dinner at Disney Springs", description: "Enjoy dinner together and say the family traveler's blessing before meals." }
      ],
      nightlyReflection: "What intention or person are you dedicating this vacation to in your prayers this week?"
    },
    {
      title: "Magic Kingdom: Wonder, Conscience & Royal Splendor",
      theme: "The Sacramental Imagination & The Victory of Good",
      events: [
        { time: "8:00 AM", title: "Rope Drop & Morning Prayer", description: "Say a quick St. Michael prayer while walking down Main Street U.S.A. towards Cinderella Castle." },
        { time: "10:30 AM", title: "Cinderella Castle Mosaic Meditation", description: "Walk through the castle breezeway to admire the 14k gold and European smalti glass mosaics, reflecting on authentic artisanship." },
        { time: "1:30 PM", title: "Midday Prayer Nook in Liberty Square", description: "Take shelter from the Florida sun behind Ye Olde Christmas Shoppe. Pray the Angelus and a decade of the Rosary." },
        { time: "3:00 PM", title: "Peter Pan's Flight & Pinocchio's Conscience", description: "Ride Peter Pan and discuss the child-like faith praised in Matthew 18:3." },
        { time: "9:00 PM", title: "Happily Ever After Fireworks", description: "Watch the spectacular fireworks display and reflect on the heavenly banquet of light." }
      ],
      nightlyReflection: "In what ways did today's stories remind us that God calls us to stand up for the truth and follow our conscience like Pinocchio?"
    },
    {
      title: "Epcot: Faith, Nations & Sacred Architecture",
      theme: "The Catholic Heritage of the Nations (The Church Universal)",
      events: [
        { time: "9:00 AM", title: "World Discovery / Nature Touring", description: "Experience Guardians of the Galaxy and Soarin' Over California, marveling at the splendor of creation." },
        { time: "12:00 PM", title: "Italy Pavilion & St. Mark's Lion", description: "Visit the Venetian Campanile and reflect on the Gospel of St. Mark inscribed on the winged lion." },
        { time: "1:30 PM", title: "St. George Statue in Germany Plaza", description: "Examine the St. George and Dragon fountain. Discuss the patron saints who protect us from the devil." },
        { time: "3:00 PM", title: "Quiet Retreat in Morocco Pavilion", description: "Step into the deep rear fountain courtyard of Morocco for 20 minutes of silent meditation and cool hydration." },
        { time: "6:30 PM", title: "Dinner in France or United Kingdom", description: "Reflect on Catholic literary giants G.K. Chesterton and J.R.R. Tolkien over dinner." }
      ],
      nightlyReflection: "How does seeing different countries in World Showcase show us that the Catholic (Universal) Church unites all peoples?"
    },
    {
      title: "Disney's Animal Kingdom: The Canticle of Creation",
      theme: "St. Francis of Assisi & Christian Stewardship",
      events: [
        { time: "8:00 AM", title: "Kilimanjaro Safaris", description: "Observe God's majestic wildlife in the morning golden hour." },
        { time: "11:00 AM", title: "Tree of Life Prayer Walk", description: "Walk the Discovery Island trails under the carved roots of the Tree of Life while praying St. Francis's Canticle of the Sun." },
        { time: "1:00 PM", title: "Festival of the Lion King", description: "Enjoy the musical celebration and discuss Simba's baptismal identity: 'Remember who you are.'" },
        { time: "3:30 PM", title: "Quiet Alcove in Maharajah Jungle Trek", description: "Rest feet and pray the Divine Mercy Chaplet in the shaded temple ruins." }
      ],
      nightlyReflection: "How does caring for God's creation and animals bring glory back to the Creator?"
    },
    {
      title: "Hollywood Studios: Heroism, Courage & The Narrow Road",
      theme: "Courage in the Battle of Faith",
      events: [
        { time: "8:30 AM", title: "Star Wars: Galaxy's Edge & The Narrow Path", description: "Experience Rise of the Resistance and discuss the courage required to resist worldly tyranny." },
        { time: "1:00 PM", title: "Grand Avenue Arts Prayer Break", description: "Sit in the quiet shade near Muppet Courtyard for family hydration and a decade of the Rosary." },
        { time: "4:00 PM", title: "Tower of Terror Moral Allegory", description: "Discuss the moral lessons against vanity and pride found in classic Rod Serling storytelling." },
        { time: "8:30 PM", title: "Fantasmic! (Good vs. Evil Climax)", description: "Witness the triumphant victory of imagination and light over the forces of darkness." }
      ],
      nightlyReflection: "When Mickey fights the dragon in Fantasmic, what virtues does he need to overcome fear?"
    },
    {
      title: "Central Florida Catholic Heritage & St. James Cathedral",
      theme: "Pilgrimage to the Mother Church of Orlando",
      events: [
        { time: "10:00 AM", title: "Downtown Orlando Excursion", description: "Visit St. James Catholic Cathedral in downtown Orlando for Mass and admire the historic pipe organ." },
        { time: "12:30 PM", title: "Lunch in Historic Winter Park", description: "Stroll Park Avenue and visit the Morse Museum of American Art (Tiffany stained glass)." },
        { time: "4:00 PM", title: "Resort Pool & Spiritual Reading Time", description: "Relax by the resort pool reading a saint biography or Catholic novel." }
      ],
      nightlyReflection: "What was the most peaceful moment of your week?"
    },
    {
      title: "Thanksgiving, Corpus Christi & Farewell",
      theme: "Gratitude (Eucharistia) & Going Forth in Mission",
      events: [
        { time: "9:00 AM", title: "Morning Mass at Corpus Christi (Celebration)", description: "Attend Mass in the town of Celebration and thank God for all graces received during the trip." },
        { time: "11:00 AM", title: "Farewell Brunch & Memory Sharing", description: "Share each family member's favorite memory and favorite virtue learned." },
        { time: "2:00 PM", title: "Departure with Saint Raphael's Blessing", description: "Travel safely home carrying the wonder of faith into daily life." }
      ],
      nightlyReflection: "How can we bring the wonder and virtue we experienced on this trip back into our daily school, work, and parish life?"
    }
  ];

  return allDays.slice(0, duration);
}
