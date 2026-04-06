import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Section({ title, description, children }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-semibold text-gray-900 mb-1.5">{title}</h2>
      {description && (
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">{description}</p>
      )}
      {!description && <div className="mb-4" />}
      {children}
    </section>
  );
}
