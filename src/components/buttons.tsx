import * as React from "react";
import { Button } from "@/components/ui/button";

export function ButtonShowcase() {
  const variants = [
    "default",
    "secondary",
    "destructive",
    "outline",
    "ghost",
    "link",
  ];
  const sizes = ["default", "sm", "lg"];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <Button key={variant} variant={variant as any}>
            {variant}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <Button key={size} size={size as any}>
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
}
