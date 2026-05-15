export const profile = {
  name: "Jake",
  handle: "jakeit.dev",
  role: "Software Engineer · Smart Contract Developer · Web3 Engineer",
  walletAddress: "0xA1b2C3d4E5F6789012345678901234567890aF3E",
  email: "jake@beraji.io",
  twitter: "@jake_dev",
  telegram: "@jake2k1",
  github: "github.com/ducmanh1101",
  location: "Remote · UTC+7",
  status: "Available for new protocols",
};

export type Skill = {
  title: string;
  description: string;
  tags: string[];
};

export const skills: Skill[] = [
  {
    title: "Smart contracts",
    description:
      "Audited Solidity systems — ERC-20, ERC-721, ERC-4626 vaults, upgradable proxies, and gas-tuned core logic.",
    tags: ["Solidity", "Rust", "Foundry", "Hardhat"],
  },
  {
    title: "Frontend Web3",
    description:
      "Production dApp interfaces with wagmi, viem, and RainbowKit. Type-safe contract bindings and resilient UX.",
    tags: ["Next.js", "wagmi", "viem"],
  },
  {
    title: "Blockchain integration",
    description:
      "Multi-chain RPC orchestration, indexer pipelines, and event-driven backends for high-throughput apps.",
    tags: ["The Graph", "Alchemy", "RPC"],
  },
  {
    title: "DeFi systems",
    description:
      "Vaults, lending markets, yield strategies, and oracle integration. Built protocols handling $1M+ TVL.",
    tags: ["Lending", "Vaults"],
  },
];

export type ProjectLink = {
  label: "GitHub" | "Demo" | "Etherscan" | "Docs";
  href: string;
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  tags: ("DeFi" | "NFT" | "Infra" | "Tooling" | "Cross-chain")[];
  metric?: { label: string; value: string };
  network: "Mainnet" | "Testnet" | "L2";
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    name: "YieldVault",
    tagline: "Automated yield aggregation protocol",
    description:
      "ERC-4626 vault that auto-rebalances across Aave, Compound, and Morpho. Strategy router executes optimal allocations gas-efficiently.",
    stack: ["Solidity", "Foundry", "Next.js", "wagmi"],
    tags: ["DeFi"],
    metric: { label: "TVL", value: "$2.4M" },
    network: "Mainnet",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" },
      { label: "Etherscan", href: "#" },
    ],
  },
  {
    name: "StakeFlow",
    tagline: "Flexible staking smart contract system",
    description:
      "Modular staking primitive with linear, cliff, and dynamic-APY schedules. 12k+ active stakers across 4 deployments.",
    stack: ["Solidity", "viem", "React"],
    tags: ["DeFi", "Infra"],
    metric: { label: "Users", value: "12k+" },
    network: "Mainnet",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Etherscan", href: "#" },
    ],
  },
  {
    name: "BridgeX Interface",
    tagline: "Cross-chain bridge UI aggregator",
    description:
      "Unified UI routing liquidity across LayerZero, Wormhole, and Across. Real-time fee comparison and execution simulation.",
    stack: ["React", "wagmi", "TanStack Query", "RPC"],
    tags: ["DeFi", "Cross-chain"],
    metric: { label: "Routes", value: "120+" },
    network: "Mainnet",
    links: [
      { label: "Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    name: "NFT Lending Pool",
    tagline: "Peer-to-peer NFT collateral lending",
    description:
      "Permissionless lending market accepting blue-chip NFTs as collateral. Off-chain order book settled on-chain via signature.",
    stack: ["Solidity", "The Graph", "Next.js"],
    tags: ["NFT", "DeFi"],
    metric: { label: "APY", value: "8.2%" },
    network: "L2",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Docs", href: "#" },
    ],
  },
  {
    name: "ChainKit",
    tagline: "Type-safe contract SDK generator",
    description:
      "CLI that compiles ABIs into typed clients with hooks, error decoders, and gas estimators. Used in production by 3 protocols.",
    stack: ["TypeScript", "viem", "tsup"],
    tags: ["Tooling", "Infra"],
    metric: { label: "Installs", value: "4.1k" },
    network: "Mainnet",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Docs", href: "#" },
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Web3 Engineer",
    company: "DeFi Protocol (Confidential)",
    period: "2024 — Present",
    location: "Remote",
    highlights: [
      "Architected ERC-4626 vault system handling $2.4M TVL with 99.98% uptime.",
      "Reduced average transaction gas cost by 35% through assembly-level optimizations.",
      "Led migration to viem + wagmi v2, cutting frontend bundle size by 28%.",
    ],
    tags: ["Solidity", "Foundry", "Next.js"],
  },
  {
    role: "Smart Contract Developer",
    company: "Freelance",
    period: "2022 — 2024",
    location: "Remote",
    highlights: [
      "Shipped 11 audited contract systems for DeFi, NFT, and DAO clients.",
      "Built staking contracts handling $1M+ TVL across multiple deployments.",
      "Authored gas-optimized libraries adopted by 3 open-source protocols.",
    ],
    tags: ["Solidity", "Hardhat", "EVM"],
  },
  {
    role: "Frontend Engineer",
    company: "L2 Scaling Startup",
    period: "2021 — 2022",
    location: "Hybrid",
    highlights: [
      "Designed and built the analytics dashboard tracking 4M+ daily transactions.",
      "Implemented real-time on-chain event streaming via Server-Sent Events.",
      "Owned design system used across 5 internal product surfaces.",
    ],
    tags: ["React", "TypeScript", "GraphQL"],
  },
];

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
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
    label: "Wallet",
    value: profile.walletAddress,
    href: `https://etherscan.io/address/${profile.walletAddress}`,
  },
];

export type Stat = {
  label: string;
  value: string;
};

export const stats: Stat[] = [
  { label: "TVL secured", value: "$3.4M+" },
  { label: "Contracts", value: "20+" },
  { label: "Gas optimized", value: "−35%" },
  { label: "Protocols", value: "9" },
];

export const navItems = [
  { label: "Capabilities", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
