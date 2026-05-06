import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { errorTagInfo } from '../data/level1';
import ErrorSummary from './ErrorSummary';

describe('ErrorSummary', () => {
  it('shows error counts and opens remediation by tag', async () => {
    const user = userEvent.setup();
    const onRemediate = vi.fn();

    render(
      <ErrorSummary
        records={[
          { questionId: 'q1', selectedOptionId: 'a', correct: false, errorTags: ['modifier-as-mainline'] },
          { questionId: 'q2', selectedOptionId: 'a', correct: false, errorTags: ['modifier-as-mainline'] }
        ]}
        errorInfo={errorTagInfo}
        completedTags={[]}
        onRemediate={onRemediate}
      />
    );

    expect(screen.getByText('把修饰当主线')).toBeTruthy();
    expect(screen.getByText('2 题')).toBeTruthy();

    await user.click(screen.getByRole('button', { name: /补救：把修饰当主线/ }));

    expect(onRemediate).toHaveBeenCalledWith('modifier-as-mainline');
  });
});
