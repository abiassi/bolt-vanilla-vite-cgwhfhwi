import React from 'react';
import { 
  MARKET_OPTIONS, 
  SEGMENT_OPTIONS, 
  TRIGGER_OPTIONS,
  GOAL_OPTIONS,
  GLOSSARY_TERMS
} from '../../../lib/constants/agentConfig';

const StrategyConfig = ({ strategy, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...strategy,
      [field]: value,
    });
  };

  const handleArrayToggle = (field, item) => {
    const currentArray = strategy[field] || [];
    const newArray = currentArray.includes(item)
      ? currentArray.filter(i => i !== item)
      : [...currentArray, item];
    handleChange(field, newArray);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Primary Goal
        </label>
        <select
          value={strategy.goals}
          onChange={(e) => handleChange('goals', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a goal...</option>
          {GOAL_OPTIONS.map(({ id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
        {strategy.goals && (
          <p className="mt-1 text-sm text-gray-500">
            {GOAL_OPTIONS.find(g => g.id === strategy.goals)?.description}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Target Markets
        </label>
        <div className="flex flex-wrap gap-2">
          {MARKET_OPTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleArrayToggle('markets', label)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                (strategy.targets?.markets || []).includes(label)
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
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Target Segments
        </label>
        <div className="flex flex-wrap gap-2">
          {SEGMENT_OPTIONS.map(({ id, label, description }) => (
            <button
              key={id}
              onClick={() => handleArrayToggle('segments', label)}
              title={description}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                (strategy.targets?.segments || []).includes(label)
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
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Triggers
        </label>
        <div className="flex flex-wrap gap-2">
          {TRIGGER_OPTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleArrayToggle('triggers', label)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                (strategy.triggers || []).includes(label)
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
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Glossary Terms
        </label>
        <div className="grid grid-cols-2 gap-2">
          {GLOSSARY_TERMS.map(({ id, label, description }) => (
            <button
              key={id}
              onClick={() => handleArrayToggle('glossary', id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                (strategy.glossary || []).includes(id)
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="font-medium">{label}</div>
              <div className="text-xs mt-1 opacity-75">{description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrategyConfig;