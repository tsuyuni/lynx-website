import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "sh-flex sh-h-10 sh-w-full sh-items-center sh-justify-between sh-rounded-md sh-border sh-border-input sh-bg-background sh-px-3 sh-py-2 sh-text-sm sh-ring-offset-background placeholder:sh-text-muted-foreground focus:sh-outline-none focus:sh-ring-2 focus:sh-ring-ring focus:sh-ring-offset-2 disabled:sh-cursor-not-allowed disabled:sh-opacity-50 [&>span]:sh-line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="sh-h-4 sh-w-4 sh-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "sh-flex sh-cursor-default sh-items-center sh-justify-center sh-py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="sh-h-4 sh-w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "sh-flex sh-cursor-default sh-items-center sh-justify-center sh-py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="sh-h-4 sh-w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "sh-relative sh-z-50 sh-max-h-96 sh-min-w-[8rem] sh-overflow-hidden sh-rounded-md sh-border sh-bg-popover sh-text-popover-foreground sh-shadow-md data-[state=open]:sh-animate-in data-[state=closed]:sh-animate-out data-[state=closed]:sh-fade-out-0 data-[state=open]:sh-fade-in-0 data-[state=closed]:sh-zoom-out-95 data-[state=open]:sh-zoom-in-95 data-[side=bottom]:sh-slide-in-from-top-2 data-[side=left]:sh-slide-in-from-right-2 data-[side=right]:sh-slide-in-from-left-2 data-[side=top]:sh-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:sh-translate-y-1 data-[side=left]:sh--translate-x-1 data-[side=right]:sh-translate-x-1 data-[side=top]:sh--translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "sh-p-1",
          position === "popper" &&
            "sh-h-[var(--radix-select-trigger-height)] sh-w-full sh-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("sh-py-1.5 sh-pl-8 sh-pr-2 sh-text-sm sh-font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "sh-relative sh-flex sh-w-full sh-cursor-default sh-select-none sh-items-center sh-rounded-sm sh-py-1.5 sh-pl-8 sh-pr-2 sh-text-sm sh-outline-none focus:sh-bg-accent focus:sh-text-accent-foreground data-[disabled]:sh-pointer-events-none data-[disabled]:sh-opacity-50",
      className
    )}
    {...props}
  >
    <span className="sh-absolute sh-left-2 sh-flex sh-h-3.5 sh-w-3.5 sh-items-center sh-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="sh-h-4 sh-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("sh--mx-1 sh-my-1 sh-h-px sh-bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
