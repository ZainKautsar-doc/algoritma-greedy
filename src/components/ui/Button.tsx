import * as React from "react"
import { cn } from "../../utils/cn"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-neo text-base font-bold uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-black disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-neo-blue text-white border-[3px] border-neo-black shadow-neo-brutal hover:-translate-y-1 hover:shadow-neo-brutal-lg": variant === "default",
            "bg-white border-[3px] border-neo-black text-neo-black shadow-neo-brutal hover:-translate-y-1 hover:shadow-neo-brutal-lg hover:bg-cream": variant === "outline",
            "hover:bg-neo-yellow text-neo-black border-[3px] border-transparent hover:border-neo-black hover:shadow-neo-brutal hover:-translate-y-1": variant === "ghost",
            "px-6 py-3.5": size === "default",
            "px-4 py-2 text-sm": size === "sm",
            "px-8 py-5 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
