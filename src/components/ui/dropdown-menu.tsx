import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "sh-flex sh-cursor-default sh-gap-2 sh-select-none sh-items-center sh-rounded-sm sh-px-2 sh-py-1.5 sh-text-sm sh-outline-none focus:sh-bg-accent data-[state=open]:sh-bg-accent [&_svg]:sh-pointer-events-none [&_svg]:sh-size-4 [&_svg]:sh-shrink-0",
      inset && "sh-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="sh-ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "sh-z-50 sh-min-w-[8rem] sh-overflow-hidden sh-rounded-md sh-border sh-bg-popover sh-p-1 sh-text-popover-foreground sh-shadow-lg data-[state=open]:sh-animate-in data-[state=closed]:sh-animate-out data-[state=closed]:sh-fade-out-0 data-[state=open]:sh-fade-in-0 data-[state=closed]:sh-zoom-out-95 data-[state=open]:sh-zoom-in-95 data-[side=bottom]:sh-slide-in-from-top-2 data-[side=left]:sh-slide-in-from-right-2 data-[side=right]:sh-slide-in-from-left-2 data-[side=top]:sh-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "sh-z-50 sh-min-w-[8rem] sh-overflow-hidden sh-rounded-md sh-border sh-bg-popover sh-p-1 sh-text-popover-foreground sh-shadow-md data-[state=open]:sh-animate-in data-[state=closed]:sh-animate-out data-[state=closed]:sh-fade-out-0 data-[state=open]:sh-fade-in-0 data-[state=closed]:sh-zoom-out-95 data-[state=open]:sh-zoom-in-95 data-[side=bottom]:sh-slide-in-from-top-2 data-[side=left]:sh-slide-in-from-right-2 data-[side=right]:sh-slide-in-from-left-2 data-[side=top]:sh-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "sh-relative sh-flex sh-cursor-default sh-select-none sh-items-center sh-gap-2 sh-rounded-sm sh-px-2 sh-py-1.5 sh-text-sm sh-outline-none sh-transition-colors focus:sh-bg-accent focus:sh-text-accent-foreground data-[disabled]:sh-pointer-events-none data-[disabled]:sh-opacity-50 [&_svg]:sh-pointer-events-none [&_svg]:sh-size-4 [&_svg]:sh-shrink-0",
      inset && "sh-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "sh-relative sh-flex sh-cursor-default sh-select-none sh-items-center sh-rounded-sm sh-py-1.5 sh-pl-8 sh-pr-2 sh-text-sm sh-outline-none sh-transition-colors focus:sh-bg-accent focus:sh-text-accent-foreground data-[disabled]:sh-pointer-events-none data-[disabled]:sh-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="sh-absolute sh-left-2 sh-flex sh-h-3.5 sh-w-3.5 sh-items-center sh-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="sh-h-4 sh-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "sh-relative sh-flex sh-cursor-default sh-select-none sh-items-center sh-rounded-sm sh-py-1.5 sh-pl-8 sh-pr-2 sh-text-sm sh-outline-none sh-transition-colors focus:sh-bg-accent focus:sh-text-accent-foreground data-[disabled]:sh-pointer-events-none data-[disabled]:sh-opacity-50",
      className
    )}
    {...props}
  >
    <span className="sh-absolute sh-left-2 sh-flex sh-h-3.5 sh-w-3.5 sh-items-center sh-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="sh-h-2 sh-w-2 sh-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "sh-px-2 sh-py-1.5 sh-text-sm sh-font-semibold",
      inset && "sh-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("sh--mx-1 sh-my-1 sh-h-px sh-bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("sh-ml-auto sh-text-xs sh-tracking-widest sh-opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
