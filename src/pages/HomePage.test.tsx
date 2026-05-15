import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ALL_LEVEL_IDS } from '../lib/useProgress';
import HomePage from './HomePage';

const DIAGNOSTIC_PROMPT_KEY = 'crush_grammar_diagnostic_prompt_seen';

describe('HomePage', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('shows a first-visit diagnostic choice modal', () => {
    render(<HomePage unlockedLevels={['level-1']} onUnlockAll={vi.fn()} onOpenLevel={vi.fn()} />);

    const dialog = screen.getByRole('dialog', { name: '欢迎来到小德英语lab的四六级语法网站' });

    expect(dialog.parentElement?.className).toContain('intro-modal-backdrop');
    expect(dialog.parentElement?.className).toContain('diagnostic-welcome-backdrop');
    expect(within(dialog).getByText(/8 道语法能力检测题/)).toBeTruthy();
    expect(within(dialog).getByRole('button', { name: '开始 8 题语法检测' })).toBeTruthy();
    expect(within(dialog).getByRole('button', { name: '我是语法小白，从第 1 关开始' })).toBeTruthy();
  });

  it('lets first-visit beginners skip the diagnostic and start from level one', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();

    render(<HomePage unlockedLevels={['level-1', 'level-2', 'level-3']} onUnlockAll={vi.fn()} onOpenLevel={onOpenLevel} />);

    const dialog = screen.getByRole('dialog', { name: '欢迎来到小德英语lab的四六级语法网站' });
    await user.click(within(dialog).getByRole('button', { name: '我是语法小白，从第 1 关开始' }));

    expect(screen.queryByRole('dialog', { name: '欢迎来到小德英语lab的四六级语法网站' })).toBeNull();

    await user.click(screen.getByRole('button', { name: '开始第 1 关' }));

    expect(onOpenLevel).toHaveBeenCalledWith('level-1');
  });

  it('starts new learners at level 1', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();

    localStorage.setItem(DIAGNOSTIC_PROMPT_KEY, 'true');

    render(<HomePage unlockedLevels={['level-1']} onUnlockAll={vi.fn()} onOpenLevel={onOpenLevel} />);

    await user.click(screen.getByRole('button', { name: '开始第 1 关' }));

    expect(onOpenLevel).toHaveBeenCalledWith('level-1');
  });

  it('continues from the highest unlocked level and keeps it after route changes', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();

    localStorage.setItem(DIAGNOSTIC_PROMPT_KEY, 'true');

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

    localStorage.setItem(DIAGNOSTIC_PROMPT_KEY, 'true');

    render(<HomePage unlockedLevels={ALL_LEVEL_IDS} onUnlockAll={vi.fn()} onOpenLevel={onOpenLevel} />);

    await user.click(screen.getByRole('button', { name: '查看总复盘' }));

    expect(onOpenLevel).toHaveBeenCalledWith('level-10');
  });

  it('recommends and unlocks weak levels after the eight-question diagnostic quiz', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();
    const onUnlockThrough = vi.fn();

    localStorage.setItem(DIAGNOSTIC_PROMPT_KEY, 'true');

    render(
      <HomePage
        unlockedLevels={['level-1']}
        onUnlockAll={vi.fn()}
        onUnlockThrough={onUnlockThrough}
        onOpenLevel={onOpenLevel}
      />
    );

    await user.click(screen.getByRole('button', { name: '做 3 分钟诊断' }));
    await user.click(screen.getByRole('button', { name: /Students feel less pressure/ }));
    await user.click(screen.getByRole('button', { name: /^A reliable$/ }));
    await user.click(screen.getByRole('button', { name: /that 从句是 believe 的内容/ }));
    await user.click(screen.getByRole('button', { name: /Students solve problems/ }));
    await user.click(screen.getByRole('button', { name: /方法简单才是重点/ }));
    await user.click(screen.getByRole('button', { name: /has changed/ }));
    await user.click(screen.getByRole('button', { name: /People remember methods/ }));
    await user.click(screen.getByRole('button', { name: /只有不断复盘错误/ }));

    expect(screen.getByText('建议先练第 6 关')).toBeTruthy();
    expect(screen.getByText('推荐关卡：第 6 关')).toBeTruthy();
    expect(screen.getByText('逻辑关系方向不稳')).toBeTruthy();
    expect(screen.getByRole('button', { name: '开始第 6 关' })).toBeTruthy();
    expect(onUnlockThrough).toHaveBeenCalledWith('level-6');

    await user.click(screen.getByRole('button', { name: '开始第 6 关' }));

    expect(onOpenLevel).toHaveBeenCalledWith('level-6');
  });

  it('keeps new learners on level one when they choose the beginner path', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();
    const onUnlockThrough = vi.fn();

    localStorage.setItem(DIAGNOSTIC_PROMPT_KEY, 'true');

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
