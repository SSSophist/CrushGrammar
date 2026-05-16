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
  level7ErrorInfo,
  level7Examples,
  level7PracticeQuestions,
  level7Remediations,
  level7Steps,
  level7Summary,
  level7Terms,
  level7Traps
} from '../data/level7';
import { level7Vocab } from '../data/levelVocab';
import { getErrorSummary } from '../lib/practice';
import type { AnswerRecord, ErrorTag } from '../types';

interface LevelSevenPageProps {
  onBack: () => void;
  onLevelComplete: () => void;
  onNextLevel?: () => void;
}

export default function LevelSevenPage({ onBack, onLevelComplete, onNextLevel }: LevelSevenPageProps) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [activeRemediationTag, setActiveRemediationTag] = useState<ErrorTag | null>(null);
  const [completedRemediations, setCompletedRemediations] = useState<ErrorTag[]>([]);

  const answeredIds = useMemo(() => new Set(answers.map((answer) => answer.questionId)), [answers]);
  const allPracticeAnswered = answers.length >= level7PracticeQuestions.length;
  const errorSummary = useMemo(() => getErrorSummary(answers), [answers]);
  const activeRemediation = activeRemediationTag
    ? level7Remediations.find((remediation) => remediation.tag === activeRemediationTag)
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
        <p className="eyebrow">Level 7</p>
        <h1>修饰语和长难句压缩术</h1>
        <p>
          长句不是一口气硬翻。本关只训练三个动作：<strong>先删修饰</strong>、<strong>压回主干</strong>、
          <strong>补回细节</strong>。先看懂句子骨架，再慢慢把细节放回去。
        </p>
        <div className="lesson-facts">
          <span>三步压缩法</span>
          <span>15 题即时批改</span>
          <span>6 个常见错因</span>
          <span>先主干后细节</span>
        </div>
      </section>

      <LevelNav ariaLabel="第 7 关学习路线" />

      <div className="lesson-layout">
        <div className="lesson-main">
          <LessonSection id="position" title="这一关解决什么痛点" kicker="Compression">
            <p>
              很多同学读长句时会被名词后尾巴、介词短语、插入语和从句拖走。本关不追求把每个词都分析成术语，
              只训练先把主干露出来。
            </p>
            <ExamCallout title="本关不追求">
              <p>不做完整长难句语法树，也不要求逐词标成分。四六级阅读里，先压主干更实用。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="method" title="考场判断法" kicker="Method">
            <h3>三步压缩长句</h3>
            <div className="step-list">
              {level7Steps.map((step) => (
                <article className="step-card" key={step.id}>
                  <h3>{step.title}</h3>
                  {step.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>
            <ExamCallout title="够用流程" tone="success">
              <p>先把修饰块括起来，压出“谁 + 主发动机 + 什么”，最后再把修饰细节补回去。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="scenes" title="四六级场景" kicker="CET Use">
            <div className="scene-grid">
              <ExamCallout title="阅读长句">
                <p>先删尾巴，句子主线会更快露出来。</p>
              </ExamCallout>
              <ExamCallout title="翻译">
                <p>中文长定语可以先拆成主干，再决定英文修饰放在哪里。</p>
              </ExamCallout>
              <ExamCallout title="写作">
                <p>先写主干，再加修饰，句子更稳，也不容易缺谓语。</p>
              </ExamCallout>
            </div>
          </LessonSection>

          <LessonSection id="examples" title="例句拆解" kicker="Examples">
            <div className="example-list">
              {level7Examples.map((example) => (
                <LessonExampleCard
                  key={example.id}
                  example={example}
                  vocabEntries={level7Vocab}
                  optionAriaLabel={`${example.title} 候选主干`}
                  optionTitle="候选主干"
                  engineLabel="主线骨架"
                  skeletonLabel="筛选结论"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="traps" title="常见坑" kicker="Traps">
            <div className="trap-list">
              {level7Traps.map((trap) => (
                <LessonTrapCard
                  key={trap.id}
                  trap={trap}
                  vocabEntries={level7Vocab}
                  wrongLabel="错误读法"
                  skeletonLabel="稳妥读法"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="practice" title="过关练习" kicker="Practice">
            <div className="practice-shell">
              <p>每题选完立刻批改：先删修饰，压回主干，再补回细节。</p>
              <div className="practice-progress">
                已完成 {answers.length} / {level7PracticeQuestions.length}
              </div>
              <PracticeQuestionDeck
                levelId="level-7"
                questions={level7PracticeQuestions}
                errorInfo={level7ErrorInfo}
                onAnswered={handleAnswered}
                getQuestionTitle={(_, index) => `题 ${index + 1}`}
                vocabEntries={level7Vocab}
              />
              {allPracticeAnswered ? (
                <ErrorSummary
                  levelId="level-7"
                  records={answers}
                  errorInfo={level7ErrorInfo}
                  completedTags={completedRemediations}
                  onRemediate={setActiveRemediationTag}
                  clearBody="你可以直接通关。长句压缩这一步已经很稳。"
                />
              ) : null}
              {activeRemediation ? (
                <RemediationPanel
                  levelId="level-7"
                  remediation={activeRemediation}
                  errorInfo={level7ErrorInfo}
                  onComplete={handleRemediationComplete}
                  vocabEntries={level7Vocab}
                />
              ) : null}
              {levelComplete ? (
                <section className="level-complete">
                  <p className="eyebrow">Level Clear</p>
                  <h3>你已经完成第 7 关：修饰语和长难句压缩术。</h3>
                  <p>现在你能先把长句压回主干，再补回细节。</p>
                  <p>下一关：时态、语态、主谓一致够用规则，进入写译避坑区。</p>
                  <LevelCompletionActions onBack={onBack} onNextLevel={onNextLevel} nextLevelNumber={8} />
                </section>
              ) : null}
              {!allPracticeAnswered && answeredIds.size > 0 ? (
                <p className="practice-hint">继续完成剩余题目，最后会汇总你主要卡在修饰、主干还是背景重点。</p>
              ) : null}
            </div>
          </LessonSection>

          <LastMinuteReview items={level7Summary} />
        </div>

        <TermRescueSidebar terms={level7Terms} />
      </div>
    </main>
  );
}
