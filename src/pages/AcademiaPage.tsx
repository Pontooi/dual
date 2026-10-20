import React, { useState, useEffect } from 'react';
import { useDualDev } from '../context/DualDevContext';
import { useCodeRunner } from '../hooks/useCodeRunner';
import { tracks } from '../data/tracks';
import { getLessonsByTrack } from '../data/lessons';
import { CodeEditor } from '../components/CodeEditor';
import { ConsoleOutput } from '../components/ConsoleOutput';
import { TheoryPanel } from '../components/TheoryPanel';
import { LanguageIcon } from '../components/LanguageIcon';
import { CheckCircle2, Circle, Menu, X, Play, Zap, ArrowRight, ArrowLeft } from 'lucide-react';

export const AcademiaPage: React.FC = () => {
  const {
    currentTrackId,
    setCurrentTrackId,
    currentLessonId,
    setCurrentLessonId,
    currentLesson,
    completedLessonIds,
    codeDrafts,
    saveDraft,
    resetDraft,
    completeLesson,
    recordCodeExecution,
    nextLesson,
    prevLesson,
    trackProgress,
  } = useDualDev();

  const trackLessons = getLessonsByTrack(currentTrackId);
  const currentTrack = tracks.find((t) => t.id === currentTrackId) || tracks[0];

  const [editorCode, setEditorCode] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth >= 1280 : false;
  });

  // Hook modular desacoplado para execução de código
  const {
    executionResult,
    testResults,
    isRunning,
    isTesting,
    activeConsoleTab,
    setActiveConsoleTab,
    runCode,
    testChallenge,
    clearOutput,
  } = useCodeRunner(recordCodeExecution);

  // Sincroniza rascunho de código ao trocar de lição
  useEffect(() => {
    if (currentLesson) {
      const savedCode = codeDrafts[currentLesson.id];
      setEditorCode(savedCode !== undefined ? savedCode : currentLesson.initialCode);
      clearOutput();
      setActiveConsoleTab('output');
    }
  }, [currentLesson?.id, clearOutput, setActiveConsoleTab]);

  const handleCodeChange = (newCode: string) => {
    setEditorCode(newCode);
    if (currentLesson) saveDraft(currentLesson.id, newCode);
  };

  const handleRun = () => {
    if (!currentLesson) return;
    runCode(currentTrackId, editorCode);
  };

  const handleTest = () => {
    if (!currentLesson) return;
    testChallenge(currentTrackId, editorCode, currentLesson, completeLesson);
  };

  const handleReset = () => {
    if (!currentLesson) return;
    setEditorCode(currentLesson.initialCode);
    resetDraft(currentLesson.id);
    clearOutput();
  };

  const handleLoadSolution = () => {
    if (!currentLesson) return;
    setEditorCode(currentLesson.solutionCode);
    saveDraft(currentLesson.id, currentLesson.solutionCode);
  };

  const currentIdx = trackLessons.findIndex((l) => l.id === currentLesson?.id);
  const hasNext = currentIdx >= 0 && currentIdx < trackLessons.length - 1;
  const hasPrev = currentIdx > 0;
  const isCurrentCompleted = currentLesson ? completedLessonIds.includes(currentLesson.id) : false;

  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)] bg-[#0b101b]">
      {/* Barra de Seleção de Trilhas e Controles */}
      <div className="border-b border-slate-800/80 bg-[#0e1626]/95 px-4 py-2 flex items-center justify-between backdrop-blur-md gap-4">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-1 min-w-0">
          {tracks.map((t) => {
            const isSelected = t.id === currentTrackId;
            return (
              <button
                key={t.id}
                onClick={() => setCurrentTrackId(t.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? 'bg-[#6fb7db] text-slate-950 font-semibold shadow-xs'
                    : 'bg-[#131d2e] border border-slate-700/80 text-slate-300 hover:bg-[#1a2638] hover:text-white'
                }`}
              >
                <LanguageIcon trackId={t.id} className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate max-w-[100px]">{t.name}</span>
                {isSelected && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/20 font-bold text-slate-950">
                    {trackProgress.percent}%
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Atalhos rápidos */}
        <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-500 font-mono">
          <span className="flex items-center gap-1">
            <Play className="h-3 w-3 text-[#ffbe82]" />
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">Ctrl+Enter</kbd>
          </span>
          <span className="flex items-center gap-1">
            <Zap className="h-3 w-3 text-[#6fb7db]" />
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">Tab</kbd>
          </span>
        </div>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          title={isSidebarOpen ? 'Recolher exercícios' : 'Expandir exercícios'}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all shrink-0 ${
            isSidebarOpen
              ? 'bg-[#141f30] text-[#9FD6F2] hover:bg-[#1a2a40] border border-slate-700/80'
              : 'aero-btn-primary'
          }`}
        >
          <Menu className="h-3.5 w-3.5" />
          <span>{isSidebarOpen ? 'Recolher' : 'Exercícios'}</span>
        </button>
      </div>

      {/* Workspace Principal */}
      <div className="flex-1 flex overflow-hidden">
        {/* Painel Lateral Retrátil de Exercícios */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-30 bg-[#0e1626] border-r border-slate-800/80 flex flex-col transition-all duration-200 ease-out shadow-md lg:shadow-none
            top-14 lg:top-0 h-[calc(100vh-3.5rem)]
            ${isSidebarOpen
              ? 'w-64 translate-x-0 opacity-100'
              : 'w-0 -translate-x-full lg:w-0 lg:translate-x-0 opacity-0 pointer-events-none border-r-0 overflow-hidden'
            }
          `}
        >
          <div className="p-3.5 border-b border-slate-800/80 shrink-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 min-w-0">
                <LanguageIcon trackId={currentTrack.id} className="w-3.5 h-3.5 shrink-0" />
                <span className="text-xs font-semibold text-white truncate">
                  Trilha {currentTrack.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-xs text-slate-400 font-mono">
                  {trackProgress.completed}/{trackProgress.total}
                </span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#6fb7db] transition-all duration-300"
                style={{ width: `${trackProgress.percent}%` }}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {trackLessons.map((lesson) => {
              const isSelected = lesson.id === currentLesson?.id;
              const isDone = completedLessonIds.includes(lesson.id);

              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setCurrentLessonId(lesson.id);
                    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                      setIsSidebarOpen(false);
                    }
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-md text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-[#152236] text-[#9FD6F2] font-semibold border-l-2 border-[#6fb7db]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    {isDone ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#86efac] shrink-0" />
                    ) : (
                      <Circle className="h-3.5 w-3.5 text-slate-600 shrink-0" />
                    )}
                    <span className="truncate">{lesson.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 shrink-0">
                    +{lesson.xp}XP
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-3 border-t border-slate-800/80 text-[11px] text-slate-500">
            {trackProgress.completed} de {trackProgress.total} lições concluídas
          </div>
        </aside>

        {/* Grade Central: Teoria | Editor | Console */}
        <div className="flex-1 flex flex-col xl:flex-row gap-3 p-3 lg:p-4 overflow-y-auto bg-[#0b101b]">
          {/* Painel de Teoria - Esquerda */}
          <div className="w-full xl:w-[40%] h-[520px] xl:h-auto min-h-[460px]">
            {currentLesson ? (
              <TheoryPanel
                lesson={currentLesson}
                isCompleted={isCurrentCompleted}
                onNext={nextLesson}
                onPrev={prevLesson}
                hasNext={hasNext}
                hasPrev={hasPrev}
                onLoadSolution={handleLoadSolution}
              />
            ) : (
              <div className="aero-card h-full flex flex-col items-center justify-center p-8">
                <div className="text-center space-y-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#141f30] text-[#6fb7db] mx-auto">
                    <Play className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Selecione uma lição</h3>
                  <p className="text-sm text-slate-400">Escolha um exercício na barra lateral para começar.</p>
                </div>
              </div>
            )}
          </div>

          {/* Painel Direito: Editor + Console */}
          <div className="w-full xl:w-[60%] flex flex-col gap-3 min-h-[580px] xl:h-auto">
            {/* Editor */}
            <div className="flex-1 min-h-[360px]">
              <CodeEditor
                code={editorCode}
                onChange={handleCodeChange}
                onRun={handleRun}
                onTest={handleTest}
                onReset={handleReset}
                trackId={currentTrackId}
                isRunning={isRunning}
                isTesting={isTesting}
              />
            </div>

            {/* Console */}
            <div className="h-60 min-h-[200px]">
              <ConsoleOutput
                result={executionResult}
                testResults={testResults}
                onClear={clearOutput}
                activeSubTab={activeConsoleTab}
                setActiveSubTab={setActiveConsoleTab}
              />
            </div>
          </div>
        </div>

        {/* Overlay para fechar sidebar no mobile */}
        {isSidebarOpen && typeof window !== 'undefined' && window.innerWidth < 1024 && (
          <div
            className="fixed inset-0 z-20 bg-black/50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};