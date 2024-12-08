export const AVAILABLE_CHANNELS = [
  { id: 'twitter', label: 'Twitter' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'discord', label: 'Discord' },
  { id: 'reddit', label: 'Reddit' },
  { id: 'telegram', label: 'Telegram' },
];

export const TONE_OPTIONS = [
  { id: 'friendly', label: 'Friendly' },
  { id: 'professional', label: 'Professional' },
  { id: 'casual', label: 'Casual' },
  { id: 'formal', label: 'Formal' },
  { id: 'humorous', label: 'Humorous' },
];

export const GOAL_OPTIONS = [
  { id: 'drive_engagement', label: 'Drive Community Engagement', description: 'Encourage user participation via likes, reposts, and meaningful interactions' },
  { id: 'educate', label: 'Educate Users', description: 'Simplify complex Web3 topics to improve understanding' },
  { id: 'promote', label: 'Promote Content', description: 'Amplify relevant posts, announcements, and updates' },
  { id: 'build_trust', label: 'Build Trust', description: 'Establish the agent as a reliable resource in the Web3 ecosystem' },
  { id: 'increase_adoption', label: 'Increase Adoption', description: 'Support the onboarding of users into Web3 technologies' },
];

export const MARKET_OPTIONS = [
  { id: 'us', label: 'United States' },
  { id: 'eu', label: 'Europe' },
  { id: 'asia', label: 'Asia' },
  { id: 'latam', label: 'Latin America' },
];

export const SEGMENT_OPTIONS = [
  { id: 'developers', label: 'Developers', description: 'People actively building or contributing to Web3 projects' },
  { id: 'crypto_enthusiasts', label: 'Crypto Enthusiasts', description: 'Investors, traders, or early adopters' },
  { id: 'business_owners', label: 'Business Owners', description: 'Entrepreneurs integrating blockchain solutions' },
  { id: 'marketers', label: 'Marketers', description: 'Professionals promoting Web3 projects' },
  { id: 'students', label: 'Students', description: 'Learners interested in blockchain and crypto' },
];

export const TRIGGER_OPTIONS = [
  { id: 'content_engagement', label: 'Content Engagement' },
  { id: 'promotions', label: 'Promotions' },
  { id: 'community_activities', label: 'Community Activities' },
  { id: 'industry_news', label: 'Industry News' },
  { id: 'user_queries', label: 'User Queries' },
];

export const GLOSSARY_TERMS = [
  { id: 'blockchain', label: 'Blockchain', description: 'A decentralized ledger for recording transactions' },
  { id: 'web3', label: 'Web3', description: 'The next generation of the internet leveraging decentralized protocols' },
  { id: 'defi', label: 'DeFi', description: 'Decentralized Finance, offering financial services without intermediaries' },
  { id: 'nft', label: 'NFT', description: 'Non-Fungible Token, unique digital assets on the blockchain' },
  { id: 'dao', label: 'DAO', description: 'Decentralized Autonomous Organization' },
  { id: 'smart_contract', label: 'Smart Contract', description: 'Self-executing contracts with terms directly written into code' },
];

export const STATUS_CONFIG = {
  active: {
    label: 'Active',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: 'Bot is running and processing tasks'
  },
  paused: {
    label: 'Paused',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    description: 'Bot is temporarily paused'
  },
  inactive: {
    label: 'Inactive',
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
    description: 'Bot is not currently running'
  },
  error: {
    label: 'Error',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    description: 'Bot encountered an error'
  }
};