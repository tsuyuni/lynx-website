"use client"

import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "sh-flex sh-h-full sh-w-full data-[panel-group-direction=vertical]:sh-flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "sh-relative sh-flex sh-w-px sh-items-center sh-justify-center sh-bg-border after:sh-absolute after:sh-inset-y-0 after:sh-left-1/2 after:sh-w-1 after:sh--translate-x-1/2 focus-visible:sh-outline-none focus-visible:sh-ring-1 focus-visible:sh-ring-ring focus-visible:sh-ring-offset-1 data-[panel-group-direction=vertical]:sh-h-px data-[panel-group-direction=vertical]:sh-w-full data-[panel-group-direction=vertical]:after:sh-left-0 data-[panel-group-direction=vertical]:after:sh-h-1 data-[panel-group-direction=vertical]:after:sh-w-full data-[panel-group-direction=vertical]:after:sh--translate-y-1/2 data-[panel-group-direction=vertical]:after:sh-translate-x-0 [&[data-panel-group-direction=vertical]>div]:sh-rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="sh-z-10 sh-flex sh-h-4 sh-w-3 sh-items-center sh-justify-center sh-rounded-sm sh-border sh-bg-border">
        <GripVertical className="sh-h-2.5 sh-w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
