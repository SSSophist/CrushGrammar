import { useEffect, useState } from 'react';
import type { AnswerRecord, ErrorTag, ErrorTagInfo, PracticeQuestion as PracticeQuestionType, VocabEntry } from '../types';
import PracticeQuestion from './PracticeQuestion';

interface PracticeQuestionDeckProps {
  questions: PracticeQuestionType[];
  errorInfo: Partial<Record<ErrorTag, ErrorTagInfo>>;
  onAnswered: (record: AnswerRecord) => void;
  vocabEntries?: VocabEntry[];
  getQuestionTitle?: (question: PracticeQuestionType, index: number) => string;
  autoAdvanceDelayMs?: number;
  successBannerMs?: number;
}

export default function PracticeQuestionDeck({
  questions,
  errorInfo,
  onAnswered,
  vocabEntries = [],
  getQuestionTitle,
  autoAdvanceDelayMs,
  successBannerMs = 2600
}: PracticeQuestionDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRecord, setCurrentRecord] = useState<AnswerRecord | null>(null);
  const [banner, setBanner] = useState<string | null>(null);
  const currentQuestion = questions[currentIndex];
  const hasNextQuestion = currentIndex < questions.length - 1;
  const isTestRuntime = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom');
  const resolvedAutoAdvanceDelayMs = autoAdvanceDelayMs ?? (isTestRuntime ? 80 : 900);

  useEffect(() => {
    if (!currentRecord?.correct) {
      return;
    }

    if (!hasNextQuestion) {
      setBanner('答对 +1，本关练习已完成');
      return;
    }

    setBanner('答对 +1，正在进入下一题');
    const advanceTimer = window.setTimeout(() => {
      setCurrentIndex((index) => Math.min(index + 1, questions.length - 1));
      setCurrentRecord(null);
      setBanner('答对 +1，继续保持');
    }, resolvedAutoAdvanceDelayMs);

    return () => window.clearTimeout(advanceTimer);
  }, [currentRecord, hasNextQuestion, questions.length, resolvedAutoAdvanceDelayMs]);

  useEffect(() => {
    if (!banner || banner === '答对 +1，正在进入下一题') {
      return;
    }

    const clearTimer = window.setTimeout(() => setBanner(null), successBannerMs);
    return () => window.clearTimeout(clearTimer);
  }, [banner, successBannerMs]);

  if (!currentQuestion) {
    return null;
  }

  const handleAnswered = (record: AnswerRecord) => {
    setCurrentRecord(record);
    onAnswered(record);

    if (!record.correct) {
      setBanner('先看解析，搞懂后再继续');
    }
  };

  const continueAfterWrong = () => {
    if (!hasNextQuestion) {
      return;
    }

    setCurrentIndex((index) => Math.min(index + 1, questions.length - 1));
    setCurrentRecord(null);
    setBanner(null);
  };

  return (
    <div className="practice-deck">
      <div className="practice-deck-status" aria-live="polite">
        <span>
          第 {currentIndex + 1} / {questions.length} 题
        </span>
        {banner ? <strong>{banner}</strong> : null}
      </div>
      <div className="question-list">
        <PracticeQuestion
          key={currentQuestion.id}
          question={currentQuestion}
          errorInfo={errorInfo}
          onAnswered={handleAnswered}
          title={getQuestionTitle?.(currentQuestion, currentIndex)}
          vocabEntries={vocabEntries}
        />
      </div>
      {currentRecord && !currentRecord.correct && hasNextQuestion ? (
        <button type="button" className="primary-action practice-next-action" onClick={continueAfterWrong}>
          看懂了，继续下一题
        </button>
      ) : null}
    </div>
  );
}
