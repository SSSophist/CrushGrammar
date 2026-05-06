import ExamCallout from '../components/ExamCallout';
import LastMinuteReview from '../components/LastMinuteReview';
import LessonSection from '../components/LessonSection';
import LevelNav from '../components/LevelNav';
import TermRescueSidebar from '../components/TermRescueSidebar';
import { lastMinuteReview, level1Examples, level1Steps, level1Terms, level1Traps } from '../data/level1';

interface LevelOnePageProps {
  onBack: () => void;
}

export default function LevelOnePage({ onBack }: LevelOnePageProps) {
  return (
    <main className="page-shell lesson-page">
      <button type="button" className="text-action" onClick={onBack}>
        返回闯关地图
      </button>

      <section className="lesson-hero">
        <p className="eyebrow">Level 1</p>
        <h1>先会看句子骨架</h1>
        <p>
          英文句子再长，第一步也先找它的核心骨架：
          <strong>谁 + 做/是 + 什么/怎么样</strong>。
        </p>
        <div className="lesson-facts">
          <span>4 步抓骨架</span>
          <span>10 题即时批改</span>
          <span>5 个常见错因</span>
          <span>错因清零后通关</span>
        </div>
      </section>

      <LevelNav />

      <div className="lesson-layout">
        <div className="lesson-main">
          <LessonSection id="position" title="这一关解决什么痛点" kicker="Position">
            <p>
              很多同学不是单词完全不认识，而是看到英文长句时，不知道这句话到底在说谁、做了什么、对谁做。
            </p>
            <ExamCallout title="本关不追求">
              <p>不背五大基本句型，不系统讲所有句子成分。现在只练一件事：把主线信息从长句里拎出来。</p>
            </ExamCallout>
          </LessonSection>

          <LessonSection id="method" title="考场判断法" kicker="Method">
            <div className="step-list">
              {level1Steps.map((step) => (
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
                <p>很多长句不是语法高级，而是修饰太多。先抓骨架，就能知道作者到底在说什么。</p>
              </ExamCallout>
              <ExamCallout title="选词填空">
                <p>判断空格附近的句子骨架，可以帮助你知道空里大概要名词、动词、形容词还是副词。</p>
              </ExamCallout>
              <ExamCallout title="翻译和写作">
                <p>中文翻英文时，先搭英文骨架，再往上加修饰，句子会稳很多。</p>
              </ExamCallout>
            </div>
          </LessonSection>

          <LessonSection id="examples" title="例句拆解" kicker="Examples">
            <div className="example-list">
              {level1Examples.map((example) => (
                <article className="example-card" key={example.id}>
                  <h3>{example.title}</h3>
                  <blockquote>{example.sentence}</blockquote>
                  <p>
                    <strong>主发动机：</strong>
                    {example.engine}
                  </p>
                  <p>
                    <strong>骨架：</strong>
                    {example.skeleton}
                  </p>
                  <ul>
                    {example.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>整句：</strong>
                    {example.translation}
                  </p>
                  {example.warning ? <ExamCallout title="易错提醒" tone="warning"><p>{example.warning}</p></ExamCallout> : null}
                </article>
              ))}
            </div>
          </LessonSection>

          <LessonSection id="traps" title="常见坑" kicker="Traps">
            <div className="trap-list">
              {level1Traps.map((trap) => (
                <article className="trap-card" key={trap.id}>
                  <h3>{trap.title}</h3>
                  <blockquote>{trap.sentence}</blockquote>
                  <p>
                    <strong>错误读法：</strong>
                    {trap.wrongRead}
                  </p>
                  <p>
                    <strong>为什么错：</strong>
                    {trap.whyWrong}
                  </p>
                  <ul>
                    {trap.correctBreakdown.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>骨架：</strong>
                    {trap.skeleton}
                  </p>
                  <p>
                    <strong>整句：</strong>
                    {trap.translation}
                  </p>
                  <ExamCallout title="够用提醒" tone="success">
                    <p>{trap.quickRule}</p>
                  </ExamCallout>
                </article>
              ))}
            </div>
          </LessonSection>

          <LessonSection id="practice" title="过关练习" kicker="Practice">
            <div className="practice-shell">
              <p>下一步接入 10 道题即时批改。每题会显示骨架、解析和错因标签。</p>
            </div>
          </LessonSection>

          <LastMinuteReview items={lastMinuteReview} />
        </div>

        <TermRescueSidebar terms={level1Terms} />
      </div>
    </main>
  );
}
