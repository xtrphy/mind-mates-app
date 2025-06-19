import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-700 animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
