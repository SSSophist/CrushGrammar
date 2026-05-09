import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LastMinuteReview from './LastMinuteReview';

describe('LastMinuteReview', () => {
  it('labels the section as the level summary', () => {
    render(<LastMinuteReview items={['长句先找主发动机。']} />);

    expect(screen.getByText('本关总结')).toBeTruthy();
    expect(screen.queryByText(/考前/)).toBeNull();
  });
});
