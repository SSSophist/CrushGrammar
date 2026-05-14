import type { LessonExample, VocabEntry } from '../types';
import ExamCallout from './ExamCallout';
import VocabText from './VocabText';

interface LessonExampleCardProps {
  example: LessonExample;
  vocabEntries: VocabEntry[];
  optionAriaLabel: string;
  optionTitle: string;
  engineLabel: string;
  skeletonLabel: string;
}

export default function LessonExampleCard({
  example,
  vocabEntries,
  optionAriaLabel,
  optionTitle,
  engineLabel,
  skeletonLabel
}: LessonExampleCardProps) {
  const renderVocabText = (text: string) => <VocabText text={text} entries={vocabEntries} />;

  return (
    <article className="example-card">
      <h3>{example.title}</h3>
      <blockquote>{renderVocabText(example.sentence)}</blockquote>
      {example.options?.length ? (
        <div className="example-options" aria-label={optionAriaLabel}>
          <p>{optionTitle}</p>
          <div>
            {example.options.map((option) => {
              const isCorrect = option.id === example.correctOptionId;

              return (
                <span className={`example-option ${isCorrect ? 'is-correct' : ''}`} key={option.id}>
                  {option.id.toUpperCase()} · {renderVocabText(option.text)}
                  {isCorrect ? <strong>正确项</strong> : null}
                </span>
              );
            })}
          </div>
        </div>
      ) : null}
      <p className="analysis-copy">
        <strong>{engineLabel}：</strong>
        {renderVocabText(example.engine)}
      </p>
      <p className="analysis-copy">
        <strong>{skeletonLabel}：</strong>
        {renderVocabText(example.skeleton)}
      </p>
      <ul className="analysis-list">
        {example.details.map((detail) => (
          <li key={detail}>{renderVocabText(detail)}</li>
        ))}
      </ul>
      <p className="analysis-copy">
        <strong>整句：</strong>
        {example.translation}
      </p>
      {example.warning ? (
        <ExamCallout title="易错提醒" tone="warning">
          <p>{renderVocabText(example.warning)}</p>
        </ExamCallout>
      ) : null}
    </article>
  );
}
