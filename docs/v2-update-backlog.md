# V2 Update Backlog

这个文档记录第二版需要修复、补强和重新验收的内容。

重要背景：2026-05-14 用户确认之前一批 V2 修改没有 commit，当前仓库代码回到了较早状态。因此本文件采用“重新执行”的状态。只有重新实现、验收并 commit 的任务，才能标为已完成。

## 执行纪律

- 每个任务单独实现、单独验收、单独 commit。
- commit 前必须更新本文件和 `project-handoff-current-progress.md`。
- commit message 必须能看出完成了哪个任务。
- 不默认 push GitHub，除非用户明确要求。

## 当前优先级

### 第 0 组：先恢复工程护栏和记录

1. `V2-001` 恢复并确认测试套件可用
2. `V2-003` 确认 build 包含类型检查，并补 `typecheck` 脚本
3. `V2-002` 补第十关自动化测试

### 第 1 组：修线上路径和明显体验问题

4. `V2-011` 修复首页主按钮“开始第几关”不更新
5. `V2-009` 每关完成区底部增加返回/继续操作
6. `V2-005` 提升解析区文字可读性和视觉对比度

### 第 2 组：移动端和练习体验

7. `V2-006` 建立手机端响应式 UI 方案
8. `V2-007` 将每关练习改为单题翻页式刷题体验

### 第 3 组：内容质量

9. `V2-004` 排查并替换例题与通关题重复内容
10. `V2-008` 精简每关末尾概念名词解释

### 第 4 组：入口升级

11. `V2-010` 增加首页诊断测评与个性化关卡推荐

## 任务详情

### V2-001 恢复并确认测试套件可用

- 来源：2026-05-14 重启修复流程
- 优先级：P0
- 状态：已完成（2026-05-14）
- 问题：
  - 需要确认当前仓库测试是否能稳定运行。
  - 如果测试不通过，必须先修复测试和代码基线。
- 验收标准：
  - `npm test` 通过。已验收：21 个测试文件、71 个测试全部通过。
  - 当前测试数量记录到交接文档。
  - 完成后 commit。

### V2-003 确认 build 类型检查护栏

- 来源：2026-05-14 重启修复流程
- 优先级：P0
- 状态：已完成（2026-05-14）
- 当前观察：
  - `package.json` 的 `build` 已是 `tsc && vite build`。
  - 但当前缺少单独的 `typecheck` 脚本。
- 验收标准：
  - `package.json` 有 `typecheck`: `tsc --noEmit`。已完成。
  - `npm run typecheck` 通过。已验收。
  - `npm run build` 通过。已验收。
  - 完成后 commit。

### V2-002 补 Level 10 自动化测试

- 来源：当前代码有 Level 10 页面但未看到 `LevelTenPage.test.tsx`
- 优先级：P1
- 状态：已完成（2026-05-14）
- 验收标准：
  - 新增 `src/pages/LevelTenPage.test.tsx`。已完成。
  - 覆盖第十关页面标题、SOP 内容、练习题、首题反馈和全对通关。已完成。
  - `npm test -- LevelTenPage` 通过。已验收。
  - 完成后 commit。

### V2-011 修复首页主按钮“开始第几关”不更新

- 来源：FB-008
- 优先级：P1
- 状态：已完成（2026-05-14）
- 验收标准：
  - 新用户显示 `开始第 1 关`。已验收。
  - 已解锁到第 X 关时显示 `继续第 X 关`，点击进入第 X 关。已验收。
  - 全部解锁时显示 `查看总复盘` 或等价文案，点击进入第 10 关。已验收。
  - 路线切换不会把主按钮重置回第 1 关。已验收。
  - 有自动化测试。已新增 `HomePage.test.tsx`。
  - 完成后 commit。

### V2-009 每关完成区底部增加返回/继续操作

- 来源：FB-006
- 优先级：P1
- 状态：已完成（2026-05-14）
- 验收标准：
  - Level 1-9 通关完成区底部有 `返回闯关地图` 和 `继续第 X 关`。已完成。
  - Level 10 通关完成区底部只有返回地图，不显示继续下一关。已完成。
  - 手机端按钮不拥挤。已完成：按钮支持换行，并在窄屏下满宽堆叠。
  - 有自动化测试。已补充 Level 2 和 Level 10 关键路径测试。
  - 完成后 commit。

### V2-005 提升解析区文字可读性和视觉对比度

- 来源：FB-002
- 优先级：P1
- 状态：已完成（2026-05-14）
- 验收标准：
  - 例句卡、常见坑卡、反馈区正文不再是低对比白底灰字。已完成。
  - 长段解析在手机端有足够行高和分块。已完成。
  - 重点标签更清楚。已完成。
  - `npm test` 和 `npm run build` 通过。已验收。
  - 完成后 commit。

### V2-006 建立手机端响应式 UI 方案

- 来源：FB-003
- 优先级：P1
- 状态：已完成（2026-05-14）
- 验收标准：
  - 375px、390px、430px、768px、桌面宽度下无明显横向溢出。已完成：新增全局溢出保护、640px/430px 小屏断点和响应式测试护栏。
  - 首页、关卡导航、练习区、术语卡、弹窗在手机端可用。已完成：路线选择、关卡导航、练习题、术语卡、弹窗均有窄屏规则。
  - `npm test` 和 `npm run build` 通过。已验收。
  - 完成后 commit。

### V2-007 将每关练习改为单题翻页式刷题体验

- 来源：FB-004
- 优先级：P1
- 状态：已完成（2026-05-14）
- 验收标准：
  - 每关练习一次只显示一道题。已完成。
  - 答对后短暂正确反馈并自动进入下一题。已完成：生产环境默认 0.9 秒后自动进入下一题。
  - 下一题顶部保留约 2.6 秒正反馈条，例如 `答对 +1` / 连对提示。已完成。
  - 答错不自动跳题，完整展示解析，由学生确认后继续。已完成。
  - 有自动化测试覆盖答对和答错路径。已新增 `PracticeQuestionDeck.test.tsx`。
  - 完成后 commit。

### V2-004 排查并替换例题与通关题重复内容

- 来源：FB-001
- 优先级：P1
- 状态：已完成（2026-05-14）
- 验收标准：
  - Level 1-10 教学例句/常见坑句子不直接复用为通关题。已完成。
  - 新增数据层测试，防止后续再次重复。已完成：`levels.test.ts` 覆盖 1-10 关例句、常见坑和通关题句子。
  - 替换重复句子时同步更新选项、骨架、解析和标色片段。已完成：Level 2、3、4、9 的重复题已替换并同步。
  - 完成后 commit。

### V2-008 精简每关末尾概念名词解释

- 来源：FB-005
- 优先级：P2
- 状态：已完成（2026-05-14）
- 验收标准：
  - 每关末尾不出现长串术语解释。已完成：术语卡从 4 段精简为 2 段。
  - 保留最关键、最影响做题的术语。已完成：Level 1-10 每关最多保留 3 个术语。
  - 学生完成一关后第一眼看到的是通关反馈和核心动作总结。已完成：术语区更短，不再形成长串解释墙。
  - 完成后 commit。

### V2-010 增加首页诊断测评与个性化关卡推荐

- 来源：FB-007
- 优先级：P2
- 状态：已完成（2026-05-14）
- 验收标准：
  - 首页提供简单诊断测评入口。已完成：新增 `做 3 分钟诊断`。
  - 用户也可选择 `我是语法小白，想从 0 开始`。已完成。
  - 测评结果能推荐薄弱关卡，并影响主按钮/解锁状态。已完成：诊断结果更新主按钮并解锁至推荐关卡。
  - 先设计，再实现，完成后 commit。

## 完成记录

### 2026-05-14：恢复 V2 文档和执行纪律

- 状态：已完成
- 内容：
  - 恢复 `docs/README.md`。
  - 恢复 `docs/user-feedback-log.md`。
  - 恢复 `docs/v2-update-backlog.md`。
  - 更新 `docs/project-handoff-current-progress.md`。
- 验收：
  - 文档存在且能说明当前状态、反馈、排期和 commit 纪律。
  - 完成后单独 commit。

### 2026-05-14：完成 V2-001 测试基线恢复

- 状态：已完成
- 内容：
  - 修复 App 测试的关卡解锁前置条件，测试中显式写入 1-10 关已解锁状态。
  - 补齐 Level 2-9 页面测试的 `onLevelComplete` 回调，匹配当前页面组件接口。
  - 将第 10 关关卡元数据标题对齐页面 H1：`总复盘：考场秒杀流程`。
- 验收：
  - 定向测试：`npm test -- App LevelTwoPage LevelThreePage LevelFourPage LevelFivePage LevelSixPage LevelSevenPage LevelEightPage LevelNinePage`，28 个测试通过。
  - 全量测试：`npm test`，21 个测试文件、71 个测试通过。
  - 本记录完成后单独 commit。

### 2026-05-14：完成 V2-003 类型检查护栏

- 状态：已完成
- 内容：
  - 新增 `typecheck` 脚本：`tsc --noEmit`。
  - 修复 `LevelMap` 测试数据的类型声明，使其匹配当前扁平化关卡地图输入。
  - 修复 `HomePage` 动态关卡列表的类型推断，避免 `status` 被放宽成普通字符串。
- 验收：
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过，21 个测试文件、71 个测试通过。
  - 本记录完成后单独 commit。

### 2026-05-14：完成 V2-002 Level 10 自动化测试

- 状态：已完成
- 内容：
  - 新增 `src/pages/LevelTenPage.test.tsx`。
  - 覆盖第 10 关 H1、SOP 信息、综合实战入口、首题答对反馈、进度变化和全对通关回调。
- 验收：
  - `npm test -- LevelTenPage` 通过，1 个测试文件、2 个测试通过。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过，22 个测试文件、73 个测试通过。
  - 本记录完成后单独 commit。

### 2026-05-14：完成 V2-011 首页主按钮进度同步

- 状态：已完成
- 内容：
  - 首页主按钮根据 `unlockedLevels` 计算最高已解锁关卡。
  - 新用户显示 `开始第 1 关`。
  - 已解锁到第 X 关时显示 `继续第 X 关`，点击进入第 X 关。
  - 全部解锁时显示 `查看总复盘`，点击进入第 10 关。
  - 新增 `src/pages/HomePage.test.tsx` 覆盖以上路径及路线切换不重置按钮。
  - 将 Vitest `testTimeout` 调整为 15000ms，避免当前长流程页面测试在全量并发运行时假超时。
- 验收：
  - `npm test -- HomePage` 通过，1 个测试文件、3 个测试通过。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过，23 个测试文件、76 个测试通过。
  - 本记录完成后单独 commit。

### 2026-05-14：完成 V2-009 每关完成区底部操作

- 状态：已完成
- 内容：
  - 新增 `LevelCompletionActions` 复用组件，统一每关完成区底部按钮。
  - Level 1-9 完成区底部显示 `返回闯关地图` 和下一关入口。
  - Level 10 完成区底部只显示 `返回闯关地图`，不出现不存在的下一关。
  - 首页路由为 Level 1-9 传入下一关跳转回调。
  - 按钮布局支持换行，手机端会满宽堆叠，避免拥挤。
  - 补充 Level 2 和 Level 10 自动化测试，分别覆盖“返回 + 继续”和“最终关只返回”。
- 验收：
  - 定向测试：`npm test -- LevelTwoPage LevelTenPage` 通过，2 个测试文件、4 个测试通过。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过，23 个测试文件、76 个测试通过。
  - 本记录完成后单独 commit。

### 2026-05-14：完成 V2-005 解析区阅读对比度

- 状态：已完成
- 内容：
  - 为例句拆解和常见坑拆解正文增加 `analysis-copy`、`analysis-list` 样式钩子。
  - 解析正文从普通灰色正文提升为深色高对比文本。
  - 例句引用块、即时反馈区、句子拆解区背景和边框更清晰。
  - 重点标签改为高对比标签样式，避免混在长段灰字里。
  - 手机端提高解析正文和反馈区行高，长段内容更容易扫读。
  - 新增 `LessonAnalysisReadability.test.tsx` 防止解析区样式钩子丢失。
- 验收：
  - TDD 红灯：`npm test -- LessonAnalysisReadability` 初次失败，确认缺少可读性样式钩子。
  - 定向测试：`npm test -- LessonAnalysisReadability` 通过，1 个测试文件、2 个测试通过。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过，24 个测试文件、78 个测试通过。
  - 本记录完成后单独 commit。

### 2026-05-14：完成 V2-006 手机端响应式基线

- 状态：已完成
- 内容：
  - 新增全局 `overflow-x: hidden`、`min-width: 0`、`max-width: 100%` 等横向溢出保护。
  - 关卡导航增加横向滑动、滚动吸附和移动端粘性标题。
  - 首页路线选择在窄屏下改为单列，关卡卡片和路线提示压缩间距。
  - 练习题标题、选项、反馈、句子拆解在 640px/430px 下堆叠和换行。
  - 弹窗限制最大高度并允许内部滚动，避免手机端按钮被挤出屏幕。
  - 新增 `styles.responsive.test.ts` 锁住响应式断点和溢出保护。
- 验收：
  - TDD 红灯：`npm test -- styles.responsive` 初次失败，确认缺少 640px 断点和横向溢出保护。
  - 定向测试：`npm test -- styles.responsive` 通过，1 个测试文件、2 个测试通过。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过，25 个测试文件、80 个测试通过。
  - 本记录完成后单独 commit。

### 2026-05-14：完成 V2-007 单题翻页刷题体验

- 状态：已完成
- 内容：
  - 新增 `PracticeQuestionDeck`，统一管理过关练习的单题翻页状态。
  - Level 1-10 的过关练习区改为一次只显示当前题。
  - 答对后先显示当前题正确反馈，随后自动进入下一题。
  - 下一题顶部显示 `答对 +1` 正反馈条，并保留约 2.6 秒。
  - 答错后停在当前题，完整展示解析和错因标签，学生点击 `看懂了，继续下一题` 后才前进。
  - 保留 Level 3-9 的中性题号标题，避免题目标题泄露考点。
  - 更新 Level 2-10 页面测试以适配单题翻页流程。
- 验收：
  - TDD 红灯：`npm test -- PracticeQuestionDeck` 初次失败，确认缺少新组件。
  - 定向测试：`npm test -- PracticeQuestionDeck` 通过，1 个测试文件、2 个测试通过。
  - 页面定向测试：`npm test -- LevelTwoPage LevelThreePage LevelFourPage LevelFivePage LevelSixPage LevelSevenPage LevelEightPage LevelNinePage LevelTenPage` 通过，9 个测试文件、18 个测试通过。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过，26 个测试文件、82 个测试通过。
  - 本记录完成后单独 commit。

### 2026-05-14：完成 V2-004 例题与通关题去重

- 状态：已完成
- 内容：
  - 新增数据层回归测试，检查 Level 1-10 的教学例句、常见坑句子是否直接复用为同关通关题。
  - TDD 红灯确认旧内容中存在 7 处重复：Level 2 q1/q2/q3/q8、Level 3 q1、Level 4 q1、Level 9 q10。
  - 替换上述通关题句子，并同步选项、主线骨架、解析说明和标色分析片段。
  - 更新 Level 2/3/4/9 页面测试中对应的首题断言，确保页面反馈读到新通关题。
- 验收：
  - 定向测试：`npm test -- levels LevelTwoPage LevelThreePage LevelFourPage LevelNinePage` 通过，5 个测试文件、32 个测试通过。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过，26 个测试文件、83 个测试通过。
  - 本记录完成后单独 commit。

### 2026-05-14：完成 V2-008 术语解释精简

- 状态：已完成
- 内容：
  - 将 `TermRescueSidebar` 的术语卡从 4 段解释精简为 2 段：`一句人话` 和 `做题时怎么用`。
  - Level 1-10 每关术语数量压到最多 3 个，只保留本关最影响做题的核心概念。
  - 新增数据层测试，防止后续关卡末尾重新堆出过长术语列表。
  - 更新术语卡组件测试，锁住精简后的展示结构。
- 验收：
  - TDD 红灯：`npm test -- TermRescueSidebar levels` 初次失败，确认组件仍展示 4 段且每关术语超量。
  - 定向测试：`npm test -- TermRescueSidebar levels` 通过，2 个测试文件、26 个测试通过。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过，26 个测试文件、84 个测试通过。
  - 本记录完成后单独 commit。

### 2026-05-14：完成 V2-010 首页诊断测评

- 状态：已完成
- 内容：
  - 首页新增轻量诊断区，包含 `做 3 分钟诊断` 和 `我是语法小白，从第 1 关开始` 两条入口。
  - 诊断包含 6 道定位题，覆盖主线、词性、从句、非谓语、逻辑关系、时态语态。
  - 诊断完成后展示推荐关卡、薄弱标签，并将首页主按钮改为 `开始第 X 关`。
  - 新增 `unlockThrough(levelId)` 进度能力，诊断结果会解锁推荐关卡及之前关卡。
  - 小白路径会清空诊断状态，保持从第 1 关开始。
- 验收：
  - TDD 红灯：`npm test -- HomePage` 初次失败，确认首页缺少诊断入口和小白入口。
  - 定向测试：`npm test -- HomePage App` 通过，2 个测试文件、17 个测试通过。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过，26 个测试文件、86 个测试通过。
  - 本记录完成后单独 commit。

### 2026-05-15：完成 V2-012 刷题正反馈增强

- 状态：已完成
- 来源：FB-009
- 内容：
  - `PracticeQuestionDeck` 新增练习进度条，使用 `role="progressbar"` 暴露当前题号进度。
  - 答对后立即显示 `答对 +1`，生产环境自动跳转延迟从 0.9 秒调整到 1.2 秒。
  - 连续答对时显示 `连对 X 题`，跳到下一题后保留轻量持续提示。
  - 答错流程保持不自动跳题，仍由学生看完解析后手动继续。
  - `styles.css` 增加题卡答对脉冲动画和进度条样式。
  - `PracticeQuestionDeck.test.tsx` 增加进度条与连对反馈回归测试。
- 验收：
  - `npm test -- PracticeQuestionDeck` 通过：1 个测试文件，3 个测试。
  - `npm test -- LevelTwoPage LevelThreePage LevelFourPage LevelFivePage LevelSixPage LevelSevenPage LevelEightPage LevelNinePage LevelTenPage` 通过：9 个测试文件，18 个测试。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过：26 个测试文件，90 个测试。
  - 本记录完成后单独 commit。

### 2026-05-15：完成 V2-013 全站题目质量巡检

- 状态：已完成
- 来源：FB-010
- 内容：
  - 自动扫描 Level 1-10 的教学例句、常见坑句子和通关练习题，共 204 条英文句子。
  - 修复 4 组全站精确复用：Level 1/3 although 句、Level 3/4/7 who 修饰句、Level 3/5 目的状语句、Level 3/7 非谓语修饰句。
  - 修复 2 组 Level 9 教学例句与通关题高相似：more...than 比较句、Only...倒装句。
  - 替换句子时同步更新对应选项、骨架、解析和分析片段，避免新题配旧解析。
  - `levels.test.ts` 新增三条内容护栏：全站英文句子不可精确重复、同关教学句与通关题不可高相似、单题选项文本不可重复。
- 验收：
  - 内容巡检脚本结果：204 条内容，精确重复 0 组，同关高相似 0 组。
  - `npm test -- levels` 通过：1 个测试文件，28 个测试。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过：26 个测试文件，93 个测试。
  - 本记录完成后单独 commit。

### 2026-05-16：完成 V2-014 全站阅读 UI 对比度升级

- 状态：已完成
- 来源：FB-011
- 内容：
  - 将全局辅助文字 `--muted` 从浅灰调整为更深的青灰，避免低对比灰字。
  - 学习页正文、列表、术语解释等主要阅读内容统一使用 `var(--ink)`，提高正文可读性。
  - 步骤卡、例句卡、常见坑卡、练习区从白底细边框升级为浅绿阅读底、左侧强调线和更明确边框。
  - 强化例句引用块、解析列表、反馈块、练习选项、弹窗说明和总结卡的底色与文字对比。
  - 新增 `styles.readability.test.ts`，防止学习区重新退回浅灰正文和弱卡片层级。
- 验收：
  - TDD 红灯：`npm test -- styles.readability` 初次失败，确认旧样式存在浅灰正文和弱卡片问题。
  - `npm test -- styles.readability styles.responsive LessonAnalysisReadability` 通过：3 个测试文件，7 个测试。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过：27 个测试文件，96 个测试。
  - 本地服务：`http://127.0.0.1:5200/` 返回 200。
  - 本记录完成后单独 commit。

### 2026-05-16：完成 V2-015 补救按钮自动定位补救题

- 状态：已完成
- 来源：FB-012
- 内容：
  - `RemediationPanel` 增加稳定锚点 `remediation-${tag}`，并以标题作为可访问名称。
  - 当用户点击错因汇总中的补救按钮、激活对应补救面板时，面板自动 `scrollIntoView` 到下方补救题区域。
  - 增加 `scroll-margin-top`，避免滚动后补救面板贴住视口顶部。
  - `RemediationPanel.test.tsx` 增加回归测试，锁住打开补救面板时自动滚动。
- 验收：
  - TDD 红灯：`npm test -- RemediationPanel` 初次失败，确认旧面板没有可定位 region 和自动滚动。
  - `npm test -- RemediationPanel` 通过：1 个测试文件，2 个测试。
  - `npm run typecheck` 通过。
  - `npm run build` 通过。
  - `npm test` 通过：27 个测试文件，97 个测试。
  - 本记录完成后单独 commit。
