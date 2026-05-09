import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import LevelMap from './LevelMap';
import type { LevelMeta } from '../types';

const levels: LevelMeta[] = [
  { id: 'level-1', number: 1, title: '先会看句子骨架', promise: '先抓谁做了什么', group: '句子骨架', status: 'open' },
  { id: 'level-2', number: 2, title: '词性和位置判断', promise: '选词填空先看位置', group: '句子骨架', status: 'open' },
  { id: 'level-3', number: 3, title: '一个句子一个主发动机', promise: '动词再多也先找主线', group: '句子骨架', status: 'open' },
  { id: 'level-4', number: 4, title: '从句只分三大类就够了', promise: '判断一坨句子在干嘛', group: '句子扩展', status: 'open' },
  { id: 'level-5', number: 5, title: '非谓语三件套', promise: '看懂 doing / done / to do', group: '句子扩展', status: 'open' },
  { id: 'level-6', number: 6, title: '并列、转折、因果和让步', promise: '读懂作者逻辑方向', group: '句间逻辑', status: 'open' },
  { id: 'level-7', number: 7, title: '修饰语和长难句压缩术', promise: '把长句压回主干', group: '长难句压缩', status: 'open' },
  { id: 'level-8', number: 8, title: '时态、语态、主谓一致够用规则', promise: '写译少扣基础分', group: '写译避坑', status: 'open' },
  { id: 'level-9', number: 9, title: '高频特殊结构速通', promise: '识别比较、强调、倒装等', group: '写译避坑', status: 'locked' }
];

describe('LevelMap', () => {
  it('opens only unlocked levels', async () => {
    const user = userEvent.setup();
    const onOpenLevel = vi.fn();

    render(<LevelMap levels={levels} onOpenLevel={onOpenLevel} />);

    await user.click(screen.getByRole('button', { name: /进入第 1 关/ }));
    await user.click(screen.getByRole('button', { name: /进入第 2 关/ }));
    await user.click(screen.getByRole('button', { name: /进入第 3 关/ }));
    await user.click(screen.getByRole('button', { name: /进入第 4 关/ }));
    await user.click(screen.getByRole('button', { name: /进入第 5 关/ }));
    await user.click(screen.getByRole('button', { name: /进入第 6 关/ }));
    await user.click(screen.getByRole('button', { name: /进入第 7 关/ }));
    await user.click(screen.getByRole('button', { name: /进入第 8 关/ }));
    await user.click(screen.getByRole('button', { name: /第 9 关未解锁/ }));

    expect(onOpenLevel).toHaveBeenCalledTimes(8);
    expect(onOpenLevel).toHaveBeenCalledWith('level-1');
    expect(onOpenLevel).toHaveBeenCalledWith('level-2');
    expect(onOpenLevel).toHaveBeenCalledWith('level-3');
    expect(onOpenLevel).toHaveBeenCalledWith('level-4');
    expect(onOpenLevel).toHaveBeenCalledWith('level-5');
    expect(onOpenLevel).toHaveBeenCalledWith('level-6');
    expect(onOpenLevel).toHaveBeenCalledWith('level-7');
    expect(onOpenLevel).toHaveBeenCalledWith('level-8');
  });
});
