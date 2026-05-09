import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { level4PracticeQuestions } from '../data/level4';
import LevelFourPage from './LevelFourPage';

describe('LevelFourPage', () => {
  it('renders the clause-function lesson and gives instant feedback', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();

    render(<LevelFourPage onBack={onBack} />);

    expect(screen.getByRole('heading', { name: '从句只分三大类就够了' })).toBeTruthy();
    expect(screen.getByRole('navigation', { name: '第 4 关学习路线' })).toBeTruthy();
    expect(screen.getByText('15 题即时批改')).toBeTruthy();
    expect(screen.getAllByText(/当一个东西/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/修饰一个东西/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/交代背景逻辑/).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: '题 15' })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: /although/ })).toBeNull();

    const firstQuestion = level4PracticeQuestions[0];
    const firstCorrect = firstQuestion.options.find((option) => option.id === firstQuestion.correctOptionId);

    await user.click(screen.getByRole('button', { name: new RegExp(firstCorrect?.text ?? '') }));

    expect(screen.getByText('答对')).toBeTruthy();
    expect(screen.getByLabelText('原句标色').textContent).toContain(firstQuestion.analysisParts?.[0].text);
  });

  it('shows the level-four clear message after all practice answers are correct', async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();

    render(<LevelFourPage onBack={onBack} />);

    for (const [index, question] of level4PracticeQuestions.entries()) {
      const correct = question.options.find((option) => option.id === question.correctOptionId);
      const questionCard = screen.getByRole('heading', { name: `题 ${index + 1}` }).closest('.practice-question');

      expect(questionCard).toBeTruthy();
      await user.click(within(questionCard as HTMLElement).getByRole('button', { name: new RegExp(correct?.text ?? '') }));
    }

    expect(screen.getByText('本关练习全对')).toBeTruthy();
    expect(screen.getByText('你可以直接通关。从句三分法这一步已经很稳。')).toBeTruthy();
  });
});
