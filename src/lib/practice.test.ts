import { describe, expect, it } from 'vitest';
import { getErrorSummary, gradeAnswer, isQuestionCorrect } from './practice';

describe('practice helpers', () => {
  it('grades a correct answer without error tags', () => {
    const result = gradeAnswer(
      { id: 'q1', correctOptionId: 'b', errorByOption: { a: ['mainline-missing'] } },
      'b'
    );

    expect(result.correct).toBe(true);
    expect(result.errorTags).toEqual([]);
  });

  it('grades a wrong answer with mapped error tags', () => {
    const result = gradeAnswer(
      { id: 'q1', correctOptionId: 'b', errorByOption: { a: ['modifier-as-mainline'] } },
      'a'
    );

    expect(result.correct).toBe(false);
    expect(result.errorTags).toEqual(['modifier-as-mainline']);
  });

  it('summarizes repeated error tags by frequency', () => {
    const summary = getErrorSummary([
      { questionId: 'q1', selectedOptionId: 'a', correct: false, errorTags: ['modifier-as-mainline'] },
      { questionId: 'q2', selectedOptionId: 'a', correct: false, errorTags: ['predicate-confusion'] },
      { questionId: 'q3', selectedOptionId: 'a', correct: false, errorTags: ['modifier-as-mainline'] }
    ]);

    expect(summary).toEqual([
      { tag: 'modifier-as-mainline', count: 2 },
      { tag: 'predicate-confusion', count: 1 }
    ]);
  });

  it('checks correctness from minimal question data', () => {
    expect(isQuestionCorrect({ correctOptionId: 'c' }, 'c')).toBe(true);
    expect(isQuestionCorrect({ correctOptionId: 'c' }, 'a')).toBe(false);
  });
});
