import React, { useState } from 'react';
import { Code2, Zap, Copy, Check, Sparkles, Shield, Users, Globe, BookOpen, Terminal, Award } from 'lucide-react';
import { TrackId } from '../types';
import { getSnippetsByTrack } from '../data/snippets';
import { LanguageIcon } from '../components/LanguageIcon';
import { tracks } from '../data/tracks';

const PHILOSOPHY = [
  {
    icon: BookOpen,
    title: 'Prática Real',
    description: 'Acreditamos que programação se aprende codificando, não apenas lendo. Cada lição exige que você escreva, execute e valide seu próprio código.',
    color: 'text-[#6fb7db]',
    bg: 'bg-[#6fb7db]/10',
  },
  {
    icon: Zap,
    title: 'Feedback Imediato',
    description: 'Nossos interpretadores rodam no navegador em milissegundos. Você vê o resultado, os erros e passa nos testes na hora, sem filas ou servidores.',
    color: 'text-[#ffbe82]',
    bg: 'bg-[#ffbe82]/10',
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Seu código nunca sai do seu navegador. Não há servidores de execução, não há upload de dados, não há risco de vazamento.',
    color: 'text-[#86efac]',
    bg: 'bg-[#86efac]/10',
  },
  {
    icon: Award,
    title: 'Progresso Tangível',
    description: 'Sistema de XP, níveis, missões diárias e conquistas transformam o aprendizado em uma jornada mensurável e motivadora.',
    color: 'text-[#9FD6F2]',
    bg: 'bg-[#9FD6F2]/10',
  },
];

const TECH_STACK = [
  { name: 'React 19', category: 'Framework UI', color: 'text-cyan-400' },
  { name: 'TypeScript', category: 'Tipagem Estática', color: 'text-blue-400' },
  { name: 'Vite', category: 'Build Tool', color: 'text-yellow-400' },
  { name: 'Tailwind CSS v4', category: 'Estilização', color: 'text-sky-400' },
  { name: 'Lucide React', category: 'Ícones', color: 'text-orange-400' },
  { name: 'localStorage', category: 'Persistência', color: 'text-green-400' },
];

export const SobrePage: React.FC = () => {
  const [selectedSnippetTrack, setSelectedSnippetTrack] = useState<TrackId>('java');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentSnippets = getSnippetsByTrack(selectedSnippetTrack);

  const handleCopySnippet = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10 bg-[#0b101b]">
      {/* Cabeçalho */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[#ffbe82] to-[#6fb7db] text-slate-950 shadow-lg mx-auto mb-2">
          <Code2 className="h-7 w-7 stroke-[2.3]" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Sobre o DualDev Academy
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Plataforma de ensino prático para dominar linguagens de programação diretamente no navegador.
          Sem instalações, sem configurações, sem barreiras — apenas você e o código.
        </p>
      </div>

      {/* Filosofia */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Sparkles className="h-5 w-5 text-[#ffbe82]" />
          <span>Nossa Filosofia</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHILOSOPHY.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="aero-card p-5 transition-all hover:border-[#6fb7db] group"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.bg} border border-transparent group-hover:border-current/20 transition-all`}>
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stack Tecnológica */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Terminal className="h-5 w-5 text-[#9FD6F2]" />
          <span>Tecnologias Utilizadas</span>
        </div>
        <div className="aero-card p-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="p-3 rounded-lg bg-[#0c1422] border border-slate-800 text-center hover:border-[#6fb7db]/40 transition-colors group"
              >
                <span className={`font-bold text-sm ${tech.color} group-hover:scale-105 transition-transform`}>
                  {tech.name}
                </span>
                <p className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-wide">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Globe className="h-5 w-5 text-[#6fb7db]" />
          <span>Como Funciona a Execução</span>
        </div>
        <div className="aero-card p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                step: '01',
                title: 'Você Escreve',
                desc: 'Digite código no editor com IntelliSense, snippets e numeração de linhas estilo VS Code.',
              },
              {
                step: '02',
                title: 'Executamos Local',
                desc: 'Nossos interpretadores (Java, Python, JS, HTML/CSS) rodam 100% no seu navegador via WebAssembly e JS nativo.',
              },
              {
                step: '03',
                title: 'Validação Instantânea',
                desc: 'Testes automatizados verificam seu código. Terminal mostra stdout/stderr com cores. XP e conquistas são atualizados na hora.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-3 p-3 rounded-lg bg-[#0c1422] border border-slate-800">
                <span className="text-[10px] font-mono font-bold text-[#ffbe82] bg-[#ffbe82]/10 px-2 py-1 rounded shrink-0">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trilhas Disponíveis */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Users className="h-5 w-5 text-[#86efac]" />
          <span>Trilhas de Aprendizado Disponíveis</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracks.map((t) => (
            <div
              key={t.id}
              className="aero-card p-4 transition-all hover:border-[#6fb7db] group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#141f30] text-[#9FD6F2] group-hover:bg-[#6fb7db]/20 transition-colors">
                  <LanguageIcon trackId={t.id} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-[11px] text-slate-400">{t.tagline}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">{t.description}</p>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                <span className="font-mono text-slate-300">{t.totalLessons} lições • {t.totalXp} XP</span>
                <span className="text-[#9FD6F2] font-medium group-hover:underline">Ver detalhes →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Snippets e Atalhos */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Zap className="h-5 w-5 text-[#ffbe82]" />
          <span>Snippets Inteligentes (Estilo VS Code)</span>
        </div>

        <div className="aero-card p-6 space-y-6 bg-[#0f172a]">
          <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
            Digite o prefixo (ex: <code className="text-[#ffbe82] font-mono px-1 py-0.5 rounded bg-black/30">sout</code> ou <code className="text-[#ffbe82] font-mono px-1 py-0.5 rounded bg-black/30">def</code>) e pressione <kbd className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[#9FD6F2]">Tab</kbd> para autocompletar.
          </p>

          {/* Seleção de Linguagem para Snippets */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {tracks.map((t) => {
              const isSelected = t.id === selectedSnippetTrack;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedSnippetTrack(t.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all shrink-0 ${
                    isSelected
                      ? 'bg-[#6fb7db] text-slate-950 shadow-xs'
                      : 'bg-[#141f30] text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  <LanguageIcon trackId={t.id} className="w-3.5 h-3.5" />
                  <span>{t.name}</span>
                </button>
              );
            })}
          </div>

          {/* Lista de Snippets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {currentSnippets.map((snip) => (
              <div
                key={snip.id}
                className="p-3.5 rounded-lg border border-slate-800 bg-[#0c1422] space-y-2 hover:border-[#6fb7db]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#ffbe82]/15 border border-[#ffbe82]/30 text-[#ffbe82] font-mono text-xs font-bold">
                      {snip.prefix}
                    </span>
                    <span className="text-xs font-semibold text-white">{snip.label}</span>
                  </div>

                  <button
                    onClick={() => handleCopySnippet(snip.id, snip.body)}
                    title="Copiar snippet"
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {copiedId === snip.id ? (
                      <Check className="h-3.5 w-3.5 text-[#86efac]" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400">{snip.description}</p>

                <pre className="p-2 rounded bg-[#070c14] border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  {snip.body}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-slate-800 pt-8 text-center">
        <p className="text-xs text-slate-500">
          DualDev Academy — Feito com dedicação para quem quer aprender a programar de verdade.
        </p>
        <p className="text-[10px] text-slate-600 mt-1">
          Execução 100% client-side • Sem backend • Código aberto • MIT License
        </p>
      </footer>
    </div>
  );
};