import type { EducationItem } from "@/types/portfolio";

export function EducationCard({ item }: { item: EducationItem }) {
  return (
    <div className="edu-card reveal">
      <div className="edu-year">{item.year}</div>
      <div className="edu-degree">{item.degree}</div>
      <div className={`edu-stream ${item.streamTone}`}>{item.stream}</div>
      <div className="edu-uni">{item.university}</div>
    </div>
  );
}
