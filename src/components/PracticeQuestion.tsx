import { useState } from 'react';
import { gradeAnswer } from '../lib/practice';
import type { AnswerRecord, ErrorTagInfo, PracticeQuestion as PracticeQuestionType } from '../types';

interface PracticeQuestionProps {
  question: PracticeQuestionType;
  errorInfo: Record<string, ErrorTagInfo>;
  onAnswered: (record: AnswerRecord) => void;
}

export default function PracticeQuestion({ question, errorInfo, onAnswered }: PracticeQuestionProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [record, setRecord] = useState<AnswerRecord | null>(null);

  const handleChoose = (optionId: string) => {
    if (record) {
      return;
    }

    const grade = gradeAnswer(question, optionId);
    const nextRecord: AnswerRecord = {
      questionId: question.id,
      ...grade
    };

    setSelectedOptionId(optionId);
    setRecord(nextRecord);
    onAnswered(nextRecord);
  };

  const correctOption = question.options.find((option) => option.id === question.correctOptionId);

  return (
    <article className={`practice-question ${record ? (record.correct ? 'is-correct' : 'is-wrong') : ''}`}>
      <div className="question-head">
        <h3>{question.title}</h3>
        {record ? <span className="answer-state">{record.correct ? '答对' : '答错'}</span> : null}
      </div>
      {question.sentence ? <blockquote>{question.sentence}</blockquote> : null}
      <p className="question-prompt">{question.prompt}</p>
      <div className="option-list">
        {question.options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`answer-option ${selectedOptionId === option.id ? 'is-selected' : ''} ${
              record && option.id === question.correctOptionId ? 'is-answer' : ''
            }`}
            disabled={Boolean(record)}
            onClick={() => handleChoose(option.id)}
          >
            <span>{option.id.toUpperCase()}</span>
            {option.text}
          </button>
        ))}
      </div>

      {record ? (
        <div className="instant-feedback">
          <p>
            <strong>正确答案：</strong>
            {correctOption?.id.toUpperCase()} · {correctOption?.text}
          </p>
          <p>
            <strong>这题骨架：</strong>
            {question.skeleton}
          </p>
          <p>
            <strong>人话解析：</strong>
            {question.explanation}
          </p>
          {!record.correct && record.errorTags.length > 0 ? (
            <div className="feedback-tags">
              {record.errorTags.map((tag) => (
                <span className="error-chip" key={tag}>
                  {errorInfo[tag]?.title ?? tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
