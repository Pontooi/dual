import React, { useEffect } from 'react';
import { DualDevProvider, useDualDev } from './context/DualDevContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AcademiaPage } from './pages/AcademiaPage';
import { PlaygroundPage } from './pages/PlaygroundPage';
import { ConquistasPage } from './pages/ConquistasPage';
import { SobrePage } from './pages/SobrePage';

function AppContent() {
  const { activeTab } = useDualDev();

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'inicio':
        return <HomePage />;
      case 'academia':
        return <AcademiaPage />;
      case 'playground':
        return <PlaygroundPage />;
      case 'conquistas':
        return <ConquistasPage />;
      case 'sobre':
        return <SobrePage />;
      default:
        return <AcademiaPage />;
    }
  };

  return (
    <div className="dark min-h-screen flex flex-col bg-[#0b101b] text-slate-100 selection:bg-[#ffbe82]/30 selection:text-white relative overflow-x-hidden">
      {/* Luz ambiente difusa suave em tons pastéis */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-[#ffbe82]/10 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#9FD6F2]/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-[#6fb7db]/8 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col">
        {renderActiveTab()}
      </main>

      {/* Footer sutil */}
      <footer className="relative z-10 border-t border-slate-800/50 bg-[#0e1626]/50 py-3">
        <div className="mx-auto max-w-7xl px-4 text-center text-[11px] text-slate-600">
          DualDev Academy — Aprenda programação na prática. Execução 100% no navegador.
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <DualDevProvider>
      <AppContent />
    </DualDevProvider>
  );
}