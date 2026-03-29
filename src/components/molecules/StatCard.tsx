import type { StatItem } from "@/types/portfolio";

export function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="about-stat-card">
      <div className={`about-stat-value ${stat.tone}`}>{stat.value}</div>
      <div className="about-stat-label">{stat.label}</div>
    </div>
  );
}
