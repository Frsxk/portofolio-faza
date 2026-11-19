// Real portfolio content for Muhammad Faza Al-Banna.
// Sources: the old portfolio in Frsxk/portofolio-faza (app/utils/projectData.ts,
// app/utils/constants.ts, app/routes/home.tsx, about.tsx, contact.tsx).
// Anything the old site did not state is marked in the verification notes as
// proposed, not as a measured result. Architecture notes and code excerpts are
// short reconstructions from the stated stack and description, not verbatim
// source excerpts. Replace them with real excerpts when the project repos
// are reviewed.
import type { PortfolioContent, ProjectStudy } from "./types"

const studies = [
  {
    id: "project-01",
    indexLabel: "01",
    title: "NimeNime Hub",
    subtitle: "Anime and manga updates, in one blog",
    featured: true,
    isSample: false,
    category: "interface",
    editionTag: "Timedoor Academy Final Project",
    role: "Web development",
    stack: ["HTML", "CSS", "JavaScript"],
    summary:
      "A blog website for anime and manga updates, built with plain HTML, CSS, and JavaScript. It was the final project of the Timedoor Academy Web Developer Program.",
    problem:
      "Anime and manga updates arrive in many places. A reader needs one page where new updates are easy to find and each post is easy to read.",
    architecture:
      "Plain HTML pages with CSS for layout and JavaScript for interaction. Posts are the core content, and the site links between updates instead of hiding them behind an app shell.",
    verificationNote:
      "Proposed verification: open the live site, check that updates load, posts read cleanly on mobile and desktop, and every link reaches its destination. No traffic or performance result is claimed here.",
    inquirySubject: "Discuss NimeNime Hub",
    links: {
      github: "https://github.com/Frsxk/weeb-site",
      live: "https://nimenime.netlify.app",
    },
    schematic: {
      src: "/schematics/project-01-nimenime-hub.svg",
      alt: "Illustration of the NimeNime Hub update feed: new updates enter a post list, readers open a post, and the post links back to the feed.",
      caption: "Update feed. New posts enter the list, readers open one post at a time.",
      aspectWidth: 800,
      aspectHeight: 500,
      isIllustration: true,
    },
    architectureNotes: {
      overview:
        "The site treats a post as the unit of content. The feed lists updates, a post holds the update itself, and navigation stays visible so a reader can return to the feed.",
      constraints: [
        "Plain HTML, CSS, and JavaScript only, with no framework or build step.",
        "New updates need a new post; there is no admin panel or database.",
        "The layout must stay readable on a phone, where most readers arrive.",
      ],
      tradeoffs: [
        { decision: "Use plain HTML, CSS, and JavaScript", rationale: "The site stays simple to host, but every page is written by hand." },
        { decision: "Keep posts as static pages", rationale: "Pages load fast with no server work, but updates need file edits." },
        { decision: "One feed for anime and manga", rationale: "Readers see everything in one place, but the feed mixes two kinds of updates." },
      ],
      snippet: {
        filename: "post.html",
        language: "HTML",
        code: `<article class="post">\n  <h2>New update</h2>\n  <p>Anime and manga news, in one place.</p>\n  <a href="/posts/update.html">Read the update</a>\n</article>`,
      },
    },
  },
  {
    id: "project-02",
    indexLabel: "02",
    title: "Knight of the Night",
    subtitle: "An adventure RPG that runs in the browser",
    featured: false,
    isSample: false,
    category: "interface",
    editionTag: "Timedoor Academy Final Project",
    role: "Game development",
    stack: ["Phaser3", "Node.js"],
    summary:
      "A web game with an adventure RPG theme, made with the Phaser 3 framework. It was the final project of the Timedoor Academy Game Development Program.",
    problem:
      "A browser game must start fast, teach its controls without a manual, and keep the player moving through the adventure.",
    architecture:
      "Phaser 3 runs the game loop in the browser: scenes hold the world, input moves the knight, and the game state decides what happens next. Node.js supports the project tooling around it.",
    verificationNote:
      "Proposed verification: play the live demo from start to first goal, check movement and combat input on keyboard, and confirm the game loads on a fresh browser profile. No playtest result is claimed here.",
    inquirySubject: "Discuss Knight of the Night",
    links: {
      github: "https://github.com/Frsxk/knight-of-the-night",
      live: "https://knight-of-the-night.netlify.app/",
    },
    schematic: {
      src: "/schematics/project-02-knight-of-the-night.svg",
      alt: "Illustration of the Knight of the Night game loop: input moves the knight, the scene updates the world, and the game renders the next frame.",
      caption: "Game loop. Input, world update, and render repeat every frame.",
      aspectWidth: 800,
      aspectHeight: 500,
      isIllustration: true,
    },
    architectureNotes: {
      overview:
        "The game is a loop: read input, update the world, render the frame. Scenes separate the parts of the game so one scene does not own the whole flow.",
      constraints: [
        "The game runs in the browser, so it must work with keyboard input and a normal network connection.",
        "Phaser 3 owns the loop, so game code follows its scene structure.",
        "Assets must stay small enough to load before the player loses patience.",
      ],
      tradeoffs: [
        { decision: "Use Phaser 3", rationale: "The framework handles the loop and rendering, but the game must fit its scene model." },
        { decision: "Keep the game in the browser", rationale: "Anyone can play from a link, but the game cannot use native device features." },
        { decision: "One adventure theme", rationale: "A single theme keeps art and story coherent, but it limits the range of levels." },
      ],
      snippet: {
        filename: "game-scene.ts",
        language: "TypeScript",
        code: `class GameScene extends Phaser.Scene {\n  create() {\n    this.player = this.physics.add.sprite(100, 100, "knight")\n  }\n\n  update() {\n    // Read input, move the knight, then check the world.\n  }\n}`,
      },
    },
  },
  {
    id: "project-03",
    indexLabel: "03",
    title: "Smol Maiden",
    subtitle: "A Discord bot for channel organization",
    featured: false,
    isSample: false,
    category: "systems",
    editionTag: "Independent Project",
    role: "Discord bot development",
    stack: ["Discord.js", "Node.js"],
    summary:
      "A Discord bot with several uses, focused on channel organization. It was built with Discord.js v13, independently and self-taught. The project is closed source. Try the bot by joining my Discord server.",
    problem:
      "A busy Discord server drifts out of order. Channels pile up, and moderators spend their time on chores instead of the community.",
    architecture:
      "A Node.js process runs a Discord.js v13 client. It listens for commands and events, then acts on channels: creating, sorting, and tidying them so the server stays readable.",
    verificationNote:
      "Proposed verification: invite the bot to a test server, run its channel commands, and confirm channels change as expected and the bot stays online. No uptime or usage result is claimed here.",
    inquirySubject: "Discuss Smol Maiden",
    schematic: {
      src: "/schematics/project-03-smol-maiden.svg",
      alt: "Illustration of the Smol Maiden bot flow: a command arrives from Discord, the bot checks it, and the bot organizes the server channels.",
      caption: "Bot flow. A command arrives, the bot checks it, and the channels change.",
      aspectWidth: 800,
      aspectHeight: 500,
      isIllustration: true,
    },
    architectureNotes: {
      overview:
        "The bot is a listener with a job list. Discord sends an event, the bot decides what the event asks for, and it changes channels only when the request is valid.",
      constraints: [
        "The bot runs on Discord.js v13, as stated in the old portfolio.",
        "The project is closed source, so no code link is published here.",
        "The bot can only change channels it has permission to manage.",
      ],
      tradeoffs: [
        { decision: "Build one bot for several tasks", rationale: "One bot is easier to run than many, but a fault in one task can affect the rest." },
        { decision: "Keep the project closed source", rationale: "The code stays private, but others cannot read it or run their own copy." },
        { decision: "Organize channels by command", rationale: "Commands give moderators control, but the bot does nothing until someone asks." },
      ],
      snippet: {
        filename: "bot.ts",
        language: "TypeScript",
        code: `client.on("messageCreate", (message) => {\n  if (message.author.bot) return\n  if (message.content === "!organize") {\n    // Sort the server channels into their groups.\n  }\n})`,
      },
    },
  },
  {
    id: "project-04",
    indexLabel: "04",
    title: "Epic Selfbot",
    subtitle: "Automation for the Epic RPG Discord bot",
    featured: false,
    isSample: false,
    category: "tooling",
    editionTag: "Independent Project",
    role: "Discord automation",
    stack: ["Discord.js", "Node.js"],
    summary:
      "A Discord.js project that automates tasks. It is an easy-to-configure tool made for the Epic RPG Discord bot.",
    problem:
      "Epic RPG asks for the same actions again and again. Doing them by hand takes time that could go to the game itself.",
    architecture:
      "A Node.js process runs Discord.js and performs the repeated Epic RPG actions on a schedule the user configures, instead of asking the user to repeat them by hand.",
    verificationNote:
      "Proposed verification: run the tool against a test account, confirm the configured actions happen on schedule, and confirm it stops cleanly. No usage result is claimed here.",
    inquirySubject: "Discuss Epic Selfbot",
    links: {
      github: "https://github.com/Frsxk/Epic-selfbot",
    },
    schematic: {
      src: "/schematics/project-04-epic-selfbot.svg",
      alt: "Illustration of the Epic Selfbot automation flow: a schedule triggers an action, the tool sends it to Epic RPG, and the result is logged.",
      caption: "Automation flow. A schedule triggers an action, and the result is logged.",
      aspectWidth: 800,
      aspectHeight: 500,
      isIllustration: true,
    },
    architectureNotes: {
      overview:
        "The tool is a scheduler around repeated actions. Configuration names the actions, the schedule decides when they run, and a log records what happened.",
      constraints: [
        "Actions are limited to what Epic RPG accepts in Discord.",
        "The schedule must be easy to configure, or the tool saves no time.",
        "There is no live demo; the tool runs as a local process.",
      ],
      tradeoffs: [
        { decision: "Automate repeated actions", rationale: "The user saves time, but the tool must keep working when Epic RPG changes." },
        { decision: "Keep configuration in one place", rationale: "Setup stays simple, but every change goes through that one file." },
        { decision: "Log each action", rationale: "A log makes faults visible, but it grows with every run." },
      ],
      snippet: {
        filename: "schedule.ts",
        language: "TypeScript",
        code: `// Run one configured Epic RPG action on a schedule.\nfunction runScheduledAction(action: string) {\n  console.log("Running action:", action)\n}`,
      },
    },
  },
  {
    id: "project-05",
    indexLabel: "05",
    title: "Portfolio (This Website)",
    subtitle: "This portfolio, rebuilt as one page",
    featured: false,
    isSample: false,
    category: "interface",
    editionTag: "Personal Portfolio",
    role: "Design & development",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    summary:
      "A website that lists everything I have done, so the work can be used by everyone. It was made with React Router and Tailwind CSS, and has now been rebuilt as a single page with Material 3 Expressive.",
    problem:
      "A portfolio must answer three questions fast: who I am, what I have built, and how to reach me. The old site spread those answers across four pages.",
    architecture:
      "One page, four sections: hero, selected work, atelier, and contact. Content lives in one typed file, the design uses Material 3 Expressive components and Tidal Ink color roles, and the contact form posts to FormSubmit.",
    verificationNote:
      "Proposed verification: build the site, open it on mobile and desktop in light and dark modes, check every project and social link, and submit the contact form once. No traffic result is claimed here.",
    inquirySubject: "Discuss this portfolio",
    links: {
      github: "https://github.com/Frsxk/portofolio-faza",
      live: "https://faza-al-banna.netlify.app",
    },
    schematic: {
      src: "/schematics/project-05-portfolio.svg",
      alt: "Illustration of this portfolio as one page: the hero, the work list, the atelier, and the contact form sit in one column.",
      caption: "One page. Hero, work, atelier, and contact in a single column.",
      aspectWidth: 800,
      aspectHeight: 500,
      isIllustration: true,
    },
    architectureNotes: {
      overview:
        "The page is one column of sections with anchors. The content file is the single source for identity, projects, and contact details, so an edit in one place updates the whole page.",
      constraints: [
        "One page only. No new routes or pages are added.",
        "Content must come from the old portfolio or from the user; nothing is invented.",
        "The contact form must send a real message, not open a mail draft.",
      ],
      tradeoffs: [
        { decision: "Use one page with anchors", rationale: "Navigation stays simple, but the page grows long as projects are added." },
        { decision: "Keep content in one typed file", rationale: "Edits stay in one place, but the file grows with each project." },
        { decision: "Use FormSubmit for contact", rationale: "The form needs no server, but it depends on an outside service." },
      ],
      snippet: {
        filename: "portfolio.ts",
        language: "TypeScript",
        code: `export const portfolioContent: PortfolioContent = {\n  meta: { isSample: false, editionLabel: "Portfolio" },\n  identity: { displayName: "Muhammad Faza Al-Banna" },\n  projects: studies,\n}`,
      },
    },
  },
] as const satisfies readonly ProjectStudy[]

export const portfolioContent: PortfolioContent = {
  meta: {
    isSample: false,
    editionLabel: "Portfolio",
    sampleDisclosure:
      "Information Systems student at University of Indonesia, based in Jakarta, Indonesia.",
    siteTitle: "Muhammad Faza Al-Banna | Information Systems Student & Developer",
    siteDescription:
      "Portfolio of Muhammad Faza Al-Banna, an Information Systems student at University of Indonesia. Web, Discord bots, and games, with five projects and a contact form.",
  },
  identity: {
    monogram: "FA",
    displayName: "Muhammad Faza Al-Banna",
    role: "Information Systems Student & Developer",
    locationLabel: "Jakarta, Indonesia",
    indexLine: "01 / INFORMATION SYSTEMS · UNIVERSITY OF INDONESIA",
    headline: "Information Systems student building for the web, Discord, and games.",
    positioning:
      "I am an undergraduate student at University of Indonesia, majoring in Information Systems. I like programming and computer science, and I learn by building: websites, Discord bots, and games.",
    primaryCta: { label: "View selected work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    heroTelemetry: {
      id: "profile",
      title: "Profile",
      specs: [
        { label: "Study", value: "Information Systems, UI" },
        { label: "Location", value: "Jakarta, Indonesia" },
        { label: "Status", value: "Open to opportunities" },
      ],
    },
  },
  navigation: [
    { id: "work", label: "Selected Work", href: "#work" },
    { id: "atelier", label: "Atelier & Craft", href: "#atelier" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  work: {
    sectionIndex: "02 / SELECTED WORK",
    heading: "Selected work",
    lead: "Five projects, from the web and games to Discord bots. Each one lists its stack, its code, and its live demo where one exists.",
    categories: [
      { value: "all", label: "All Projects" },
      { value: "systems", label: "Systems" },
      { value: "interface", label: "Interface" },
      { value: "tooling", label: "Tooling" },
    ],
    filterStacks: ["HTML", "CSS", "JavaScript", "Phaser3", "Discord.js", "Node.js", "React", "TypeScript", "Tailwind CSS"],
  },
  projects: studies,
  atelier: {
    sectionIndex: "03 / ATELIER & CRAFT",
    heading: "How I work",
    lead: "What I focus on, and the experience behind it.",
    principles: [
      {
        id: "build",
        title: "Learn by building.",
        body: "I learn new technology by building with it, from final projects at Timedoor Academy to a Discord bot I taught myself to write.",
      },
      {
        id: "real-use",
        title: "Build for real use.",
        body: "Each project has a live demo or a bot people can join, not just a screenshot. If it cannot be opened or tried, it does not belong here.",
      },
      {
        id: "keep-learning",
        title: "Keep learning.",
        body: "University of Indonesia, Dicoding programmes in AI and data engineering, and Google Cloud Arcade facilitation all feed the same habit: learn, build, repeat.",
      },
    ],
    studioNote: {
      title: "About this page",
      body: "This is a single-page portfolio. It lists five projects and the skills behind them. More projects will be added later.",
    },
    capabilitiesHeading: "Practice areas",
    capabilities: [
      {
        id: "web",
        title: "Web development",
        summary: "Websites and interfaces with HTML, CSS, JavaScript, React, and TypeScript.",
        deliverables: [
          "Responsive pages",
          "Blog and portfolio sites",
          "Front-end internship at BEM Fasilkom UI, Sep to Nov 2024",
        ],
        tools: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
      },
      {
        id: "discord-bots",
        title: "Discord bots",
        summary: "Bots for channel organization and automation, built with Discord.js and Node.js.",
        deliverables: ["Channel organization", "Automated tasks", "Bots people can join and use"],
        tools: ["Discord.js", "Node.js"],
      },
      {
        id: "games",
        title: "Game development",
        summary: "Web games with Phaser 3, from adventure RPG mechanics to a playable demo.",
        deliverables: ["Adventure RPG gameplay", "Playable web demo"],
        tools: ["Phaser3", "Node.js"],
      },
      {
        id: "cloud-ai",
        title: "Cloud & AI learning",
        summary: "Cloud, machine learning, and AI through Dicoding programmes with Google Cloud and Microsoft.",
        deliverables: [
          "Google Cloud Arcade facilitation, Jul 2025 to present",
          "ElevAIte with Dicoding, AI and data engineering, Jan to Jun 2025",
        ],
        tools: ["Python", "Java", "Google Cloud"],
      },
    ],
  },
  contact: {
    sectionIndex: "04 / CONTACT",
    heading: "Get in touch",
    lead: "I am always open to discussing new opportunities, collaborations, or just having a chat about technology.",
    email: "fazaalbanna0410@gmail.com",
    isSampleEmail: false,
    sampleEmailNote: "",
    workingNotes: "Based in Jakarta, Indonesia. Usually responds within 24 hours. Open to opportunities.",
    draftNotice:
      "This form sends your message to fazaalbanna0410@gmail.com. It does not open your email app.",
    subjectPresets: [
      "General inquiry",
      "Collaboration",
      "Discuss NimeNime Hub",
      "Discuss Knight of the Night",
      "Discuss Smol Maiden",
      "Discuss Epic Selfbot",
      "Discuss this portfolio",
    ],
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/faza-al-banna" },
      { name: "GitHub", url: "https://github.com/Frsxk" },
      { name: "Instagram", url: "https://instagram.com/faza_0810" },
      { name: "Discord", url: "https://discord.com/users/543313602942337035" },
    ],
  },
  footer: {
    colophon: "Muhammad Faza Al-Banna, Information Systems student at University of Indonesia.",
    stackSummary: "React · TypeScript · Vite · Tailwind CSS · Material 3 Expressive",
    editionNote: "Single-page portfolio. Five projects. More to come.",
    thirdPartyAttribution:
      "Built with shadcn M3E (MIT). Google Material 3 shape outlines and Material Color Utilities (Apache 2.0). Roboto Flex and JetBrains Mono (OFL 1.1).",
    cvUrl:
      "https://docs.google.com/document/d/1acOrOqFPzBbbeMlfsPSdFH-n_0Dg4jNW/edit?usp=sharing&ouid=106393277389568316566&rtpof=true&sd=true",
  },
}

export function getFeaturedStudy(): ProjectStudy {
  return studies[0]
}

export function getSupportingStudies(): readonly ProjectStudy[] {
  return studies.filter((study) => !study.featured)
}
