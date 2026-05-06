import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { errorTagInfo, practiceQuestions } from '../data/level1';
import PracticeQuestion from './PracticeQuestion';

describe('PracticeQuestion', () => {
  it('shows instant wrong-answer feedback with skeleton and error tag', async () => {
    const user = userEvent.setup();
    const onAnswered = vi.fn();

    render(<PracticeQuestion question={practiceQuestions[0]} errorInfo={errorTagInfo} onAnswered={onAnswered} />);

    await user.click(screen.getByRole('button', { name: /In many cities provide resources/ }));

    expect(screen.getByText('答错')).toBeTruthy();
    expect(screen.getAllByText('Public libraries provide access.').length).toBeGreaterThan(0);
    expect(screen.getByText('把修饰当主线')).toBeTruthy();
    expect(onAnswered).toHaveBeenCalledWith({
      questionId: 'q1',
      selectedOptionId: 'a',
      correct: false,
      errorTags: ['modifier-as-mainline']
    });
  });
});
