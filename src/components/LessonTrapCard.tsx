import type { CommonTrap, VocabEntry } from '../types';
import ExamCallout from './ExamCallout';
import VocabText from './VocabText';

interface LessonTrapCardProps {
  trap: CommonTrap;
  vocabEntries: VocabEntry[];
  wrongLabel: string;
  skeletonLabel: string;
}

export default function LessonTrapCard({ trap, vocabEntries, wrongLabel, skeletonLabel }: LessonTrapCardProps) {
  const renderVocabText = (text: string) => <VocabText text={text} entries={vocabEntries} />;

  return (
    <article className="trap-card">
      <h3>{trap.title}</h3>
      <blockquote>{renderVocabText(trap.sentence)}</blockquote>
      <p className="analysis-copy">
        <strong>{wrongLabel}：</strong>
        {renderVocabText(trap.wrongRead)}
      </p>
      <p className="analysis-copy">
        <strong>为什么错：</strong>
        {renderVocabText(trap.whyWrong)}
      </p>
      <ul className="analysis-list">
        {trap.correctBreakdown.map((line) => (
          <li key={line}>{renderVocabText(line)}</li>
        ))}
      </ul>
      <p className="analysis-copy">
        <strong>{skeletonLabel}：</strong>
        {renderVocabText(trap.skeleton)}
      </p>
      <p className="analysis-copy">
        <strong>整句：</strong>
        {trap.translation}
      </p>
      <ExamCallout title="够用提醒" tone="success">
        <p>{renderVocabText(trap.quickRule)}</p>
      </ExamCallout>
    </article>
  );
}
