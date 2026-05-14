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

下一步从 `V2-001` 开始：

1. 运行并修复当前测试套件。
2. 记录测试数量。
3. 更新 backlog 状态。
4. commit。

之后按顺序处理：

1. `V2-003` 类型检查护栏
2. `V2-002` Level 10 测试
3. `V2-011` 首页主按钮进度同步
4. `V2-009` 通关完成区底部返回/继续
5. `V2-005` 阅读对比度
6. `V2-006` 手机端响应式
7. `V2-007` 单题翻页刷题体验
8. `V2-004` 题目重复排查
9. `V2-008` 术语解释精简
10. `V2-010` 首页诊断测评

## 常用命令

```bash
npm run dev
npm test
npm run build
```

当前 `package.json` 暂未提供 `typecheck` 脚本；`V2-003` 会补齐。

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

## 2026-05-14 更新：V2 文档恢复中

本次任务：

- 恢复 docs 索引。
- 恢复用户反馈文档。
- 恢复第二版任务 backlog。
- 重写当前交接文档，明确每项重新实现后必须 commit。

完成后应提交：

```bash
git add docs
git commit -m "docs: restore v2 backlog and handoff"
```
