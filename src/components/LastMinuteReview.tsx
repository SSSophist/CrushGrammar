interface LastMinuteReviewProps {
  items: string[];
}

export default function LastMinuteReview({ items }: LastMinuteReviewProps) {
  return (
    <section className="last-review" id="review">
      <p className="eyebrow">2-Minute Review</p>
      <h2>考前最后 2 分钟看这里</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
