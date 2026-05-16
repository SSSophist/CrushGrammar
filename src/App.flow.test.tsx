import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import { practiceQuestions } from './data/level1';

const clickFirstEnabledLevelAction = async (levelNumber: number) => {
  const action = screen
    .getAllByRole('button')
    .find(
      (button) =>
        button.classList.contains('level-action') &&
        button.textContent?.includes(String(levelNumber)) &&
        !button.hasAttribute('disabled')
    );

  expect(action).toBeTruthy();
  await userEvent.setup().click(action as HTMLElement);
};

const getCorrectOptionText = (questionIndex: number) => {
  const question = practiceQuestions[questionIndex];
  return question.options.find((option) => option.id === question.correctOptionId)?.text;
};

const getCurrentAnswerButtons = () =>
  screen.getAllByRole('button').filter((button) => button.classList.contains('answer-option'));

describe('App launch flow', () => {
  beforeEach(() => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
  });

  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('lets a new learner start level one, practice, and persist the next unlock', async () => {
    const user = userEvent.setup();
    render(<App />);

    const welcomeDialog = screen.getByRole('dialog');
    const welcomeActions = within(welcomeDialog).getAllByRole('button');
    expect(welcomeActions).toHaveLength(2);

    await user.click(welcomeActions[1]);
    expect(screen.queryByRole('dialog')).toBeNull();

    await clickFirstEnabledLevelAction(1);

    const introDialog = screen.getByRole('dialog');
    const introConfirm = introDialog.querySelector('.primary-action');
    expect(introConfirm).toBeTruthy();
    await user.click(introConfirm as HTMLElement);
    expect(screen.queryByRole('dialog')).toBeNull();

    const practiceLink = document.querySelector('.level-nav a[href="#practice"]');
    expect(practiceLink).toBeTruthy();
    await user.click(practiceLink as HTMLElement);
    expect(practiceLink?.getAttribute('aria-current')).toBe('location');

    for (let index = 0; index < practiceQuestions.length; index += 1) {
      const correctText = getCorrectOptionText(index);
      expect(correctText).toBeTruthy();

      const question = practiceQuestions[index];
      const optionIndex = question.options.findIndex((option) => option.id === question.correctOptionId);
      const answerButtons = getCurrentAnswerButtons();
      expect(answerButtons).toHaveLength(question.options.length);
      expect(optionIndex).toBeGreaterThanOrEqual(0);

      await user.click(answerButtons[optionIndex]);

      if (index < practiceQuestions.length - 1) {
        await waitFor(() => {
          expect(screen.getByRole('progressbar').getAttribute('aria-valuenow')).toBe(String(index + 2));
        });
      }
    }

    await waitFor(() => {
      const stored = JSON.parse(localStorage.getItem('crush_grammar_unlocked_levels') ?? '[]');
      expect(stored).toContain('level-2');
    });

    const nextLevelAction = screen
      .getAllByRole('button')
      .find((button) => button.classList.contains('primary-action') && button.textContent?.includes('2'));
    expect(nextLevelAction).toBeTruthy();
  });
});
