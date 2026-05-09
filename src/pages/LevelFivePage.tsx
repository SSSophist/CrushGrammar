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
  level5ErrorInfo,
  level5Examples,
  level5PracticeQuestions,
  level5Remediations,
  level5Steps,
  level5Summary,
  level5Terms,
  level5Traps
} from '../data/level5';
import { level5Vocab } from '../data/levelVocab';
import { getErrorSummary } from '../lib/practice';
import type { AnswerRecord, ErrorTag } from '../types';

interface LevelFivePageProps {
  onBack: () => void;
}

export default function LevelFivePage({ onBack }: LevelFivePageProps) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [activeRemediationTag, setActiveRemediationTag] = useState<ErrorTag | null>(null);
  const [completedRemediations, setCompletedRemediations] = useState<ErrorTag[]>([]);

  const answeredIds = useMemo(() => new Set(answers.map((answer) => answer.questionId)), [answers]);
  const allPracticeAnswered = answers.length >= level5PracticeQuestions.length;
  const errorSummary = useMemo(() => getErrorSummary(answers), [answers]);
  const activeRemediation = activeRemediationTag
    ? level5Remediations.find((remediation) => remediation.tag === activeRemediationTag)
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
        <p className="eyebrow">Level 5</p>
        <h1>非谓语三件套</h1>
        <p>
          本关不讲完整语法体系，只训练够用判断：<strong>主动感</strong>、<strong>被动感</strong>、
          <strong>目的感</strong>。先把假动作降级，再回去抓主线。
        </p>
        <div className="lesson-facts">
          <span>三感判断法</span>
          <span>15 题即时批改</span>
          <span>6 个常见错因</span>
          <span>先降级再读主线</span>
        </div>
      </section>

      <LevelNav ariaLabel="第 5 关学习路线" />

      <div className="lesson-layout">
        <div className="lesson-main">
          <LessonSection id="position" title="这一关解决什么痛点" kicker="Non-finite">
            <p>
              doing / done / to do 最容易让人误以为“句子里好多动作”。其实四六级阅读里，先不用深究名称，
              只要判断它是主动感、被动感还是目的感，就能把长句压回主线。
            </p>
            <ExamCallout title="本关不追求">
              <p>不区分所有非谓语细分功能，也不背完整表格。我们只训练读懂句子的最低必要动作。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="method" title="考场判断法" kicker="Method">
            <h3>三步处理假动作</h3>
            <div className="step-list">
              {level5Steps.map((step) => (
                <article className="step-card" key={step.id}>
                  <h3>{step.title}</h3>
                  {step.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>
            <ExamCallout title="够用流程" tone="success">
              <p>先问它是不是正式主句动词。如果不是，就按主动感、被动感、目的感降级，再找真正主线。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="scenes" title="四六级场景" kicker="CET Use">
            <div className="scene-grid">
              <ExamCallout title="阅读长句">
                <p>把假动作括起来，主语和主发动机会更快出现。</p>
              </ExamCallout>
              <ExamCallout title="翻译写作">
                <p>目的感结构很适合处理“为了……”“用来……”这类中文表达。</p>
              </ExamCallout>
              <ExamCallout title="选词填空">
                <p>判断空格是不是修饰块或目的块，可以减少动词形式误选。</p>
              </ExamCallout>
            </div>
          </LessonSection>

          <LessonSection id="examples" title="例句拆解" kicker="Examples">
            <div className="example-list">
              {level5Examples.map((example) => (
                <LessonExampleCard
                  key={example.id}
                  example={example}
                  vocabEntries={level5Vocab}
                  optionAriaLabel={`${example.title} 候选功能`}
                  optionTitle="候选功能"
                  engineLabel="主线骨架"
                  skeletonLabel="筛选结论"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="traps" title="常见坑" kicker="Traps">
            <div className="trap-list">
              {level5Traps.map((trap) => (
                <LessonTrapCard
                  key={trap.id}
                  trap={trap}
                  vocabEntries={level5Vocab}
                  wrongLabel="错误读法"
                  skeletonLabel="稳妥读法"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="practice" title="过关练习" kicker="Practice">
            <div className="practice-shell">
              <p>每题选完立刻批改：先把 doing / done / to do 降级，再判断它是主动感、被动感还是目的感。</p>
              <div className="practice-progress">
                已完成 {answers.length} / {level5PracticeQuestions.length}
              </div>
              <div className="question-list">
                {level5PracticeQuestions.map((question, index) => (
                  <PracticeQuestion
                    key={question.id}
                    question={question}
                    errorInfo={level5ErrorInfo}
                    onAnswered={handleAnswered}
                    title={`题 ${index + 1}`}
                    vocabEntries={level5Vocab}
                  />
                ))}
              </div>
              {allPracticeAnswered ? (
                <ErrorSummary
                  records={answers}
                  errorInfo={level5ErrorInfo}
                  completedTags={completedRemediations}
                  onRemediate={setActiveRemediationTag}
                  clearBody="你可以直接通关。doing / done / to do 的够用判断已经稳了。"
                />
              ) : null}
              {activeRemediation ? (
                <RemediationPanel
                  remediation={activeRemediation}
                  errorInfo={level5ErrorInfo}
                  onComplete={handleRemediationComplete}
                  vocabEntries={level5Vocab}
                />
              ) : null}
              {levelComplete ? (
                <section className="level-complete">
                  <p className="eyebrow">Level Clear</p>
                  <h3>你已经完成第 5 关：非谓语三件套。</h3>
                  <p>现在你能把假动作降级，再抓真正主线。</p>
                  <p>下一关：并列、转折、因果和让步，继续处理句间逻辑。</p>
                </section>
              ) : null}
              {!allPracticeAnswered && answeredIds.size > 0 ? (
                <p className="practice-hint">继续完成剩余题目，最后会汇总你主要卡在假动作、修饰对象还是目的背景。</p>
              ) : null}
            </div>
          </LessonSection>

          <LastMinuteReview items={level5Summary} />
        </div>

        <TermRescueSidebar terms={level5Terms} />
      </div>
    </main>
  );
}
