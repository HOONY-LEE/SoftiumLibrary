interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  rows: PropRow[];
}

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: 13,
  marginBottom: 32,
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 12px",
  borderBottom: "2px solid #e0e0e0",
  fontWeight: 600,
  color: "#616161",
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const tdStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid #f0f0f0",
  color: "#424242",
  verticalAlign: "top",
};

const codeStyle: React.CSSProperties = {
  fontFamily: "'Fira Code', 'Cascadia Code', monospace",
  fontSize: 12,
  background: "#f5f5f5",
  padding: "2px 6px",
  borderRadius: 4,
  color: "#c7254e",
};

export default function PropsTable({ rows }: PropsTableProps) {
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Prop</th>
          <th style={thStyle}>Type</th>
          <th style={thStyle}>Default</th>
          <th style={thStyle}>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td style={tdStyle}>
              <code style={codeStyle}>{row.name}</code>
              {row.required && (
                <span style={{ color: "#d32f2f", marginLeft: 4, fontSize: 11 }}>*</span>
              )}
            </td>
            <td style={tdStyle}>
              <code style={{ ...codeStyle, color: "#1976d2", background: "#e3f2fd" }}>
                {row.type}
              </code>
            </td>
            <td style={tdStyle}>
              {row.default ? (
                <code style={codeStyle}>{row.default}</code>
              ) : (
                <span style={{ color: "#bdbdbd" }}>—</span>
              )}
            </td>
            <td style={tdStyle}>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
