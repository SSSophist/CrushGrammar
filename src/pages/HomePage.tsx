import { useEffect, useState } from 'react';
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

const DIAGNOSTIC_PROMPT_KEY = 'crush_grammar_diagnostic_prompt_seen';

const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: 'mainline',
    prompt: 'Students who plan early feel less pressure before exams. 主线是哪一个？',
    levelId: 'level-3',
    weakLabel: '句子主干不稳',
    options: [
      { id: 'a', text: '主语是 who plan early，主发动机是 plan', correct: false },
      { id: 'b', text: 'Students feel less pressure 是主线', correct: true }
    ]
  },
  {
    id: 'word-class',
    prompt: 'Students need ____ sources when checking information. 空格最稳填哪类词？',
    levelId: 'level-2',
    weakLabel: '词性和位置判断不稳',
    options: [
      { id: 'a', text: 'reliable', correct: true },
      { id: 'b', text: 'reliably', correct: false }
    ]
  },
  {
    id: 'clause',
    prompt: 'Teachers believe that practice builds confidence. that 从句在干嘛？',
    levelId: 'level-4',
    weakLabel: '从句功能判断不稳',
    options: [
      { id: 'a', text: 'that 从句是 believe 的内容', correct: true },
      { id: 'b', text: 'that 从句修饰 Teachers', correct: false }
    ]
  },
  {
    id: 'non-finite',
    prompt: 'Students using study groups solve problems faster. 主线是哪一个？',
    levelId: 'level-5',
    weakLabel: '非谓语容易抢主线',
    options: [
      { id: 'a', text: 'Students solve problems', correct: true },
      { id: 'b', text: 'using study groups solve', correct: false }
    ]
  },
  {
    id: 'logic',
    prompt: 'Although the method is simple, many students ignore it. 重点更靠哪边？',
    levelId: 'level-6',
    weakLabel: '逻辑关系方向不稳',
    options: [
      { id: 'a', text: '方法简单才是重点', correct: false },
      { id: 'b', text: 'many students ignore it 才是重点', correct: true }
    ]
  },
  {
    id: 'tense',
    prompt: 'Online learning ____ the way students study over the past decade.',
    levelId: 'level-8',
    weakLabel: '时态语态基础不稳',
    options: [
      { id: 'a', text: 'has changed', correct: true },
      { id: 'b', text: 'change', correct: false }
    ]
  },
  {
    id: 'compression',
    prompt: 'People who review mistakes after each practice remember methods longer. 压缩后的主干是？',
    levelId: 'level-7',
    weakLabel: '长句压缩不稳',
    options: [
      { id: 'a', text: 'People remember methods', correct: true },
      { id: 'b', text: 'mistakes review practice', correct: false }
    ]
  },
  {
    id: 'special-structure',
    prompt: 'Only by reviewing mistakes can learners improve quickly. 这句话的意思更接近：',
    levelId: 'level-9',
    weakLabel: '特殊结构识别不稳',
    options: [
      { id: 'a', text: '只有不断复盘错误，学习者才能快速进步', correct: true },
      { id: 'b', text: '学习者不能通过复盘错误进步', correct: false }
    ]
  }
];

const levelNumberById = new Map(levels.map((level) => [level.id, level.number]));

function getDiagnosticResult(answeredOptions: DiagnosticOption[]) {
  const missed = answeredOptions
    .map((option, index) => ({ option, question: diagnosticQuestions[index] }))
    .filter(({ option }) => !option.correct);

  const missedQuestions = missed.map(({ question }) => question);
  const uniqueRecommendedLevelIds = Array.from(new Set(missedQuestions.map((question) => question.levelId))).slice(0, 3);
  const recommendedLevelIds = uniqueRecommendedLevelIds.length > 0 ? uniqueRecommendedLevelIds : ['level-9'];
  const recommendedLevelId = recommendedLevelIds[0] ?? 'level-9';
  const highestRecommendedLevelId = recommendedLevelIds.reduce((highest, levelId) => {
    const highestNumber = levelNumberById.get(highest) ?? 1;
    const levelNumber = levelNumberById.get(levelId) ?? 1;

    return levelNumber > highestNumber ? levelId : highest;
  }, recommendedLevelId);
  const weakLabels = missedQuestions.length > 0
    ? missedQuestions.map((question) => question.weakLabel).slice(0, 3)
    : ['基础很稳，可以直接冲刺特殊结构'];

  return { recommendedLevelId, recommendedLevelIds, highestRecommendedLevelId, weakLabels };
}

export default function HomePage({ unlockedLevels, onUnlockAll, onUnlockThrough, onOpenLevel }: HomePageProps) {
  const [routeMode, setRouteMode] = useState<RouteMode>('three-day');
  const [clicks, setClicks] = useState(0);
  const [diagnosticStarted, setDiagnosticStarted] = useState(false);
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<DiagnosticOption[]>([]);
  const [diagnosticResult, setDiagnosticResult] = useState<ReturnType<typeof getDiagnosticResult> | null>(null);
  const [beginnerMode, setBeginnerMode] = useState(false);
  const [showDiagnosticPrompt, setShowDiagnosticPrompt] = useState(() => {
    try {
      return localStorage.getItem(DIAGNOSTIC_PROMPT_KEY) !== 'true';
    } catch {
      return true;
    }
  });

  const handleCheatClick = () => {
    if (clicks + 1 >= 3) {
      onUnlockAll();
      setClicks(0);
    } else {
      setClicks((current) => current + 1);
    }
  };

  useEffect(() => {
    if (clicks > 0) {
      const timer = setTimeout(() => setClicks(0), 1000);
      return () => clearTimeout(timer);
    }
  }, [clicks]);

  const markDiagnosticPromptSeen = () => {
    try {
      localStorage.setItem(DIAGNOSTIC_PROMPT_KEY, 'true');
    } catch {
      // Local storage can be unavailable in private contexts; the session state still closes the prompt.
    }

    setShowDiagnosticPrompt(false);
  };

  const startDiagnostic = () => {
    markDiagnosticPromptSeen();
    setDiagnosticStarted(true);
    setDiagnosticAnswers([]);
    setDiagnosticResult(null);
    setBeginnerMode(false);
  };

  const handleBeginnerStart = () => {
    markDiagnosticPromptSeen();
    setBeginnerMode(true);
    setDiagnosticStarted(false);
    setDiagnosticAnswers([]);
    setDiagnosticResult(null);
  };

  const handleDiagnosticAnswer = (option: DiagnosticOption) => {
    const nextAnswers = [...diagnosticAnswers, option];

    setDiagnosticAnswers(nextAnswers);

    if (nextAnswers.length === diagnosticQuestions.length) {
      const result = getDiagnosticResult(nextAnswers);
      setDiagnosticResult(result);
      setDiagnosticStarted(false);
      setBeginnerMode(false);
      onUnlockThrough?.(result.highestRecommendedLevelId);
    }
  };

  const dynamicLevels: MapLevelItem[] = levels.map((level) => ({
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
  const diagnosticResultLevelNumbers = diagnosticResult?.recommendedLevelIds
    .map((levelId) => `第 ${levelNumberById.get(levelId)} 关`)
    .join('、');

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

      {showDiagnosticPrompt ? (
        <div className="intro-modal-backdrop diagnostic-welcome-backdrop">
          <section
            className="intro-modal diagnostic-welcome-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="diagnostic-welcome-title"
          >
            <p className="eyebrow">Start Smart</p>
            <h2 id="diagnostic-welcome-title">欢迎来到小德英语lab的四六级语法网站</h2>
            <div className="intro-modal-body">
              <p>
                先做 8 道语法能力检测题，大概 3 分钟。系统会根据你的错误推荐薄弱关卡，并自动解锁到对应训练位置。
              </p>
              <p>如果你想从零开始，也可以直接选择小白路线，从第 1 关按顺序刷。</p>
            </div>
            <div className="diagnostic-actions">
              <button type="button" className="primary-action" onClick={startDiagnostic}>
                开始 8 题语法检测
              </button>
              <button type="button" className="secondary-action" onClick={handleBeginnerStart}>
                我是语法小白，从第 1 关开始
              </button>
            </div>
          </section>
        </div>
      ) : null}

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
          <p>不确定从哪关开始时，先做 8 道诊断题；如果想完整打基础，也可以直接从第 1 关走。</p>
        </div>
        {!diagnosticStarted && !diagnosticResult ? (
          <div className="diagnostic-actions">
            <button type="button" className="secondary-action" onClick={startDiagnostic}>
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
            <p className="diagnostic-result-line">推荐关卡：{diagnosticResultLevelNumbers}</p>
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
