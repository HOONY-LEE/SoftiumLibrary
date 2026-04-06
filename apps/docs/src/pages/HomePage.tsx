import { useNavigate } from "react-router-dom";
import { Button } from "@softium/button";
import CodeBlock from "../components/CodeBlock";

const PACKAGES = [
  { name: "@softium/core", desc: "테마 시스템, 유틸리티", color: "border-l-violet-500", nameColor: "text-violet-600" },
  { name: "@softium/button", desc: "Button 컴포넌트", color: "border-l-blue-500", nameColor: "text-blue-600", path: "/components/button" },
  { name: "@softium/input", desc: "Input 컴포넌트", color: "border-l-teal-500", nameColor: "text-teal-600", path: "/components/input" },
  { name: "@softium/softium", desc: "전체 re-export 패키지", color: "border-l-red-500", nameColor: "text-red-600" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-12">
        <div className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-3">
          Softium UI
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          나만의 컴포넌트 라이브러리
        </h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-lg mb-6">
          pnpm workspaces + Turborepo 기반의 모노레포 구조로,
          각 컴포넌트를 독립 패키지로 관리하고 npm에 배포할 수 있습니다.
        </p>
        <Button variant="filled" color="primary" onClick={() => navigate("/components/button")}>
          컴포넌트 보기 →
        </Button>
      </div>

      <div className="mb-12">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">패키지 구조</h2>
        <div className="grid grid-cols-2 gap-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              onClick={() => pkg.path && navigate(pkg.path)}
              className={`p-4 border border-gray-200 border-l-4 ${pkg.color} rounded-xl bg-white transition-shadow ${pkg.path ? "cursor-pointer hover:shadow-md" : "cursor-default"}`}
            >
              <div className={`font-mono text-sm font-semibold mb-1 ${pkg.nameColor}`}>
                {pkg.name}
              </div>
              <div className="text-sm text-gray-500">{pkg.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 mb-4">설치</h2>
        <div className="flex flex-col gap-3">
          <CodeBlock comment="# 전체 설치" code="npm install @softium/softium" />
          <CodeBlock comment="# 개별 설치" code="npm install @softium/button @softium/core" />
        </div>
      </div>
    </div>
  );
}
