import React from 'react';
import { useAgentStore } from '../../lib/stores/agentStore';
import AgentCard from './AgentCard';
import AgentModal from './AgentModal';
import { Plus } from 'lucide-react';

const AgentGrid = () => {
  const agents = useAgentStore((state) => state.agents);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedAgent, setSelectedAgent] = React.useState(null);
  
  const handleCreateAgent = () => {
    setSelectedAgent(null);
    setIsModalOpen(true);
  };

  const handleEditAgent = (agent) => {
    setSelectedAgent(agent);
    setIsModalOpen(true);
  };

  const handleCardClick = (agent) => {
    setSelectedAgent(agent);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this agent?')) {
      useAgentStore.getState().deleteAgent(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">AI Agents</h2>
        <button
          onClick={handleCreateAgent}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create Agent
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div 
            key={agent.id}
            onClick={() => handleCardClick(agent)}
            className="cursor-pointer"
          >
            <AgentCard
              agent={agent}
              onEdit={(e) => {
                e.stopPropagation();
                handleEditAgent(agent);
              }}
              onDelete={(id) => {
                e.stopPropagation();
                handleDelete(id);
              }}
              onView={(e) => {
                e.stopPropagation();
                handleCardClick(agent);
              }}
            />
          </div>
        ))}
      </div>

      <AgentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedAgent(null);
        }}
        mode={selectedAgent ? 'edit' : 'create'}
        agent={selectedAgent}
      />
    </div>
  );
};

export default AgentGrid;