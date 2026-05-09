import type { ReactNode } from 'react';
import type { VocabEntry } from '../types';

interface VocabTextProps {
  text: string;
  entries?: VocabEntry[];
}

interface VocabMatch {
  entry: VocabEntry;
  start: number;
  end: number;
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const findMatches = (text: string, entries: VocabEntry[] = []) => {
  const sortedEntries = [...entries]
    .filter((entry) => entry.term.trim())
    .sort((a, b) => b.term.length - a.term.length);
  const matches: VocabMatch[] = [];

  sortedEntries.forEach((entry) => {
    const pattern = new RegExp(`\\b${escapeRegExp(entry.term)}\\b`, 'gi');
    let match = pattern.exec(text);

    while (match) {
      const start = match.index;
      const end = start + match[0].length;
      const overlaps = matches.some((existing) => start < existing.end && end > existing.start);

      if (!overlaps) {
        matches.push({ entry, start, end });
      }

      match = pattern.exec(text);
    }
  });

  return matches.sort((a, b) => a.start - b.start);
};

export default function VocabText({ text, entries = [] }: VocabTextProps) {
  const matches = findMatches(text, entries);

  if (matches.length === 0) {
    return <>{text}</>;
  }

  const nodes: ReactNode[] = [];
  let cursor = 0;

  matches.forEach((match) => {
    if (match.start > cursor) {
      nodes.push(text.slice(cursor, match.start));
    }

    const displayText = text.slice(match.start, match.end);
    const tooltipText = match.entry.note ? `${match.entry.meaning}；${match.entry.note}` : match.entry.meaning;

    nodes.push(
      <span className="vocab-shell" key={`${match.entry.term}-${match.start}`}>
        <span aria-label={`${displayText}：${tooltipText}`} className="vocab-word" tabIndex={0}>
          {displayText}
        </span>
        <span className="vocab-tooltip" role="tooltip">
          {tooltipText}
        </span>
      </span>
    );

    cursor = match.end;
  });

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return <>{nodes}</>;
}
