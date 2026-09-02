// Catholic Disney: Large-Family Pilgrimage Itinerary Planner
// Integrates calendar dates, Holy Days of Obligation, Abstinence days & unrestricted children counts

import { TRADITIONS_LITURGICAL, DISNEY_ABSTINENCE_DINING } from '../data/holy-days-data.js';

export function initItineraryPlanner() {
  const generateBtn = document.getElementById('generate-itinerary-btn');
  if (generateBtn) {
    generateBtn.addEventListener('click', generateCustomItinerary);
  }

  // Pre-fill default dates (e.g. upcoming Monday to Friday)
  prefillDefaultDates();
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

  // Calculate Dates
  let startDate = startInput && startInput.value ? new Date(startInput.value + 'T00:00:00') : new Date();
  let endDate = endInput && endInput.value ? new Date(endInput.value + 'T00:00:00') : new Date(startDate.getTime() + 4 * 86400000);

  if (endDate < startDate) {
    endDate = new Date(startDate.getTime() + 4 * 86400000);
  }

  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  const duration = Math.max(1, Math.min(14, diffDays));

  // Build calendar-aware days
  const itineraryDays = buildCalendarItineraryDays({
    startDate,
    duration,
    adults,
    kids,
    totalParty,
    tradition,
    focus
  });

  // Financial stewardship math
  const dailyLLCost = totalParty * 32; // ~$32 per person for Lightning Lane Multi Pass
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
          <div style="color: #475569; font-size: 0.95rem;">
            <strong>Travel Party:</strong> ${adults} Adults, ${kids} Children (${totalParty} Pilgrims) • <strong>Tradition:</strong> ${tradition.name}
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
                    🔴 Holy Day of Obligation: ${day.holyDayName}
                  </span>
                ` : ''}
                ${day.isSunday ? `
                  <span style="background: #fef3c7; color: #92400e; font-weight: 800; font-size: 0.78rem; padding: 4px 10px; border-radius: 999px;">
                    ⛪ Sunday Mass Obligation
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
                    <strong>⛪ Sunday Mass:</strong> 7:30 AM or 9:30 AM at the <em>Basilica of Mary Queen of the Universe</em>. With parking and TTC transit buffer, arrive at park gates at 9:10 AM or 11:15 AM.
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
          🙏 Traveler's Blessing for the ${adults + kids} of You
        </h4>
        <p style="font-size: 0.92rem; margin-bottom: 0; color: #1e3a8a; font-style: italic;">
          "May the Lord direct your steps in peace, and may His holy angels accompany your family on your journey, bringing you safely home with joy. Saint Christopher, Saint Joseph, and Mary Queen of the Universe, pray for our family."
        </p>
      </div>
    </div>
  `;

  outputContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function buildCalendarItineraryDays({ startDate, duration, adults, kids, totalParty, tradition, focus }) {
  const days = [];

  const parkRoster = [
    { park: "Magic Kingdom", icon: "🏰", food: "Columbia Harbour House (Liberty Square - Grilled Salmon & Lobster Roll)" },
    { park: "EPCOT", icon: "🌐", food: "Sunshine Seasons (The Land) or Yorkshire County Fish Shop (UK Fish & Chips)" },
    { park: "Disney's Hollywood Studios", icon: "🎬", food: "ABC Commissary (Grilled Shrimp Tacos) or Docking Bay 7" },
    { park: "Disney's Animal Kingdom", icon: "🌳", food: "Satu'li Canteen (Pandora - Chili-Garlic Tofu & Ocean Fish)" },
    { park: "Magic Kingdom & Basilica", icon: "🏰", food: "Columbia Harbour House or Cookes of Dublin at Disney Springs" }
  ];

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
    const isWednesday = (dayOfWeek === 3);

    // Check tradition abstinence
    let isAbstinenceDay = isFriday;
    let abstinenceLabel = "Friday Meat Abstinence";
    if (tradition.id === "byzantine" && (isFriday || isWednesday)) {
      isAbstinenceDay = true;
      abstinenceLabel = isWednesday ? "Wednesday Traditional Fast (Betrayal of Christ)" : "Friday Fast (Crucifixion)";
    }

    // Check Holy Day of Obligation for this date
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

    const parkChoice = parkRoster[i % parkRoster.length];
    const largeFamilyTip = largeFamilyTips[i % largeFamilyTips.length];

    // Build timeline events
    const events = [];

    if (isSunday) {
      events.push({
        time: "7:30 AM",
        title: "Sunday Mass at Basilica of Mary Queen of the Universe",
        description: "Attend solemn Sunday Mass together 4 miles from Disney. Pray the traveler's intention for your family."
      });
      events.push({
        time: "9:15 AM",
        title: "Transit Buffer & Gate Arrival (TTC Monorail / Ferry)",
        description: "Arrive at park gates. Head directly to high-capacity classics while morning crowds congest Fantasyland."
      });
    } else if (isHolyDay) {
      events.push({
        time: "8:30 AM",
        title: `Holy Day Mass: ${holyDayName}`,
        description: "Fulfill your Holy Day precept at the Basilica of Mary Queen of the Universe or local parish before park entry."
      });
      events.push({
        time: "10:15 AM",
        title: `Enter ${parkChoice.park} with Holy Grace`,
        description: "Begin park touring refreshed in spirit. Target mid-tier classics and walk-ons."
      });
    } else {
      events.push({
        time: "8:00 AM",
        title: `Rope Drop at ${parkChoice.park} & Morning Offering`,
        description: "Walk down the main boulevard praying the morning offering and St. Michael the Archangel prayer."
      });
    }

    events.push({
      time: "11:00 AM",
      title: "Queue Rosary Devotion in Line",
      description: "During your first 35+ minute queue, gather the family to pray 1 to 2 decades of the Queue Rosary together."
    });

    events.push({
      time: "1:30 PM",
      title: isAbstinenceDay ? `Meatless Lunch at ${parkChoice.food.split(' (')[0]}` : `Family Lunch & Prayer at ${parkChoice.park}`,
      description: isAbstinenceDay 
        ? `Enjoy delicious seafood or plant-based meals at ${parkChoice.food}. Honor your Friday penance joyfully!`
        : `Hydrate and rest during midday heat. Pray the Angelus together before dining.`
    });

    events.push({
      time: "3:00 PM",
      title: "Midday Sanctuary Retreat to Quiet Prayer Nook",
      description: "Escape the 2:00 PM crowd surge. Rest in shaded peace at a nearby prayer nook (e.g. Liberty Square courtyard or Morocco pavilion)."
    });

    events.push({
      time: "8:30 PM",
      title: "Evening Spectacular & Nighttime Walk-Ons",
      description: "Enjoy evening fireworks and nighttime walk-on lines when crowds thin out."
    });

    days.push({
      formattedDate,
      isSunday,
      isFriday,
      isAbstinenceDay,
      abstinenceLabel,
      isHolyDay,
      holyDayName,
      holyDayGuidance,
      title: `${parkChoice.park}: ${isHolyDay ? holyDayName : isSunday ? 'Sunday Liturgy & Wonder' : 'Family Adventure & Virtue'}`,
      theme: isHolyDay ? `Honoring ${holyDayName}` : isSunday ? "The Lord's Day & Domestic Church Joy" : "Christian Courage, Wonder & Family Unity",
      diningRecommendation: parkChoice.food,
      largeFamilyTip,
      events,
      nightlyReflection: `How did our family witness to Christ's love and patience today, especially when waiting in lines or caring for one another?`
    });
  }

  return days;
}
