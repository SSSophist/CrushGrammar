import { describe, expect, it } from 'vitest';
import { level2PracticeQuestions, level2Remediations } from './level2';
import { level3PracticeQuestions, level3Remediations } from './level3';
import { level4PracticeQuestions, level4Remediations } from './level4';
import { level5PracticeQuestions, level5Remediations } from './level5';
import { level6PracticeQuestions, level6Remediations } from './level6';
import { level7PracticeQuestions, level7Remediations } from './level7';
import { level8Examples, level8PracticeQuestions, level8Remediations } from './level8';
import { levels } from './levels';

describe('levels', () => {
  it('opens the second level for the playable slice', () => {
    const levelTwo = levels.find((level) => level.id === 'level-2');

    expect(levelTwo?.status).toBe('open');
  });

  it('opens the third level for the main-engine slice', () => {
    const levelThree = levels.find((level) => level.id === 'level-3');

    expect(levelThree?.status).toBe('open');
  });

  it('opens the fourth level for the clause-function slice', () => {
    const levelFour = levels.find((level) => level.id === 'level-4');

    expect(levelFour?.status).toBe('open');
  });

  it('opens the fifth level for the non-finite slice', () => {
    const levelFive = levels.find((level) => level.id === 'level-5');

    expect(levelFive?.status).toBe('open');
  });

  it('opens the sixth level for the logic-connector slice', () => {
    const levelSix = levels.find((level) => level.id === 'level-6');

    expect(levelSix?.status).toBe('open');
  });

  it('opens the seventh level for the long-sentence compression slice', () => {
    const levelSeven = levels.find((level) => level.id === 'level-7');

    expect(levelSeven?.status).toBe('open');
  });

  it('opens the eighth level for the writing-translation basics slice', () => {
    const levelEight = levels.find((level) => level.id === 'level-8');

    expect(levelEight?.status).toBe('open');
  });

  it('uses a 15-question difficulty ramp for the second-level gate', () => {
    expect(level2PracticeQuestions).toHaveLength(15);
    expect(level2PracticeQuestions[0].title).toContain('题 1');
    expect(level2PracticeQuestions[2].title).toContain('题 3');
    expect(level2PracticeQuestions[10].options.map((option) => option.text)).toEqual([
      'available',
      'valuable',
      'variable',
      'various'
    ]);
    expect(level2PracticeQuestions[14].sentence).toContain('although');
  });

  it('has remediation drills for every second-level error tag used by practice', () => {
    const usedTags = new Set(
      level2PracticeQuestions
        .flatMap((question) => Object.values(question.errorByOption).flat())
        .filter((tag): tag is NonNullable<typeof tag> => Boolean(tag))
    );
    const remediationTags = new Set(level2Remediations.map((remediation) => remediation.tag));

    for (const tag of usedTags) {
      expect(remediationTags.has(tag)).toBe(true);
    }
  });

  it('uses a 15-question difficulty ramp for the third-level gate', () => {
    expect(level3PracticeQuestions).toHaveLength(15);
    expect(level3PracticeQuestions[0]?.title).toContain('题 1');
    expect(level3PracticeQuestions[7]?.sentence).toContain('introduced');
    expect(level3PracticeQuestions[14]?.sentence?.toLowerCase()).toContain('although');
  });

  it('has remediation drills for every third-level error tag used by practice', () => {
    const usedTags = new Set(
      level3PracticeQuestions
        .flatMap((question) => Object.values(question.errorByOption).flat())
        .filter((tag): tag is NonNullable<typeof tag> => Boolean(tag))
    );
    const remediationTags = new Set(level3Remediations.map((remediation) => remediation.tag));

    for (const tag of usedTags) {
      expect(remediationTags.has(tag)).toBe(true);
    }
  });

  it('uses a 15-question difficulty ramp for the fourth-level gate', () => {
    expect(level4PracticeQuestions).toHaveLength(15);
    expect(level4PracticeQuestions[0]?.sentence).toContain('That');
    expect(level4PracticeQuestions[6]?.sentence).toContain('because');
    expect(level4PracticeQuestions[14]?.sentence?.toLowerCase()).toContain('although');
  });

  it('has remediation drills for every fourth-level error tag used by practice', () => {
    const usedTags = new Set(
      level4PracticeQuestions
        .flatMap((question) => Object.values(question.errorByOption).flat())
        .filter((tag): tag is NonNullable<typeof tag> => Boolean(tag))
    );
    const remediationTags = new Set(level4Remediations.map((remediation) => remediation.tag));

    for (const tag of usedTags) {
      expect(remediationTags.has(tag)).toBe(true);
    }
  });

  it('uses a 15-question difficulty ramp for the fifth-level gate', () => {
    expect(level5PracticeQuestions).toHaveLength(15);
    expect(level5PracticeQuestions[0]?.sentence).toContain('using');
    expect(level5PracticeQuestions[6]?.sentence).toContain('introduced');
    expect(level5PracticeQuestions[14]?.sentence).toContain('To improve');
  });

  it('has remediation drills for every fifth-level error tag used by practice', () => {
    const usedTags = new Set(
      level5PracticeQuestions
        .flatMap((question) => Object.values(question.errorByOption).flat())
        .filter((tag): tag is NonNullable<typeof tag> => Boolean(tag))
    );
    const remediationTags = new Set(level5Remediations.map((remediation) => remediation.tag));

    for (const tag of usedTags) {
      expect(remediationTags.has(tag)).toBe(true);
    }
  });

  it('uses a 15-question difficulty ramp for the sixth-level gate', () => {
    expect(level6PracticeQuestions).toHaveLength(15);
    expect(level6PracticeQuestions[0]?.sentence).toContain('and');
    expect(level6PracticeQuestions[6]?.sentence).toContain('because');
    expect(level6PracticeQuestions[14]?.sentence?.toLowerCase()).toContain('although');
  });

  it('has remediation drills for every sixth-level error tag used by practice', () => {
    const usedTags = new Set(
      level6PracticeQuestions
        .flatMap((question) => Object.values(question.errorByOption).flat())
        .filter((tag): tag is NonNullable<typeof tag> => Boolean(tag))
    );
    const remediationTags = new Set(level6Remediations.map((remediation) => remediation.tag));

    for (const tag of usedTags) {
      expect(remediationTags.has(tag)).toBe(true);
    }
  });

  it('uses a 15-question difficulty ramp for the seventh-level gate', () => {
    expect(level7PracticeQuestions).toHaveLength(15);
    expect(level7PracticeQuestions[0]?.sentence).toContain('who');
    expect(level7PracticeQuestions[6]?.sentence).toContain('with');
    expect(level7PracticeQuestions[14]?.sentence).toContain('Although');
  });

  it('has remediation drills for every seventh-level error tag used by practice', () => {
    const usedTags = new Set(
      level7PracticeQuestions
        .flatMap((question) => Object.values(question.errorByOption).flat())
        .filter((tag): tag is NonNullable<typeof tag> => Boolean(tag))
    );
    const remediationTags = new Set(level7Remediations.map((remediation) => remediation.tag));

    for (const tag of usedTags) {
      expect(remediationTags.has(tag)).toBe(true);
    }
  });

  it('uses a 15-question difficulty ramp for the eighth-level gate', () => {
    expect(level8PracticeQuestions).toHaveLength(15);
    expect(level8PracticeQuestions[0]?.sentence).toContain('Every student');
    expect(level8PracticeQuestions[6]?.sentence).toContain('___');
    expect(level8PracticeQuestions[14]?.sentence).toContain('Although');
  });

  it('does not leak eighth-level example answers in the prompt sentence', () => {
    for (const example of level8Examples) {
      const correctOption = example.options?.find((option) => option.id === example.correctOptionId);

      expect(example.sentence).toContain('___');
      expect(correctOption).toBeTruthy();
      expect(example.sentence).not.toContain(correctOption?.text ?? '');
    }
  });

  it('does not leak eighth-level practice answers in prompt sentences or option hints', () => {
    for (const question of level8PracticeQuestions) {
      const correctOption = question.options.find((option) => option.id === question.correctOptionId);

      expect(question.sentence).toContain('___');
      expect(correctOption).toBeTruthy();
      expect(correctOption?.text).not.toContain('：');
      expect(question.sentence).not.toContain(correctOption?.text ?? '');
    }
  });

  it('has remediation drills for every eighth-level error tag used by practice', () => {
    const usedTags = new Set(
      level8PracticeQuestions
        .flatMap((question) => Object.values(question.errorByOption).flat())
        .filter((tag): tag is NonNullable<typeof tag> => Boolean(tag))
    );
    const remediationTags = new Set(level8Remediations.map((remediation) => remediation.tag));

    for (const tag of usedTags) {
      expect(remediationTags.has(tag)).toBe(true);
    }
  });
});
