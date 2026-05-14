import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { level3PracticeQuestions } from '../data/level3';
import LevelThreePage from './LevelThreePage';

describe('LevelThreePage', () => {
  it('renders the main-engine lesson and gives instant feedback', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelThreePage onBack={onBack} onLevelComplete={onLevelComplete} />);

    expect(screen.getByRole('heading', { name: '一个句子一个主发动机' })).toBeTruthy();
    expect(screen.getByRole('navigation', { name: '第 3 关学习路线' })).toBeTruthy();
    expect(screen.getByText('15 题即时批改')).toBeTruthy();
    expect(screen.getAllByText(/主发动机/).length).toBeGreaterThan(0);
    expect(screen.getByText(/doing \/ done \/ to do 先别急着当主发动机/)).toBeTruthy();
    expect(screen.getByRole('heading', { name: '题 15' })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: /although \+ using 双干扰/ })).toBeNull();

    const firstQuestion = level3PracticeQuestions[0];
    const firstCorrect = firstQuestion.options.find((option) => option.id === firstQuestion.correctOptionId);

    await user.click(screen.getByRole('button', { name: new RegExp(firstCorrect?.text ?? '') }));

    expect(screen.getByText('答对')).toBeTruthy();
    expect(screen.getByLabelText('原句标色').textContent).toContain(firstQuestion.analysisParts?.[0].text);
  });

  it('shows the level-three clear message after all practice answers are correct', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    const onLevelComplete = vi.fn();

    render(<LevelThreePage onBack={onBack} onLevelComplete={onLevelComplete} />);

    for (const [index, question] of level3PracticeQuestions.entries()) {
      const correct = question.options.find((option) => option.id === question.correctOptionId);
      const questionCard = screen.getByRole('heading', { name: `题 ${index + 1}` }).closest(
        '.practice-question'
      );

      expect(questionCard).toBeTruthy();
      await user.click(within(questionCard as HTMLElement).getByRole('button', { name: new RegExp(correct?.text ?? '') }));
    }

    expect(screen.getByText('本关练习全对')).toBeTruthy();
    expect(screen.getByText('你可以直接通关。找主发动机这一步已经很稳。')).toBeTruthy();
  });
});
