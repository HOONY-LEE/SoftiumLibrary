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

export default function PropsTable({ rows }: PropsTableProps) {
  return (
    <table className="w-full text-sm border-collapse mb-8">
      <thead>
        <tr>
          {["Prop", "Type", "Default", "Description"].map((h) => (
            <th
              key={h}
              className="text-left px-3 py-2.5 border-b-2 border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wide"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name} className="border-b border-gray-100 last:border-0">
            <td className="px-3 py-2.5 align-top">
              <code className="font-mono text-xs bg-gray-100 text-rose-600 px-1.5 py-0.5 rounded">
                {row.name}
              </code>
              {row.required && (
                <span className="text-red-500 ml-1 text-xs">*</span>
              )}
            </td>
            <td className="px-3 py-2.5 align-top">
              <code className="font-mono text-xs bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">
                {row.type}
              </code>
            </td>
            <td className="px-3 py-2.5 align-top">
              {row.default ? (
                <code className="font-mono text-xs bg-gray-100 text-rose-600 px-1.5 py-0.5 rounded">
                  {row.default}
                </code>
              ) : (
                <span className="text-gray-300">—</span>
              )}
            </td>
            <td className="px-3 py-2.5 align-top text-gray-600">{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
