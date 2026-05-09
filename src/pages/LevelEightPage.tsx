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
  level8ErrorInfo,
  level8Examples,
  level8PracticeQuestions,
  level8Remediations,
  level8Steps,
  level8Summary,
  level8Terms,
  level8Traps
} from '../data/level8';
import { level8Vocab } from '../data/levelVocab';
import { getErrorSummary } from '../lib/practice';
import type { AnswerRecord, ErrorTag } from '../types';

interface LevelEightPageProps {
  onBack: () => void;
}

export default function LevelEightPage({ onBack }: LevelEightPageProps) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [activeRemediationTag, setActiveRemediationTag] = useState<ErrorTag | null>(null);
  const [completedRemediations, setCompletedRemediations] = useState<ErrorTag[]>([]);

  const answeredIds = useMemo(() => new Set(answers.map((answer) => answer.questionId)), [answers]);
  const allPracticeAnswered = answers.length >= level8PracticeQuestions.length;
  const errorSummary = useMemo(() => getErrorSummary(answers), [answers]);
  const activeRemediation = activeRemediationTag
    ? level8Remediations.find((remediation) => remediation.tag === activeRemediationTag)
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
        <p className="eyebrow">Level 8</p>
        <h1>时态、语态、主谓一致够用规则</h1>
        <p>
          这一关不讲完整语法体系，只做写作和翻译最后的基础分检查：
          <strong>先定时间</strong>、<strong>再看主动被动</strong>、<strong>最后查主谓一致</strong>。
          目的很简单：句子读得懂，写出来不犯显眼低级错。
        </p>
        <div className="lesson-facts">
          <span>写译三查</span>
          <span>15 题即时批改</span>
          <span>6 个常见错因</span>
          <span>少扣基础分</span>
        </div>
      </section>

      <LevelNav ariaLabel="第 8 关学习路线" />

      <div className="lesson-layout">
        <div className="lesson-main">
          <LessonSection id="position" title="这一关解决什么痛点" kicker="Writing Check">
            <p>
              四六级不考单独语法选择题，但写作、翻译、阅读长句都会暴露基础语法问题。这里先不追求深，
              只训练三个最值钱的动作：时间别错、主动被动别反、主语和动词别打架。
            </p>
            <ExamCallout title="本关不追求">
              <p>不背完整时态表，不研究所有被动例外，也不做学术语法分析。能稳定写对常见句子，就够用。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="method" title="考场判断法" kicker="Method">
            <h3>写译三查</h3>
            <div className="step-list">
              {level8Steps.map((step) => (
                <article className="step-card" key={step.id}>
                  <h3>{step.title}</h3>
                  {step.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>
            <ExamCallout title="够用流程" tone="success">
              <p>写完一句英文后，按顺序扫一遍：时间词有没有对上，主语是不是被做，真正主语核心是单数还是复数。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="scenes" title="四六级场景" kicker="CET Use">
            <div className="scene-grid">
              <ExamCallout title="写作">
                <p>观点句常写一般事实，别把长期现象乱写成过去。</p>
              </ExamCallout>
              <ExamCallout title="翻译">
                <p>中文常省略“被”，英文需要判断主语是不是承受动作。</p>
              </ExamCallout>
              <ExamCallout title="阅读">
                <p>看到长主语时，先抓核心名词，动词形式会更清楚。</p>
              </ExamCallout>
            </div>
          </LessonSection>

          <LessonSection id="examples" title="例句拆解" kicker="Examples">
            <div className="example-list">
              {level8Examples.map((example) => (
                <LessonExampleCard
                  key={example.id}
                  example={example}
                  vocabEntries={level8Vocab}
                  optionAriaLabel={`${example.title} 候选答案`}
                  optionTitle="候选答案"
                  engineLabel="主线骨架"
                  skeletonLabel="筛选结论"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="traps" title="常见坑" kicker="Traps">
            <div className="trap-list">
              {level8Traps.map((trap) => (
                <LessonTrapCard
                  key={trap.id}
                  trap={trap}
                  vocabEntries={level8Vocab}
                  wrongLabel="错误读法"
                  skeletonLabel="稳妥读法"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="practice" title="过关练习" kicker="Practice">
            <div className="practice-shell">
              <p>每题选完立刻批改：先定时间，再看主动被动，最后查真正主语核心。</p>
              <div className="practice-progress">
                已完成 {answers.length} / {level8PracticeQuestions.length}
              </div>
              <div className="question-list">
                {level8PracticeQuestions.map((question, index) => (
                  <PracticeQuestion
                    key={question.id}
                    question={question}
                    errorInfo={level8ErrorInfo}
                    onAnswered={handleAnswered}
                    title={`题 ${index + 1}`}
                    vocabEntries={level8Vocab}
                  />
                ))}
              </div>
              {allPracticeAnswered ? (
                <ErrorSummary
                  records={answers}
                  errorInfo={level8ErrorInfo}
                  completedTags={completedRemediations}
                  onRemediate={setActiveRemediationTag}
                  clearBody="你可以直接通关。写译基础检查这一步已经很稳。"
                />
              ) : null}
              {activeRemediation ? (
                <RemediationPanel
                  remediation={activeRemediation}
                  errorInfo={level8ErrorInfo}
                  onComplete={handleRemediationComplete}
                  vocabEntries={level8Vocab}
                />
              ) : null}
              {levelComplete ? (
                <section className="level-complete">
                  <p className="eyebrow">Level Clear</p>
                  <h3>你已经完成第 8 关：时态、语态、主谓一致够用规则。</h3>
                  <p>现在你能用一套简单检查法，减少写作和翻译里的基础扣分。</p>
                  <p>下一关：高频特殊结构速通，处理比较、强调、倒装等常见考场结构。</p>
                </section>
              ) : null}
              {!allPracticeAnswered && answeredIds.size > 0 ? (
                <p className="practice-hint">继续完成剩余题目，最后会汇总你主要卡在时间、主被动还是主语核心。</p>
              ) : null}
            </div>
          </LessonSection>

          <LastMinuteReview items={level8Summary} />
        </div>

        <TermRescueSidebar terms={level8Terms} />
      </div>
    </main>
  );
}
