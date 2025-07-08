import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  value,
  onChange,
  ...props
}) {
  // Only use controlled pattern if value prop is explicitly provided AND onChange is provided
  // Otherwise, use uncontrolled pattern for form fields
  const isControlled = value !== undefined && onChange !== undefined;
  
  const inputProps = {
    type,
    "data-slot": "input",
    className: cn(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      className
    ),
    ...props
  };

  // Add value and onChange only if it's a controlled component
  if (isControlled) {
    inputProps.value = value ?? "";
    inputProps.onChange = onChange;
  }
  
  return <input {...inputProps} />;
}

export { Input }
