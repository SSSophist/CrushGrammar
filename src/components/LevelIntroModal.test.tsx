import { cleanup, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { levelIntros } from '../data/levelIntros';
import LevelIntroModal from './LevelIntroModal';

describe('LevelIntroModal', () => {
  it('gives every finished level a concrete how-to-use-this-level prompt', () => {
    for (let levelNumber = 1; levelNumber <= 9; levelNumber += 1) {
      render(<LevelIntroModal intro={levelIntros[`level-${levelNumber}`]} onConfirm={vi.fn()} />);

      expect(screen.getByRole('dialog').textContent).toContain('本关怎么用');
      cleanup();
    }
  });

  it('teaches term-card usage only in the first level intro', () => {
    render(<LevelIntroModal intro={levelIntros['level-1']} onConfirm={vi.fn()} />);

    expect(screen.getByRole('dialog').textContent).toContain('右侧术语急救卡');
    expect(screen.getByRole('dialog').textContent).toContain('主语 = 这句话说谁');
  });

  it('does not repeat the term-card tutorial in later level intros', () => {
    render(<LevelIntroModal intro={levelIntros['level-2']} onConfirm={vi.fn()} />);

    expect(screen.getByRole('dialog').textContent).not.toContain('右侧术语急救卡');
  });
});
