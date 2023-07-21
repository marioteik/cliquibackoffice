"use client";

import { RadioGroup, RadioGroupItem } from "@/components/atoms/RadioGroup";
import { RadioGroupLabel } from "@/components/atoms/RadioGroup/RadioGroupLabel";

export interface RadioSelectOption {
  label: string;
  value: string;
}

interface RadioSelectProps {
  className?: string;
  options: RadioSelectOption[];
  defaultValue?: string;
}

export function RadioSelect({
  className,
  options,
  defaultValue,
}: RadioSelectProps) {
  return (
    <RadioGroup defaultValue={defaultValue} className="flex gap-2">
      {options.map(({ label, value }) => {
        const id = `${label}`.trim().replaceAll(" ", "-");
        return (
          <RadioGroupLabel
            key={value}
            htmlFor={id}
            className="flex flex-col items-center justify-between cursor-pointer rounded-md border-2 border-muted bg-popover py-1 px-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value={value} id={id} className="sr-only" />
            {label}
          </RadioGroupLabel>
        );
      })}
    </RadioGroup>
  );
}
