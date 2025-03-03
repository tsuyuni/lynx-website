import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "sh-flex sh-h-10 sh-w-full sh-rounded-md sh-border sh-border-input sh-bg-background sh-px-3 sh-py-2 sh-text-base sh-ring-offset-background file:sh-border-0 file:sh-bg-transparent file:sh-text-sm file:sh-font-medium file:sh-text-foreground placeholder:sh-text-muted-foreground focus-visible:sh-outline-none focus-visible:sh-ring-2 focus-visible:sh-ring-ring focus-visible:sh-ring-offset-2 disabled:sh-cursor-not-allowed disabled:sh-opacity-50 md:sh-text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
