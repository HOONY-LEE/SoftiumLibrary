import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@softium/input";
import { ThemeProvider } from "@softium/core";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    inputSize: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["outlined", "filled"],
    },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Enter text...",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Input label="Outlined" variant="outlined" placeholder="Outlined" />
      <Input label="Filled" variant="filled" placeholder="Filled" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}>
      <Input label="Small" inputSize="sm" placeholder="Small" />
      <Input label="Medium" inputSize="md" placeholder="Medium" />
      <Input label="Large" inputSize="lg" placeholder="Large" />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    helperText: "We'll never share your email.",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    error: true,
    errorMessage: "Invalid email address",
    value: "not-an-email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    placeholder: "Can't type here",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width",
    placeholder: "Full width input",
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};
