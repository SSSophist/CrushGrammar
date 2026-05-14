import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { level9PracticeQuestions } from '../data/level9';
import LevelNinePage from './LevelNinePage';

describe('LevelNinePage', () => {
  it('renders the special-structure lesson and keeps practice titles neutral', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelNinePage onBack={onBack} onLevelComplete={onLevelComplete} />);

    expect(screen.getByRole('heading', { name: '高频特殊结构速通' })).toBeTruthy();
    expect(screen.getByRole('navigation', { name: '第 9 关学习路线' })).toBeTruthy();
    expect(screen.getByText('四类够用结构')).toBeTruthy();
    expect(screen.getByText('15 题即时批改')).toBeTruthy();
    expect(screen.getAllByText(/比较对象/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/强调信息/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/倒装/).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: '题 1' })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: '题 15' })).toBeNull();
    const practiceHeadings = screen.getAllByRole('heading', { name: /^题 \d+$/ });
    expect(practiceHeadings).toHaveLength(1);
    expect(screen.getAllByLabelText('effective：有效的').length).toBeGreaterThan(0);

    const firstQuestion = level9PracticeQuestions[0];
    const firstCorrect = firstQuestion.options.find((option) => option.id === firstQuestion.correctOptionId);

    const firstQuestionCard = screen.getByRole('heading', { name: '题 1' }).closest('.practice-question');
    const firstCorrectButton = within(firstQuestionCard as HTMLElement)
      .getAllByRole('button')
      .find((button) => button.textContent?.trim().startsWith(firstCorrect?.id.toUpperCase() ?? ''));

    expect(firstCorrectButton).toBeTruthy();
    await user.click(firstCorrectButton as HTMLElement);

    expect(screen.getByText('答对')).toBeTruthy();
    expect(screen.getByLabelText('原句标色').textContent).toContain(firstQuestion.analysisParts?.[0].text);
  });

  it('shows the level-nine clear message after all practice answers are correct', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelNinePage onBack={onBack} onLevelComplete={onLevelComplete} />);

    for (const [index, question] of level9PracticeQuestions.entries()) {
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
    expect(screen.getByText('你可以直接通关。现在你能把高频特殊结构先还原成人话，再回到句子主线。')).toBeTruthy();
  });
});
