import React, { useState } from 'react';
import AgentGrid from './components/agents/AgentGrid';
import AgentModal from './components/agents/AgentModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [selectedAgent, setSelectedAgent] = useState(null);

  const handleCreateAgent = () => {
    setModalMode('create');
    setSelectedAgent(null);
    setIsModalOpen(true);
  };

  const handleEditAgent = (agent) => {
    setModalMode('edit');
    setSelectedAgent(agent);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            AI Agent Manager
          </h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <AgentGrid 
          onCreateAgent={handleCreateAgent}
          onEditAgent={handleEditAgent}
        />
        <AgentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          mode={modalMode}
          agent={selectedAgent}
        />
      </main>
    </div>
  );
}

export default App;