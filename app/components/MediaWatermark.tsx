import Image from "next/image"
import { cn } from "@/lib/utils"

type MediaWatermarkProps = {
  className?: string
}

export default function MediaWatermark({ className = "" }: MediaWatermarkProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute bottom-3 left-3 z-20 opacity-80 md:bottom-4 md:left-4",
        className,
      )}
    >
      <Image
        src="/mili-sprinter-transparent.png"
        alt=""
        width={120}
        height={68}
        className="h-auto w-20 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] md:w-28"
      />
    </div>
  )
}
