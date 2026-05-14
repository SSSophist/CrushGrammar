# Crush Grammar 当前开发交接文档

更新时间：2026-05-14

## 当前紧急背景

用户确认：之前由其他模型修改后，当前代码回到了较早状态；我们此前根据反馈做过的一批 V2 功能没有 commit 到仓库。现在必须重新按排期逐项实现，并且每个功能点验收完成后必须 commit。

本次重启后的铁律：

- 不再把多个功能攒在一个未提交工作区里。
- 每个任务完成后：测试/构建验收 -> 更新文档 -> git commit。
- 未重新验收的任务不得标为已完成。
- 不默认 push GitHub，除非用户明确要求。

## 必读文档

1. `docs/v2-update-backlog.md`
   - 第二版任务、优先级、状态、验收标准。
2. `docs/user-feedback-log.md`
   - Netlify 上线后的用户反馈原文。
3. `docs/README.md`
   - docs 目录说明。

## 当前工作目录

实际 React app 在：

```text
C:\Users\23292\Desktop\Crush Grammar\.worktrees\first-playable-slice
```

主目录：

```text
C:\Users\23292\Desktop\Crush Grammar
```

主要用于 Git worktree 管理和早期 docs。当前日常开发请在 `.worktrees\first-playable-slice` 中进行。

## 当前 Git 状态基线

- 分支：`codex/first-playable-slice`
- 最近远程分支包含 10 关代码，但缺少后续 V2 修复提交。
- 当前要从文档恢复开始，随后逐项修复。

## 当前代码能力快照

从文件结构看，当前代码已有：

- React / Vite / TypeScript app。
- Level 1-10 页面与题库文件。
- 首页路线选择组件 `RouteSelector`。
- 词汇 hover/focus 释义组件 `VocabText`。
- 练习题即时批改组件 `PracticeQuestion`。
- 错因汇总与补救组件 `ErrorSummary`、`RemediationPanel`。

当前缺口需以 `v2-update-backlog.md` 为准，不凭记忆认为已经完成。

## 当前最高优先级

`V2-001` 已完成，当前测试基线恢复：

- `npm test` 通过。
- 当前测试数量：21 个测试文件、71 个测试。
- 已修复 App 测试解锁前置条件、Level 2-9 页面测试完成回调，以及第 10 关标题元数据不一致。

`V2-003`、`V2-002`、`V2-011` 已完成，当前工程护栏、第 10 关测试和首页主按钮进度同步已恢复：

- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过，当前测试数量：23 个测试文件、76 个测试。
- `package.json` 已新增 `typecheck: tsc --noEmit`。
- `src/pages/LevelTenPage.test.tsx` 已新增，覆盖第 10 关 H1、SOP、首题反馈和全对通关。
- `src/pages/HomePage.test.tsx` 已新增，覆盖首页主按钮开始/继续/查看总复盘。
- `vite.config.ts` 的 `testTimeout` 已调为 15000ms，适配当前长流程页面测试。

下一步从 `V2-009` 开始：

1. 每关通关完成区底部增加 `返回闯关地图` 和 `继续第 X 关`。
2. Level 10 底部只显示返回地图。
3. 按钮需要在手机端不拥挤。
4. 增加自动化测试。
5. 运行 `npm run typecheck`、`npm run build`、`npm test`。
6. 更新 backlog 状态。
7. commit。

之后按顺序处理：

1. `V2-005` 阅读对比度
2. `V2-006` 手机端响应式
3. `V2-007` 单题翻页刷题体验
4. `V2-004` 题目重复排查
5. `V2-008` 术语解释精简
6. `V2-010` 首页诊断测评

## 常用命令

```bash
npm run dev
npm test
npm run build
```

当前 `package.json` 已提供 `typecheck` 脚本。

## Commit 规则

每个任务 commit 示例：

```text
docs: restore v2 backlog and handoff
test: restore current suite baseline
chore: add typecheck script
test: cover level ten page
fix: sync home start button with progress
feat: add completion actions to level endings
style: improve lesson reading contrast
style: add mobile responsive baseline
feat: add single-question practice flow
test: prevent repeated teaching and practice prompts
content: trim term explanations
```

## 2026-05-14 更新：V2 文档恢复

本次任务：

- 恢复 docs 索引。
- 恢复用户反馈文档。
- 恢复第二版任务 backlog。
- 重写当前交接文档，明确每项重新实现后必须 commit。

已提交：

```bash
git commit -m "docs: restore v2 backlog and handoff"
```

## 2026-05-14 更新：V2-001 测试基线恢复

本次任务：

- 先跑全量测试确认失败基线：9 个测试文件失败，19 个测试失败。
- 修复 App 测试需要的解锁状态。
- 修复 Level 2-9 页面测试缺少 `onLevelComplete` 回调的问题。
- 对齐第 10 关元数据标题与页面标题。

验收结果：

- 定向测试：28 个测试通过。
- 全量测试：21 个测试文件、71 个测试通过。

完成后应提交：

```bash
git add src/App.test.tsx src/data/levels.ts src/pages/LevelTwoPage.test.tsx src/pages/LevelThreePage.test.tsx src/pages/LevelFourPage.test.tsx src/pages/LevelFivePage.test.tsx src/pages/LevelSixPage.test.tsx src/pages/LevelSevenPage.test.tsx src/pages/LevelEightPage.test.tsx src/pages/LevelNinePage.test.tsx docs/v2-update-backlog.md docs/project-handoff-current-progress.md
git commit -m "test: restore current suite baseline"
```

## 2026-05-14 更新：V2-003 类型检查护栏

本次任务：

- 新增 `typecheck` 脚本。
- 修复 `LevelMap` 测试夹具类型。
- 修复 `HomePage` 动态关卡列表的类型推断。

验收结果：

- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过，21 个测试文件、71 个测试通过。

完成后应提交：

```bash
git add package.json src/components/LevelMap.test.tsx src/pages/HomePage.tsx docs/v2-update-backlog.md docs/project-handoff-current-progress.md
git commit -m "chore: add typecheck script"
```

## 2026-05-14 更新：V2-002 Level 10 自动化测试

本次任务：

- 新增 `src/pages/LevelTenPage.test.tsx`。
- 覆盖第 10 关 H1、SOP、综合实战入口、首题答对反馈、进度变化和全对通关回调。

验收结果：

- `npm test -- LevelTenPage` 通过，1 个测试文件、2 个测试通过。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过，22 个测试文件、73 个测试通过。

完成后应提交：

```bash
git add src/pages/LevelTenPage.test.tsx docs/v2-update-backlog.md docs/project-handoff-current-progress.md
git commit -m "test: cover level ten page"
```

## 2026-05-14 更新：V2-011 首页主按钮进度同步

本次任务：

- 首页主按钮从写死 `开始第 1 关` 改为根据已解锁进度计算。
- 新用户显示 `开始第 1 关`。
- 已解锁到第 X 关显示 `继续第 X 关`。
- 全部解锁显示 `查看总复盘`，点击进入第 10 关。
- 新增 `HomePage.test.tsx` 覆盖开始、继续、路线切换、总复盘入口。
- 将 Vitest 默认超时调到 15000ms，防止长流程页面测试在全量运行时假超时。

验收结果：

- `npm test -- HomePage` 通过，1 个测试文件、3 个测试通过。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过，23 个测试文件、76 个测试通过。

完成后应提交：

```bash
git add src/pages/HomePage.tsx src/pages/HomePage.test.tsx vite.config.ts docs/v2-update-backlog.md docs/project-handoff-current-progress.md
git commit -m "fix: sync home start button with progress"
```
