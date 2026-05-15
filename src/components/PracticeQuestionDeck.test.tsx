import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { errorTagInfo, practiceQuestions } from '../data/level1';
import PracticeQuestionDeck from './PracticeQuestionDeck';

describe('PracticeQuestionDeck', () => {
  it('shows one question at a time and auto-advances after a correct answer', async () => {
    const user = userEvent.setup();
    const onAnswered = vi.fn();

    render(
      <PracticeQuestionDeck
        questions={practiceQuestions.slice(0, 2)}
        errorInfo={errorTagInfo}
        onAnswered={onAnswered}
        autoAdvanceDelayMs={80}
        successBannerMs={1000}
      />
    );

    expect(screen.getByRole('heading', { name: '题 1：选出句子骨架' })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: '题 2：先找主发动机' })).toBeNull();

    await user.click(screen.getByRole('button', { name: /Public libraries provide access/ }));

    expect(screen.getByText('答对')).toBeTruthy();
    expect(screen.queryByRole('heading', { name: '题 2：先找主发动机' })).toBeNull();

    await waitFor(() => expect(screen.getByRole('heading', { name: '题 2：先找主发动机' })).toBeTruthy());
    expect(screen.getByText(/答对 \+1/)).toBeTruthy();
    expect(onAnswered).toHaveBeenCalledTimes(1);
  });

  it('shows a progress bar and streak feedback after correct answers', async () => {
    const user = userEvent.setup();
    const onAnswered = vi.fn();

    render(
      <PracticeQuestionDeck
        questions={practiceQuestions.slice(0, 3)}
        errorInfo={errorTagInfo}
        onAnswered={onAnswered}
        autoAdvanceDelayMs={80}
        successBannerMs={1000}
      />
    );

    expect(screen.getByRole('progressbar', { name: '练习进度' }).getAttribute('aria-valuenow')).toBe('1');

    await user.click(screen.getByRole('button', { name: /Public libraries provide access/ }));
    expect(screen.getByText('答对 +1')).toBeTruthy();

    await waitFor(() => expect(screen.getByRole('heading', { name: /先找主发动机/ })).toBeTruthy());
    expect(screen.getByRole('progressbar', { name: '练习进度' }).getAttribute('aria-valuenow')).toBe('2');

    await user.click(screen.getByRole('button', { name: /can improve/ }));
    expect(screen.getByText('连对 2 题')).toBeTruthy();
  });

  it('keeps a wrong answer on screen until the learner continues manually', async () => {
    const user = userEvent.setup();
    const onAnswered = vi.fn();

    render(
      <PracticeQuestionDeck
        questions={practiceQuestions.slice(0, 2)}
        errorInfo={errorTagInfo}
        onAnswered={onAnswered}
      />
    );

    await user.click(screen.getByRole('button', { name: /In many cities provide resources/ }));

    expect(screen.getByText('答错')).toBeTruthy();
    expect(screen.getByText('把修饰当主线')).toBeTruthy();
    expect(screen.getByRole('heading', { name: '题 1：选出句子骨架' })).toBeTruthy();

    await user.click(screen.getByRole('button', { name: '看懂了，继续下一题' }));

    expect(screen.getByRole('heading', { name: '题 2：先找主发动机' })).toBeTruthy();
    expect(onAnswered).toHaveBeenCalledTimes(1);
  });
});
