import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'crush_grammar_unlocked_levels';
const INITIAL_LEVELS = ['level-1'];

export const ALL_LEVEL_IDS = [
  'level-1',
  'level-2',
  'level-3',
  'level-4',
  'level-5',
  'level-6',
  'level-7',
  'level-8',
  'level-9',
  'level-10'
];

export function useProgress() {
  const [unlockedLevels, setUnlockedLevels] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to parse progress from local storage', e);
    }
    return INITIAL_LEVELS;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedLevels));
  }, [unlockedLevels]);

  const unlockNext = useCallback((currentLevelId: string) => {
    const currentIndex = ALL_LEVEL_IDS.indexOf(currentLevelId);
    if (currentIndex >= 0 && currentIndex < ALL_LEVEL_IDS.length - 1) {
      const nextLevelId = ALL_LEVEL_IDS[currentIndex + 1];
      setUnlockedLevels((current) => {
        if (!current.includes(nextLevelId)) {
          return [...current, nextLevelId];
        }
        return current;
      });
    }
  }, []);

  const unlockAll = useCallback(() => {
    setUnlockedLevels(ALL_LEVEL_IDS);
  }, []);

  const unlockThrough = useCallback((levelId: string) => {
    const targetIndex = ALL_LEVEL_IDS.indexOf(levelId);

    if (targetIndex < 0) {
      return;
    }

    setUnlockedLevels((current) => {
      const next = ALL_LEVEL_IDS.slice(0, targetIndex + 1);
      const merged = Array.from(new Set([...current, ...next]));
      return merged.sort((a, b) => ALL_LEVEL_IDS.indexOf(a) - ALL_LEVEL_IDS.indexOf(b));
    });
  }, []);

  return { unlockedLevels, unlockNext, unlockAll, unlockThrough };
}
