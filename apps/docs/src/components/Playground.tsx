import type { ReactNode } from "react";

interface ControlOption {
  type: "select" | "boolean" | "text";
  label: string;
  options?: string[];
}

export interface PlaygroundControls {
  [key: string]: ControlOption;
}

interface PlaygroundProps {
  controls: PlaygroundControls;
  values: Record<string, string | boolean>;
  onChange: (key: string, value: string | boolean) => void;
  children: ReactNode;
}

const containerStyle: React.CSSProperties = {
  border: "1px solid #e0e0e0",
  borderRadius: 12,
  overflow: "hidden",
  background: "#ffffff",
  marginBottom: 32,
};

const previewStyle: React.CSSProperties = {
  padding: "48px 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "repeating-linear-gradient(45deg, #fafafa, #fafafa 10px, #f5f5f5 10px, #f5f5f5 20px)",
  minHeight: 160,
};

const controlsBarStyle: React.CSSProperties = {
  padding: "16px 24px",
  borderTop: "1px solid #e0e0e0",
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
  background: "#ffffff",
};

const controlGroupStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#9e9e9e",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const selectStyle: React.CSSProperties = {
  padding: "4px 8px",
  fontSize: 13,
  border: "1px solid #e0e0e0",
  borderRadius: 6,
  background: "#fff",
  color: "#212121",
  cursor: "pointer",
};

export default function Playground({ controls, values, onChange, children }: PlaygroundProps) {
  return (
    <div style={containerStyle}>
      <div style={previewStyle}>{children}</div>
      <div style={controlsBarStyle}>
        {Object.entries(controls).map(([key, ctrl]) => (
          <div key={key} style={controlGroupStyle}>
            <span style={labelStyle}>{ctrl.label}</span>
            {ctrl.type === "select" && (
              <select
                style={selectStyle}
                value={values[key] as string}
                onChange={(e) => onChange(key, e.target.value)}
              >
                {ctrl.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            )}
            {ctrl.type === "boolean" && (
              <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={values[key] as boolean}
                  onChange={(e) => onChange(key, e.target.checked)}
                />
                <span style={{ fontSize: 13 }}>{values[key] ? "true" : "false"}</span>
              </label>
            )}
            {ctrl.type === "text" && (
              <input
                style={{ ...selectStyle, width: 120 }}
                value={values[key] as string}
                onChange={(e) => onChange(key, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
