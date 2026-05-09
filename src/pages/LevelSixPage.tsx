import { useMemo, useState } from 'react';
import ExamCallout from '../components/ExamCallout';
import ErrorSummary from '../components/ErrorSummary';
import LastMinuteReview from '../components/LastMinuteReview';
import LessonExampleCard from '../components/LessonExampleCard';
import LessonSection from '../components/LessonSection';
import LessonTrapCard from '../components/LessonTrapCard';
import LevelNav from '../components/LevelNav';
import PracticeQuestion from '../components/PracticeQuestion';
import RemediationPanel from '../components/RemediationPanel';
import TermRescueSidebar from '../components/TermRescueSidebar';
import {
  level6ErrorInfo,
  level6Examples,
  level6PracticeQuestions,
  level6Remediations,
  level6Steps,
  level6Summary,
  level6Terms,
  level6Traps
} from '../data/level6';
import { level6Vocab } from '../data/levelVocab';
import { getErrorSummary } from '../lib/practice';
import type { AnswerRecord, ErrorTag } from '../types';

interface LevelSixPageProps {
  onBack: () => void;
}

export default function LevelSixPage({ onBack }: LevelSixPageProps) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [activeRemediationTag, setActiveRemediationTag] = useState<ErrorTag | null>(null);
  const [completedRemediations, setCompletedRemediations] = useState<ErrorTag[]>([]);

  const answeredIds = useMemo(() => new Set(answers.map((answer) => answer.questionId)), [answers]);
  const allPracticeAnswered = answers.length >= level6PracticeQuestions.length;
  const errorSummary = useMemo(() => getErrorSummary(answers), [answers]);
  const activeRemediation = activeRemediationTag
    ? level6Remediations.find((remediation) => remediation.tag === activeRemediationTag)
    : null;
  const levelComplete =
    allPracticeAnswered &&
    (errorSummary.length === 0 || errorSummary.every((item) => completedRemediations.includes(item.tag)));

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
        <p className="eyebrow">Level 6</p>
        <h1>并列、转折、因果和让步</h1>
        <p>
          本关只训练一件事：看到逻辑词，先判断作者是在<strong>同向补充</strong>、<strong>反向转折</strong>，
          还是在给出<strong>因果方向</strong>。读懂方向，阅读题会轻很多。
        </p>
        <div className="lesson-facts">
          <span>方向判断法</span>
          <span>15 题即时批改</span>
          <span>6 个常见错因</span>
          <span>先看路标再读细节</span>
        </div>
      </section>

      <LevelNav ariaLabel="第 6 关学习路线" />

      <div className="lesson-layout">
        <div className="lesson-main">
          <LessonSection id="position" title="这一关解决什么痛点" kicker="Logic Flow">
            <p>
              四六级阅读经常不是单词全不认识，而是前后方向读反：该看转折后，却盯着前半句；该找原因，却拿结果当原因。
              本关把连接词翻成人话：加信息、拐方向、说原因、给结果、先承认再反打。
            </p>
            <ExamCallout title="本关不追求">
              <p>不背连接词大全，也不讲复杂篇章分析。先把常见方向读稳，足够处理大量阅读和翻译句子。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="method" title="考场判断法" kicker="Method">
            <h3>四步判断作者逻辑方向</h3>
            <div className="step-list">
              {level6Steps.map((step) => (
                <article className="step-card" key={step.id}>
                  <h3>{step.title}</h3>
                  {step.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>
            <ExamCallout title="够用流程" tone="success">
              <p>先圈逻辑词，再把前后两半各压成一句人话，最后判断是同向、转折、因果还是让步。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="scenes" title="四六级场景" kicker="CET Use">
            <div className="scene-grid">
              <ExamCallout title="阅读理解">
                <p>转折、因果、让步附近常常藏着答案和作者态度。</p>
              </ExamCallout>
              <ExamCallout title="段落主旨">
                <p>多句信息看不清时，先看方向词能帮你判断段落重心。</p>
              </ExamCallout>
              <ExamCallout title="翻译写作">
                <p>会用简单逻辑词，句子会更顺，也更像完整表达。</p>
              </ExamCallout>
            </div>
          </LessonSection>

          <LessonSection id="examples" title="例句拆解" kicker="Examples">
            <div className="example-list">
              {level6Examples.map((example) => (
                <LessonExampleCard
                  key={example.id}
                  example={example}
                  vocabEntries={level6Vocab}
                  optionAriaLabel={`${example.title} 候选方向`}
                  optionTitle="候选方向"
                  engineLabel="主线骨架"
                  skeletonLabel="筛选结论"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="traps" title="常见坑" kicker="Traps">
            <div className="trap-list">
              {level6Traps.map((trap) => (
                <LessonTrapCard
                  key={trap.id}
                  trap={trap}
                  vocabEntries={level6Vocab}
                  wrongLabel="错误读法"
                  skeletonLabel="稳妥读法"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="practice" title="过关练习" kicker="Practice">
            <div className="practice-shell">
              <p>每题选完立刻批改：先看逻辑路标，再判断前后两半是同向、转折、因果、条件还是让步。</p>
              <div className="practice-progress">
                已完成 {answers.length} / {level6PracticeQuestions.length}
              </div>
              <div className="question-list">
                {level6PracticeQuestions.map((question, index) => (
                  <PracticeQuestion
                    key={question.id}
                    question={question}
                    errorInfo={level6ErrorInfo}
                    onAnswered={handleAnswered}
                    title={`题 ${index + 1}`}
                    vocabEntries={level6Vocab}
                  />
                ))}
              </div>
              {allPracticeAnswered ? (
                <ErrorSummary
                  records={answers}
                  errorInfo={level6ErrorInfo}
                  completedTags={completedRemediations}
                  onRemediate={setActiveRemediationTag}
                  clearBody="你可以直接通关。作者逻辑方向这一步已经很稳。"
                />
              ) : null}
              {activeRemediation ? (
                <RemediationPanel
                  remediation={activeRemediation}
                  errorInfo={level6ErrorInfo}
                  onComplete={handleRemediationComplete}
                  vocabEntries={level6Vocab}
                />
              ) : null}
              {levelComplete ? (
                <section className="level-complete">
                  <p className="eyebrow">Level Clear</p>
                  <h3>你已经完成第 6 关：并列、转折、因果和让步。</h3>
                  <p>现在你能先抓作者逻辑方向，再判断句子和段落重点。</p>
                  <p>下一关：修饰语和长难句压缩术，把更长的句子继续压回主干。</p>
                </section>
              ) : null}
              {!allPracticeAnswered && answeredIds.size > 0 ? (
                <p className="practice-hint">继续完成剩余题目，最后会汇总你主要卡在方向读反、重点误判还是因果混乱。</p>
              ) : null}
            </div>
          </LessonSection>

          <LastMinuteReview items={level6Summary} />
        </div>

        <TermRescueSidebar terms={level6Terms} />
      </div>
    </main>
  );
}
