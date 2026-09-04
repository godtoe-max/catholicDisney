// Catholic Disney: Large-Family Pilgrimage Itinerary Planner
// Features: Canon 1251 Solemnity Abrogation on Fridays, Travel Days, Disney Springs, Park Hoppers, Tradition Churches & 5-Yr Crowd Data

import { TRADITIONS_LITURGICAL, DISNEY_ABSTINENCE_DINING } from '../data/holy-days-data.js?v=20260902_v2';
import { DISNEYLAND_TRADITIONS_LITURGICAL, DISNEYLAND_MISSION_EXCURSION } from '../data/disneyland-churches-data.js?v=20260902_v2';
import { getCrowdForDate } from '../data/calendar-crowds-data.js?v=20260902_v2';
import { getActiveResortId, getActiveResort } from './resort-switcher.js?v=20260902_v2';

export const PARK_OPTIONS = [
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

export const DISNEYLAND_PARK_OPTIONS = [
  { id: "dl", name: "Disneyland Park", icon: "🏰", food: "French Market / Cafe Orleans (New Orleans Square - Salmon / Gumbo) or Plaza Inn" },
  { id: "dca", name: "Disney California Adventure", icon: "🎡", food: "Pacific Wharf Cafe (Sourdough Clam Chowder) or Flo's V8 Cafe" },
  { id: "hopper_dl_dca", name: "Park Hopper: Disneyland + DCA", icon: "🦘", food: "French Market (Lunch) / San Fransokyo Square Sourdough (Dinner)" },
  { id: "downtown_disney", name: "Downtown Disney & Hotel Exploration", icon: "🛍️", food: "Naples Ristorante e Bar (Wood-fired Margherita Pizza) or Jazz Kitchen" },
  { id: "mission_excursion", name: "Mission San Juan Capistrano Excursion", icon: "🔔", food: "Historic Mission Inn / San Juan Capistrano dining (Train excursion)" },
  { id: "travel_arrival", name: "Travel & Arrival Day", icon: "✈️", food: "Harbor Blvd Dining or Downtown Disney Quick-Service" },
  { id: "travel_depart", name: "Travel & Departure Day", icon: "🚗", food: "Airport / Travel Dining or Final Morning Resort Brunch" },
  { id: "rest", name: "Christ Cathedral Pilgrimage & Rest Day", icon: "⛪", food: "Christ Cathedral Cultural Plaza / Garden Grove dining" }
];

export function getActiveParkOptions() {
  return getActiveResortId() === 'dlr' ? DISNEYLAND_PARK_OPTIONS : PARK_OPTIONS;
}

export function getActiveTraditions() {
  return getActiveResortId() === 'dlr' ? DISNEYLAND_TRADITIONS_LITURGICAL : TRADITIONS_LITURGICAL;
}

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

export function renderBestDaysOfWeek() {
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

export function renderHourlyQueueRhythm() {
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

export function refreshDailyParksUI() {
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

export function generateCustomItinerary() {
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

