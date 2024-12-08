import React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';

const HAIR_STYLES = ['normal', 'thick', 'mohawk', 'womanLong', 'womanShort'];
const FACIAL_HAIR_STYLES = ['none', 'stubble', 'mediumBeard'];
const COLORS = ['#FF9B42', '#4266F5', '#B642FF', '#42FFD2', '#FF4242'];

const AvatarConfig = ({ config, onChange }) => {
  const handleStyleChange = (key, value) => {
    const newConfig = genConfig({ 
      ...config,
      [key]: value 
    });
    onChange(newConfig);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-8">
        <div className="w-32 h-32">
          <Avatar className="w-full h-full" {...config} />
        </div>
        
        <div className="space-y-4 flex-1">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hair Style
            </label>
            <div className="grid grid-cols-2 gap-2">
              {HAIR_STYLES.map((style) => (
                <button
                  key={style}
                  onClick={() => handleStyleChange('hairStyle', style)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    config.hairStyle === style
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {style.charAt(0).toUpperCase() + style.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Facial Hair
            </label>
            <div className="grid grid-cols-2 gap-2">
              {FACIAL_HAIR_STYLES.map((style) => (
                <button
                  key={style}
                  onClick={() => handleStyleChange('faceStyle', style)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    config.faceStyle === style
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {style === 'none' ? 'None' : style.charAt(0).toUpperCase() + style.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Colors
            </label>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => handleStyleChange('bgColor', color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    config.bgColor === color
                      ? 'border-blue-500 scale-110'
                      : 'border-transparent hover:scale-105'
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarConfig;