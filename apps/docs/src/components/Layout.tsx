import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { label: "시작하기", path: "/" },
  {
    group: "Components",
    items: [
      { label: "Button", path: "/components/button" },
      { label: "Input", path: "/components/input" },
    ],
  },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 min-h-screen bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
        <div className="px-5 py-6 text-lg font-bold text-blue-500 tracking-tight border-b border-gray-100">
          ⬡ Softium UI
        </div>

        <nav className="flex-1 py-4">
          {NAV_ITEMS.map((item) =>
            "group" in item ? (
              <div key={item.group}>
                <div className="px-5 py-2 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                  {item.group}
                </div>
                {(item.items ?? []).map((sub) => (
                  <NavLink
                    key={sub.path}
                    to={sub.path}
                    className={({ isActive }) =>
                      `block px-5 py-1.5 text-sm transition-all duration-100 border-l-2 ${
                        isActive
                          ? "text-blue-500 font-medium bg-blue-50 border-blue-500"
                          : "text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50"
                      }`
                    }
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  `block px-5 py-1.5 text-sm transition-all duration-100 border-l-2 ${
                    isActive
                      ? "text-blue-500 font-medium bg-blue-50 border-blue-500"
                      : "text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="px-5 py-4 text-xs text-gray-300 border-t border-gray-100">
          v0.1.0
        </div>
      </aside>

      <main className="flex-1 px-12 py-10 max-w-4xl">
        {children}
      </main>
    </div>
  );
}
