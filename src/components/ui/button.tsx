import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "sh-inline-flex sh-items-center sh-justify-center sh-gap-2 sh-whitespace-nowrap sh-rounded-md sh-text-sm sh-font-medium sh-ring-offset-background sh-transition-colors focus-visible:sh-outline-none focus-visible:sh-ring-2 focus-visible:sh-ring-ring focus-visible:sh-ring-offset-2 disabled:sh-pointer-events-none disabled:sh-opacity-50 [&_svg]:sh-pointer-events-none [&_svg]:sh-size-4 [&_svg]:sh-shrink-0",
  {
    variants: {
      variant: {
        default: "sh-bg-primary sh-text-primary-foreground hover:sh-bg-primary/90",
        destructive:
          "sh-bg-destructive sh-text-destructive-foreground hover:sh-bg-destructive/90",
        outline:
          "sh-border sh-border-input sh-bg-background hover:sh-bg-accent hover:sh-text-accent-foreground",
        secondary:
          "sh-bg-secondary sh-text-secondary-foreground hover:sh-bg-secondary/80",
        ghost: "hover:sh-bg-accent hover:sh-text-accent-foreground",
        link: "sh-text-primary sh-underline-offset-4 hover:sh-underline",
      },
      size: {
        default: "sh-h-10 sh-px-4 sh-py-2",
        sm: "sh-h-9 sh-rounded-md sh-px-3",
        lg: "sh-h-11 sh-rounded-md sh-px-8",
        icon: "sh-h-10 sh-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
