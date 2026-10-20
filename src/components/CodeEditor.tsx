import React, { useRef, useState, useCallback } from 'react';
import { Play, CheckCircle2, RotateCcw, Copy, Check, FileCode, Loader2, Zap, Sparkles, X, Maximize2, Minimize2 } from 'lucide-react';
import { TrackId } from '../types';
import { getSnippetsByTrack, CodeSnippet } from '../data/snippets';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  onRun: () => void;
  onTest?: () => void;
  onReset: () => void;
  trackId: TrackId;
  isRunning: boolean;
  isTesting?: boolean;
}

const FILE_NAMES: Record<TrackId, string> = {
  java: 'Main.java',
  python: 'main.py',
  javascript: 'app.js',
  html: 'index.html',
  css: 'styles.css',
};

const FILE_ICONS: Record<TrackId, string> = {
  java: '☕',
  python: '🐍',
  javascript: '⚡',
  html: '🌐',
  css: '🎨',
};

export const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onChange,
  onRun,
  onTest,
  onReset,
  trackId,
  isRunning,
  isTesting = false,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [copied, setCopied] = useState(false);
  const [showSnippetsMenu, setShowSnippetsMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // IntelliSense state
  const [suggestions, setSuggestions] = useState<CodeSnippet[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [wordPrefix, setWordPrefix] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const availableSnippets = getSnippetsByTrack(trackId);
  const lines = code.split('\n');
  const lineCount = Math.max(lines.length, 12);

  const updateSuggestions = useCallback((text: string, cursorPos: number) => {
    const textBeforeCursor = text.substring(0, cursorPos);
    const match = textBeforeCursor.match(/([a-zA-Z0-9_]+)$/);
    const currentWord = match ? match[1] : '';

    if (currentWord.length >= 1) {
      const filtered = availableSnippets.filter((s) =>
        s.prefix.toLowerCase().startsWith(currentWord.toLowerCase())
      );
      if (filtered.length > 0) {
        setSuggestions(filtered);
        setWordPrefix(currentWord);
        setSelectedIndex(0);
        setShowSuggestions(true);
        return;
      }
    }
    setShowSuggestions(false);
    setSuggestions([]);
    setWordPrefix('');
  }, [availableSnippets]);

  const insertSnippet = useCallback((snippet: CodeSnippet) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const cursor = textarea.selectionStart;
    const prefixLen = wordPrefix.length;
    const startPos = cursor - prefixLen;
    const endPos = textarea.selectionEnd;

    const newCode = code.substring(0, startPos) + snippet.body + code.substring(endPos);
    onChange(newCode);

    setShowSuggestions(false);
    setShowSnippetsMenu(false);

    requestAnimationFrame(() => {
      const newCursor = startPos + snippet.body.length;
      textarea.selectionStart = textarea.selectionEnd = newCursor;
      textarea.focus();
    });
  }, [code, onChange, wordPrefix]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Atalho Ctrl+Enter para executar
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      onRun();
      return;
    }

    // Ctrl+Espaço abre sugestões
    if ((e.ctrlKey || e.metaKey) && e.code === 'Space') {
      e.preventDefault();
      setSuggestions(availableSnippets);
      setSelectedIndex(0);
      setWordPrefix('');
      setShowSuggestions(true);
      return;
    }

    // Navegação no menu IntelliSense
    if (showSuggestions && suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % suggestions.length);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
        return;
      }
      if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault();
        insertSnippet(suggestions[selectedIndex]);
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setShowSuggestions(false);
        return;
      }
    }

    // Indentação com Tab de 4 espaços
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const spaces = '    ';
      const newCode = code.substring(0, start) + spaces + code.substring(end);
      onChange(newCode);

      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + spaces.length;
      });
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    onChange(val);
    updateSuggestions(val, e.target.selectionStart);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className={`aero-card relative flex flex-col h-full overflow-hidden bg-[#09101a] transition-all duration-200 ${isFullscreen ? 'fixed inset-4 z-50 rounded-xl shadow-2xl' : ''}`}>
      {/* Barra de Ações Superior */}
      <div className="flex items-center justify-between min-h-[44px] h-11 border-b border-slate-800/80 bg-[#0e1626] px-3 sm:px-4">
        <div className="flex items-center gap-2 shrink-0">
          <div className="h-2 w-2 rounded-full bg-[#6fb7db]" />
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#141f30] border border-slate-700/80 text-[#9FD6F2] text-xs font-mono font-medium shadow-xs">
            <FileCode className="h-3.5 w-3.5 text-[#6fb7db]" />
            <span>{FILE_NAMES[trackId] || 'code.txt'}</span>
          </div>

          <button
            onClick={() => setShowSnippetsMenu(!showSnippetsMenu)}
            title="Catálogo de snippets (Ctrl+Espaço)"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            <Zap className="h-3 w-3 text-[#ffbe82]" />
            <span>Snippets</span>
          </button>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-auto">
          <button
            onClick={handleCopy}
            title="Copiar código"
            className="flex items-center gap-1 px-2 py-1 text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-[#86efac]" /> : <Copy className="h-3.5 w-3.5" />}
            <span className="hidden md:inline">{copied ? 'Copiado!' : 'Copiar'}</span>
          </button>

          <button
            onClick={onReset}
            title="Restaurar código inicial (R)"
            className="flex items-center gap-1 px-2 py-1 text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Restaurar</span>
          </button>

          {onTest && (
            <button
              onClick={onTest}
              disabled={isRunning || isTesting}
              className="aero-btn-success px-3 py-1.5 text-xs shadow-xs disabled:opacity-50 group"
            >
              {isTesting ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin mr-1.5" />
              ) : (
                <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 group-hover:rotate-12 transition-transform" />
              )}
              <span>Verificar</span>
            </button>
          )}

          <button
            onClick={onRun}
            disabled={isRunning || isTesting}
            className="aero-btn-primary px-3.5 py-1.5 text-xs shadow-xs disabled:opacity-50 group"
          >
            {isRunning ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin mr-1.5 text-slate-950" />
            ) : (
              <Play className="h-3.5 w-3.5 mr-1.5 fill-slate-950 group-hover:translate-x-0.5 transition-transform" />
            )}
            <span>Executar <kbd className="ml-1.5 px-1 py-0.5 text-[10px] bg-black/20 rounded">Ctrl+Enter</kbd></span>
          </button>

          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Sair da tela cheia (Esc)' : 'Tela cheia (F11)'}
            className="flex items-center gap-1 px-2 py-1 text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Editor Central */}
      <div className="relative flex flex-1 overflow-hidden font-mono text-sm leading-relaxed bg-[#09101a]">
        <div className="select-none py-3 px-3 text-right text-xs text-slate-500 bg-[#070c14] border-r border-slate-800/80 font-mono min-w-[2.75rem]">
          {Array.from({ length: lineCount }).map((_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          onClick={() => textareaRef.current && updateSuggestions(code, textareaRef.current.selectionStart)}
          onKeyUp={() => textareaRef.current && updateSuggestions(code, textareaRef.current.selectionStart)}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          placeholder="// Digite seu código aqui..."
          className="flex-1 w-full h-full resize-none bg-transparent p-3 text-slate-100 outline-none font-mono text-sm leading-6 selection:bg-[#ffbe82]/30 focus:ring-0 border-0 whitespace-pre overflow-auto"
          style={{ tabSize: 4 }}
        />

        {/* Menu Flutuante IntelliSense */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="aero-card absolute left-14 bottom-8 z-30 w-80 max-w-[90%] p-1.5 shadow-xl border border-slate-700 bg-[#0e1626]/95 backdrop-blur-md">
            <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-mono text-slate-400 font-semibold">
              <span className="flex items-center gap-1 text-[#ffbe82]">
                <Sparkles className="h-3 w-3" />
                Sugestões
              </span>
              <span>Tab / Enter</span>
            </div>

            <div className="max-h-48 overflow-y-auto space-y-0.5">
              {suggestions.map((snippet, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={snippet.id}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      insertSnippet(snippet);
                    }}
                    className={`flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer text-xs font-mono transition-colors ${
                      isSelected
                        ? 'bg-[#ffbe82] text-slate-950 font-bold shadow-xs'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`px-1.5 py-0.2 rounded text-[10px] ${isSelected ? 'bg-black/20 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'}`}>
                        {snippet.prefix}
                      </span>
                      <span className="truncate">{snippet.description}</span>
                    </div>
                    <span className="text-[10px] opacity-70 font-sans ml-2">Tab</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Atalho de tela cheia */}
        {isFullscreen && (
          <div className="absolute top-3 right-3 z-40 flex items-center gap-1 px-2 py-1 text-[10px] font-mono text-slate-400 bg-[#0e1626]/90 backdrop-blur rounded border border-slate-800">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">Esc</kbd>
            <span>Sair tela cheia</span>
          </div>
        )}
      </div>

      {/* Modal de Snippets */}
      {showSnippetsMenu && (
        <div className="absolute inset-0 z-40 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="aero-card w-full max-w-md p-5 space-y-4 shadow-2xl bg-[#0e1626] border border-slate-700">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-[#ffbe82]/20 text-[#ffbe82] flex items-center justify-center">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Snippets ({trackId.toUpperCase()})</h3>
                  <p className="text-[11px] text-slate-400">
                    Digite o prefixo e aperte <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] text-[#ffbe82]">Tab</kbd>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowSnippetsMenu(false)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1">
              {availableSnippets.map((snippet) => (
                <div
                  key={snippet.id}
                  onClick={() => insertSnippet(snippet)}
                  className="group flex items-center justify-between p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-[#6fb7db] hover:bg-slate-800/80 cursor-pointer shadow-xs transition-all"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-[#ffbe82]/20 text-[#ffbe82] font-mono font-semibold text-xs">
                        {snippet.prefix}
                      </span>
                      <span className="text-xs font-medium text-slate-200">{snippet.label}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">{snippet.description}</div>
                  </div>
                  <span className="text-[11px] font-medium text-[#9FD6F2] group-hover:underline">
                    Inserir →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Rodapé Informativo */}
      <div className="flex items-center justify-between border-t border-slate-800/80 bg-[#070c14] px-4 py-1.5 text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-3">
          <span>{lines.length} linhas</span>
          <span>{code.length} caracteres</span>
          <span className="px-1.5 py-0.5 rounded bg-[#141f30] border border-slate-700 text-slate-300">{trackId.toUpperCase()}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#9FD6F2]">Tab: Indentação / Autocompletar</span>
          <span className="text-slate-600">•</span>
          <span>Ctrl+Espaço: Sugestões</span>
          <span className="text-slate-600">•</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
};