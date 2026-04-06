import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Section({ title, description, children }: SectionProps) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: description ? 6 : 16, color: "#212121" }}>
        {title}
      </h2>
      {description && (
        <p style={{ fontSize: 14, color: "#757575", marginBottom: 16, lineHeight: 1.6 }}>
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
