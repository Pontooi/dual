import React from 'react';
import { useDualDev } from '../context/DualDevContext';
import { tracks } from '../data/tracks';
import { LanguageIcon } from './LanguageIcon';
import {
  BookOpen,
  Zap,
  Trophy,
  Info,
  Terminal,
  Compass,
  Award,
  Code2,
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'inicio' as const, label: 'Início', icon: Compass, href: '#' },
  { id: 'academia' as const, label: 'Academia', icon: BookOpen },
  { id: 'playground' as const, label: 'Playground', icon: Terminal },
  { id: 'conquistas' as const, label: 'Conquistas', icon: Trophy },
  { id: 'sobre' as const, label: 'Sobre', icon: Info },
];

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    userXp,
    userLevel,
    currentTrackId,
    setCurrentTrackId,
  } = useDualDev();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0e1626]/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logotipo e Identidade DualDev */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveTab('inicio')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            aria-label="Ir para a página inicial"
          >
            {/* Emblema SVG com gradiente Dark Pastel */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#141f35] border border-[#ffbe82]/30 shadow-xs transition-all duration-200 group-hover:scale-105 group-hover:border-[#6fb7db]">
              <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11L5 16L10 21" stroke="#ffbe82" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 9L14 23" stroke="url(#nav-slash)" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M22 11L27 16L22 21" stroke="#6fb7db" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="nav-slash" x1="18" y1="9" x2="14" y2="23" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffbe82" />
                    <stop offset="1" stopColor="#6fb7db" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="font-bold tracking-tight text-white text-base">
                Dual<span className="text-[#ffbe82]">Dev</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-[#9FD6F2] px-2 py-0.5 rounded-md bg-[#9FD6F2]/10 border border-[#9FD6F2]/25">
                Academy
              </span>
            </div>
          </button>

          {/* Links de Navegação Principal */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Navegação principal">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#1a2638] text-white border border-[#9FD6F2]/30 shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Controles de Linguagem e Indicador de XP */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Seletor Rápido de Linguagem */}
          <div className="relative flex items-center hidden sm:block">
            <div className="absolute left-2.5 pointer-events-none">
              <LanguageIcon trackId={currentTrackId} className="w-3.5 h-3.5" />
            </div>
            <select
              value={currentTrackId}
              onChange={(e) => setCurrentTrackId(e.target.value as any)}
              className="appearance-none bg-[#131d2e] border border-slate-700/80 hover:border-slate-600 text-slate-200 text-xs font-medium py-1.5 pl-8 pr-6 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffbe82]/40 transition-all"
              aria-label="Selecionar linguagem de programação"
            >
              {tracks.map((t) => (
                <option key={t.id} value={t.id} className="bg-[#0e1626]">
                  {t.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-[9px]">
              ▼
            </div>
          </div>

          {/* Indicador de XP e Nível */}
          <div
            title={`Nível ${userLevel} • ${userXp} Pontos de Experiência`}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#131d2e] border border-[#ffbe82]/30 text-slate-200 text-xs font-medium"
          >
            <Zap className="h-3.5 w-3.5 fill-[#ffbe82] text-[#ffbe82]" />
            <span className="font-mono font-semibold text-white">{userXp} XP</span>
            <span className="text-slate-600">|</span>
            <span className="font-mono font-semibold text-slate-400">Nv. {userLevel}</span>
          </div>

          {/* Versão mobile do XP */}
          <div className="sm:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#131d2e] border border-[#ffbe82]/30">
            <Zap className="h-3.5 w-3.5 fill-[#ffbe82] text-[#ffbe82]" />
            <span className="font-mono font-semibold text-white text-xs">{userXp} XP</span>
            <span className="text-slate-600 text-xs">|</span>
            <span className="font-mono font-semibold text-slate-400 text-xs">Nv. {userLevel}</span>
          </div>
        </div>
      </div>

      {/* Sub-barra móvel para telas menores */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-800 bg-[#0e1626] px-2 py-1.5">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex flex-col items-center py-1 text-[11px] transition-colors ${
              activeTab === id ? 'text-[#ffbe82] font-semibold' : 'text-slate-400'
            }`}
          >
            <Icon className="h-4 w-4 mb-0.5" />
            {label}
          </button>
        ))}
      </div>
    </header>
  );
};