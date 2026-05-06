export type RouteMode = 'three-day' | 'five-day';

export type ErrorTag =
  | 'mainline-missing'
  | 'modifier-as-mainline'
  | 'predicate-confusion'
  | 'clause-function'
  | 'word-position'
  | 'logic-reversal'
  | 'modifier-target'
  | 'writing-translation-basics'
  | 'special-structure'
  | 'term-blocked';

export interface LevelMeta {
  id: string;
  number: number;
  title: string;
  promise: string;
  group: string;
  status: 'open' | 'locked' | 'complete';
}

export interface TermCard {
  id: string;
  term: string;
  plain: string;
  function: string;
  examUse: string;
  skipForNow: string;
}

export interface LessonExample {
  id: string;
  title: string;
  sentence: string;
  engine: string;
  skeleton: string;
  details: string[];
  translation: string;
  warning?: string;
}

export interface LessonStep {
  id: string;
  title: string;
  body: string[];
}

export interface CommonTrap {
  id: string;
  title: string;
  sentence: string;
  wrongRead: string;
  whyWrong: string;
  correctBreakdown: string[];
  skeleton: string;
  translation: string;
  quickRule: string;
}

export interface PracticeOption {
  id: string;
  text: string;
}

export interface PracticeQuestion {
  id: string;
  title: string;
  sentence?: string;
  prompt: string;
  options: PracticeOption[];
  correctOptionId: string;
  skeleton: string;
  explanation: string;
  errorByOption: Partial<Record<string, ErrorTag[]>>;
}

export interface AnswerRecord {
  questionId: string;
  selectedOptionId: string;
  correct: boolean;
  errorTags: ErrorTag[];
}

export interface ErrorSummaryItem {
  tag: ErrorTag;
  count: number;
}

export interface ErrorTagInfo {
  title: string;
  plain: string;
  action: string;
}

export interface RemediationItem {
  id: string;
  tag: ErrorTag;
  title: string;
  explanation: string;
  questions: PracticeQuestion[];
}
