import { HOURS, MARINA, SITE } from "./site";

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "How many slips are available?",
    answer: `The marina offers ${MARINA.slips} secure slips in the heart of Man-O-War Cay.`,
  },
  {
    question: "What size vessels can you accommodate?",
    answer: `Our slips accommodate vessels up to ${MARINA.maxLengthFt} ft in length with beams up to ${MARINA.maxBeamFt} ft.`,
  },
  {
    question: "What is the maximum draft?",
    answer: `Even at low tide, our slips can accommodate drafts up to ${MARINA.maxDraftFt} ft.`,
  },
  {
    question: "Is power available at the dock?",
    answer:
      "Yes. Both 30 amp and 50 amp power connections are available at the marina.",
  },
  {
    question: "Is water available at the slips?",
    answer: "Yes, fresh water is available at each slip.",
  },
  {
    question: "How do I request dockage?",
    answer:
      "Send a dockage request through our Reserve Dockage page, call the marina office, or email us with your arrival dates and vessel details. Our team will confirm availability before your reservation is final.",
  },
  {
    question: "What channel should boaters use?",
    answer: `We monitor VHF Channel ${MARINA.vhfChannel}. Call as you approach and we will assist you into your slip.`,
  },
  {
    question: "What are the marina office hours?",
    answer: `The marina office is open ${HOURS.marinaOffice.days}, ${HOURS.marinaOffice.lines.join(" and ")}.`,
  },
  {
    question: "Is fuel available on the island?",
    answer:
      "Yes. Man-O-War Marina Village serves as the island's fueling station, with gasoline and diesel available both dockside and roadside.",
  },
  {
    question: "What fuel types are available?",
    answer:
      "Both gasoline and diesel are available. Dockside fueling runs 8:00 AM – 12:00 PM and 1:00 PM – 4:00 PM; roadside fueling runs 9:00 AM – 12:00 PM and 2:00 PM – 4:00 PM. Please note that prices may fluctuate.",
  },
  {
    question: "Where is Dock N' Dine?",
    answer:
      "Dock N' Dine is right here at the marina village on the waterfront — dock your boat and walk up to dine with a harbour-side view.",
  },
  {
    question: "What are the restaurant hours?",
    answer: `Dock N' Dine is open ${HOURS.restaurant.days} from ${HOURS.restaurant.lines[0]}. You can reach the restaurant directly at ${SITE.restaurantPhoneDisplay}.`,
  },
  {
    question: "What amenities are available for marina guests?",
    answer:
      "Marina guests have access to restrooms, showers, laundry facilities, a grill area and a swimming pool.",
  },
];
