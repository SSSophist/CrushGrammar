import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const css = readFileSync('src/styles.css', 'utf8');

describe('responsive layout guardrails', () => {
  it('defines narrow-phone rules for the main mobile surfaces', () => {
    expect(css).toContain('@media (max-width: 640px)');
    expect(css).toContain('scroll-snap-type');
    expect(css).toContain('.intro-modal');
    expect(css).toContain('.route-selector');
    expect(css).toContain('.question-head');
    expect(css).toContain('.answer-option');
  });

  it('protects lesson and practice content from horizontal overflow', () => {
    expect(css).toContain('overflow-x: hidden');
    expect(css).toContain('max-width: 100%');
    expect(css).toContain('overflow-wrap: anywhere');
    expect(css).toContain('min-width: 0');
  });
});
