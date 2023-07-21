"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { cn } from "@/lib/utils";

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  targetSegment: string | null;
  children: React.ReactNode;
}

export default function NavLink({
  children,
  targetSegment,
  className,
  ...props
}: NavLinkProps) {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Link
      className={cn(
        "text-sm font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-9 px-3 rounded-md w-full inline-flex items-center hover:bg-accent hover:text-accent-foreground",
        className,
        activeSegment === targetSegment &&
          "text-white bg-primary hover:bg-primary/75 hover:text-white font-medium"
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
