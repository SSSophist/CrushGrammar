import { useMemo, useState, useEffect } from 'react';
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
  level3ErrorInfo,
  level3Examples,
  level3PracticeQuestions,
  level3Remediations,
  level3Steps,
  level3Summary,
  level3Terms,
  level3Traps
} from '../data/level3';
import { level3Vocab } from '../data/levelVocab';
import { getErrorSummary } from '../lib/practice';
import type { AnswerRecord, ErrorTag } from '../types';

interface LevelThreePageProps {
  onBack: () => void;
  onLevelComplete: () => void;
  onNextLevel?: () => void;
}

export default function LevelThreePage({ onBack, onLevelComplete, onNextLevel }: LevelThreePageProps) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [activeRemediationTag, setActiveRemediationTag] = useState<ErrorTag | null>(null);
  const [completedRemediations, setCompletedRemediations] = useState<ErrorTag[]>([]);

  const answeredIds = useMemo(() => new Set(answers.map((answer) => answer.questionId)), [answers]);
  const allPracticeAnswered = answers.length >= level3PracticeQuestions.length;
  const errorSummary = useMemo(() => getErrorSummary(answers), [answers]);
  const activeRemediation = activeRemediationTag
    ? level3Remediations.find((remediation) => remediation.tag === activeRemediationTag)
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
        <p className="eyebrow">Level 3</p>
        <h1>一个句子一个主发动机</h1>
        <p>
          动词再多，也不要一上来乱抓。先找能和主语连起来、撑起整句话的
          <strong>主发动机</strong>，doing / done / to do 先别急着当主发动机。
        </p>
        <div className="lesson-facts">
          <span>主线压缩法</span>
          <span>15 题即时批改</span>
          <span>6 个常见错因</span>
          <span>假动词先降级</span>
        </div>
      </section>

      <LevelNav ariaLabel="第 3 关学习路线" />

      <div className="lesson-layout">
        <div className="lesson-main">
          <LessonSection id="position" title="这一关解决什么痛点" kicker="Main Engine">
            <p>
              很多四六级长句不是单词难，而是动词太多：using、introduced、to improve、who read
              都像动作。本关只训练一件事：<strong>先找主句真正的主发动机</strong>。
            </p>
            <ExamCallout title="本关不追求">
              <p>不系统讲非谓语和从句分类。先会把一串动词压成一个主线，读懂句子够用。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="method" title="考场判断法" kicker="Method">
            <h3>三步找主发动机</h3>
            <div className="step-list">
              {level3Steps.map((step) => (
                <article className="step-card" key={step.id}>
                  <h3>{step.title}</h3>
                  {step.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>
            <ExamCallout title="够用流程" tone="success">
              <p>先找主角，再找能和主角连起来的动作；doing / done / to do 和从句动作先降级。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="scenes" title="四六级场景" kicker="CET Use">
            <div className="scene-grid">
              <ExamCallout title="阅读长句">
                <p>先压成“谁 + 做/是 + 什么”，再补修饰，速度会明显上来。</p>
              </ExamCallout>
              <ExamCallout title="翻译写作">
                <p>英文句子必须有真正发动机，不能堆一串 doing 或 to do。</p>
              </ExamCallout>
              <ExamCallout title="选词填空">
                <p>判断空格是不是主句动词位，能减少动词形式误选。</p>
              </ExamCallout>
            </div>
          </LessonSection>

          <LessonSection id="examples" title="例句拆解" kicker="Examples">
            <div className="example-list">
              {level3Examples.map((example) => (
                <LessonExampleCard
                  key={example.id}
                  example={example}
                  vocabEntries={level3Vocab}
                  optionAriaLabel={`${example.title} 候选主线`}
                  optionTitle="候选主线"
                  engineLabel="主线骨架"
                  skeletonLabel="筛选结论"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="traps" title="常见坑" kicker="Traps">
            <div className="trap-list">
              {level3Traps.map((trap) => (
                <LessonTrapCard
                  key={trap.id}
                  trap={trap}
                  vocabEntries={level3Vocab}
                  wrongLabel="错误选法"
                  skeletonLabel="稳妥读法"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="practice" title="过关练习" kicker="Practice">
            <div className="practice-shell">
              <p>每题选完立刻批改：先抓主语，再找主发动机，把修饰动作和从句动作降级。</p>
              <div className="practice-progress">
                已完成 {answers.length} / {level3PracticeQuestions.length}
              </div>
              <PracticeQuestionDeck
                questions={level3PracticeQuestions}
                errorInfo={level3ErrorInfo}
                onAnswered={handleAnswered}
                getQuestionTitle={(_, index) => `题 ${index + 1}`}
                vocabEntries={level3Vocab}
              />
              {allPracticeAnswered ? (
                <ErrorSummary
                  records={answers}
                  errorInfo={level3ErrorInfo}
                  completedTags={completedRemediations}
                  onRemediate={setActiveRemediationTag}
                  clearBody="你可以直接通关。找主发动机这一步已经很稳。"
                />
              ) : null}
              {activeRemediation ? (
                <RemediationPanel
                  remediation={activeRemediation}
                  errorInfo={level3ErrorInfo}
                  onComplete={handleRemediationComplete}
                  vocabEntries={level3Vocab}
                />
              ) : null}
              {levelComplete ? (
                <section className="level-complete">
                  <p className="eyebrow">Level Clear</p>
                  <h3>你已经完成第 3 关：一个句子一个主发动机。</h3>
                  <p>现在你能在多个动词里先抓主线，再处理修饰动作和从句动作。</p>
                  <p>下一关会继续处理：一大坨从句到底在句子里干什么。</p>
                  <LevelCompletionActions onBack={onBack} onNextLevel={onNextLevel} nextLevelNumber={4} />
                </section>
              ) : null}
              {!allPracticeAnswered && answeredIds.size > 0 ? (
                <p className="practice-hint">继续完成剩余题目，最后会汇总你主要卡在主线、修饰还是从句动作。</p>
              ) : null}
            </div>
          </LessonSection>

          <LastMinuteReview items={level3Summary} />
        </div>

        <TermRescueSidebar terms={level3Terms} />
      </div>
    </main>
  );
}
