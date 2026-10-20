import React, { useState } from 'react';
import { TrackId } from '../types';
import { useDualDev } from '../context/DualDevContext';
import { useCodeRunner } from '../hooks/useCodeRunner';
import { CodeEditor } from '../components/CodeEditor';
import { ConsoleOutput } from '../components/ConsoleOutput';
import { LanguageIcon } from '../components/LanguageIcon';
import { Terminal, Copy, Check, RotateCcw, Zap, Sparkles, Download, Maximize2, Minimize2 } from 'lucide-react';

const PRESETS: Record<TrackId, { name: string; code: string }[]> = {
  java: [
    {
      name: 'Classe & Método main',
      code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Bem-vindo ao Playground Java no DualDev!");\n        int ano = 2026;\n        System.out.println("Executando em: " + ano);\n    }\n}`,
    },
    {
      name: 'Métodos com Parâmetros',
      code: `public class Matematica {\n    public static double calcularImc(double peso, double altura) {\n        return peso / (altura * altura);\n    }\n\n    public static void main(String[] args) {\n        double imc = calcularImc(75.0, 1.78);\n        System.out.printf("IMC Calculado: %.2f", imc);\n    }\n}`,
    },
    {
      name: 'Arrays e Loops',
      code: `public class ArraysDemo {\n    public static void main(String[] args) {\n        String[] linguagens = {"Java", "Python", "JavaScript", "HTML", "CSS"};\n        for (int i = 0; i < linguagens.length; i++) {\n            System.out.println((i + 1) + ". " + linguagens[i].toUpperCase());\n        }\n    }\n}`,
    },
  ],
  python: [
    {
      name: 'Entrada, Saída e Condicionais',
      code: `nome = "Explorador"\npontos = 250\nprint(f"Olá, {nome}! Bem-vindo ao DualDev.")\nif pontos >= 200:\n    print("Classificação: Desenvolvedor Ouro!")\nelse:\n    print("Classificação: Iniciante.")\n`,
    },
    {
      name: 'Funções e Listas',
      code: `def analisar_notas(notas):\n    return sum(notas) / len(notas), max(notas), min(notas)\n\nmedia, maior, menor = analisar_notas([8.5, 9.0, 10.0])\nprint(f"Média: {media:.2f} | Maior: {maior} | Menor: {menor}")\n`,
    },
    {
      name: 'Laços e Compreensão de Listas',
      code: `numeros = list(range(1, 11))\npares = [n for n in numeros if n % 2 == 0]\nquadrados = {n: n**2 for n in pares}\nprint("Pares:", pares)\nprint("Quadrados:", quadrados)\n`,
    },
  ],
  javascript: [
    {
      name: 'ES6 Moderno & Arrays',
      code: `const techs = [\n  { nome: 'Java', tipo: 'Backend' },\n  { nome: 'Python', tipo: 'Automação & Scripts' },\n  { nome: 'JavaScript', tipo: 'Fullstack' },\n];\n\ntechs.forEach(t => console.log(\`• \${t.nome} (\${t.tipo})\`));\n`,
    },
    {
      name: 'Funções de Setima Ordem',
      code: `const usuarios = [\n  { nome: 'Ana', xp: 1200 },\n  { nome: 'Bruno', xp: 800 },\n  { nome: 'Carla', xp: 2100 },\n];\n\nconst topDevs = usuarios\n  .filter(u => u.xp > 1000)\n  .map(u => u.nome.toUpperCase())\n  .join(', ');\n\nconsole.log('Desenvolvedores Senior:', topDevs);\n`,
    },
  ],
  html: [
    {
      name: 'Estrutura Básica HTML5',
      code: `<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <title>Minha Página</title>\n</head>\n<body>\n  <h1>DualDev Academy</h1>\n  <p>Aprenda programação na prática.</p>\n</body>\n</html>`,
    },
    {
      name: 'Formulário Semântico',
      code: `<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <title>Cadastro</title>\n</head>\n<body>\n  <main>\n    <h1>Nova Conta</h1>\n    <form>\n      <label>\n        Nome: <input type="text" required>\n      </label>\n      <label>\n        Email: <input type="email" required>\n      </label>\n      <button type="submit">Criar conta</button>\n    </form>\n  </main>\n</body>\n</html>`,
    },
  ],
  css: [
    {
      name: 'Flexbox e Estilização',
      code: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background: linear-gradient(135deg, #ffbe82, #6fb7db);\n}`,
    },
    {
      name: 'CSS Grid Responsivo',
      code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  padding: 2rem;\n}\n\n.card {\n  background: #0f172a;\n  border: 1px solid #9FD6F2;\n  border-radius: 12px;\n  padding: 1.5rem;\n  transition: transform 0.2s;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 24px rgba(255,190,130,0.2);\n}`,
    },
  ],
};

export const PlaygroundPage: React.FC = () => {
  const { recordCodeExecution } = useDualDev();
  const [selectedLanguage, setSelectedLanguage] = useState<TrackId>('java');
  const [code, setCode] = useState<string>(PRESETS.java[0].code);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const {
    executionResult,
    isRunning,
    runCode,
    clearOutput,
  } = useCodeRunner(recordCodeExecution);

  const handleLanguageChange = (lang: TrackId) => {
    setSelectedLanguage(lang);
    setCode(PRESETS[lang][0].code);
    clearOutput();
  };

  const handleRun = () => {
    runCode(selectedLanguage, code);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleReset = () => {
    setCode(PRESETS[selectedLanguage][0].code);
    clearOutput();
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const ext = selectedLanguage === 'html' ? 'html' : selectedLanguage === 'css' ? 'css' : selectedLanguage;
    a.href = url;
    a.download = `playground.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const FILE_LABELS: Record<TrackId, string> = {
    java: 'Main.java',
    python: 'main.py',
    javascript: 'app.js',
    html: 'index.html',
    css: 'styles.css',
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4 bg-[#0b101b] ${isFullscreen ? 'fixed inset-0 z-50 rounded-xl overflow-hidden' : ''}`}>
      {/* Header da Página */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffbe82] to-[#6fb7db] text-slate-950 shadow-xs">
              <Terminal className="h-4 w-4" />
            </div>
            <span>Playground Livre</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Escreva e execute códigos livremente sem restrições. Teste algoritmos, experimente APIs e crie protótipos rápidos.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Seletor de Linguagem */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {(['java', 'python', 'javascript', 'html', 'css'] as TrackId[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all shrink-0 ${
                  selectedLanguage === lang
                    ? 'bg-[#6fb7db] text-slate-950 font-bold shadow-xs'
                    : 'bg-[#141f30] text-slate-300 hover:text-white border border-slate-700/80'
                }`}
              >
                <LanguageIcon trackId={lang} className="w-3.5 h-3.5" />
                <span>{lang.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Seletor de Presets */}
          <select
            onChange={(e) => {
              const idx = parseInt(e.target.value, 10);
              setCode(PRESETS[selectedLanguage][idx].code);
              clearOutput();
            }}
            className="bg-[#141f30] border border-slate-700 text-slate-200 text-xs rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#ffbe82]/40 font-medium"
          >
            {PRESETS[selectedLanguage].map((preset, idx) => (
              <option key={idx} value={idx} className="bg-[#0e1626]">
                Modelo: {preset.name}
              </option>
            ))}
          </select>

          {/* Ações */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopy}
              title="Copiar código"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Copy className="h-4 w-4" />
            </button>
            <button
              onClick={handleDownload}
              title="Baixar arquivo"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Download className="h-4 w-4" />
            </button>
            <button
              onClick={handleReset}
              title="Restaurar modelo"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <button
              onClick={handleFullscreen}
              title={isFullscreen ? 'Sair da tela cheia (Esc)' : 'Tela cheia (F11)'}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Dica de atalhos */}
      <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#141f30] border border-slate-700/50 text-xs text-slate-400">
        <Sparkles className="h-3.5 w-3.5 text-[#ffbe82]" />
        <span>Atalhos:</span>
        <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] text-[#ffbe82]">Ctrl+Enter</kbd>
        <span>Executar</span>
        <span className="text-slate-600">|</span>
        <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] text-[#ffbe82]">Ctrl+Espaço</kbd>
        <span>Sugestões</span>
        <span className="text-slate-600">|</span>
        <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] text-[#ffbe82]">Tab</kbd>
        <span>Autocompletar / Indentação</span>
      </div>

      {/* Editor e Console */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[580px]">
        <div className="h-[580px]">
          <CodeEditor
            code={code}
            onChange={setCode}
            onRun={handleRun}
            onReset={handleReset}
            trackId={selectedLanguage}
            isRunning={isRunning}
            isTesting={false}
          />
        </div>

        <div className="h-[580px]">
          <ConsoleOutput
            result={executionResult}
            testResults={[]}
            onClear={clearOutput}
            activeSubTab="output"
            setActiveSubTab={() => {}}
          />
        </div>
      </div>

      {/* Dica de tela cheia mobile */}
      {isFullscreen && (
        <div className="fixed bottom-4 right-4 z-50 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-lg px-4 py-2 text-xs text-slate-400">
          Pressione <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] text-[#ffbe82]">Esc</kbd> para sair da tela cheia
        </div>
      )}
    </div>
  );
};