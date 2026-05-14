import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { level8PracticeQuestions } from '../data/level8';
import LevelEightPage from './LevelEightPage';

describe('LevelEightPage', () => {
  it('renders the writing-translation basics lesson and gives instant feedback', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelEightPage onBack={onBack} onLevelComplete={onLevelComplete} />);

    expect(screen.getByRole('heading', { name: '时态、语态、主谓一致够用规则' })).toBeTruthy();
    expect(screen.getByRole('navigation', { name: '第 8 关学习路线' })).toBeTruthy();
    expect(screen.getByText('15 题即时批改')).toBeTruthy();
    expect(screen.getAllByText(/先定时间/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/再看主动被动/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/最后查主谓一致/).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: '题 15' })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: /was built|although|every student/i })).toBeNull();
    expect(screen.getAllByLabelText('clear study plan：清晰的学习计划').length).toBeGreaterThan(0);

    const firstQuestion = level8PracticeQuestions[0];
    const firstCorrect = firstQuestion.options.find((option) => option.id === firstQuestion.correctOptionId);

    const firstQuestionCard = screen.getByRole('heading', { name: '题 1' }).closest('.practice-question');
    const firstCorrectButton = within(firstQuestionCard as HTMLElement)
      .getAllByRole('button')
      .find((button) => button.textContent?.trim().endsWith(firstCorrect?.text ?? ''));

    expect(firstCorrectButton).toBeTruthy();
    await user.click(firstCorrectButton as HTMLElement);

    expect(screen.getByText('答对')).toBeTruthy();
    expect(screen.getByLabelText('原句标色').textContent).toContain(firstQuestion.analysisParts?.[0].text);
    expect(screen.getAllByLabelText('clear study plan：清晰的学习计划').length).toBeGreaterThan(0);
  });

  it('shows the level-eight clear message after all practice answers are correct', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelEightPage onBack={onBack} onLevelComplete={onLevelComplete} />);

    for (const [index, question] of level8PracticeQuestions.entries()) {
      const correct = question.options.find((option) => option.id === question.correctOptionId);
      const questionCard = screen.getByRole('heading', { name: `题 ${index + 1}` }).closest('.practice-question');

      expect(questionCard).toBeTruthy();
      const correctButton = within(questionCard as HTMLElement)
        .getAllByRole('button')
        .find((button) => button.textContent?.trim().endsWith(correct?.text ?? ''));

      expect(correctButton).toBeTruthy();
      await user.click(correctButton as HTMLElement);
    }

    expect(screen.getByText('本关练习全对')).toBeTruthy();
    expect(screen.getByText('你可以直接通关。写译基础检查这一步已经很稳。')).toBeTruthy();
  });
});
