import { useState, useEffect } from 'react';
import LevelMap from '../components/LevelMap';
import type { MapLevelItem } from '../components/LevelMap';
import RouteSelector from '../components/RouteSelector';
import { levels } from '../data/levels';
import type { RouteMode } from '../types';

interface HomePageProps {
  unlockedLevels: string[];
  onUnlockAll: () => void;
  onUnlockThrough?: (levelId: string) => void;
  onOpenLevel: (levelId: string) => void;
}

type DiagnosticOption = {
  id: string;
  text: string;
  correct: boolean;
};

type DiagnosticQuestion = {
  id: string;
  prompt: string;
  levelId: string;
  weakLabel: string;
  options: DiagnosticOption[];
};

const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: 'mainline',
    prompt: 'Students who plan early feel less pressure before exams. 主线是哪一个？',
    levelId: 'level-3',
    weakLabel: '主线不稳',
    options: [
      { id: 'a', text: '主语是 who plan early，主发动机是 plan', correct: false },
      { id: 'b', text: '主语是 students，主发动机是 feel', correct: true }
    ]
  },
  {
    id: 'word-class',
    prompt: 'Students need ____ sources when checking information. 空格最稳填哪类词？',
    levelId: 'level-2',
    weakLabel: '词性位置不稳',
    options: [
      { id: 'a', text: 'reliable', correct: true },
      { id: 'b', text: 'reliably', correct: false }
    ]
  },
  {
    id: 'clause',
    prompt: 'Teachers believe that practice builds confidence. that 从句在干嘛？',
    levelId: 'level-4',
    weakLabel: '从句功能不稳',
    options: [
      { id: 'a', text: 'that practice builds confidence 是 believe 的内容', correct: true },
      { id: 'b', text: 'that practice builds confidence 修饰 Teachers', correct: false }
    ]
  },
  {
    id: 'non-finite',
    prompt: 'Students using study groups solve problems. 主线是哪一个？',
    levelId: 'level-5',
    weakLabel: '非谓语容易抢主线',
    options: [
      { id: 'a', text: '主线是 students solve problems', correct: true },
      { id: 'b', text: '主线是 using study groups', correct: false }
    ]
  },
  {
    id: 'logic',
    prompt: 'Although the method is simple, many students ignore it. 重点更靠哪边？',
    levelId: 'level-6',
    weakLabel: '逻辑关系不稳',
    options: [
      { id: 'a', text: 'because 后面才是作者重点', correct: false },
      { id: 'b', text: '逗号后 many students ignore it 更关键', correct: true }
    ]
  },
  {
    id: 'tense',
    prompt: 'Online learning ____ the way students study over the past decade.',
    levelId: 'level-8',
    weakLabel: '时态语态不稳',
    options: [
      { id: 'a', text: 'has changed', correct: true },
      { id: 'b', text: 'change', correct: false }
    ]
  }
];

const levelNumberById = new Map(levels.map((level) => [level.id, level.number]));

function getDiagnosticResult(answeredOptions: DiagnosticOption[]) {
  const missed = answeredOptions
    .map((option, index) => ({ option, question: diagnosticQuestions[index] }))
    .filter(({ option }) => !option.correct);

  const firstMissed = missed[0]?.question;
  const recommendedLevelId = firstMissed?.levelId ?? 'level-10';
  const weakLabels = missed.length > 0 ? missed.map(({ question }) => question.weakLabel).slice(0, 3) : ['基础很稳'];

  return { recommendedLevelId, weakLabels };
}

export default function HomePage({ unlockedLevels, onUnlockAll, onUnlockThrough, onOpenLevel }: HomePageProps) {
  const [routeMode, setRouteMode] = useState<RouteMode>('three-day');
  const [clicks, setClicks] = useState(0);
  const [diagnosticStarted, setDiagnosticStarted] = useState(false);
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<DiagnosticOption[]>([]);
  const [diagnosticResult, setDiagnosticResult] = useState<ReturnType<typeof getDiagnosticResult> | null>(null);
  const [beginnerMode, setBeginnerMode] = useState(false);

  const handleCheatClick = () => {
    if (clicks + 1 >= 3) {
      onUnlockAll();
      setClicks(0);
    } else {
      setClicks(c => c + 1);
    }
  };

  useEffect(() => {
    if (clicks > 0) {
      const timer = setTimeout(() => setClicks(0), 1000);
      return () => clearTimeout(timer);
    }
  }, [clicks]);

  // Dynamically override level status and group based on unlockedLevels array and routeMode
  const dynamicLevels: MapLevelItem[] = levels.map(level => ({
    ...level,
    group: level.group[routeMode],
    status: unlockedLevels.includes(level.id) ? 'open' : 'locked'
  }));
  const unlockedLevelItems = levels.filter((level) => unlockedLevels.includes(level.id));
  const recommendedLevel = diagnosticResult
    ? levels.find((level) => level.id === diagnosticResult.recommendedLevelId) ?? levels[0]
    : null;
  const primaryLevel = beginnerMode ? levels[0] : recommendedLevel ?? unlockedLevelItems[unlockedLevelItems.length - 1] ?? levels[0];
  const allLevelsUnlocked = levels.every((level) => unlockedLevels.includes(level.id));
  const primaryActionLabel = beginnerMode || diagnosticResult
    ? `开始第 ${primaryLevel.number} 关`
    : allLevelsUnlocked
    ? '查看总复盘'
    : primaryLevel.number === 1
      ? '开始第 1 关'
      : `继续第 ${primaryLevel.number} 关`;
  const currentDiagnosticQuestion = diagnosticQuestions[diagnosticAnswers.length];

  const handleDiagnosticAnswer = (option: DiagnosticOption) => {
    const nextAnswers = [...diagnosticAnswers, option];

    setDiagnosticAnswers(nextAnswers);

    if (nextAnswers.length === diagnosticQuestions.length) {
      const result = getDiagnosticResult(nextAnswers);
      setDiagnosticResult(result);
      setDiagnosticStarted(false);
      setBeginnerMode(false);
      onUnlockThrough?.(result.recommendedLevelId);
    }
  };

  const handleBeginnerStart = () => {
    setBeginnerMode(true);
    setDiagnosticStarted(false);
    setDiagnosticAnswers([]);
    setDiagnosticResult(null);
  };

  return (
    <main className="page-shell" style={{ position: 'relative' }}>
      <button 
        onClick={handleCheatClick}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '50px',
          height: '50px',
          background: 'transparent',
          border: 'none',
          cursor: 'default',
          outline: 'none',
          zIndex: 9999
        }}
        aria-hidden="true"
        title="Secret area"
      />
      <section className="home-intro">
        <div>
          <p className="eyebrow">Crush Grammar</p>
          <h1>四六级语法闯关地图</h1>
          <p className="home-lede">不研究语法规则，只训练读懂句子、写对句子、翻译顺句子。</p>
        </div>
        <div className="intro-actions">
          <RouteSelector value={routeMode} onChange={setRouteMode} />
          <button type="button" className="primary-action" onClick={() => onOpenLevel(primaryLevel.id)}>
            {primaryActionLabel}
          </button>
        </div>
      </section>

      <section className="route-note" aria-live="polite">
        当前路线：
        <strong>{routeMode === 'three-day' ? '3 天极限版' : '5 天稳妥版'}</strong>
        <span>核心内容相同，区别在每日任务量和补救练习密度。</span>
      </section>

      <section className="diagnostic-panel" aria-live="polite">
        <div>
          <p className="eyebrow">Start Smart</p>
          <h2>先定位薄弱点</h2>
          <p>不确定从哪关开始时，先做 6 道小题；如果想完整打基础，也可以直接从第 1 关走。</p>
        </div>
        {!diagnosticStarted && !diagnosticResult ? (
          <div className="diagnostic-actions">
            <button
              type="button"
              className="secondary-action"
              onClick={() => {
                setDiagnosticStarted(true);
                setDiagnosticAnswers([]);
                setBeginnerMode(false);
              }}
            >
              做 3 分钟诊断
            </button>
            <button type="button" className="text-action" onClick={handleBeginnerStart}>
              我是语法小白，从第 1 关开始
            </button>
          </div>
        ) : null}
        {diagnosticStarted && currentDiagnosticQuestion ? (
          <div className="diagnostic-question">
            <div className="practice-progress">
              诊断 {diagnosticAnswers.length + 1} / {diagnosticQuestions.length}
            </div>
            <h3>{currentDiagnosticQuestion.prompt}</h3>
            <div className="diagnostic-options">
              {currentDiagnosticQuestion.options.map((option) => (
                <button key={option.id} type="button" className="answer-option" onClick={() => handleDiagnosticAnswer(option)}>
                  <strong>{option.id.toUpperCase()}</strong>
                  <span>{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        ) : null}
        {diagnosticResult ? (
          <div className="diagnostic-result">
            <p className="eyebrow">Diagnostic Result</p>
            <h3>建议先练第 {levelNumberById.get(diagnosticResult.recommendedLevelId)} 关</h3>
            <div className="diagnostic-tags">
              {diagnosticResult.weakLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        ) : null}
        {beginnerMode ? <p className="diagnostic-result-line">已选择从第 1 关开始，按顺序打基础。</p> : null}
      </section>

      <LevelMap levels={dynamicLevels} onOpenLevel={onOpenLevel} />
    </main>
  );
}
