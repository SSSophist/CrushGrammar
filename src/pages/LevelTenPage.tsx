import { useMemo, useState, useEffect } from 'react';
import ExamCallout from '../components/ExamCallout';
import ErrorSummary from '../components/ErrorSummary';
import LastMinuteReview from '../components/LastMinuteReview';
import LessonSection from '../components/LessonSection';
import LevelCompletionActions from '../components/LevelCompletionActions';
import LevelNav from '../components/LevelNav';
import PracticeQuestionDeck from '../components/PracticeQuestionDeck';
import RemediationPanel from '../components/RemediationPanel';
import TermRescueSidebar from '../components/TermRescueSidebar';
import VocabText from '../components/VocabText';
import { errorTagInfo } from '../data/level1'; // Reusing errorTagInfo since it covers all basic errors
import {
  lastMinuteReview,
  level10Examples,
  level10Steps,
  level10Terms,
  level10Traps,
  practiceQuestions,
  remediations
} from '../data/level10';
import { level10Vocab } from '../data/levelVocab';
import { getErrorSummary } from '../lib/practice';
import type { AnswerRecord, ErrorTag } from '../types';

interface LevelTenPageProps {
  onBack: () => void;
  onLevelComplete: () => void;
}

export default function LevelTenPage({ onBack, onLevelComplete }: LevelTenPageProps) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [activeRemediationTag, setActiveRemediationTag] = useState<ErrorTag | null>(null);
  const [completedRemediations, setCompletedRemediations] = useState<ErrorTag[]>([]);

  const answeredIds = useMemo(() => new Set(answers.map((answer) => answer.questionId)), [answers]);
  const allPracticeAnswered = answers.length >= practiceQuestions.length;
  const errorSummary = useMemo(() => getErrorSummary(answers), [answers]);
  const activeRemediation = activeRemediationTag
    ? remediations.find((remediation) => remediation.tag === activeRemediationTag)
    : null;
  const levelComplete =
    allPracticeAnswered &&
    (errorSummary.length === 0 || errorSummary.every((item) => completedRemediations.includes(item.tag)));

  useEffect(() => {
    if (levelComplete) {
      onLevelComplete();
    }
  }, [levelComplete, onLevelComplete]);
  const renderVocabText = (text: string) => <VocabText text={text} entries={level10Vocab} />;

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
        <p className="eyebrow">Level 10</p>
        <h1>总复盘：考场秒杀流程</h1>
        <p>
          不要凭感觉瞎猜，考场上永远按这个顺序走：
          <strong>抓骨架 {'->'} 砍修饰 {'->'} 看逻辑 {'->'} 定词性</strong>。
        </p>
        <div className="lesson-facts">
          <span>4 步解题 SOP</span>
          <span>10 题综合实战</span>
          <span>明确你的薄弱项</span>
          <span>最后冲刺拿分</span>
        </div>
      </section>

      <LevelNav />

      <div className="lesson-layout">
        <div className="lesson-main">
          <LessonSection id="position" title="这一关解决什么痛点" kicker="Position">
            <p>
              很多同学学完了前面的零散语法点，但一上考场：看到三行长的阅读句子，还是习惯性地从左到右逐词翻译，最后脑子一团浆糊。做选词填空拿着单词一个个往里套意思，耗时巨长还错一半。
            </p>
            <ExamCallout title="本关不追求">
              <p>这一关不讲任何新的语法点。如果遇到卡壳的地方，说明前 9 关还有漏洞，必须根据错因回到对应的关卡复习。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="method" title="考场判断法（SOP）" kicker="Method">
            <div className="step-list">
              {level10Steps.map((step) => (
                <article className="step-card" key={step.id}>
                  <h3>{step.title}</h3>
                  {step.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>
          </LessonSection>

          <LessonSection id="scenes" title="四六级场景" kicker="CET Use">
            <div className="scene-grid">
              <ExamCallout title="阅读长难句">
                <p>扫读时直接跳过括号里的修饰语，只看“谁+做了+什么”，阅读速度提升一倍，且不易被干扰项骗。</p>
              </ExamCallout>
              <ExamCallout title="选词填空">
                <p>不要上来就看选项意思。先看空格处缺什么词性，甚至缺单数还是复数，圈定 2-3 个词后再带入意思。</p>
              </ExamCallout>
              <ExamCallout title="翻译和写作">
                <p>先写死核心骨架（主谓宾），然后再把定语和状语像挂件一样挂上去，最后检查动词时态和单复数。</p>
              </ExamCallout>
            </div>
          </LessonSection>

          <LessonSection id="examples" title="例句拆解" kicker="Examples">
            <div className="example-list">
              {level10Examples.map((example) => (
                <article className="example-card" key={example.id}>
                  <h3>{example.title}</h3>
                  <blockquote>{renderVocabText(example.sentence)}</blockquote>
                  <p>
                    <strong>核心动作：</strong>
                    {renderVocabText(example.engine)}
                  </p>
                  <p>
                    <strong>骨架：</strong>
                    {renderVocabText(example.skeleton)}
                  </p>
                  <ul>
                    {example.details.map((detail) => (
                      <li key={detail}>{renderVocabText(detail)}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>翻译/正解：</strong>
                    {example.translation}
                  </p>
                  {example.warning ? (
                    <ExamCallout title="SOP 提醒" tone="warning">
                      <p>{renderVocabText(example.warning)}</p>
                    </ExamCallout>
                  ) : null}
                </article>
              ))}
            </div>
          </LessonSection>

          <LessonSection id="traps" title="常见坑" kicker="Traps">
            <div className="trap-list">
              {level10Traps.map((trap) => (
                <article className="trap-card" key={trap.id}>
                  <h3>{trap.title}</h3>
                  <blockquote>{renderVocabText(trap.sentence)}</blockquote>
                  <p>
                    <strong>致命表现：</strong>
                    {renderVocabText(trap.wrongRead)}
                  </p>
                  <p>
                    <strong>为什么错：</strong>
                    {renderVocabText(trap.whyWrong)}
                  </p>
                  <ul>
                    {trap.correctBreakdown.map((line) => (
                      <li key={line}>{renderVocabText(line)}</li>
                    ))}
                  </ul>
                  <ExamCallout title="SOP 动作" tone="success">
                    <p>{renderVocabText(trap.quickRule)}</p>
                  </ExamCallout>
                </article>
              ))}
            </div>
          </LessonSection>

          <LessonSection id="practice" title="综合实战演练" kicker="Practice">
            <div className="practice-shell">
              <p>每题都会考察你是否真正掌握了四六级秒杀流水线，选完立刻批改并给出解析。</p>
              <div className="practice-progress">
                已完成 {answers.length} / {practiceQuestions.length}
              </div>
              <PracticeQuestionDeck
                questions={practiceQuestions}
                errorInfo={errorTagInfo}
                onAnswered={handleAnswered}
                vocabEntries={level10Vocab}
              />
              {allPracticeAnswered ? (
                <ErrorSummary
                  records={answers}
                  errorInfo={errorTagInfo}
                  completedTags={completedRemediations}
                  onRemediate={setActiveRemediationTag}
                />
              ) : null}
              {activeRemediation ? (
                <RemediationPanel
                  remediation={activeRemediation}
                  errorInfo={errorTagInfo}
                  onComplete={handleRemediationComplete}
                  vocabEntries={level10Vocab}
                />
              ) : null}
              {levelComplete ? (
                <section className="level-complete">
                  <p className="eyebrow">Level Clear</p>
                  <h3>🎉 通关祝贺！你已完成四六级语法速通所有内容！</h3>
                  <p>带着这套“骨架 {'->'} 修饰 {'->'} 逻辑 {'->'} 词性”的解题流水线，自信地去考场拿分吧！</p>
                  <p>在四六级的考场上，“能看懂、填对空、写得对”就是唯一的真理。祝你过级顺利！</p>
                  <LevelCompletionActions onBack={onBack} />
                </section>
              ) : null}
              {!allPracticeAnswered && answeredIds.size > 0 ? (
                <p className="practice-hint">继续完成剩余题目，系统会在最后汇总你的薄弱项。</p>
              ) : null}
            </div>
          </LessonSection>

          <LastMinuteReview items={lastMinuteReview} />
        </div>

        <TermRescueSidebar terms={level10Terms} />
      </div>
    </main>
  );
}
