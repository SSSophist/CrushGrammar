import { useMemo, useState } from 'react';
import ExamCallout from '../components/ExamCallout';
import ErrorSummary from '../components/ErrorSummary';
import LastMinuteReview from '../components/LastMinuteReview';
import LessonExampleCard from '../components/LessonExampleCard';
import LessonSection from '../components/LessonSection';
import LessonTrapCard from '../components/LessonTrapCard';
import LevelCompletionActions from '../components/LevelCompletionActions';
import LevelNav from '../components/LevelNav';
import PracticeQuestionDeck from '../components/PracticeQuestionDeck';
import RemediationPanel from '../components/RemediationPanel';
import TermRescueSidebar from '../components/TermRescueSidebar';
import {
  level2ErrorInfo,
  level2Examples,
  level2PracticeQuestions,
  level2Remediations,
  level2Steps,
  level2Summary,
  level2Terms,
  level2Traps
} from '../data/level2';
import { level2Vocab } from '../data/levelVocab';
import { useEffect } from 'react';
import { getErrorSummary } from '../lib/practice';
import type { AnswerRecord, ErrorTag } from '../types';

interface LevelTwoPageProps {
  onBack: () => void;
  onLevelComplete: () => void;
  onNextLevel?: () => void;
}

export default function LevelTwoPage({ onBack, onLevelComplete, onNextLevel }: LevelTwoPageProps) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [activeRemediationTag, setActiveRemediationTag] = useState<ErrorTag | null>(null);
  const [completedRemediations, setCompletedRemediations] = useState<ErrorTag[]>([]);

  const answeredIds = useMemo(() => new Set(answers.map((answer) => answer.questionId)), [answers]);
  const allPracticeAnswered = answers.length >= level2PracticeQuestions.length;
  const errorSummary = useMemo(() => getErrorSummary(answers), [answers]);
  const activeRemediation = activeRemediationTag
    ? level2Remediations.find((remediation) => remediation.tag === activeRemediationTag)
    : null;
  const levelComplete =
    allPracticeAnswered &&
    (errorSummary.length === 0 || errorSummary.every((item) => completedRemediations.includes(item.tag)));

  useEffect(() => {
    if (levelComplete) {
      onLevelComplete();
    }
  }, [levelComplete, onLevelComplete]);

  const handleAnswered = (record: AnswerRecord) => {
    setAnswers((current) => {
      if (current.some((answer) => answer.questionId === record.questionId)) {
        return current;
      }

      return [...current, record];
    });
  };

  const handleRemediationComplete = (tag: ErrorTag) => {
    setCompletedRemediations((current) => (current.includes(tag) ? current : [...current, tag]));
    setActiveRemediationTag(null);
  };

  return (
    <main className="page-shell lesson-page">
      <button type="button" className="text-action" onClick={onBack}>
        返回闯关地图
      </button>

      <section className="lesson-hero">
        <p className="eyebrow">Level 2</p>
        <h1>词性和位置判断</h1>
        <p>
          选词填空不要一上来凭语感乱试。先看空格前后，判断它大概缺什么词，再用
          <strong>意思和形式</strong>收口。
        </p>
        <div className="lesson-facts">
          <span>三步筛词法</span>
          <span>15 题即时批改</span>
          <span>6 个常见错因</span>
          <span>位置不是最终答案</span>
        </div>
      </section>

      <LevelNav ariaLabel="第 2 关学习路线" />

      <div className="lesson-layout">
        <div className="lesson-main">
          <LessonSection id="position" title="这一关解决什么痛点" kicker="Position">
            <p>
              很多同学做选词填空时，会先看中文意思或凭语感试词。第二关训练的是更稳的顺序：
              <strong>先用位置排除一半，再用意思和形式定答案</strong>。
            </p>
            <ExamCallout title="本关不追求">
              <p>不背完整八大词性，不讲复杂构词法。现在只练名词、动词、形容词、副词四类够用判断。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="method" title="考场判断法" kicker="Method">
            <h3>三步筛词法</h3>
            <div className="step-list">
              {level2Steps.map((step) => (
                <article className="step-card" key={step.id}>
                  <h3>{step.title}</h3>
                  {step.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>
            <ExamCallout title="够用流程" tone="success">
              <p>位置先给候选词性，意思决定是否通顺，形式负责最后检查。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="scenes" title="四六级场景" kicker="CET Use">
            <div className="scene-grid">
              <ExamCallout title="选词填空">
                <p>15 个词先按词性分组，再看每个空位需要哪类词，速度会快很多。</p>
              </ExamCallout>
              <ExamCallout title="阅读理解">
                <p>看懂一个词在句子里当什么，能帮你读懂局部结构，而不是逐词硬翻。</p>
              </ExamCallout>
              <ExamCallout title="写作翻译">
                <p>同根词不要乱用：important / importance / importantly 站的位置不一样。</p>
              </ExamCallout>
            </div>
          </LessonSection>

          <LessonSection id="examples" title="例句拆解" kicker="Examples">
            <div className="example-list">
              {level2Examples.map((example) => (
                <LessonExampleCard
                  key={example.id}
                  example={example}
                  vocabEntries={level2Vocab}
                  optionAriaLabel={`${example.title} 候选词`}
                  optionTitle="候选词"
                  engineLabel="位置信号"
                  skeletonLabel="筛选结论"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="traps" title="常见坑" kicker="Traps">
            <div className="trap-list">
              {level2Traps.map((trap) => (
                <LessonTrapCard
                  key={trap.id}
                  trap={trap}
                  vocabEntries={level2Vocab}
                  wrongLabel="错误选法"
                  skeletonLabel="稳妥读法"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="practice" title="过关练习" kicker="Practice">
            <div className="practice-shell">
              <p>每题选完立刻批改：先看位置信号，再看意思，最后看形式。</p>
              <div className="practice-progress">
                已完成 {answers.length} / {level2PracticeQuestions.length}
              </div>
              <PracticeQuestionDeck
                questions={level2PracticeQuestions}
                errorInfo={level2ErrorInfo}
                onAnswered={handleAnswered}
                vocabEntries={level2Vocab}
                levelId="level-2"
              />
              {allPracticeAnswered ? (
                <ErrorSummary
                  records={answers}
                  errorInfo={level2ErrorInfo}
                  completedTags={completedRemediations}
                  levelId="level-2"
                  onRemediate={setActiveRemediationTag}
                  clearBody="你可以直接通关。三步筛词法这一步已经很稳。"
                />
              ) : null}
              {activeRemediation ? (
                <RemediationPanel
                  remediation={activeRemediation}
                  errorInfo={level2ErrorInfo}
                  onComplete={handleRemediationComplete}
                  vocabEntries={level2Vocab}
                  levelId="level-2"
                />
              ) : null}
              {levelComplete ? (
                <section className="level-complete">
                  <p className="eyebrow">Level Clear</p>
                  <h3>你已经完成第 2 关：词性和位置判断。</h3>
                  <p>现在你知道，位置只负责缩小范围，最终答案还要接受意思和形式的检查。</p>
                  <p>下一关我们会解决：一个句子里动词很多时，怎么找到真正的主发动机。</p>
                  <LevelCompletionActions onBack={onBack} onNextLevel={onNextLevel} nextLevelNumber={3} />
                </section>
              ) : null}
              {!allPracticeAnswered && answeredIds.size > 0 ? (
                <p className="practice-hint">继续完成剩余题目，最后会汇总你主要卡在位置、意思还是形式。</p>
              ) : null}
            </div>
          </LessonSection>

          <LastMinuteReview items={level2Summary} />
        </div>

        <TermRescueSidebar terms={level2Terms} />
      </div>
    </main>
  );
}
