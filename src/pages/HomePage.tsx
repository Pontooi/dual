import React from 'react';
import { useDualDev } from '../context/DualDevContext';
import { tracks } from '../data/tracks';
import { getLessonsByTrack } from '../data/lessons';
import { LanguageIcon } from '../components/LanguageIcon';
import { TrackId } from '../types';
import { Play, ArrowRight, CheckCircle2, Sparkles, Code2, Cpu, Layers, Database, Check, Trophy, Zap, BookOpen, Terminal, Flag } from 'lucide-react';

const TRACK_HERO: Record<TrackId, { highlight: string; headline: string; description: string }> = {
  java: {
    highlight: 'Java',
    headline: 'e programação orientada a objetos na prática.',
    description: 'Classes, método main, métodos estáticos tipados e manipulação de arrays e strings com feedback instantâneo.',
  },
  python: {
    highlight: 'Python',
    headline: 'e a sintaxe limpa de automação, scripts e algoritmos.',
    description: 'Controle de fluxo com if/elif/else, listas dinâmicas, laços for in e funções reutilizáveis sem complicação.',
  },
  javascript: {
    highlight: 'JavaScript',
    headline: 'e o ecossistema moderno da Web interativa.',
    description: 'Variáveis com escopo seguro (let/const), template literals, arrow functions, programação funcional e objetos.',
  },
  html: {
    highlight: 'HTML5',
    headline: 'e a estruturação semântica e acessível da Web.',
    description: 'Páginas estruturadas com cabeçalhos semânticos, menus de navegação, formulários interativos e mídias acessíveis.',
  },
  css: {
    highlight: 'CSS3',
    headline: 'e o design responsivo de interfaces modernas.',
    description: 'Box Model, alinhamentos com Flexbox, layouts com CSS Grid, tipografia moderna e microinterações fluidas.',
  },
};

const CATEGORY_ICONS: Record<string, React.FC<any>> = {
  Fundamentos: Cpu,
  'Estrutura Básica': Cpu,
  'Estruturação Web': Layers,
  'Estruturas de Dados': Database,
  'Controle de Fluxo': Layers,
  Funções: Layers,
  Layout: Layers,
};

const FEATURES = [
  {
    icon: Zap,
    title: 'Execução Instantânea',
    description: 'Código roda no navegador em milissegundos, sem necessidade de instalar compiladores ou configurar ambientes.',
    color: 'text-[#ffbe82]',
    bg: 'bg-[#ffbe82]/10',
  },
  {
    icon: BookOpen,
    title: 'Aprendizado Guiado',
    description: 'Trilhas estruturadas com teoria, exemplos práticos e validação automática de cada exercício.',
    color: 'text-[#6fb7db]',
    bg: 'bg-[#6fb7db]/10',
  },
  {
    icon: Terminal,
    title: 'Terminal Real',
    description: 'Saída de console autêntica com cores, erros formatados e medição de tempo de execução.',
    color: 'text-[#9FD6F2]',
    bg: 'bg-[#9FD6F2]/10',
  },
  {
    icon: Flag,
    title: 'Gamificação Completa',
    description: 'XP, níveis, missões diárias, conquistas e streak para manter a motivação nos estudos.',
    color: 'text-[#86efac]',
    bg: 'bg-[#86efac]/10',
  },
];

export const HomePage: React.FC = () => {
  const { setActiveTab, currentTrackId, setCurrentTrackId, setCurrentLessonId, completedLessonIds } = useDualDev();
  const currentTrack = tracks.find((t) => t.id === currentTrackId) || tracks[0];
  const activeTrackLessons = getLessonsByTrack(currentTrackId);
  const heroInfo = TRACK_HERO[currentTrackId] || TRACK_HERO.java;

  const handleSelectTrack = (trackId: TrackId) => {
    setCurrentTrackId(trackId);
    const trackLessons = getLessonsByTrack(trackId);
    if (trackLessons.length > 0) setCurrentLessonId(trackLessons[0].id);
  };

  const handleEnterAcademia = (lessonId?: string) => {
    if (lessonId) {
      setCurrentLessonId(lessonId);
    } else if (activeTrackLessons.length > 0) {
      setCurrentLessonId(activeTrackLessons[0].id);
    }
    setActiveTab('academia');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Banner Hero - Versão Profissional */}
      <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-[#0f172a] to-[#0e1626] p-8 sm:p-12 overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#ffbe82]/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-32 w-32 rounded-full bg-[#6fb7db]/5 blur-3xl" />
        </div>

        <div className="relative max-w-2xl space-y-6">
          {/* Badge de trilha ativa */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#9FD6F2]/10 text-[#9FD6F2] border border-[#9FD6F2]/25 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-[#ffbe82]" />
            <span>Trilha <span className="font-bold">{currentTrack.name}</span> selecionada</span>
          </div>

          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Domine <span className="text-[#ffbe82]">{heroInfo.highlight}</span> {heroInfo.headline}
          </h1>

          {/* Descrição */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
            {heroInfo.description}
          </p>

          {/* Estatísticas rápidas da trilha */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-800/50">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Code2 className="h-3.5 w-3.5 text-[#6fb7db]" />
              <span>{activeTrackLessons.length} exercícios práticos</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Trophy className="h-3.5 w-3.5 text-[#ffbe82]" />
              <span>{currentTrack.totalXp} XP total disponível</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Zap className="h-3.5 w-3.5 text-[#86efac]" />
              <span>Execução < 25ms</span>
            </div>
          </div>

          {/* Botões de ação principal */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleEnterAcademia()}
              className="aero-btn-primary px-6 py-3 text-sm shadow-lg group"
            >
              <Play className="h-4 w-4 mr-2 fill-slate-950 group-hover:translate-x-0.5 transition-transform" />
              <span>Acessar Academia {currentTrack.name}</span>
            </button>

            <button
              onClick={() => setActiveTab('playground')}
              className="aero-btn-glass px-6 py-3 text-sm group"
            >
              <Code2 className="h-4 w-4 mr-2 text-[#9FD6F2] group-hover:translate-x-0.5 transition-transform" />
              <span>Playground Livre</span>
            </button>

            <button
              onClick={() => setActiveTab('conquistas')}
              className="aero-btn-glass px-5 py-3 text-sm group"
            >
              <Trophy className="h-4 w-4 mr-1.5 text-[#ffbe82] group-hover:translate-x-0.5 transition-transform" />
              <span>Missões & Conquistas</span>
            </button>
          </div>
        </div>

        {/* Ilustração lateral do hero */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-72 h-72">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ffbe82]/10 via-transparent to-[#6fb7db]/10 rounded-2xl blur-xl" />
            <div className="relative w-full h-full bg-[#09101a] rounded-xl border border-slate-800/50 p-4 font-mono text-xs text-slate-300 overflow-hidden">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <pre className="leading-relaxed text-slate-400"><code>{`// Exemplo: Java
public class Main {
    public static void main(
        String[] args) {
        System.out.println(
            "Olá, DualDev!");
    }
}`}
</code></pre>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Diferenciais */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Por que o DualDev?</h2>
            <p className="text-xs text-slate-400 mt-0.5">Tudo que você precisa para aprender programação na prática</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="aero-card p-5 transition-all hover:border-[#6fb7db] group"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${feature.bg} border border-transparent group-hover:border-current/20 transition-all`}>
                  <Icon className={`h-5 w-5 ${feature.color}`} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-white">{feature.title}</h3>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Destaques da Trilha Ativa */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Destaques de {currentTrack.name}</h2>
            <p className="text-xs text-slate-400 mt-0.5">{activeTrackLessons.length} exercícios práticos com execução instantânea:</p>
          </div>
          <button
            onClick={() => handleEnterAcademia()}
            className="flex items-center gap-1 text-xs font-medium text-[#9FD6F2] hover:underline group"
          >
            <span>Ver todas</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activeTrackLessons.slice(0, 3).map((item) => {
            const Icon = CATEGORY_ICONS[item.category] || Cpu;
            const isCompleted = completedLessonIds.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => handleEnterAcademia(item.id)}
                className="aero-card group cursor-pointer p-5 transition-all hover:border-[#6fb7db] hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#141f30] text-[#9FD6F2]">
                    <Icon className="h-4 w-4" />
                  </div>
                  {isCompleted ? (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-[#86efac] bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="h-3 w-3" />
                      Concluído
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono font-medium text-[#ffbe82] bg-[#ffbe82]/10 border border-[#ffbe82]/30 px-2 py-0.5 rounded-md">
                      +{item.xp} XP
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-semibold text-[#6fb7db] mb-1">{item.category}</div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#9FD6F2] transition-colors mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center gap-1 text-xs font-medium text-slate-300 group-hover:text-[#9FD6F2]">
                  <span>Praticar exercício</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Catálogo Geral de Trilhas */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">Todas as Trilhas de Aprendizado</h2>
          <span className="text-xs text-slate-400">Clique para selecionar e começar</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracks.map((t) => {
            const isSelected = t.id === currentTrackId;
            return (
              <div
                key={t.id}
                onClick={() => handleSelectTrack(t.id)}
                className={`aero-card cursor-pointer p-5 transition-all relative ${
                  isSelected ? 'border-[#6fb7db] ring-1 ring-[#6fb7db] bg-[#141f30]' : 'hover:border-slate-700 hover:shadow-md'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#ffbe82] text-slate-950">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                    <span>Ativa</span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <LanguageIcon trackId={t.id} className="w-5 h-5" />
                    <span className="text-sm font-bold text-white">{t.name}</span>
                  </div>
                  {!isSelected && <span className="text-[11px] text-slate-400 font-mono">{t.totalLessons} lições</span>}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">{t.tagline}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">{t.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
                  <span className="font-mono text-slate-300">{t.totalXp} XP • {t.totalLessons} aulas</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectTrack(t.id);
                      setActiveTab('academia');
                    }}
                    className="text-[#9FD6F2] hover:underline flex items-center gap-1 font-medium group"
                  >
                    <span>Entrar</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Final */}
      <div className="aero-card p-8 text-center border-[#6fb7db]/30 bg-gradient-to-r from-[#0f172a] to-[#0e1626]">
        <div className="max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffbe82]/10 text-[#ffbe82] border border-[#ffbe82]/25 text-xs font-medium mb-4">
            <Zap className="h-3.5 w-3.5" />
            <span>Pronto para começar?</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Sua jornada de programação começa agora</h3>
          <p className="text-slate-400 text-sm mb-6">Selecione uma trilha acima ou acesse diretamente a Academia para começar a codificar com feedback instantâneo.</p>
          <button
            onClick={() => handleEnterAcademia()}
            className="aero-btn-primary px-8 py-3 text-base shadow-lg"
          >
            <Play className="h-4 w-4 mr-2 fill-slate-950" />
            <span>Começar na Academia</span>
          </button>
        </div>
      </div>
    </div>
  );
};