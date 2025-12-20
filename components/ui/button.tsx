import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",

        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        link:
          "text-primary underline-offset-4 hover:underline",

        /** ✨ ACTUAL PREMIUM ✨ */
        premium:
          `
          bg-[#0F172A] text-[#E5E7EB]
          border border-[#6366F1]/30
          shadow-[0_0_0_1px_rgba(99,102,241,0.15)]
          hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]
          hover:border-[#818CF8]
          hover:-translate-y-[1px]
          active:translate-y-0
          `,
      },

      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  text?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      text,
      onClick,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        onClick={onClick}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {text}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
