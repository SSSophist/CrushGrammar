import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import { levels } from './data/levels';

const openLevel = async (levelNumber: number) => {
  const button = screen
    .getAllByRole('button')
    .find(
      (candidate) =>
        candidate.classList.contains('level-action') &&
        candidate.textContent?.includes(String(levelNumber)) &&
        !candidate.hasAttribute('disabled')
    );

  expect(button).toBeTruthy();
  await userEvent.setup().click(button as HTMLElement);
};

describe('App', () => {
  beforeEach(() => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  levels
    .filter((level) => level.status === 'open')
    .forEach((level) => {
      it(`opens level ${level.number} from the level map`, async () => {
        render(<App />);

        await openLevel(level.number);

        expect(screen.getByRole('heading', { level: 1, name: level.title })).toBeTruthy();
        expect(screen.getByRole('dialog', { name: `第 ${level.number} 关必读` })).toBeTruthy();
        expect(screen.getByRole('button', { name: '返回闯关地图' })).toBeTruthy();
      });
    });

  it('requires reading the level intro before starting the lesson', async () => {
    render(<App />);

    await openLevel(8);

    expect(screen.getByRole('dialog', { name: '第 8 关必读' }).textContent).toContain('先定时间');

    await userEvent.setup().click(screen.getByRole('button', { name: '我已读完，开始本关' }));

    expect(screen.queryByRole('dialog', { name: '第 8 关必读' })).toBeNull();
  });

  it('resets scroll position when opening any level from the map', async () => {
    const scrollTo = vi.mocked(window.scrollTo);

    render(<App />);
    scrollTo.mockClear();

    await openLevel(8);

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'auto' });
  });
});
