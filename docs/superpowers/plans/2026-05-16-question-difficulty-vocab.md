# Question Difficulty And Vocabulary Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Raise all level practice and remediation questions toward the new diagnostic standard while preserving the learning curve and adding Chinese meanings for medium/high difficulty vocabulary.

**Architecture:** Keep existing page/components unchanged. Improve content in `src/data/level*.ts` and maintain vocabulary hints through `src/data/levelVocab.ts`; add tests in `src/data/levels.test.ts` to prevent easy practice questions and missing vocabulary coverage from returning.

**Tech Stack:** React, TypeScript, Vitest, existing `PracticeQuestion` and `VocabText` pipeline.

---

### Task 1: Add Content Quality Guardrails

**Files:**
- Modify: `src/data/levels.test.ts`

- [ ] **Step 1: Add a test that practice prompts are not overly short**

Add a Vitest test that scans every `PracticeQuestion.sentence` and fails when too many questions are trivial short sentences. Use token count and length as a proxy, with a lower threshold for Level 1-2 and a higher threshold for Level 4-10.

- [ ] **Step 2: Add a test for vocabulary coverage**

Collect medium/high value terms from updated practice sentences and assert each level's `levelXVocab` includes the new terms. This test should target the exact terms added during this content pass.

- [ ] **Step 3: Run the focused content test**

Run: `npm test -- levels`

Expected initially: fail until content and vocabulary are updated.

---

### Task 2: Upgrade Practice And Remediation Content

**Files:**
- Modify: `src/data/level1.ts`
- Modify: `src/data/level2.ts`
- Modify: `src/data/level3.ts`
- Modify: `src/data/level4.ts`
- Modify: `src/data/level5.ts`
- Modify: `src/data/level6.ts`
- Modify: `src/data/level7.ts`
- Modify: `src/data/level8.ts`
- Modify: `src/data/level9.ts`
- Modify: `src/data/level10.ts`

- [ ] **Step 1: Preserve learning curve**

Do not make Level 1-2 as hard as Level 9-10. Upgrade short, obvious sentences into exam-like but still approachable sentences.

- [ ] **Step 2: Upgrade Levels 4-10 more strongly**

Use longer sentences with realistic distractors: clauses, non-finite modifiers, contrast/concession, tense reference points, inversion, and sentence compression.

- [ ] **Step 3: Keep analysis synchronized**

Whenever changing a sentence, update `options`, `correctOptionId`, `skeleton`, `explanation`, `analysisParts`, and `errorByOption` so the explanation does not describe stale content.

---

### Task 3: Add Medium/High Vocabulary Meanings

**Files:**
- Modify: `src/data/levelVocab.ts`

- [ ] **Step 1: Add vocabulary entries for newly introduced terms**

For every new medium/high term in practice/remediation content, add `VocabEntry` items to the corresponding level vocab array, such as `assumptions`, `proposal`, `practical`, `responses`, `identify`, `argument`, `reference point`, `inversion`, and similar terms introduced in content edits.

- [ ] **Step 2: Prefer useful phrase entries**

When a phrase is more useful than a single word, add the phrase entry, for example `reference point`, `academic articles`, `word order`, `careless mistakes`.

---

### Task 4: Verify And Commit

**Files:**
- Modify: `docs/user-feedback-log.md`
- Modify: `docs/v2-update-backlog.md`
- Modify: `docs/project-handoff-current-progress.md`

- [ ] **Step 1: Run focused tests**

Run: `npm test -- levels`

- [ ] **Step 2: Run full verification**

Run:
`npm run typecheck`
`npm run build`
`npm test`

- [ ] **Step 3: Update documentation**

Record this as the next V2 item: whole-site practice/remediation difficulty and vocabulary coverage upgrade.

- [ ] **Step 4: Commit**

Commit message: `content: raise practice difficulty and vocab coverage`
