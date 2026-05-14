import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import LevelNav from './LevelNav';

describe('LevelNav', () => {
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
});
