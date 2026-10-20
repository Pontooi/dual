import { useState, useCallback } from 'react';
import { TrackId, ExecutionResult, TestResult, Lesson } from '../types';
import { executeCode } from '../services/runners';

export function useCodeRunner(onExecutionSuccess?: (trackId: TrackId) => void) {
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [activeConsoleTab, setActiveConsoleTab] = useState<'output' | 'tests'>('output');

  const runCode = useCallback(async (trackId: TrackId, code: string) => {
    setIsRunning(true);
    setActiveConsoleTab('output');
    try {
      const res = await executeCode(trackId, code);
      setExecutionResult(res);
      onExecutionSuccess?.(trackId);
      return res;
    } catch (err: any) {
      const errRes: ExecutionResult = {
        stdout: '',
        stderr: err.message || 'Erro inesperado na execução.',
        executionTimeMs: 0,
      };
      setExecutionResult(errRes);
      return errRes;
    } finally {
      setIsRunning(false);
    }
  }, [onExecutionSuccess]);

  const testChallenge = useCallback(async (
    trackId: TrackId,
    code: string,
    lesson: Lesson,
    onAllPassed?: (lessonId: string) => void
  ) => {
    setIsTesting(true);
    try {
      const execRes = await executeCode(trackId, code);
      setExecutionResult(execRes);
      onExecutionSuccess?.(trackId);

      const results: TestResult[] = lesson.testCases.map((tc) => {
        if (tc.validator) {
          const outcome = tc.validator(code, execRes.stdout);
          return {
            testId: tc.id,
            description: tc.description,
            passed: outcome.passed,
            message: outcome.message,
          };
        }
        const passed = !execRes.stderr && execRes.stdout.trim().length > 0;
        return {
          testId: tc.id,
          description: tc.description,
          passed,
          message: passed ? 'Código executado com sucesso!' : 'Código falhou na execução.',
        };
      });

      setTestResults(results);
      setActiveConsoleTab('tests');

      const allPassed = results.length > 0 && results.every((r) => r.passed);
      if (allPassed) {
        onAllPassed?.(lesson.id);
      }
      return { execRes, results, allPassed };
    } catch (err: any) {
      setExecutionResult({
        stdout: '',
        stderr: err.message || 'Erro na avaliação do código.',
        executionTimeMs: 0,
      });
      return null;
    } finally {
      setIsTesting(false);
    }
  }, [onExecutionSuccess]);

  const clearOutput = useCallback(() => {
    setExecutionResult(null);
    setTestResults([]);
  }, []);

  return {
    executionResult,
    testResults,
    isRunning,
    isTesting,
    activeConsoleTab,
    setActiveConsoleTab,
    runCode,
    testChallenge,
    clearOutput,
  };
}
