import { useState } from 'react';
import PracticeQuestion from './PracticeQuestion';
import type { AnswerRecord, ErrorTag, ErrorTagInfo, RemediationItem, VocabEntry } from '../types';

interface RemediationPanelProps {
  remediation: RemediationItem;
  errorInfo: Partial<Record<ErrorTag, ErrorTagInfo>>;
  onComplete: (tag: ErrorTag) => void;
  vocabEntries?: VocabEntry[];
}

export default function RemediationPanel({ remediation, errorInfo, onComplete, vocabEntries = [] }: RemediationPanelProps) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [attempt, setAttempt] = useState(1);
  const allAnswered = answers.length === remediation.questions.length;
  const allCorrect = allAnswered && answers.every((answer) => answer.correct);
  const hasWrong = allAnswered && !allCorrect;
  const remediationInfo = errorInfo[remediation.tag];

  const handleAnswered = (record: AnswerRecord) => {
    setAnswers((current) => {
      if (current.some((answer) => answer.questionId === record.questionId)) {
        return current;
      }

      const next = [...current, record];
      if (next.length === remediation.questions.length && next.every((answer) => answer.correct)) {
        onComplete(remediation.tag);
      }

      return next;
    });
  };

  const resetAttempt = () => {
    setAnswers([]);
    setAttempt((current) => current + 1);
  };

  return (
    <section className="remediation-panel">
      <p className="eyebrow">Remediation</p>
      <h3>{remediation.title}</h3>
      <p>{remediation.explanation}</p>
      {remediationInfo ? <p className="remediation-action">{remediationInfo.action}</p> : null}
      <div className="question-list">
        {remediation.questions.map((question) => (
          <PracticeQuestion
            key={`${question.id}-${attempt}`}
            question={question}
            errorInfo={errorInfo}
            onAnswered={handleAnswered}
            vocabEntries={vocabEntries}
          />
        ))}
      </div>
      {allCorrect ? <p className="completion-note">这个错因已经清零。</p> : null}
      {hasWrong ? (
        <button type="button" className="primary-action" onClick={resetAttempt}>
          重做这组补救题
        </button>
      ) : null}
    </section>
  );
}
