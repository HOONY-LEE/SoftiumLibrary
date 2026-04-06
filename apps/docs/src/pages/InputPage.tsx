import { useState } from "react";
import { Input } from "@softium/input";
import type { InputSize, InputVariant } from "@softium/input";
import Playground from "../components/Playground";
import PropsTable from "../components/PropsTable";
import Section from "../components/Section";

const controls = {
  label:      { type: "text" as const,    label: "label" },
  placeholder:{ type: "text" as const,    label: "placeholder" },
  inputSize:  { type: "select" as const,  label: "inputSize",  options: ["sm", "md", "lg"] },
  variant:    { type: "select" as const,  label: "variant",    options: ["outlined", "filled"] },
  helperText: { type: "text" as const,    label: "helperText" },
  error:      { type: "boolean" as const, label: "error" },
  disabled:   { type: "boolean" as const, label: "disabled" },
  fullWidth:  { type: "boolean" as const, label: "fullWidth" },
};

const propRows = [
  { name: "label",          type: "string",                          description: "input 위에 표시되는 라벨" },
  { name: "inputSize",      type: '"sm" | "md" | "lg"',  default: '"md"',      description: "input 크기" },
  { name: "variant",        type: '"outlined" | "filled"',default: '"outlined"',description: "input 스타일 변형" },
  { name: "helperText",     type: "string",                          description: "input 아래 도움말 텍스트" },
  { name: "error",          type: "boolean",              default: "false",     description: "에러 상태 표시" },
  { name: "errorMessage",   type: "string",                          description: "에러 상태일 때 표시되는 메시지" },
  { name: "disabled",       type: "boolean",              default: "false",     description: "비활성화 상태" },
  { name: "fullWidth",      type: "boolean",              default: "false",     description: "부모 너비에 맞게 확장" },
  { name: "startAdornment", type: "ReactNode",                       description: "input 앞에 표시할 요소" },
  { name: "endAdornment",   type: "ReactNode",                       description: "input 뒤에 표시할 요소" },
];

export default function InputPage() {
  const [values, setValues] = useState<Record<string, string | boolean>>({
    label: "Label", placeholder: "Enter text...", inputSize: "md",
    variant: "outlined", helperText: "", error: false, disabled: false, fullWidth: false,
  });

  const handleChange = (key: string, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Input</h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          텍스트 입력 컴포넌트입니다. 라벨, 도움말, 에러 상태를 지원합니다.
        </p>
      </div>

      <Section title="플레이그라운드" description="아래 컨트롤로 props를 변경해 미리보기 하세요.">
        <Playground controls={controls} values={values} onChange={handleChange}>
          <Input
            label={values.label as string}
            placeholder={values.placeholder as string}
            inputSize={values.inputSize as InputSize}
            variant={values.variant as InputVariant}
            helperText={values.helperText as string}
            error={values.error as boolean}
            errorMessage="올바르지 않은 값입니다."
            disabled={values.disabled as boolean}
            fullWidth={values.fullWidth as boolean}
          />
        </Playground>
      </Section>

      <Section title="Variants">
        <div className="flex gap-4 flex-wrap">
          <Input label="Outlined" variant="outlined" placeholder="Outlined" />
          <Input label="Filled" variant="filled" placeholder="Filled" />
        </div>
      </Section>

      <Section title="Sizes">
        <div className="flex gap-4 items-end flex-wrap">
          <Input label="Small" inputSize="sm" placeholder="sm" />
          <Input label="Medium" inputSize="md" placeholder="md" />
          <Input label="Large" inputSize="lg" placeholder="lg" />
        </div>
      </Section>

      <Section title="Helper Text & Error">
        <div className="flex gap-4 flex-wrap">
          <Input label="도움말" placeholder="입력하세요" helperText="이메일 형식으로 입력해주세요." />
          <Input label="에러" placeholder="입력하세요" error errorMessage="올바르지 않은 값입니다." defaultValue="invalid@" />
        </div>
      </Section>

      <Section title="States">
        <div className="flex gap-4 flex-wrap">
          <Input label="Disabled" placeholder="비활성화" disabled />
        </div>
      </Section>

      <Section title="Props">
        <PropsTable rows={propRows} />
      </Section>
    </div>
  );
}
