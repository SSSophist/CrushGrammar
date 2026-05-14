import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { level6PracticeQuestions } from '../data/level6';
import LevelSixPage from './LevelSixPage';

describe('LevelSixPage', () => {
  it('renders the logic-connector lesson and gives instant feedback', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelSixPage onBack={onBack} onLevelComplete={onLevelComplete} />);

    expect(screen.getByRole('heading', { name: '并列、转折、因果和让步' })).toBeTruthy();
    expect(screen.getByRole('navigation', { name: '第 6 关学习路线' })).toBeTruthy();
    expect(screen.getByText('15 题即时批改')).toBeTruthy();
    expect(screen.getAllByText(/同向补充/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/反向转折/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/因果方向/).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: '题 15' })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: /because|although|however/i })).toBeNull();

    const firstQuestion = level6PracticeQuestions[0];
    const firstCorrect = firstQuestion.options.find((option) => option.id === firstQuestion.correctOptionId);

    const firstCorrectButton = screen
      .getAllByRole('button')
      .find(
        (button) =>
          button.textContent?.trim().startsWith(firstCorrect?.id.toUpperCase() ?? '') &&
          button.textContent?.includes(firstCorrect?.text ?? '')
      );

    expect(firstCorrectButton).toBeTruthy();
    await user.click(firstCorrectButton as HTMLElement);

    expect(screen.getByText('答对')).toBeTruthy();
    expect(screen.getByLabelText('原句标色').textContent).toContain(firstQuestion.analysisParts?.[0].text);
  });

  it('shows the level-six clear message after all practice answers are correct', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelSixPage onBack={onBack} onLevelComplete={onLevelComplete} />);

    for (const [index, question] of level6PracticeQuestions.entries()) {
      const correct = question.options.find((option) => option.id === question.correctOptionId);
      const questionCard = screen.getByRole('heading', { name: `题 ${index + 1}` }).closest('.practice-question');

      expect(questionCard).toBeTruthy();
      const correctButton = within(questionCard as HTMLElement)
        .getAllByRole('button')
        .find((button) => button.textContent?.trim().startsWith(correct?.id.toUpperCase() ?? ''));

      expect(correctButton).toBeTruthy();
      await user.click(correctButton as HTMLElement);
    }

    expect(screen.getByText('本关练习全对')).toBeTruthy();
    expect(screen.getByText('你可以直接通关。作者逻辑方向这一步已经很稳。')).toBeTruthy();
  });
});
