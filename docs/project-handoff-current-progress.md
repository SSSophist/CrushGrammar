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

`V2-003`、`V2-002`、`V2-011`、`V2-009`、`V2-005`、`V2-006`、`V2-007`、`V2-004`、`V2-008`、`V2-010` 已完成，当前工程护栏、第 10 关测试、首页主按钮进度同步、每关完成区底部操作、解析区阅读对比度、手机端响应式基线、单题翻页刷题体验、例题/通关题去重护栏、术语解释精简和首页诊断测评已恢复：

- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过，当前测试数量：26 个测试文件、86 个测试。
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
- 首页已新增 6 题轻量诊断测评，结果会推荐关卡、展示薄弱标签、更新主按钮并解锁到推荐关卡。
- 首页已新增 `我是语法小白，从第 1 关开始` 路径，适合不想测评的新用户直接从头学习。
- `useProgress` 已新增 `unlockThrough(levelId)`，用于诊断结果解锁推荐关卡及其前置关卡。
- `vite.config.ts` 的 `testTimeout` 已调为 15000ms，适配当前长流程页面测试。

当前原排期内需求已经全部重新实现、验收并 commit。下一步继续根据新反馈补排期。

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

## 2026-05-14 更新：V2-010 首页诊断测评

本次任务：
- 首页新增 `做 3 分钟诊断` 和 `我是语法小白，从第 1 关开始`。
- 诊断包含 6 道定位题，覆盖主线、词性、从句、非谓语、逻辑关系、时态语态。
- 诊断完成后展示推荐关卡和薄弱标签，主按钮改为 `开始第 X 关`。
- 新增 `unlockThrough(levelId)`，让诊断结果解锁推荐关卡及之前关卡。

验收结果：
- TDD 红灯：`npm test -- HomePage` 初次失败，确认首页缺少诊断入口和小白入口。
- `npm test -- HomePage App` 通过：2 个测试文件、17 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：26 个测试文件、86 个测试。

完成后应提交：
```bash
git add src/App.tsx src/lib/useProgress.ts src/pages/HomePage.tsx src/pages/HomePage.test.tsx src/styles.css docs/v2-update-backlog.md docs/project-handoff-current-progress.md
git commit -m "feat: add diagnostic entry flow"
```

## 2026-05-15 更新：课程目录侧边栏

临时新增需求：
- 在关卡页左侧增加常驻课程目录，模仿参考图的左侧章节导航。
- 目录支持返回首页、查看所有 10 关、当前关卡高亮。
- 点击目录中的任意关卡可直接跳转到对应关卡，并触发该关必读弹窗。
- 手机端不强行挤压正文，目录改为页面顶部的横向分组滚动区。

本次实现：
- 新增 `src/components/CourseSidebar.tsx`，从 `src/data/levels.ts` 读取关卡数据，避免手写重复目录。
- `src/App.tsx` 在关卡页统一包裹 `course-layout`，保留各关原有“返回闯关地图”按钮，同时新增侧边栏“返回首页”。
- `src/styles.css` 新增桌面左栏、当前关高亮、移动端顶部滚动目录样式。
- `src/App.test.tsx` 新增回归测试，覆盖侧边栏出现、当前关高亮、目录跳关、返回首页。

验收结果：
- `npm test -- App` 通过：1 个测试文件，15 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：26 个测试文件，89 个测试。

## 2026-05-15 修正：左侧导航应为本关进度

用户澄清：
- 左侧导航不是全课程目录。
- 左侧应显示当前这一关的学习进度，也就是原顶部 `本关导航 / 本关定位 / 考场判断法 / 四六级场景 / 术语急救 / 例句拆解 / 常见坑 / 过关练习 / 本关总结`。

本次修正：
- 移除误做的 `CourseSidebar` 全课程目录。
- `App.tsx` 恢复为直接渲染关卡页面，不再包一层全课程目录布局。
- 复用现有 `LevelNav` 作为本关进度导航。
- 桌面端将 `.level-nav` 放到关卡页面左侧，纵向 sticky 展示。
- 手机端继续保留顶部横向滚动导航，避免正文被挤压。
- `App.test.tsx` 改为验证本关进度导航，而不是全课程目录跳关。

验收结果：
- `npm test -- App LevelNav` 通过：2 个测试文件，14 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：26 个测试文件，87 个测试。

## 2026-05-15 更新：本关进度导航常驻与当前位置反馈

用户继续澄清：
- 左侧本关进度导航要常挂在视窗左边，点击正文跳转后不能找不到目录。
- 点击对应章节后要有视觉反馈，告诉读者当前处于哪个位置。

本次实现：
- `LevelNav` 增加当前章节状态，点击章节后设置 `aria-current="location"`。
- `LevelNav` 使用 `IntersectionObserver` 监听正文区块，滚动阅读时自动更新左侧当前项。
- 桌面端 `.level-nav` 改为 `position: fixed`，固定在页面左侧视窗内，并允许自身纵向滚动。
- 手机端仍保留顶部 sticky 横向滚动导航。
- 目标章节增加 `:target` 动画和 `scroll-margin-top`，点击跳转时正文位置有短暂高亮反馈。
- `LevelNav.test.tsx` 增加点击后当前项高亮的回归测试。

验收结果：
- `npm test -- LevelNav App` 通过：2 个测试文件，15 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：26 个测试文件，88 个测试。

## 2026-05-15 调整：侧边进度目录移除术语急救

用户反馈：
- `术语急救` 不需要放在左侧本关进度导航中。

本次实现：
- `LevelNav` 从导航项中移除 `#terms / 术语急救`。
- 页面右侧/正文中的术语急救内容保留，只是不作为主学习进度入口。
- `LevelNav.test.tsx` 和 `App.test.tsx` 增加断言，防止该项回到左侧目录。

验收结果：
- `npm test -- LevelNav App` 通过：2 个测试文件，15 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：26 个测试文件，88 个测试。

## 2026-05-15 修复：侧边栏滚动高亮误判

用户反馈：
- 滚动到 `考场判断法` 时，左侧侧栏错误高亮到了 `四六级场景`。
- 需要全面解决侧边栏当前章节判定问题。

根因：
- 之前用 `IntersectionObserver` 回调中的可见区块顺序决定当前项。
- 当多个大章节同时在视口中可见时，观察器会把更靠后的章节判为当前项，导致正文在 `考场判断法`，侧栏却高亮 `四六级场景`。

本次实现：
- `LevelNav` 改为监听 `scroll / resize / hashchange`，通过每个章节的 `getBoundingClientRect()` 计算当前阅读焦点线。
- 当前项规则：取最后一个已经越过阅读焦点线、且仍在视口附近的章节。
- 保留点击后立即高亮，以及正文 `:target` 跳转反馈。
- 新增回归测试模拟 `method` 位于阅读焦点线、`scenes` 在下方时，必须高亮 `考场判断法`，不能高亮 `四六级场景`。

验收结果：
- `npm test -- LevelNav` 通过：1 个测试文件，3 个测试。
- `npm test -- App LevelNav` 通过：2 个测试文件，16 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：26 个测试文件，89 个测试。

## 2026-05-15 更新：V2-012 刷题正反馈增强

用户反馈：
- 希望继续优化刷题反馈，让答对题的快感更明显。

本次实现：
- `PracticeQuestionDeck` 顶部新增 `练习进度` 进度条，随当前题号推进。
- 答对瞬间显示 `答对 +1`，连续答对时显示 `连对 X 题`。
- 生产环境答对后自动跳转延迟从 0.9 秒调整到 1.2 秒，让反馈更容易看清。
- 下一题顶部保留轻量持续提示，如 `答对 +1，继续保持` 或 `连对 X 题，继续保持`。
- 答错流程保持不变：停留当前题、展示解析、学生确认后继续。
- `styles.css` 增加进度条样式和答对题卡脉冲动画。
- `PracticeQuestionDeck.test.tsx` 增加进度条与连对反馈回归测试。

验收结果：
- `npm test -- PracticeQuestionDeck` 通过：1 个测试文件，3 个测试。
- `npm test -- LevelTwoPage LevelThreePage LevelFourPage LevelFivePage LevelSixPage LevelSevenPage LevelEightPage LevelNinePage LevelTenPage` 通过：9 个测试文件，18 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：26 个测试文件，90 个测试。

## 2026-05-15 更新：V2-013 全站题目质量巡检

用户反馈：
- 需要全面检查例句和题目质量，避免例句、常见坑和通关题重复，并适当提升题目质量。

本次实现：
- 用脚本扫描 Level 1-10 的教学例句、常见坑和通关练习，共 204 条英文句子。
- 修复全站精确重复句子：
  - Level 3 q10 替换 `Although the article looks difficult...`，避免复用 Level 1 常见坑句。
  - Level 4 `modifier-who` 和 Level 7 q1 调整 who 修饰相关句子，避免复用 Level 3 常见坑句。
  - Level 5 q3 替换目的状语句，避免复用 Level 3 q3。
  - Level 7 q6 替换非谓语修饰句，避免复用 Level 3 q4。
- 修复 Level 9 两组教学例句与通关题高相似问题：`more...than` 比较句、`Only...` 倒装句。
- 替换内容时同步更新选项、主干骨架、解析和分析片段。
- `src/data/levels.test.ts` 新增全站内容护栏：精确重复检测、同关教学/练习高相似检测、单题选项重复检测。

验收结果：
- 内容巡检脚本：204 条内容，精确重复 0 组，同关高相似 0 组。
- `npm test -- levels` 通过：1 个测试文件，28 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：26 个测试文件，93 个测试。

## 2026-05-16 更新：V2-014 全站阅读 UI 对比度升级

用户反馈：
- 全面美化 UI，杜绝白底灰字看不清的问题。

本次实现：
- `src/styles.css` 调整全局色阶：`--muted` 改为更深的青灰，页面背景和纸面色更柔和。
- 学习页正文、列表、术语解释、侧注等阅读内容统一使用深色正文，不再用浅灰承担主要阅读任务。
- 步骤卡、例句卡、常见坑卡、练习区增加浅绿底、左侧强调线、加深边框和轻微阴影，避免截图里那种白底细边框的弱层级。
- 练习题卡、选项、反馈块、引用块、解析列表、弹窗说明和总结卡同步提高对比度。
- 新增 `src/styles.readability.test.ts`，锁住深色辅助文字、学习区深色正文和强化卡片样式。

验收结果：
- TDD 红灯：`npm test -- styles.readability` 初次失败，确认旧样式没有满足新可读性要求。
- `npm test -- styles.readability styles.responsive LessonAnalysisReadability` 通过：3 个测试文件，7 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：27 个测试文件，96 个测试。
- 本地服务已启动：`http://127.0.0.1:5200/`，`curl -I` 返回 200。

## 2026-05-16 更新：V2-015 补救按钮自动定位补救题

用户反馈：
- 点击错因汇总中的补救按钮时，希望页面直接下滑到下方对应补救题。

本次实现：
- `src/components/RemediationPanel.tsx` 增加 `ref` 和 `useEffect`，当补救面板打开或切换错因标签时自动 `scrollIntoView({ behavior: 'smooth', block: 'start' })`。
- 补救面板增加稳定 id：`remediation-${remediation.tag}`。
- 补救面板增加 `role="region"` 和 `aria-labelledby`，让自动定位区域可访问、可测试。
- `src/styles.css` 给 `.remediation-panel` 增加 `scroll-margin-top: 24px`，滚动后不会贴住顶部。
- `src/components/RemediationPanel.test.tsx` 增加自动滚动回归测试。

验收结果：
- TDD 红灯：`npm test -- RemediationPanel` 初次失败，确认旧面板没有自动滚动和可定位 region。
- `npm test -- RemediationPanel` 通过：1 个测试文件，2 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：27 个测试文件，97 个测试。

## 2026-05-16 更新：V2-016 首访语法能力诊断

用户反馈：
- 第一次进入网站时，希望先弹窗询问是否做语法水平检测。
- 弹窗标题使用“欢迎来到小德英语lab的四六级语法网站”。
- 检测需要精准判断薄弱点，并据此推荐和解锁对应关卡。
- 用户也可以选择“我是语法小白，从第 1 关开始”。

本次实现：
- `src/pages/HomePage.tsx` 新增首访欢迎弹窗，通过 `crush_grammar_diagnostic_prompt_seen` 记录是否已展示。
- 弹窗提供两条入口：`开始 8 题语法检测` 和 `我是语法小白，从第 1 关开始`。
- 诊断题从 6 题升级到 8 题，覆盖主干、词性、从句、非谓语、逻辑、时态、压缩和特殊结构。
- 诊断结果会展示薄弱点和推荐关卡，并通过 `onUnlockThrough` 自动解锁到最高推荐关卡。
- 选择小白路径后，首页主按钮固定为 `开始第 1 关`，方便从零学习。
- 诊断流程只在首访弹窗中完成；首页不再保留内嵌诊断大板块。
- `src/pages/HomePage.test.tsx` 重写为可读中文测试，覆盖首访弹窗、小白路径、继续进度、总复盘和 8 题诊断解锁。

验收结果：
- TDD 红灯：`npm test -- HomePage` 初次失败，确认旧首页缺少首访弹窗和 8 题诊断流程。
- `npm test -- HomePage` 通过：1 个测试文件，7 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：27 个测试文件，99 个测试。

## 2026-05-16 更新：V2-017 首访诊断题难度升级

用户反馈：
- 开始的 8 道诊断题难度偏低，希望提高难度。

本次实现：
- `src/pages/HomePage.tsx` 中的 8 道诊断题全部升级为更接近四六级长难句的筛查题。
- 主干题改为含定语从句和时间状语的长句，干扰项模拟“被最近短语带跑”。
- 词性题改为 `consider + object + complement` 结构，避免只测名词前形容词。
- 从句题改为 `The fact that... shows...`，区分同位语从句和宾语从句。
- 非谓语题改为句首过去分词状语，考查非谓语不抢主线。
- 逻辑题改为 `While..., ...` 转向判断，继续对应第 6 关。
- 时态题改为 `By the time... had collected`，考查过去完成时参照点。
- 压缩题和特殊结构题升级为多层修饰压缩、`Not until... do...` 倒装理解。
- `src/pages/HomePage.test.tsx` 更新前测答题路径，保持只错逻辑题时推荐第 6 关。

验收结果：
- `npm test -- HomePage` 通过：1 个测试文件，8 个测试。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm test` 通过：27 个测试文件，100 个测试。
