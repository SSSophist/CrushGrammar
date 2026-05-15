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

const getSuccessBanner = (streak: number, finished: boolean) => {
  if (finished) {
    return streak >= 2 ? `连对 ${streak} 题，本关练习已完成` : '答对 +1，本关练习已完成';
  }

  return streak >= 2 ? `连对 ${streak} 题` : '答对 +1';
};

const getCarryBanner = (streak: number) => (streak >= 2 ? `连对 ${streak} 题，继续保持` : '答对 +1，继续保持');

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
  const [correctStreak, setCorrectStreak] = useState(0);
  const currentQuestion = questions[currentIndex];
  const hasNextQuestion = currentIndex < questions.length - 1;
  const isTestRuntime = typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom');
  const resolvedAutoAdvanceDelayMs = autoAdvanceDelayMs ?? (isTestRuntime ? 80 : 1200);

  useEffect(() => {
    if (!currentRecord?.correct) {
      return;
    }

    if (!hasNextQuestion) {
      setBanner(getSuccessBanner(correctStreak, true));
      return;
    }

    const advanceTimer = window.setTimeout(() => {
      setCurrentIndex((index) => Math.min(index + 1, questions.length - 1));
      setCurrentRecord(null);
      setBanner(getCarryBanner(correctStreak));
    }, resolvedAutoAdvanceDelayMs);

    return () => window.clearTimeout(advanceTimer);
  }, [correctStreak, currentRecord, hasNextQuestion, questions.length, resolvedAutoAdvanceDelayMs]);

  useEffect(() => {
    if (!banner || banner === '先看解析，搞懂后再继续') {
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

    if (record.correct) {
      setCorrectStreak((streak) => {
        const nextStreak = streak + 1;
        setBanner(getSuccessBanner(nextStreak, !hasNextQuestion));
        return nextStreak;
      });
      return;
    }

    setCorrectStreak(0);
    setBanner('先看解析，搞懂后再继续');
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
        <div className="practice-status-copy">
          <span>
            第 {currentIndex + 1} / {questions.length} 题
          </span>
          {banner ? <strong>{banner}</strong> : null}
        </div>
        <div
          aria-label="练习进度"
          aria-valuemax={questions.length}
          aria-valuemin={1}
          aria-valuenow={currentIndex + 1}
          className="practice-progressbar"
          role="progressbar"
        >
          <span style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
        </div>
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
