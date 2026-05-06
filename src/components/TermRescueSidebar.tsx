import type { TermCard } from '../types';

interface TermRescueSidebarProps {
  terms: TermCard[];
}

export default function TermRescueSidebar({ terms }: TermRescueSidebarProps) {
  return (
    <aside className="term-sidebar" id="terms" aria-labelledby="terms-title">
      <p className="eyebrow">Term Rescue</p>
      <h2 id="terms-title">术语急救</h2>
      <p className="side-note">卡住时先看人话，不用背定义。</p>
      <div className="term-list">
        {terms.map((term) => (
          <article className="term-card" key={term.id}>
            <h3>{term.term}</h3>
            <dl>
              <dt>一句人话</dt>
              <dd>{term.plain}</dd>
              <dt>它在句子里干嘛</dt>
              <dd>{term.function}</dd>
              <dt>四六级怎么用</dt>
              <dd>{term.examUse}</dd>
              <dt>别学太深</dt>
              <dd>{term.skipForNow}</dd>
            </dl>
          </article>
        ))}
      </div>
    </aside>
  );
}
