import { useState } from "react";
import { Button } from "@softium/button";
import type { ButtonVariant, ButtonSize, ButtonColor } from "@softium/button";
import Playground from "../components/Playground";
import PropsTable from "../components/PropsTable";
import Section from "../components/Section";

const controls = {
  variant: { type: "select" as const, label: "variant", options: ["filled", "outlined", "ghost"] },
  size: { type: "select" as const, label: "size", options: ["sm", "md", "lg"] },
  color: { type: "select" as const, label: "color", options: ["primary", "neutral", "error", "success"] },
  children: { type: "text" as const, label: "label" },
  loading: { type: "boolean" as const, label: "loading" },
  disabled: { type: "boolean" as const, label: "disabled" },
  fullWidth: { type: "boolean" as const, label: "fullWidth" },
};

const propRows = [
  { name: "variant", type: '"filled" | "outlined" | "ghost"', default: '"filled"', description: "버튼 스타일 변형" },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "버튼 크기" },
  { name: "color", type: '"primary" | "neutral" | "error" | "success"', default: '"primary"', description: "버튼 색상 테마" },
  { name: "loading", type: "boolean", default: "false", description: "로딩 상태 표시" },
  { name: "disabled", type: "boolean", default: "false", description: "비활성화 상태" },
  { name: "fullWidth", type: "boolean", default: "false", description: "부모 너비에 맞게 확장" },
  { name: "startIcon", type: "ReactNode", description: "버튼 앞에 표시할 아이콘" },
  { name: "endIcon", type: "ReactNode", description: "버튼 뒤에 표시할 아이콘" },
];

export default function ButtonPage() {
  const [values, setValues] = useState<Record<string, string | boolean>>({
    variant: "filled",
    size: "md",
    color: "primary",
    children: "Button",
    loading: false,
    disabled: false,
    fullWidth: false,
  });

  const handleChange = (key: string, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#212121", marginBottom: 8 }}>Button</h1>
        <p style={{ fontSize: 15, color: "#616161", lineHeight: 1.6 }}>
          클릭 가능한 버튼 컴포넌트입니다. variant, size, color 조합으로 다양한 스타일을 표현할 수 있습니다.
        </p>
      </div>

      <Section title="플레이그라운드" description="아래 컨트롤로 props를 변경해 미리보기 하세요.">
        <Playground controls={controls} values={values} onChange={handleChange}>
          <Button
            variant={values.variant as ButtonVariant}
            size={values.size as ButtonSize}
            color={values.color as ButtonColor}
            loading={values.loading as boolean}
            disabled={values.disabled as boolean}
            fullWidth={values.fullWidth as boolean}
          >
            {values.children as string}
          </Button>
        </Playground>
      </Section>

      <Section title="Variants">
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button variant="filled">Filled</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Section>

      <Section title="Sizes">
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>

      <Section title="Colors">
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
          <Button color="primary">Primary</Button>
          <Button color="neutral">Neutral</Button>
          <Button color="error">Error</Button>
          <Button color="success">Success</Button>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="neutral">Neutral</Button>
          <Button variant="outlined" color="error">Error</Button>
          <Button variant="outlined" color="success">Success</Button>
        </div>
      </Section>

      <Section title="States">
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Props">
        <PropsTable rows={propRows} />
      </Section>
    </div>
  );
}
