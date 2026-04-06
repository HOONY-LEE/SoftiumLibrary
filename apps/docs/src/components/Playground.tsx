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

export default function Playground({ controls, values, onChange, children }: PlaygroundProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white mb-8">
      <div
        className="px-8 py-12 flex items-center justify-center min-h-40"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fafafa, #fafafa 10px, #f5f5f5 10px, #f5f5f5 20px)",
        }}
      >
        {children}
      </div>

      <div className="px-6 py-4 border-t border-gray-200 flex flex-wrap gap-4 bg-white">
        {Object.entries(controls).map(([key, ctrl]) => (
          <div key={key} className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
              {ctrl.label}
            </span>

            {ctrl.type === "select" && (
              <select
                className="px-2 py-1 text-sm border border-gray-200 rounded-md bg-white text-gray-800 cursor-pointer focus:outline-none focus:border-blue-400"
                value={values[key] as string}
                onChange={(e) => onChange(key, e.target.value)}
              >
                {ctrl.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            )}

            {ctrl.type === "boolean" && (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-500"
                  checked={values[key] as boolean}
                  onChange={(e) => onChange(key, e.target.checked)}
                />
                <span className="text-sm text-gray-700">
                  {values[key] ? "true" : "false"}
                </span>
              </label>
            )}

            {ctrl.type === "text" && (
              <input
                className="px-2 py-1 text-sm border border-gray-200 rounded-md bg-white text-gray-800 w-28 focus:outline-none focus:border-blue-400"
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
