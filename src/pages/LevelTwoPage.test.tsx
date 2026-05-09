import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { level2PracticeQuestions } from '../data/level2';
import LevelTwoPage from './LevelTwoPage';

describe('LevelTwoPage', () => {
  it('renders the level two lesson with the three-step word selection method', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();

    render(<LevelTwoPage onBack={onBack} />);

    expect(screen.getByRole('heading', { name: '词性和位置判断' })).toBeTruthy();
    expect(screen.getByRole('navigation', { name: '第 2 关学习路线' })).toBeTruthy();
    expect(screen.getAllByText('三步筛词法').length).toBeGreaterThan(0);
    expect(screen.getByText('15 题即时批改')).toBeTruthy();
    expect(screen.getByText(/先用位置排除一半，再用意思和形式定答案/)).toBeTruthy();
    expect(screen.getAllByText(/a common ____/).length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText('Online learning：在线学习').length).toBeGreaterThan(0);
    expect(screen.getAllByText('候选词').length).toBeGreaterThan(0);
    expect(screen.getByText('A · choice')).toBeTruthy();
    expect(screen.getByText('B · choose')).toBeTruthy();
    expect(screen.getAllByText('正确项').length).toBeGreaterThan(0);

    await user.click(screen.getByRole('button', { name: /choice/ }));

    expect(screen.getByText('答对')).toBeTruthy();
    expect(screen.getByLabelText('原句标色').textContent).toContain('a common ____');
    expect(screen.getByText(/位置只是第一轮筛选/)).toBeTruthy();
    expect(screen.getAllByLabelText('Online learning：在线学习').length).toBeGreaterThan(0);
  });

  it('uses a level-two clear message after all practice answers are correct', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();

    render(<LevelTwoPage onBack={onBack} />);

    for (const question of level2PracticeQuestions) {
      const correctOption = question.options.find((option) => option.id === question.correctOptionId);
      const questionCard = screen.getByRole('heading', { name: question.title }).closest('.practice-question');

      expect(questionCard).toBeTruthy();
      const correctButton = within(questionCard as HTMLElement)
        .getAllByRole('button')
        .find(
          (button) =>
            button.textContent?.trim().startsWith(correctOption?.id.toUpperCase() ?? '') &&
            button.textContent?.includes(correctOption?.text ?? '')
        );

      expect(correctButton).toBeTruthy();
      await user.click(correctButton as HTMLElement);
    }

    expect(screen.getByText('本关练习全对')).toBeTruthy();
    expect(screen.getByText('你可以直接通关。三步筛词法这一步已经很稳。')).toBeTruthy();
  });
});
