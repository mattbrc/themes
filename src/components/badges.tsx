import * as React from "react";
import { Badge } from "@/components/ui/badge";

export function BadgeShowcase() {
  const variants = ["default", "secondary", "destructive", "outline"];

  return (
    <div className="flex flex-wrap gap-2">
      {variants.map((variant) => (
        <Badge key={variant} variant={variant as any}>
          {variant}
        </Badge>
      ))}
    </div>
  );
}
