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

`V2-003`、`V2-002`、`V2-011`、`V2-009`、`V2-005`、`V2-006`、`V2-007`、`V2-004`、`V2-008` 已完成，当前工程护栏、第 10 关测试、首页主按钮进度同步、每关完成区底部操作、解析区阅读对比度、手机端响应式基线、单题翻页刷题体验、例题/通关题去重护栏和术语解释精简已恢复：

- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过，当前测试数量：26 个测试文件、84 个测试。
- `package.json` 已新增 `typecheck: tsc --noEmit`。
- `src/pages/LevelTenPage.test.tsx` 已新增，覆盖第 10 关 H1、SOP、首题反馈和全对通关。
- `src/pages/HomePage.test.tsx` 已新增，覆盖首页主按钮开始/继续/查看总复盘。
- `src/components/LevelCompletionActions.tsx` 已新增，统一 Level 1-10 完成区底部操作。
- Level 1-9 完成区底部已有 `返回闯关地图` 和 `继续第 X 关`；Level 10 只有返回地图。
- `src/components/LessonAnalysisReadability.test.tsx` 已新增，锁住例句/常见坑拆解的高对比阅读样式钩子。
- 例句卡、常见坑卡、即时反馈区正文已改为深色高对比文本，重点标签更清楚，手机端行高更舒适。
- `src/styles.responsive.test.ts` 已新增，锁住 640px 小屏断点、导航横滑、弹窗/路线/练习区手机规则和横向溢出保护。
- `src/styles.css` 已增加 640px/430px 响应式规则：首页、关卡导航、练习题、术语卡、弹窗在手机端更稳。
- `src/components/PracticeQuestionDeck.tsx` 已新增，Level 1-10 过关练习区统一改为单题翻页。
- 答对后生产环境默认 0.9 秒自动进入下一题，下一题顶部保留约 2.6 秒 `答对 +1` 正反馈；答错后停留解析，点击继续后才进入下一题。
- `src/data/levels.test.ts` 已新增例题/常见坑与通关题去重检查，覆盖 Level 1-10。
- 已替换 Level 2 q1/q2/q3/q8、Level 3 q1、Level 4 q1、Level 9 q10 的重复通关题，并同步选项、骨架、解析和标色片段。
- `src/components/TermRescueSidebar.tsx` 已将术语卡精简为 2 段：`一句人话` 和 `做题时怎么用`。
- Level 1-10 术语列表已压缩到每关最多 3 个核心术语，`levels.test.ts` 已加回归测试防止术语区重新膨胀。
- `vite.config.ts` 的 `testTimeout` 已调为 15000ms，适配当前长流程页面测试。

下一步从 `V2-010` 开始：

1. 设计首页诊断测评入口。
2. 提供 `我是语法小白，想从 0 开始` 的路径。
3. 测评结果推荐薄弱关卡，并影响主按钮/解锁状态。
4. 运行 `npm run typecheck`、`npm run build`、`npm test`。
5. 更新 backlog 状态。
6. commit。

之后继续根据新反馈补排期。

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

## 2026-05-14 更新：V2-009 每关完成区底部操作

本次任务：

- 新增 `LevelCompletionActions` 复用组件，避免每关重复写底部按钮结构。
- Level 1-9 完成区底部显示 `返回闯关地图` 和 `继续第 X 关`。
- Level 10 完成区底部只显示 `返回闯关地图`。
- `App.tsx` 为 Level 1-9 传入下一关跳转回调。
- 完成区按钮支持换行和窄屏满宽堆叠。
- 更新 `LevelTwoPage.test.tsx` 和 `LevelTenPage.test.tsx` 覆盖底部操作。

验收结果：

- `npm test -- LevelTwoPage LevelTenPage` 通过，2 个测试文件、4 个测试通过。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过，23 个测试文件、76 个测试通过。

完成后应提交：

```bash
git add src/App.tsx src/components/LevelCompletionActions.tsx src/styles.css src/pages/LevelOnePage.tsx src/pages/LevelTwoPage.tsx src/pages/LevelThreePage.tsx src/pages/LevelFourPage.tsx src/pages/LevelFivePage.tsx src/pages/LevelSixPage.tsx src/pages/LevelSevenPage.tsx src/pages/LevelEightPage.tsx src/pages/LevelNinePage.tsx src/pages/LevelTenPage.tsx src/pages/LevelTwoPage.test.tsx src/pages/LevelTenPage.test.tsx docs/v2-update-backlog.md docs/project-handoff-current-progress.md
git commit -m "feat: add completion actions to level endings"
```

## 2026-05-14 更新：V2-005 解析区阅读对比度

本次任务：

- 为 `LessonExampleCard` 和 `LessonTrapCard` 的解析正文增加 `analysis-copy`、`analysis-list` 样式钩子。
- 解析正文、列表、引用块和即时反馈区改为更高对比度的深色文本。
- 重点标签使用浅绿底深绿字，避免长段说明变成一片灰字。
- 手机端提高长段解析和反馈区行高。
- 新增 `LessonAnalysisReadability.test.tsx` 覆盖例句卡和常见坑卡的可读性样式钩子。

验收结果：

- TDD 红灯：`npm test -- LessonAnalysisReadability` 初次失败。
- 定向测试：`npm test -- LessonAnalysisReadability` 通过，1 个测试文件、2 个测试通过。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过，24 个测试文件、78 个测试通过。

完成后应提交：

```bash
git add src/components/LessonExampleCard.tsx src/components/LessonTrapCard.tsx src/components/LessonAnalysisReadability.test.tsx src/styles.css docs/v2-update-backlog.md docs/project-handoff-current-progress.md
git commit -m "style: improve lesson reading contrast"
```

## 2026-05-14 更新：V2-006 手机端响应式基线

本次任务：

- 新增 `src/styles.responsive.test.ts`，覆盖 640px 小屏断点、导航横滑、弹窗/路线/练习区手机规则和横向溢出保护。
- `src/styles.css` 增加全局横向溢出保护。
- 关卡导航支持横向滑动、滚动吸附，并在 430px 下保留粘性“本关导航”标题。
- 首页路线选择、关卡卡片、路线提示在窄屏下收为单列和紧凑间距。
- 练习题标题、选项、反馈、句子拆解在 640px/430px 下堆叠和换行。
- 弹窗限制最大高度并允许内部滚动，避免手机端按钮被挤出屏幕。

验收结果：

- TDD 红灯：`npm test -- styles.responsive` 初次失败。
- 定向测试：`npm test -- styles.responsive` 通过，1 个测试文件、2 个测试通过。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过，25 个测试文件、80 个测试通过。

完成后应提交：

```bash
git add src/styles.css src/styles.responsive.test.ts docs/v2-update-backlog.md docs/project-handoff-current-progress.md
git commit -m "style: add mobile responsive baseline"
```

## 2026-05-14 更新：V2-007 单题翻页刷题体验

本次任务：

- 新增 `PracticeQuestionDeck`，封装单题翻页、答对自动前进、答错手动继续和正反馈条。
- Level 1-10 的过关练习区从多题列表改为 `PracticeQuestionDeck`。
- 保留补救练习的多题列表，避免扩大本次需求范围。
- Level 3-9 继续使用 `题 1` / `题 2` 这类中性标题，避免泄露练习考点。
- 更新 Level 2-10 页面测试，使其等待单题翻页后的当前题。

验收结果：

- TDD 红灯：`npm test -- PracticeQuestionDeck` 初次失败。
- 定向测试：`npm test -- PracticeQuestionDeck` 通过，1 个测试文件、2 个测试通过。
- 页面定向测试：`npm test -- LevelTwoPage LevelThreePage LevelFourPage LevelFivePage LevelSixPage LevelSevenPage LevelEightPage LevelNinePage LevelTenPage` 通过，9 个测试文件、18 个测试通过。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过，26 个测试文件、82 个测试通过。

完成后应提交：

```bash
git add src/components/PracticeQuestionDeck.tsx src/components/PracticeQuestionDeck.test.tsx src/styles.css src/pages/LevelOnePage.tsx src/pages/LevelTwoPage.tsx src/pages/LevelThreePage.tsx src/pages/LevelFourPage.tsx src/pages/LevelFivePage.tsx src/pages/LevelSixPage.tsx src/pages/LevelSevenPage.tsx src/pages/LevelEightPage.tsx src/pages/LevelNinePage.tsx src/pages/LevelTenPage.tsx src/pages/LevelTwoPage.test.tsx src/pages/LevelThreePage.test.tsx src/pages/LevelFourPage.test.tsx src/pages/LevelFivePage.test.tsx src/pages/LevelSixPage.test.tsx src/pages/LevelSevenPage.test.tsx src/pages/LevelEightPage.test.tsx src/pages/LevelNinePage.test.tsx src/pages/LevelTenPage.test.tsx docs/v2-update-backlog.md docs/project-handoff-current-progress.md
git commit -m "feat: add single-question practice flow"
```

## 2026-05-14 更新：V2-004 例题与通关题去重

本次任务：
- 新增 `levels.test.ts` 数据层检查，防止 Level 1-10 同关教学例句/常见坑句子直接复用为通关题。
- TDD 红灯先抓出 7 处重复：Level 2 q1/q2/q3/q8、Level 3 q1、Level 4 q1、Level 9 q10。
- 替换重复通关题句子，并同步选项、骨架、解析、标色分析片段和页面测试断言。

验收结果：
- `npm test -- levels LevelTwoPage LevelThreePage LevelFourPage LevelNinePage` 通过：5 个测试文件、32 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：26 个测试文件、83 个测试。

完成后应提交：
```bash
git add src/data/level2.ts src/data/level3.ts src/data/level4.ts src/data/level9.ts src/data/levels.test.ts src/pages/LevelTwoPage.test.tsx src/pages/LevelThreePage.test.tsx src/pages/LevelFourPage.test.tsx docs/v2-update-backlog.md docs/project-handoff-current-progress.md
git commit -m "test: prevent repeated teaching and practice prompts"
```

## 2026-05-14 更新：V2-008 术语解释精简

本次任务：
- 将 `TermRescueSidebar` 的术语卡从 4 段解释精简为 2 段：`一句人话` 和 `做题时怎么用`。
- Level 1-10 每关最多保留 3 个核心术语，避免学生通关后继续面对长串术语解释。
- 更新 `TermRescueSidebar.test.tsx` 和 `levels.test.ts`，锁住组件结构和每关术语数量。

验收结果：
- TDD 红灯：`npm test -- TermRescueSidebar levels` 初次失败，确认旧组件仍展示 4 段且各关术语超量。
- `npm test -- TermRescueSidebar levels` 通过：2 个测试文件、26 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：26 个测试文件、84 个测试。

完成后应提交：
```bash
git add src/components/TermRescueSidebar.tsx src/components/TermRescueSidebar.test.tsx src/data/level1.ts src/data/level2.ts src/data/level3.ts src/data/level4.ts src/data/level5.ts src/data/level6.ts src/data/level7.ts src/data/level8.ts src/data/level9.ts src/data/level10.ts src/data/levels.test.ts docs/v2-update-backlog.md docs/project-handoff-current-progress.md
git commit -m "content: trim term explanations"
```
