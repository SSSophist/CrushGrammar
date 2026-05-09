# Crush Grammar 当前开发交接文档

更新时间：2026-05-09

## 项目定位

这是一个面向四六级考生的语法速通网站。核心目标不是系统研究语法，而是帮助“过去主要靠语感、语法基础薄弱”的同学在 3-5 天内掌握读懂句子和应付四六级题目的必要语法动作。

已确认的产品原则：

- 语法服务于读懂句子，不做学术化语法分析。
- 内容要“不求甚解但够用”，删除四六级不高频、不必要的深层规则。
- 用户闯关学习，每关有知识点梳理、例句拆解、常见坑、即时批改练习、本关总结。
- 过关练习必须选完实时批改，并显示人话解析。
- 对完全不懂语法术语的学生友好，术语解释必须极简。
- 中等和较难词汇不能阻碍语法学习，需支持鼠标悬停显示中文释义。

## 当前实现状态

当前可运行版本位于：

```text
c:\Users\23292\Desktop\Crush Grammar\.worktrees\first-playable-slice
```

本地预览通常可访问：

```text
http://127.0.0.1:5174/index.html
```

如果端口变化，使用：

```bash
npm run dev
```

## 已完成关卡

目前前 8 关已经做成可交互页面：

1. Level 1：先会看句子骨架
2. Level 2：词性和位置判断
3. Level 3：一个句子一个主发动机
4. Level 4：从句只分三大类就够了
5. Level 5：非谓语三件套
6. Level 6：并列、转折、因果和让步
7. Level 7：修饰语和长难句压缩术
8. Level 8：时态、语态、主谓一致够用规则

每关基本结构一致：

- 顶部必读弹窗：强制用户先读本关重点。
- 本关导航：标明是导航栏，避免用户误解顶部 tab。
- 本关定位：说明本关解决什么问题、不追求什么。
- 考场判断法：用简洁步骤教方法。
- 四六级场景：说明阅读、写作、翻译、选词填空中的用途。
- 例句拆解：带候选项和解释。
- 常见坑：讲容易误判的地方。
- 过关练习：15 题左右，即时批改，选完显示答案、骨架、人话解析、彩色句子成分拆解。
- 本关总结：原来曾写“考前最后 2 分钟”，用户要求改为“本关总结”。

## 用户已确认的关键设计标准

### 练习题

- 题目标题不能泄露考点，例如不要写“although + using 双干扰”。
- 选项里不能直接夹带答案解析，例如不要写 `review: Many students 是复数`。
- 题目句子不能直接暴露答案，尤其是第 8 关时态/语态/主谓一致题，句子里应使用 `___`。
- 解析中的原句标色只给英文原句上色，不再额外加中文标签，因为下面已经有详细拆解。

### 词汇悬停释义

用户最新确认标准：

- 前 8 关都要支持。
- 后续新关卡也必须支持。
- 中等和较难单词或短语 hover/focus 时显示中文意思。
- 词汇本身不要加下划线。
- 词汇本身不要加粗。
- 词汇本身不要变色。
- 也就是说：视觉上和普通单词完全一样，只在鼠标放上去或键盘聚焦时出现释义。

## 词汇释义功能实现

核心文件：

- `src/components/VocabText.tsx`
- `src/data/levelVocab.ts`
- `src/types.ts`
- `src/styles.css`

相关类型：

```ts
export interface VocabEntry {
  term: string;
  meaning: string;
  note?: string;
}
```

当前每关词表位于 `src/data/levelVocab.ts`：

- `level1Vocab`
- `level2Vocab`
- `level3Vocab`
- `level4Vocab`
- `level5Vocab`
- `level6Vocab`
- `level7Vocab`
- `level8Vocab`

后续新增关卡时应新增：

```ts
export const level9Vocab: VocabEntry[] = [
  { term: 'example phrase', meaning: '中文释义' }
];
```

然后在对应页面中传给：

- `LessonExampleCard`
- `LessonTrapCard`
- `PracticeQuestion`
- `RemediationPanel`

注意：`VocabText` 会优先匹配更长短语，避免 `digital resources` 被拆成 `resources`。

## 通用组件

重要组件：

- `src/components/PracticeQuestion.tsx`
  - 负责练习题渲染、即时批改、答案反馈、原句标色、成分拆解。
  - 支持 `vocabEntries` prop。

- `src/components/RemediationPanel.tsx`
  - 负责错因补救题。
  - 支持 `vocabEntries` prop。

- `src/components/LessonExampleCard.tsx`
  - 新增的通用例句卡。
  - 用于 2-8 关，避免重复 JSX。
  - 接收 `vocabEntries`。

- `src/components/LessonTrapCard.tsx`
  - 新增的通用常见坑卡。
  - 用于 2-8 关。
  - 接收 `vocabEntries`。

- `src/components/LevelIntroModal.tsx`
  - 本关必读弹窗。

- `src/components/LevelNav.tsx`
  - 本关导航栏。

## 重要数据文件

- `src/data/level1.ts`
- `src/data/level2.ts`
- `src/data/level3.ts`
- `src/data/level4.ts`
- `src/data/level5.ts`
- `src/data/level6.ts`
- `src/data/level7.ts`
- `src/data/level8.ts`
- `src/data/levelIntros.tsx`
- `src/data/levels.ts`
- `src/data/levelVocab.ts`

各关题目、例句、常见坑、补救题大多在对应 `levelX.ts` 中。

## 关键页面文件

- `src/pages/LevelOnePage.tsx`
- `src/pages/LevelTwoPage.tsx`
- `src/pages/LevelThreePage.tsx`
- `src/pages/LevelFourPage.tsx`
- `src/pages/LevelFivePage.tsx`
- `src/pages/LevelSixPage.tsx`
- `src/pages/LevelSevenPage.tsx`
- `src/pages/LevelEightPage.tsx`
- `src/pages/HomePage.tsx`

## 已知开发注意点

1. 不要乱改已确认的视觉标准。
   - 词汇提示词不能有下划线、加粗、变色。
   - 练习解析里的原句标色可以有颜色。

2. 不要把答案写进题干或选项。
   - 第 8 关之前已经因为这个问题修过。

3. 新关卡练习题标题不要提示考点。
   - 统一用 `题 1`、`题 2` 这种更安全。

4. 做新关卡时必须给中等/较难词补词表。
   - 这是用户明确要求的长期标准。

5. 如果测试里按按钮 accessible name 精确匹配，词汇 tooltip 可能会影响名称。
   - 更稳的方式是按题库里的 `correctOptionId` 找选项字母，或用 `textContent` 包含正确选项文本。

6. 当前 GitHub 推送用户已暂时不需要。
   - 之前用户说“之后就不推 github 了，有点浪费时间”。
   - 最新约定：后续版本管理以本地 Git commit 为主，不默认 push 到 GitHub。
   - 每完成一个稳定功能、一个关卡、一次用户确认的大改，做一次本地 commit。
   - 如果用户明确要求再推 GitHub，才处理远程同步。

## 版本管理约定

当前采用本地 Git 作为主要版本管理方式。GitHub 远程因为之前经常连接超时，暂时不作为日常流程依赖。

推荐工作流：

```bash
git status
git add .
git commit -m "简短说明本次稳定改动"
```

提交粒度：

- 完成一个新关卡后 commit。
- 完成一次用户确认的体验调整后 commit。
- 完成一次较大的内容修订后 commit。
- 修复明显 bug 并验证通过后 commit。

提交信息建议：

```text
feat: add level 9 special structures
feat: add vocab hover hints for levels 1-8
fix: remove answer hints from practice options
style: adjust vocab tooltip display
docs: update project handoff notes
test: cover level 9 practice flow
```

分支策略先保持简单：

- 日常开发可以继续在当前工作分支上做本地 commit。
- 只有当某个功能很大、很不确定、可能推翻时，再开临时分支。
- 不默认推 GitHub，不默认开 PR。

## 最近验证结果

最近一次完整验证通过：

```bash
npm test
```

结果：

```text
19 test files passed
64 tests passed
```

构建也通过：

```bash
npm run build
```

## 下一步建议

比较自然的后续路线：

1. 让用户完整体验前 8 关，收集内容难度和题目质量反馈。
2. 根据用户反馈继续打磨第 2-8 关题目，不要急着扩更多关。
3. 之后再设计 Level 9：比较、强调、倒装等高频特殊结构速通。
4. 新关卡沿用：
   - 本关必读弹窗
   - 本关导航
   - 例句拆解
   - 常见坑
   - 15 题即时批改
   - 词汇 hover 释义

## 常用命令

```bash
npm run dev
npm test
npm run build
```

## 2026-05-09 更新：Level 9 已制作

本次新增第 9 关：**高频特殊结构速通**。

已完成内容：
- `src/data/level9.ts`：新增第九关完整课程数据，包括三步判断法、术语卡、例句拆解、常见坑、15 题过关练习、错因补救题、本关总结。
- `src/pages/LevelNinePage.tsx`：新增第九关页面，沿用前八关的学习结构、即时批改、错因补救、本关总结和术语急救侧栏。
- `src/pages/LevelNinePage.test.tsx`：新增第九关测试，覆盖页面渲染、15 题中性题名、词汇 hover 标签、即时反馈和全对通关信息。
- `src/data/levelVocab.ts`：新增 `level9Vocab`，第九关中等和较难词汇支持 hover/focus 中文释义。视觉仍然保持普通文本，不加下划线、不加粗、不变色。
- `src/App.tsx`、`src/data/levelIntros.tsx`、`src/data/levels.ts`：接入第九关路由、必读弹窗和首页开放状态。

第九关设计重点：
- 不做学术语法扩展，只训练四类高频包装：比较、强调、倒装、形式 it。
- 核心动作是“先认信号，再还原成人话，最后回到句子主线”。
- 练习题标题统一显示 `题 1` 到 `题 15`，不泄露考点。
- 选项不夹带解析提示，避免把答案写进选项。

本次已验证：
```bash
npm test -- LevelNinePage
npm test -- App LevelMap LevelNav levels
npm test
npm run build
```

验证结果：
- 20 个测试文件通过。
- 67 个测试通过。
- 生产构建通过。

本次待后续继续：
- 本地 commit：建议提交信息 `feat: add level 9 special structures`。

## 2026-05-10 更新：前九关必读弹窗统一优化

本次更新目标：让每一关开头弹窗都不是“糊上来挡一下”，而是明确告诉用户这一关该怎么学。

已完成内容：
- `src/data/levelIntros.tsx`：重写前 9 关必读弹窗文案。
- 每一关弹窗都加入 `本关怎么用`，用一两句话说明本关学习动作。
- Level 1 保留并强化“右侧术语急救卡”的使用教学：
  - 术语卡不用背。
  - 卡住时只看一眼，把术语翻成人话。
  - 示例：主语 = 这句话说谁；谓语 = 它做什么/怎么样。
- Level 2-9 不重复术语卡教学，避免反复打扰用户。
- `src/components/LevelIntroModal.test.tsx`：新增测试，保证前 9 关都有 `本关怎么用`，并保证术语卡教学只出现在 Level 1。

本次已验证：
```bash
npm test -- LevelIntroModal App
npm test
npm run build
```

验证结果：
- 21 个测试文件通过。
- 70 个测试通过。
- 生产构建通过。
