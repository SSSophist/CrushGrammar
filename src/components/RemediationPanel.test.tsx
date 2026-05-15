import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { errorTagInfo, remediations } from '../data/level1';
import RemediationPanel from './RemediationPanel';

describe('RemediationPanel', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('calls onComplete when all remediation questions are correct', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();
    const remediation = remediations.find((item) => item.tag === 'logic-reversal');

    if (!remediation) {
      throw new Error('logic remediation missing');
    }

    render(<RemediationPanel remediation={remediation} errorInfo={errorTagInfo} onComplete={onComplete} />);

    await user.click(screen.getByRole('button', { name: /它对初学者有效/ }));
    await user.click(screen.getByRole('button', { name: /学生仍然需要独立思考/ }));

    expect(onComplete).toHaveBeenCalledWith('logic-reversal');
  });

  it('scrolls the active remediation questions into view when opened', () => {
    const scrollIntoView = vi.fn();
    const remediation = remediations.find((item) => item.tag === 'logic-reversal');

    if (!remediation) {
      throw new Error('logic remediation missing');
    }

    Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView
    });

    render(<RemediationPanel remediation={remediation} errorInfo={errorTagInfo} onComplete={vi.fn()} />);

    expect(screen.getByRole('region', { name: remediation.title }).id).toBe('remediation-logic-reversal');
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });
});
