# Level Two First Slice Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a playable second level that teaches "three-step word selection" for CET cloze-style word choice.

**Architecture:** Reuse the first-level page pattern: data lives in `src/data/level2.ts`, the page lives in `src/pages/LevelTwoPage.tsx`, and existing shared components render lesson sections, terms, practice, remediation, and summary. The app router gains a `level-2` screen and the level map marks Level 2 open for preview.

**Tech Stack:** React 18, TypeScript, Vite, Vitest, Testing Library.

---

### Task 1: Lock the Level 2 Entry Point

**Files:**
- Modify: `src/data/levels.ts`
- Modify: `src/App.tsx`
- Test: `src/components/LevelMap.test.tsx`

- [ ] **Step 1: Write the failing test**

Update `LevelMap.test.tsx` so `level-2` is open and clicking it calls `onOpenLevel('level-2')`.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- LevelMap`
Expected: FAIL because Level 2 is currently locked in the test fixture or app data.

- [ ] **Step 3: Implement minimal entry data**

Set `level-2` in `src/data/levels.ts` to `status: 'open'`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- LevelMap`
Expected: PASS.

---

### Task 2: Add Level 2 Page Content

**Files:**
- Create: `src/data/level2.ts`
- Create: `src/pages/LevelTwoPage.tsx`
- Test: `src/pages/LevelTwoPage.test.tsx`
- Modify: `src/types.ts`

- [ ] **Step 1: Write the failing page test**

Assert the page renders `词性和位置判断`, `三步筛词法`, `先用位置排除一半，再用意思和形式定答案`, and a practice prompt containing `a common ____`.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- LevelTwoPage`
Expected: FAIL because the page does not exist.

- [ ] **Step 3: Add level2 data**

Create Level 2 steps, terms, examples, traps, 10 practice questions, error tag info, remediations, and summary lines. Extend `ErrorTag` for Level 2 tags: `position-ignored`, `noun-adjective-confusion`, `verb-noun-confusion`, `adverb-confusion`, `meaning-mismatch`, `form-mismatch`.

- [ ] **Step 4: Add `LevelTwoPage`**

Copy the first-level page structure, swap imports to Level 2 data, update hero/facts/completion copy, and keep the same practice/remediation flow.

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- LevelTwoPage`
Expected: PASS.

---

### Task 3: Wire App Navigation

**Files:**
- Modify: `src/App.tsx`
- Test: `src/App.test.tsx`

- [ ] **Step 1: Write the failing app test**

Render `App`, click `进入第 2 关`, and assert `词性和位置判断` appears.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- App`
Expected: FAIL because `App` only supports `level-1`.

- [ ] **Step 3: Implement route wiring**

Add `level-2` to `Screen`, import `LevelTwoPage`, and route `onOpenLevel('level-2')` to it.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- App`
Expected: PASS.

---

### Task 4: Verify

**Files:**
- No new files.

- [ ] **Step 1: Run full test suite**

Run: `npm test`
Expected: all tests pass.

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: TypeScript and Vite build pass.

- [ ] **Step 3: Confirm local dev URL**

Open or request `http://127.0.0.1:5173/index.html`; Vite hot reload should show Level 2 as open.
