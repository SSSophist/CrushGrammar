import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import LevelNav from './LevelNav';

describe('LevelNav', () => {
  beforeEach(() => {
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0);
      return 1;
    });
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('renders anchor links for lesson sections', () => {
    render(<LevelNav />);

    expect(screen.getByText('本关导航')).toBeTruthy();
    expect(screen.getByRole('link', { name: '本关定位' }).getAttribute('href')).toBe('#position');
    expect(screen.queryByRole('link', { name: '术语急救' })).toBeNull();
    expect(screen.getByRole('link', { name: '过关练习' }).getAttribute('href')).toBe('#practice');
    expect(screen.getByRole('link', { name: '本关总结' }).getAttribute('href')).toBe('#review');
  });

  it('marks the clicked section as the current location', async () => {
    const user = userEvent.setup();

    render(<LevelNav />);

    await user.click(screen.getByRole('link', { name: '过关练习' }));

    expect(screen.getByRole('link', { name: '过关练习' }).getAttribute('aria-current')).toBe('location');
    expect(screen.getByRole('link', { name: '本关定位' }).getAttribute('aria-current')).toBeNull();
  });

  it('keeps the sidebar highlight synced with the section near the reading line', async () => {
    const sections = [
      { id: 'position', top: -520, bottom: -120 },
      { id: 'method', top: 96, bottom: 640 },
      { id: 'scenes', top: 720, bottom: 1120 },
      { id: 'examples', top: 1220, bottom: 1620 },
      { id: 'traps', top: 1720, bottom: 2120 },
      { id: 'practice', top: 2220, bottom: 2620 },
      { id: 'review', top: 2720, bottom: 3120 },
    ];

    sections.forEach((section) => {
      const element = document.createElement('section');
      element.id = section.id;
      element.getBoundingClientRect = vi.fn(
        () =>
          ({
            top: section.top,
            bottom: section.bottom,
            left: 0,
            right: 800,
            width: 800,
            height: section.bottom - section.top,
            x: 0,
            y: section.top,
            toJSON: () => undefined,
          } as DOMRect)
      );
      document.body.appendChild(element);
    });

    render(<LevelNav />);
    fireEvent.scroll(window);

    await waitFor(() => {
      expect(screen.getByRole('link', { name: '考场判断法' }).getAttribute('aria-current')).toBe('location');
    });
    expect(screen.getByRole('link', { name: '四六级场景' }).getAttribute('aria-current')).toBeNull();
  });
});
