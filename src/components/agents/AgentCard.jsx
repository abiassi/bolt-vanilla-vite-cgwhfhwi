import React from 'react';
import Avatar from 'react-nice-avatar';
import { Edit2, Trash2, Eye, Play, Pause } from 'lucide-react';
import { STATUS_CONFIG } from '../../lib/constants/agentConfig';
import { useAgentStore } from '../../lib/stores/agentStore';

const AgentCard = ({ agent, onEdit, onDelete, onView }) => {
  const updateAgentStatus = useAgentStore((state) => state.updateAgentStatus);
  const statusConfig = STATUS_CONFIG[agent.status];

  const handleStatusToggle = () => {
    const newStatus = agent.status === 'active' ? 'paused' : 'active';
    updateAgentStatus(agent.id, newStatus);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16">
            <Avatar className="w-full h-full" {...agent.avatar} />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">{agent.name}</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.color}`}>
              {statusConfig.label}
            </span>
          </div>
        </div>

        <button
          onClick={handleStatusToggle}
          className={`p-2 rounded-full transition-colors ${
            agent.status === 'active'
              ? 'text-green-600 hover:bg-green-50'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          aria-label={agent.status === 'active' ? 'Pause agent' : 'Activate agent'}
        >
          {agent.status === 'active' ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {agent.channels.map((channel) => (
          <span
            key={channel}
            className="px-2 py-1 bg-gray-100 rounded-full text-sm"
          >
            {channel}
          </span>
        ))}
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Goal: {agent.strategy.goals}
        <br />
        Style: {agent.strategy.tone}
      </p>
      
      <div className="flex justify-end gap-2 mt-4 border-t pt-4">
        <button
          onClick={() => onView(agent)}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full"
          aria-label="View details"
        >
          <Eye className="w-5 h-5" />
        </button>
        <button
          onClick={() => onEdit(agent)}
          className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full"
          aria-label="Edit agent"
        >
          <Edit2 className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(agent.id)}
          className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full"
          aria-label="Delete agent"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AgentCard;