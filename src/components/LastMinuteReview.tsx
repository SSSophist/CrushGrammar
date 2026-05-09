interface LastMinuteReviewProps {
  items: string[];
}

export default function LastMinuteReview({ items }: LastMinuteReviewProps) {
  return (
    <section className="last-review" id="review">
      <p className="eyebrow">Level Summary</p>
      <h2>本关总结</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
