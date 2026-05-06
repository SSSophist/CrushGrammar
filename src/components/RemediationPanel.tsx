import { useState } from 'react';
import PracticeQuestion from './PracticeQuestion';
import type { AnswerRecord, ErrorTag, ErrorTagInfo, RemediationItem } from '../types';

interface RemediationPanelProps {
  remediation: RemediationItem;
  errorInfo: Record<ErrorTag, ErrorTagInfo>;
  onComplete: (tag: ErrorTag) => void;
}

export default function RemediationPanel({ remediation, errorInfo, onComplete }: RemediationPanelProps) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [attempt, setAttempt] = useState(1);
  const allAnswered = answers.length === remediation.questions.length;
  const allCorrect = allAnswered && answers.every((answer) => answer.correct);
  const hasWrong = allAnswered && !allCorrect;

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
      <p className="remediation-action">{errorInfo[remediation.tag].action}</p>
      <div className="question-list">
        {remediation.questions.map((question) => (
          <PracticeQuestion
            key={`${question.id}-${attempt}`}
            question={question}
            errorInfo={errorInfo}
            onAnswered={handleAnswered}
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
