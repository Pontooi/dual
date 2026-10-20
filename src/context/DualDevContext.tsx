import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { TrackId, Lesson, Mission, Achievement } from '../types';
import { allLessons, getLessonsByTrack } from '../data/lessons';
import { initialMissions } from '../data/missions';
import { initialAchievements } from '../data/achievements';

export type ThemeMode = 'dark';

interface DualDevContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  activeTab: 'inicio' | 'academia' | 'playground' | 'conquistas' | 'sobre';
  setActiveTab: (tab: 'inicio' | 'academia' | 'playground' | 'conquistas' | 'sobre') => void;
  currentTrackId: TrackId;
  setCurrentTrackId: (id: TrackId) => void;
  currentLessonId: string;
  setCurrentLessonId: (id: string) => void;
  currentLesson: Lesson;
  userXp: number;
  userLevel: number;
  streak: number;
  completedLessonIds: string[];
  codeDrafts: Record<string, string>;
  saveDraft: (lessonId: string, code: string) => void;
  resetDraft: (lessonId: string) => void;
  completeLesson: (lessonId: string) => void;
  missions: Mission[];
  achievements: Achievement[];
  recordCodeExecution: (trackId: TrackId) => void;
  nextLesson: () => void;
  prevLesson: () => void;
  resetAllProgress: () => void;
  trackProgress: { completed: number; total: number; percent: number };
  levelProgress: number;
}

const DualDevContext = createContext<DualDevContextType | undefined>(undefined);

function getSafeItem<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
}

function getSafeNumber(key: string, fallback: number): number {
  try {
    const saved = localStorage.getItem(key);
    if (!saved) return fallback;
    const n = parseInt(saved, 10);
    return isNaN(n) ? fallback : n;
  } catch {
    return fallback;
  }
}

export const DualDevProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme] = useState<ThemeMode>('dark');
  const toggleTheme = useCallback(() => {}, []);

  const [activeTab, setActiveTab] = useState<'inicio' | 'academia' | 'playground' | 'conquistas' | 'sobre'>('academia');
  const [currentTrackId, setCurrentTrackId] = useState<TrackId>('java');
  const [currentLessonId, setCurrentLessonId] = useState<string>('java-intro');

  // Inicialização limpa oficial (0 XP, 0 lições concluídas, nível 1)
  const [userXp, setUserXp] = useState<number>(() => getSafeNumber('dualdev_xp', 0));
  const [streak, setStreak] = useState<number>(() => getSafeNumber('dualdev_streak', 0));
  const userLevel = Math.floor(userXp / 150) + 1;

  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(() =>
    getSafeItem<string[]>('dualdev_completed_lessons', [])
  );

  const [codeDrafts, setCodeDrafts] = useState<Record<string, string>>(() =>
    getSafeItem<Record<string, string>>('dualdev_code_drafts', {})
  );

  const [missions, setMissions] = useState<Mission[]>(() =>
    getSafeItem<Mission[]>('dualdev_missions', initialMissions)
  );

  const [achievements, setAchievements] = useState<Achievement[]>(() =>
    getSafeItem<Achievement[]>('dualdev_achievements', initialAchievements)
  );

  // Inicialização do tema escuro no DOM e reset limpo de dados prévios de teste
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    try {
      localStorage.setItem('dualdev_theme', 'dark');
      const isClean = localStorage.getItem('dualdev_clean_release_v1');
      if (isClean !== 'true') {
        localStorage.removeItem('dualdev_xp');
        localStorage.removeItem('dualdev_completed_lessons');
        localStorage.removeItem('dualdev_code_drafts');
        localStorage.removeItem('dualdev_missions');
        localStorage.removeItem('dualdev_achievements');
        localStorage.removeItem('dualdev_streak');
        localStorage.setItem('dualdev_clean_release_v1', 'true');
        setUserXp(0);
        setStreak(0);
        setCompletedLessonIds([]);
        setCodeDrafts({});
        setMissions(initialMissions);
        setAchievements(initialAchievements);
      }
    } catch {}
  }, []);

  // Persistência com sincronização atômica no localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dualdev_xp', userXp.toString());
      localStorage.setItem('dualdev_streak', streak.toString());
      localStorage.setItem('dualdev_completed_lessons', JSON.stringify(completedLessonIds));
      localStorage.setItem('dualdev_code_drafts', JSON.stringify(codeDrafts));
      localStorage.setItem('dualdev_missions', JSON.stringify(missions));
      localStorage.setItem('dualdev_achievements', JSON.stringify(achievements));
    } catch {}
  }, [userXp, streak, completedLessonIds, codeDrafts, missions, achievements]);

  // Lição ativa memoizada
  const currentLesson = useMemo(() => {
    return (
      allLessons.find((l) => l.id === currentLessonId) ||
      getLessonsByTrack(currentTrackId)[0] ||
      allLessons[0]
    );
  }, [currentLessonId, currentTrackId]);

  // Seletores derivados
  const trackProgress = useMemo(() => {
    const trackLessons = getLessonsByTrack(currentTrackId);
    const completed = trackLessons.filter((l) => completedLessonIds.includes(l.id)).length;
    const total = trackLessons.length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percent };
  }, [currentTrackId, completedLessonIds]);

  const levelProgress = useMemo(() => {
    const floor = (userLevel - 1) * 150;
    return Math.min(100, Math.round(((userXp - floor) / 150) * 100));
  }, [userLevel, userXp]);

  const saveDraft = useCallback((lessonId: string, code: string) => {
    setCodeDrafts((prev) => ({ ...prev, [lessonId]: code }));
  }, []);

  const resetDraft = useCallback((lessonId: string) => {
    setCodeDrafts((prev) => {
      const copy = { ...prev };
      delete copy[lessonId];
      return copy;
    });
  }, []);

  const resetAllProgress = useCallback(() => {
    try {
      localStorage.removeItem('dualdev_xp');
      localStorage.removeItem('dualdev_streak');
      localStorage.removeItem('dualdev_completed_lessons');
      localStorage.removeItem('dualdev_code_drafts');
      localStorage.removeItem('dualdev_missions');
      localStorage.removeItem('dualdev_achievements');
      localStorage.setItem('dualdev_clean_release_v1', 'true');
    } catch {}
    setUserXp(0);
    setStreak(0);
    setCompletedLessonIds([]);
    setCodeDrafts({});
    setMissions(initialMissions);
    setAchievements(initialAchievements);
  }, []);

  const completeLesson = useCallback((lessonId: string) => {
    const target = allLessons.find((l) => l.id === lessonId);
    if (!target) return;

    setCompletedLessonIds((prev) => {
      if (prev.includes(lessonId)) return prev;

      setUserXp((xp) => xp + target.xp);

      setMissions((curMissions) =>
        curMissions.map((m) => {
          if (m.type === 'complete_lesson' || m.id === 'm-class-main') {
            const nextProgress = m.progress + 1;
            const completed = nextProgress >= m.target;
            if (completed && !m.completed) setUserXp((xp) => xp + m.xpReward);
            return { ...m, progress: nextProgress, completed };
          }
          return m;
        })
      );

      setAchievements((curAchievements) => {
        const nextCount = prev.length + 1;
        return curAchievements.map((a) => {
          if (a.id === 'ach-first-step' && !a.unlockedAt) {
            return { ...a, unlockedAt: new Date().toISOString() };
          }
          if (a.id === 'ach-java-main' && lessonId === 'java-class-main' && !a.unlockedAt) {
            return { ...a, unlockedAt: new Date().toISOString() };
          }
          return a;
        });
      });

      return [...prev, lessonId];
    });
  }, []);

  const recordCodeExecution = useCallback((_trackId: TrackId) => {
    setMissions((prev) =>
      prev.map((m) => {
        if (m.type === 'run_code' || m.id === 'm-run-java') {
          const nextProgress = m.progress + 1;
          const completed = nextProgress >= m.target;
          if (completed && !m.completed) setUserXp((xp) => xp + m.xpReward);
          return { ...m, progress: nextProgress, completed };
        }
        return m;
      })
    );
  }, []);

  const nextLesson = useCallback(() => {
    const trackLessons = getLessonsByTrack(currentTrackId);
    const idx = trackLessons.findIndex((l) => l.id === currentLessonId);
    if (idx >= 0 && idx < trackLessons.length - 1) {
      setCurrentLessonId(trackLessons[idx + 1].id);
    }
  }, [currentTrackId, currentLessonId]);

  const prevLesson = useCallback(() => {
    const trackLessons = getLessonsByTrack(currentTrackId);
    const idx = trackLessons.findIndex((l) => l.id === currentLessonId);
    if (idx > 0) {
      setCurrentLessonId(trackLessons[idx - 1].id);
    }
  }, [currentTrackId, currentLessonId]);

  return (
    <DualDevContext.Provider
      value={{
        theme,
        toggleTheme,
        activeTab,
        setActiveTab,
        currentTrackId,
        setCurrentTrackId,
        currentLessonId,
        setCurrentLessonId,
        currentLesson,
        userXp,
        userLevel,
        streak,
        completedLessonIds,
        codeDrafts,
        saveDraft,
        resetDraft,
        completeLesson,
        missions,
        achievements,
        recordCodeExecution,
        nextLesson,
        prevLesson,
        resetAllProgress,
        trackProgress,
        levelProgress,
      }}
    >
      {children}
    </DualDevContext.Provider>
  );
};

export const useDualDev = () => {
  const context = useContext(DualDevContext);
  if (!context) {
    throw new Error('useDualDev deve ser utilizado dentro de um DualDevProvider');
  }
  return context;
};
