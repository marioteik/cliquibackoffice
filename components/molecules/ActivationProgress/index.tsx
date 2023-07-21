"use client";

import { useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Progress } from "@/components/atoms/Progress";

interface StepProps {
  title: string;
  isCompleted: boolean;
}

const stepsPosition = [6, 31, 51, 71, 100];

function Step({ title, isCompleted }: StepProps) {
  return (
    <div className="flex space-x-2 items-center justify-center last:justify-end first:justify-start">
      {isCompleted ? (
        <CheckCircle className="h-5" />
      ) : (
        <Circle className="h-5" />
      )}
      <h3 className="text-sm font-semibold !mt-0">{title}</h3>
    </div>
  );
}

export function ActivationProgress() {
  const [progress, setProgress] = useState<number>(stepsPosition[0]);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Progress value={progress} className="h-2 col-span-5" />

        <div className="grid gap-5 grid-cols-5">
          <Step
            isCompleted={progress >= stepsPosition[0]}
            title="Contrato Assinado"
          />
          <Step
            isCompleted={progress >= stepsPosition[1]}
            title="Configurar Loja"
          />
          <Step isCompleted={progress >= stepsPosition[2]} title="Ativar" />
          <Step
            isCompleted={progress >= stepsPosition[3]}
            title="Pedido Teste"
          />
          <Step
            isCompleted={progress >= stepsPosition[4]}
            title="Começar a Vender"
          />
        </div>
      </div>
    </div>
  );
}
