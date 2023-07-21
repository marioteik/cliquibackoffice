import { cn } from "@/lib/utils";
import Time from "@/components/atoms/DateAndTime/Time";

export function DateAndTime({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const date = new Date();

  return (
    <div className={cn("flex items-center space-x-4", className)} {...props}>
      <div className="text-sm font-medium text-muted-foreground">
        {date.toLocaleDateString("pt-BR")}
      </div>
      <div className="text-sm font-medium text-muted-foreground">
        <Time />
      </div>
    </div>
  );
}
