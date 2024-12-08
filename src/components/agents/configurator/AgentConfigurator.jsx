import React, { useState } from 'react';
import { genConfig } from 'react-nice-avatar';
import AvatarConfig from './AvatarConfig';
import BasicInfo from './BasicInfo';
import StrategyConfig from './StrategyConfig';

const defaultAgent = {
  name: '',
  avatar: genConfig({
    hairStyle: 'normal',
    faceStyle: 'none',
    bgColor: '#FF9B42'
  }),
  channels: [],
  strategy: {
    goals: '',
    tone: 'friendly',
    targets: {
      markets: [],
      segments: [],
      users: [],
      hashtags: [],
    },
    triggers: [],
    glossary: [],
  },
};

const AgentConfigurator = ({ agent, onSave, onCancel }) => {
  const [currentAgent, setCurrentAgent] = useState(agent || defaultAgent);

  const handleAvatarChange = (newAvatar) => {
    setCurrentAgent((prev) => ({
      ...prev,
      avatar: newAvatar,
    }));
  };

  const handleBasicInfoChange = (newInfo) => {
    setCurrentAgent((prev) => ({
      ...prev,
      ...newInfo,
    }));
  };

  const handleStrategyChange = (newStrategy) => {
    setCurrentAgent((prev) => ({
      ...prev,
      strategy: newStrategy,
    }));
  };

  const handleSave = () => {
    onSave(currentAgent);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <BasicInfo data={currentAgent} onChange={handleBasicInfoChange} />
          <StrategyConfig strategy={currentAgent.strategy} onChange={handleStrategyChange} />
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Avatar Customization</h3>
          <AvatarConfig config={currentAgent.avatar} onChange={handleAvatarChange} />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8 pt-4 border-t">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Agent
        </button>
      </div>
    </div>
  );
};

export default AgentConfigurator;