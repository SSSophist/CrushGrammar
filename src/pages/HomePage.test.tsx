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

  it('recommends and unlocks a weak level after the diagnostic quiz', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();
    const onUnlockThrough = vi.fn();

    render(
      <HomePage
        unlockedLevels={['level-1']}
        onUnlockAll={vi.fn()}
        onUnlockThrough={onUnlockThrough}
        onOpenLevel={onOpenLevel}
      />
    );

    await user.click(screen.getByRole('button', { name: '做 3 分钟诊断' }));
    await user.click(screen.getByRole('button', { name: /主语是 students，主发动机是 feel/ }));
    await user.click(screen.getByRole('button', { name: /reliable/ }));
    await user.click(screen.getByRole('button', { name: /that practice builds confidence 是 believe 的内容/ }));
    await user.click(screen.getByRole('button', { name: /主线是 students solve problems/ }));
    await user.click(screen.getByRole('button', { name: /because 后面才是作者重点/ }));
    await user.click(screen.getByRole('button', { name: /has changed/ }));

    expect(screen.getByText('建议先练第 6 关')).toBeTruthy();
    expect(screen.getByText('逻辑关系不稳')).toBeTruthy();
    expect(screen.getByRole('button', { name: '开始第 6 关' })).toBeTruthy();
    expect(onUnlockThrough).toHaveBeenCalledWith('level-6');

    await user.click(screen.getByRole('button', { name: '开始第 6 关' }));

    expect(onOpenLevel).toHaveBeenCalledWith('level-6');
  });

  it('keeps new learners on level one when they choose the beginner path', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();
    const onUnlockThrough = vi.fn();

    render(
      <HomePage
        unlockedLevels={['level-1', 'level-2', 'level-3']}
        onUnlockAll={vi.fn()}
        onUnlockThrough={onUnlockThrough}
        onOpenLevel={onOpenLevel}
      />
    );

    await user.click(screen.getByRole('button', { name: '我是语法小白，从第 1 关开始' }));
    await user.click(screen.getByRole('button', { name: '开始第 1 关' }));

    expect(onUnlockThrough).not.toHaveBeenCalled();
    expect(onOpenLevel).toHaveBeenCalledWith('level-1');
  });
});
