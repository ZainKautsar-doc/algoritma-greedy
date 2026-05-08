import * as React from "react"
import { cn } from "../../utils/cn"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border-[3px] border-neo-black bg-white px-4 py-2 text-base font-medium text-neo-black placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-neo-blue transition-all disabled:cursor-not-allowed disabled:opacity-50 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus-visible:shadow-[4px_4px_0px_rgba(0,0,0,1)]",
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
