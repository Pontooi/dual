import React, { useState } from 'react';
import { useDualDev } from '../context/DualDevContext';
import { Trophy, Zap, CheckCircle2, Lock, Terminal, Cpu, Layers, Database, Sparkles, CalendarCheck, Award, Target, Flame, RotateCcw } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<any>> = {
  Terminal,
  Cpu,
  Layers,
  Database,
  Sparkles,
  Trophy,
};

const CATEGORIES = [
  { id: 'all', label: 'Todas', icon: Award },
  { id: 'java', label: 'Java', icon: Award },
  { id: 'progress', label: 'Progresso', icon: Target },
];

export const ConquistasPage: React.FC = () => {
  const { achievements, userXp, userLevel, completedLessonIds, missions, levelProgress, resetAllProgress } = useDualDev();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const unlockedCount = achievements.filter((a) => a.unlockedAt).length;
  const nextLevelXpCeil = userLevel * 150;
  const completedMissionsCount = missions.filter((m) => m.completed).length;

  const filteredAchievements = achievements.filter((a) => {
    if (selectedCategory === 'all') return true;
    return a.category === selectedCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-[#0b101b]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffbe82]/10 text-[#ffbe82] border border-[#ffbe82]/25 text-xs font-medium mb-3">
            <Award className="h-3.5 w-3.5" />
            <span>Gamificação</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Central de Conquistas & Missões
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Acompanhe suas missões diárias, suba de nível e desbloqueie insígnias.
          </p>
        </div>

        <div>
          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="text-xs text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-900/50 px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reiniciar Progresso</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-[#141f30] p-1.5 rounded-md border border-rose-900/40 text-xs">
              <span className="text-slate-300">Zerar todos os dados?</span>
              <button
                onClick={() => {
                  resetAllProgress();
                  setShowResetConfirm(false);
                }}
                className="bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 px-2.5 py-1 rounded font-semibold transition-colors"
              >
                Confirmar
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="text-slate-400 hover:text-white px-2 py-1"
              >
                Cancelar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Nível */}
        <div className="aero-card p-5 space-y-3 bg-[#0f172a] relative overflow-hidden group">
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Flame className="h-5 w-5 text-[#ffbe82]/50" />
          </div>
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold relative z-10">
            <span className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-[#ffbe82]" />
              NÍVEL DO DESENVOLVEDOR
            </span>
            <span className="text-[#ffbe82] font-bold font-mono">Nv. {userLevel}</span>
          </div>
          <div className="flex items-baseline gap-2 relative z-10">
            <span className="text-4xl font-extrabold text-white">{userXp}</span>
            <span className="text-xs text-slate-400 font-mono">XP Total</span>
          </div>
          <div className="space-y-1 relative z-10">
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>Próximo nível (Nv. {userLevel + 1})</span>
              <span>{nextLevelXpCeil - userXp} XP restantes</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#ffbe82] via-[#6fb7db] to-[#9FD6F2] transition-all duration-500"
                style={{ width: `${levelProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Missões */}
        <div className="aero-card p-5 space-y-3 bg-[#0f172a] relative overflow-hidden group">
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Target className="h-5 w-5 text-[#6fb7db]/50" />
          </div>
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold relative z-10">
            <span className="flex items-center gap-1.5">
              <CalendarCheck className="h-3.5 w-3.5 text-[#9FD6F2]" />
              MISSÕES DIÁRIAS
            </span>
            <span className="text-[#9FD6F2] font-bold font-mono">{completedMissionsCount} / {missions.length}</span>
          </div>
          <div className="flex items-baseline gap-2 relative z-10">
            <span className="text-4xl font-extrabold text-white">{completedMissionsCount}</span>
            <span className="text-xs text-slate-400 font-mono">concluídas hoje</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden relative z-10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#9FD6F2] to-[#6fb7db] transition-all duration-500"
              style={{ width: `${(completedMissionsCount / missions.length) * 100}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400 relative z-10">
            Reinicia todos os dias com novas oportunidades de ganhar XP.
          </p>
        </div>

        {/* Insígnias */}
        <div className="aero-card p-5 space-y-3 bg-[#0f172a] relative overflow-hidden group">
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Trophy className="h-5 w-5 text-[#86efac]/50" />
          </div>
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold relative z-10">
            <span className="flex items-center gap-1.5">
              <Trophy className="h-3.5 w-3.5 text-[#86efac]" />
              INSÍGNIAS DESBLOQUEADAS
            </span>
            <span className="text-[#86efac] font-bold font-mono">{unlockedCount} / {achievements.length}</span>
          </div>
          <div className="flex items-baseline gap-2 relative z-10">
            <span className="text-4xl font-extrabold text-white">{unlockedCount}</span>
            <span className="text-xs text-slate-400 font-mono">conquistas</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden relative z-10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#86efac] to-[#34d399] transition-all duration-500"
              style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400 relative z-10">
            {completedLessonIds.length} lições completadas com êxito na plataforma.
          </p>
        </div>
      </div>

      {/* Missões do Dia */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#ffbe82]/15 flex items-center justify-center text-[#ffbe82]">
              <CalendarCheck className="h-4 w-4" />
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">Missões de Hoje</h2>
          </div>
          <span className="text-xs text-slate-400">Conclua para acumular XP extra</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {missions.map((m) => {
            const progressPct = Math.round((m.progress / m.target) * 100);
            return (
              <div
                key={m.id}
                className={`aero-card p-4 space-y-3 bg-[#0f172a} ${m.completed ? 'border-emerald-800/30 bg-emerald-950/10' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-xs text-slate-100">{m.title}</div>
                  <span className="text-xs font-mono font-medium text-[#ffbe82] flex items-center gap-0.5">
                    <Zap className="h-3 w-3 fill-[#ffbe82]" />
                    +{m.xpReward} XP
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{m.description}</p>
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Progresso</span>
                    <span>{m.progress}/{m.target}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        m.completed ? 'bg-[#86efac]' : 'bg-gradient-to-r from-[#ffbe82] to-[#6fb7db]'
                      }`}
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
                {m.completed && (
                  <div className="pt-2 border-t border-slate-800/50">
                    <span className="text-[11px] font-medium text-[#86efac] flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Missão concluída! +{m.xpReward} XP recebido
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Galeria de Insígnias */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#9FD6F2]/15 flex items-center justify-center text-[#9FD6F2]">
              <Trophy className="h-4 w-4" />
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">Galeria de Insígnias</h2>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-[#141f30] text-[#9FD6F2] border border-[#9FD6F2]/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {filteredAchievements.length === 0 ? (
          <div className="aero-card p-8 text-center">
            <Lock className="h-12 w-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-sm font-semibold text-white mb-1">Nenhuma insígnia nesta categoria</h3>
            <p className="text-xs text-slate-400">Complete lições e missões para desbloquear conquistas.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAchievements.map((ach) => {
              const Icon = ICON_MAP[ach.icon] || Trophy;
              const isUnlocked = !!ach.unlockedAt;

              return (
                <div
                  key={ach.id}
                  className={`aero-card p-4 flex items-start gap-3.5 transition-all bg-[#0f172a] ${isUnlocked ? '' : 'opacity-50'} relative overflow-hidden group`}
                >
                  {/* Badge de categoria */}
                  <div className="absolute top-2 right-2 text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/30 text-slate-500 uppercase tracking-wider">
                    {ach.category}
                  </div>

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${isUnlocked
                      ? 'bg-emerald-950/40 text-[#86efac] border border-emerald-800/60'
                      : 'bg-slate-800 text-slate-500 border border-slate-700'}`}
                  >
                    {isUnlocked ? <Icon className="h-5 w-5" /> : <Lock className="h-4 w-4" />}
                  </div>

                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-xs font-bold text-white truncate">{ach.title}</h3>
                      <span className="text-[10px] font-mono font-medium text-[#ffbe82] bg-[#ffbe82]/10 border border-[#ffbe82]/25 px-1.5 py-0.2 rounded shrink-0">
                        +{ach.xpReward} XP
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{ach.description}</p>
                    <div className="pt-1 text-[10px] font-mono">
                      {isUnlocked ? (
                        <span className="text-[#86efac] flex items-center gap-1 font-medium">
                          <CheckCircle2 className="h-3 w-3" />
                          Desbloqueada em {ach.unlockedAt ? new Date(ach.unlockedAt).toLocaleDateString('pt-BR') : '—'}
                        </span>
                      ) : (
                        <span className="text-slate-500 flex items-center gap-1">
                          <Lock className="h-3 w-3" />
                          Bloqueada — Complete os requisitos para desbloquear
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};