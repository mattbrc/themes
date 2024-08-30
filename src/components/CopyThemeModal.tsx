import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface CopyThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  color: string;
}

export default function CopyThemeModal({
  isOpen,
  onClose,
}: CopyThemeModalProps) {
  const { themeColors } = useTheme();

  const themeContent = Object.entries(themeColors)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");

  const fullThemeContent = `:root {\n${themeContent}\n}`;

  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullThemeContent).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          Copy Theme Code
        </h2>
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded overflow-x-auto max-h-96">
          <code className="text-sm dark:text-white">{fullThemeContent}</code>
        </pre>
        <div className="mt-4 flex justify-end gap-4">
          <Button onClick={copyToClipboard} className="flex items-center gap-2">
            {isCopied ? (
              <>
                <Check size={16} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy
              </>
            )}
          </Button>
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
