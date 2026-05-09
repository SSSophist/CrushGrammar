import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import VocabText from './VocabText';

describe('VocabText', () => {
  it('adds accessible Chinese hints to matched vocabulary', () => {
    render(
      <p>
        <VocabText
          text="Students need access to digital resources."
          entries={[{ term: 'digital resources', meaning: '数字资源' }]}
        />
      </p>
    );

    const trigger = screen.getByLabelText('digital resources：数字资源');

    expect(trigger.textContent).toBe('digital resources');
    expect(screen.getByRole('tooltip', { name: '数字资源' })).toBeTruthy();
  });

  it('prefers longer phrase matches over shorter overlapping words', () => {
    render(
      <p>
        <VocabText
          text="Digital resources help students."
          entries={[
            { term: 'resources', meaning: '资源' },
            { term: 'digital resources', meaning: '数字资源' }
          ]}
        />
      </p>
    );

    expect(screen.getByLabelText('Digital resources：数字资源')).toBeTruthy();
    expect(screen.queryByLabelText('resources：资源')).toBeNull();
  });
});
