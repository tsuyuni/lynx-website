import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("sh-grid sh-gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "sh-aspect-square sh-h-4 sh-w-4 sh-rounded-full sh-border sh-border-primary sh-text-primary sh-ring-offset-background focus:sh-outline-none focus-visible:sh-ring-2 focus-visible:sh-ring-ring focus-visible:sh-ring-offset-2 disabled:sh-cursor-not-allowed disabled:sh-opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="sh-flex sh-items-center sh-justify-center">
        <Circle className="sh-h-2.5 sh-w-2.5 sh-fill-current sh-text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
