export const profile = {
  name: "Jake Nguyen",
  handle: "jake_dev",
  role: "Software Engineer · Smart Contract Developer · Web3 Engineer",
  email: "jake@beraji.io",
  twitter: "@jake_dev",
  linkedin:
    "https://www.linkedin.com/in/nguy%E1%BB%85n-%C4%91%E1%BB%A9c-m%E1%BA%A1nh-0b78b9200/?skipRedirect=true",
  telegram: "@jake2k1",
  github: "github.com/ducmanh1101",
  location: "Remote · UTC+7",
  status: "Available for Work",
};

export type Skill = {
  title: string;
  description: string;
  tags: string[];
};

export const skills: Skill[] = [
  {
    title: "Blockchain",
    description:
      "Audited Solidity & Rust systems — ERC-20/721/4626 vaults, upgradable proxies, gas-tuned logic, lending markets, and oracle integration.",
    tags: ["Solidity", "Rust", "Hardhat", "EVM", "Smart Contracts", "Solana"],
  },
  {
    title: "Frontend",
    description:
      "Production dApps and web apps — type-safe contract bindings, performant UIs, and resilient UX.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "wagmi",
      "viem",
      "Zustand",
      "Tailwind CSS",
      "Vite",
      "Tanstack Query",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    description:
      "Clean architecture, testable services, and pragmatic API design with CI/CD that ships to production.",
    tags: [
      "Go",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "NestJS",
      "Redis",
      "BullMQ",
      "Cloudflare",
      "Supabase",
    ],
  },
];

export type ProjectLink = {
  label: "Award" | "GitHub" | "Etherscan" | "Docs" | "Website" | "X";
  href: string;
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  contributions: string[];
  stack: string[];
  period: string;
  team: string;
  tags: (
    | "DeFi"
    | "GameFi"
    | "NFT"
    | "Infra"
    | "Tooling"
    | "Cross-chain"
    | "Multi-chain"
    | "Wallet"
  )[];
  metrics?: { label: string; value: string }[];
  status: "Mainnet" | "Testnet" | "Maintenance" | "Closed";
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    name: "SolShield",
    tagline: "Decentralized digital contract signing on Solana",
    description:
      "An on-chain platform to create, sign, and verify contracts with cryptographically secure e-signatures — replacing paper workflows with agreements that are transparent, immutable, and auditable.",
    contributions: [
      "Designed and wrote the Anchor program for on-chain contract creation, signing, and verification.",
      "Built the React dApp with wallet integration and the document signing flow.",
      "Implemented signature verification and on-chain state management.",
    ],
    stack: ["Rust", "Anchor", "React", "TypeScript", "Redux", "Ant Design"],
    period: "2023",
    team: "2 members",
    tags: ["DeFi"],
    metrics: [{ label: "Win Prize", value: "$5000" }],
    status: "Mainnet",
    links: [
      {
        label: "Award",
        href: "https://superteamvn.substack.com/i/105525751/9-solshield",
      },
      { label: "GitHub", href: "https://github.com/ducmanh1101/solshield" },
      { label: "Website", href: "https://solshield.onrender.com" },
    ],
  },
  {
    name: "Prime Vaults",
    tagline:
      "Smart saving account, principal protection & guaranteed minimum yield",
    description:
      "Prime Vaults are smart saving accounts delivering best returns for USD, ETH, BTC and BERA through cross-chain lending, liquidity provision, and restaking with Prime AI driving intelligent analysis for optimal performance.",
    contributions: [
      "Contributed to ERC-4626 vault contracts powering cross-chain yield strategies.",
      "Built backend services with cron jobs to index on-chain data and run analytics.",
      "Implemented the dApp frontend with wallet connection and vault dashboards.",
      "Developed a cross-chain bridge gateway enabling users to deposit from multiple chains.",
      "Implemented EIP-4337 smart accounts with sponsored (gasless) gas transactions.",
    ],
    stack: [
      "Solidity",
      "Hardhat",
      "EIP-4626",
      "EIP-4337",
      "NestJS",
      "ReactJS",
      "Typescript",
      "Merkle Tree",
      "Tailwind CSS",
      "MongoDB",
    ],
    period: "2025 - 2/2026",
    team: "3 members",
    tags: ["Cross-chain", "DeFi"],
    metrics: [{ label: "TVL", value: "$550k" }],
    status: "Mainnet",
    links: [
      { label: "Website", href: "https://primevaults.finance/" },
      {
        label: "X",
        href: "https://x.com/PrimeVaultsHQ",
      },
      {
        label: "Docs",
        href: "https://docs.primevaults.finance/prime-vaults-v1/introduction",
      },
    ],
  },
  {
    name: "Jiko",
    tagline: "Yield Optimizer and PvP Idle Card Game",
    description:
      "JIKO is a yield optimizer powering a PvP idle card game. With single-staked pools, we maximize yields via POL on Berachain, making finance fun and profitable.",
    contributions: [
      "Contributed to building single-staked pool contracts and the POL yield optimization logic.",
      "Developed the staking and stake management UI for the PvP idle card game.",
      "Integrated on-chain staking flows with the game economy.",
    ],
    stack: [
      "Solidity",
      "Hardhat",
      "EIP-4626",
      "React",
      "NestJS",
      "Typescript",
      "Golang",
      "MongoDB",
      "Postgres",
      "Redis",
      "Tailwind CSS",
    ],
    period: "2025",
    team: "5 members",
    tags: ["GameFi", "DeFi"],
    metrics: [
      { label: "TVL", value: "$1.5m" },
      { label: "Defillama", value: "#2 GameFi" },
    ],
    status: "Maintenance",
    links: [
      { label: "Website", href: "https://app.jiko.finance/" },
      {
        label: "X",
        href: "https://x.com/Jikofunfinance",
      },
      { label: "Docs", href: "https://docs.jiko.finance/jiko/introduction" },
    ],
  },
  {
    name: "Beraji Bear",
    tagline: "Mint NFTs",
    description:
      "Break free, be playful, and find your joy again. Beraji Bears is your invitation to reconnect with the child within. A collection of 8888 unique on Berachain, one-of-a-kind NFTs that bring joy and happiness to your life.",
    contributions: [
      "Built the NFT minting dApp and wallet integration for the 8888 collection.",
      "Implemented mint phases, allowlist logic, and the reveal flow.",
    ],
    stack: [
      "Solidity",
      "Hardhat",
      "EIP-721",
      "React.js",
      "Typescript",
      "Tailwind CSS",
    ],
    period: "2025",
    team: "4 members",
    tags: ["NFT"],
    metrics: [{ label: "Minted", value: "$100k" }],
    status: "Mainnet",
    links: [
      { label: "Website", href: "https://beraji-bear.onrender.com/" },
      { label: "X", href: "https://x.com/berajibears" },
      {
        label: "Docs",
        href: "https://docs.jiko.finance/beraji-bears/reconnect-embrace-and-play",
      },
    ],
  },
  {
    name: "Bera Bee Catcher",
    tagline: "Tap-to-earn game on Telegram",
    description:
      "A mine-to-earn / play-to-earn onboarding game within the Berachain ecosystem where users catch bees, collect resources, and earn $SUGAR.",
    contributions: [
      "Discussed and designed the core game concept, system architecture, token economy, and reward systems (catch, mine, steal, guilds, quests, referrals, leaderboards) from scratch.",
      "Onboarded 220,000+ users, with around 1,000 concurrent online users at peak.",
      "Developed the Telegram Mini App tap-to-earn game frontend with wallet connect.",
      "Built the leaderboard and seasonal rewards distribution backend.",
      "Integrated on-chain token claims for top-ranked players.",
      "Implemented Telegram Bot notifications for real-time operational alerts.",
    ],
    stack: [
      "Telegram Mini App",
      "React",
      "Zustand",
      "TanStack Query",
      "NestJS",
      "Typescript",
      "Tailwind CSS",
      "MongoDB",
      "PostgresSQL",
      "Golang",
      "BullMQ",
      "Redis",
    ],
    period: "2024 - 2025",
    team: "5 members",
    tags: ["Wallet", "GameFi"],
    metrics: [
      { label: "Items shell (Revenue)", value: "$160k" },
      { label: "Total users", value: "220k" },
    ],
    status: "Closed",
    links: [
      {
        label: "Docs",
        href: "https://docs.jiko.finance/bera-bee-catcher/introduction",
      },
    ],
  },
  {
    name: "Desig",
    tagline: "Omnichain Multisig Wallet",
    description:
      "A multi-chain MPC-based multisig wallet that secures assets by splitting private keys into independent cryptographic shares and authorizes transactions via distributed signatures.",
    contributions: [
      "Built a notification system and portal with NestJS and React, integrating the third-party Novu service for multi-channel delivery.",
      "Implemented UI features for the Chrome extension wallet using React.",
      "Developed and maintained the mobile wallet interface with React Native.",
    ],
    stack: [
      "Supabase",
      "React",
      "React Native",
      "Typescript",
      "Ant Design",
      "GitHub CI/CD",
      "Zustand",
      "Chrome Extension",
      "NestJS",
      "MongoDB",
    ],
    period: "2023 - 2024",
    team: "8 members",
    tags: ["Multi-chain", "Wallet"],
    metrics: [{ label: "Users", value: "1k+" }],
    status: "Maintenance",
    links: [{ label: "X", href: "https://x.com/DesigLabs" }],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Blockchain Developer",
    company: "DeFi Protocol (Confidential)",
    period: "2026 — Present",
    location: "Hybrid",
    highlights: [
      "Contributed to the design of an ERC-4626 vault system, managing $2M+ TVL with 99.98% uptime.",
      "Implemented gasless transactions (EIP-4337 & EIP-7702) to optimize UX and reduce friction during cross-chain interactions.",
      "Built real-time on-chain analytics & monitoring (dashboards, alerts, drill-down reporting) for staking metrics, fund flows, and risk indicators.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Beraji Labs",
    period: "2/2024 — 12/2025",
    location: "Office",
    highlights: [
      "Built and deployed multiple web applications using ReactJS, TypeScript, and Tailwind CSS.",
      "Developed scalable backend systems capable of supporting over 200k users.",
      "Built DeFi applications with real-time blockchain data integration and wallet connectivity.",
      "Implemented crypto and fiat payment systems with social login authentication.",
      "Designed game systems and MongoDB database architecture for scalable applications.",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "Sentre",
    period: "8/2023 — 2/2024",
    location: "Office",
    highlights: [
      "Built and integrated a notification system using NestJS, React, and Ant Design.",
      "Developed a portal for managing notifications and integrated Novu for multi-channel notification handling.",
      "Implemented multiple UI features for browser extension applications using React.",
      "Developed and maintained mobile interfaces using React Native.",
      "Collaborated with team members to deliver responsive and user-friendly applications.",
    ],
  },
];

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    value: profile.github,
    href: `https://${profile.github}`,
  },
  {
    label: "Twitter",
    value: profile.twitter,
    href: `https://twitter.com/${profile.twitter.replace("@", "")}`,
  },
  {
    label: "Telegram",
    value: profile.telegram,
    href: `https://t.me/${profile.telegram.replace("@", "")}`,
  },
  {
    label: "LinkedIn",
    value: "Duc Manh Nguyen",
    href: `${profile.linkedin}`,
  },
];

export type Stat = {
  label: string;
  value: string;
};

export const stats: Stat[] = [
  { label: "Years experience", value: "4+" },
  { label: "TVL secured", value: "$2M+" },
  { label: "Protocols", value: "4" },
];

export const navItems = [
  { label: "Capabilities", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
