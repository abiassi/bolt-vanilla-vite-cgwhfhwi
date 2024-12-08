import React from 'react';
import { AVAILABLE_CHANNELS, TONE_OPTIONS } from '../../../lib/constants/agentConfig';

const BasicInfo = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  const handleChannelToggle = (channel) => {
    const channels = data.channels.includes(channel)
      ? data.channels.filter(c => c !== channel)
      : [...data.channels, channel];
    handleChange('channels', channels);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter agent name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Channels
        </label>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_CHANNELS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleChannelToggle(label)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                data.channels.includes(label)
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tone of Voice
        </label>
        <select
          value={data.strategy.tone}
          onChange={(e) => handleChange('strategy', { ...data.strategy, tone: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {TONE_OPTIONS.map(({ id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BasicInfo;