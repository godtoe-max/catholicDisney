// Catholic Disney: Large-Family Pilgrimage Itinerary Planner with Tradition-Specific Churches & Daily Parks
// Fully updates church recommendations (Roman, TLM, Byzantine, Ordinariate) and custom daily park selections

import { TRADITIONS_LITURGICAL, DISNEY_ABSTINENCE_DINING } from '../data/holy-days-data.js';

export const PARK_OPTIONS = [
  { id: "mk", name: "Magic Kingdom", icon: "🏰", food: "Columbia Harbour House (Liberty Square - Grilled Salmon & Lobster Roll)" },
  { id: "epcot", name: "EPCOT", icon: "🌐", food: "Sunshine Seasons (The Land) or Yorkshire County Fish Shop (UK Fish & Chips)" },
  { id: "hs", name: "Hollywood Studios", icon: "🎬", food: "ABC Commissary (Grilled Shrimp Tacos) or Docking Bay 7 (Tofu/Kefta)" },
  { id: "ak", name: "Animal Kingdom", icon: "🌳", food: "Satu'li Canteen (Pandora - Chili-Garlic Tofu Bowl & Ocean Fish)" },
  { id: "rest", name: "Basilica & Rest Day", icon: "⛪", food: "Cookes of Dublin / Raglan Road (Disney Springs - Atlantic Fish & Chips)" }
];

let selectedDailyParks = [];

export function initItineraryPlanner() {
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

  // Pre-fill default dates (e.g. upcoming Monday to Friday)
  prefillDefaultDates();
  updateTraditionParishPreview();
  refreshDailyParksUI();
}

function updateTraditionParishPreview() {
  const preview = document.getElementById('tradition-parish-preview');
  const traditionSelect = document.getElementById('planner-tradition');
  if (!preview) return;

  const traditionId = traditionSelect ? traditionSelect.value : 'roman';
  const tradition = TRADITIONS_LITURGICAL[traditionId] || TRADITIONS_LITURGICAL.roman;
  const church = tradition.churchInfo || TRADITIONS_LITURGICAL.roman.churchInfo;

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

export function refreshDailyParksUI() {
  const container = document.getElementById('daily-parks-container');
  const startInput = document.getElementById('planner-start-date');
  const endInput = document.getElementById('planner-end-date');
  const traditionSelect = document.getElementById('planner-tradition');
  if (!container || !startInput) return;

  const traditionId = traditionSelect ? traditionSelect.value : 'roman';
  const tradition = TRADITIONS_LITURGICAL[traditionId] || TRADITIONS_LITURGICAL.roman;

  let startDate = startInput.value ? new Date(startInput.value + 'T00:00:00') : new Date();
  let endDate = endInput && endInput.value ? new Date(endInput.value + 'T00:00:00') : new Date(startDate.getTime() + 4 * 86400000);

  if (endDate < startDate) {
    endDate = new Date(startDate.getTime() + 4 * 86400000);
  }

  const diffTime = Math.abs(endDate - startDate);
  const duration = Math.max(1, Math.min(14, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1));

  // Initialize selectedDailyParks if needed
  const defaultRotation = ["mk", "epcot", "hs", "ak", "mk", "epcot", "rest"];
  if (selectedDailyParks.length !== duration) {
    selectedDailyParks = [];
    for (let i = 0; i < duration; i++) {
      const curDate = new Date(startDate.getTime() + i * 86400000);
      const isSunday = curDate.getDay() === 0;
      selectedDailyParks.push(isSunday ? "mk" : defaultRotation[i % defaultRotation.length]);
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

    const isHolyDay = tradition.holyDays && tradition.holyDays.some(hd => hd.month === month && hd.day === dayOfMonth);

    const formattedDay = curDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const currentSelectedPark = selectedDailyParks[idx] || defaultRotation[idx % defaultRotation.length];

    return `
      <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 12px 14px; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <strong style="font-size: 0.88rem; color: #0f172a;">Day ${idx + 1}: ${formattedDay}</strong>
          ${isHolyDay ? `<span style="font-size: 0.68rem; font-weight: 800; background: #fee2e2; color: #b91c1c; padding: 1px 6px; border-radius: 4px;">🔴 Holy Day</span>` : ''}
          ${isSunday ? `<span style="font-size: 0.68rem; font-weight: 800; background: #fef3c7; color: #92400e; padding: 1px 6px; border-radius: 4px;">⛪ Mass</span>` : ''}
          ${(isFriday || isWednesday) ? `<span style="font-size: 0.68rem; font-weight: 800; background: #dbeafe; color: #1e40af; padding: 1px 6px; border-radius: 4px;">🐟 Fast</span>` : ''}
        </div>

        <select class="form-select" onchange="window.updateDayPark(${idx}, this.value)" style="font-size: 0.85rem; padding: 6px 10px; border-radius: 8px; font-weight: 700;">
          ${PARK_OPTIONS.map(opt => `
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

export function generateCustomItinerary() {
  const startInput = document.getElementById('planner-start-date');
  const endInput = document.getElementById('planner-end-date');
  const adultsInput = document.getElementById('planner-adults');
  const kidsInput = document.getElementById('planner-kids');
  const traditionSelect = document.getElementById('planner-tradition');
  const focusSelect = document.getElementById('planner-focus');
  const outputContainer = document.getElementById('itinerary-output');

  if (!outputContainer) return;

  const adults = Math.max(1, parseInt(adultsInput ? adultsInput.value : '2', 10) || 2);
  const kids = Math.max(0, parseInt(kidsInput ? kidsInput.value : '4', 10) || 0); // No limit!
  const totalParty = adults + kids;
  const traditionId = traditionSelect ? traditionSelect.value : 'roman';
  const focus = focusSelect ? focusSelect.value : 'park-touring';

  const tradition = TRADITIONS_LITURGICAL[traditionId] || TRADITIONS_LITURGICAL.roman;
  const church = tradition.churchInfo || TRADITIONS_LITURGICAL.roman.churchInfo;

  let startDate = startInput && startInput.value ? new Date(startInput.value + 'T00:00:00') : new Date();
  let endDate = endInput && endInput.value ? new Date(endInput.value + 'T00:00:00') : new Date(startDate.getTime() + 4 * 86400000);

  if (endDate < startDate) {
    endDate = new Date(startDate.getTime() + 4 * 86400000);
  }

  const diffTime = Math.abs(endDate - startDate);
  const duration = Math.max(1, Math.min(14, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1));

  // Build calendar-aware days with user's selected parks and tradition-specific church
  const itineraryDays = buildCalendarItineraryDays({
    startDate,
    duration,
    adults,
    kids,
    totalParty,
    tradition,
    church,
    focus,
    dailyParks: selectedDailyParks
  });

  // Financial stewardship math
  const dailyLLCost = totalParty * 32;
  const totalTripLLSavings = dailyLLCost * duration;

  outputContainer.innerHTML = `
    <div class="itinerary-output-box animate-fade-in" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 24px; padding: 32px; box-shadow: 0 10px 25px -3px rgba(15, 23, 42, 0.06); margin-top: 30px;">
      <!-- Header Banner -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 14px; margin-bottom: 24px; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 20px;">
        <div>
          <span class="park-pill" style="background: #fef3c7; color: #92400e; font-weight: 800; font-size: 0.85rem;">
            👨‍👩‍👧‍👦 Custom Catholic Pilgrimage Plan
          </span>
          <h3 style="color: #0f172a; font-size: 1.85rem; margin: 8px 0 4px; font-weight: 800;">
            Your ${duration}-Day Catholic Disney Pilgrimage
          </h3>
          <div style="color: #475569; font-size: 0.95rem; line-height: 1.5;">
            <strong>Travel Party:</strong> ${adults} Adults, ${kids} Children (${totalParty} Pilgrims)<br>
            <strong>Liturgical Tradition:</strong> ${tradition.name}<br>
            <strong>Designated Orlando Church:</strong> <span style="color: #1a73e8; font-weight: 700;">${church.parishName}</span> (${church.address})
          </div>
        </div>

        <button class="btn btn-sun" onclick="window.print()" style="font-size: 0.9rem; padding: 10px 20px;">
          Print Itinerary 🖨️
        </button>
      </div>

      <!-- Large Family Affirmation & Financial Stewardship Banner -->
      <div style="background: #f0fdf4; border: 2px solid #86efac; border-radius: 18px; padding: 22px 24px; margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <div>
            <span style="background: #dcfce7; color: #166534; font-weight: 800; font-size: 0.78rem; padding: 3px 10px; border-radius: 999px; text-transform: uppercase;">
              ${kids >= 4 ? '🌟 Large Family Blessing' : '💡 Financial Stewardship'}
            </span>
            <h4 style="font-size: 1.25rem; color: #14532d; margin: 6px 0 2px; font-weight: 800;">
              Lightning Lane Stewardship Verdict: Save $${totalTripLLSavings.toLocaleString()}+
            </h4>
            <p style="font-size: 0.92rem; color: #166534; margin: 0; line-height: 1.45;">
              For your family of <strong>${totalParty} pilgrims</strong>, purchasing Disney Lightning Lane Multi Pass would cost <strong>$${dailyLLCost}/day</strong>, totaling <strong>$${totalTripLLSavings.toLocaleString()}</strong> for your trip! By utilizing our early rope-drop strategies, afternoon quiet prayer nook breaks, and Queue Rosaries, you can skip Lightning Lane and direct those funds to a special celebratory dinner or family blessing.
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

              <!-- Day Special Badges (Holy Day, Sunday Mass, Abstinence) -->
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
                ${day.isAbstinenceDay ? `
                  <span style="background: #dbeafe; color: #1e40af; font-weight: 800; font-size: 0.78rem; padding: 4px 10px; border-radius: 999px;">
                    🐟 Meat Abstinence Day
                  </span>
                ` : ''}
              </div>
            </div>

            <!-- Spiritual Theme -->
            <div style="font-size: 0.9rem; color: #64748b; margin-bottom: 16px; font-weight: 600;">
              🌟 <strong>Spiritual Theme:</strong> ${day.theme}
            </div>

            <!-- Liturgical & Dining Highlights Box -->
            ${day.isAbstinenceDay || day.isHolyDay || day.isSunday ? `
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
                ${day.isAbstinenceDay ? `
                  <div style="font-size: 0.88rem; color: #1e40af;">
                    <strong>🐟 Meatless Dining Highlight:</strong> ${day.diningRecommendation}
                  </div>
                ` : ''}
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
    rest: {
      parkName: "Pilgrimage & Rest Day",
      icon: "⛪",
      food: "Cookes of Dublin / Raglan Road at Disney Springs (Atlantic Fish & Chips)",
      theme: "Sabbath Rest, Marian Pilgrimage & Family Renewal",
      morningEvent: `Pilgrimage and Holy Mass at ${church.shortName} (${church.address}).`,
      afternoonNook: `Sacrament of Confession at ${church.shortName}, followed by peaceful resort poolside rest.`,
      eveningEvent: "Family stroll and dinner at Disney Springs with live Irish music."
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
    const dayOfWeek = currentDate.getDay(); // 0 = Sun, 1 = Mon, ..., 5 = Fri, 6 = Sat
    const month = currentDate.getMonth() + 1; // 1-12
    const dayOfMonth = currentDate.getDate();

    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const isSunday = (dayOfWeek === 0);
    const isFriday = (dayOfWeek === 5);
    const isWednesday = (dayOfWeek === 3 && tradition.id === "byzantine");

    let isAbstinenceDay = isFriday || isWednesday;

    // Check Holy Day of Obligation
    let isHolyDay = false;
    let holyDayName = "";
    let holyDayGuidance = "";

    if (tradition && tradition.holyDays) {
      const match = tradition.holyDays.find(hd => hd.month === month && hd.day === dayOfMonth);
      if (match) {
        isHolyDay = true;
        holyDayName = match.feast;
        holyDayGuidance = `${match.notes} Mass obligation is celebrated locally: ${match.massAtDisney}`;
      }
    }

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
        title: `Transit Buffer & Gate Arrival at ${parkInfo.parkName}`,
        description: `Arrive at park gates after Mass (includes ${church.transitBufferMin}m transit and parking buffer). Head directly to high-capacity classics.`
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
        description: "Walk down the main boulevard praying the morning offering and St. Michael the Archangel prayer."
      });
    }

    if (chosenParkId !== "rest") {
      events.push({
        time: "11:00 AM",
        title: "Queue Rosary Devotion in Line",
        description: `During your first 35+ minute queue at ${parkInfo.parkName}, gather the family to pray 1 to 2 decades of the Queue Rosary together.`
      });
    }

    events.push({
      time: "1:30 PM",
      title: isAbstinenceDay ? `Meatless Lunch at ${parkInfo.food.split(' (')[0]}` : `Family Lunch at ${parkInfo.parkName}`,
      description: isAbstinenceDay 
        ? `Enjoy delicious seafood or plant-based meals at ${parkInfo.food}. Honor your Friday penance joyfully!`
        : `Hydrate and rest during midday heat. Pray the family blessing before meals.`
    });

    events.push({
      time: "3:00 PM",
      title: `Midday Retreat: ${parkInfo.afternoonNook.split(' & ')[0]}`,
      description: `Escape the 2:00 PM crowd surge. ${parkInfo.afternoonNook}`
    });

    events.push({
      time: "8:30 PM",
      title: parkInfo.eveningEvent,
      description: "Enjoy peaceful nighttime touring when queues drop significantly."
    });

    days.push({
      formattedDate,
      parkName: parkInfo.parkName,
      isSunday,
      isFriday,
      isAbstinenceDay,
      isHolyDay,
      holyDayName,
      holyDayGuidance,
      title: `${parkInfo.icon} ${parkInfo.parkName}: ${isHolyDay ? holyDayName : isSunday ? `${church.sundayMassTitle} & Wonder` : 'Family Pilgrimage Adventure'}`,
      theme: isHolyDay ? `Honoring ${holyDayName}` : parkInfo.theme,
      diningRecommendation: parkInfo.food,
      largeFamilyTip,
      events,
      nightlyReflection: `How did our family witness to Christ's love and patience today at ${parkInfo.parkName}, especially in lines and caring for one another?`
    });
  }

  return days;
}
