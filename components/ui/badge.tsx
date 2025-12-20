import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wide border transition-colors",
  {
    variants: {
      variant: {
        high: `
          bg-red-500/10
          text-red-400
          border-red-500/20
          before:content-['']
          before:w-1 before:h-3.5 before:rounded-sm
          before:bg-red-500
        `,
        medium: `
          bg-amber-500/10
          text-amber-400
          border-amber-500/20
          before:content-['']
          before:w-1 before:h-3.5 before:rounded-sm
          before:bg-amber-500
        `,
        low: `
          bg-emerald-500/10
          text-emerald-400
          border-emerald-500/20
          before:content-['']
          before:w-1 before:h-3.5 before:rounded-sm
          before:bg-emerald-500
        `,
        outline:
          "border-neutral-700 text-neutral-300",
      },
    },
    defaultVariants: {
      variant: "medium",
    },
  }
)


function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
