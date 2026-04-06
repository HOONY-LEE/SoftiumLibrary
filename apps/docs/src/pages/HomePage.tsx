import { useNavigate } from "react-router-dom";
import { Button } from "@softium/button";

const PACKAGES = [
  { name: "@softium/core", desc: "테마 시스템, 유틸리티", color: "#7c3aed" },
  { name: "@softium/button", desc: "Button 컴포넌트", color: "#2196f3", path: "/components/button" },
  { name: "@softium/input", desc: "Input 컴포넌트", color: "#00897b", path: "/components/input" },
  { name: "@softium/softium", desc: "전체 re-export 패키지", color: "#e53935" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#2196f3", marginBottom: 8, textTransform: "uppercase", letterSpacing: "1px" }}>
          Softium UI
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 700, color: "#212121", marginBottom: 16, lineHeight: 1.2 }}>
          나만의 컴포넌트 라이브러리
        </h1>
        <p style={{ fontSize: 16, color: "#616161", lineHeight: 1.7, maxWidth: 560, marginBottom: 24 }}>
          pnpm workspaces + Turborepo 기반의 모노레포 구조로,
          각 컴포넌트를 독립 패키지로 관리하고 npm에 배포할 수 있습니다.
        </p>
        <Button variant="filled" color="primary" onClick={() => navigate("/components/button")}>
          컴포넌트 보기 →
        </Button>
      </div>

      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, color: "#424242", marginBottom: 16 }}>패키지 구조</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              onClick={() => pkg.path && navigate(pkg.path)}
              style={{
                padding: "16px 20px",
                border: "1px solid #e0e0e0",
                borderRadius: 10,
                background: "#fff",
                cursor: pkg.path ? "pointer" : "default",
                transition: "box-shadow 150ms",
                borderLeft: `4px solid ${pkg.color}`,
              }}
              onMouseEnter={(e) => {
                if (pkg.path) (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: 13, fontFamily: "monospace", fontWeight: 600, color: pkg.color, marginBottom: 4 }}>
                {pkg.name}
              </div>
              <div style={{ fontSize: 13, color: "#757575" }}>{pkg.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: 16, fontWeight: 600, color: "#424242", marginBottom: 16 }}>설치</h2>
        <div style={{ background: "#1e1e1e", borderRadius: 10, padding: "20px 24px" }}>
          <div style={{ color: "#9e9e9e", fontSize: 12, marginBottom: 12, fontFamily: "monospace" }}>
            # 전체 설치
          </div>
          <code style={{ color: "#80cbc4", fontFamily: "monospace", fontSize: 14 }}>
            npm install @softium/softium
          </code>
          <div style={{ color: "#9e9e9e", fontSize: 12, margin: "16px 0 8px", fontFamily: "monospace" }}>
            # 개별 설치
          </div>
          <code style={{ color: "#80cbc4", fontFamily: "monospace", fontSize: 14 }}>
            npm install @softium/button @softium/core
          </code>
        </div>
      </div>
    </div>
  );
}
