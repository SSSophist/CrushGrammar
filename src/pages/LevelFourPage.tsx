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
  level4ErrorInfo,
  level4Examples,
  level4PracticeQuestions,
  level4Remediations,
  level4Steps,
  level4Summary,
  level4Terms,
  level4Traps
} from '../data/level4';
import { level4Vocab } from '../data/levelVocab';
import { getErrorSummary } from '../lib/practice';
import type { AnswerRecord, ErrorTag } from '../types';

interface LevelFourPageProps {
  onBack: () => void;
}

export default function LevelFourPage({ onBack }: LevelFourPageProps) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [activeRemediationTag, setActiveRemediationTag] = useState<ErrorTag | null>(null);
  const [completedRemediations, setCompletedRemediations] = useState<ErrorTag[]>([]);

  const answeredIds = useMemo(() => new Set(answers.map((answer) => answer.questionId)), [answers]);
  const allPracticeAnswered = answers.length >= level4PracticeQuestions.length;
  const errorSummary = useMemo(() => getErrorSummary(answers), [answers]);
  const activeRemediation = activeRemediationTag
    ? level4Remediations.find((remediation) => remediation.tag === activeRemediationTag)
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
        <p className="eyebrow">Level 4</p>
        <h1>从句只分三大类就够了</h1>
        <p>
          四六级不考你背从句分类表。我们只训练一个考场动作：看到一坨从句，先判断它是在
          <strong>当一个东西</strong>、<strong>修饰一个东西</strong>，还是<strong>交代背景逻辑</strong>。
        </p>
        <div className="lesson-facts">
          <span>三问判断法</span>
          <span>15 题即时批改</span>
          <span>6 个常见错因</span>
          <span>先问它在干嘛</span>
        </div>
      </section>

      <LevelNav ariaLabel="第 4 关学习路线" />

      <div className="lesson-layout">
        <div className="lesson-main">
          <LessonSection id="position" title="这一关解决什么痛点" kicker="Clause Function">
            <p>
              很多同学看到 that、who、because、although 就开始背术语，结果句子没读懂。本关不研究语法规则本身，只把从句翻成人话：
              <strong>这坨东西在句子里干嘛？</strong>
            </p>
            <ExamCallout title="本关不追求">
              <p>不系统讲名词性从句、定语从句、状语从句的所有细分。四六级阅读里，先判断功能，比背名字更有用。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="method" title="考场判断法" kicker="Method">
            <h3>三步判断从句功能</h3>
            <div className="step-list">
              {level4Steps.map((step) => (
                <article className="step-card" key={step.id}>
                  <h3>{step.title}</h3>
                  {step.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>
            <ExamCallout title="够用流程" tone="success">
              <p>先别问它叫什么从句。先问：它能不能整体当一个东西？是不是贴着名词？是不是在交代时间、原因、条件、让步？</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="scenes" title="四六级场景" kicker="CET Use">
            <div className="scene-grid">
              <ExamCallout title="阅读长句">
                <p>从句先降级，主线自然露出来，尤其适合处理阅读里的长主语和长修饰。</p>
              </ExamCallout>
              <ExamCallout title="翻译写作">
                <p>中文里的一整件事，可以用 that / what / whether 打包成英文句子的一个部分。</p>
              </ExamCallout>
              <ExamCallout title="选词填空">
                <p>判断空格周围是不是从句结构，有助于确认词性和句子位置。</p>
              </ExamCallout>
            </div>
          </LessonSection>

          <LessonSection id="examples" title="例句拆解" kicker="Examples">
            <div className="example-list">
              {level4Examples.map((example) => (
                <LessonExampleCard
                  key={example.id}
                  example={example}
                  vocabEntries={level4Vocab}
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
              {level4Traps.map((trap) => (
                <LessonTrapCard
                  key={trap.id}
                  trap={trap}
                  vocabEntries={level4Vocab}
                  wrongLabel="错误读法"
                  skeletonLabel="稳妥读法"
                />
              ))}
            </div>
          </LessonSection>

          <LessonSection id="practice" title="过关练习" kicker="Practice">
            <div className="practice-shell">
              <p>每题选完立刻批改：这次不背名字，只判断这坨从句是当一个东西、修饰一个东西，还是交代背景逻辑。</p>
              <div className="practice-progress">
                已完成 {answers.length} / {level4PracticeQuestions.length}
              </div>
              <div className="question-list">
                {level4PracticeQuestions.map((question, index) => (
                  <PracticeQuestion
                    key={question.id}
                    question={question}
                    errorInfo={level4ErrorInfo}
                    onAnswered={handleAnswered}
                    title={`题 ${index + 1}`}
                    vocabEntries={level4Vocab}
                  />
                ))}
              </div>
              {allPracticeAnswered ? (
                <ErrorSummary
                  records={answers}
                  errorInfo={level4ErrorInfo}
                  completedTags={completedRemediations}
                  onRemediate={setActiveRemediationTag}
                  clearBody="你可以直接通关。从句三分法这一步已经很稳。"
                />
              ) : null}
              {activeRemediation ? (
                <RemediationPanel
                  remediation={activeRemediation}
                  errorInfo={level4ErrorInfo}
                  onComplete={handleRemediationComplete}
                  vocabEntries={level4Vocab}
                />
              ) : null}
              {levelComplete ? (
                <section className="level-complete">
                  <p className="eyebrow">Level Clear</p>
                  <h3>你已经完成第 4 关：从句只分三大类就够了。</h3>
                  <p>现在你能先判断从句功能，再回到主线读懂句子。</p>
                  <p>下一关：非谓语三件套，继续处理 doing / done / to do。</p>
                </section>
              ) : null}
              {!allPracticeAnswered && answeredIds.size > 0 ? (
                <p className="practice-hint">继续完成剩余题目，最后会汇总你主要卡在从句功能、修饰对象还是逻辑背景。</p>
              ) : null}
            </div>
          </LessonSection>

          <LastMinuteReview items={level4Summary} />
        </div>

        <TermRescueSidebar terms={level4Terms} />
      </div>
    </main>
  );
}
