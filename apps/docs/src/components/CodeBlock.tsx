import { useState } from "react";

interface CodeBlockProps {
  code: string;
  comment?: string;
}

export default function CodeBlock({ code, comment }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      {comment && (
        <div className="font-mono text-xs text-gray-500 mb-2">{comment}</div>
      )}
      <div className="relative bg-gray-900 rounded-xl px-6 py-4">
        <button
          onClick={handleCopy}
          className={`absolute top-2.5 right-2.5 px-2.5 py-1 text-xs font-medium rounded-md border transition-all duration-150 cursor-pointer ${
            copied
              ? "text-teal-400 border-teal-400 bg-transparent"
              : "text-gray-400 border-gray-600 hover:text-gray-200 hover:border-gray-400 bg-transparent"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <code className="font-mono text-sm text-teal-300">{code}</code>
      </div>
    </div>
  );
}
