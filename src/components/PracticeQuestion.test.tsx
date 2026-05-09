import { render, screen, within } from '@testing-library/react';
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

  it('shows a color-coded sentence component breakdown after answering', async () => {
    const user = userEvent.setup();
    const onAnswered = vi.fn();

    render(<PracticeQuestion question={practiceQuestions[0]} errorInfo={errorTagInfo} onAnswered={onAnswered} />);

    await user.click(screen.getByRole('button', { name: /Public libraries provide access/ }));

    const breakdown = screen.getByRole('list', { name: '句子成分拆解' });
    const subjectPart = within(breakdown).getByText('主语').closest('.analysis-part');
    const predicatePart = within(breakdown).getByText('主发动机').closest('.analysis-part');

    expect(within(breakdown).getByText('地点背景')).toBeTruthy();
    expect(within(breakdown).getByText('In many cities')).toBeTruthy();
    expect(within(breakdown).getByText('public libraries')).toBeTruthy();
    expect(within(breakdown).getByText('provide')).toBeTruthy();
    expect(within(breakdown).getByText('free access to digital resources')).toBeTruthy();
    expect(within(breakdown).getByText('for local residents')).toBeTruthy();
    expect(subjectPart?.className).toContain('part-subject');
    expect(predicatePart?.className).toContain('part-predicate');
  });

  it('shows a color-only original sentence map before the plain-language explanation', async () => {
    const user = userEvent.setup();
    const onAnswered = vi.fn();

    render(<PracticeQuestion question={practiceQuestions[9]} errorInfo={errorTagInfo} onAnswered={onAnswered} />);

    await user.click(screen.getByRole('button', { name: /People are less likely to be misled/ }));

    const coloredSentence = screen.getByLabelText('原句标色');
    const backgroundText = within(coloredSentence).getByText('In an age when information changes rapidly');
    const subjectText = within(coloredSentence).getByText('people who can judge the quality of sources');
    const explanationLine = screen.getByText(/人话解析/).closest('.explanation-line');

    expect(coloredSentence.textContent).not.toContain('时代背景');
    expect(coloredSentence.textContent).not.toContain('主语');
    expect(backgroundText.closest('.sentence-highlight')?.className).toContain('part-background');
    expect(subjectText.closest('.sentence-highlight')?.className).toContain('part-subject');
    expect(explanationLine?.querySelector('.sentence-highlight')).toBeNull();
  });

  it('can show vocabulary hints in question sentences and options', () => {
    const onAnswered = vi.fn();

    render(
      <PracticeQuestion
        question={practiceQuestions[0]}
        errorInfo={errorTagInfo}
        onAnswered={onAnswered}
        vocabEntries={[
          { term: 'digital resources', meaning: '数字资源' },
          { term: 'local residents', meaning: '当地居民' }
        ]}
      />
    );

    expect(screen.getByLabelText('digital resources：数字资源')).toBeTruthy();
    expect(screen.getByLabelText('local residents：当地居民')).toBeTruthy();
  });
});
