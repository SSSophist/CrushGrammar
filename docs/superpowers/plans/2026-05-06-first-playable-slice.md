# First Playable Slice Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first playable version of the CET grammar site: a route-selection home page, a level map, a complete Level 1 lesson page, instant practice feedback, error summary, remediation, and term rescue.

**Architecture:** Use a static React app with local TypeScript data. Keep content, practice logic, and UI components separated so Level 1 can be refined by editing data without rewriting interaction code. The first slice has no backend, no login, no real AI agent, and no remote database.

**Tech Stack:** React 18.2, TypeScript 5.2, Vite 4.5, Vitest 0.34, Testing Library, lucide-react, plain CSS. Versions are chosen to work with the current local Node `v14.21.3`.

---

## Scope

This plan implements only the first playable slice:

- Home page styled like an exam review map.
- 3-day / 5-day route selector.
- 10-level map with Level 1 open and later levels locked.
- Level 1 page using the approved sample content from `docs/level-01-sentence-skeleton-sample.md`.
- Anchor navigation inside Level 1.
- Term rescue sidebar using Level 1 terms.
- Practice questions with instant grading.
- Error tags recorded per wrong answer.
- End-of-practice error summary.
- Remediation questions by error tag.
- Completion state after remediation.

Out of scope for this slice:

- User accounts.
- Payment.
- Backend CMS.
- Real AI Agent.
- Full 10-level content.
- Full historical CET question ingestion.
- Browser persistence beyond simple local state.

## File Structure

Create these files:

- `package.json`: scripts and dependency versions.
- `index.html`: Vite root HTML.
- `tsconfig.json`: TypeScript app config.
- `tsconfig.node.json`: TypeScript config for Vite config.
- `vite.config.ts`: Vite and Vitest config.
- `src/main.tsx`: React mount.
- `src/App.tsx`: top-level app state and screen switching.
- `src/types.ts`: shared data types.
- `src/data/levels.ts`: level map metadata.
- `src/data/level1.ts`: Level 1 lesson, terms, examples, practice, remediation.
- `src/lib/practice.ts`: pure practice-session helpers.
- `src/lib/practice.test.ts`: tests for grading, error summary, remediation gates.
- `src/components/RouteSelector.tsx`: 3-day / 5-day segmented selector.
- `src/components/LevelMap.tsx`: homepage level map.
- `src/components/LevelNav.tsx`: in-level anchor navigation.
- `src/components/LessonSection.tsx`: reusable lesson section wrapper.
- `src/components/ExamCallout.tsx`: callout component for exam use and warnings.
- `src/components/TermRescueSidebar.tsx`: static term rescue panel.
- `src/components/PracticeQuestion.tsx`: instant feedback question component.
- `src/components/ErrorSummary.tsx`: post-practice error summary.
- `src/components/RemediationPanel.tsx`: focused remediation flow.
- `src/components/LastMinuteReview.tsx`: end-of-level quick review.
- `src/pages/HomePage.tsx`: route selector and level map.
- `src/pages/LevelOnePage.tsx`: full Level 1 page.
- `src/styles.css`: responsive layout and visual styling.

Modify these docs:

- `docs/cet-grammar-product-requirements-and-design.md`: add implementation-plan link.
- `docs/ui-interaction-reference-nlp-final.md`: keep as UI reference, no code changes required unless implementation reveals a mismatch.

## Task 1: Bootstrap React App

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles.css`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "crush-grammar",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "tsc && vite build",
    "preview": "vite preview --host 127.0.0.1",
    "test": "vitest run"
  },
  "dependencies": {
    "@vitejs/plugin-react": "4.2.1",
    "lucide-react": "0.468.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "vite": "4.5.3"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "6.1.6",
    "@testing-library/react": "14.1.2",
    "@testing-library/user-event": "14.5.2",
    "@types/react": "18.2.43",
    "@types/react-dom": "18.2.17",
    "jsdom": "21.1.2",
    "typescript": "5.2.2",
    "vitest": "0.34.6"
  }
}
```

- [ ] **Step 2: Create `index.html`**

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Crush Grammar | 四六级语法速通</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Create TypeScript and Vite config files**

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

`tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

`vite.config.ts`:

```ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true
  }
});
```

- [ ] **Step 4: Create initial React entry**

`src/main.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`src/App.tsx`:

```tsx
export default function App() {
  return (
    <main className="app-shell">
      <p className="eyebrow">Crush Grammar</p>
      <h1>四六级语法速通</h1>
      <p>第一个可玩切片搭建中：闯关地图 + 第 1 关 + 即时批改。</p>
    </main>
  );
}
```

`src/styles.css`:

```css
:root {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #17201b;
  background: #f5f2e8;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

button,
input {
  font: inherit;
}

.app-shell {
  min-height: 100vh;
  padding: 32px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #47624f;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}
```

- [ ] **Step 5: Install dependencies**

Run: `npm install`

Expected: Dependencies install and `package-lock.json` is created. If network access is blocked by the sandbox, rerun with escalated permission.

- [ ] **Step 6: Verify scaffold**

Run: `npm run build`

Expected: TypeScript passes and Vite writes `dist`.

## Task 2: Add Data Types and Level Metadata

**Files:**
- Create: `src/types.ts`
- Create: `src/data/levels.ts`
- Create: `src/data/level1.ts`
- Create: `src/lib/practice.ts`
- Create: `src/lib/practice.test.ts`

- [ ] **Step 1: Write failing practice tests**

`src/lib/practice.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { getErrorSummary, gradeAnswer, isQuestionCorrect } from './practice';

describe('practice helpers', () => {
  it('grades a correct answer without error tags', () => {
    const result = gradeAnswer(
      { id: 'q1', correctOptionId: 'b', errorByOption: { a: ['mainline-confusion'] } },
      'b'
    );

    expect(result.correct).toBe(true);
    expect(result.errorTags).toEqual([]);
  });

  it('grades a wrong answer with mapped error tags', () => {
    const result = gradeAnswer(
      { id: 'q1', correctOptionId: 'b', errorByOption: { a: ['modifier-as-mainline'] } },
      'a'
    );

    expect(result.correct).toBe(false);
    expect(result.errorTags).toEqual(['modifier-as-mainline']);
  });

  it('summarizes repeated error tags by frequency', () => {
    const summary = getErrorSummary([
      { questionId: 'q1', selectedOptionId: 'a', correct: false, errorTags: ['modifier-as-mainline'] },
      { questionId: 'q2', selectedOptionId: 'a', correct: false, errorTags: ['predicate-confusion'] },
      { questionId: 'q3', selectedOptionId: 'a', correct: false, errorTags: ['modifier-as-mainline'] }
    ]);

    expect(summary).toEqual([
      { tag: 'modifier-as-mainline', count: 2 },
      { tag: 'predicate-confusion', count: 1 }
    ]);
  });

  it('checks correctness from minimal question data', () => {
    expect(isQuestionCorrect({ correctOptionId: 'c' }, 'c')).toBe(true);
    expect(isQuestionCorrect({ correctOptionId: 'c' }, 'a')).toBe(false);
  });
});
```

- [ ] **Step 2: Run tests and verify failure**

Run: `npm test`

Expected: FAIL because `src/lib/practice.ts` does not exist.

- [ ] **Step 3: Add shared types**

`src/types.ts`:

```ts
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
  skeleton: string;
  explanation: string[];
  translation: string;
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

export interface RemediationItem {
  id: string;
  tag: ErrorTag;
  title: string;
  explanation: string;
  questions: PracticeQuestion[];
}
```

- [ ] **Step 4: Add practice helpers**

`src/lib/practice.ts`:

```ts
import type { AnswerRecord, ErrorSummaryItem, ErrorTag } from '../types';

interface GradeableQuestion {
  id: string;
  correctOptionId: string;
  errorByOption?: Partial<Record<string, ErrorTag[]>>;
}

export function isQuestionCorrect(question: Pick<GradeableQuestion, 'correctOptionId'>, selectedOptionId: string) {
  return question.correctOptionId === selectedOptionId;
}

export function gradeAnswer(question: GradeableQuestion, selectedOptionId: string): Omit<AnswerRecord, 'questionId'> {
  const correct = isQuestionCorrect(question, selectedOptionId);

  return {
    selectedOptionId,
    correct,
    errorTags: correct ? [] : question.errorByOption?.[selectedOptionId] ?? []
  };
}

export function getErrorSummary(records: AnswerRecord[]): ErrorSummaryItem[] {
  const counts = new Map<ErrorTag, number>();

  records.forEach((record) => {
    if (record.correct) {
      return;
    }

    record.errorTags.forEach((tag) => {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    });
  });

  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
```

- [ ] **Step 5: Add level metadata**

`src/data/levels.ts`:

```ts
import type { LevelMeta } from '../types';

export const levels: LevelMeta[] = [
  { id: 'level-1', number: 1, title: '先会看句子骨架', promise: '先抓谁做了什么', group: '句子骨架', status: 'open' },
  { id: 'level-2', number: 2, title: '词性和位置判断', promise: '选词填空先看位置', group: '句子骨架', status: 'locked' },
  { id: 'level-3', number: 3, title: '一个句子一个主发动机', promise: '动词再多也先找主线', group: '句子骨架', status: 'locked' },
  { id: 'level-4', number: 4, title: '从句只分三大类就够了', promise: '判断一坨句子在干嘛', group: '句子扩展', status: 'locked' },
  { id: 'level-5', number: 5, title: '非谓语三件套', promise: '看懂 doing / done / to do', group: '句子扩展', status: 'locked' },
  { id: 'level-6', number: 6, title: '并列、转折、因果和让步', promise: '读懂作者逻辑方向', group: '句间逻辑', status: 'locked' },
  { id: 'level-7', number: 7, title: '修饰语和长难句压缩术', promise: '把长句压回主干', group: '长难句压缩', status: 'locked' },
  { id: 'level-8', number: 8, title: '时态、语态、主谓一致够用规则', promise: '写译少扣基础分', group: '写译避坑', status: 'locked' },
  { id: 'level-9', number: 9, title: '高频特殊结构速通', promise: '识别比较、强调、倒装等', group: '写译避坑', status: 'locked' },
  { id: 'level-10', number: 10, title: '总复盘：语法秒杀流程', promise: '考场固定检查顺序', group: '考场流程', status: 'locked' }
];
```

- [ ] **Step 6: Add Level 1 data**

Create `src/data/level1.ts` with:

- `terms`: the five term cards from `docs/level-01-sentence-skeleton-sample.md`.
- `examples`: the four example sentences from the sample doc.
- `practiceQuestions`: the ten practice questions from the sample doc.
- `remediations`: the five remediation groups A-E from the sample doc.
- `lastMinuteReview`: four bullets from the UI reference.

Use the exact approved text from `docs/level-01-sentence-skeleton-sample.md` so product copy stays in sync with the reviewed sample.

- [ ] **Step 7: Run tests**

Run: `npm test`

Expected: PASS with four practice-helper tests.

## Task 3: Build Home Page and Level Map

**Files:**
- Create: `src/components/RouteSelector.tsx`
- Create: `src/components/LevelMap.tsx`
- Create: `src/pages/HomePage.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Implement `RouteSelector`**

It must render two buttons: `3 天极限版` and `5 天稳妥版`, use `aria-pressed`, and call `onChange`.

- [ ] **Step 2: Implement `LevelMap`**

It must group levels by `group`, show number, title, promise, status, and call `onOpenLevel` only for open levels.

- [ ] **Step 3: Implement `HomePage`**

It must show:

- Brand line.
- Main title `四六级语法闯关地图`.
- Short promise line.
- Route selector.
- Start Level 1 button.
- Grouped level map.

- [ ] **Step 4: Wire `App` navigation**

Use local state:

```ts
type Screen = 'home' | 'level-1';
```

Default screen is `home`; opening Level 1 switches to `level-1`.

- [ ] **Step 5: Style home page**

Use `docs/ui-interaction-reference-nlp-final.md` as the layout reference:

- no marketing hero;
- map-first layout;
- grouped level cards;
- route segmented control;
- calm exam-tool color palette;
- no nested cards.

- [ ] **Step 6: Build**

Run: `npm run build`

Expected: PASS.

## Task 4: Build Level 1 Lesson Page

**Files:**
- Create: `src/components/LevelNav.tsx`
- Create: `src/components/LessonSection.tsx`
- Create: `src/components/ExamCallout.tsx`
- Create: `src/components/TermRescueSidebar.tsx`
- Create: `src/components/LastMinuteReview.tsx`
- Create: `src/pages/LevelOnePage.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Implement `LevelNav`**

Render anchor links:

- 本关定位
- 考场判断法
- 四六级场景
- 术语急救
- 例句拆解
- 常见坑
- 过关练习
- 最后速记

- [ ] **Step 2: Implement reusable content components**

Create simple components with clear props:

- `LessonSection`: `id`, `title`, `children`.
- `ExamCallout`: `tone`, `title`, `children`.
- `LastMinuteReview`: `items`.

- [ ] **Step 3: Implement `TermRescueSidebar`**

Desktop: right-side panel.  
Mobile: place below navigation for this slice.

It renders all Level 1 term cards with the four-part answer style:

- 一句人话
- 它在句子里干嘛
- 四六级怎么用
- 别学太深

- [ ] **Step 4: Implement `LevelOnePage`**

Use the approved Level 1 sample doc as content source. Render:

- top bar with back-to-map button;
- level title;
- progress facts: `4 步抓骨架`, `10 题即时批改`, `5 个常见坑`, `错因清零后通关`;
- `LevelNav`;
- lesson sections;
- examples;
- common traps;
- practice area shell that Task 5 replaces with interactive questions;
- last minute review.

- [ ] **Step 5: Wire `App`**

When screen is `level-1`, render `LevelOnePage`.

- [ ] **Step 6: Build**

Run: `npm run build`

Expected: PASS.

## Task 5: Build Instant Practice Feedback

**Files:**
- Create: `src/components/PracticeQuestion.tsx`
- Create: `src/components/ErrorSummary.tsx`
- Modify: `src/pages/LevelOnePage.tsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Implement `PracticeQuestion`**

Behavior:

- renders sentence, prompt, options;
- before submit, options are selectable;
- after submit, selection locks;
- shows correct/wrong status immediately;
- shows correct answer;
- shows skeleton;
- shows explanation;
- shows error tags when wrong;
- exposes `onAnswered(record)`.

- [ ] **Step 2: Implement `ErrorSummary`**

Behavior:

- if no errors, show direct completion prompt;
- if errors exist, show tag, count, plain explanation, remediation button;
- use `getErrorSummary(records)` from `src/lib/practice.ts`.

- [ ] **Step 3: Add practice state to `LevelOnePage`**

State:

```ts
const [answers, setAnswers] = useState<AnswerRecord[]>([]);
const [activeRemediationTag, setActiveRemediationTag] = useState<ErrorTag | null>(null);
```

Rules:

- one answer record per question;
- replacing an answer for the same question is allowed only if the UI later adds reset;
- for this slice, answer once and continue;
- after all 10 questions have records, show `ErrorSummary`.

- [ ] **Step 4: Style feedback states**

Add visual states:

- correct: green border and calm success background;
- wrong: red border and clear warning background;
- error tag chip;
- skeleton feedback block;
- explanation block.

- [ ] **Step 5: Build and test**

Run:

```bash
npm test
npm run build
```

Expected: tests PASS and build PASS.

## Task 6: Build Remediation Flow

**Files:**
- Create: `src/components/RemediationPanel.tsx`
- Modify: `src/pages/LevelOnePage.tsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Implement `RemediationPanel`**

Behavior:

- receives a remediation group;
- renders error title and human explanation;
- renders 1-3 variant questions using `PracticeQuestion`;
- tracks remediation answers locally;
- when all remediation questions are correct, calls `onComplete(tag)`.

- [ ] **Step 2: Add completion state**

In `LevelOnePage`, track:

```ts
const [completedRemediations, setCompletedRemediations] = useState<ErrorTag[]>([]);
```

Completion rule:

- if no practice errors, show Level 1 complete;
- if errors exist, Level 1 complete only after every error tag in summary is in `completedRemediations`.

- [ ] **Step 3: Add completion feedback**

Show the approved pass copy from `docs/level-01-sentence-skeleton-sample.md`:

```text
你已经完成第 1 关：先会看句子骨架。
现在你至少知道，英文长句不能一上来逐词翻译，要先找“谁 + 做/是 + 什么/怎么样”。
下一关我们会继续解决一个更具体的问题：看到选词填空或长句空位时，怎么用位置判断词性。
```

- [ ] **Step 4: Build and test**

Run:

```bash
npm test
npm run build
```

Expected: tests PASS and build PASS.

## Task 7: Responsive Styling and UI Polish

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Desktop layout**

Implement:

- full-width page bands;
- constrained content width;
- two-column lesson layout with right term rescue sidebar;
- sticky or near-top `LevelNav`;
- stable card dimensions for level map;
- non-overlapping buttons and chips.

- [ ] **Step 2: Mobile layout**

Implement:

- single-column content;
- horizontally scrollable `LevelNav`;
- term rescue below intro or collapsible-looking panel;
- practice feedback directly below each question;
- buttons full-width when needed.

- [ ] **Step 3: Palette check**

Use a restrained multi-color palette:

- warm paper background;
- deep green text accents;
- amber for current progress;
- green for correct;
- red for wrong;
- blue-gray for informational blocks.

Avoid a one-note purple, beige-only, dark-blue-only, or espresso-only palette.

- [ ] **Step 4: Build**

Run: `npm run build`

Expected: PASS.

## Task 8: Local Verification and Dev Server

**Files:**
- No new files.

- [ ] **Step 1: Run tests**

Run: `npm test`

Expected: practice helper tests PASS.

- [ ] **Step 2: Build production bundle**

Run: `npm run build`

Expected: TypeScript and Vite build PASS.

- [ ] **Step 3: Start local dev server**

Run: `npm run dev`

Expected: Vite serves the site on `http://127.0.0.1:5173/` or the next available port.

- [ ] **Step 4: Manual smoke test**

In browser:

- home page loads;
- route selector toggles;
- Level 1 opens;
- anchor navigation moves through sections;
- term rescue content is visible;
- practice question grades immediately;
- wrong answer shows error tag and explanation;
- error summary appears after 10 answers;
- remediation unlocks completion.

## Self-Review

Spec coverage:

- Product positioning: covered by map-first homepage and Level 1 slice.
- UI reference: covered by home map, module nav, compact sections, self-test upgrade.
- Level 1 sample: covered by data and page implementation tasks.
- Instant feedback: covered by Task 5.
- Error tags and remediation: covered by Tasks 2, 5, and 6.
- Term rescue: covered by Task 4.
- Static MVP scope: preserved; no backend or AI in this slice.

Ambiguity scan:

- The plan contains no blank sections.
- Data creation references the existing approved Level 1 sample document to avoid duplicating 20k words in this plan.
- Every generated code helper has concrete signatures and expected behavior.

Type consistency:

- `ErrorTag`, `AnswerRecord`, `PracticeQuestion`, and `RemediationItem` are defined before component tasks use them.
- Practice helpers return the types consumed by `PracticeQuestion`, `ErrorSummary`, and `RemediationPanel`.

## Execution Choice

Recommended execution for this project:

**Inline Execution** in the current session. The slice is small, the project is empty, and content/UI decisions are tightly coupled with user review. Subagents are not needed unless implementation later splits into independent content ingestion, UI build, and test automation tracks.
