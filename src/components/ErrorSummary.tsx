import { getErrorSummary } from '../lib/practice';
import type { AnswerRecord, ErrorTag, ErrorTagInfo } from '../types';

interface ErrorSummaryProps {
  records: AnswerRecord[];
  errorInfo: Partial<Record<ErrorTag, ErrorTagInfo>>;
  completedTags: ErrorTag[];
  onRemediate: (tag: ErrorTag) => void;
  clearBody?: string;
}

export default function ErrorSummary({
  records,
  errorInfo,
  completedTags,
  onRemediate,
  clearBody = '你可以直接通关。先抓骨架这一步已经很稳。'
}: ErrorSummaryProps) {
  const summary = getErrorSummary(records);

  if (records.length === 0) {
    return null;
  }

  if (summary.length === 0) {
    return (
      <section className="error-summary is-clear">
        <p className="eyebrow">Clear</p>
        <h3>本关练习全对</h3>
        <p>{clearBody}</p>
      </section>
    );
  }

  return (
    <section className="error-summary">
      <p className="eyebrow">Error Summary</p>
      <h3>错因汇总</h3>
      <div className="summary-list">
        {summary.map((item) => {
          const info = errorInfo[item.tag] ?? { title: item.tag, plain: '这个错因还没有配置解释。', action: '' };
          const done = completedTags.includes(item.tag);
          return (
            <article className="summary-item" key={item.tag}>
              <div>
                <strong>{info.title}</strong>
                <span>{item.count} 题</span>
              </div>
              <p>{info.plain}</p>
              <button type="button" className="level-action" disabled={done} onClick={() => onRemediate(item.tag)}>
                {done ? `已补救：${info.title}` : `补救：${info.title}`}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
