import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ALL_LEVEL_IDS } from '../lib/useProgress';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('starts new learners at level 1', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();

    render(<HomePage unlockedLevels={['level-1']} onUnlockAll={vi.fn()} onOpenLevel={onOpenLevel} />);

    await user.click(screen.getByRole('button', { name: '开始第 1 关' }));

    expect(onOpenLevel).toHaveBeenCalledWith('level-1');
  });

  it('continues from the highest unlocked level and keeps it after route changes', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();

    render(
      <HomePage
        unlockedLevels={['level-1', 'level-2', 'level-3']}
        onUnlockAll={vi.fn()}
        onOpenLevel={onOpenLevel}
      />
    );

    expect(screen.getByRole('button', { name: '继续第 3 关' })).toBeTruthy();

    await user.click(screen.getByRole('button', { name: /5 天稳妥版/ }));
    await user.click(screen.getByRole('button', { name: '继续第 3 关' }));

    expect(onOpenLevel).toHaveBeenCalledWith('level-3');
  });

  it('opens the final review when all levels are unlocked', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();

    render(<HomePage unlockedLevels={ALL_LEVEL_IDS} onUnlockAll={vi.fn()} onOpenLevel={onOpenLevel} />);

    await user.click(screen.getByRole('button', { name: '查看总复盘' }));

    expect(onOpenLevel).toHaveBeenCalledWith('level-10');
  });
});
