import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  imageClassName,
  sizes = "(max-width: 1024px) 96px, 112px",
  src = "/images/adif-logo-display.png"
}: {
  className?: string;
  imageClassName?: string;
  sizes?: string;
  src?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("focus-ring inline-flex items-center rounded-md", className)}
      aria-label="ADIF Organization home"
    >
      <Image
        src={src}
        alt=""
        width={180}
        height={120}
        priority
        sizes={sizes}
        className={cn("h-14 w-auto shrink-0 object-contain", imageClassName)}
      />
    </Link>
  );
}
