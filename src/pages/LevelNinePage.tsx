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
  level9ErrorInfo,
  level9Examples,
  level9PracticeQuestions,
  level9Remediations,
  level9Steps,
  level9Summary,
  level9Terms,
  level9Traps
} from '../data/level9';
import { level9Vocab } from '../data/levelVocab';
import { getErrorSummary } from '../lib/practice';
import type { AnswerRecord, ErrorTag } from '../types';

interface LevelNinePageProps {
  onBack: () => void;
}

export default function LevelNinePage({ onBack }: LevelNinePageProps) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [activeRemediationTag, setActiveRemediationTag] = useState<ErrorTag | null>(null);
  const [completedRemediations, setCompletedRemediations] = useState<ErrorTag[]>([]);

  const answeredIds = useMemo(() => new Set(answers.map((answer) => answer.questionId)), [answers]);
  const allPracticeAnswered = answers.length >= level9PracticeQuestions.length;
  const errorSummary = useMemo(() => getErrorSummary(answers), [answers]);
  const activeRemediation = activeRemediationTag
    ? level9Remediations.find((remediation) => remediation.tag === activeRemediationTag)
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
        <p className="eyebrow">Level 9</p>
        <h1>高频特殊结构速通</h1>
        <p>
          这一关不背高级语法清单，只处理四六级里最容易拖慢读句子的四类包装：
          <strong>比较</strong>、<strong>强调</strong>、<strong>倒装</strong>、<strong>形式 it</strong>。
          目标很简单：先识别壳，再还原成人话，最后回到句子主线。
        </p>
        <div className="lesson-facts">
          <span>四类够用结构</span>
          <span>15 题即时批改</span>
          <span>6 个常见错因</span>
          <span>先还原成人话</span>
        </div>
      </section>

      <LevelNav ariaLabel="第 9 关学习路线" />

      <div className="lesson-layout">
        <div className="lesson-main">
          <LessonSection id="position" title="这一关解决什么痛点" kicker="Position">
            <p>
              很多同学不是看不懂单词，而是被特殊结构的顺序带偏：看到 than 就把比较方向读反，看到 It is 就把 it
              当重点，看到 Only/Rarely 开头就被倒装吓住。本关只练一个动作：把包装拆掉。
            </p>
            <ExamCallout title="本关不追求">
              <p>不背完整倒装分类，不研究强调句所有限制，也不做学术语法分析。能在阅读和写译里读懂方向、重点和主线，就够用。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="method" title="考场判断法" kicker="Method">
            <h3>特殊结构三步拆</h3>
            <div className="step-list">
              {level9Steps.map((step) => (
                <article className="step-card" key={step.id}>
                  <h3>{step.title}</h3>
                  {step.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>
            <ExamCallout title="够用流程" tone="success">
              <p>看到特殊结构先不要逐词硬翻。先认信号，再还原成普通句，最后问：这句话真正想说什么？</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="scenes" title="四六级场景" kicker="CET Use">
            <div className="scene-grid">
              <ExamCallout title="阅读">
                <p>比较、强调和倒装常常提示答案方向，读反就会选到相反选项。</p>
              </ExamCallout>
              <ExamCallout title="翻译">
                <p>“重要的是……”“只有……才……”这类中文很容易对应形式 it、强调或倒装。</p>
              </ExamCallout>
              <ExamCallout title="写作">
                <p>不用堆高级句。少量 It is...that、not only...but also... 用稳，就能让句子更有层次。</p>
              </ExamCallout>
            </div>
          </LessonSection>

          <LessonSection id="examples" title="例句拆解" kicker="Examples">
            <div className="example-list">
              {level9Examples.map((example) => (
                <LessonExampleCard
                  key={example.id}
                  example={example}
                  vocabEntries={level9Vocab}
                  optionAriaLabel={`${example.title} 候选答案`}
                  optionTitle="候选答案"
                  engineLabel="主线还原"
                  skeletonLabel="筛选结论"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="traps" title="常见坑" kicker="Traps">
            <div className="trap-list">
              {level9Traps.map((trap) => (
                <LessonTrapCard
                  key={trap.id}
                  trap={trap}
                  vocabEntries={level9Vocab}
                  wrongLabel="错误读法"
                  skeletonLabel="稳妥读法"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="practice" title="过关练习" kicker="Practice">
            <div className="practice-shell">
              <p>每题选完立刻批改：先看特殊结构信号，再把句子还原成人话，最后回到主线。</p>
              <div className="practice-progress">
                已完成 {answers.length} / {level9PracticeQuestions.length}
              </div>
              <div className="question-list">
                {level9PracticeQuestions.map((question, index) => (
                  <PracticeQuestion
                    key={question.id}
                    question={question}
                    errorInfo={level9ErrorInfo}
                    onAnswered={handleAnswered}
                    title={`题 ${index + 1}`}
                    vocabEntries={level9Vocab}
                  />
                ))}
              </div>
              {allPracticeAnswered ? (
                <ErrorSummary
                  records={answers}
                  errorInfo={level9ErrorInfo}
                  completedTags={completedRemediations}
                  onRemediate={setActiveRemediationTag}
                  clearBody="你可以直接通关。现在你能把高频特殊结构先还原成人话，再回到句子主线。"
                />
              ) : null}
              {activeRemediation ? (
                <RemediationPanel
                  remediation={activeRemediation}
                  errorInfo={level9ErrorInfo}
                  onComplete={handleRemediationComplete}
                  vocabEntries={level9Vocab}
                />
              ) : null}
              {levelComplete ? (
                <section className="level-complete">
                  <p className="eyebrow">Level Clear</p>
                  <h3>你已经完成第 9 关：高频特殊结构速通。</h3>
                  <p>现在你能把比较、强调、倒装和形式 it 先拆成普通人话，再继续读句子主线。</p>
                  <p>下一关：总复盘，把前面所有关卡压成一套考场固定流程。</p>
                </section>
              ) : null}
              {!allPracticeAnswered && answeredIds.size > 0 ? (
                <p className="practice-hint">继续完成剩余题目，最后会汇总你主要卡在比较方向、强调对象、倒装还原还是形式 it。</p>
              ) : null}
            </div>
          </LessonSection>

          <LastMinuteReview items={level9Summary} />
        </div>

        <TermRescueSidebar terms={level9Terms} />
      </div>
    </main>
  );
}
