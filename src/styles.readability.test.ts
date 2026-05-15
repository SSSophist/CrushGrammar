import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const css = readFileSync('src/styles.css', 'utf8');

const ruleFor = (selector: string) => {
  const selectorIndex = css.indexOf(selector);

  if (selectorIndex === -1) {
    return '';
  }

  const blockStart = css.indexOf('{', selectorIndex);
  const blockEnd = css.indexOf('}', blockStart);

  return blockStart === -1 || blockEnd === -1 ? '' : css.slice(blockStart + 1, blockEnd);
};

describe('lesson readability guardrails', () => {
  it('uses a dark muted token instead of low-contrast gray copy', () => {
    expect(css).toContain('--muted: #34483d;');
  });

  it('keeps lesson body copy on the primary ink color', () => {
    const lessonCopyRule = ruleFor('.lesson-section p,');

    expect(lessonCopyRule).toContain('color: var(--ink);');
    expect(lessonCopyRule).not.toContain('color: var(--muted);');
  });

  it('gives learning cards stronger surfaces than white boxes with thin borders', () => {
    const learningCardRule = ruleFor('.step-card,');

    expect(learningCardRule).toContain('border-left: 5px solid');
    expect(learningCardRule).toContain('background: #f1f7f2;');
  });
});
