import { describe, expect, it } from 'vitest';
import { level1Examples, level1Terms, level1Traps, practiceQuestions as level1PracticeQuestions } from './level1';
import { level2Examples, level2PracticeQuestions, level2Remediations, level2Terms, level2Traps } from './level2';
import { level3Examples, level3PracticeQuestions, level3Remediations, level3Terms, level3Traps } from './level3';
import { level4Examples, level4PracticeQuestions, level4Remediations, level4Terms, level4Traps } from './level4';
import { level5Examples, level5PracticeQuestions, level5Remediations, level5Terms, level5Traps } from './level5';
import { level6Examples, level6PracticeQuestions, level6Remediations, level6Terms, level6Traps } from './level6';
import { level7Examples, level7PracticeQuestions, level7Remediations, level7Terms, level7Traps } from './level7';
import { level8Examples, level8PracticeQuestions, level8Remediations, level8Terms } from './level8';
import { level8Traps } from './level8';
import { level9Examples, level9PracticeQuestions, level9Terms, level9Traps } from './level9';
import { level10Examples, level10Terms, level10Traps, practiceQuestions as level10PracticeQuestions } from './level10';
import {
  level1Vocab,
  level2Vocab,
  level3Vocab,
  level4Vocab,
  level5Vocab,
  level6Vocab,
  level7Vocab,
  level8Vocab,
  level9Vocab
} from './levelVocab';
import { levels } from './levels';

const levelContent = [
  { level: 1, examples: level1Examples, traps: level1Traps, practice: level1PracticeQuestions },
  { level: 2, examples: level2Examples, traps: level2Traps, practice: level2PracticeQuestions },
  { level: 3, examples: level3Examples, traps: level3Traps, practice: level3PracticeQuestions },
  { level: 4, examples: level4Examples, traps: level4Traps, practice: level4PracticeQuestions },
  { level: 5, examples: level5Examples, traps: level5Traps, practice: level5PracticeQuestions },
  { level: 6, examples: level6Examples, traps: level6Traps, practice: level6PracticeQuestions },
  { level: 7, examples: level7Examples, traps: level7Traps, practice: level7PracticeQuestions },
  { level: 8, examples: level8Examples, traps: level8Traps, practice: level8PracticeQuestions },
  { level: 9, examples: level9Examples, traps: level9Traps, practice: level9PracticeQuestions },
  { level: 10, examples: level10Examples, traps: level10Traps, practice: level10PracticeQuestions }
];

const levelRemediationContent = [
  { level: 1, remediations: [] },
  { level: 2, remediations: level2Remediations },
  { level: 3, remediations: level3Remediations },
  { level: 4, remediations: level4Remediations },
  { level: 5, remediations: level5Remediations },
  { level: 6, remediations: level6Remediations },
  { level: 7, remediations: level7Remediations },
  { level: 8, remediations: level8Remediations },
  { level: 9, remediations: [] },
  { level: 10, remediations: [] }
];

const levelVocabulary = [
  { level: 1, vocab: level1Vocab },
  { level: 2, vocab: level2Vocab },
  { level: 3, vocab: level3Vocab },
  { level: 4, vocab: level4Vocab },
  { level: 5, vocab: level5Vocab },
  { level: 6, vocab: level6Vocab },
  { level: 7, vocab: level7Vocab },
  { level: 8, vocab: level8Vocab },
  { level: 9, vocab: level9Vocab }
];

const requiredVocabularyByLevel = [
  { level: 1, terms: ['exam preparation', 'final week'] },
  { level: 2, terms: ['online claims', 'timed practice session', 'important deadlines'] },
  { level: 3, terms: ['study groups', 'university research center', 'working alone'] },
  { level: 4, terms: ['busy season', 'school library', 'valuable time', 'context'] },
  { level: 5, terms: ['commuting time', 'checking its source', 'under pressure', 'last minute'] },
  { level: 6, terms: ['practical examples', 'first attempt', 'accuracy'] },
  { level: 7, terms: ['digital skills', 'local government', 'social media', 'platforms'] },
  { level: 8, terms: ['rural areas', 'hidden modifiers', 'community learners', 'local customs'] },
  { level: 9, terms: ['hidden assumption', 'time pressure', 'different passages'] }
];

const normalizeSentence = (value: string) =>
  value
    .toLowerCase()
    .replace(/___/g, ' blank ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const sentenceTokens = (value: string) =>
  normalizeSentence(value)
    .split(' ')
    .filter((token) => token.length > 2);

const hasEnglishLetters = (value: string) => /[A-Za-z]/.test(value);

const sentenceSimilarity = (left: string, right: string) => {
  const leftTokens = new Set(sentenceTokens(left));
  const rightTokens = new Set(sentenceTokens(right));
  const union = new Set([...leftTokens, ...rightTokens]);
  const intersection = [...leftTokens].filter((token) => rightTokens.has(token));

  return union.size === 0 ? 0 : intersection.length / union.size;
};

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

  it('does not reuse teaching example or trap sentences as practice prompts in the same level', () => {
    const duplicates = levelContent.flatMap(({ level, examples, traps, practice }) => {
      const practiceSentences = new Set(practice.map((question) => question.sentence?.trim()).filter(Boolean));
      const teachingSentences = [
        ...examples.map((example) => ({ source: example.title, sentence: example.sentence.trim() })),
        ...traps.map((trap) => ({ source: trap.title, sentence: trap.sentence.trim() }))
      ];

      return teachingSentences
        .filter(({ sentence }) => practiceSentences.has(sentence))
        .map(({ source, sentence }) => `Level ${level}: ${source} repeats "${sentence}"`);
    });

    expect(duplicates).toEqual([]);
  });

  it('does not repeat exact English prompt sentences anywhere in the course', () => {
    const sentenceSources = levelContent.flatMap(({ level, examples, traps, practice }) => [
      ...examples.map((example) => ({ source: `Level ${level} example ${example.id}`, sentence: example.sentence })),
      ...traps.map((trap) => ({ source: `Level ${level} trap ${trap.id}`, sentence: trap.sentence })),
      ...practice.map((question) => ({ source: `Level ${level} practice ${question.id}`, sentence: question.sentence }))
    ]).filter((entry): entry is { source: string; sentence: string } => Boolean(entry.sentence));
    const seen = new Map<string, string>();
    const duplicates: string[] = [];

    for (const { source, sentence } of sentenceSources) {
      const normalized = normalizeSentence(sentence);
      const firstSource = seen.get(normalized);

      if (firstSource) {
        duplicates.push(`${source} repeats ${firstSource}: "${sentence}"`);
      } else {
        seen.set(normalized, source);
      }
    }

    expect(duplicates).toEqual([]);
  });

  it('keeps teaching prompts and practice prompts meaningfully distinct in each level', () => {
    const fuzzyMatches = levelContent.flatMap(({ level, examples, traps, practice }) => {
      const teachingSentences = [
        ...examples.map((example) => ({ source: example.id, sentence: example.sentence })),
        ...traps.map((trap) => ({ source: trap.id, sentence: trap.sentence }))
      ];

      return teachingSentences.flatMap((teaching) =>
        practice
          .filter((question): question is typeof question & { sentence: string } => Boolean(question.sentence))
          .map((question) => ({
            level,
            teaching,
            question,
            similarity: sentenceSimilarity(teaching.sentence, question.sentence)
          }))
          .filter(({ similarity }) => similarity >= 0.78)
          .map(
            ({ level, teaching, question, similarity }) =>
              `Level ${level}: ${teaching.source} is ${similarity.toFixed(2)} similar to ${question.id}`
          )
      );
    });

    expect(fuzzyMatches).toEqual([]);
  });

  it('does not duplicate option text inside any practice question', () => {
    const duplicateOptions = levelContent.flatMap(({ level, practice }) =>
      practice.flatMap((question) => {
        const seen = new Set<string>();
        const repeated = new Set<string>();

        for (const option of question.options) {
          const optionText = option.text.trim().toLowerCase();

          if (seen.has(optionText)) {
            repeated.add(option.text);
          }

          seen.add(optionText);
        }

        return [...repeated].map((optionText) => `Level ${level} ${question.id} repeats option "${optionText}"`);
      })
    );

    expect(duplicateOptions).toEqual([]);
  });

  it('keeps English practice sentences exam-like instead of overly short', () => {
    const shortPracticeSentences = levelContent.flatMap(({ level, practice }) => {
      const minTokens = level <= 3 ? 8 : 10;

      return practice
        .filter((question): question is typeof question & { sentence: string } => Boolean(question.sentence))
        .filter((question) => hasEnglishLetters(question.sentence))
        .filter((question) => sentenceTokens(question.sentence).length < minTokens)
        .map(
          (question) =>
            `Level ${level} ${question.id} has ${sentenceTokens(question.sentence).length} tokens: "${question.sentence}"`
        );
    });

    expect(shortPracticeSentences).toEqual([]);
  });

  it('keeps English remediation sentences substantial enough for transfer practice', () => {
    const shortRemediationSentences = levelRemediationContent.flatMap(({ level, remediations }) =>
      remediations.flatMap((remediation) =>
        remediation.questions
          .filter((question): question is typeof question & { sentence: string } => Boolean(question.sentence))
          .filter((question) => hasEnglishLetters(question.sentence))
          .filter((question) => sentenceTokens(question.sentence).length < 6)
          .map(
            (question) =>
              `Level ${level} remediation ${remediation.id}/${question.id} has ${sentenceTokens(question.sentence).length} tokens`
          )
      )
    );

    expect(shortRemediationSentences).toEqual([]);
  });

  it('adds vocabulary hints for newly introduced medium-difficulty practice terms', () => {
    const missingTerms = requiredVocabularyByLevel.flatMap(({ level, terms }) => {
      const vocabTerms = new Set(
        levelVocabulary
          .find((item) => item.level === level)
          ?.vocab.map((entry) => entry.term.toLowerCase()) ?? []
      );

      return terms
        .filter((term) => !vocabTerms.has(term.toLowerCase()))
        .map((term) => `Level ${level} missing vocab "${term}"`);
    });

    expect(missingTerms).toEqual([]);
  });

  it('keeps end-of-level term rescue concise', () => {
    const termSets = [
      { level: 1, terms: level1Terms },
      { level: 2, terms: level2Terms },
      { level: 3, terms: level3Terms },
      { level: 4, terms: level4Terms },
      { level: 5, terms: level5Terms },
      { level: 6, terms: level6Terms },
      { level: 7, terms: level7Terms },
      { level: 8, terms: level8Terms },
      { level: 9, terms: level9Terms },
      { level: 10, terms: level10Terms }
    ];

    const overfilledLevels = termSets
      .filter(({ terms }) => terms.length > 3)
      .map(({ level, terms }) => `Level ${level} has ${terms.length} terms`);

    expect(overfilledLevels).toEqual([]);
  });
});
