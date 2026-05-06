import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import RouteSelector from './RouteSelector';

describe('RouteSelector', () => {
  it('calls onChange when the user picks a different route', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<RouteSelector value="three-day" onChange={onChange} />);

    await user.click(screen.getByRole('button', { name: /5 天稳妥版/ }));

    expect(onChange).toHaveBeenCalledWith('five-day');
  });
});
