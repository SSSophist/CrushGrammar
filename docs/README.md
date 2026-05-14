# Docs Index

这个目录用于让后续接手的 AI 或开发者快速判断“现在项目到哪一步了、哪些反馈已经处理、下一步该做什么”。

## 必读顺序

1. `project-handoff-current-progress.md`
   - 当前代码状态、工作目录、运行方式、已知风险和下一步。
2. `user-feedback-log.md`
   - Netlify 上线后用户反馈原文与初步归类。
3. `v2-update-backlog.md`
   - 第二版修复任务池、优先级、验收标准和完成状态。

## 产品与课程参考

- `cet-grammar-product-requirements-and-design.md`
  - 初始产品定位、学习路径、内容设计原则。
- `ui-interaction-reference-nlp-final.md`
  - UI/交互风格参考。
- `level-01-sentence-skeleton-sample.md`
  - 第 1 关内容样例。
- `cet-source-materials-index.md`
  - 参考资料索引。

## 维护规则

- 用户反馈先记入 `user-feedback-log.md`，保留原话。
- 需要执行的工作再转入 `v2-update-backlog.md`。
- 每完成一个功能点，必须更新 backlog 状态和 handoff 文档，并单独 commit。
- 不要把未验收的功能标为已完成。
