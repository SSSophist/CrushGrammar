import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { level7PracticeQuestions } from '../data/level7';
import LevelSevenPage from './LevelSevenPage';

describe('LevelSevenPage', () => {
  it('renders the long-sentence compression lesson and gives instant feedback', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelSevenPage onBack={onBack} onLevelComplete={onLevelComplete} />);

    expect(screen.getByRole('heading', { name: '修饰语和长难句压缩术' })).toBeTruthy();
    expect(screen.getByRole('navigation', { name: '第 7 关学习路线' })).toBeTruthy();
    expect(screen.getByText('15 题即时批改')).toBeTruthy();
    expect(screen.getAllByText(/先删修饰/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/压回主干/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/补回细节/).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: '题 1' })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: '题 15' })).toBeNull();
    expect(screen.queryByRole('heading', { name: /who|although|with/i })).toBeNull();

    const firstQuestion = level7PracticeQuestions[0];
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

  it('shows the level-seven clear message after all practice answers are correct', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelSevenPage onBack={onBack} onLevelComplete={onLevelComplete} />);

    for (const [index, question] of level7PracticeQuestions.entries()) {
      const correct = question.options.find((option) => option.id === question.correctOptionId);
      const questionCard = (await screen.findByRole('heading', { name: `题 ${index + 1}` })).closest('.practice-question');

      expect(questionCard).toBeTruthy();
      const correctButton = within(questionCard as HTMLElement)
        .getAllByRole('button')
        .find((button) => button.textContent?.trim().startsWith(correct?.id.toUpperCase() ?? ''));

      expect(correctButton).toBeTruthy();
      await user.click(correctButton as HTMLElement);
    }

    expect(screen.getByText('本关练习全对')).toBeTruthy();
    expect(screen.getByText('你可以直接通关。长句压缩这一步已经很稳。')).toBeTruthy();
  });
});
