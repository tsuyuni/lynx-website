"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "sh-inline-flex sh-h-10 sh-items-center sh-justify-center sh-rounded-md sh-bg-muted sh-p-1 sh-text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "sh-inline-flex sh-items-center sh-justify-center sh-whitespace-nowrap sh-rounded-sm sh-px-3 sh-py-1.5 sh-text-sm sh-font-medium sh-ring-offset-background sh-transition-all focus-visible:sh-outline-none focus-visible:sh-ring-2 focus-visible:sh-ring-ring focus-visible:sh-ring-offset-2 disabled:sh-pointer-events-none disabled:sh-opacity-50 data-[state=active]:sh-bg-background data-[state=active]:sh-text-foreground data-[state=active]:sh-shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "sh-mt-2 sh-ring-offset-background focus-visible:sh-outline-none focus-visible:sh-ring-2 focus-visible:sh-ring-ring focus-visible:sh-ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
