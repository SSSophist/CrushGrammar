import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LevelNav from './LevelNav';

describe('LevelNav', () => {
  it('renders anchor links for lesson sections', () => {
    render(<LevelNav />);

    expect(screen.getByRole('link', { name: '本关定位' }).getAttribute('href')).toBe('#position');
    expect(screen.getByRole('link', { name: '过关练习' }).getAttribute('href')).toBe('#practice');
  });
});
