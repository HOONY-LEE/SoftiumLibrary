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

const sidebarStyle: React.CSSProperties = {
  width: 240,
  minHeight: "100vh",
  background: "#ffffff",
  borderRight: "1px solid #e0e0e0",
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
};

const logoStyle: React.CSSProperties = {
  padding: "24px 20px 16px",
  fontSize: 18,
  fontWeight: 700,
  color: "#2196f3",
  borderBottom: "1px solid #f0f0f0",
  letterSpacing: "-0.3px",
};

const navStyle: React.CSSProperties = {
  padding: "16px 0",
  flex: 1,
};

const groupLabelStyle: React.CSSProperties = {
  padding: "8px 20px 4px",
  fontSize: 11,
  fontWeight: 600,
  color: "#9e9e9e",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
};

function navLinkStyle(active: boolean): React.CSSProperties {
  return {
    display: "block",
    padding: "7px 20px",
    fontSize: 14,
    color: active ? "#2196f3" : "#424242",
    fontWeight: active ? 500 : 400,
    background: active ? "#e3f2fd" : "transparent",
    borderLeft: active ? "2px solid #2196f3" : "2px solid transparent",
    transition: "all 100ms ease",
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={sidebarStyle}>
        <div style={logoStyle}>⬡ Softium UI</div>
        <nav style={navStyle}>
          {NAV_ITEMS.map((item) =>
            "group" in item ? (
              <div key={item.group}>
                <div style={groupLabelStyle}>{item.group}</div>
                {(item.items ?? []).map((sub) => (
                  <NavLink
                    key={sub.path}
                    to={sub.path}
                    style={({ isActive }) => navLinkStyle(isActive)}
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
                style={({ isActive }) => navLinkStyle(isActive)}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
        <div style={{ padding: "16px 20px", fontSize: 12, color: "#bdbdbd", borderTop: "1px solid #f0f0f0" }}>
          v0.1.0
        </div>
      </aside>

      <main style={{ flex: 1, padding: "40px 48px", maxWidth: 900 }}>
        {children}
      </main>
    </div>
  );
}
