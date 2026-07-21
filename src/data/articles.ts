export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "why-ux-portfolios-dont-get-interviews",
    tag: "Career",
    title: "Why Most UX Portfolios Don't Get Interviews",
    excerpt:
      "You spend weeks polishing your portfolio, then hear nothing back. The problem is rarely your work — it's how you're presenting it.",
    readTime: "6 min read",
    date: "July 2025",
    sections: [
      {
        heading: "The Portfolio Is Not a Gallery",
        paragraphs: [
          "Most designers treat their portfolio like an art exhibition — a curated collection of beautiful screenshots arranged in a grid. The problem is that hiring managers aren't looking for beauty. They're looking for evidence that you can solve problems, communicate your thinking, and work within constraints.",
          "A portfolio full of polished mockups with no context tells the viewer nothing about how you think. Did you define the problem? Did you iterate based on feedback? Did you make tradeoffs? Without answers to these questions, even stunning visuals leave a recruiter cold.",
          "The shift you need to make is from gallery to story. Each project should walk the reader through a challenge, your approach, the decisions you made along the way, and what you learned. That narrative is what actually gets people interested in you.",
        ],
      },
      {
        heading: "You're Showing Too Many Projects",
        paragraphs: [
          "There's a common belief that more work equals more credibility. In reality, the opposite is true. A hiring manager spending 90 seconds on your portfolio will skim — and if every project looks the same or feels incomplete, nothing will stand out.",
          "Three to four deeply documented case studies will outperform ten shallow ones every time. Pick the projects where you had the most involvement, faced real constraints, or solved an interesting problem. Cut the rest mercilessly. Depth signals seniority. Breadth without depth signals a junior designer who doesn't yet know what matters.",
          "Quality control is also about protecting your brand. One weak project can undermine five strong ones. If you include a project you can't speak confidently about in an interview, it becomes a liability the moment a recruiter asks you to walk through it.",
        ],
      },
      {
        heading: "What Actually Gets You the Interview",
        paragraphs: [
          "What gets you the interview is a clear point of view. Hiring managers read hundreds of portfolios that all say 'I'm passionate about creating user-centered experiences.' That phrase has lost all meaning. What makes yours memorable is specificity — the constraints you worked within, the friction you uncovered in research, the way you convinced a stakeholder to change direction.",
          "Write your case studies in the first person and be honest about failure. Showing that a design didn't test well and explaining how you recovered from it is far more compelling than a linear 'research → wireframes → final design' narrative that pretends everything went smoothly.",
          "Finally, make it easy to read. Short paragraphs. Clear headings. One key insight per section. Your portfolio is itself a UX artifact — if it's hard to navigate or takes forever to load, you're already failing the test before anyone reads a word.",
        ],
      },
    ],
  },
  {
    slug: "what-i-learned-from-100-ux-job-descriptions",
    tag: "Career",
    title: "What I Learned from 100 UX Job Descriptions",
    excerpt:
      "I read 100 UX job postings so you don't have to. Here's what companies are actually asking for — and what they're really trying to say.",
    readTime: "7 min read",
    date: "June 2025",
    sections: [
      {
        heading: "The Patterns Nobody Talks About",
        paragraphs: [
          "After reading a hundred job descriptions across startups, agencies, and enterprises, one thing became clear: most of them are written by HR teams who don't fully understand UX. You'll see contradictions like 'strong visual design skills' listed alongside 'you'll spend 70% of your time in discovery and research.' Those two things don't always go together the same way.",
          "The most common skills listed were Figma (97% of postings), user research (84%), and cross-functional collaboration (91%). But here's what's interesting — when you dig into the actual day-to-day described in the role, most companies want someone who can both think and execute. Not a specialist. A generalist who leans in a direction.",
          "The lesson is to read job descriptions as clues, not contracts. Look for the underlying need. 'We move fast and wear many hats' means you'll have limited resources. 'Partner with engineering and product' means communication and influence matter more than craft perfection.",
        ],
      },
      {
        heading: "What 'Senior' Actually Means",
        paragraphs: [
          "The word 'senior' appeared in 62 of the 100 postings I read, and almost none of them defined it the same way. Some were looking for someone with 5+ years who could execute independently. Others wanted someone who could run workshops, manage junior designers, and present to executives. Those are very different jobs with the same title.",
          "The consistent thread across all 'senior' roles, though, was autonomy and communication. Companies want designers who don't need to be managed closely — who can define their own problem space, make decisions with incomplete information, and bring others along through clear storytelling.",
          "If you're targeting senior roles, the gap is rarely skill. It's almost always influence. Can you shape a roadmap? Can you push back on a brief when the problem is mis-scoped? Can you speak the language of business outcomes, not just user outcomes? That's what separates mid-level from senior.",
        ],
      },
      {
        heading: "Skills Companies Want But Rarely List",
        paragraphs: [
          "The most undervalued skill I noticed across all 100 postings was writing. Almost no job description mentions it explicitly, yet every single design role requires it — writing UX copy, writing research reports, writing case studies, writing specs for engineers. Designers who write well have an enormous hidden advantage.",
          "Facilitation was another one. Running a design sprint, a stakeholder workshop, or even just a good critique session requires a skill set that few junior designers have practiced. The postings that did mention it were almost always for roles at companies where design had real organizational influence.",
          "Finally: comfort with ambiguity. Listed rarely, required everywhere. If you can document how you navigated an unclear problem — how you asked the right questions, set a scope, and made a decision with limited data — you're speaking directly to what every hiring manager actually wants to see.",
        ],
      },
    ],
  },
  {
    slug: "how-ikea-ux-makes-millions-buy-furniture",
    tag: "UX Analysis",
    title: "How IKEA's UX Makes Millions Buy Furniture",
    excerpt:
      "IKEA's store design isn't an accident. It's one of the most sophisticated pieces of user experience design ever built — and it runs without a single screen.",
    readTime: "8 min read",
    date: "May 2025",
    sections: [
      {
        heading: "The Labyrinth Is a Feature",
        paragraphs: [
          "The first thing you notice in an IKEA store is that you cannot take a shortcut. The path through the showroom is a single, winding route that forces you through every department before you reach the warehouse. This isn't poor space planning — it's an intentional design decision that has been refined over decades.",
          "The psychological mechanism at work is exposure. The more time you spend near an object, the more familiar it becomes, and the more familiar it becomes, the more desirable it feels. This is the mere-exposure effect, and IKEA weaponizes it at architectural scale. You came for a bookshelf. You passed the kitchen displays three times. Now you're reconsidering your kitchen.",
          "Strategically placed 'shortcuts' for people who know what they want reinforce the illusion of control — you can escape, but most people don't because the labyrinth is designed to feel comfortable, not confusing. The room vignettes make it feel like wandering through a home, not a warehouse.",
        ],
      },
      {
        heading: "The Room Vignette and the Power of Context",
        paragraphs: [
          "IKEA doesn't sell furniture. It sells rooms. Every item in the showroom is displayed in a complete, styled context — a living room, a child's bedroom, a home office. This is one of the most powerful pieces of UX design in retail because it removes the cognitive work of imagining how things fit together.",
          "This approach directly addresses a fundamental friction in buying furniture: the fear of making the wrong choice. When you see a sofa surrounded by a rug, cushions, a side table, and a lamp, you're not buying a sofa — you're buying the feeling of the room. IKEA has pre-assembled the decision for you.",
          "The secondary effect of this is upselling without pressure. No salesperson is required to suggest that rug goes with that sofa. The display does the persuading. Research from IKEA's own store design teams shows that customers buy significantly more when items are shown in context versus on a shelf. It's a masterclass in reducing choice anxiety.",
        ],
      },
      {
        heading: "The Restaurant, the Childcare, and the Pencil",
        paragraphs: [
          "Every detail in an IKEA store is a UX decision made to keep you there longer and reduce friction. The in-store restaurant sells cheap, high-quality food not because IKEA wants to be in the food business, but because a hungry shopper is an irritable shopper who leaves early. Feeding people keeps them calm, happy, and in the building.",
          "Småland, IKEA's free childcare service, exists for one reason: children create friction in a shopping experience. Remove the children, and couples can browse at ease. Studies show that parents with young children who use Småland spend significantly more time in-store than those who don't.",
          "Even the pencils and paper order forms are a UX artifact. Giving customers a physical object to carry — a pencil, a bag, a cart — creates commitment. Once you're holding a pencil and writing down item numbers, you're invested. The act of noting something down increases purchase intent dramatically. What looks like a simple operational tool is a psychological anchor.",
        ],
      },
    ],
  },
  {
    slug: "psychology-behind-great-product-design",
    tag: "Design Theory",
    title: "The Psychology Behind Great Product Design",
    excerpt:
      "The best products don't feel designed at all. Understanding the psychological principles that make interfaces feel natural is the foundation of great UX.",
    readTime: "7 min read",
    date: "April 2025",
    sections: [
      {
        heading: "Cognitive Load Is the Enemy",
        paragraphs: [
          "Every element on a screen demands a small tax on the user's attention. A cluttered interface isn't just ugly — it's genuinely harder to use because it forces the brain to process more information before it can act. This cognitive overhead, called cognitive load, is the primary enemy of good UX.",
          "George Miller's famous research on working memory showed that humans can hold roughly seven pieces of information in short-term memory at once. Modern UX research has tightened that number — we're better at four chunks. The implication is direct: any interface that asks users to remember more than a handful of things simultaneously will create friction.",
          "The best designers reduce cognitive load through progressive disclosure — showing only what's needed for the current task and hiding complexity behind a tap or click. Duolingo shows one question at a time. Apple's setup flows reveal options step by step. The illusion of simplicity is always engineered.",
        ],
      },
      {
        heading: "The Role of Feedback and Affordances",
        paragraphs: [
          "Don Norman's concept of affordances — the visual cues that tell you how something should be used — is one of the most foundational ideas in product design. A button looks pressable because of shadows, borders, and the conventions we've learned from physical objects. A text field invites typing because of its underline or border.",
          "When affordances break down, users feel lost. If something doesn't look interactive, most users won't try interacting with it. This is why the 'flat design' movement of the early 2010s created usability problems — in removing all visual depth, designers also removed the signals that told users what was clickable.",
          "Feedback is equally critical. Every action a user takes needs a response — visual, haptic, auditory, or some combination. The feedback loop is what creates the feeling of being in control. When a button doesn't respond immediately, users press it again. When a form submission gives no confirmation, users resubmit. Good feedback prevents these failure states before they happen.",
        ],
      },
      {
        heading: "Habit Loops and Emotional Design",
        paragraphs: [
          "BJ Fogg's behavior model and Nir Eyal's 'Hooked' framework both point to the same truth: the most successful products build habits. A habit loop has three components — a cue, a routine, and a reward. Products that embed themselves into daily life do so by designing tight, satisfying loops that get easier to complete over time.",
          "Instagram's notification is a cue. Opening the app is the routine. The dopamine hit from likes and comments is the reward. This loop is engineered deliberately. Understanding it isn't just about building addictive products — it's about creating tools that feel effortless and rewarding to return to.",
          "Emotional design, as described by Don Norman, adds another layer. Products that make users feel capable, delighted, or understood create loyalty that goes beyond utility. Mailchimp's Freddie the chimp waving before you send a campaign is a moment of emotional design — a small injection of warmth in what could be an anxious moment. These micro-interactions are the texture of a great product.",
        ],
      },
    ],
  },
  {
    slug: "i-rebuilt-my-portfolio-in-30-days",
    tag: "Personal",
    title: "I Rebuilt My Portfolio in 30 Days",
    excerpt:
      "What actually happens when you throw out your old portfolio and start from zero — the decisions, the doubts, and what I'd do differently.",
    readTime: "6 min read",
    date: "March 2025",
    sections: [
      {
        heading: "Why I Burned It Down",
        paragraphs: [
          "My old portfolio was a patchwork. Built over two years, it carried the scar tissue of every trend I'd chased — a brutalist phase, a glassmorphism phase, a 'minimalism means beige and lots of whitespace' phase. The result was a site that said nothing coherent about who I was as a designer.",
          "The breaking point was a job application feedback session where a recruiter told me the portfolio felt 'unfocused.' She was being diplomatic. The real word was incoherent. I had projects ranging from logo design to mobile app UX to a web app dashboard, with no thread connecting them and no consistent visual language.",
          "I gave myself 30 days and one constraint: everything had to serve a single idea. Before writing a line of code or opening Figma, I spent three days just answering the question: who is this portfolio for, and what do I want them to feel?",
        ],
      },
      {
        heading: "The Build: Decisions That Actually Mattered",
        paragraphs: [
          "Day 1–7 was research — not into design trends, but into the portfolios of designers whose careers I admired. I took notes on structure, not aesthetics. How did they order their work? What did their about pages say? How long were their case studies? I wasn't looking to copy; I was building a mental model of what 'good' felt like at the level I was aiming for.",
          "Day 8–15 was the hardest. I wrote every case study before touching layout or color. Writing forces clarity in a way that mockups don't — when you have to explain a decision in prose, you quickly discover whether you actually understood why you made it. Two of my six projects got cut because I couldn't write compellingly about them.",
          "Day 16–30 was building and iterating. I chose a sharp, typographic direction — minimal color, high contrast, serif headings, zero border radius. It felt risky. Most UX portfolios look friendly and rounded. But the constraint forced every design decision to be intentional, and that intentionality became the personality of the site.",
        ],
      },
      {
        heading: "What I'd Do Differently",
        paragraphs: [
          "I'd start writing sooner. The biggest time sink was iterating on layouts before I knew what the content was. Layout decisions are meaningless without content. Designing around placeholder text gives you a beautiful lie. Write everything first, then figure out how to present it.",
          "I'd get feedback earlier and from more specific people. I showed early versions to friends who were supportive but not qualified to give meaningful critique. What I needed was feedback from people who hire UX designers — recruiters, design managers, senior ICs. That feedback, when I finally got it in week four, changed the most important things.",
          "I'd also let go of the idea that the portfolio is ever finished. I launched at the end of day 30 knowing three sections weren't quite right. The alternative was to keep refining in private while missing application windows. Shipping something honest and improving it with real feedback beats perfecting something in isolation.",
        ],
      },
    ],
  },
  {
    slug: "how-ai-is-changing-ux-design",
    tag: "AI & Design",
    title: "How AI Is Changing UX Design",
    excerpt:
      "AI isn't going to replace UX designers. But it is fundamentally changing what the job looks like — and not in the way most people think.",
    readTime: "7 min read",
    date: "February 2025",
    sections: [
      {
        heading: "What AI Actually Changes Day to Day",
        paragraphs: [
          "The immediate, practical impact of AI on UX work is in speed. Tasks that used to take hours — writing UX copy variations, generating initial wireframe ideas, summarizing user research transcripts, creating accessibility audit reports — now take minutes. This compression of low-level work is genuinely transformative for individual designers.",
          "Tools like Figma AI, Galileo, and Uizard can generate wireframes from text prompts. The results are rarely final-quality, but they're good enough to be a starting point — and a starting point saves more time than almost anything else in the design process. The blank canvas problem, which blocks many designers from starting, effectively disappears.",
          "But speed creates its own risks. When it becomes trivially easy to generate a dozen wireframe directions, the skill shifts from generation to evaluation. Which direction is right, and why? That judgment call — rooted in research, in business context, in understanding human behavior — is precisely where AI has no advantage over an experienced designer.",
        ],
      },
      {
        heading: "The Shift in Valuable Skills",
        paragraphs: [
          "If AI handles generation, the premium moves to judgment, strategy, and communication. The designers who will thrive in an AI-augmented world are not those who can make the most beautiful mockup — those skills get compressed. The premium is on designers who can ask the right questions, define the right problem, and explain their thinking to non-designers.",
          "Research and facilitation skills become more valuable, not less. AI can analyze a survey dataset, but it can't sit in a contextual inquiry and pick up on the subtle frustration in a user's voice when they complete a task. It can't run a design critique, earn the trust of a skeptical engineering team, or navigate the organizational politics that shape what gets built.",
          "The ability to write clearly and think in systems also becomes more important. When AI handles the execution layer, the work that remains human is inherently higher-level — setting design principles, maintaining design systems, establishing the quality bar. These are skills many junior designers have underdeveloped precisely because the execution work consumed so much time.",
        ],
      },
      {
        heading: "How to Prepare Right Now",
        paragraphs: [
          "The best thing you can do today is develop a point of view on AI rather than a posture of anxiety about it. Experiment seriously — not just dabbling, but spending real time with AI tools in your actual workflow. Understand what they're good at, where they fail, and what the implications are for how you work.",
          "Invest in the skills that AI can't replicate easily: deep user research, systems thinking, stakeholder influence, and the ability to tell a clear story about design decisions. These are also, not coincidentally, the skills that separate mid-level designers from senior ones.",
          "Finally, get comfortable being a conductor more than a producer. The highest-leverage thing in an AI-augmented workflow is directing tools effectively — writing sharp prompts, evaluating outputs critically, and knowing when to use AI versus when to do the work yourself. That meta-skill is one of the most important you can develop for the next decade.",
        ],
      },
    ],
  },
  {
    slug: "ux-mistakes-beginners-make",
    tag: "UX Design",
    title: "UX Mistakes Beginners Make",
    excerpt:
      "Everyone makes these mistakes when they're starting out. The difference between junior and senior designers is often just learning which ones to avoid.",
    readTime: "5 min read",
    date: "January 2025",
    sections: [
      {
        heading: "Designing for Yourself",
        paragraphs: [
          "The most common and most damaging mistake a new designer can make is designing for themselves. When you assume that because something makes sense to you it will make sense to users, you short-circuit the entire value of UX as a discipline. You are not the user. You are never the user.",
          "This shows up in subtle ways. Choosing navigation labels that feel logical to you but mean nothing to your target audience. Designing icon-only buttons because you think they look clean, not considering that your users won't recognize the icons. Skipping onboarding because the product feels obvious to you after weeks of building it.",
          "The cure is early, frequent user contact. Even five-minute hallway tests with people who haven't seen your product will reveal assumptions you didn't know you were making. Making user feedback a regular part of your process — not a final-step validation — is what separates UX from art direction.",
        ],
      },
      {
        heading: "Jumping to Solutions Too Fast",
        paragraphs: [
          "There is enormous pressure in most product environments to move quickly from problem to solution. Junior designers often internalize this pressure and start wireframing before they've properly understood the problem. The result is a solution that's elegant, well-crafted, and wrong.",
          "Before opening Figma, you should be able to answer: Who exactly is experiencing this problem? What are they trying to accomplish? What do they currently do? Why does the current solution fail? Where in their journey does this friction occur? If you can't answer these questions, you're not ready to design.",
          "The discipline of staying in problem space longer than feels comfortable is one of the hardest things to develop, because it requires resisting the pull toward the tangible. Mockups feel like progress. Synthesis documents don't. But the designers who do this work upstream are the ones whose solutions hold up under scrutiny.",
        ],
      },
      {
        heading: "Treating Feedback as an Attack",
        paragraphs: [
          "Design is a collaborative discipline, but most early-career designers have a deep emotional attachment to their work that makes feedback painful. The first time a stakeholder tears apart something you've spent a week on is genuinely hard. But the designers who progress fastest are those who detach from their work early and learn to see critique as information.",
          "The mental shift is to think of your designs as experiments, not expressions. An experiment that fails provides useful data. A design that doesn't work teaches you something about the problem, the users, or the constraints. Nothing is wasted if you learn from it.",
          "Practically, this means presenting work in a way that invites feedback rather than defending against it. Start a critique by framing what decisions you made and what you're uncertain about. Ask specific questions. Don't explain yourself when someone raises a concern — listen first, understand the concern fully, and then respond. The designers who get better feedback are the ones who've created a culture where honesty feels safe.",
        ],
      },
    ],
  },
  {
    slug: "what-recruiters-notice-in-the-first-30-seconds",
    tag: "Career",
    title: "What Recruiters Notice in the First 30 Seconds",
    excerpt:
      "A recruiter spends an average of 30 seconds on a portfolio before deciding to go deeper or move on. Here's exactly what they're looking at.",
    readTime: "5 min read",
    date: "December 2024",
    sections: [
      {
        heading: "The First Impression Is the Work",
        paragraphs: [
          "In the first few seconds of landing on your portfolio, a recruiter is making a binary decision: does this designer's aesthetic match what we're looking for? Before they've read a word, they've formed a judgment based on typography, hierarchy, color, and the quality of the work thumbnails. This is superficial, but it's unavoidable — it's how human visual processing works.",
          "This means your first project on the homepage has to be your best work. Not your most recent, not your most ambitious — your best. The one with the strongest visual design, the clearest case study thumbnail, the most interesting title. Everything else in your portfolio is judged relative to this first impression.",
          "Your personal visual brand also matters. A portfolio that feels generic — a shadowed card grid with pastel colors, similar to every other portfolio the recruiter saw that day — creates no memory trace. Something distinctive, even if it takes a small creative risk, makes you easier to remember. Being forgettable is a silent rejection.",
        ],
      },
      {
        heading: "What They Read (and What They Skip)",
        paragraphs: [
          "Recruiters almost never read full case studies in their first pass. They skim — looking at headings, images, and the first and last sentences of paragraphs. They're not lazy; they're applying time efficiently. You need to design your case studies for skimming as much as for deep reading.",
          "What they do read: your bio (specifically your title and experience level), the project title and brief description on each card, and the 'role' and 'outcome' sections of a case study if they open one. What they skip: long paragraphs of process narrative, academic descriptions of your research methodology, and anything that buries the key insight in the middle of a paragraph.",
          "The implication is structural. Put your most important information first — always. Use clear section headings so the story is navigable at a skim. Lead with the outcome, not the process. 'This redesign reduced drop-off by 34%' in the first sentence of a case study does more work than three paragraphs of empathy mapping methodology.",
        ],
      },
      {
        heading: "The Three Things That Actually Get You Called",
        paragraphs: [
          "After reviewing thousands of portfolios, most experienced design recruiters point to the same three things: clarity of thinking, relevance to the role, and evidence of real-world constraints. Clarity means the reader never has to wonder what you did, what the problem was, or what the result was. Ambiguity in a case study reads as disorganized thinking.",
          "Relevance is about targeting. A portfolio sent to a B2B SaaS company should lead with B2B SaaS work if you have it. A portfolio for a fintech role should foreground any financial or data-heavy design experience. Generic portfolios get generic responses. Tailoring — even just the order of projects — shows you understand the role.",
          "Real-world constraints are what separate student and personal projects from professional work. When a case study shows you designed within a dev timeline, worked with an existing design system, navigated stakeholder disagreements, or shipped under a budget, it signals experience that mockup-quality work can't. The messier and more real the context you designed within, the more valuable the case study.",
        ],
      },
    ],
  },
  {
    slug: "how-i-use-chatgpt-as-a-ux-designer",
    tag: "AI & Design",
    title: "How I Use ChatGPT as a UX Designer",
    excerpt:
      "Not for generating designs — for the parts of UX work that eat time and create friction. Here's my actual workflow.",
    readTime: "6 min read",
    date: "November 2024",
    sections: [
      {
        heading: "Research Synthesis and Sense-Making",
        paragraphs: [
          "The most time-consuming part of user research isn't doing the interviews — it's making sense of them afterward. I used to spend days moving through transcripts, coding themes, and writing synthesis documents. Now I use ChatGPT as a first-pass synthesis tool that compresses that process significantly.",
          "My workflow: I paste cleaned interview transcripts (removing any identifying information first) and ask ChatGPT to identify recurring themes, surprising outliers, and direct quotes that best represent each theme. The output isn't publishable research — it's a scaffold I use to organize my own thinking and catch patterns I might have missed.",
          "I'm careful to do my own reading of the transcripts first so I'm not outsourcing my judgment — I'm using the tool to challenge and supplement my interpretation, not replace it. When ChatGPT surfaces a theme I didn't notice, I go back to the source material to verify it. The tool extends my reach; it doesn't do my reasoning for me.",
        ],
      },
      {
        heading: "UX Writing and Microcopy",
        paragraphs: [
          "UX writing is where I've found the most immediate practical value. Generating a dozen variations of a button label, an empty state message, an error prompt, or onboarding tooltip in under a minute has changed how I approach microcopy. Instead of laboring over the first option, I now generate options quickly and make a selection from the set.",
          "The prompts I use are specific: 'Write 8 versions of an error message for a payment failure. The app is a personal finance tool for first-time earners aged 22–30. The tone should be calm and supportive, not technical or alarming.' Specificity in the prompt produces specificity in the output.",
          "I also use it for checking tone consistency — pasting a set of UI strings and asking whether they all feel like they come from the same voice. This is a tedious task for a human reviewer and a fast one for the model. The feedback isn't always accurate, but it prompts useful conversations with the team about voice guidelines.",
        ],
      },
      {
        heading: "Preparing for Stakeholder Conversations",
        paragraphs: [
          "One of the most underrated uses is preparation for difficult conversations. Before presenting to a skeptical engineering team or a risk-averse product manager, I'll describe the situation to ChatGPT and ask it to generate likely objections to my proposal. The objections are often predictable, but articulating them in advance forces me to think through my responses.",
          "I also use it to pressure-test design decisions — describing the rationale for a design choice and asking where the logic might break down. This is a form of pre-mortem: imagining how the decision could fail before it ships. It's not perfect, but it regularly surfaces at least one thing I hadn't considered.",
          "The meta-skill is knowing when to use the tool and when not to. ChatGPT is excellent at language tasks, at exploring possibility space, and at generating structured starting points. It's not good at judgment calls that require context, at understanding organizational dynamics, or at replacing the empathy that comes from real user contact. Stay clear on that boundary and the tool is genuinely useful.",
        ],
      },
    ],
  },
  {
    slug: "my-roadmap-to-becoming-a-senior-product-designer",
    tag: "Career",
    title: "My Roadmap to Becoming a Senior Product Designer",
    excerpt:
      "Senior isn't about years of experience. It's about the kind of designer you've become. Here's the map I'm following.",
    readTime: "8 min read",
    date: "October 2024",
    sections: [
      {
        heading: "What 'Senior' Actually Requires",
        paragraphs: [
          "The word 'senior' is attached to a job title, but it describes a mode of working. A senior designer doesn't need to be told what the problem is — they help define it. They don't wait for feedback — they proactively test assumptions. They don't just design a screen — they consider the system it lives in, the edge cases, the states, the failure modes.",
          "In every organization I've studied or spoken to designers within, the line between mid-level and senior is the same: scope. Mid-level designers take a well-defined problem and execute on it brilliantly. Senior designers take an ambiguous situation, define the problem worth solving, and organize people and process around solving it.",
          "The skills required for that jump aren't primarily visual. They're strategic: the ability to zoom out and see the product in its business context, the ability to influence without authority, and the ability to communicate design decisions in terms that resonate with engineering, product, and executive stakeholders.",
        ],
      },
      {
        heading: "The Skills I'm Building Deliberately",
        paragraphs: [
          "I've mapped my growth plan around three areas: systems thinking, research leadership, and communication. Systems thinking means designing with the whole product in mind — building components that scale, writing documentation that others can use, and thinking about how a change in one area affects adjacent features. It means being a contributor to the design system, not just a consumer of it.",
          "Research leadership means going beyond conducting research to shaping what questions the team is asking. It means advocating for user research at the roadmap level, not just the feature level. It means turning research insights into strategic recommendations that influence the product direction, not just the next sprint's design decisions.",
          "Communication is the area I'm investing in most. I'm writing more — publishing these articles, documenting my decisions in detailed case studies, writing design briefs that explain not just what I designed but why and what alternatives I considered. Writing forces clarity, and clarity in communication is the primary distinguishing trait of the senior designers I most respect.",
        ],
      },
      {
        heading: "The Honest Parts of the Journey",
        paragraphs: [
          "The path to senior isn't linear, and pretending otherwise would be dishonest. There are projects that go badly — designs that test poorly, stakeholder relationships that fray, decisions that look wrong in retrospect. The growth happens in those moments, but only if you stay curious about what went wrong rather than defensive about your choices.",
          "I've also had to confront the difference between being busy and being effective. Filling your time with execution work feels productive. But the highest-leverage things a designer can do — shaping the problem definition, advocating for users in roadmap conversations, building relationships with engineering partners — often don't look like 'design work' from the outside. Investing in those things takes a different kind of discipline.",
          "The most important thing I've learned is that career growth in design is not about accumulating tools or techniques. It's about developing judgment — the taste to know what good looks like, the honesty to know when your work isn't there yet, and the conviction to advocate for the right solution even when it's the harder path. That's what I'm working toward.",
        ],
      },
    ],
  },
];
