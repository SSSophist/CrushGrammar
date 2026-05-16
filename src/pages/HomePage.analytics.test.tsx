import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { trackEvent } from '../lib/analytics';
import HomePage from './HomePage';

vi.mock('../lib/analytics', () => ({
  trackEvent: vi.fn()
}));

describe('HomePage analytics', () => {
  beforeEach(() => {
    vi.mocked(trackEvent).mockClear();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it('tracks the first-visit diagnostic prompt and diagnostic start', async () => {
    const user = userEvent.setup();

    render(<HomePage unlockedLevels={['level-1']} onUnlockAll={vi.fn()} onOpenLevel={vi.fn()} />);

    await waitFor(() => {
      expect(trackEvent).toHaveBeenCalledWith('diagnostic_modal_shown', {
        unlocked_level_count: 1
      });
    });

    const dialog = screen.getByRole('dialog');
    await user.click(within(dialog).getAllByRole('button')[0]);

    expect(trackEvent).toHaveBeenCalledWith('diagnostic_started', {
      question_count: 8
    });
  });

  it('tracks beginner path selection and diagnostic answers without personal data', async () => {
    const user = userEvent.setup();

    render(<HomePage unlockedLevels={['level-1']} onUnlockAll={vi.fn()} onOpenLevel={vi.fn()} />);

    let dialog = screen.getByRole('dialog');
    await user.click(within(dialog).getAllByRole('button')[0]);

    dialog = screen.getByRole('dialog');
    await user.click(within(dialog).getAllByRole('button')[0]);

    expect(trackEvent).toHaveBeenCalledWith('diagnostic_answered', {
      correct: false,
      question_id: 'mainline',
      question_index: 1,
      target_level_id: 'level-3'
    });

    cleanup();
    localStorage.clear();
    vi.mocked(trackEvent).mockClear();

    render(<HomePage unlockedLevels={['level-1']} onUnlockAll={vi.fn()} onOpenLevel={vi.fn()} />);
    dialog = screen.getByRole('dialog');
    await user.click(within(dialog).getAllByRole('button')[1]);

    expect(trackEvent).toHaveBeenCalledWith('beginner_path_selected', {
      start_level_id: 'level-1'
    });
  });
});
