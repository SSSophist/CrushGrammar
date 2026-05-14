import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LessonExampleCard from './LessonExampleCard';
import LessonTrapCard from './LessonTrapCard';

describe('lesson analysis readability hooks', () => {
  it('marks example analysis copy and lists for high-contrast reading styles', () => {
    render(
      <LessonExampleCard
        example={{
          id: 'example-1',
          title: '例题',
          sentence: 'Online learning has become common.',
          engine: 'Online learning has become',
          skeleton: 'Online learning has become common.',
          details: ['主语：Online learning', '主发动机：has become'],
          translation: '在线学习变得常见。'
        }}
        vocabEntries={[]}
        optionAriaLabel="候选答案"
        optionTitle="候选答案"
        engineLabel="主线"
        skeletonLabel="骨架"
      />
    );

    expect(screen.getByText('主线：').closest('p')?.classList.contains('analysis-copy')).toBe(true);
    expect(screen.getByText('主语：Online learning').closest('ul')?.classList.contains('analysis-list')).toBe(true);
    expect(screen.getByText('整句：').closest('p')?.classList.contains('analysis-copy')).toBe(true);
  });

  it('marks trap explanations for high-contrast reading styles', () => {
    render(
      <LessonTrapCard
        trap={{
          id: 'trap-1',
          title: '常见坑',
          sentence: 'Although the article looks difficult, its main idea is simple.',
          wrongRead: '只看到 looks difficult。',
          whyWrong: 'Although 先让步，后面才是主线。',
          correctBreakdown: ['让步背景：Although the article looks difficult', '主线：its main idea is simple'],
          skeleton: 'Its main idea is simple.',
          translation: '虽然文章看起来难，但主旨很简单。',
          quickRule: '看到 although 先找逗号后面的主线。'
        }}
        vocabEntries={[]}
        wrongLabel="错误读法"
        skeletonLabel="骨架"
      />
    );

    expect(screen.getByText('为什么错：').closest('p')?.classList.contains('analysis-copy')).toBe(true);
    expect(screen.getByText('主线：its main idea is simple').closest('ul')?.classList.contains('analysis-list')).toBe(true);
    expect(screen.getByText('整句：').closest('p')?.classList.contains('analysis-copy')).toBe(true);
  });
});
