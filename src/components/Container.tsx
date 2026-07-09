import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared page container -- keeps a single consistent max-width and horizontal
 * padding across every route so content never floats off-center or overflows.
 */
export function Container({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4 md:px-12", className)} {...props}>
      {children}
    </div>
  );
}
