import type { AnswerRecord, ErrorSummaryItem, ErrorTag } from '../types';

interface GradeableQuestion {
  id: string;
  correctOptionId: string;
  errorByOption?: Partial<Record<string, ErrorTag[]>>;
}

export function isQuestionCorrect(question: Pick<GradeableQuestion, 'correctOptionId'>, selectedOptionId: string) {
  return question.correctOptionId === selectedOptionId;
}

export function gradeAnswer(question: GradeableQuestion, selectedOptionId: string): Omit<AnswerRecord, 'questionId'> {
  const correct = isQuestionCorrect(question, selectedOptionId);

  return {
    selectedOptionId,
    correct,
    errorTags: correct ? [] : question.errorByOption?.[selectedOptionId] ?? []
  };
}

export function getErrorSummary(records: AnswerRecord[]): ErrorSummaryItem[] {
  const counts = new Map<ErrorTag, number>();

  records.forEach((record) => {
    if (record.correct) {
      return;
    }

    record.errorTags.forEach((tag) => {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    });
  });

  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
