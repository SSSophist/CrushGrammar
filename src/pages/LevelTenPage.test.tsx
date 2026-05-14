import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { level10Steps, practiceQuestions } from '../data/level10';
import LevelTenPage from './LevelTenPage';

describe('LevelTenPage', () => {
  it('renders the final review lesson, SOP, and first-question feedback', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelTenPage onBack={onBack} onLevelComplete={onLevelComplete} />);

    expect(screen.getByRole('heading', { level: 1, name: '总复盘：考场秒杀流程' })).toBeTruthy();
    expect(screen.getByText('4 步解题 SOP')).toBeTruthy();
    expect(screen.getByText('10 题综合实战')).toBeTruthy();
    expect(screen.getByRole('heading', { name: '考场判断法（SOP）' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: level10Steps[0].title })).toBeTruthy();
    expect(screen.getByRole('heading', { name: '综合实战演练' })).toBeTruthy();
    expect(screen.getByText(`已完成 0 / ${practiceQuestions.length}`)).toBeTruthy();

    const firstQuestion = practiceQuestions[0];
    const firstCorrect = firstQuestion.options.find((option) => option.id === firstQuestion.correctOptionId);
    const firstQuestionCard = screen.getByRole('heading', { name: firstQuestion.title }).closest('.practice-question');

    expect(firstQuestionCard).toBeTruthy();
    const firstCorrectButton = within(firstQuestionCard as HTMLElement)
      .getAllByRole('button')
      .find((button) => button.textContent?.trim().startsWith(firstCorrect?.id.toUpperCase() ?? ''));

    expect(firstCorrectButton).toBeTruthy();
    await user.click(firstCorrectButton as HTMLElement);

    expect(screen.getByText('答对')).toBeTruthy();
    expect((firstQuestionCard as HTMLElement).textContent).toContain('正确答案');
    expect(screen.getByText(`已完成 1 / ${practiceQuestions.length}`)).toBeTruthy();
  });

  it('calls the completion handler after all final review questions are correct', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelTenPage onBack={onBack} onLevelComplete={onLevelComplete} />);

    for (const question of practiceQuestions) {
      const correct = question.options.find((option) => option.id === question.correctOptionId);
      const questionCard = (await screen.findByRole('heading', { name: question.title })).closest('.practice-question');

      expect(questionCard).toBeTruthy();
      const correctButton = within(questionCard as HTMLElement)
        .getAllByRole('button')
        .find((button) => button.textContent?.trim().startsWith(correct?.id.toUpperCase() ?? ''));

      expect(correctButton).toBeTruthy();
      await user.click(correctButton as HTMLElement);
    }

    const completeSection = screen
      .getByText('🎉 通关祝贺！你已完成四六级语法速通所有内容！')
      .closest('.level-complete');

    expect(completeSection).toBeTruthy();
    expect(within(completeSection as HTMLElement).getByRole('button', { name: '返回闯关地图' })).toBeTruthy();
    expect(within(completeSection as HTMLElement).queryByRole('button', { name: /继续第/ })).toBeNull();
    await waitFor(() => expect(onLevelComplete).toHaveBeenCalledTimes(1));
  });
});
