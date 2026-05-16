import { useEffect, useState } from 'react';
import LevelMap from '../components/LevelMap';
import type { MapLevelItem } from '../components/LevelMap';
import RouteSelector from '../components/RouteSelector';
import { levels } from '../data/levels';
import { trackEvent } from '../lib/analytics';
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
    prompt: 'Students who depend on quick summaries when reading academic articles often miss the assumptions behind an argument. 主线是哪一个？',
    levelId: 'level-3',
    weakLabel: '句子主干不稳',
    options: [
      { id: 'a', text: 'quick summaries miss the assumptions 是主线', correct: false },
      { id: 'b', text: 'Students miss the assumptions 是主线', correct: true }
    ]
  },
  {
    id: 'word-class',
    prompt: 'The committee considered the proposal ____ enough to be tested in several cities. 空格最稳填哪类词？',
    levelId: 'level-2',
    weakLabel: '词性和位置判断不稳',
    options: [
      { id: 'a', text: 'practical', correct: true },
      { id: 'b', text: 'practically', correct: false }
    ]
  },
  {
    id: 'clause',
    prompt: 'The fact that many applicants revise their essays repeatedly shows how seriously they treat the exam. that 从句在干嘛？',
    levelId: 'level-4',
    weakLabel: '从句功能判断不稳',
    options: [
      { id: 'a', text: 'that 从句解释 the fact 的具体内容', correct: true },
      { id: 'b', text: 'that 从句充当 shows 的宾语', correct: false }
    ]
  },
  {
    id: 'non-finite',
    prompt: 'Designed to reduce careless mistakes, the checklist helps students notice missing verbs before submitting essays. 主线是哪一个？',
    levelId: 'level-5',
    weakLabel: '非谓语容易抢主线',
    options: [
      { id: 'a', text: 'the checklist helps students notice missing verbs', correct: true },
      { id: 'b', text: 'Designed to reduce careless mistakes 是主线动作', correct: false }
    ]
  },
  {
    id: 'logic',
    prompt: 'While the app saves time in collecting vocabulary, it rarely teaches learners how those words behave in sentences. 作者真正转向强调的是？',
    levelId: 'level-6',
    weakLabel: '逻辑关系方向不稳',
    options: [
      { id: 'a', text: 'app saves time 才是重点', correct: false },
      { id: 'b', text: 'it rarely teaches word behavior 才是重点', correct: true }
    ]
  },
  {
    id: 'tense',
    prompt: 'By the time the survey was published, researchers ____ responses from over 3,000 students.',
    levelId: 'level-8',
    weakLabel: '时态语态基础不稳',
    options: [
      { id: 'a', text: 'had collected', correct: true },
      { id: 'b', text: 'have collected', correct: false }
    ]
  },
  {
    id: 'compression',
    prompt: 'The ability to identify the verb that controls a sentence often determines whether a long paragraph becomes readable. 压缩后的主干是？',
    levelId: 'level-7',
    weakLabel: '长句压缩不稳',
    options: [
      { id: 'a', text: 'The ability determines whether the paragraph becomes readable', correct: true },
      { id: 'b', text: 'the verb controls a sentence determines the paragraph', correct: false }
    ]
  },
  {
    id: 'special-structure',
    prompt: 'Not until students compare two similar sentences do they notice why word order matters. 这句话的意思更接近：',
    levelId: 'level-9',
    weakLabel: '特殊结构识别不稳',
    options: [
      { id: 'a', text: '只有比较两个相似句子后，学生才会注意到语序为何重要', correct: true },
      { id: 'b', text: '学生不需要比较相似句子也能立刻注意到语序', correct: false }
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

  useEffect(() => {
    if (showDiagnosticPrompt && !diagnosticStarted && !diagnosticResult) {
      trackEvent('diagnostic_modal_shown', {
        unlocked_level_count: unlockedLevels.length
      });
    }
  }, [diagnosticResult, diagnosticStarted, showDiagnosticPrompt, unlockedLevels.length]);

  const rememberDiagnosticPromptSeen = () => {
    try {
      localStorage.setItem(DIAGNOSTIC_PROMPT_KEY, 'true');
    } catch {
      // Local storage can be unavailable in private contexts; the session state still closes the prompt.
    }
  };

  const startDiagnostic = () => {
    rememberDiagnosticPromptSeen();
    trackEvent('diagnostic_started', {
      question_count: diagnosticQuestions.length
    });
    setShowDiagnosticPrompt(true);
    setDiagnosticStarted(true);
    setDiagnosticAnswers([]);
    setDiagnosticResult(null);
    setBeginnerMode(false);
  };

  const handleBeginnerStart = () => {
    rememberDiagnosticPromptSeen();
    trackEvent('beginner_path_selected', {
      start_level_id: 'level-1'
    });
    setShowDiagnosticPrompt(false);
    setBeginnerMode(true);
    setDiagnosticStarted(false);
    setDiagnosticAnswers([]);
    setDiagnosticResult(null);
  };

  const handleDiagnosticAnswer = (option: DiagnosticOption) => {
    const nextAnswers = [...diagnosticAnswers, option];
    const question = diagnosticQuestions[diagnosticAnswers.length];

    trackEvent('diagnostic_answered', {
      correct: option.correct,
      question_id: question.id,
      question_index: diagnosticAnswers.length + 1,
      target_level_id: question.levelId
    });

    setDiagnosticAnswers(nextAnswers);

    if (nextAnswers.length === diagnosticQuestions.length) {
      const result = getDiagnosticResult(nextAnswers);
      const correctCount = nextAnswers.filter((answer) => answer.correct).length;

      trackEvent('diagnostic_completed', {
        correct_count: correctCount,
        question_count: diagnosticQuestions.length,
        recommended_level_id: result.recommendedLevelId,
        recommended_level_ids: result.recommendedLevelIds
      });
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
  const modalRecommendedLevel = diagnosticResult
    ? levels.find((level) => level.id === diagnosticResult.recommendedLevelId) ?? levels[0]
    : null;

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
            {diagnosticResult && modalRecommendedLevel ? (
              <div className="diagnostic-result">
                <p className="eyebrow">Diagnostic Result</p>
                <h3>建议先练第 {modalRecommendedLevel.number} 关</h3>
                <p className="diagnostic-result-line">推荐关卡：{diagnosticResultLevelNumbers}</p>
                <div className="diagnostic-tags">
                  {diagnosticResult.weakLabels.map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
                <button
                  type="button"
                  className="primary-action"
                  onClick={() => {
                    setShowDiagnosticPrompt(false);
                    onOpenLevel(modalRecommendedLevel.id);
                  }}
                >
                  开始第 {modalRecommendedLevel.number} 关
                </button>
              </div>
            ) : null}
            {!diagnosticStarted && !diagnosticResult ? (
              <>
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
              </>
            ) : null}
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
          <RouteSelector
            value={routeMode}
            onChange={(nextMode) => {
              setRouteMode(nextMode);
              trackEvent('route_mode_selected', {
                route_mode: nextMode
              });
            }}
          />
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

      <LevelMap levels={dynamicLevels} onOpenLevel={onOpenLevel} />
    </main>
  );
}
