export interface Persona {
  name: string;
  age: number;
  role: string;
  bio: string;
  behaviors?: string[];
  goals: string[];
  frustrations: string[];
  needs?: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface JourneyStage {
  stage: string;
  action: string;
  painPoint: string;
  improvement: string;
}

export interface Iteration {
  version: string;
  what: string;
  feedback: string;
}

export interface UXDecision {
  area: string;
  decision: string;
  reasoning: string;
}

export interface Result {
  metric: string;
  value: string;
  note?: string;
}

export interface Project {
  id: string;
  order: number;
  title: string;
  category: string;
  tags: string[];
  year: string;
  duration: string;
  team: string;
  platform: string;
  tools: string[];
  client: string;
  role: string;
  description: string;
  gradient: string; // css gradient for cover
  color: string;    // base color for accents
  accent: string;   // display letter/word

  // Hero + overview
  tagline: string;
  audience: string;
  problemOneLine: string;

  // Overview
  overview: string;
  background: string;
  context: string;
  industry: string;
  whyItMattered: string;

  // Problem
  problem: string;
  userStruggles: string[];
  businessIssue: string;

  // Business goals
  businessGoals: string[];

  // Research
  research: {
    goals: string[];
    methods: string[];
    questions: string[];
    assumptions: string[];
    insights: string[];
  };

  // Persona
  persona: Persona;

  // Journey
  journey: JourneyStage[];

  // IA
  ia: {
    structure: string[];
    rationale: string;
  };

  // User flow
  userFlow: {
    steps: string[];
    rationale: string;
  };

  // Wireframes
  wireframes: {
    approach: string;
    iterations: number;
    feedback: string;
  };

  // UX decisions
  uxDecisions: UXDecision[];

  // Accessibility
  accessibility: string[];

  // Iterations
  iterations: Iteration[];

  // Final solution
  features: string[];
  finalSolution: string;

  // Results
  results: Result[];
  resultsNote: string;

  // Lessons
  lessons: {
    learned: string[];
    improve: string;
    tradeoffs: string;
    future: string[];
  };

  outcome: string;
  prototypeUrl?: string;
  behanceUrl?: string;
}

const defaultTools = ["Figma", "FigJam", "Notion"];

export const projects: Project[] = [
  {
    id: "nexus-admin",
    order: 1,
    title: "Nexus Admin Dashboard",
    category: "Product Design",
    tags: ["UI/UX", "Dashboard", "SaaS"],
    year: "2025",
    duration: "6 weeks",
    team: "Solo (self-initiated)",
    platform: "Web / Desktop-first",
    tools: [...defaultTools, "Recharts", "shadcn/ui"],
    client: "Self-Initiated Concept",
    role: "Product Designer - Research, IA, UI, Prototype",
    description:
      "A modern admin console prototype that centralizes KPIs, user management, analytics, reporting and AI-driven insight triage into one calm, high-signal interface.",
    gradient: "linear-gradient(135deg, oklch(0.35 0.18 295) 0%, oklch(0.2 0.12 280) 100%)",
    color: "#8b5cf6",
    accent: "Nexus",

    tagline: "One calm console for operating a live SaaS platform.",
    audience: "Operations leads, admins and account managers running B2B SaaS platforms.",
    problemOneLine: "Admin teams jump between 4+ tools to answer basic health, user and reporting questions.",

    overview:
      "Nexus Admin brings scattered operational data into a single admin console - KPIs, user drilldowns, analytics, report lifecycle, AI insights and personalization - using consistent card, table and tab patterns with progressive disclosure.",
    background:
      "Modern SaaS ops teams increasingly own uptime, user health and revenue reporting - but tooling has fragmented across 4–6 dashboards.",
    context:
      "Explored as a self-initiated concept to pressure-test a role-based admin IA that scales from operator to admin without changing muscle memory.",
    industry: "B2B SaaS / Internal tools",
    whyItMattered:
      "Every extra minute an ops lead spends context-switching is a minute stolen from actually fixing what broke.",

    problem:
      "Admin teams jump between tools to answer basic questions: Is the platform healthy? Which users need attention? Why did this metric move? Detecting anomalies and understanding the ‘why’ takes far too long.",
    userStruggles: [
      "Metrics live in one tool, users in another, reports in a third",
      "No shared vocabulary between analytics and support",
      "Anomalies are noticed hours after they happen",
      "Weekly reports are hand-rolled from screenshots",
    ],
    businessIssue:
      "Slow anomaly detection turns small issues into churn. Report prep alone burns ~4 hours of ops time every week.",

    businessGoals: [
      "Cut anomaly detection time from hours to minutes",
      "Reduce weekly report prep from 4 hours to under 30 minutes",
      "Give admins one place to answer 90% of daily questions",
      "Make role-based permissions legible, not scary",
    ],

    research: {
      goals: [
        "Understand how ops leads actually start their day",
        "Map the questions admins ask most often",
        "Identify where role differences (Admin / Manager / Employee) change the UI",
      ],
      methods: [
        "5 informal interviews with ops / support leads at SaaS companies",
        "Competitive teardown of Segment, Mixpanel, Linear Insights, Vercel and Stripe dashboards",
        "Diary study of 3 admins over one week (Slack DM check-ins)",
      ],
      questions: [
        "Walk me through the first 10 minutes of your workday.",
        "When a metric drops, what do you open first?",
        "Which report do you dread the most? Why?",
        "What lives in Excel that shouldn’t?",
      ],
      assumptions: [
        "Admins want one giant dashboard",
        "AI insights would be trusted by default",
      ],
      insights: [
        "Admins don’t want more data - they want fewer decisions",
        "Trust in AI insights depends on showing the ‘why’, not just the alert",
        "Role differences are mostly about scope of data, not new features",
        "Report generation is the most emotionally draining task of the week",
      ],
    },

    persona: {
      name: "Priya Narayan",
      age: 32,
      role: "Operations Lead, B2B SaaS",
      bio: "Runs day-to-day operations for a growing SaaS platform, juggling metrics, user issues and weekly reports for leadership.",
      behaviors: [
        "Opens 4 dashboards every morning in the same order",
        "Screenshots charts into Notion for weekly reports",
        "Pings engineers on Slack when a metric ‘looks weird’",
      ],
      needs: ["Fast overview", "In-context drilldown", "Exportable report artifacts"],
      goals: [
        "See platform health at a glance every morning",
        "Investigate anomalies without switching tools",
        "Ship a clean weekly report to leadership in under 30 minutes",
      ],
      frustrations: [
        "Data is spread across 4+ dashboards",
        "No context on why a metric moved",
        "Report generation is manual and error-prone",
      ],
    },

    journey: [
      {
        stage: "Morning check-in",
        action: "Open 4 tabs, scan for red",
        painPoint: "Same numbers in different shapes across tools",
        improvement: "Single KPI row with trend + delta on top of every page",
      },
      {
        stage: "Anomaly detected",
        action: "Ping engineer, wait for context",
        painPoint: "No self-serve ‘why’",
        improvement: "AI Insights card links directly to affected users and timeline",
      },
      {
        stage: "Weekly report",
        action: "Screenshot charts, paste into Notion",
        painPoint: "Manual, error-prone, no versioning",
        improvement: "One-click report generation with status pipeline",
      },
    ],

    ia: {
      structure: [
        "Overview (KPIs + activity)",
        "Users (list → profile drawer)",
        "Analytics (Traffic / Retention / Devices tabs)",
        "Reports (Ready / Generating / Failed tabs)",
        "AI Insights (Severity groups + chat)",
        "Settings (Profile / Appearance / Notifications)",
      ],
      rationale:
        "Six top-level modules mapped directly to the six daily questions admins ask. Sub-navigation uses tabs, never nested menus, so admins never lose the ‘back’ path.",
    },

    userFlow: {
      steps: [
        "Login → Dashboard overview",
        "KPI anomaly → click into affected metric",
        "Drilldown → user list filtered by segment",
        "Open profile drawer without leaving list",
        "Escalate → generate report → share link",
      ],
      rationale:
        "Every step preserves the previous context via drawers and tabs. Admins never open a new tab to ‘remember where I was’.",
    },

    wireframes: {
      approach:
        "Started with paper sketches for the 3 highest-frequency flows, then low-fi Figma frames before any visual polish.",
      iterations: 3,
      feedback:
        "V1 hid KPIs behind a tab - pilot users missed anomalies. V2 promoted KPIs to a sticky row and added trend deltas. V3 introduced the profile drawer to replace nested navigation.",
    },

    uxDecisions: [
      {
        area: "KPI cards",
        decision: "Always visible, above the fold, four wide",
        reasoning: "Anomaly detection is the primary job-to-be-done; anything below the fold is not the answer.",
      },
      {
        area: "Profile drawer vs new page",
        decision: "Right-side drawer over full-page navigation",
        reasoning: "Preserves the parent list state so admins can compare users without losing filters.",
      },
      {
        area: "AI Insights severity",
        decision: "Color + label, never color alone",
        reasoning: "Colorblind users must still triage; severity is too critical to depend on hue.",
      },
      {
        area: "Reports tabs",
        decision: "Status-based tabs (Ready / Generating / Failed)",
        reasoning: "Report state is the question admins actually ask (‘is mine done?’), not the date.",
      },
    ],

    accessibility: [
      "All text meets WCAG AA contrast against surface tokens",
      "Focus rings preserved on every interactive element",
      "Severity conveyed by icon + label, never color alone",
      "Tables support full keyboard navigation and screen-reader row/col headers",
      "Font sizes scale with rem so browser zoom works to 200%",
    ],

    iterations: [
      {
        version: "V1",
        what: "Dashboard hid KPIs behind a tab, prioritized activity feed",
        feedback: "Users missed anomalies for hours - the feed felt like noise",
      },
      {
        version: "V2",
        what: "Promoted KPIs to a sticky row with trend deltas",
        feedback: "Anomalies caught in seconds, but drilldown broke context",
      },
      {
        version: "V3 (final)",
        what: "Added right-side profile drawer + AI severity triage",
        feedback: "Users could investigate without leaving the list",
      },
    ],

    features: [
      "Dashboard with 4 KPI cards, tabbed performance chart and recent activity feed",
      "Users page with search, filter, sort, pagination and in-context profile drawer",
      "Analytics with tabbed Traffic Sources, Retention and Devices",
      "Reports with status-based tabs and a generate-report modal",
      "AI Insights with severity-grouped cards and chat investigation",
      "Settings for profile, appearance and granular notification toggles",
    ],
    finalSolution:
      "A single admin console where every daily question has a one-click answer, every drilldown preserves context, and every AI insight is explainable.",

    results: [
      { metric: "Time to detect KPI anomaly", value: "↓ ~70%", note: "Prototype tests (n=5)" },
      { metric: "Weekly report prep time", value: "↓ 4h → ~25m", note: "Estimated from flow walkthroughs" },
      { metric: "Tabs opened during typical investigation", value: "↓ 6 → 1" },
      { metric: "Task success in usability test", value: "5 / 5" },
    ],
    resultsNote:
      "Numbers are prototype outcomes from moderated task walkthroughs, not production analytics.",

    lessons: {
      learned: [
        "Ops teams want fewer decisions, not more charts",
        "AI insights fail the moment they can’t explain the ‘why’",
        "Progressive disclosure via drawers beats deep navigation for investigation flows",
      ],
      improve: "Ship an actual data integration layer so real anomalies drive the AI severity model, not scripted demo data.",
      tradeoffs: "Chose card-and-drawer density over information-dense grids - great for scan, weaker for power-user comparisons.",
      future: [
        "Role-specific home screens for Admin / Manager / Employee",
        "Saved investigation views (Slack-style shareable state)",
        "Anomaly playback timeline",
      ],
    },

    outcome:
      "A cohesive end-to-end admin experience - operational overview, management tooling, analytics exploration, report lifecycle, AI decision support and personalization - ready as a foundation for real-data and API integration.",
    prototypeUrl: "https://nexusadmindashboard.vercel.app/",
    behanceUrl: "https://www.behance.net/saravanan_design",
  },

  {
    id: "my-vetry-tamil-nadu",
    order: 2,
    title: "My Vetry Tamil Nadu",
    category: "Civic Product",
    tags: ["UI/UX", "Bilingual", "Gov Tech"],
    year: "2025",
    duration: "8 weeks",
    team: "Solo",
    platform: "Web / Mobile web (bilingual)",
    tools: [...defaultTools, "i18n", "shadcn/ui"],
    client: "Concept Project",
    role: "Product Designer - Research, IA, Bilingual UX, UI",
    description:
      "A bilingual (Tamil + English) citizen services and constituency intelligence dashboard that centralizes Tamil Nadu government service access, eligibility and civic engagement.",
    gradient: "linear-gradient(135deg, oklch(0.35 0.14 25) 0%, oklch(0.22 0.1 300) 100%)",
    color: "#ea580c",
    accent: "Vetry",

    tagline: "One trustworthy home for Tamil Nadu’s public services - in Tamil first.",
    audience: "Tamil-first citizens, ward-level administrators and RWA members across Tamil Nadu.",
    problemOneLine: "Government services are scattered across English-only portals with no unified view or bilingual support.",

    overview:
      "My Vetry Tamil Nadu is a web app for Tamil Nadu citizens, local administrators and community members. It simplifies service discovery, eligibility checks, constituency intelligence, issue tracking and public engagement - fully localized in Tamil and English.",
    background:
      "Tamil Nadu runs 200+ citizen schemes across dozens of departments. Most portals assume English literacy and desktop access.",
    context:
      "A concept product exploring how a citizen-first, bilingual layer could sit above existing department infrastructure.",
    industry: "GovTech / Civic services",
    whyItMattered:
      "Tamil-first users are the majority audience for these services, yet they’re the last audience the interfaces are designed for.",

    problem:
      "Citizens face friction accessing local government services: scattered department portals, unclear eligibility, no single view for constituency performance and little bilingual support for local users.",
    userStruggles: [
      "Every scheme lives on a different portal with a different login",
      "Eligibility rules are buried in PDF circulars",
      "Complaints raised at ward level disappear with no tracking",
      "English-heavy UIs alienate the primary audience",
    ],
    businessIssue:
      "Departments duplicate helplines and support work because citizens can’t self-serve - cost of service is high, satisfaction is low.",

    businessGoals: [
      "Increase citizen self-service completion for common schemes",
      "Reduce ward-level helpline volume with better tracking",
      "Establish trust in a single bilingual citizen brand",
      "Give constituencies transparent performance visibility",
    ],

    research: {
      goals: [
        "Understand how Tamil-first citizens currently access services",
        "Map decision points that stop applications (docs, eligibility, language)",
        "Identify trust cues for government interfaces",
      ],
      methods: [
        "6 contextual interviews across Madurai, Trichy and Chennai",
        "Content audit of 10 TN government service portals",
        "Comparative analysis of DigiLocker, Aadhaar and UMANG bilingual patterns",
      ],
      questions: [
        "The last time you applied for a scheme - walk me through it.",
        "What made you stop and call someone?",
        "What does a ‘trustworthy government website’ look like to you?",
        "When would you switch to English on this app?",
      ],
      assumptions: [
        "Users want a single super-app",
        "Tamil translation alone solves accessibility",
      ],
      insights: [
        "Trust comes from visual restraint and official-feeling typography, not fancy interactions",
        "Users want eligibility answered BEFORE they start an application",
        "Tamil script needs its own line-height and weight treatment - English styles don’t transfer",
        "Ward-level tracking is the single feature RWA members asked for repeatedly",
      ],
    },

    persona: {
      name: "Muthu Selvam",
      age: 45,
      role: "Small business owner, Madurai",
      bio: "A Tamil-first citizen applying for licenses, checking scheme eligibility and raising civic complaints - rarely uses English websites.",
      behaviors: [
        "Uses WhatsApp as his primary internet",
        "Prints scheme PDFs at the local Xerox shop",
        "Prefers voice notes over typing",
      ],
      needs: ["Fully Tamil UI", "Clear document checklist", "Complaint tracking with SMS updates"],
      goals: [
        "Apply for schemes in Tamil",
        "Know required documents before visiting an office",
        "Track the status of complaints raised in his ward",
      ],
      frustrations: [
        "Department websites are English-only and confusing",
        "No single place to see all services",
        "Complaints disappear once submitted",
      ],
    },

    journey: [
      {
        stage: "Discover",
        action: "Hear about scheme via WhatsApp forward",
        painPoint: "No way to verify authenticity",
        improvement: "Official service card with clear source and last-updated date",
      },
      {
        stage: "Check eligibility",
        action: "Read circular PDF",
        painPoint: "Rules are legal-language, in English",
        improvement: "Plain-Tamil eligibility modal with yes/no chips",
      },
      {
        stage: "Apply",
        action: "Visit department portal, create new login",
        painPoint: "Repeat KYC on every portal",
        improvement: "Single citizen profile prefills applications",
      },
      {
        stage: "Track",
        action: "Call helpline",
        painPoint: "Nothing to reference, long hold times",
        improvement: "Tracked complaint with public status thread",
      },
    ],

    ia: {
      structure: [
        "Dashboard (metrics + favorites + search)",
        "Services (categorized catalog + eligibility)",
        "Constituency Intelligence (district / MLA / budget)",
        "Issues & Complaints (raise + track)",
        "People’s Hall (ideas, votes, campaigns)",
        "Profile & Language",
      ],
      rationale:
        "Structure follows the mental model of a citizen’s journey: know > apply > track > engage. Language toggle is elevated to header level - it is a first-class decision, not a settings preference.",
    },

    userFlow: {
      steps: [
        "Landing → language choice",
        "Search or category → service card",
        "Eligibility modal (Tamil, plain language)",
        "Apply → prefilled from citizen profile",
        "Track → status thread with SMS updates",
      ],
      rationale:
        "Each step is designed to answer one blocking question. Language, eligibility and documents are resolved before the user commits to a form.",
    },

    wireframes: {
      approach:
        "Wireframes were tested bilingually from V1 - every screen had a Tamil variant alongside the English one to catch layout issues early.",
      iterations: 3,
      feedback:
        "V1 broke on long Tamil words. V2 introduced flexible card heights and a dedicated Tamil type ramp. V3 promoted the language toggle from settings to header.",
    },

    uxDecisions: [
      {
        area: "Language toggle placement",
        decision: "Persistent in header, never in settings",
        reasoning: "For a bilingual audience, language is a first-class task, not a preference.",
      },
      {
        area: "Service card layout",
        decision: "Eligibility summary before ‘Apply’ CTA",
        reasoning: "Users abandon after they realize they’re ineligible - resolve that question before commitment.",
      },
      {
        area: "Complaint tracking",
        decision: "Public status timeline visible to neighbors",
        reasoning: "Transparency is the trust currency - a private ticket feels like a black hole.",
      },
      {
        area: "Typography",
        decision: "Separate Tamil type ramp with 1.5× line-height",
        reasoning: "Tamil script has taller glyphs and diacritics; English line-heights crop them.",
      },
    ],

    accessibility: [
      "AA contrast in both Tamil and English variants",
      "Tap targets ≥ 44px throughout",
      "Screen-reader labels tested with TalkBack for Tamil pronunciation",
      "Language toggle available before any content loads",
      "SMS fallback for status updates for low-connectivity users",
    ],

    iterations: [
      { version: "V1", what: "Direct English → Tamil translation with same layouts", feedback: "Tamil words overflowed cards; feel was inauthentic" },
      { version: "V2", what: "Tamil-first type ramp + flexible card heights", feedback: "Trust improved but eligibility was still hidden" },
      { version: "V3 (final)", what: "Eligibility promoted, language toggle in header, public complaint timeline", feedback: "5/6 users applied without a phone call" },
    ],

    features: [
      "Dashboard overview with quick metrics, recent and favorite services, and global search",
      "Service catalog with category filters, responsive cards and eligibility modals",
      "Constituency Intelligence with district selectors and budget/population/issue cards",
      "Issues & Complaints with status/category filters and searchable paginated tables",
      "People’s Hall engagement for citizen ideas, policy votes and campaign tracking",
      "Full English/Tamil translation with an integrated language toggle",
    ],
    finalSolution:
      "A bilingual, service-centric portal where a Tamil-first citizen can discover, check eligibility for, apply to and track any state service - without switching apps or calling a helpline.",

    results: [
      { metric: "Service discovery time", value: "↓ ~60%", note: "Prototype task (n=6)" },
      { metric: "Users completing eligibility check", value: "6 / 6" },
      { metric: "Preference vs current portals", value: "6 / 6 preferred" },
      { metric: "Ward-level complaint tracking clarity", value: "‘Very clear’ (avg 4.7/5)" },
    ],
    resultsNote:
      "All numbers are prototype outcomes from moderated bilingual usability sessions in Tamil Nadu.",

    lessons: {
      learned: [
        "Language toggle placement is a trust decision, not a settings decision",
        "Government interfaces earn trust through restraint, not novelty",
        "Bilingual design must be tested bilingually from V1",
      ],
      improve: "Bring in a Tamil-native content designer earlier - plain-language copy is the real feature.",
      tradeoffs: "Chose a shared IA across languages, which slightly compromised idiomatic Tamil section names in favor of parity.",
      future: [
        "Voice-first flow for low-literacy users",
        "Offline-first shell for rural connectivity",
        "Aadhaar-linked prefill",
      ],
    },

    outcome:
      "A polished, scalable prototype for a citizen-facing government service portal - bilingual, service-centric and data-rich.",
    prototypeUrl: "https://vetri-tamilnadu-superapp.vercel.app/",
    behanceUrl: "https://www.behance.net/saravanan_design",
  },

  {
    id: "whatsapp-scheduler",
    order: 3,
    title: "WhatsApp Message Scheduler",
    category: "Feature Addition",
    tags: ["Mobile", "UI/UX", "Messaging"],
    year: "2024",
    duration: "3 weeks",
    team: "Solo (Google UX Course)",
    platform: "Mobile - iOS + Android",
    tools: [...defaultTools, "Maze"],
    client: "Course Project - Google UX",
    role: "UX Designer - Research, Flows, UI, Prototype",
    description:
      "A native-feeling schedule feature added to WhatsApp Messenger that lets users compose a message now and deliver it at a chosen time - without breaking WhatsApp’s familiar chat pattern.",
    gradient: "linear-gradient(135deg, oklch(0.4 0.18 155) 0%, oklch(0.22 0.09 200) 100%)",
    color: "#10b981",
    accent: "Schedule",

    tagline: "Schedule messages inside the send button you already use.",
    audience: "WhatsApp users who message across time zones, teams and personal boundaries.",
    problemOneLine: "Users type messages at the wrong hour and either send at a bad moment or forget entirely.",

    overview:
      "The scheduling flow lives inside the existing chat composer as a long-press on the send button. Users pick a date and time, see all scheduled messages in a dedicated queue, and can edit, reschedule or cancel - all inside patterns WhatsApp users already know.",
    background:
      "WhatsApp is the default messenger for 2B+ users but has no native scheduling. Third-party schedulers require dangerous accessibility permissions.",
    context: "A course capstone project exploring feature addition inside an existing product’s constraints.",
    industry: "Messaging / Consumer",
    whyItMattered:
      "Feature additions are the majority of real product work - but they’re the hardest because they can’t redesign around themselves.",

    problem:
      "Users often type messages at the wrong hour - late night, during meetings, across time zones - and either send at a bad moment or forget to send later. WhatsApp has no built-in way to time a message.",
    userStruggles: [
      "Sending at 1 AM by accident",
      "Forgetting to follow up in the morning",
      "Distrust of third-party scheduler apps that request full-message access",
      "Cross-timezone teammates receiving messages during their night",
    ],
    businessIssue:
      "Users churn to scheduling-first competitors (Telegram, Signal) for the workflow - a native feature closes that gap without risk.",

    businessGoals: [
      "Ship scheduling without adding a new top-level surface",
      "Zero learning curve for existing users",
      "No dependency on Android accessibility permissions",
      "Feature discoverability without a coach-mark tour",
    ],

    research: {
      goals: [
        "Understand when and why users type-but-don’t-send",
        "Learn from existing third-party schedulers’ failures",
        "Identify safe discovery paths inside existing WhatsApp affordances",
      ],
      methods: [
        "5 remote interviews (users in India, US, Singapore)",
        "Competitive audit of Telegram, Slack, iMessage scheduling",
        "Analysis of Play Store reviews for 3 third-party WhatsApp schedulers",
      ],
      questions: [
        "Show me a message you didn’t send because it was ‘the wrong time’.",
        "Have you ever used a third-party scheduler? What made you stop?",
        "If WhatsApp had scheduling, where would you look for it?",
      ],
      assumptions: [
        "Users want a full scheduling inbox",
        "A new bottom-nav tab would be discoverable",
      ],
      insights: [
        "Users guessed ‘long-press the send button’ before any other affordance",
        "Nobody wanted a separate scheduling screen",
        "Trust matters more than features - users want confirmation the message will send",
        "Timezone-aware presets (‘Tomorrow 9 AM their time’) are highly desired",
      ],
    },

    persona: {
      name: "Anitha R.",
      age: 28,
      role: "Marketing Manager, distributed team",
      bio: "Coordinates with teammates and clients across India, US and Singapore - messages her team at odd hours and often forgets to follow up.",
      behaviors: [
        "Drafts messages in Notes and copy-pastes at the right time",
        "Uses starred messages as a follow-up hack",
        "Sets phone alarms to remember to send",
      ],
      needs: ["Native-feeling scheduling", "Timezone awareness", "Clear ‘this WILL send’ confirmation"],
      goals: [
        "Send messages at the right moment for the recipient",
        "Draft late-night without waking people up",
        "Never forget a scheduled follow-up",
      ],
      frustrations: [
        "Sends messages at 1 AM by accident",
        "Third-party scheduler apps feel unsafe",
        "Manual copy-paste is fragile",
      ],
    },

    journey: [
      { stage: "Compose", action: "Type message late at night", painPoint: "Sends immediately or forgets", improvement: "Long-press send → schedule inline" },
      { stage: "Pick time", action: "Manual mental math for timezones", painPoint: "Wrong time picked", improvement: "Quick presets: ‘Tonight 8pm’, ‘Their 9 AM’" },
      { stage: "Wait", action: "Hopes it will send", painPoint: "No feedback / trust", improvement: "Scheduled tray visible in chat + delivery notification" },
      { stage: "Edit", action: "Wants to reword", painPoint: "Impossible in current world", improvement: "Edit / reschedule / cancel with confirmation" },
    ],

    ia: {
      structure: [
        "Chat composer (unchanged)",
        "Long-press on send → schedule sheet",
        "Scheduled tray (in-chat, collapsible)",
        "Delivery notification (system-standard)",
      ],
      rationale:
        "The feature does not introduce a new top-level surface. Every entry point is a progressive enhancement of a pattern users already know.",
    },

    userFlow: {
      steps: [
        "Type message → long-press send",
        "Pick preset or custom date/time",
        "Confirm → message enters scheduled tray",
        "At scheduled time → auto-send + delivery notification",
        "Optional: edit / reschedule / cancel from tray",
      ],
      rationale:
        "Each step reuses an existing WhatsApp interaction. The only new gesture is the long-press, which users predicted unprompted.",
    },

    wireframes: {
      approach:
        "Two parallel wireframe tracks - one that added a new tab, one that hid scheduling behind long-press. Tested both flat.",
      iterations: 2,
      feedback:
        "The new-tab version tested worse on discovery (users didn’t explore). Long-press won 5/5 on discovery once one entry-point tooltip was shown.",
    },

    uxDecisions: [
      { area: "Entry point", decision: "Long-press on send button", reasoning: "Users predicted it unprompted; keeps composer clean." },
      { area: "Time picker", decision: "Presets + custom", reasoning: "80% of scheduling intents are ‘tonight’, ‘tomorrow morning’, ‘next Monday’." },
      { area: "Trust affordance", decision: "In-chat scheduled tray showing all pending", reasoning: "Users need to see their commitments to trust the feature." },
      { area: "Failure state", decision: "Explicit failed-to-send banner with retry", reasoning: "Silent failures kill trust in scheduling forever." },
    ],

    accessibility: [
      "Long-press has an equivalent tap-and-hold accessible action label",
      "Time picker fully keyboard/switch-control accessible",
      "Scheduled tray announces count via screen reader",
      "Delivery success/failure announced as live regions",
      "44px tap targets throughout",
    ],

    iterations: [
      { version: "V1", what: "Added ‘Scheduled’ bottom-nav tab", feedback: "Users didn’t discover it; felt like a new app" },
      { version: "V2 (final)", what: "Long-press on send + in-chat scheduled tray", feedback: "5/5 users found and used it without instruction" },
    ],

    features: [
      "Long-press on the send button reveals a Schedule option",
      "Date + time picker with quick presets (Tonight 8pm, Tomorrow 9am, Next Monday)",
      "Scheduled tray inside the chat showing all upcoming messages",
      "Edit, reschedule and cancel actions with confirmation",
      "Delivery notification once the message is sent",
      "Explicit failure state with retry",
    ],
    finalSolution:
      "A schedule feature so integrated it feels like it was there all along - no new tabs, no new mental model, just a longer press on send.",

    results: [
      { metric: "Discovery without instruction", value: "5 / 5" },
      { metric: "Task success - schedule + edit", value: "5 / 5" },
      { metric: "Preference vs 3rd-party scheduler", value: "5 / 5 preferred" },
      { metric: "System Usability Scale (SUS)", value: "88 / 100" },
    ],
    resultsNote: "Course project - prototype tested with 5 users on InVision + Maze.",

    lessons: {
      learned: [
        "Feature additions to mature products are constraint problems, not creativity problems",
        "Users’ existing muscle memory is a feature, not a limit",
        "Trust affordances (tray, delivery confirmation) matter more than the picker itself",
      ],
      improve: "Design the timezone-aware presets in more depth - half the users asked for ‘their morning’ vs ‘my morning’ clarity.",
      tradeoffs: "Hiding entry-point behind long-press trades explicit discoverability for a cleaner composer.",
      future: ["Recurring scheduled messages", "Cross-timezone recipient hints", "Draft-with-scheduled-later inside status bar"],
    },

    outcome:
      "A high-fidelity mobile prototype that adds real user value while staying invisible until needed - validated in 5 usability tests where 5/5 users discovered and used the feature without instruction.",
    behanceUrl: "https://www.behance.net/saravanan_design",
  },

  {
    id: "curl-diary",
    order: 4,
    title: "Curl Diary",
    category: "End-to-End App",
    tags: ["Mobile", "UI/UX", "Wellness"],
    year: "2024",
    duration: "5 weeks",
    team: "Solo (Google UX Course)",
    platform: "Mobile - iOS + Android",
    tools: [...defaultTools, "UsabilityHub"],
    client: "Course Project - Google UX",
    role: "UX Designer - Research, Personas, UI, Prototype",
    description:
      "A personalized diary app that empowers people on their natural hair journey - logging routines, tracking hydration and porosity, and building a picture of what actually works for their hair.",
    gradient: "linear-gradient(135deg, oklch(0.4 0.14 55) 0%, oklch(0.22 0.09 25) 100%)",
    color: "#d97706",
    accent: "Curl",

    tagline: "A calm daily log for a slow, personal journey.",
    audience: "People transitioning to natural hair who want their own data - not more YouTube tutorials.",
    problemOneLine: "There’s no calm, personal space to track what actually works for a specific hair type.",

    overview:
      "Curl Diary combines a lightweight daily log, a product library and a progress timeline. It personalizes recommendations based on the user’s curl type and porosity, and celebrates small wins along a long journey.",
    background:
      "The natural hair movement has grown ~40% in the last five years, but existing apps treat hair care like fitness - with streaks, guilt and generic plans.",
    context: "End-to-end capstone project for the Google UX certificate.",
    industry: "Wellness / Consumer",
    whyItMattered:
      "A slow, personal journey deserves a tool that respects pace instead of gamifying it.",

    problem:
      "People transitioning to natural hair juggle scattered advice, expensive product experiments and slow visible progress. There is no calm, personal space to track what works for their specific hair.",
    userStruggles: [
      "Online advice contradicts itself",
      "Expensive products fail with no clear reason",
      "Progress is invisible day-to-day",
      "Existing apps guilt-trip missed days",
    ],
    businessIssue:
      "Retention in wellness apps collapses at week 3 - guilt-loop mechanics don’t survive slow-progress journeys.",

    businessGoals: [
      "Retain users through week 8 (typical progress-visibility milestone)",
      "Reduce daily-log friction below 30 seconds",
      "Build a personalized product library that improves recommendations over time",
      "Create emotional attachment to progress, not to streaks",
    ],

    research: {
      goals: [
        "Understand what ‘progress’ feels like on a natural hair journey",
        "Identify why hair-tracking journals in Notion / paper get abandoned",
        "Map emotional highs and lows across the first 6 months",
      ],
      methods: [
        "4 interviews with users 3–18 months into their journey",
        "Diary study of 3 users over 2 weeks",
        "Content audit of top natural-hair Reddit / YouTube resources",
      ],
      questions: [
        "Show me your current tracking system.",
        "When did you feel most discouraged? Most proud?",
        "What would make you open this app on a bad hair day?",
      ],
      assumptions: [
        "Users want streaks and gamification",
        "AI product recommendations are the main draw",
      ],
      insights: [
        "Streaks are actively hostile to a journey with natural low-effort weeks",
        "Users want their own past photos more than any external advice",
        "‘Repurchase or not’ is the highest-signal product data point",
        "Bad hair days need a soft entry, not a nudge",
      ],
    },

    persona: {
      name: "Divya K.",
      age: 26,
      role: "Software Engineer, transitioning to natural hair",
      bio: "Six months into her natural hair journey. Wants to understand what works for her specific curls without living inside YouTube tutorials.",
      behaviors: [
        "Keeps a Notion page of product notes",
        "Takes weekly bathroom mirror selfies",
        "Buys products based on Reddit rather than influencers",
      ],
      needs: ["Under-30s daily log", "Photo timeline she owns", "Repurchase toggle per product"],
      goals: [
        "Track what products actually work for her hair",
        "See visual progress over months",
        "Build a repeatable weekly routine",
      ],
      frustrations: [
        "Advice online is generic and contradictory",
        "Expensive products fail with no clear reason",
        "Progress feels invisible day-to-day",
      ],
    },

    journey: [
      { stage: "Onboard", action: "Guess curl type from blog quizzes", painPoint: "Overwhelming taxonomy", improvement: "3-question quiz with visual anchors" },
      { stage: "Daily log", action: "Skips because ‘nothing happened’", painPoint: "Guilt-based nudges", improvement: "One-tap ‘Rest day’ option, no red streak-breaks" },
      { stage: "Product library", action: "Screenshots products in Notes", painPoint: "No repurchase memory", improvement: "One-tap rating + repurchase toggle" },
      { stage: "Progress", action: "Compares selfies manually", painPoint: "Time-consuming, inconsistent framing", improvement: "Photo timeline with soft framing guide" },
    ],

    ia: {
      structure: [
        "Home (today + streak-free encouragement)",
        "Log (one-tap actions)",
        "Products (library + ratings)",
        "Progress (photo timeline + hydration trend)",
        "Profile (hair quiz + reminders)",
      ],
      rationale:
        "IA follows the natural cadence: check in > log if you want > browse your library > see progress when you need motivation. Streaks and gamification are deliberately absent from the top level.",
    },

    userFlow: {
      steps: [
        "Onboard → hair quiz → personalized routine seed",
        "Home → one-tap log OR rest day",
        "Products → add / rate / mark for repurchase",
        "Progress → weekly / monthly photo grid + hydration trend",
        "Reminders → gentle, opt-in, non-guilt",
      ],
      rationale:
        "The core loop is small and forgiving. Progress is a reward pulled by the user, not pushed by the app.",
    },

    wireframes: {
      approach:
        "Wireframes emphasized empty and rest-day states as first-class screens - most apps skip these.",
      iterations: 3,
      feedback:
        "V1 had streaks; users said it made them anxious. V2 replaced streaks with ‘gentle continuity’. V3 introduced rest days as a positive action, not a gap.",
    },

    uxDecisions: [
      { area: "No streaks", decision: "Deliberate absence of streak counter", reasoning: "Streaks punish natural low-effort weeks in a slow journey." },
      { area: "Rest day", decision: "Rest day is a first-class log entry", reasoning: "It reframes ‘nothing happened’ as a valid, healthy choice." },
      { area: "Photo timeline", decision: "Soft framing guide, not strict overlay", reasoning: "Consistency helps comparison, but rigidity fails on bad hair days." },
      { area: "Warm palette", decision: "Warm neutrals, no clinical white", reasoning: "The app should feel like a diary, not a medical tool." },
    ],

    accessibility: [
      "AA contrast on warm palette (verified in Sim Daltonism)",
      "Voice-over friendly log actions",
      "Text scaling to 200% preserves layout",
      "Photo grid alt-text prompts each entry",
      "No motion-heavy transitions on progress screens",
    ],

    iterations: [
      { version: "V1", what: "Streak counter + daily nudges", feedback: "Users described it as ‘guilt-trippy’" },
      { version: "V2", what: "Removed streaks, added weekly summary", feedback: "Better but felt empty on quiet weeks" },
      { version: "V3 (final)", what: "Rest day as positive action + soft photo framing", feedback: "4/4 users logged on rest days for the first time" },
    ],

    features: [
      "Onboarding hair quiz - curl type, porosity, climate",
      "One-tap daily log for wash day, moisture, protective style, rest day",
      "Product library with personal ratings and repurchase toggle",
      "Progress timeline with photo grid and hydration trend",
      "Personalized routine suggestions and gentle, opt-in reminders",
    ],
    finalSolution:
      "A warm, calm mobile app that treats a slow journey with care - the daily log fits in one thumb-swipe and progress is always the user’s own photos.",

    results: [
      { metric: "Perceived daily-log effort", value: "‘Feels lighter’ - 4 / 4" },
      { metric: "Users who logged a rest day", value: "4 / 4 (0 in V1)" },
      { metric: "Task success - add product + rating", value: "4 / 4" },
      { metric: "Willingness to use for 30 days", value: "4 / 4" },
    ],
    resultsNote: "Prototype tested with 4 target users over 2 walkthrough sessions each.",

    lessons: {
      learned: [
        "Wellness UX defaults (streaks, guilt) are hostile to slow journeys",
        "Empty and rest states deserve as much design attention as ‘success’ screens",
        "Users trust their own photos more than any recommendation engine",
      ],
      improve: "Ship a lightweight community layer - users repeatedly asked for ‘people like me’ without wanting a social feed.",
      tradeoffs: "Choosing not to gamify likely lowers day-7 engagement but should lift week-8 retention - a bet worth making.",
      future: ["Climate-aware routine adjustments", "Salon export report", "Product barcode scan"],
    },

    outcome:
      "A warm, calm mobile app that treats a slow journey with care.",
    behanceUrl: "https://www.behance.net/saravanan_design",
  },

  {
    id: "civic-voice",
    order: 5,
    title: "Civic Voice - Complaint Tracker",
    category: "Mobile App",
    tags: ["Mobile", "UI/UX", "Civic"],
    year: "2024",
    duration: "4 weeks",
    team: "Solo",
    platform: "Mobile - iOS + Android",
    tools: [...defaultTools, "Mapbox"],
    client: "Concept Project",
    role: "Product Designer - Research, Flows, UI, Prototype",
    description:
      "A mobile complaint tracker that lets citizens raise, geo-tag and follow civic issues - potholes, water, streetlights - with clear status updates from the local body.",
    gradient: "linear-gradient(135deg, oklch(0.35 0.14 210) 0%, oklch(0.22 0.09 260) 100%)",
    color: "#3b82f6",
    accent: "Civic",

    tagline: "Civic complaints as living records, not black holes.",
    audience: "Urban residents, RWA members and neighborhood organizers.",
    problemOneLine: "Complaints raised via helplines, Twitter and WhatsApp disappear with no shared record or accountability.",

    overview:
      "Civic Voice reduces the friction of raising a complaint to under a minute: pick a category, snap a photo, drop a pin. From there, every complaint has a public status thread so citizens can see it move.",
    background:
      "Most Indian cities run 3–5 disconnected complaint channels (helpline, Twitter, WhatsApp, ward office). Nothing aggregates.",
    context: "Concept project exploring how a citizen-owned complaint record could sit above municipal systems.",
    industry: "GovTech / Civic",
    whyItMattered:
      "Accountability doesn’t require better bureaucracy - it requires better records.",

    problem:
      "Citizens raise complaints across scattered channels - helplines, Twitter, WhatsApp groups - and never hear back. There is no shared record and no accountability.",
    userStruggles: [
      "Complaints have no reference number they can track",
      "The same issue is raised by 10 neighbors, never grouped",
      "No visible timeline of ‘what the corporation did’",
      "Helpline calls are painful and undocumented",
    ],
    businessIssue:
      "Municipal bodies get duplicate complaints and can’t prioritize; citizens lose trust in every channel.",

    businessGoals: [
      "Reduce time-to-raise a complaint below 60 seconds",
      "Deduplicate complaints by location + category automatically",
      "Give local bodies a triaged queue instead of a mixed inbox",
      "Establish transparent status updates as the default",
    ],

    research: {
      goals: [
        "Map the current complaint journey across channels",
        "Identify moments of highest emotional load",
        "Understand what ‘trust’ looks like for a citizen-government interaction",
      ],
      methods: [
        "6 resident interviews across 2 metros",
        "Analysis of 100 tweets tagged to municipal handles",
        "Shadowing of an RWA WhatsApp group for 2 weeks",
      ],
      questions: [
        "Walk me through the last complaint you raised.",
        "How did you know it was ‘resolved’ (or not)?",
        "What would make you stop chasing on WhatsApp?",
      ],
      assumptions: [
        "Users want a social feed of complaints",
        "Anonymous complaints are essential",
      ],
      insights: [
        "Citizens want an official-feeling record, not a social feed",
        "Anonymity matters less than accountability - most want their name on the record",
        "Grouping neighbor complaints is the single feature that changes power dynamics",
        "Timestamps are the currency of trust",
      ],
    },

    persona: {
      name: "Ramesh V.",
      age: 38,
      role: "Resident Welfare Association member",
      bio: "Represents his apartment block on civic matters. Chases the corporation on behalf of 80 families.",
      behaviors: [
        "Screenshots WhatsApp threads as ‘evidence’",
        "Follows up manually every 3 days",
        "Escalates on Twitter when a channel goes cold",
      ],
      needs: ["Timestamped record", "Neighbor-grouped complaints", "Escalation trail"],
      goals: [
        "Report issues once and track them to closure",
        "Rally neighbors around real problems",
        "Have a record he can escalate with",
      ],
      frustrations: [
        "Helpline calls go nowhere",
        "No proof of when a complaint was raised",
        "Same issue raised by 10 people, never grouped",
      ],
    },

    journey: [
      { stage: "Notice issue", action: "Photo goes into WhatsApp", painPoint: "No shared record", improvement: "One-minute in-app flow → official record" },
      { stage: "Report", action: "Calls helpline OR tweets", painPoint: "No confirmation", improvement: "Reference ID + timestamp + neighbor-grouping" },
      { stage: "Chase", action: "Manual follow-up every 3 days", painPoint: "No accountability", improvement: "Public status thread with SLA visibility" },
      { stage: "Resolve", action: "Believes it or doesn’t", painPoint: "No proof of work done", improvement: "‘Resolved’ requires an official photo" },
    ],

    ia: {
      structure: [
        "Home (nearby open issues + your reports)",
        "Report (category → photo → location)",
        "Map (neighborhood view of grouped complaints)",
        "Track (your reports + followed reports)",
        "Profile (verification + notifications)",
      ],
      rationale:
        "IA is built around the two things citizens actually do: report and check. Everything else is secondary and hidden until asked for.",
    },

    userFlow: {
      steps: [
        "Home → Report",
        "Pick category (Pothole / Streetlight / Water / …)",
        "Snap photo → auto geo-tag",
        "Confirm & submit → reference ID + status: Received",
        "Track → Assigned → In Progress → Resolved (with official photo)",
      ],
      rationale:
        "The full report is 3 taps and a photo. Every subsequent state has a clear owner and a clear timestamp.",
    },

    wireframes: {
      approach:
        "Started with the shortest possible reporting flow, then added only affordances that tested-in.",
      iterations: 3,
      feedback:
        "V1 asked for category first - users wanted photo first. V2 flipped the order. V3 introduced neighbor-grouping on submit.",
    },

    uxDecisions: [
      { area: "Photo first", decision: "Camera opens directly on tap", reasoning: "Users report the pothole they’re standing next to - reduce friction to zero." },
      { area: "Neighbor grouping", decision: "Auto-detect similar complaints within 100m", reasoning: "Shifts perception from ‘lone complainer’ to ‘community issue’." },
      { area: "‘Resolved’ requires proof", decision: "Local body must upload a resolution photo", reasoning: "The word ‘resolved’ without proof is what killed helpline trust." },
      { area: "Public timeline", decision: "Every status change is public and timestamped", reasoning: "Transparency is the only trust builder in civic tech." },
    ],

    accessibility: [
      "Report flow works with VoiceOver / TalkBack end-to-end",
      "Camera and location fall back to manual input",
      "AA contrast on map overlays",
      "Larger tap targets on primary CTA (‘Report’) - 56px",
      "SMS fallback for status updates for feature-phone escalation",
    ],

    iterations: [
      { version: "V1", what: "Category → photo → location flow", feedback: "Users skipped category selection because they wanted to report right now" },
      { version: "V2", what: "Photo → category → location", feedback: "Faster, but felt lonely - no sense of neighbors" },
      { version: "V3 (final)", what: "Added neighbor-grouping on submit + public timeline", feedback: "6/6 users preferred over their current WhatsApp workflow" },
    ],

    features: [
      "One-minute complaint flow: photo → category → location",
      "Reference ID and timestamp on every complaint",
      "Auto-detected neighbor grouping within 100m",
      "Status timeline: Received → Assigned → In Progress → Resolved",
      "Neighborhood map view of nearby open issues",
      "Upvote and follow issues raised by others",
      "Push + SMS notifications for status changes",
    ],
    finalSolution:
      "A trust-first prototype that treats complaints as living records, not black holes - every complaint has a proof trail and every neighbor sees the same truth.",

    results: [
      { metric: "Time to raise a complaint", value: "< 60s median", note: "Prototype tests (n=6)" },
      { metric: "Preference vs WhatsApp workflow", value: "6 / 6" },
      { metric: "Users who trusted status updates", value: "6 / 6" },
      { metric: "Reduction in perceived effort", value: "‘Much lower’ - 6 / 6" },
    ],
    resultsNote: "Numbers are prototype outcomes from moderated sessions with urban residents.",

    lessons: {
      learned: [
        "Civic tech lives or dies by timestamps",
        "Community-grouping outperforms anonymity for accountability",
        "The word ‘resolved’ is meaningless without visual proof",
      ],
      improve: "Design the local-body operator view in parallel - a citizen record is only as good as the queue it feeds.",
      tradeoffs: "Preferring identified reports over anonymous ones may reduce coverage in politically sensitive contexts.",
      future: ["Aadhaar-verified reporter badge (optional)", "Operator-side triage app", "SLA breach escalation"],
    },

    outcome:
      "A trust-first prototype validated with 6 residents who preferred it over their current WhatsApp-based reporting.",
    behanceUrl: "https://www.behance.net/saravanan_design",
  },

  {
    id: "medislot",
    order: 6,
    title: "MediSlot - Hospital Appointments",
    category: "Mobile App",
    tags: ["Mobile", "UI/UX", "Healthcare"],
    year: "2024",
    duration: "5 weeks",
    team: "Solo",
    platform: "Mobile - iOS + Android",
    tools: [...defaultTools, "Maze"],
    client: "Concept Project",
    role: "Product Designer - Research, Flows, UI, Prototype",
    description:
      "A hospital appointment booking app that helps patients find the right doctor, book a real time slot and prepare for the visit - without phone calls or waiting rooms.",
    gradient: "linear-gradient(135deg, oklch(0.42 0.14 200) 0%, oklch(0.24 0.08 240) 100%)",
    color: "#0d9488",
    accent: "Slot",

    tagline: "Book the right doctor without ever calling reception.",
    audience: "Working parents, elderly patients and caregivers booking across multiple hospitals.",
    problemOneLine: "Booking a hospital appointment means calling reception, being put on hold, or just showing up and waiting.",

    overview:
      "MediSlot focuses on the moment a patient decides they need care. Symptom-based specialty suggestions, transparent doctor profiles, live slot availability and a calm pre-visit checklist reduce the anxiety of hospital visits.",
    background:
      "Hospital reception lines are the primary booking channel in most Indian tier-1 cities. Existing apps often show fake availability that resolves at the counter.",
    context: "Concept project exploring how much friction can be removed from the ‘I think I need to see a doctor’ moment.",
    industry: "Healthcare",
    whyItMattered:
      "Anxiety around hospital visits is often about uncertainty, not medicine. Better information design is quiet medicine.",

    problem:
      "Booking a hospital appointment usually means calling reception, being put on hold, or turning up and waiting. Patients don’t know which specialty they need or how long they’ll wait.",
    userStruggles: [
      "Guessing which specialty to book",
      "Reception lines are always busy",
      "Fake availability collapses at the counter",
      "Elderly patients struggle with small text and complex forms",
    ],
    businessIssue:
      "Missed and mis-specialty appointments waste doctor time. Hospitals lose revenue and patients lose trust.",

    businessGoals: [
      "Reduce time-to-book from 8 minutes (phone) to under 2",
      "Match patients to the right specialty on the first try",
      "Cut no-show rates via clear reminders",
      "Make the app usable by elderly patients without a caregiver",
    ],

    research: {
      goals: [
        "Understand how patients currently pick a specialty",
        "Identify anxiety peaks in the booking journey",
        "Map accessibility barriers for elderly and low-vision users",
      ],
      methods: [
        "5 patient interviews (working parents, elderly caregivers, chronic-condition patients)",
        "Competitive audit of Practo, Apollo, MFine",
        "Observation at 2 hospital reception counters",
      ],
      questions: [
        "The last time you booked, how did you pick the doctor?",
        "What made you the most anxious? What eased it?",
        "If you were doing this for your parent, what would change?",
      ],
      assumptions: [
        "Patients want AI-driven diagnosis",
        "Reviews are the top signal for choosing a doctor",
      ],
      insights: [
        "Patients don’t want diagnosis - they want direction",
        "Language spoken by the doctor is a higher signal than star rating",
        "Live slots earn trust immediately - fake ones destroy it forever",
        "Elderly users prefer larger, fewer choices per screen",
      ],
    },

    persona: {
      name: "Lakshmi S.",
      age: 34,
      role: "Working parent",
      bio: "Books appointments for herself, her kids and her aging parents. Time-poor and juggles three different hospitals.",
      behaviors: [
        "Books during commute or lunch break",
        "Keeps a Notes doc of family MRNs and doctor names",
        "Calls her mother to confirm arrival",
      ],
      needs: ["Family profiles", "Real availability", "Reminders that work for elderly parents"],
      goals: [
        "Book the right doctor without a phone call",
        "See real slot availability upfront",
        "Keep all family appointments in one place",
      ],
      frustrations: [
        "Hospital reception lines are always busy",
        "Doesn’t know which specialty to pick",
        "Long unpredictable waits at the hospital",
      ],
    },

    journey: [
      { stage: "Decide", action: "Guess specialty from symptoms", painPoint: "Wrong pick → wasted visit", improvement: "Symptom-based specialty finder" },
      { stage: "Pick doctor", action: "Compare via reviews", painPoint: "Reviews are shallow / language mismatch", improvement: "Language + experience + specialization on the card" },
      { stage: "Book", action: "Call reception", painPoint: "Hold times, mistakes", improvement: "Live slots + one-tap book" },
      { stage: "Prepare", action: "Anxious about docs / fasting", painPoint: "No pre-visit checklist", improvement: "Personalized pre-visit checklist" },
      { stage: "Reschedule", action: "Call again", painPoint: "Painful repeat", improvement: "Self-serve reschedule in-app" },
    ],

    ia: {
      structure: [
        "Home (family profiles + upcoming visits)",
        "Find (symptom / specialty / doctor)",
        "Doctor profile (bio + languages + live slots)",
        "Booking (slot → confirm → checklist)",
        "Appointments (reminders + reschedule + cancel)",
      ],
      rationale:
        "Structure follows a patient’s emotional journey: worry → direction → confidence → preparation → calm. Family profiles are a top-level concept because most users book for others.",
    },

    userFlow: {
      steps: [
        "Home → Find → Symptom input",
        "Suggested specialty → doctor list (with languages + live slots)",
        "Pick slot → confirm → pre-visit checklist",
        "Reminder day-before + hour-before",
        "Self-serve reschedule / cancel",
      ],
      rationale:
        "Every step gives the patient one more piece of certainty than they walked in with. No dead-ends require a phone call.",
    },

    wireframes: {
      approach:
        "Wireframes prioritized the doctor card layout - it carries 80% of the decision weight.",
      iterations: 3,
      feedback:
        "V1 emphasized ratings. V2 emphasized live slots + languages. V3 added a large-text mode as a first-class accessibility choice.",
    },

    uxDecisions: [
      { area: "Doctor card content", decision: "Language + years + specialization above rating", reasoning: "Testing showed language mismatch causes more distrust than a low rating." },
      { area: "Slot availability", decision: "Only real, uncached slots shown", reasoning: "Fake availability destroys trust permanently - better to show fewer, honest slots." },
      { area: "Family profiles", decision: "Top-level switcher", reasoning: "The primary booker in most families is not the patient." },
      { area: "Large-text mode", decision: "Accessibility toggle in onboarding", reasoning: "Older patients shouldn’t need to hunt in settings." },
    ],

    accessibility: [
      "Dynamic Type / large-text mode as an onboarding choice",
      "AA contrast on the calmer palette",
      "Voice-over-optimized doctor cards with structured labels",
      "Reschedule / cancel available via SMS reply as fallback",
      "One-hand reachability on primary CTAs",
    ],

    iterations: [
      { version: "V1", what: "Rating-first doctor cards", feedback: "Users still called reception to confirm language spoken" },
      { version: "V2", what: "Language + experience above rating; live slots", feedback: "Bookings completed in-app, but elderly test users struggled with type size" },
      { version: "V3 (final)", what: "Added large-text mode + family profiles", feedback: "Elderly test user completed a booking unassisted for the first time" },
    ],

    features: [
      "Symptom-based specialty finder",
      "Doctor profiles with experience, languages and ratings",
      "Live calendar with real time slots",
      "Family profiles for booking on behalf of others",
      "Pre-visit checklist and document upload",
      "Appointment reminders and self-serve reschedule flow",
      "Large-text accessibility mode as a first-class option",
    ],
    finalSolution:
      "A clean, reassuring booking flow that turns ‘I think I need a doctor’ into a confirmed appointment in under two minutes - with a checklist that removes anxiety before the visit.",

    results: [
      { metric: "Average booking time", value: "8m (phone) → ~90s (app)" },
      { metric: "Specialty match on first try", value: "5 / 5" },
      { metric: "Elderly unassisted booking", value: "1 / 1 (V3)" },
      { metric: "Would use again", value: "5 / 5" },
    ],
    resultsNote: "Prototype outcomes from moderated sessions with 5 patient personas.",

    lessons: {
      learned: [
        "Patients want direction more than they want a diagnosis",
        "Trust in healthcare UI is built on what you don’t show (fake availability) as much as what you do",
        "Accessibility must be a first-class onboarding choice, not a settings toggle",
      ],
      improve: "Design the hospital-side operator view - real availability needs a good source of truth.",
      tradeoffs: "Removing fake / cached availability lowers the number of ‘visible slots’ upfront - worth it for trust.",
      future: ["Insurance eligibility check", "Chronic-condition appointment recurrences", "Multilingual voice input"],
    },

    outcome:
      "A clean, reassuring booking flow validated with 5 patients - average booking time dropped from 8 minutes (phone) to 90 seconds (app) in the tested scenarios.",
    behanceUrl: "https://www.behance.net/saravanan_design",
  },
];

export const featuredIds = ["nexus-admin", "my-vetry-tamil-nadu", "medislot"];

export const recruiterReview = {
  ranking: [
    { id: "nexus-admin", score: 9, note: "Strongest storytelling; clear business impact and role-based IA thinking." },
    { id: "my-vetry-tamil-nadu", score: 8.5, note: "Ambitious civic scope with mature bilingual UX rationale." },
    { id: "medislot", score: 8, note: "Real accessibility depth and honest trust decisions on availability." },
    { id: "civic-voice", score: 7.5, note: "Clean problem framing; would benefit from an operator-side view." },
    { id: "curl-diary", score: 7, note: "Distinctive product point of view; results are lightly evidenced." },
    { id: "whatsapp-scheduler", score: 7, note: "Great constraint exercise; smaller in scope than the others." },
  ],
  featured: ["nexus-admin", "my-vetry-tamil-nadu", "medislot"],
};

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
