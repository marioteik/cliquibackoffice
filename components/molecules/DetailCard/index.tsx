import { Activity, ChevronDown, ChevronUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card";

interface DetailCardProps {
  className?: string;
  title: string;
  value: string;
  icon: React.ReactNode;
  percentage: number;
}

export function DetailCard({
  className,
  title,
  percentage,
  value,
  icon,
}: DetailCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-xs text-muted-foreground flex space-x-1">
          <div
            className={`${
              percentage >= 0 ? "text-green-400" : "text-red-400"
            } font-bold flex justify-center items-center`}
          >
            {percentage >= 0 ? (
              <>
                <ChevronUp className="h-4 w-4" />
                {" +"}
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />{" "}
              </>
            )}
            <span>{percentage}%</span>
          </div>

          <span>maior que o período anterior</span>
        </div>
      </CardContent>
    </Card>
  );
}
