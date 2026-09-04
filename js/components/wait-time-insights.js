// Catholic Disney: Rule-Based Wait Time Analytics & Natural Language Coaching Engine
// Implements the mathematical formulas and rules from CATHOLIC_DISNEY_WAIT_TIMES_SPEC.md

import { RIDE_TIERS, SUNDAY_MASS_PRESETS, DISNEYLAND_SUNDAY_MASS_PRESETS, CROWD_MULTIPLIERS } from '../data/ride-tiers.js?v=20260902_v2';
import { HOURLY_CROWD_CURVES } from '../data/wait-times-data.js?v=20260902_v2';

export function calculateItineraryProjections({ massPresetId, parkId, rideIds, crowdLevelKey }) {
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
