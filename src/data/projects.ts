export type Persona = {
  name: string;
  age: number;
  role: string;
  bio: string;
  goals: string[];
  frustrations: string[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  description: string;
  overview: string;
  problem: string;
  goals: string[];
  features: string[];
  outcome: string;
  prototypeUrl?: string;
  behanceUrl?: string;
  primaryColor: string;
  secondaryColor: string;
  persona: Persona;
  persona2: Persona;
  process: { title: string; description: string }[];
};

export const projects: Project[] = [
  {
    id: "nexus-admin",
    title: "Nexus Admin Dashboard",
    category: "Product Design",
    tags: ["UI/UX", "DASHBOARD", "SAAS"],
    year: "2026",
    client: "Concept Project",
    role: "Product Designer - Research, IA, UI, Prototype",
    description: "A modern admin console prototype that centralizes KPIs, user management, analytics, reporting, and AI-driven insight triage into one calm, high-signal interface.",
    overview: "Nexus Admin brings scattered operational data into a single admin console - KPIs, user drilldowns, analytics, report lifecycle, AI insights, and personalization - using consistent card, table, and tab patterns with progressive disclosure.",
    problem: "Admin teams jump between tools to answer basic questions: Is the platform healthy? Which users need attention? Why did this metric move? Detecting anomalies and understanding the 'why' takes far too long.",
    goals: [
      "Identify platform status instantly with KPI cards and trend charts",
      "Drill into details without losing context via tabs and side drawers",
      "Explore analytics over time with clear, per-domain visualizations",
      "Track report workflows end-to-end with status-based lists",
      "Accelerate investigation using AI severity triage and chat",
      "Personalize theme, font, and notification preferences",
    ],
    features: [
      "Dashboard with 4 KPI cards, tabbed performance chart and recent activity feed",
      "Users page with search, filter, sort, pagination and an in-context profile drawer",
      "Analytics with tabbed Traffic Sources, Retention and Devices",
      "Reports with status-based tabs (Ready / Generating / Failed) and a generate-report modal",
      "AI Insights with severity-grouped cards, suggestion chips and chat investigation",
      "Settings for profile, appearance and granular notification toggles",
    ],
    outcome: "A cohesive end-to-end admin experience - operational overview, management tooling, analytics exploration, report lifecycle, AI decision support, and personalization - ready as a foundation for real-data and API integration.",
    prototypeUrl: "https://nexusadmindashboard.vercel.app/",
    behanceUrl: "https://www.behance.net/saravanan_design",
    primaryColor: "#F97415",
    secondaryColor: "#fff",
    persona: {
      name: "Priya Narayan",
      age: 32,
      role: "Operations Lead, B2B SaaS",
      bio: "Runs day-to-day operations for a growing SaaS platform, juggling metrics, user issues and weekly reports for leadership.",
      goals: ["See platform health at a glance every morning", "Investigate anomalies without switching tools", "Ship a clean weekly report to leadership in under 30 minutes"],
      frustrations: ["Data is spread across 4+ dashboards", "No context on why a metric moved", "Report generation is manual and error-prone"],
    },
    persona2: {
      name: "Karan Mehta",
      age: 28,
      role: "Backend Engineer, Platform Team",
      bio: "Monitors system health and debugs incidents. Needs the admin console to surface errors and user-impact data quickly without needing a separate logging tool.",
      goals: ["Spot performance degradations the moment they happen", "Correlate user complaints with backend events", "Export logs for incident post-mortems"],
      frustrations: ["Alert fatigue from low-signal notifications", "Can't see user impact during outages", "Switching between 3 tools to diagnose one issue"],
    },
    process: [
      { title: "Research", description: "User interviews, competitive scan and secondary research to understand the problem space." },
      { title: "Define", description: "Synthesis into personas, user journeys and a sharp problem statement." },
      { title: "Ideate", description: "Sketches, information architecture and low-fidelity flows explored." },
      { title: "Prototype", description: "High-fidelity UI system, interactions and clickable prototype in Figma." },
      { title: "Test & Iterate", description: "Usability testing with target users; refinement of flows and visual hierarchy." },
    ],
  },
  {
    id: "my-vetry-tamil-nadu",
    title: "My Vetry Tamil Nadu",
    category: "Civic Product",
    tags: ["UI/UX", "BILINGUAL", "GOV TECH"],
    year: "2026",
    client: "Concept Project",
    role: "Product Designer - Research, IA, Bilingual UX, UI",
    description: "A bilingual (Tamil + English) citizen services and constituency intelligence dashboard that centralizes Tamil Nadu government service access, eligibility, and civic engagement into one modern interface.",
    overview: "My Vetry Tamil Nadu is a web application for Tamil Nadu citizens, local administrators, and community members. It simplifies service discovery, eligibility checks, constituency intelligence, issue tracking, and public engagement - all with full Tamil/English localization.",
    problem: "Citizens face friction accessing local government services: scattered department portals, unclear eligibility, no single view for constituency performance, and little bilingual support for local users.",
    goals: [
      "Build a clear, trustable dashboard for public services",
      "Make service discovery fast with search, filters and categories",
      "Provide actionable insights for districts, constituencies and issues",
      "Support Tamil and English users with fully localized content",
      "Use a familiar civic brand language while keeping UX approachable",
    ],
    features: [
      "Dashboard overview with quick metrics, recent and favorite services, and global search",
      "Service catalog with category filters, responsive cards and eligibility modals",
      "Constituency Intelligence with district selectors and budget/population/issue cards",
      "Issues & Complaints with status/category filters and searchable paginated tables",
      "People's Hall engagement for citizen ideas, policy votes and campaign tracking",
      "Full English / Tamil translation with an integrated language toggle",
    ],
    outcome: "A polished, scalable prototype for a citizen-facing government service portal - bilingual, service-centric, and data-rich - demonstrating strong potential as a real-world public service platform.",
    behanceUrl: "https://www.behance.net/saravanan_design",
    prototypeUrl: "https://vetri-tamilnadu-superapp.vercel.app/",
    primaryColor: "#F4C430",
    secondaryColor: "#C8102E",
    persona: {
      name: "Muthu Selvam",
      age: 45,
      role: "Small business owner, Madurai",
      bio: "A Tamil-first citizen who needs to apply for licenses, check scheme eligibility and raise civic complaints - but rarely uses English websites.",
      goals: ["Apply for government schemes in Tamil", "Know which documents are needed before visiting an office", "Track the status of complaints raised in his ward"],
      frustrations: ["Department websites are English-only and confusing", "No single place to see all services", "Complaints disappear once submitted - no tracking"],
    },
    persona2: {
      name: "Kavitha Rajan",
      age: 38,
      role: "Ward Councillor, Chennai",
      bio: "Elected representative managing civic complaints and budget for 4,000 residents. Needs real-time data on issues in her ward to prioritise fieldwork.",
      goals: ["See open complaints in her ward at a glance", "Track budget allocation vs. spend per project", "Engage constituents on upcoming development decisions"],
      frustrations: ["Reports come in Excel sheets, not live data", "No way to broadcast updates to residents directly", "Constituency data is siloed across departments"],
    },
    process: [
      { title: "Research", description: "User interviews, competitive scan and secondary research to understand the problem space." },
      { title: "Define", description: "Synthesis into personas, user journeys and a sharp problem statement." },
      { title: "Ideate", description: "Sketches, information architecture and low-fidelity flows explored." },
      { title: "Prototype", description: "High-fidelity UI system, interactions and clickable prototype in Figma." },
      { title: "Test & Iterate", description: "Usability testing with target users; refinement of flows and visual hierarchy." },
    ],
  },
  {
    id: "whatsapp-scheduler",
    title: "WhatsApp Message Scheduler",
    category: "Feature Addition",
    tags: ["MOBILE", "UI/UX", "MESSAGING"],
    year: "2026",
    client: "Concept Project",
    role: "UX Designer - Research, Flows, UI, Prototype",
    description: "A native-feeling schedule feature added to WhatsApp Messenger that lets users compose a message now and deliver it at a chosen time - without breaking WhatsApp's familiar chat pattern.",
    overview: "The scheduling flow lives inside the existing chat composer as a long-press on the send button. Users pick a date and time, see all scheduled messages in a dedicated queue, and can edit, reschedule or cancel - all inside patterns WhatsApp users already know.",
    problem: "Users often type messages at the wrong hour - late night, during meetings, across time zones - and either send at a bad moment or forget to send later. WhatsApp has no built-in way to time a message.",
    goals: [
      "Fit the feature into WhatsApp's existing send flow with zero learning curve",
      "Give users clear feedback on what's scheduled and when",
      "Let users edit or cancel scheduled messages easily",
      "Respect platform patterns on both iOS and Android",
    ],
    features: [
      "Long-press on the send button reveals a Schedule option",
      "Date + time picker with quick presets (Tonight 8pm, Tomorrow 9am, Next Monday)",
      "Scheduled tray inside the chat showing all upcoming messages",
      "Edit, reschedule and cancel actions with confirmation",
      "Delivery notification once the message is sent",
    ],
    outcome: "A high-fidelity mobile prototype that adds real user value while staying invisible until needed - validated in 5 usability tests where 5/5 users discovered and used the feature without instruction.",
    behanceUrl: "https://www.behance.net/saravanan_design",
    primaryColor: "#007AFF",
    secondaryColor: "#fff",
    persona: {
      name: "Anitha R.",
      age: 28,
      role: "Marketing Manager",
      bio: "Coordinates with teammates and clients across India, US and Singapore - messages her team at odd hours and often forgets to follow up.",
      goals: ["Send birthday and reminder messages at the right moment", "Message international teammates during their working hours", "Draft messages late at night without waking people up"],
      frustrations: ["Sends messages at 1 AM by accident", "Forgets to send follow-ups the next morning", "Third-party scheduler apps feel unsafe"],
    },
    persona2: {
      name: "Vijay Subramanian",
      age: 22,
      role: "College student & part-time tutor",
      bio: "Tutors 12 students across three time zones on WhatsApp. Sends the same study material to multiple groups every week and wants to batch-schedule reminders.",
      goals: ["Schedule weekly study reminders without manual effort", "Send good-morning messages to family across time zones", "Avoid disturbing contacts late at night"],
      frustrations: ["Drafts messages but forgets to send them the next day", "No built-in batch or repeat scheduling in WhatsApp", "Doesn't trust third-party apps with his WhatsApp account"],
    },
    process: [
      { title: "Research", description: "User interviews, competitive scan and secondary research to understand the problem space." },
      { title: "Define", description: "Synthesis into personas, user journeys and a sharp problem statement." },
      { title: "Ideate", description: "Sketches, information architecture and low-fidelity flows explored." },
      { title: "Prototype", description: "High-fidelity UI system, interactions and clickable prototype in Figma." },
      { title: "Test & Iterate", description: "Usability testing with target users; refinement of flows and visual hierarchy." },
    ],
  },
  {
    id: "curl-diary",
    title: "Curl Diary",
    category: "End-to-End App",
    tags: ["MOBILE", "UI/UX", "WELLNESS"],
    year: "2026",
    client: "Concept Project",
    role: "UX Designer - Research, Personas, UI, Prototype",
    description: "A personalised diary app that empowers people on their natural hair journey - logging routines, tracking hydration and porosity, and building a picture of what actually works for their hair.",
    overview: "Curl Diary combines a lightweight daily log, a product library and a progress timeline. It personalises recommendations based on the user's curl type and porosity, and celebrates small wins along a long journey.",
    problem: "People transitioning to natural hair juggle scattered advice, expensive product experiments and slow visible progress. There's no calm, personal space to track what works for their specific hair.",
    goals: [
      "Make daily logging effortless - under 30 seconds",
      "Personalise routines by curl type, porosity and climate",
      "Show progress visually over weeks and months",
      "Build a personal product library with real ratings",
    ],
    features: [
      "Onboarding hair quiz - curl type, porosity, climate",
      "One-tap daily log for wash day, moisture, protective style",
      "Product library with personal ratings and repurchase toggle",
      "Progress timeline with photo grid and hydration trend",
      "Personalised routine suggestions and reminders",
    ],
    outcome: "A warm, calm mobile app that treats a slow journey with care. Prototype tested with 4 target users - all reported the daily log felt lighter than existing tools they'd tried.",
    behanceUrl: "https://www.behance.net/saravanan_design",
    primaryColor: "#006D77",
    secondaryColor: "#E29578",
    persona: {
      name: "Divya K.",
      age: 26,
      role: "Software Engineer, transitioning to natural hair",
      bio: "Six months into her natural hair journey. Wants to understand what works for her specific curls without living inside YouTube tutorials.",
      goals: ["Track what products actually work for her hair", "See visual progress over months", "Build a repeatable weekly routine"],
      frustrations: ["Advice online is generic and contradictory", "Expensive products fail with no clear reason", "Progress feels invisible day-to-day"],
    },
    persona2: {
      name: "Preethi M.",
      age: 34,
      role: "Freelance hair stylist & natural hair advocate",
      bio: "Works with curly-haired clients and wants to recommend routines based on their specific porosity and curl pattern. Needs a tool she can point clients to.",
      goals: ["Recommend a structured journaling tool to clients", "Help clients identify product sensitivities over time", "Track client progress between salon visits"],
      frustrations: ["Clients forget what products they used between visits", "No easy way to compare routines that worked vs. failed", "Generic apps don't account for porosity or curl type"],
    },
    process: [
      { title: "Research", description: "User interviews, competitive scan and secondary research to understand the problem space." },
      { title: "Define", description: "Synthesis into personas, user journeys and a sharp problem statement." },
      { title: "Ideate", description: "Sketches, information architecture and low-fidelity flows explored." },
      { title: "Prototype", description: "High-fidelity UI system, interactions and clickable prototype in Figma." },
      { title: "Test & Iterate", description: "Usability testing with target users; refinement of flows and visual hierarchy." },
    ],
  },
  {
    id: "civic-voice",
    title: "Civic Voice - Complaint Tracker",
    category: "Mobile App",
    tags: ["MOBILE", "UI/UX", "CIVIC"],
    year: "2026",
    client: "Concept Project",
    role: "Product Designer - Research, Flows, UI, Prototype",
    description: "A mobile complaint tracker that lets citizens raise, geo-tag and follow civic issues - potholes, water, streetlights - with clear status updates from the local body.",
    overview: "Civic Voice reduces the friction of raising a complaint to under a minute: pick a category, snap a photo, drop a pin. From there, every complaint has a public status thread so citizens can see it move.",
    problem: "Citizens raise complaints across scattered channels - helplines, Twitter, WhatsApp groups - and never hear back. There's no shared record and no accountability.",
    goals: [
      "Make raising a complaint feel effortless",
      "Provide honest, timestamped status updates",
      "Let neighbours upvote and follow the same issue",
      "Give local bodies a clean queue to work from",
    ],
    features: [
      "One-minute complaint flow: category → photo → location",
      "Status timeline: Received → Assigned → In Progress → Resolved",
      "Neighbourhood map view of nearby open issues",
      "Upvote and follow issues raised by others",
      "Push notifications for status changes",
    ],
    outcome: "A trust-first prototype that treats complaints as living records, not black holes - validated with 6 residents who preferred it over their current WhatsApp-based reporting.",
    behanceUrl: "https://www.behance.net/saravanan_design",
    primaryColor: "#617AFA",
    secondaryColor: "#fff",
    persona: {
      name: "Ramesh V.",
      age: 38,
      role: "Resident Welfare Association member",
      bio: "Represents his apartment block on civic matters. Chases the corporation on behalf of 80 families.",
      goals: ["Report issues once and track them to closure", "Rally neighbours around real problems", "Have a record he can escalate with"],
      frustrations: ["Helpline calls go nowhere", "No proof of when a complaint was raised", "Same issue raised by 10 people, never grouped"],
    },
    persona2: {
      name: "Sudha Krishnan",
      age: 55,
      role: "Homemaker & neighbourhood watch volunteer",
      bio: "Notices civic problems daily - broken streetlights, overflowing bins - but has no easy way to report them. Not comfortable calling helplines in English.",
      goals: ["Report problems in Tamil without barriers", "Know that someone has actually seen her complaint", "See her neighbourhood improve over time"],
      frustrations: ["Helpline menus are in English only", "Never hears back after reporting", "Doesn't use Twitter or WhatsApp groups actively"],
    },
    process: [
      { title: "Research", description: "User interviews, competitive scan and secondary research to understand the problem space." },
      { title: "Define", description: "Synthesis into personas, user journeys and a sharp problem statement." },
      { title: "Ideate", description: "Sketches, information architecture and low-fidelity flows explored." },
      { title: "Prototype", description: "High-fidelity UI system, interactions and clickable prototype in Figma." },
      { title: "Test & Iterate", description: "Usability testing with target users; refinement of flows and visual hierarchy." },
    ],
  },
  {
    id: "medislot",
    title: "MediSlot - Hospital Appointments",
    category: "Mobile App",
    tags: ["MOBILE", "UI/UX", "HEALTHCARE"],
    year: "2026",
    client: "Concept Project",
    role: "Product Designer - Research, Flows, UI, Prototype",
    description: "A hospital appointment booking app that helps patients find the right doctor, book a real time slot and prepare for the visit - without phone calls or waiting rooms.",
    overview: "MediSlot focuses on the moment a patient decides they need care. Symptom-based specialty suggestions, transparent doctor profiles, live slot availability and a calm pre-visit checklist reduce the anxiety of hospital visits.",
    problem: "Booking a hospital appointment usually means calling reception, being put on hold, or turning up and waiting. Patients don't know which specialty they need or how long they'll wait.",
    goals: [
      "Match patients to the right specialty in under a minute",
      "Show real available slots - no fake availability",
      "Reduce in-hospital wait time with better preparation",
      "Build trust with clear doctor profiles and reviews",
    ],
    features: [
      "Symptom-based specialty finder",
      "Doctor profiles with experience, languages and ratings",
      "Live calendar with real time slots",
      "Pre-visit checklist and document upload",
      "Appointment reminders and reschedule flow",
    ],
    outcome: "A clean, reassuring booking flow validated with 5 patients - average booking time dropped from 8 minutes (phone) to 90 seconds (app) in the tested scenarios.",
    behanceUrl: "https://www.behance.net/saravanan_design",
    primaryColor: "#0D3372",
    secondaryColor: "#F2ECE7",
    persona: {
      name: "Lakshmi S.",
      age: 34,
      role: "Working parent",
      bio: "Books appointments for herself, her kids and her ageing parents. Time-poor and juggles three different hospitals.",
      goals: ["Book the right doctor without a phone call", "See real slot availability upfront", "Keep all family appointments in one place"],
      frustrations: ["Hospital reception lines are always busy", "Doesn't know which specialty to pick", "Long unpredictable waits at the hospital"],
    },
    persona2: {
      name: "Dr. Arun Balaji",
      age: 42,
      role: "Cardiologist, private hospital",
      bio: "Sees 20+ patients a day. Wants his schedule to be predictable and his patient no-show rate to drop. Has no visibility into who's confirmed for the next day.",
      goals: ["Reduce no-shows with automated patient reminders", "See a clean daily schedule without calling the front desk", "Allow patients to reschedule without consuming staff time"],
      frustrations: ["Patients don't show up and don't cancel", "Scheduling still happens over phone by the front desk", "No way to push pre-visit instructions to patients digitally"],
    },
    process: [
      { title: "Research", description: "User interviews, competitive scan and secondary research to understand the problem space." },
      { title: "Define", description: "Synthesis into personas, user journeys and a sharp problem statement." },
      { title: "Ideate", description: "Sketches, information architecture and low-fidelity flows explored." },
      { title: "Prototype", description: "High-fidelity UI system, interactions and clickable prototype in Figma." },
      { title: "Test & Iterate", description: "Usability testing with target users; refinement of flows and visual hierarchy." },
    ],
  },
];
