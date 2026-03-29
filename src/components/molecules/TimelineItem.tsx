import type { TimelineEntry } from "@/types/portfolio";

export function TimelineItem({ item }: { item: TimelineEntry }) {
  return (
    <div className="timeline-item reveal">
      <div className="timeline-dot" />
      <div className="timeline-date">{item.date}</div>
      <div className="timeline-company">{item.company}</div>
      <div className="timeline-role">{item.role}</div>
      <ul className="timeline-desc">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
