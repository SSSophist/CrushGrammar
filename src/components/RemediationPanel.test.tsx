import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { errorTagInfo, remediations } from '../data/level1';
import RemediationPanel from './RemediationPanel';

describe('RemediationPanel', () => {
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
});
