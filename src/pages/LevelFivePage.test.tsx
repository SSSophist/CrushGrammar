import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { level5PracticeQuestions } from '../data/level5';
import LevelFivePage from './LevelFivePage';

describe('LevelFivePage', () => {
  it('renders the non-finite lesson and gives instant feedback', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelFivePage onBack={onBack} onLevelComplete={onLevelComplete} />);

    expect(screen.getByRole('heading', { name: '非谓语三件套' })).toBeTruthy();
    expect(screen.getByRole('navigation', { name: '第 5 关学习路线' })).toBeTruthy();
    expect(screen.getByText('15 题即时批改')).toBeTruthy();
    expect(screen.getAllByText(/主动感/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/被动感/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/目的感/).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: '题 1' })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: '题 15' })).toBeNull();
    expect(screen.queryByRole('heading', { name: /using|introduced|to improve/i })).toBeNull();

    const firstQuestion = level5PracticeQuestions[0];
    const firstCorrect = firstQuestion.options.find((option) => option.id === firstQuestion.correctOptionId);

    await user.click(screen.getByRole('button', { name: new RegExp(firstCorrect?.text ?? '') }));

    expect(screen.getByText('答对')).toBeTruthy();
    expect(screen.getByLabelText('原句标色').textContent).toContain(firstQuestion.analysisParts?.[0].text);
  });

  it('shows the level-five clear message after all practice answers are correct', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelFivePage onBack={onBack} onLevelComplete={onLevelComplete} />);

    for (const [index, question] of level5PracticeQuestions.entries()) {
      const correct = question.options.find((option) => option.id === question.correctOptionId);
      const questionCard = (await screen.findByRole('heading', { name: `题 ${index + 1}` })).closest('.practice-question');

      expect(questionCard).toBeTruthy();
      await user.click(within(questionCard as HTMLElement).getByRole('button', { name: new RegExp(correct?.text ?? '') }));
    }

    expect(screen.getByText('本关练习全对')).toBeTruthy();
    expect(screen.getByText('你可以直接通关。doing / done / to do 的够用判断已经稳了。')).toBeTruthy();
  });
});
