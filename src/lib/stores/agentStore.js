import { create } from 'zustand';
import { genConfig } from 'react-nice-avatar';

const generateAvatarConfig = () => genConfig({
  hairStyle: ['normal', 'thick', 'mohawk', 'womanLong', 'womanShort'][Math.floor(Math.random() * 5)],
  faceStyle: ['none', 'stubble', 'mediumBeard'][Math.floor(Math.random() * 3)],
  bgColor: ['#FF9B42', '#4266F5', '#B642FF', '#42FFD2', '#FF4242'][Math.floor(Math.random() * 5)]
});

const initialAgents = [
  {
    id: "agent_1",
    name: "EngageBot",
    status: "active",
    avatar: generateAvatarConfig(),
    channels: ["Twitter", "Discord"],
    strategy: {
      goals: "Increase engagement",
      tone: "Friendly",
      targets: {
        markets: ["US", "Europe"],
        segments: ["Young Professionals"],
        users: ["Tech Enthusiasts"],
        hashtags: ["#AI", "#Engagement"],
      },
      triggers: ["Product launches"],
      glossary: ["Brand-specific terms"],
    },
  },
  {
    id: "agent_2",
    name: "SalesAI",
    status: "paused",
    avatar: generateAvatarConfig(),
    channels: ["LinkedIn", "Reddit"],
    strategy: {
      goals: "Drive sales",
      tone: "Professional",
      targets: {
        markets: ["Asia"],
        segments: ["Business Owners"],
        users: ["Small Business Owners"],
        hashtags: ["#Sales", "#BusinessGrowth"],
      },
      triggers: ["Quarterly promotions"],
      glossary: ["Sales terms"],
    },
  },
];

export const useAgentStore = create((set) => ({
  agents: initialAgents,
  selectedAgent: null,
  
  addAgent: (agent) => set((state) => ({
    agents: [...state.agents, { ...agent, id: `agent_${state.agents.length + 1}`, status: 'inactive' }],
  })),
  
  updateAgent: (id, updatedAgent) => set((state) => ({
    agents: state.agents.map((agent) => 
      agent.id === id ? { ...agent, ...updatedAgent } : agent
    ),
  })),
  
  deleteAgent: (id) => set((state) => ({
    agents: state.agents.filter((agent) => agent.id !== id),
  })),

  updateAgentStatus: (id, status) => set((state) => ({
    agents: state.agents.map((agent) =>
      agent.id === id ? { ...agent, status } : agent
    ),
  })),
  
  setSelectedAgent: (agent) => set({ selectedAgent: agent }),
}));