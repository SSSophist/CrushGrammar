import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import LevelMap from './LevelMap';
import type { LevelMeta } from '../types';

const levels: LevelMeta[] = [
  { id: 'level-1', number: 1, title: '先会看句子骨架', promise: '先抓谁做了什么', group: '句子骨架', status: 'open' },
  { id: 'level-2', number: 2, title: '词性和位置判断', promise: '选词填空先看位置', group: '句子骨架', status: 'locked' }
];

describe('LevelMap', () => {
  it('opens only unlocked levels', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();

    render(<LevelMap levels={levels} onOpenLevel={onOpenLevel} />);

    await user.click(screen.getByRole('button', { name: /进入第 1 关/ }));
    await user.click(screen.getByRole('button', { name: /第 2 关未解锁/ }));

    expect(onOpenLevel).toHaveBeenCalledTimes(1);
    expect(onOpenLevel).toHaveBeenCalledWith('level-1');
  });
});
